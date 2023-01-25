import { b as useRoute, u as useAsyncQuery, a as useHead, d as useState } from './server.mjs';
import { withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderClass, ssrRenderAttr, ssrInterpolate, ssrRenderList, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as _export_sfc } from './_plugin-vue_export-helper-cc2b3d55.mjs';
import { f as filteredVariantPrice, s as stripHTML } from './functions-d0f4cc8f.mjs';
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

var doc$1 = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "mutation", "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "AddToCartInput" } } }, "directives": [] }], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "addToCart" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "input" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "input" } } }], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "cartItem" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "key" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "product" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "databaseId" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "name" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "description" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "type" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "onSale" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "averageRating" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "reviewCount" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "image" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "sourceUrl" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "altText" }, "arguments": [], "directives": [] }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "galleryImages" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "nodes" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "sourceUrl" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "altText" }, "arguments": [], "directives": [] }] } }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "variation" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "databaseId" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "name" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "description" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "type" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "onSale" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "price" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "regularPrice" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "salePrice" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "image" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "sourceUrl" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "altText" }, "arguments": [], "directives": [] }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "attributes" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "nodes" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "id" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "attributeId" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "name" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "value" }, "arguments": [], "directives": [] }] } }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "quantity" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "total" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "subtotal" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "subtotalTax" }, "arguments": [], "directives": [] }] } }] } }] } }], "loc": { "start": 0, "end": 970 } };
doc$1.loc.source = { "body": "mutation($input: AddToCartInput!) {\r\n  addToCart(input: $input) {\r\n    cartItem {\r\n      key\r\n      product {\r\n        id\r\n        databaseId\r\n        name\r\n        description\r\n        type\r\n        onSale\r\n        slug\r\n        averageRating\r\n        reviewCount\r\n        image {\r\n          id\r\n          sourceUrl\r\n          altText\r\n        }\r\n        galleryImages {\r\n          nodes {\r\n            id\r\n            sourceUrl\r\n            altText\r\n          }\r\n        }\r\n      }\r\n      variation {\r\n        id\r\n        databaseId\r\n        name\r\n        description\r\n        type\r\n        onSale\r\n        price\r\n        regularPrice\r\n        salePrice\r\n        image {\r\n          id\r\n          sourceUrl\r\n          altText\r\n        }\r\n        attributes {\r\n          nodes {\r\n            id\r\n            attributeId\r\n            name\r\n            value\r\n          }\r\n        }\r\n      }\r\n      quantity\r\n      total\r\n      subtotal\r\n      subtotalTax\r\n    }\r\n  }\r\n}\r\n", "name": "GraphQL request", "locationOffset": { "line": 1, "column": 1 } };
function collectFragmentReferences$1(node, refs) {
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
      collectFragmentReferences$1(selection, refs);
    });
  }
  if (node.variableDefinitions) {
    node.variableDefinitions.forEach(function(def) {
      collectFragmentReferences$1(def, refs);
    });
  }
  if (node.definitions) {
    node.definitions.forEach(function(def) {
      collectFragmentReferences$1(def, refs);
    });
  }
}
var definitionRefs$1 = {};
(function extractReferences() {
  doc$1.definitions.forEach(function(def) {
    if (def.name) {
      var refs = /* @__PURE__ */ new Set();
      collectFragmentReferences$1(def, refs);
      definitionRefs$1[def.name.value] = refs;
    }
  });
})();
const _sfc_main$2 = {
  __name: "CartAddToCartButton",
  __ssrInlineRender: true,
  props: {
    product: {
      type: [Object]
    }
  },
  setup(__props) {
    const isLoading = useState("isLoading", () => false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-b3c4a6ea><button class="${ssrRenderClass([{ disabled: unref(isLoading) }, "relative w-48 h-12 px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-800"])}" data-v-b3c4a6ea> ADD TO CART `);
      if (unref(isLoading)) {
        _push(`<svg class="absolute -mt-6 -ml-2 animate-spin" width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" data-v-b3c4a6ea><path fill-rule="evenodd" clip-rule="evenodd" d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM4.14355 13.5165C4.85219 17.2096 8.10023 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C8.0886 4 4.83283 6.80704 4.13728 10.5165L6.72824 10.5071C7.37819 8.20738 9.49236 6.52222 12.0001 6.52222C15.0254 6.52222 17.4779 8.9747 17.4779 12C17.4779 15.0253 15.0254 17.4778 12.0001 17.4778C9.49752 17.4778 7.3869 15.7995 6.73228 13.5071L4.14355 13.5165ZM9.52234 12C9.52234 13.3684 10.6317 14.4778 12.0001 14.4778C13.3685 14.4778 14.4779 13.3684 14.4779 12C14.4779 10.6316 13.3685 9.52222 12.0001 9.52222C10.6317 9.52222 9.52234 10.6316 9.52234 12Z" fill="white" data-v-b3c4a6ea></path></svg>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</button></div>`);
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Cart/CartAddToCartButton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-b3c4a6ea"]]);
const _sfc_main$1 = {
  __name: "ProductsSingleProduct",
  __ssrInlineRender: true,
  props: {
    product: {
      type: [Object]
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CartAddToCartButton = __nuxt_component_0;
      if (props.product) {
        _push(`<div${ssrRenderAttrs(_attrs)}><section><div class="container flex flex-wrap items-center pt-4 pb-12 mx-auto"><div class="grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-2">`);
        if (props.product.image !== void 0) {
          _push(`<img id="product-image" class="h-auto p-8 transition duration-500 ease-in-out transform xl:p-2 md:p-2 lg:p-2 hover:grow hover:shadow-lg hover:scale-105"${ssrRenderAttr("alt", props.product.name)}${ssrRenderAttr("src", props.product.image.sourceUrl)}>`);
        } else {
          _push(`<img id="product-image" class="h-auto p-8 transition duration-500 ease-in-out transform xl:p-2 md:p-2 lg:p-2 hover:grow hover:shadow-lg hover:scale-105"${ssrRenderAttr("alt", props.product.name)}${ssrRenderAttr("src", _ctx.process.env.placeholderSmallImage)}>`);
        }
        _push(`<div class="ml-8"><p class="text-3xl font-bold text-left">${ssrInterpolate(props.product.name)}</p>`);
        if (props.product.onSale) {
          _push(`<div class="flex"><p class="pt-1 mt-4 text-3xl text-gray-900">`);
          if (__props.product.variations) {
            _push(`<span>${ssrInterpolate(unref(filteredVariantPrice)(props.product.price))}</span>`);
          } else {
            _push(`<span>${ssrInterpolate(props.product.salePrice)}</span>`);
          }
          _push(`</p><p class="pt-1 pl-8 mt-4 text-2xl text-gray-900 line-through">`);
          if (props.product.variations) {
            _push(`<span>${ssrInterpolate(unref(filteredVariantPrice)(props.product.price, "right"))}</span>`);
          } else {
            _push(`<span>${ssrInterpolate(props.product.regularPrice)}</span>`);
          }
          _push(`</p></div>`);
        } else {
          _push(`<p class="pt-1 mt-4 text-2xl text-gray-900">${ssrInterpolate(props.product.price)}</p>`);
        }
        _push(`<br><p class="pt-1 mt-4 text-2xl text-gray-900">${ssrInterpolate(unref(stripHTML)(props.product.description))}</p>`);
        if (props.product.variations) {
          _push(`<p class="pt-1 mt-4 text-xl text-gray-900"><span class="py-2">Varianter</span><select id="variant" name="variant" class="block w-64 px-6 py-2 bg-white border border-gray-500 rounded-lg focus:outline-none focus:shadow-outline"><!--[-->`);
          ssrRenderList(props.product.variations.nodes, (variation, index) => {
            _push(`<option${ssrRenderAttr("value", variation.databaseId)}${ssrIncludeBooleanAttr(index === 0) ? " selected" : ""}>${ssrInterpolate(variation.name)}</option>`);
          });
          _push(`<!--]--></select></p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="pt-1 mt-2">`);
        _push(ssrRenderComponent(_component_CartAddToCartButton, {
          product: props.product
        }, null, _parent));
        _push(`</div></div></div></div></section></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Products/ProductsSingleProduct.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var doc = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "name": { "kind": "Name", "value": "Product" }, "variableDefinitions": [{ "kind": "VariableDefinition", "variable": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } }, "type": { "kind": "NonNullType", "type": { "kind": "NamedType", "name": { "kind": "Name", "value": "ID" } } }, "directives": [] }], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "product" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "id" }, "value": { "kind": "Variable", "name": { "kind": "Name", "value": "id" } } }, { "kind": "Argument", "name": { "kind": "Name", "value": "idType" }, "value": { "kind": "EnumValue", "value": "DATABASE_ID" } }], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "databaseId" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "averageRating" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "name" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "description" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "onSale" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "image" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "databaseId" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "uri" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "title" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "srcSet" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "sourceUrl" }, "arguments": [], "directives": [] }] } }, { "kind": "InlineFragment", "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "SimpleProduct" } }, "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "price" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "salePrice" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "regularPrice" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "databaseId" }, "arguments": [], "directives": [] }] } }, { "kind": "InlineFragment", "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "VariableProduct" } }, "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "price" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "salePrice" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "regularPrice" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "databaseId" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "paColors" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "nodes" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "name" }, "arguments": [], "directives": [] }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "paSizes" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "nodes" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "name" }, "arguments": [], "directives": [] }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "variations" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "nodes" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "databaseId" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "name" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "stockStatus" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "stockQuantity" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "purchasable" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "onSale" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "salePrice" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "regularPrice" }, "arguments": [], "directives": [] }] } }] } }] } }, { "kind": "InlineFragment", "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "ExternalProduct" } }, "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "price" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "databaseId" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "externalUrl" }, "arguments": [], "directives": [] }] } }, { "kind": "InlineFragment", "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "GroupProduct" } }, "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "products" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "nodes" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "InlineFragment", "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "SimpleProduct" } }, "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "databaseId" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "price" }, "arguments": [], "directives": [] }] } }] } }] } }, { "kind": "Field", "name": { "kind": "Name", "value": "id" }, "arguments": [], "directives": [] }] } }] } }] } }], "loc": { "start": 0, "end": 1109 } };
