exports.config = {
    framework: 'mocha',
    mochaOpts: {
      ui: 'bdd',
      require: ['@babel/register'],
      timeout: 1600000,
    },

    specs: [
        './test/specs/Test.js'
    ],

    maxInstances: 1,
    waitforTimeout: 15000000,
    user: process.env.LT_USERNAME || 'YOUR LAMBDATEST USERNAME',
    key: process.env.LT_ACCESS_KEY || 'YOUR LAMBDATEST ACCESS KEY',
    hostname: 'mobile-hub.lambdatest.com',
    path: '/wd/hub',
    connectionRetryTimeout: 60000000,
    // connectionRetryCount: 3,
    services: [
        ['lambdatest', {
            tunnel: true
        }]
    ],
    product: 'appAutomation',
    capabilities: [
      {
        'app': 'lt://APP1016035381697030017421746',
        'appiumVersion': '2.0',
        'platformName' : 'android',
        // 'platformVersion' : '13.0',
        'deviceName' : 'Pixel 7',
        'fullReset' : false,
        'noReset' : false,
        'build': 'moves5',
        'visual': true,
        'console': true,
        'network': 'false',
        'devicelog':true,
        'deviceOrientation': 'PORTRAIT',
        'isRealMobile': true,
        'w3c': true
      }
    ],



//   afterTest: async function (context, { error }) {
//     // if (error) {
//     //     await browser.takeScreenshot();
//     // }

//     // if (!test.passed && browser.options.capabilities['browserName'] === 'chrome') {
//     //     await browser.getLogs('browser').then(async e => {
//     //         console.log(e);

//     //         for (let i = 0; i < e.length; i++) {
//     //             console.log(e[i]);
//     //             if (e[i]['message'].includes('Minified React Error')) {
//     //                 const errors = await getErrorOccurrences('exploreWhitePage');
//     //                 console.log(errors['occurrences']);
//     //                 const newErrorCount = errors['occurrences'] + 1;
//     //                 console.log(newErrorCount);
//     //                 await updateErrorOccurrenceCount('exploreWhitePage', newErrorCount);
//     //             }
//     //         }
//     //     });
//     // }
//     await browser.reloadSession();
// },  
  };
  
