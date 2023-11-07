module.exports = {
    browsers: [
        "chrome",
    ],
    src: "e2e/**/*.spec.ts",
    reporter: [
        {
            name: "spec",
        },
        {
            name: "spec",
            output: "reports/report.txt",
        }
    ],
    quarantineMode: false,
    debugMode: false,
    debugOnFail: true,
    stopOnFirstFail: true,
    skipJsErrors: true,
    skipUncaughtErrors: true,
    appCommand: "",
    appInitDelay: 7000,
    concurrency: 1,
    selectorTimeout: 5000,
    assertionTimeout: 5000,
    pageLoadTimeout: 3000,
    speed: 0.8,
    disablePageCaching: false,
    developmentMode: false,
    qrCode: false,
    compilerOptions: {
        typescript: {
            configPath: "e2e/tsconfig.e2e.json",
        },
    },
};
