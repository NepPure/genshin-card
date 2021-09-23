# genshin-card

* 数据来自Fork，合并上游后由Github Action 完成之后的事情，比如生成所有角色、武器的资料图（TODO）
* 设计来自https://github.com/SilveryStar/Adachi-BOT

感谢大佬们！

* Data comes from Fork
* Design comes from https://github.com/SilveryStar/Adachi-BOT

Thank you guys!

**完全不会设计！只会缝合！**

## 路线

- [x] 基础角色静态图生成
- [ ] i18n
- [ ] 角色别名
- [ ] 经验值摩拉信息
- [ ] 指定等级、天赋查询
- [ ] 武器信息
- [ ] 料理信息
- [ ] 清单查询

## Hoshino 使用

会考虑动态绘图，先拿静态图用用

```py
import base64
from hoshino import Service, aiorequests, MessageSegment

sv = Service(
    name='原神角色信息',  # 功能名
    visible=True,  # 可见性
    enable_on_default=True,  # 默认启用
    help_='开发中'  # 帮助说明
)


@sv.on_prefix('原神')
async def main(bot, ev):
    text = ev.message.extract_plain_text().strip()
    res = await aiorequests.get(f'https://genshin-card.neptunia.vip/cards/output/{text}.jpg')
    res.raise_for_status()
    img = 'base64://' + base64.b64encode(await res.content).decode()
    await bot.send(ev, MessageSegment.image(img))
```


