const puppeteer = require('puppeteer');
const GenshinDB = require('./src/main.js');
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('./'));

const server = app.listen(port, () => {
	console.log(`Express listening at http://127.0.0.1:${port}`)
})

GenshinDB.setOptions({
	matchAliases: true,
	matchCategories: false,
	verboseCategories: false,
	queryLanguages: ["ChineseSimplified"],
	resultLanguage: "ChineseSimplified"
});


(async () => {
	const names = GenshinDB.characters('names', { matchCategories: true })

	const browser = await puppeteer.launch({
		headless: true,
		args: [
			"--no-sandbox",
			"--disable-setuid-sandbox",
			"--disable-dev-shm-usage"
		]
	});

	const page = await browser.newPage();
	// transform的用法导致宽度不够生成的图有一丢丢问题
	await page.setViewport({
		width: 1920,
		height: 1080,
		deviceScaleFactor: 1.5
	})

	for (const name of names) {
		if (name === '空' || name === '荧') {
			continue;
		}
		const url = `http://127.0.0.1:3000/cards/views/character.html?name=${name}`;
		console.info(url);
		await page.goto(url);
		const htmlElement = await page.$("#app");
		await htmlElement.screenshot({
			path: `cards/output/${name}.jpg`,
			type: 'jpeg',
			quality: 92,
		});
	}

	await page.close();
	await browser.close();
	server.close();
})();
