// 微信公众号广告清理脚本 by ChatGPT定制优化版

let obj = JSON.parse($response.body);

// 公众号文章广告节点
if (obj.advertisement_info) {
    obj.advertisement_info = []; // 彻底清空广告列表
}

if (obj.appmsgstat) {
    obj.appmsgstat.advertisement_num = 0;
    obj.appmsgstat.show = 0;
}

// 去掉推荐推广卡片
if (obj.related_article_list) {
    obj.related_article_list = [];
}

// 去掉更多好文推广
if (obj.reward_data) {
    obj.reward_data.rewarded = false;
}

$done({ body: JSON.stringify(obj) });