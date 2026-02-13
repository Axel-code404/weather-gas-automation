# tenkitool

# Weather Auto Logger (Google Apps Script)

## 📌 概要
Google Apps Script を用いて外部APIから天気情報を取得し、
Googleスプレッドシートへ自動記録するシステムです。

時間主導トリガーを使用し、完全自動化しています。

---

## 🛠 使用技術

- Google Apps Script
- 外部API（wttr.in）
- JSONデータ解析
- Googleスプレッドシート操作
- 時間主導トリガー

---

## ⚙️ 機能

- 天気データ取得
- スプレッドシートへ自動保存
- シート自動生成
- ヘッダー自動追加
- 定期実行設定可能

---

## 📂 ディレクトリ構成

```
weather-gas-automation/
├── README.md
├── src/Code.gs
└── docs/portfolio-description.md
```

---

## 🚀 セットアップ方法

1. Googleスプレッドシートを作成
2. 拡張機能 → Apps Script を開く
3. `Code.gs` の内容を貼り付け
4. トリガー設定（時間主導型）
5. 完了

---

## ⏰ 自動実行設定

Apps Scriptの「トリガー」より、
時間主導型で `fetchWeather` を設定してください。

---

## 📸 動作イメージ

- スプレッドシートに日時・気温・湿度・天気が自動記録されます。

---

## 🧑‍💻 制作意図

外部API連携、データ整形、スプレッドシート操作、
自動化処理の実装スキルを示すために制作しました。
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/ca9cb7f6-31b1-46c1-a6dd-fcb5014cde46" />
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/fb5581bd-6e34-4947-8511-b522986707cf" />


