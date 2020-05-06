define(["require", "exports", "./utils"], function (require, exports, utils_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function default_1(html, transformerCtx, options) {
        var headLinkTags = Array.prototype.slice.call(transformerCtx.document.head.querySelectorAll('link'));
        // copy over any link tags
        for (var i = 0; i < headLinkTags.length; i++) {
            html = utils_1.appendToHead(html, headLinkTags[i].outerHTML);
        }
        return html;
    }
    exports.default = default_1;
    ;
});
