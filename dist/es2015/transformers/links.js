import { appendToHead } from './utils';
export default function (html, transformerCtx, options) {
    const headLinkTags = Array.prototype.slice.call(transformerCtx.document.head.querySelectorAll('link'));
    // copy over any link tags
    for (let i = 0; i < headLinkTags.length; i++) {
        html = appendToHead(html, headLinkTags[i].outerHTML);
    }
    return html;
}
;
