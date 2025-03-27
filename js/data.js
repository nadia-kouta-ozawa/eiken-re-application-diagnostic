
const diagnosisJsonData = {
 "diagnosisPatterns": {
   "ok": [
     {
       "id": 1,
       "name": "重願可能",
       "description": "併願が可能です。"
     }
   ],
   "ng": [
     {
       "id": 1,
       "name": "本-本かぶり",
       "description": "本命校同士の併願はできません。"
     },
     {
       "id": 2,
       "name": "準-準かぶり",
       "description": "準備校同士の併願はできません。"
     },
     {
       "id": 3,
       "name": "二次日程かぶり（A）",
       "description": "二次試験の日程が重複しています（Aパターン）。"
     },
     {
       "id": 4,
       "name": "二次日程かぶり（B）",
       "description": "二次試験の日程が重複しています（Bパターン）。"
     }
   ]
 },
 "diagnosisResults": [
	// 2～3級 20才以下のデータ
   {
     "grade": "2～3級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "B"
     },
     "secondApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "B"
     },
     "result": "NG",
     "reasonId": 1,
     "reasonName": "本-本かぶり"
   },
   {
     "grade": "2～3級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "B"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "A"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "2～3級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "B"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "A"
     },
     "result": "NG",
     "reasonId": 1,
     "reasonName": "本-本かぶり"
   },
   {
     "grade": "2～3級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "B"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "B"
     },
     "result": "NG",
     "reasonId": 4,
     "reasonName": "二次日程かぶり（B）"
   },
   {
     "grade": "2～3級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "B"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "B"
     },
     "result": "NG",
     "reasonId": 1,
     "reasonName": "本-本かぶり"
   },
   {
     "grade": "2～3級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "A"
     },
     "secondApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "B"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "2～3級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "A"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "A"
     },
     "result": "NG",
     "reasonId": 3,
     "reasonName": "二次日程かぶり（A）"
   },
   {
     "grade": "2～3級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "A"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "A"
     },
     "result": "NG",
     "reasonId": 3,
     "reasonName": "二次日程かぶり（A）"
   },
   {
     "grade": "2～3級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "A"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "B"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "2～3級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "A"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "B"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "2～3級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "A"
     },
     "secondApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "B"
     },
     "result": "NG",
     "reasonId": 1,
     "reasonName": "本-本かぶり"
   },
   {
     "grade": "2～3級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "A"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "A"
     },
     "result": "NG",
     "reasonId": 3,
     "reasonName": "二次日程かぶり（A）"
   },
   {
     "grade": "2～3級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "A"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "A"
     },
     "result": "NG",
     "reasonId": 1,
     "reasonName": "本-本かぶり"
   },
   {
     "grade": "2～3級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "A"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "B"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "2～3級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "A"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "B"
     },
     "result": "NG",
     "reasonId": 1,
     "reasonName": "本-本かぶり"
   },
   {
     "grade": "2～3級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "B"
     },
     "secondApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "B"
     },
     "result": "NG",
     "reasonId": 4,
     "reasonName": "二次日程かぶり（B）"
   },
   {
     "grade": "2～3級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "B"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "A"
     },
     "result": "NG",
     "reasonId": 2,
     "reasonName": "準-準かぶり"
   },
   {
     "grade": "2～3級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "B"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "A"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "2～3級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "B"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "B"
     },
     "result": "NG",
     "reasonId": 4,
     "reasonName": "二次日程かぶり（B）"
   },
   {
     "grade": "2～3級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "B"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "B"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "2～3級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "B"
     },
     "secondApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "B"
     },
     "result": "NG",
     "reasonId": 1,
     "reasonName": "本-本かぶり"
   },
   {
     "grade": "2～3級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "B"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "A"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "2～3級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "B"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "A"
     },
     "result": "NG",
     "reasonId": 1,
     "reasonName": "本-本かぶり"
   },
   {
     "grade": "2～3級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "B"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "B"
     },
     "result": "NG",
     "reasonId": 4,
     "reasonName": "二次日程かぶり（B）"
   },
   {
     "grade": "2～3級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "B"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "B"
     },
     "result": "NG",
     "reasonId": 1,
     "reasonName": "本-本かぶり"
   },
   // 2～3級 21才以上のデータ
