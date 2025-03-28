# eiken-re-application-diagnostic

英検重願診断ページ

---

## 開発環境

```bash

.
├── README.md
├── api
│   ├── data-sample.json                      ・・・・・サンプルデータ
│   └── data.json                             ・・・・・照合データ
├── css
│   └── style.css                             ・・・・・スタイル
├── index.html                                ・・・・・トップページ
└── js
    ├── libs
    │   └── vue
    │       └── 3.5.13
    │           └── vue.global.prod.min.js    ・・・ vueのglobalパッケージ
    └── script.js                             ・・・・・スクリプトファイル


```

判定条件の設定

| reasonId | 判定 | 理由                | 値   |
| -------- | ---- | ------------------- | ---- |
| 1        | OK   |                     | ok   |
| 1        | NG   | 本-本かぶり         | ng01 |
| 2        | NG   | 準-準かぶり         | ng02 |
| 3        | NG   | 二次日程かぶり（A） | ng03 |
| 4        | NG   | 二次日程かぶり（B） | ng04 |
