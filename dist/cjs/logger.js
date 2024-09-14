"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = void 0;
const date_fns_1 = require("date-fns");
const locale_1 = require("date-fns/locale");
// ログフォーマット
function formatLog(level, message, meta) {
    // JST
    const timestamp = (0, date_fns_1.format)(new Date(), "yyyy/MM/dd HH:mm:ss.SSS OOO", {
        locale: locale_1.ja,
    });
    // スタックトレース
    const stack = meta.stack || "";
    // ファイル名
    const fileName = stack.split("\n")[2]?.match(/\((.*):\d+:\d+\)/)?.[1] || "unknown";
    // 行番号
    const lineNumber = stack.split("\n")[2]?.match(/:(\d+):\d+\)/)?.[1] || "unknown";
    const lineNumberWithSuffix = lineNumber !== "unknown" ? `${lineNumber}行目` : "unknown";
    // ログメッセージ
    return `[${timestamp}] [${level}] [${fileName}] [${lineNumberWithSuffix}] ${message}`;
}
// ロガーをラップする関数
const wrapLogger = (logger) => {
    return {
        // DEBUGログ
        debug: (msg) => {
            const stack = new Error().stack || "";
            const log = { msg, stack };
            const formattedMessage = formatLog("DEBUG", msg, log);
            logger.debug(formattedMessage);
        },
        // INFOログ
        info: (msg) => {
            const stack = new Error().stack || "";
            const log = { msg, stack };
            const formattedMessage = formatLog("INFO", msg, log);
            logger.log(formattedMessage);
        },
        // ERRORログ
        error: (msg) => {
            const stack = new Error().stack || "";
            const log = { msg, stack };
            const formattedMessage = formatLog("ERROR", msg, log);
            logger.error(formattedMessage);
        },
    };
};
exports.logger = wrapLogger(console);
// ログの出力例
exports.logger.info("INFOログの出力例");
exports.logger.error("ERRORログの出力例");
exports.default = exports.logger;
