/**
 * @description Vue.jsを使用した申し込み診断アプリケーション。
 * ユーザーが入力したデータに基づいて、申し込みの重複可否を診断します。
 */
(function () {

  const { createApp, ref, watch, computed, onMounted } = Vue;
  
  
  createApp({
    setup() {
      // データ読み込み状態の管理
      const isLoading = ref(true);
      
      const loadError = ref(false);
      
      const diagnosisData = ref(null);

      const showButton = ref(true);
      
      // フォームデータ
      const grade = ref('');
      
      const age = ref('');
      
      const firstApp = ref({
        type: '',
        organizationType: '',
        venue: ''
      });
      
      const secondApp = ref({
        type: '',
        organizationType: '',
        venue: ''
      });
      
      const diagnosisResult = ref('');
      
      /**
       * JSONデータを読み込む非同期関数
       * @async
       * @function
       * @returns {Promise<void>}
       */
      const loadDiagnosisData = async () => {
        try {
          isLoading.value = true;
          loadError.value = false;
          
          // JSONファイルを読み込む (パスは実際の環境に合わせて調整)
          const response = await fetch('./api/data.json');
          
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          
          // JSONとしてパース
          const data = await response.json();
          diagnosisData.value = data;
          console.log('診断データをロードしました:', diagnosisData.value);
          
        } catch (error) {
          console.error('データの読み込みエラー:', error);
          loadError.value = true;
          
          // エラー時のフォールバックデータ (オプション)
          diagnosisData.value = {
            "diagnosisResults": []
          };
          
        } finally {
          isLoading.value = false;
        }
      };
      
      onMounted(() => {
        loadDiagnosisData();
      });

      /**
       * フォーム全体の変更を監視し、変更されたら診断結果をリセット
       */
      watch(
        [grade, age, firstApp, secondApp],
        () => {
          diagnosisResult.value = '';
          showButton.value = true;
        },
        { deep: true }
      );

      /**
       * 1回目申し込みの選択タイプが変わったときに関連データをリセット
       */
      watch(() => firstApp.value.type, (newType) => {
        if (newType !== '団体') {
          firstApp.value.organizationType = '';
          firstApp.value.venue = '';
        }
      });
      
      /**
       * 2回目申し込みの選択タイプが変わったときに関連データをリセット
       */
      watch(() => secondApp.value.type, (newType) => {
        if (newType !== '団体') {
          secondApp.value.organizationType = '';
          secondApp.value.venue = '';
        }
      });

      // firstAppの監視を追加
      // 団体区分か受験方法区分が選択されたら、団体受験を自動選択
      watch([() => firstApp.value.organizationType, () => firstApp.value.venue], ([newOrgType, newVenue]) => {
        if ((newOrgType && newOrgType !== '') || (newVenue && newVenue !== '')) {
          firstApp.value.type = '団体';
        }
      }, { immediate: true });

      // secondAppの監視を追加
      // 団体区分か受験方法区分が選択されたら、団体受験を自動選択
      watch([() => secondApp.value.organizationType, () => secondApp.value.venue], ([newOrgType, newVenue]) => {
        if ((newOrgType && newOrgType !== '') || (newVenue && newVenue !== '')) {
          secondApp.value.type = '団体';
        }
      }, { immediate: true });

      /**
       * フォームが有効かどうかを判定する算出プロパティ
       * すべての必須項目が入力されているかを確認します
       * @type {import('vue').ComputedRef<boolean>}
       */
      const isFormValid = computed(() => {
        // 基本情報のチェック
        if (!grade.value || !age.value) {
          return false;
        }
        
        // 1つ目の受験
        if (!firstApp.value.type) {
          return false;
        }
        
        // 団体受験の場合は団体区分と受験方法区分も必須
        if (firstApp.value.type === '団体') {
          if (!firstApp.value.organizationType || !firstApp.value.venue) {
            return false;
          }
        }
        
        // 2つ目の受験
        if (!secondApp.value.type) {
          return false;
        }
        
        // 団体受験の場合は団体区分と受験方法区分も必須
        if (secondApp.value.type === '団体') {
          if (!secondApp.value.organizationType || !secondApp.value.venue) {
            return false;
          }
        }
        
        // すべての条件を満たしている場合
        return true;
      });
      
      /**
       * 診断を実行するメソッド
       * フォームデータを基に診断結果を検索して設定します
       * @function
       * @returns {void}
       */
      const diagnose = () => {
        console.log('診断を実行します...');
        
        // 検索条件の作成
        const searchCondition = {
          grade: grade.value,
          ageGroup: age.value,
          firstApplication: {
            type: firstApp.value.type
          },
          secondApplication: {
            type: secondApp.value.type
          }
        };
        
        // 団体受験の場合の追加情報
        if (firstApp.value.type === '団体') {
          searchCondition.firstApplication.organizationType = firstApp.value.organizationType;
          searchCondition.firstApplication.venue = firstApp.value.venue;
        } else if (firstApp.value.type === '個人') {
          searchCondition.firstApplication.venue = '本';
        }
        
        if (secondApp.value.type === '団体') {
          searchCondition.secondApplication.organizationType = secondApp.value.organizationType;
          searchCondition.secondApplication.venue = secondApp.value.venue;
        } else if (secondApp.value.type === '個人') {
          searchCondition.secondApplication.venue = '本';
        }
        
        console.log('検索条件:', searchCondition);
        
        // JSONデータと照合
        const result = findDiagnosisResult(searchCondition);
        
        if (result) {
          console.log('診断結果:', result);
          
          if (result.result === 'OK') {
              diagnosisResult.value = 'ok';
          } else if (result.result === 'NG') {
              // NGの理由IDから対応する診断結果を設定
              if (result.reasonId === 1) {
                  diagnosisResult.value = 'ng01';
              } else if (result.reasonId === 2) {
                  diagnosisResult.value = 'ng02';
              } else if (result.reasonId === 3) {
                  diagnosisResult.value = 'ng03';
              } else if (result.reasonId === 4) {
                  diagnosisResult.value = 'ng04';
              }
          }
          
          console.log('設定された診断結果:', diagnosisResult.value);
          showButton.value = false;

        } else {
          console.log('該当する診断結果が見つかりませんでした');
          alert('該当する診断ケースが見つかりませんでした。入力内容をご確認ください。');
        }
      };
      
      /**
       * 指定された条件に合致する診断結果を検索する関数
       * @function
       * @param {Object} condition - 検索条件
       * @param {string} condition.grade - 級区分
       * @param {string} condition.ageGroup - 年齢区分
       * @param {Object} condition.firstApplication - 1回目申し込み条件
       * @param {Object} condition.secondApplication - 2回目申し込み条件
       * @returns {Object|null} 見つかった診断結果、または見つからない場合はnull
       */
      const findDiagnosisResult = (condition) => {
        if (!diagnosisData.value || !diagnosisData.value.diagnosisResults) {
          return null;
        }
        
        return diagnosisData.value.diagnosisResults.find(item => {
          // 基本条件のチェック
          if (item.grade !== condition.grade || item.ageGroup !== condition.ageGroup) {
            return false;
          }
          
          // 1つ目の受験条件チェック
          const first = item.firstApplication;
          const firstCondition = condition.firstApplication;
          if (first.type !== firstCondition.type || first.venue !== firstCondition.venue) {
            return false;
          }
          
          // 団体受験の場合の追加チェック
          if (first.type === '団体' && first.organizationType !== firstCondition.organizationType) {
            return false;
          }
          
          // 2つ目の受験条件チェック
          const second = item.secondApplication;
          const secondCondition = condition.secondApplication;
          if (second.type !== secondCondition.type || second.venue !== secondCondition.venue) {
            return false;
          }
          
          // 団体受験の場合の追加チェック
          if (second.type === '団体' && second.organizationType !== secondCondition.organizationType) {
            return false;
          }
          
          // すべての条件に一致
          return true;
        });
      };

      // テンプレートで使用するプロパティとメソッドを公開
      return {
        isLoading,
        loadError,
        grade,
        age,
        firstApp,
        secondApp,
        diagnosisResult,
        diagnose,
        isFormValid,
        showButton
      };
    }
  }).mount("#app");
 
})();