!function(global,document){"use strict";var origin="https://commento.hukum.io";function post(t,e,n){var o=new XMLHttpRequest;o.open("POST",t,!0),o.setRequestHeader("Content-type","application/x-www-form-urlencoded"),o.onload=function(){n(JSON.parse(o.response))},o.send(JSON.stringify(e))}var commentsText=function(t){return(t!=0?t+" ":"")+"Tanggapan"};function tags(t){return document.getElementsByTagName(t)}function attrGet(t,e){var n=t.attributes[e];if(void 0!==n)return n.value}function dataTagsLoad(){for(var scripts=tags("script"),i=0;i<scripts.length;i++)if(scripts[i].src.match(/\/js\/count\.js$/)){var customCommentsText=attrGet(scripts[i],"data-custom-text");void 0!==customCommentsText&&(commentsText=eval(customCommentsText))}}function main(){var o=[],a=[];dataTagsLoad();for(var t=document.getElementsByTagName("a"),e=0;e<t.length;e++){var n=t[e].href;if(void 0===n)return;if((n=n.replace(/^.*\/\/[^\/]+/,"")).endsWith("#commento")){var i=attrGet(t[e],"data-page-id");void 0===i&&(i=n.substr(0,n.indexOf("#commento"))).startsWith("hukumonline.com")&&(i=i.substr("hukumonline.com".length)),o.push(i),a.push(t[e])}}var r={domain:"hukumonline.com",paths:o};post(origin+"/api/comment/count",r,function(t){if(t.success)for(var e=0;e<o.length;e++){var n=0;o[e]in t.commentCounts&&(n=t.commentCounts[o[e]]),a[e].innerText=commentsText(n)}else console.log("[commento] error: "+t.message)})}var initted=!1;function init(){initted||(initted=!0,main(void 0))}var readyLoad=function(){var t=document.readyState;"loading"===t?document.addEventListener("readystatechange",readyLoad):"interactive"===t?init():"complete"===t&&init()};readyLoad()}(window,document);