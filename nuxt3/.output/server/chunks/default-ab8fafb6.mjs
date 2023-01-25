import { b as buildAssetsURL } from './paths.mjs';
import { _ as __nuxt_component_1, d as useState } from './server.mjs';
import { useSSRContext, computed, mergeProps, unref, withCtx, createVNode, Transition, openBlock, createBlock, createCommentVNode, toDisplayString, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrInterpolate, ssrRenderAttr, ssrRenderClass } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import 'ufo';
import './config.mjs';
import 'destr';
import 'scule';
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

const _imports_0$1 = "" + buildAssetsURL("Cart.0b2f98bc.svg");
const _sfc_main$4 = {
  __name: "LayoutCart",
  __ssrInlineRender: true,
  setup(__props) {
    const cartLength = useState("cartLength", () => 1);
    const subTotal = useState("subTotal", () => "99 kr");
    const remoteError = useState("remoteError", () => false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      if (unref(remoteError)) {
        _push(`<div><span class="text-xl text-red-500">Error fetching cart. Please refresh the page.</span></div>`);
      } else {
        _push(`<div>`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/cart" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(``);
              if (unref(cartLength)) {
                _push2(`<span class="text-xl text-white no-underline lg:text-black is-active"${_scopeId}><img alt="Cart icon" class="h-12 ml-4 lg:ml-2" aria-label="Cart"${ssrRenderAttr("src", _imports_0$1)}${_scopeId}></span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(``);
              if (unref(cartLength)) {
                _push2(`<div${_scopeId}><span class="absolute w-6 h-6 pb-2 ml-16 -mt-12 text-center text-white bg-black rounded-full lg:ml-14"${_scopeId}>${ssrInterpolate(unref(cartLength))}</span><span${_scopeId}>Total: ${ssrInterpolate(unref(subTotal))}</span></div>`);
              } else {
                _push2(`<!---->`);
              }
            } else {
              return [
                createVNode(Transition, { name: "cart" }, {
                  default: withCtx(() => [
                    unref(cartLength) ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "text-xl text-white no-underline lg:text-black is-active"
                    }, [
                      createVNode("img", {
                        alt: "Cart icon",
                        class: "h-12 ml-4 lg:ml-2",
                        "aria-label": "Cart",
                        src: _imports_0$1
                      })
                    ])) : createCommentVNode("", true)
                  ]),
                  _: 1
                }),
                createVNode(Transition, { name: "cart" }, {
                  default: withCtx(() => [
                    unref(cartLength) ? (openBlock(), createBlock("div", { key: 0 }, [
                      createVNode("span", { class: "absolute w-6 h-6 pb-2 ml-16 -mt-12 text-center text-white bg-black rounded-full lg:ml-14" }, toDisplayString(unref(cartLength)), 1),
                      createVNode("span", null, "Total: " + toDisplayString(unref(subTotal)), 1)
                    ])) : createCommentVNode("", true)
                  ]),
                  _: 1
                })
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout/LayoutCart.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = {
  name: "MobileMenu",
  data() {
    return {
      expandedMenu: false,
      firstRender: true
    };
  },
  methods: {
    displayMobileMenu() {
      this.expandedMenu = !this.expandedMenu;
      this.firstRender = false;
    }
  }
};
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_1;
  const _component_LayoutCart = _sfc_main$4;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative" }, _attrs))} data-v-3203287b>`);
  if (!$data.firstRender) {
    _push(`<div class="${ssrRenderClass([{
      animate__fadeInLeft: $data.expandedMenu,
      animate__fadeOutRight: !$data.expandedMenu && !$data.firstRender
    }, "fixed top-0 left-0 w-screen mt-40 bg-white h-full animate__animated z-50"])}" data-v-3203287b><ul data-v-3203287b><li class="text-xl linkStyle" data-v-3203287b>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: "/",
      onClick: $options.displayMobileMenu
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Home `);
        } else {
          return [
            createTextVNode(" Home ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><li class="text-xl linkStyle" data-v-3203287b>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: "/products",
      onClick: $options.displayMobileMenu
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Products `);
        } else {
          return [
            createTextVNode(" Products ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><li class="text-xl linkStyle" data-v-3203287b>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: "/categories",
      onClick: $options.displayMobileMenu
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Categories `);
        } else {
          return [
            createTextVNode(" Categories ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><li class="text-xl linkStyle" data-v-3203287b>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: "/search",
      onClick: $options.displayMobileMenu
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(` Search `);
        } else {
          return [
            createTextVNode(" Search ")
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li><li class="flex justify-center mt-6 text-lg linkStyleCart" data-v-3203287b>`);
    _push(ssrRenderComponent(_component_NuxtLink, {
      to: "/cart",
      onClick: $options.displayMobileMenu
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_LayoutCart, null, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_LayoutCart)
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</li></ul></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="w-5/12 lg:hidden" data-v-3203287b></div><div class="flex flex-row w-2/12 px-2 my-2 lg:hidden" data-v-3203287b><div class="self-center block w-full mr-4" data-v-3203287b><button id="nav-toggle" aria-haspopup="true"${ssrRenderAttr("aria-expanded", $data.expandedMenu)} aria-controls="menu" aria-label="Navigation" class="${ssrRenderClass([{ open: $data.expandedMenu }, "mt-6 burger burger-squeeze"])}" data-v-3203287b><div class="burger-lines" data-v-3203287b></div></button></div></div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout/LayoutMobileMenu.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-3203287b"]]);
const _imports_0 = "" + buildAssetsURL("Logo.447706ce.svg");
const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_LayoutMobileMenu = __nuxt_component_0$1;
  const _component_NuxtLink = __nuxt_component_1;
  const _component_LayoutCart = _sfc_main$4;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-7fb3bb45><header role="banner" class="container flex flex-col justify-center px-0 pt-6 mx-auto mb-6" data-v-7fb3bb45><div class="flex flex-wrap lg:px-4" data-v-7fb3bb45><div class="w-9/12 pr-2 my-2 overflow-hidden lg:w-3/12 md:w-10/12" data-v-7fb3bb45><div class="ml-4 lg:ml-0" data-v-7fb3bb45><img alt="Logo" class="h-20 lg:h-24" aria-label="Nettbutikk logo"${ssrRenderAttr("src", _imports_0)} data-v-7fb3bb45></div></div>`);
  _push(ssrRenderComponent(_component_LayoutMobileMenu, null, null, _parent));
  _push(`<div class="hidden lg:w-1/12 lg:block" data-v-7fb3bb45></div><div id="nav-content" class="hidden w-full mt-4 bg-black lg:w-8/12 lg:block lg:bg-white lg:mt-0 lg:text-right" data-v-7fb3bb45><div class="px-6 lg:px-0 lg:pt-5 xl:pt-7" data-v-7fb3bb45><div data-v-7fb3bb45><nav id="block-main" role="navigation" aria-labelledby="block-main-menu" data-v-7fb3bb45><ul class="items-center justify-end flex-1 pr-4 -mr-4 list-reset lg:flex" data-v-7fb3bb45><li class="inline-block py-2 text-xl font-semibold no-underline lg:text-base lg:px-4" data-v-7fb3bb45>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="text-xl text-white no-underline lg:text-black is-active" data-v-7fb3bb45${_scopeId}> Home </span>`);
      } else {
        return [
          createVNode("span", { class: "text-xl text-white no-underline lg:text-black is-active" }, " Home ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="inline-block py-2 text-xl font-semibold no-underline lg:text-base lg:px-4" data-v-7fb3bb45>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/products" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="text-xl text-white no-underline lg:text-black" data-v-7fb3bb45${_scopeId}>Products</span>`);
      } else {
        return [
          createVNode("span", { class: "text-xl text-white no-underline lg:text-black" }, "Products")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="inline-block py-2 text-xl font-semibold no-underline lg:text-base lg:px-4" data-v-7fb3bb45>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/categories" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="text-xl text-white no-underline lg:text-black is-active" data-v-7fb3bb45${_scopeId}>Categories</span>`);
      } else {
        return [
          createVNode("span", { class: "text-xl text-white no-underline lg:text-black is-active" }, "Categories")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="inline-block py-2 text-xl font-semibold no-underline lg:text-base lg:px-4" data-v-7fb3bb45>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/search" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="text-xl text-white no-underline lg:text-black is-active" data-v-7fb3bb45${_scopeId}>Search</span>`);
      } else {
        return [
          createVNode("span", { class: "text-xl text-white no-underline lg:text-black is-active" }, "Search")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="inline-block py-2 text-xl font-semibold no-underline lg:text-base lg:px-4" data-v-7fb3bb45>`);
  _push(ssrRenderComponent(_component_LayoutCart, { class: "-mr-4" }, null, _parent));
  _push(`</li></ul></nav></div></div></div></div></header></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout/LayoutNavbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-7fb3bb45"]]);
const _sfc_main$1 = {
  __name: "LayoutFooter",
  __ssrInlineRender: true,
  setup(__props) {
    const todayDate = computed(() => (/* @__PURE__ */ new Date()).getFullYear());
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "container mx-auto mt-24" }, _attrs))}><footer class="px-6 text-center bg-white border border-gray-300 rounded-lg shadow-lg"><div class="p-6"> Copyright reserved \xA9 ${ssrInterpolate(unref(todayDate))} Daniel / w3bdesign </div></footer></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Layout/LayoutFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_LayoutNavbar = __nuxt_component_0;
  const _component_LayoutFooter = _sfc_main$1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_LayoutNavbar, null, null, _parent));
  _push(`<div class="container p-4 mx-auto">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent(_component_LayoutFooter, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-ab8fafb6.mjs.map
