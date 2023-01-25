import { _ as __nuxt_component_1 } from './server.mjs';
import { f as filteredVariantPrice } from './functions-d0f4cc8f.mjs';
import { withCtx, createVNode, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main = {
  name: "ShowAllProducts",
  props: {
    products: { type: Array, required: true }
  },
  methods: {
    productImage(product) {
      return product.image ? product.image.sourceUrl : process.env.placeholderSmallImage;
    },
    filteredVariantPrice
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_1;
  if ($props.products) {
    _push(`<div${ssrRenderAttrs(_attrs)} data-v-dbfd0cb7><section data-v-dbfd0cb7><div id="product-container" class="flex flex-wrap items-center" data-v-dbfd0cb7><!--[-->`);
    ssrRenderList($props.products, (product) => {
      _push(`<!--[-->`);
      if (product.slug !== void 0) {
        _push(`<div class="flex flex-col mt-6 sm:w1/2 md:w-1/3 lg:1/4 xl:w-1/4" data-v-dbfd0cb7>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "text-black cursor-pointer hover:underline",
          to: {
            path: "/product/" + product.slug,
            query: { id: product.databaseId }
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img id="product-image" class="container mx-auto transition duration-500 ease-in-out transform cursor-pointer lg:w-64 xl:w-64 sm:p-4 hover:scale-110"${ssrRenderAttr("alt", product.name)}${ssrRenderAttr("src", $options.productImage(product))} data-v-dbfd0cb7${_scopeId}><div class="flex justify-center pt-3" data-v-dbfd0cb7${_scopeId}><p class="text-2xl font-bold text-center cursor-pointer" data-v-dbfd0cb7${_scopeId}>${ssrInterpolate(product.name)}</p></div>`);
            } else {
              return [
                createVNode("img", {
                  id: "product-image",
                  class: "container mx-auto transition duration-500 ease-in-out transform cursor-pointer lg:w-64 xl:w-64 sm:p-4 hover:scale-110",
                  alt: product.name,
                  src: $options.productImage(product)
                }, null, 8, ["alt", "src"]),
                createVNode("div", { class: "flex justify-center pt-3" }, [
                  createVNode("p", { class: "text-2xl font-bold text-center cursor-pointer" }, toDisplayString(product.name), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        if (product.onSale) {
          _push(`<div class="flex justify-center mt-2" data-v-dbfd0cb7><div class="text-lg text-gray-900 line-through" data-v-dbfd0cb7>`);
          if (product.variations) {
            _push(`<span data-v-dbfd0cb7>${ssrInterpolate($options.filteredVariantPrice(product.price, "right"))}</span>`);
          } else {
            _push(`<span data-v-dbfd0cb7>${ssrInterpolate(product.regularPrice)}</span>`);
          }
          _push(`</div><div class="ml-4 text-xl text-gray-900" data-v-dbfd0cb7>`);
          if (product.variations) {
            _push(`<span data-v-dbfd0cb7>${ssrInterpolate($options.filteredVariantPrice(product.price))}</span>`);
          } else {
            _push(`<span data-v-dbfd0cb7>${ssrInterpolate(product.salePrice)}</span>`);
          }
          _push(`</div></div>`);
        } else {
          _push(`<div data-v-dbfd0cb7><p class="mt-2 text-xl text-center text-gray-900" data-v-dbfd0cb7>${ssrInterpolate(product.price)}</p></div>`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<!--]-->`);
    });
    _push(`<!--]--></div></section></div>`);
  } else {
    _push(`<!---->`);
  }
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Products/ProductsShowAll.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-dbfd0cb7"]]);

export { __nuxt_component_0 as _ };
//# sourceMappingURL=ProductsShowAll-8152414d.mjs.map
