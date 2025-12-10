// QuantumultX - 百度广告位清除 & 布局优化脚本
// 作用：去除广告后遗留的空白容器并排版修复，适配PC+移动端

let body = $response.body;

if (!body) $done({});

// 注入 CSS 隐藏广告容器并压缩空位
const style = `
<style>
#content_right, .ec_ad, .ec_tuiguang_premium_tag,.ad-block,[class*="ad"],
.result-op,.EC_mr15,.tuiguang-container,[cmatchid*="ad"]{
  display:none!important;
}
#content_left{width:auto!important;} /* 去右栏自动放大正文 */
#content_left>*{margin-bottom:10px!important;}
div[class*="advert"],div[id*="advert"],[data-tuiguang]{
  display:none!important;
}
/* 避免空白高度保留 */
.ad-result,.ad-top,.ad-card{height:0!important;margin:0!important;padding:0!important;}
</style>
`;

body = body.replace("</head>", style + "</head>");
$done({ body });