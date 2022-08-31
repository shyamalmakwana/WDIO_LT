exports.config = {
    user: process.env.LT_USERNAME || 'YOUR LAMBDATEST USERNAME',
    key: process.env.LT_ACCESS_KEY || 'YOUR LAMBDATEST ACCESS KEY',
    
  
    updateJob: false,
    specs: [
        './test/single_test.js'
    ],
    exclude: [],
    maxInstances: 10,
    capabilities: [{
        browserName: 'Edge',
        version: 'latest',
        platform: 'WIN10',
        enableNetworkThrottling: true,
       
      }],
    services: [
            ['lambdatest', {
                tunnel: false
            }]
        ],
   
    screenshotPath: './errorShots/',
    baseUrl: '',
    waitforTimeout: 10000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    host: 'hub.lambdatest.com',
    port:80,
    
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd'
    }
  
  
  
  }