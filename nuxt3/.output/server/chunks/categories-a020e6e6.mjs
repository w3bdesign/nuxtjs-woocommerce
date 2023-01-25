import { u as useAsyncQuery, a as useHead, _ as __nuxt_component_1$1 } from './server.mjs';
import { withAsyncContext, unref, useSSRContext, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as __nuxt_component_1 } from './SpinnerLoading-b1472767.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'destr';
import 'ufo';
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
import './config.mjs';
import 'scule';
import './_plugin-vue_export-helper-cc2b3d55.mjs';

const _sfc_main$1 = {
  __name: "CategoryShowAll",
  __ssrInlineRender: true,
  props: {
    categories: {
      type: [Object]
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_1$1;
      if (props.categories) {
        _push(`<div${ssrRenderAttrs(_attrs)}><section class="container mx-auto bg-white"><div class="grid gap-2 px-2 pt-2 pb-2 lg:px-0 xl:px-0 md:px-0 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 xs:grid-cols-3"><!--[-->`);
        ssrRenderList(props.categories, (nodes) => {
          _push(`<!--[--><!--[-->`);
          ssrRenderList(nodes, (category) => {
            _push(`<!--[-->`);
            if (category.slug !== void 0) {
              _push(`<div>`);
              _push(ssrRenderComponent(_component_NuxtLink, {
                class: "text-black cursor-pointer hover:underline",
                to: {
                  path: "/category/" + category.slug,
                  query: { id: category.id }
                }
              }, {
                default: withCtx((_, _push2, _parent2, _scopeId) => {
                  if (_push2) {
                    _push2(`<div class="p-6 cursor-pointer"${_scopeId}><div class="flex items-center justify-center w-full h-16 text-center border border-gray-300 rounded-lg shadow hover:shadow-outline"${_scopeId}><p class="text-lg"${_scopeId}>${ssrInterpolate(category.name)}</p></div></div>`);
                  } else {
                    return [
                      createVNode("div", { class: "p-6 cursor-pointer" }, [
                        createVNode("div", { class: "flex items-center justify-center w-full h-16 text-center border border-gray-300 rounded-lg shadow hover:shadow-outline" }, [
                          createVNode("p", { class: "text-lg" }, toDisplayString(category.name), 1)
                        ])
                      ])
                    ];
                  }
                }),
                _: 2
              }, _parent));
              _push(`</div>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<!--]-->`);
          });
          _push(`<!--]--><!--]-->`);
        });
        _push(`<!--]--></div></section></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Category/CategoryShowAll.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var doc = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "variableDefinitions": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "productCategories" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "first" }, "value": { "kind": "IntValue", "value": "20" } }], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "nodes" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "databaseId" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "name" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" }, "arguments": [], "directives": [] }] } }] } }] } }], "loc": { "start": 0, "end": 117 } };
doc.loc.source = { "body": "{\r\n  productCategories(first: 20) {\r\n    nodes {\r\n      id\r\n      databaseId\r\n      name\r\n      slug\r\n    }\r\n  }\r\n}\r\n", "name": "GraphQL request", "locationOffset": { "line": 1, "column": 1 } };
function collectFragmentReferences(node, refs) {
  if (node.kind === "FragmentSpread") {
    refs.add(node.name.value);
  } else if (node.kind === "VariableDefinition") {
    var type = node.type;
    if (type.kind === "NamedType") {
      refs.add(type.name.value);
    }
  }
  if (node.selectionSet) {
    node.selectionSet.selections.forEach(function(selection) {
      collectFragmentReferences(selection, refs);
    });
  }
  if (node.variableDefinitions) {
    node.variableDefinitions.forEach(function(def) {
      collectFragmentReferences(def, refs);
    });
  }
  if (node.definitions) {
    node.definitions.forEach(function(def) {
      collectFragmentReferences(def, refs);
    });
  }
}
var definitionRefs = {};
(function extractReferences() {
  doc.definitions.forEach(function(def) {
    if (def.name) {
      var refs = /* @__PURE__ */ new Set();
      collectFragmentReferences(def, refs);
      definitionRefs[def.name.value] = refs;
    }
  });
})();
const _sfc_main = {
  __name: "categories",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const variables = { limit: 5 };
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncQuery(doc, variables)), __temp = await __temp, __restore(), __temp);
    useHead({
      title: "Categories",
      titleTemplate: "%s - Nuxt 3 Woocommerce",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content: "Nuxt 3 Woocommerce"
        }
      ],
      link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CategoryShowAll = _sfc_main$1;
      const _component_SpinnerLoading = __nuxt_component_1;
      if (unref(data).productCategories) {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_component_CategoryShowAll, {
          categories: unref(data).productCategories
        }, null, _parent));
        _push(`</div>`);
      } else {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_component_SpinnerLoading, null, null, _parent));
        _push(`</div>`);
      }
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/categories.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=categories-a020e6e6.mjs.map
