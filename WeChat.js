/**
 * 微信公众号去广告脚本（无功能破坏，移除广告字段）
 * 适配 getappmsgext + getappmsgad
 */

let body = $response.body;

try {
    let data = JSON.parse(body);

    // 文章广告清理位置
    if (data.advertisement_info) data.advertisement_info = [];
    if (data.advertisement_num) data.advertisement_num = 0;
    if (data.advertisement) delete data.advertisement;

    // 底部推荐广告清理
    if (data.appmsgstat && data.appmsgstat.show) data.appmsgstat.show = 0;
    if (data.related_article_list) data.related_article_list = [];

    // 可能出现的广告字段集合
    const keys = ["advertisement_info", "ad_info", "ad_list", "ad_content", "promote_article_list"];
    keys.forEach(k => { if (data[k]) delete data[k]; });

    body = JSON.stringify(data);
} catch (e) {
    console.log("WeChat ad script error:", e);
}

$done({ body });