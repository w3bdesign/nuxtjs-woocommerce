import { b as buildAssetsURL } from './paths.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'vue/server-renderer';
import { withAsyncContext, unref, useSSRContext } from 'vue';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { _ as __nuxt_component_0$1 } from './ProductsShowAll-8152414d.mjs';
import { u as useAsyncQuery } from './server.mjs';
import { d as doc } from './FETCH_ALL_PRODUCTS_QUERY-34ecad98.mjs';
import 'ufo';
import './config.mjs';
import 'destr';
import 'scule';
import './functions-d0f4cc8f.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import '@unhead/ssr';
import 'vue-router';
import 'ts-invariant';
import 'zen-observable-ts';
import 'ohash';
import 'cookie-es';
import 'graphql';
import 'optimism';
import '@wry/equality';
import '@wry/trie';
import 'defu';

const _imports_0 = "" + buildAssetsURL("Hero.0c150c12.jpg");
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-2d62f187><img class="mx-auto" alt="Image slider slide #1"${ssrRenderAttr("src", _imports_0)} data-v-2d62f187><div class="flex flex-col items-start justify-center w-full mx-auto tracking-wide lg:w-1/2" data-v-2d62f187><span class="w-full p-4 mt-4 text-center text-white bg-black text-md lg:text-2xl lg:-mt-64" data-v-2d62f187> Modern Interior Sample </span></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Index/IndexHero.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-2d62f187"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const variables = { limit: 5 };
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncQuery(doc, variables)), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_IndexHero = __nuxt_component_0;
      const _component_ProductsShowAll = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_IndexHero, null, null, _parent));
      if (unref(data).products) {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_ProductsShowAll, {
          products: unref(data).products.nodes
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-94d3bc78.mjs.map
