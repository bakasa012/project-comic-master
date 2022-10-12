module.exports = {
  launch: {
    headless: false,
    args: ['--window-size=1920,1080'],// ,"--window-position=1921,0",'https://www.chromestatus.com/'
	slowMo: 250,
	defaultViewport: null,
  executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
	// devtools:true,
  // product: 'chrome',
	// executablePath: "C:/Program Files (x86)/Google/Chrome/Application"
  },
  // browser:{
  //   close: true
  // }
//   page:{
// 	setViewport: {width: 1366, height: 768}
//   }
  // browser: 'chromium',
};
