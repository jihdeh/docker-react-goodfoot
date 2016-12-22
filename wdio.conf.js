exports.config = {
    specs: [
        './project-tests/*.test.js'
    ],
    maxInstances: 2,
    capabilities: [{
      maxInstances: 5,
      browserName: 'chrome'
    }],
    sync: true,
    logLevel: 'silent',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: 'http://qumu-vcc.goodfoot.io',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        compilers: ['js:babel-register']
    },
    services: ['selenium-standalone'],
}
