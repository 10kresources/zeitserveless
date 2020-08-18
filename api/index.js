const lighthouse = require('lighthouse');
const chromeLauncher = require('chrome-launcher');

const chromeFlags = [
  '--disable-gpu',
  '--headless',
  '--no-zygote',
  '--no-sandbox',
  '--headless',
];

const launchChromeAndRunLighthouse = async (url, config) => {    
	const chrome = await chromeLauncher.launch({ chromeFlags });

	const flags = {
		port: chrome.port,
		output: 'json',
	};

	const result = await lighthouse(url, flags, config);
	await chrome.kill();

	return result;
};

module.exports = (req, res) => {    
    const url = 'https://www.lanternpay.com';
    const abc = await x.launchChromeAndRunLighthouse(url);
    res.send(abc);
}