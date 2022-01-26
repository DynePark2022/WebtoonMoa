const winston = require("winston");
const winstonDaily = require("winston-daily-rotate-file");
const appRoot = require("app-root-path");
require("dotenv").config();

const logDir = `${appRoot}/logs`;

const { label, combine, timestamp, printf, colorize, simple } = winston.format;

const logFormat = printf(({ label, level, message, timestamp, stack }) => {
    return `${timestamp} | ${label} | [${level}] ${stack || message}`;
});

// Log Lv.
// error: 0, warning: 1, info: 2, http: 3, verbose: 4, debug: 5, silly: 6

const logger = winston.createLogger({
    format: combine(
        label({ label: "WebtoonMoa" }),
        timestamp({
            format: "YYYY-MM-DD HH:mm:ss",
        }),
        winston.format.errors({ stack: true }),
        logFormat
    ),
    transports: [
        // info level
        new winstonDaily({
            level: "info",
            datePattern: "YYYY-MM-DD",
            dirname: logDir,
            filename: `%DATE%.log`,
            maxFiles: 30,
            zippedArchive: true,
        }),

        // error level
        new winstonDaily({
            level: "error",
            datePattern: "YYYY-MM-DD",
            dirname: logDir,
            filename: `%DATE%.error.log`,
            maxFiles: 30,
            zippedArchive: true,
        }),
    ],
    exceptionHandlers: [
        // uncaughtException
        new winstonDaily({
            level: "error",
            datePattern: "YYYY-MM-DD",
            dirname: logDir,
            filename: `%DATE%.exception.log`,
            maxFiles: 30,
            zippedArchive: true,
        }),
    ],
});

// if dev environment, show console
if (process.env.NODE_ENV !== "production") {
    logger.add(
        new winston.transports.Console({
            format: combine(colorize(), simple()),
        })
    );
}

module.exports = logger;
