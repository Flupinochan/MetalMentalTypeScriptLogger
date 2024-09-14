import { format } from "date-fns";
import { ja } from "date-fns/locale";
function formatLog(level, message, meta) {
    const timestamp = format(new Date(), "yyyy/MM/dd HH:mm:ss.SSS OOO", {
        locale: ja,
    });
    const stack = meta.stack || "";
    const fileName = stack.split("\n")[2]?.match(/\((.*):\d+:\d+\)/)?.[1] || "unknown";
    const lineNumber = stack.split("\n")[2]?.match(/:(\d+):\d+\)/)?.[1] || "unknown";
    const lineNumberWithSuffix = lineNumber !== "unknown" ? `${lineNumber}行目` : "unknown";
    return `[${timestamp}] [${level}] [${fileName}] [${lineNumberWithSuffix}] ${message}`;
}
const wrapLogger = (logger) => {
    return {
        debug: (msg) => {
            const stack = new Error().stack || "";
            const log = { msg, stack };
            const formattedMessage = formatLog("DEBUG", msg, log);
            logger.debug(formattedMessage);
        },
        info: (msg) => {
            const stack = new Error().stack || "";
            const log = { msg, stack };
            const formattedMessage = formatLog("INFO", msg, log);
            logger.log(formattedMessage);
        },
        error: (msg) => {
            const stack = new Error().stack || "";
            const log = { msg, stack };
            const formattedMessage = formatLog("ERROR", msg, log);
            logger.error(formattedMessage);
        },
    };
};
export const logger = wrapLogger(console);
logger.info("INFOログの出力例");
logger.error("ERRORログの出力例");
export default logger;
//# sourceMappingURL=logger.js.map