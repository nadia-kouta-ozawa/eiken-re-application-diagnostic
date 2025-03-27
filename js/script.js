(function () {

 const { createApp, ref, watch, computed, onMounted } = Vue;
  
 createApp({
   setup() {
     // 診断データ
     const diagnosisData = ref(null);
     
     // フォームデータ
     const grade = ref('');
     const age = ref('');
     const firstApp = ref({
       type: '',
       organizationType: '',
       preference: ''
     });
     const secondApp = ref({
       type: '',
       organizationType: '',
       preference: ''
     });
     
     // 診断結果の状態
     const diagnosisResult = ref('');
     
     // データの読み込み
     onMounted(async () => {
       try {
         const response = await fetch('./data.json');
         const data = await response.json();
         diagnosisData.value = data;
         console.log('診断データを読み込みました:', data);
       } catch (error) {
         console.error('診断データの読み込みに失敗しました:', error);
       }
     });
     
     // 選択タイプが変わったときに関連データをリセット
     watch(() => firstApp.value.type, (newType) => {
       if (newType !== '団体') {
         // 団体受験から個人受験に変更された場合、団体関連データをリセット
         firstApp.value.organizationType = '';
         firstApp.value.preference = '';
       }
     });
     
     watch(() => secondApp.value.type, (newType) => {
       if (newType !== '団体') {
         // 団体受験から個人受験に変更された場合、団体関連データをリセット
         secondApp.value.organizationType = '';
         secondApp.value.preference = '';
       }
     });
     
     // フォームの入力チェック
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
         if (!firstApp.value.organizationType || !firstApp.value.preference) {
           return false;
         }
       }
       
       // 2つ目の受験
       if (!secondApp.value.type) {
         return false;
       }
       
       // 団体受験の場合は団体区分と受験方法区分も必須
       if (secondApp.value.type === '団体') {
         if (!secondApp.value.organizationType || !secondApp.value.preference) {
           return false;
         }
       }
       
       // すべての条件を満たしている場合
       return true;
     });
     
     // 年齢のフォーマット変換（APIに合わせる）
     const formatAge = (ageValue) => {
       if (ageValue === '20歳以下') {
         return '20才以下';
       } else {
         return '21才以上';
       }
     };
     
     // 診断ロジック - JSONデータと照合
     const diagnose = () => {
       console.log('診断を実行します...');
       
       if (!diagnosisData.value) {
         alert('診断データがまだ読み込まれていません。しばらく待ってから再度お試しください。');
         return;
       }
       
       // 検索条件の作成
       const searchCondition = {
         grade: grade.value,
         ageGroup: formatAge(age.value),
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
         searchCondition.firstApplication.preference = firstApp.value.preference;
       } else if (firstApp.value.type === '個人') {
         // 個人受験の場合も preference が必要（メインコードではハードコードしていたが、JSONによる判定ではそれぞれのケースで異なる可能性がある）
         searchCondition.firstApplication.preference = '本'; // 個人受験は「本」のみを想定
       }
       
       if (secondApp.value.type === '団体') {
         searchCondition.secondApplication.organizationType = secondApp.value.organizationType;
         searchCondition.secondApplication.preference = secondApp.value.preference;
       } else if (secondApp.value.type === '個人') {
         searchCondition.secondApplication.preference = '本'; // 個人受験は「本」のみを想定
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
       } else {
         console.log('該当する診断結果が見つかりませんでした');
         alert('該当する診断ケースが見つかりませんでした。入力内容をご確認ください。');
       }
     };
     
     // 条件に合致する診断結果を検索
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
         if (first.type !== firstCondition.type || first.preference !== firstCondition.preference) {
           return false;
         }
         
         // 団体受験の場合の追加チェック
         if (first.type === '団体' && first.organizationType !== firstCondition.organizationType) {
           return false;
         }
         
         // 2つ目の受験条件チェック
         const second = item.secondApplication;
         const secondCondition = condition.secondApplication;
         if (second.type !== secondCondition.type || second.preference !== secondCondition.preference) {
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

     return {
       grade,
       age,
       firstApp,
       secondApp,
       diagnosisResult,
       diagnose,
       isFormValid
     };
   }
 }).mount("#app");

 
})();