// 2～3級 21才以上のデータ
   {
     "grade": "2～3級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "B"
     },
     "secondApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "B"
     },
     "result": "NG",
     "reasonId": 1,
     "reasonName": "本-本かぶり"
   },
   {
     "grade": "2～3級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "B"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "A"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "2～3級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "B"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "A"
     },
     "result": "NG",
     "reasonId": 1,
     "reasonName": "本-本かぶり"
   },
   {
     "grade": "2～3級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "B"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "B"
     },
     "result": "NG",
     "reasonId": 4,
     "reasonName": "二次日程かぶり（B）"
   },
   {
     "grade": "2～3級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "B"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "B"
     },
     "result": "NG",
     "reasonId": 1,
     "reasonName": "本-本かぶり"
   },
   {
     "grade": "2～3級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "A"
     },
     "secondApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "B"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "2～3級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "A"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "A"
     },
     "result": "NG",
     "reasonId": 3,
     "reasonName": "二次日程かぶり（A）"
   },
   {
     "grade": "2～3級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "A"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "A"
     },
     "result": "NG",
     "reasonId": 3,
     "reasonName": "二次日程かぶり（A）"
   },
   {
     "grade": "2～3級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "A"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "B"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "2～3級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "A"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "B"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "2～3級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "A"
     },
     "secondApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "B"
     },
     "result": "NG",
     "reasonId": 1,
     "reasonName": "本-本かぶり"
   },
   {
     "grade": "2～3級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "A"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "A"
     },
     "result": "NG",
     "reasonId": 3,
     "reasonName": "二次日程かぶり（A）"
   },
   {
     "grade": "2～3級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "A"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "A"
     },
     "result": "NG",
     "reasonId": 1,
     "reasonName": "本-本かぶり"
   },
   {
     "grade": "2～3級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "A"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "B"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "2～3級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "A"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "B"
     },
     "result": "NG",
     "reasonId": 1,
     "reasonName": "本-本かぶり"
   },
   {
     "grade": "2～3級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "B"
     },
     "secondApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "B"
     },
     "result": "NG",
     "reasonId": 4,
     "reasonName": "二次日程かぶり（B）"
   },
   {
     "grade": "2～3級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "B"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "A"
     },
     "result": "NG",
     "reasonId": 2,
     "reasonName": "準-準かぶり"
   },
   {
     "grade": "2～3級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "B"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "A"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "2～3級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "B"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "B"
     },
     "result": "NG",
     "reasonId": 4,
     "reasonName": "二次日程かぶり（B）"
   },
   {
     "grade": "2～3級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "B"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "B"
     },
     "result": "NG",
     "reasonId": 4,
     "reasonName": "二次日程かぶり（B）"
   },
   {
     "grade": "2～3級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "B"
     },
     "secondApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "B"
     },
     "result": "NG",
     "reasonId": 1,
     "reasonName": "本-本かぶり"
   },
   {
     "grade": "2～3級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "B"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "A"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "2～3級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "B"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "A"
     },
     "result": "NG",
     "reasonId": 1,
     "reasonName": "本-本かぶり"
   },
   {
     "grade": "2～3級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "B"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "B"
     },
     "result": "NG",
     "reasonId": 4,
     "reasonName": "二次日程かぶり（B）"
   },
   {
     "grade": "2～3級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "B"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "B"
     },
     "result": "NG",
     "reasonId": 1,
     "reasonName": "本-本かぶり"
   },
  // 4・5級 20才以下のデータ
   {
     "grade": "4・5級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "-"
     },
     "result": "NG",
     "reasonId": 1,
     "reasonName": "本-本かぶり"
   },
   {
     "grade": "4・5級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "-"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "4・5級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "-"
     },
     "result": "NG",
     "reasonId": 1,
     "reasonName": "本-本かぶり"
   },
   {
     "grade": "4・5級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "-"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "4・5級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "-"
     },
     "result": "NG",
     "reasonId": 1,
     "reasonName": "本-本かぶり"
   },
   {
     "grade": "4・5級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "-"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "4・5級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "-"
     },
     "result": "NG",
     "reasonId": 2,
     "reasonName": "準-準かぶり"
   },
   {
     "grade": "4・5級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "-"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "4・5級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "-"
     },
     "result": "NG",
     "reasonId": 2,
     "reasonName": "準-準かぶり"
   },
   {
     "grade": "4・5級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "-"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "4・5級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "-"
     },
     "result": "NG",
     "reasonId": 1,
     "reasonName": "本-本かぶり"
   },
   {
     "grade": "4・5級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "-"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "4・5級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "-"
     },
     "result": "NG",
     "reasonId": 1,
     "reasonName": "本-本かぶり"
   },
   {
     "grade": "4・5級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "-"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "4・5級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "-"
     },
     "result": "NG",
     "reasonId": 1,
     "reasonName": "本-本かぶり"
   },
   {
     "grade": "4・5級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "-"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "4・5級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "-"
     },
     "result": "NG",
     "reasonId": 2,
     "reasonName": "準-準かぶり"
   },
   {
     "grade": "4・5級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "-"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "4・5級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "-"
     },
     "result": "NG",
     "reasonId": 2,
     "reasonName": "準-準かぶり"
   },
   {
     "grade": "4・5級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "-"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "4・5級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "-"
     },
     "result": "NG",
     "reasonId": 1,
     "reasonName": "本-本かぶり"
   },
   {
     "grade": "4・5級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "-"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "4・5級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "-"
     },
     "result": "NG",
     "reasonId": 1,
     "reasonName": "本-本かぶり"
   },
   {
     "grade": "4・5級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "-"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "4・5級",
     "ageGroup": "20才以下",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "-"
     },
     "result": "NG",
     "reasonId": 1,
     "reasonName": "本-本かぶり"
   },
