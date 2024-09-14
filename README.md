# MetalMental Logger

MetalMental Loggerは、JavaScriptにコンパイルされる前のTypeScriptコードのログを出力するライブラリです<br>
https://www.npmjs.com/package/metalmental-logger

## 特徴

- 簡単な設定
- 複数のログレベル（DEBUG、INFO、ERROR）
- TypeScriptコードのログをターミナルに出力

## インストール

```bash
npm install metalmental-logger
```

## 使い方
```typescript
// 任意のファイル (例: app.ts)
import { logger } from 'metalmental-logger';

logger.info("INFOログの出力例");
logger.error("ERRORログの出力例");
```
```bash
[2024/09/14 20:03:40.299 GMT+9] [INFO] [app.ts] [8行目] INFOログの出力例
[2024/09/14 20:03:40.299 GMT+9] [ERROR] [app.ts] [9行目] ERRORログの出力例
```

## ライセンス
MITライセンスで提供されています<br>
詳細はLICENSEファイルを参照してください

## 著者
MetalMental - flupino@metalmental.net