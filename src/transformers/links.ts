import {appendToHead} from './utils';
import {RenderOptions, TransformerContext} from '../interfaces';

export default function(html: string, transformerCtx: TransformerContext, options: RenderOptions) {
  const headLinkTags = Array.prototype.slice.call(transformerCtx.document.head.querySelectorAll('link'));

  // copy over any link tags
  for (let i = 0; i < headLinkTags.length; i++) {
    html = appendToHead(html, headLinkTags[i].outerHTML);
  }

  return html;
};
