(function () {

 const { createApp, ref, watch, computed } = Vue;
  
 createApp({
   setup() {
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
     
     // 診断ロジック
     const diagnose = () => {
       console.log('診断を実行します...');
       console.log({
         grade: grade.value,
         age: age.value,
         firstApp: firstApp.value,
         secondApp: secondApp.value
       });
       
       // 入力チェックは不要（ボタンが非活性の場合は実行されないため）
       
       // 個人受験の場合は診断をスキップ
       if (firstApp.value.type === '個人' || secondApp.value.type === '個人') {
         alert('この診断は団体受験の併願のみ対応しています。');
         return;
       }
       
       // 以下、診断ロジック
       // 両方が「本」会場の場合
       if (firstApp.value.preference === '本' && secondApp.value.preference === '本') {
         diagnosisResult.value = 'ng01';
         return;
       }
       
       // 両方が「準」会場の場合
       if (firstApp.value.preference === '準' && secondApp.value.preference === '準') {
         diagnosisResult.value = 'ng02';
         return;
       }
       
       // 学校と塾の組み合わせの場合
       if (firstApp.value.organizationType === '学校' && secondApp.value.organizationType === '塾') {
         diagnosisResult.value = 'ng03';
         return;
       }
       
       // 他のケース
       if (age.value === '20歳以下') {
         diagnosisResult.value = 'ng04';
         return;
       }
       
       // すべての条件を通過した場合は併願可能
       diagnosisResult.value = 'ok';
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
