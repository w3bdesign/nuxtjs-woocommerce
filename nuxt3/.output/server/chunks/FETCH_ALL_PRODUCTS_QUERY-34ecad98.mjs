var doc = { "kind": "Document", "definitions": [{ "kind": "OperationDefinition", "operation": "query", "variableDefinitions": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "products" }, "arguments": [{ "kind": "Argument", "name": { "kind": "Name", "value": "first" }, "value": { "kind": "IntValue", "value": "24" } }], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "nodes" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "databaseId" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "name" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "onSale" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "slug" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "image" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "sourceUrl" }, "arguments": [], "directives": [] }] } }, { "kind": "InlineFragment", "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "SimpleProduct" } }, "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "databaseId" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "price" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "regularPrice" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "salePrice" }, "arguments": [], "directives": [] }] } }, { "kind": "InlineFragment", "typeCondition": { "kind": "NamedType", "name": { "kind": "Name", "value": "VariableProduct" } }, "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "databaseId" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "price" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "regularPrice" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "salePrice" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "variations" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "nodes" }, "arguments": [], "directives": [], "selectionSet": { "kind": "SelectionSet", "selections": [{ "kind": "Field", "name": { "kind": "Name", "value": "price" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "regularPrice" }, "arguments": [], "directives": [] }, { "kind": "Field", "name": { "kind": "Name", "value": "salePrice" }, "arguments": [], "directives": [] }] } }] } }] } }] } }] } }] } }], "loc": { "start": 0, "end": 520 } };
doc.loc.source = { "body": "{\r\n  products(first: 24) {\r\n    nodes {\r\n      databaseId\r\n      name\r\n      onSale\r\n      slug\r\n      image {\r\n        sourceUrl\r\n      }\r\n      ... on SimpleProduct {\r\n        databaseId\r\n        price\r\n        regularPrice\r\n        salePrice\r\n      }\r\n      ... on VariableProduct {\r\n        databaseId\r\n        price\r\n        regularPrice\r\n        salePrice\r\n        variations {\r\n          nodes {\r\n            price\r\n            regularPrice\r\n            salePrice\r\n          }\r\n        }\r\n      }\r\n    }\r\n  }\r\n}\r\n", "name": "GraphQL request", "locationOffset": { "line": 1, "column": 1 } };
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

export { doc as d };
//# sourceMappingURL=FETCH_ALL_PRODUCTS_QUERY-34ecad98.mjs.map
