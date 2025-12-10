// QuantumultX 百度网页去广告 & 空白占位彻底清理优化版
// Version: B-Enhanced
// 功能：去除推广广告+右侧栏+残留空位+排版紧凑适配PC/Mobile

let body = $response.body;
if (!body) $done({});

// ======== 注入CSS，消除空白广告位 ========= //
const style = `
<style>
/* PC右侧栏与推广模块 */
#content_right,
#con-ar,
#content_right .cr-offset,
#content_right *[class*="ad"],
.ec_ad_results,
.ec_wise_ad,
.ec_tuiguang_premium_tag,
[class*="ec_"],
[class*="ad"],
[data-tuiguang],
[data-click*="ad"] {
    display:none!important;
}

/* 搜索顶部推广块、置顶广告 */
#top-ad,
.result-op,
.EC_mr15,
.ec_tuiguang_premium,
.ads-frs-guess-like,
._recommend,
.ad-block,
.ad-card,
.ad-result,
.ad-top,
.ad-sponsor,
.fed-col,
.brs-item[data-tuiguang] {
    height:0!important;
    margin:0!important;
    padding:0!important;
    display:none!important;
}

/* 内容区域自动拉伸填充右侧空位 */
#content_left,
#container {
    width:auto!important;
    max-width:100%!important;
}

/* 搜索结果间距优化（不挤不空） */
#content_left>* {
    margin-bottom:8px!important;
}

/* 杂项隐藏 */
div[id*="advert"],
div[class*="advert"],
span[class*="ad"],
iframe[src*="ad"] {
    display:none!important;
}

/* 移动端提升视觉紧凑 */
@media (max-width: 768px) {
    .result,
    .c-container {
        margin-bottom:12px!important;
    }
}
</style>
`;

body = body.replace(/<\/head>/, style + "</head>");
$done({ body });