import { _ as y } from './ProductsShowAll.e28b93e2.js'
import { _ } from './SpinnerLoading.f2ae26fa.js'
import {
  k as F,
  o as s,
  c,
  a as S,
  t as h,
  b as u,
  f as p,
  g as P,
  l as x,
  e as b,
  j as w,
  u as C,
} from './entry.2f8d984c.js'
import './functions.9991b9f0.js'
import './_plugin-vue_export-helper.c27b6911.js'
const D = { class: 'container mx-auto' },
  E = { key: 0 },
  I = { class: 'h-10 p-6 text-3xl font-bold text-center' },
  V = S('br', null, null, -1),
  R = { key: 0, class: 'mt-10' },
  T = S(
    'h2',
    { class: 'h-10 text-2xl font-bold text-center' },
    ' No products to display ',
    -1
  ),
  A = [T],
  O = { key: 1 },
  $ = {
    __name: 'CategoryShowProducts',
    props: { products: { type: [Object] } },
    setup(n) {
      const e = n,
        i = F(() => e.products.products.nodes.length === 0)
      return (t, d) => {
        const a = y,
          l = _
        return (
          s(),
          c('div', D, [
            e.products
              ? (s(),
                c('div', E, [
                  S('h1', I, h(e.products.name), 1),
                  V,
                  u(a, { products: e.products.products.nodes }, null, 8, [
                    'products',
                  ]),
                  p(i) ? (s(), c('div', R, A)) : P('', !0),
                ]))
              : (s(), c('div', O, [u(l)])),
          ])
        )
      }
    },
  }
