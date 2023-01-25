import { u as useAsyncQuery, _ as __nuxt_component_1 } from './server.mjs';
import { useSSRContext, withAsyncContext, unref, mergeProps, withCtx, createVNode } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
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

const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex justify-center" }, _attrs))} data-v-184c62f2>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/checkout",
    class: "button-link"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button data-v-184c62f2${_scopeId}>CHECKOUT</button>`);
      } else {
        return [
          createVNode("button", null, "CHECKOUT")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cart/CartCheckoutButton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-184c62f2"]]);
var doc = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "variableDefinitions": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "cart" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "contents" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "nodes" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "key" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "product" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "databaseId" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "name" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "description" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "type" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "onSale" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "averageRating" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "reviewCount" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "image" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "sourceUrl" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "srcSet" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "altText" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "title" }, "arguments": [], "directives": [] }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "galleryImages" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "nodes" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "sourceUrl" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "srcSet" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "altText" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "title" }, "arguments": [], "directives": [] }] } }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "variation" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "databaseId" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "name" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "description" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "type" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "onSale" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "price" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "regularPrice" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "salePrice" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "image" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "sourceUrl" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "srcSet" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "altText" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "title" }, "arguments": [], "directives": [] }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "attributes" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "nodes" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "name" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "value" }, "arguments": [], "directives": [] }] } }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "quantity" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "total" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "subtotal" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "subtotalTax" }, "arguments": [], "directives": [] }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "appliedCoupons" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "nodes" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "databaseId" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "discountType" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "amount" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "dateExpiry" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "products" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "nodes" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" }, "arguments": [], "directives": [] }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "productCategories" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "nodes" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" }, "arguments": [], "directives": [] }] } }] } }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "subtotal" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "subtotalTax" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "shippingTax" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "shippingTotal" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "total" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "totalTax" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "feeTax" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "feeTotal" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "discountTax" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "discountTotal" }, "arguments": [], "directives": [] }] } }] } }], "loc": { "start": 0, "end": 1602 } };
doc.loc.source = { "body": "{\r\n  cart {\r\n    contents {\r\n      nodes {\r\n        key\r\n        product {\r\n          id\r\n          databaseId\r\n          name\r\n          description\r\n          type\r\n          onSale\r\n          slug\r\n          averageRating\r\n          reviewCount\r\n          image {\r\n            id\r\n            sourceUrl\r\n            srcSet\r\n            altText\r\n            title\r\n          }\r\n          galleryImages {\r\n            nodes {\r\n              id\r\n              sourceUrl\r\n              srcSet\r\n              altText\r\n              title\r\n            }\r\n          }\r\n        }\r\n        variation {\r\n          id\r\n          databaseId\r\n          name\r\n          description\r\n          type\r\n          onSale\r\n          price\r\n          regularPrice\r\n          salePrice\r\n          image {\r\n            id\r\n            sourceUrl\r\n            srcSet\r\n            altText\r\n            title\r\n          }\r\n          attributes {\r\n            nodes {\r\n              id\r\n              name\r\n              value\r\n            }\r\n          }\r\n        }\r\n        quantity\r\n        total\r\n        subtotal\r\n        subtotalTax\r\n      }\r\n    }\r\n    appliedCoupons {\r\n      nodes {\r\n        id\r\n        databaseId\r\n        discountType\r\n        amount\r\n        dateExpiry\r\n        products {\r\n          nodes {\r\n            id\r\n          }\r\n        }\r\n        productCategories {\r\n          nodes {\r\n            id\r\n          }\r\n        }\r\n      }\r\n    }\r\n    subtotal\r\n    subtotalTax\r\n    shippingTax\r\n    shippingTotal\r\n    total\r\n    totalTax\r\n    feeTax\r\n    feeTotal\r\n    discountTax\r\n    discountTotal\r\n  }\r\n}\r\n", "name": "GraphQL request", "locationOffset": { "line": 1, "column": 1 } };
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
const _sfc_main$1 = {
  __name: "CartContents",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncQuery(doc)), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CartCheckoutButton = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-98ea6269>`);
      if (unref(data)) {
        _push(`<div data-v-98ea6269><h1 class="h-10 p-6 text-3xl font-bold text-center" data-v-98ea6269> Cart </h1><section class="mt-10" data-v-98ea6269><!--[-->`);
        ssrRenderList(unref(data).cart.contents.nodes, (products) => {
          _push(`<div class="container mx-auto mt-4 flex-container" data-v-98ea6269><div class="item" data-v-98ea6269><span class="block mt-2 font-extrabold" data-v-98ea6269>Name: <br data-v-98ea6269></span><span class="item-content" data-v-98ea6269>${ssrInterpolate(products.product.name)}</span></div><div class="item" data-v-98ea6269><span class="block mt-2 font-extrabold" data-v-98ea6269>Quantity: <br data-v-98ea6269></span><span class="item-content" data-v-98ea6269>${ssrInterpolate(products.quantity)}</span></div><div class="item" data-v-98ea6269><span class="block mt-2 font-extrabold" data-v-98ea6269>Subtotal: <br data-v-98ea6269></span><span class="item-content" data-v-98ea6269>${ssrInterpolate(products.total)}</span></div></div>`);
        });
        _push(`<!--]--></section></div>`);
      } else {
        _push(`<!---->`);
      }
      if (!unref(data)) {
        _push(`<h2 class="m-4 text-3xl text-center" data-v-98ea6269> Cart is currently empty </h2>`);
      } else {
        _push(`<!---->`);
      }
      if (unref(data)) {
        _push(ssrRenderComponent(_component_CartCheckoutButton, null, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cart/CartContents.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-98ea6269"]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_CartContents = __nuxt_component_0;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_CartContents, { "display-remove": "" }, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/cart.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const cart = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { cart as default };
//# sourceMappingURL=cart-269fd050.mjs.map