doc.loc.source = { "body": "query Product($id: ID!) {\r\n  product(id: $id, idType: DATABASE_ID) {\r\n    databaseId\r\n    averageRating\r\n    name\r\n    slug\r\n    description\r\n    onSale\r\n    image {\r\n      databaseId\r\n      uri\r\n      title\r\n      srcSet\r\n      sourceUrl\r\n    }\r\n    ... on SimpleProduct {\r\n      price\r\n      salePrice\r\n      regularPrice\r\n      databaseId\r\n    }\r\n    ... on VariableProduct {\r\n      price\r\n      salePrice\r\n      regularPrice\r\n      databaseId\r\n      paColors {\r\n        nodes {\r\n          name\r\n        }\r\n      }\r\n      paSizes {\r\n        nodes {\r\n          name\r\n        }\r\n      }\r\n      variations {\r\n        nodes {\r\n          databaseId\r\n          name\r\n          stockStatus\r\n          stockQuantity\r\n          purchasable\r\n          onSale\r\n          salePrice\r\n          regularPrice\r\n        }\r\n      }\r\n    }\r\n    ... on ExternalProduct {\r\n      price\r\n      databaseId\r\n      externalUrl\r\n    }\r\n    ... on GroupProduct {\r\n      products {\r\n        nodes {\r\n          ... on SimpleProduct {\r\n            databaseId\r\n            price\r\n          }\r\n        }\r\n      }\r\n      id\r\n    }\r\n  }\r\n}\r\n", "name": "GraphQL request", "locationOffset": { "line": 1, "column": 1 } };
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
(function extractReferences2() {
  doc.definitions.forEach(function(def) {
    if (def.name) {
      var refs = /* @__PURE__ */ new Set();
      collectFragmentReferences(def, refs);
      definitionRefs[def.name.value] = refs;
    }
  });
})();
function findOperation(doc2, name) {
  for (var i = 0; i < doc2.definitions.length; i++) {
    var element = doc2.definitions[i];
    if (element.name && element.name.value == name) {
      return element;
    }
  }
}
function oneQuery(doc2, operationName) {
  var newDoc = {
    kind: doc2.kind,
    definitions: [findOperation(doc2, operationName)]
  };
  if (doc2.hasOwnProperty("loc")) {
    newDoc.loc = doc2.loc;
  }
  var opRefs = definitionRefs[operationName] || /* @__PURE__ */ new Set();
  var allRefs = /* @__PURE__ */ new Set();
  var newRefs = /* @__PURE__ */ new Set();
  opRefs.forEach(function(refName) {
    newRefs.add(refName);
  });
  while (newRefs.size > 0) {
    var prevRefs = newRefs;
    newRefs = /* @__PURE__ */ new Set();
    prevRefs.forEach(function(refName) {
      if (!allRefs.has(refName)) {
        allRefs.add(refName);
        var childRefs = definitionRefs[refName] || /* @__PURE__ */ new Set();
        childRefs.forEach(function(childRef) {
          newRefs.add(childRef);
        });
      }
    });
  }
  allRefs.forEach(function(refName) {
    var op = findOperation(doc2, refName);
    if (op) {
      newDoc.definitions.push(op);
    }
  });
  return newDoc;
}
oneQuery(doc, "Product");
const _sfc_main = {
  __name: "[product]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const variables = { id: route.query.id, slug: route.params.product };
    const { data } = ([__temp, __restore] = withAsyncContext(() => useAsyncQuery(doc, variables)), __temp = await __temp, __restore(), __temp);
    useHead({
      title: route.params.product,
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
      var _a;
      const _component_ProductsSingleProduct = _sfc_main$1;
      const _component_SpinnerLoading = __nuxt_component_1;
      if ((_a = unref(data)) == null ? void 0 : _a.product) {
        _push(`<div${ssrRenderAttrs(_attrs)}>`);
        _push(ssrRenderComponent(_component_ProductsSingleProduct, {
          product: unref(data).product
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/product/[product].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_product_-aca528fb.mjs.map
