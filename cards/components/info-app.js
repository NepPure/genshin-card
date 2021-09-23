const template =
	`<div class="info">
	<InfoBase
		:rarity="data.rarity"
		:name="data.name"
		:id="data.id"
		:title="data.title"
		type="角色"
		:introduce="data.introduce"
		:cover="data.cover"
		:level="data.level"
	></InfoBase>
	<InfoCharacter
		:birthday="data.birthday"
		:element="data.element"
		:constellationName="data.constellationName"
		:cv="data.cv"
		:rarity="data.rarity"
		:mainStat="data.mainStat"
		:mainValue="data.mainValue"
		:baseATK="data.baseATK"
		:ascendCosts="data.ascendCosts"
		:talentCosts="data.talentCosts"
		:constellation="data.constellation"
		:level="data.level"
	></InfoCharacter>
</div>`;

import Vue from "../public/js/vue.js";
import { parseURL } from "../public/js/src.js";
import InfoBase from "./info-base.js";
import InfoWeapon from "./info-weapon.js";
import InfoCharacter from "./info-character.js";

export default Vue.defineComponent({
	name: "InfoApp",
	template,
	components: {
		InfoBase,
		InfoWeapon,
		InfoCharacter
	},
	setup() {
		const urlParams = parseURL(location.search);
		const cankao = {
			"type": "角色",//none
			"cover": "https://genshindb.neppure.vip/contentweb/20210105/2021010519275372324.png",
			"title": "循循守月",
			"id": 10000037,//none
			"name": "甘雨",
			"introduce": "月海亭的秘书，体内流淌着仙兽「麒麟」的血脉。",//description
			"birthday": "12月2日",
			"element": "冰元素",
			"cv": "林簌 | 上田丽奈",//format
			"constellationName": "仙麟座",//constellation
			"rarity": 5,//format
			"mainStat": "暴击伤害",
			"mainValue": "38.4%",
			"baseATK": 335,
			"ascensionMaterials": ["哀叙冰玉碎屑", "哀叙冰玉断片", "哀叙冰玉块", "哀叙冰玉", "极寒之核"],
			"levelUpMaterials": ["清心", "骗骗花蜜", "微光花蜜", "原素花蜜"],
			"talentMaterials": ["「勤劳」的教导", "「勤劳」的指引", "「勤劳」的哲学", "武炼之魂·孤影"],
			"time": "【周二/五/日】",
			"constellations": [
				"二段蓄力命中敌人时，降低敌人15%冰元素抗性，并为甘雨回复2点元素能量。",
				"元素战技可使用次数+1。",
				"元素爆发领域内，敌人受到伤害增加。初始为5%每3秒提升5%，至多提升至25%。敌人离开领域后可持续秒。",
				"施放元素战技后30秒内，可以无蓄力施放一次二段蓄力攻击。"
			]
		}

		const name = decodeURIComponent(urlParams.name);
		let level = parseInt(decodeURIComponent(urlParams.level)) || 90;
		if (level < 1) {
			level = 1;
		} else if (level > 90) {
			level = 90
		}
		const data = GenshinDB.characters(name);
		if (!data) {
			location.href = '../404.html';
			return data;
		}
		const talents = GenshinDB.talents(name);
		const constellation = GenshinDB.constellations(name);
		const stats = data.stats(level);
		const stats1 = data.stats(1);
		data.level = level;
		//处理基础信息
		if (data.images.cover1) {
			data.cover = data.images.cover1.replace('https://uploadstatic-sea.mihoyo.com/', 'https://genshindb.neppure.vip/');

		} else {
			data.cover = '../public/images/item/unknown.png';
		}
		data.introduce = data.description
		data.rarity = parseInt(data.rarity);
		data.cv = `${data.cv.chinese} | ${data.cv.japanese}`;
		data.constellationName = data.constellation;
		data.mainStat = data.substat;
		//处理数值信息
		if (stats.specialized > 1) {
			data.mainValue = stats.specialized.toFixed(0);
		} else {
			//使用百分比展示
			data.mainValue = `${((stats.specialized - stats1.specialized) * 100).toFixed(1)}%`;
		}
		data.baseATK = parseInt(stats.attack.toFixed(0));

		// 养成材料
		data.ascendCosts = data.costs;
		data.talentCosts = talents.costs;
		data.ascensionMaterials = ["哀叙冰玉碎屑", "哀叙冰玉断片", "哀叙冰玉块", "哀叙冰玉", "极寒之核"]
		data.levelUpMaterials = ["清心", "骗骗花蜜", "微光花蜜", "原素花蜜"]
		data.talentMaterials = ["「勤劳」的教导", "「勤劳」的指引", "「勤劳」的哲学", "武炼之魂·孤影"]
		data.time = "";//【周二/五/日】

		//命之座
		data.constellation = constellation;



		function setStyle(colorList) {
			document.documentElement.style.setProperty("--styleInfoColor", colorList[0]);
			document.documentElement.style.setProperty("--backgroundColor", colorList[2]);
			document.documentElement.style.setProperty("--dottedColor", colorList[1]);
		}

		switch (data.rarity) {
			case 5: setStyle([
				"rgb(205, 167, 101)",
				"rgb(211, 200, 187)",
				"rgb(198, 156, 80)"
			]); break;
			case 4: setStyle([
				"rgb(142, 115, 170)",
				"rgb(211, 211, 212)",
				"rgb(72, 83, 101)"
			]); break;
			case 3: setStyle([
				"rgb(98, 191, 218)",
				"rgb(210, 212, 225)",
				"rgb(3, 149, 166)"
			]);
		}

		return {
			data
		}
	}
});