import {
  o as d,
  c as s,
  b as _,
  w as S,
  _ as f,
  p as N,
  d as F,
  a as i,
  e as x,
  u as h,
  f as l,
  F as y,
  r as b,
  t as o,
  g as u,
  h as T,
  i as k,
} from './entry.2f8d984c.js'
import { _ as v } from './_plugin-vue_export-helper.c27b6911.js'
const C = {},
  I = (e) => (N('data-v-184c62f2'), (e = e()), F(), e),
  w = { class: 'flex justify-center' },
  E = I(() => i('button', null, 'CHECKOUT', -1))
function D(e, n) {
  const t = f
  return (
    d(),
    s('div', w, [
      _(
        t,
        { to: '/checkout', class: 'button-link' },
        { default: S(() => [E]), _: 1 }
      ),
    ])
  )
}
const U = v(C, [
  ['render', D],
  ['__scopeId', 'data-v-184c62f2'],
])
var g = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      variableDefinitions: [],
      directives: [],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'cart' },
            arguments: [],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'contents' },
                  arguments: [],
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
                              name: { kind: 'Name', value: 'key' },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'product' },
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
                                    name: { kind: 'Name', value: 'name' },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'description',
                                    },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'type' },
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
                                    name: { kind: 'Name', value: 'slug' },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'averageRating',
                                    },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'reviewCount',
                                    },
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
                                          name: {
                                            kind: 'Name',
                                            value: 'sourceUrl',
                                          },
                                          arguments: [],
                                          directives: [],
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'srcSet',
                                          },
                                          arguments: [],
                                          directives: [],
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'altText',
                                          },
                                          arguments: [],
                                          directives: [],
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'title',
                                          },
                                          arguments: [],
                                          directives: [],
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'galleryImages',
                                    },
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
                                                  value: 'sourceUrl',
                                                },
                                                arguments: [],
                                                directives: [],
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'srcSet',
                                                },
                                                arguments: [],
                                                directives: [],
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'altText',
                                                },
                                                arguments: [],
                                                directives: [],
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'title',
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
                              name: { kind: 'Name', value: 'variation' },
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
                                    name: { kind: 'Name', value: 'name' },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'description',
                                    },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'type' },
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
                                    name: {
                                      kind: 'Name',
                                      value: 'regularPrice',
                                    },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'salePrice' },
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
                                          name: {
                                            kind: 'Name',
                                            value: 'sourceUrl',
                                          },
                                          arguments: [],
                                          directives: [],
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'srcSet',
                                          },
                                          arguments: [],
                                          directives: [],
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'altText',
                                          },
                                          arguments: [],
                                          directives: [],
                                        },
                                        {
                                          kind: 'Field',
                                          name: {
                                            kind: 'Name',
                                            value: 'title',
                                          },
                                          arguments: [],
                                          directives: [],
                                        },
                                      ],
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'attributes' },
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
                                                  value: 'name',
                                                },
                                                arguments: [],
                                                directives: [],
                                              },
                                              {
                                                kind: 'Field',
                                                name: {
                                                  kind: 'Name',
                                                  value: 'value',
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
                              name: { kind: 'Name', value: 'quantity' },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'total' },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'subtotal' },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'subtotalTax' },
                              arguments: [],
                              directives: [],
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'appliedCoupons' },
                  arguments: [],
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
                              name: { kind: 'Name', value: 'discountType' },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'amount' },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'dateExpiry' },
                              arguments: [],
                              directives: [],
                            },
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
                                      ],
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'productCategories',
                              },
                              arguments: [],
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
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'subtotal' },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'subtotalTax' },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'shippingTax' },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'shippingTotal' },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'total' },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'totalTax' },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'feeTax' },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'feeTotal' },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'discountTax' },
                  arguments: [],
                  directives: [],
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'discountTotal' },
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
  loc: { start: 0, end: 1602 },
}
g.loc.source = {
  body: `{\r
  cart {\r
    contents {\r
      nodes {\r
        key\r
        product {\r
          id\r
          databaseId\r
          name\r
          description\r
          type\r
          onSale\r
          slug\r
          averageRating\r
          reviewCount\r
          image {\r
            id\r
            sourceUrl\r
            srcSet\r
            altText\r
            title\r
          }\r
          galleryImages {\r
            nodes {\r
              id\r
              sourceUrl\r
              srcSet\r
              altText\r
              title\r
            }\r
          }\r
        }\r
        variation {\r
          id\r
          databaseId\r
          name\r
          description\r
          type\r
          onSale\r
          price\r
          regularPrice\r
          salePrice\r
          image {\r
            id\r
            sourceUrl\r
            srcSet\r
            altText\r
            title\r
          }\r
          attributes {\r
            nodes {\r
              id\r
              name\r
              value\r
            }\r
          }\r
        }\r
        quantity\r
        total\r
        subtotal\r
        subtotalTax\r
      }\r
    }\r
    appliedCoupons {\r
      nodes {\r
        id\r
        databaseId\r
        discountType\r
        amount\r
        dateExpiry\r
        products {\r
          nodes {\r
            id\r
          }\r
        }\r
        productCategories {\r
          nodes {\r
            id\r
          }\r
        }\r
      }\r
    }\r
    subtotal\r
    subtotalTax\r
    shippingTax\r
    shippingTotal\r
    total\r
    totalTax\r
    feeTax\r
    feeTotal\r
    discountTax\r
    discountTotal\r
  }\r
}\r
`,
  name: 'GraphQL request',
  locationOffset: { line: 1, column: 1 },
}
function c(e, n) {
  if (e.kind === 'FragmentSpread') n.add(e.name.value)
  else if (e.kind === 'VariableDefinition') {
    var t = e.type
    t.kind === 'NamedType' && n.add(t.name.value)
  }
  e.selectionSet &&
    e.selectionSet.selections.forEach(function (a) {
      c(a, n)
    }),
    e.variableDefinitions &&
      e.variableDefinitions.forEach(function (a) {
        c(a, n)
      }),
    e.definitions &&
      e.definitions.forEach(function (a) {
        c(a, n)
      })
}
var $ = {}
;(function () {
  g.definitions.forEach(function (n) {
    if (n.name) {
      var t = new Set()
      c(n, t), ($[n.name.value] = t)
    }
  })
})()
const m = (e) => (N('data-v-98ea6269'), (e = e()), F(), e),
  B = { key: 0 },
  q = m(() =>
    i('h1', { class: 'h-10 p-6 text-3xl font-bold text-center' }, ' Cart ', -1)
  ),
  R = { class: 'mt-10' },
  V = { class: 'item' },
  P = m(() =>
    i(
      'span',
      { class: 'block mt-2 font-extrabold' },
      [k('Name: '), i('br')],
      -1
    )
  ),
  L = { class: 'item-content' },
  O = { class: 'item' },
  Q = m(() =>
    i(
      'span',
      { class: 'block mt-2 font-extrabold' },
      [k('Quantity: '), i('br')],
      -1
    )
  ),
  A = { class: 'item-content' },
  j = { class: 'item' },
  G = m(() =>
    i(
      'span',
      { class: 'block mt-2 font-extrabold' },
      [k('Subtotal: '), i('br')],
      -1
    )
  ),
  H = { class: 'item-content' },
  K = { key: 1, class: 'm-4 text-3xl text-center' },
  z = {
    __name: 'CartContents',
    async setup(e) {
      let n, t
      const { data: a } = (([n, t] = x(() => h(g))), (n = await n), t(), n)
      return (X, Y) => {
        const p = U
        return (
          d(),
          s('div', null, [
            l(a)
              ? (d(),
                s('div', B, [
                  q,
                  i('section', R, [
                    (d(!0),
                    s(
                      y,
                      null,
                      b(
                        l(a).cart.contents.nodes,
                        (r) => (
                          d(),
                          s(
                            'div',
                            {
                              key: r.id,
                              class: 'container mx-auto mt-4 flex-container',
                            },
                            [
                              i('div', V, [
                                P,
                                i('span', L, o(r.product.name), 1),
                              ]),
                              i('div', O, [Q, i('span', A, o(r.quantity), 1)]),
                              i('div', j, [G, i('span', H, o(r.total), 1)]),
                            ]
                          )
                        )
                      ),
                      128
                    )),
                  ]),
                ]))
              : u('', !0),
            l(a) ? u('', !0) : (d(), s('h2', K, ' Cart is currently empty ')),
            l(a) ? (d(), T(p, { key: 2 })) : u('', !0),
          ])
        )
      }
    },
  },
  J = v(z, [['__scopeId', 'data-v-98ea6269']]),
  M = {}
function W(e, n) {
  const t = J
  return d(), s('div', null, [_(t, { 'display-remove': '' })])
}
const ne = v(M, [['render', W]])
export { ne as default }