var k = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'ProductsFromCategory' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'id' } },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'ID' } },
          },
          directives: [],
        },
      ],
      directives: [],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'productCategory' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
            ],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'id' },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'name' },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'products' },
                  arguments: [
                    {
                      kind: 'Argument',
                      name: { kind: 'Name', value: 'first' },
                      value: { kind: 'IntValue', value: '50' },
                    },
                  ],
                  directives: [],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'nodes' },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'databaseId' },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'onSale' },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'averageRating' },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'slug' },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'description' },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'image' },
                              arguments: [],
                              directives: [],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'uri' },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'title' },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'srcSet' },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'sourceUrl' },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: 'InlineFragment',
                              typeCondition: {
                                kind: 'NamedType',
                                name: { kind: 'Name', value: 'SimpleProduct' },
                              },
                              directives: [],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'salePrice' },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'regularPrice',
                                    },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'onSale' },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'price' },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'InlineFragment',
                              typeCondition: {
                                kind: 'NamedType',
                                name: {
                                  kind: 'Name',
                                  value: 'VariableProduct',
                                },
                              },
                              directives: [],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'salePrice' },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'regularPrice',
                                    },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'onSale' },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'price' },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'InlineFragment',
                              typeCondition: {
                                kind: 'NamedType',
                                name: {
                                  kind: 'Name',
                                  value: 'ExternalProduct',
                                },
                              },
                              directives: [],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'price' },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'externalUrl',
                                    },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'InlineFragment',
                              typeCondition: {
                                kind: 'NamedType',
                                name: { kind: 'Name', value: 'GroupProduct' },
                              },
                              directives: [],
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'products' },
                                    arguments: [],
                                    directives: [],
                                    selectionSet: {
                                      kind: 'SelectionSet',
                                      selections: [
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'nodes',
                                          },
                                          arguments: [],
                                          directives: [],
                                          selectionSet: {
                                            kind: 'SelectionSet',
                                            selections: [
                                              {
                                                kind: 'InlineFragment',
                                                typeCondition: {
                                                  kind: 'NamedType',
                                                  name: {
                                                    kind: 'Name',
                                                    value: 'SimpleProduct',
                                                  },
                                                },
                                                directives: [],
                                                selectionSet: {
                                                  kind: 'SelectionSet',
                                                  selections: [
                                                    {
                                                      kind: 'Field',
                                                      name: {
                                                        kind: 'Name',
                                                        value: 'id',
                                                      },
                                                      arguments: [],
                                                      directives: [],
                                                    },
                                                    {
                                                      kind: 'Field',
                                                      name: {
                                                        kind: 'Name',
                                                        value: 'price',
                                                      },
                                                      arguments: [],
                                                      directives: [],
                                                    },
                                                  ],
                                                },
                                              },
                                            ],
                                          },
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
  loc: { start: 0, end: 987 },
}
k.loc.source = {
  body: `query ProductsFromCategory($id: ID!) {\r
  productCategory(id: $id) {\r
    id\r
    name\r
    products(first: 50) {\r
      nodes {\r
        id\r
        databaseId\r
        onSale\r
        averageRating\r
        slug\r
        description\r
        image {\r
          id\r
          uri\r
          title\r
          srcSet\r
          sourceUrl\r
        }\r
        name\r
        ... on SimpleProduct {\r
          salePrice\r
          regularPrice\r
          onSale\r
          price\r
          id\r
        }\r
        ... on VariableProduct {\r
          salePrice\r
          regularPrice\r
          onSale\r
          price\r
          id\r
        }\r
        ... on ExternalProduct {\r
          price\r
          id\r
          externalUrl\r
        }\r
        ... on GroupProduct {\r
          products {\r
            nodes {\r
              ... on SimpleProduct {\r
                id\r
                price\r
              }\r
            }\r
          }\r
          id\r
        }\r
      }\r
    }\r
  }\r
}\r
`,
  name: 'GraphQL request',
  locationOffset: { line: 1, column: 1 },
}
function m(n, e) {
  if (n.kind === 'FragmentSpread') e.add(n.name.value)
  else if (n.kind === 'VariableDefinition') {
    var i = n.type
    i.kind === 'NamedType' && e.add(i.name.value)
  }
  n.selectionSet &&
    n.selectionSet.selections.forEach(function (t) {
      m(t, e)
    }),
    n.variableDefinitions &&
      n.variableDefinitions.forEach(function (t) {
        m(t, e)
      }),
    n.definitions &&
      n.definitions.forEach(function (t) {
        m(t, e)
      })
}
var g = {}
;(function () {
  k.definitions.forEach(function (e) {
    if (e.name) {
      var i = new Set()
      m(e, i), (g[e.name.value] = i)
    }
  })
})()
function N(n, e) {
  for (var i = 0; i < n.definitions.length; i++) {
    var t = n.definitions[i]
    if (t.name && t.name.value == e) return t
  }
}
function q(n, e) {
  var i = { kind: n.kind, definitions: [N(n, e)] }
  n.hasOwnProperty('loc') && (i.loc = n.loc)
  var t = g[e] || new Set(),
    d = new Set(),
    a = new Set()
  for (
    t.forEach(function (r) {
      a.add(r)
    });
    a.size > 0;

  ) {
    var l = a
    ;(a = new Set()),
      l.forEach(function (r) {
        if (!d.has(r)) {
          d.add(r)
          var o = g[r] || new Set()
          o.forEach(function (v) {
            a.add(v)
          })
        }
      })
  }
  return (
    d.forEach(function (r) {
      var o = N(n, r)
      o && i.definitions.push(o)
    }),
    i
  )
}
q(k, 'ProductsFromCategory')
const U = { key: 0 },
  B = { key: 1 },
  z = {
    __name: '[category]',
    async setup(n) {
      let e, i
      const t = x(),
        d = { id: t.query.id, slug: t.params.category },
        { data: a } = (([e, i] = b(() => C(k, d))), (e = await e), i(), e)
      return (
        w({
          title: t.params.category,
          titleTemplate: '%s - Nuxt 3 Woocommerce',
          meta: [
            {
              name: 'viewport',
              content: 'width=device-width, initial-scale=1',
            },
            {
              hid: 'description',
              name: 'description',
              content: 'Nuxt 3 Woocommerce',
            },
          ],
          link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
        }),
        (l, r) => {
          var f
          const o = $,
            v = _
          return (f = p(a)) != null && f.productCategory
            ? (s(),
              c('div', U, [
                u(o, { products: p(a).productCategory }, null, 8, ['products']),
              ]))
            : (s(), c('div', B, [u(v)]))
        }
      )
    },
  }
export { z as default }
