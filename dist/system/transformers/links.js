System.register(["./utils"], function (exports_1, context_1) {
    "use strict";
    var utils_1;
    var __moduleName = context_1 && context_1.id;
    function default_1(html, transformerCtx, options) {
        var headLinkTags = Array.prototype.slice.call(transformerCtx.document.head.querySelectorAll('link'));
        // copy over any link tags
        for (var i = 0; i < headLinkTags.length; i++) {
            html = utils_1.appendToHead(html, headLinkTags[i].outerHTML);
        }
        return html;
    }
    exports_1("default", default_1);
    return {
        setters: [
            function (utils_1_1) {
                utils_1 = utils_1_1;
            }
        ],
        execute: function () {
            ;
        }
    };
});