// 4・5級 21才以上のデータ
   {
     "grade": "4・5級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "-"
     },
     "result": "NG",
     "reasonId": 1,
     "reasonName": "本-本かぶり"
   },
   {
     "grade": "4・5級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "-"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "4・5級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "-"
     },
     "result": "NG",
     "reasonId": 1,
     "reasonName": "本-本かぶり"
   },
   {
     "grade": "4・5級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "-"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "4・5級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "-"
     },
     "result": "NG",
     "reasonId": 1,
     "reasonName": "本-本かぶり"
   },
   {
     "grade": "4・5級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "-"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "4・5級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "-"
     },
     "result": "NG",
     "reasonId": 2,
     "reasonName": "準-準かぶり"
   },
   {
     "grade": "4・5級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "-"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "4・5級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "-"
     },
     "result": "NG",
     "reasonId": 2,
     "reasonName": "準-準かぶり"
   },
   {
     "grade": "4・5級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "-"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "4・5級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "-"
     },
     "result": "NG",
     "reasonId": 1,
     "reasonName": "本-本かぶり"
   },
   {
     "grade": "4・5級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "-"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "4・5級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "-"
     },
     "result": "NG",
     "reasonId": 1,
     "reasonName": "本-本かぶり"
   },
   {
     "grade": "4・5級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "-"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "4・5級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "-"
     },
     "result": "NG",
     "reasonId": 1,
     "reasonName": "本-本かぶり"
   },
   {
     "grade": "4・5級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "-"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "4・5級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "-"
     },
     "result": "NG",
     "reasonId": 2,
     "reasonName": "準-準かぶり"
   },
   {
     "grade": "4・5級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "-"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "4・5級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "-"
     },
     "result": "NG",
     "reasonId": 2,
     "reasonName": "準-準かぶり"
   },
   {
     "grade": "4・5級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "-"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "4・5級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "個人",
       "preference": "本",
       "schedule": "-"
     },
     "result": "NG",
     "reasonId": 1,
     "reasonName": "本-本かぶり"
   },
   {
     "grade": "4・5級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "準",
       "schedule": "-"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "4・5級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "学校",
       "preference": "本",
       "schedule": "-"
     },
     "result": "NG",
     "reasonId": 1,
     "reasonName": "本-本かぶり"
   },
   {
     "grade": "4・5級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "準",
       "schedule": "-"
     },
     "result": "OK",
     "reasonId": 1,
     "reasonName": "重願可能"
   },
   {
     "grade": "4・5級",
     "ageGroup": "21才以上",
     "firstApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "-"
     },
     "secondApplication": {
       "type": "団体",
       "organizationType": "塾",
       "preference": "本",
       "schedule": "-"
     },
     "result": "NG",
     "reasonId": 1,
     "reasonName": "本-本かぶり"
   }
 ]
}