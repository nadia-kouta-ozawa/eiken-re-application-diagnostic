# eiken-re-application-diagnostic

英検重願診断ページ

---

```bash
使用言語： vue

```

\*\*\* ロジック説明

⭐️ 前提条件

```bash


```

## 詳細設計

| reasonId | 判定 | 理由                | 値   |
| -------- | ---- | ------------------- | ---- |
| 1        | OK   |                     | ok   |
| 1        | NG   | 本-本かぶり         | ng01 |
| 2        | NG   | 準-準かぶり         | ng02 |
| 3        | NG   | 二次日程かぶり（A） | ng03 |
| 4        | NG   | 二次日程かぶり（B） | ng04 |

```bash
# 診断するボタンを押すと
<button type="submit" class="submit-btn" :disabled="!isFormValid">
	診断する
</button>

# jsonデータから検索して、絞り込む
```
