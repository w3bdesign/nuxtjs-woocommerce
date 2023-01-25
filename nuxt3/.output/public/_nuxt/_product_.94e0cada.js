import {
  n as I,
  o as d,
  c as r,
  a as s,
  i as C,
  f as v,
  g as _,
  q as P,
  s as T,
  p as w,
  d as D,
  t as m,
  F as A,
  r as E,
  b as f,
  l as V,
  e as R,
  j as $,
  u as U,
} from './entry.2f8d984c.js'
import { _ as B } from './_plugin-vue_export-helper.c27b6911.js'
import { f as y, s as L } from './functions.9991b9f0.js'
import { _ as O } from './SpinnerLoading.f2ae26fa.js'
var h = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'mutation',
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'input' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'AddToCartInput' },
            },
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
            name: { kind: 'Name', value: 'addToCart' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'input' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'input' },
                },
              },
            ],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'cartItem' },
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
                              name: { kind: 'Name', value: 'description' },
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
                              name: { kind: 'Name', value: 'averageRating' },
                              arguments: [],
                              directives: [],
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'reviewCount' },
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
                                    name: { kind: 'Name', value: 'sourceUrl' },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'altText' },
                                    arguments: [],
                                    directives: [],
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'galleryImages' },
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
                                            value: 'altText',
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
                              name: { kind: 'Name', value: 'description' },
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
                              name: { kind: 'Name', value: 'regularPrice' },
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
                                    name: { kind: 'Name', value: 'sourceUrl' },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'altText' },
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
                                          name: {
                                            kind: 'Name',
                                            value: 'attributeId',
                                          },
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
        ],
      },
    },
  ],
  loc: { start: 0, end: 970 },
}
h.loc.source = {
  body: `mutation($input: AddToCartInput!) {\r
  addToCart(input: $input) {\r
    cartItem {\r
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
          altText\r
        }\r
        galleryImages {\r
          nodes {\r
            id\r
            sourceUrl\r
            altText\r
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
          altText\r
        }\r
        attributes {\r
          nodes {\r
            id\r
            attributeId\r
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
}\r
`,
  name: 'GraphQL request',
  locationOffset: { line: 1, column: 1 },
}
function p(n, e) {
  if (n.kind === 'FragmentSpread') e.add(n.name.value)
  else if (n.kind === 'VariableDefinition') {
    var i = n.type
    i.kind === 'NamedType' && e.add(i.name.value)
  }
  n.selectionSet &&
    n.selectionSet.selections.forEach(function (a) {
      p(a, e)
    }),
    n.variableDefinitions &&
      n.variableDefinitions.forEach(function (a) {
        p(a, e)
      }),
    n.definitions &&
      n.definitions.forEach(function (a) {
        p(a, e)
      })
}
var q = {}
;(function () {
  h.definitions.forEach(function (e) {
    if (e.name) {
      var i = new Set()
      p(e, i), (q[e.name.value] = i)
    }
  })
})()
const Q = (n) => (w('data-v-b3c4a6ea'), (n = n()), D(), n),
  M = {
    key: 0,
    class: 'absolute -mt-6 -ml-2 animate-spin',
    width: '25',
    height: '25',
    viewBox: '0 0 24 24',
    fill: 'none',
    xmlns: 'http://www.w3.org/2000/svg',
  },
  z = Q(() =>
    s(
      'path',
      {
        'fill-rule': 'evenodd',
        'clip-rule': 'evenodd',
        d: 'M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0ZM4.14355 13.5165C4.85219 17.2096 8.10023 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C8.0886 4 4.83283 6.80704 4.13728 10.5165L6.72824 10.5071C7.37819 8.20738 9.49236 6.52222 12.0001 6.52222C15.0254 6.52222 17.4779 8.9747 17.4779 12C17.4779 15.0253 15.0254 17.4778 12.0001 17.4778C9.49752 17.4778 7.3869 15.7995 6.73228 13.5071L4.14355 13.5165ZM9.52234 12C9.52234 13.3684 10.6317 14.4778 12.0001 14.4778C13.3685 14.4778 14.4779 13.3684 14.4779 12C14.4779 10.6316 13.3685 9.52222 12.0001 9.52222C10.6317 9.52222 9.52234 10.6316 9.52234 12Z',
        fill: 'white',
      },
      null,
      -1
    )
  ),
  G = [z],
  j = {
    __name: 'CartAddToCartButton',
    props: { product: { type: [Object] } },
    setup(n) {
      const e = n,
        i = I('isLoading', () => !1),
        a = (t) => {
          ;(i.value = !0), o(t)
        },
        o = (t) => {
          const c = { input: { productId: t.databaseId ? t.databaseId : t } },
            { mutate: k, error: N, onDone: x } = T(h, { variables: c })
          k(c),
            x(() => {
              i.value = !1
            })
        }
      return (t, u) => (
        d(),
        r('div', null, [
          s(
            'button',
            {
              class: P([
                'relative w-48 h-12 px-4 py-2 mt-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-800',
                { disabled: v(i) },
              ]),
              onClick: u[0] || (u[0] = (l) => a(e.product)),
            },
            [C(' ADD TO CART '), v(i) ? (d(), r('svg', M, G)) : _('', !0)],
            2
          ),
        ])
      )
    },
  },
  W = B(j, [['__scopeId', 'data-v-b3c4a6ea']]),
  Z = { key: 0 },
  H = { class: 'container flex flex-wrap items-center pt-4 pb-12 mx-auto' },
  J = {
    class:
      'grid grid-cols-1 gap-4 mt-8 lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-2',
  },
  K = ['alt', 'src'],
  X = ['alt', 'src'],
  Y = { class: 'ml-8' },
  ee = { class: 'text-3xl font-bold text-left' },
  ne = { key: 0, class: 'flex' },
  ie = { class: 'pt-1 mt-4 text-3xl text-gray-900' },
  ae = { key: 0 },
  te = { key: 1 },
  de = { class: 'pt-1 pl-8 mt-4 text-2xl text-gray-900 line-through' },
  re = { key: 0 },
  se = { key: 1 },
  le = { key: 1, class: 'pt-1 mt-4 text-2xl text-gray-900' },
  oe = s('br', null, null, -1),
  ce = { class: 'pt-1 mt-4 text-2xl text-gray-900' },
  ue = { key: 2, class: 'pt-1 mt-4 text-xl text-gray-900' },
  me = s('span', { class: 'py-2' }, 'Varianter', -1),
  ve = {
    id: 'variant',
    name: 'variant',
    class:
      'block w-64 px-6 py-2 bg-white border border-gray-500 rounded-lg focus:outline-none focus:shadow-outline',
  },
  ke = ['value', 'selected'],
  pe = { class: 'pt-1 mt-2' },
  ge = {
    __name: 'ProductsSingleProduct',
    props: { product: { type: [Object] } },
    setup(n) {
      const e = n
      return (i, a) => {
        const o = W
        return e.product
          ? (d(),
            r('div', Z, [
              s('section', null, [
                s('div', H, [
                  s('div', J, [
                    e.product.image !== void 0
                      ? (d(),
                        r(
                          'img',
                          {
                            key: 0,
                            id: 'product-image',
                            class:
                              'h-auto p-8 transition duration-500 ease-in-out transform xl:p-2 md:p-2 lg:p-2 hover:grow hover:shadow-lg hover:scale-105',
                            alt: e.product.name,
                            src: e.product.image.sourceUrl,
                          },
                          null,
                          8,
                          K
                        ))
                      : (d(),
                        r(
                          'img',
                          {
                            key: 1,
                            id: 'product-image',
                            class:
                              'h-auto p-8 transition duration-500 ease-in-out transform xl:p-2 md:p-2 lg:p-2 hover:grow hover:shadow-lg hover:scale-105',
                            alt: e.product.name,
                            src: i.process.env.placeholderSmallImage,
                          },
                          null,
                          8,
                          X
                        )),
                    s('div', Y, [
                      s('p', ee, m(e.product.name), 1),
                      e.product.onSale
                        ? (d(),
                          r('div', ne, [
                            s('p', ie, [
                              n.product.variations
                                ? (d(),
                                  r('span', ae, m(v(y)(e.product.price)), 1))
                                : (d(),
                                  r('span', te, m(e.product.salePrice), 1)),
                            ]),
                            s('p', de, [
                              e.product.variations
                                ? (d(),
                                  r(
                                    'span',
                                    re,
                                    m(v(y)(e.product.price, 'right')),
                                    1
                                  ))
                                : (d(),
                                  r('span', se, m(e.product.regularPrice), 1)),
                            ]),
                          ]))
                        : (d(), r('p', le, m(e.product.price), 1)),
                      oe,
                      s('p', ce, m(v(L)(e.product.description)), 1),
                      e.product.variations
                        ? (d(),
                          r('p', ue, [
                            me,
                            s('select', ve, [
                              (d(!0),
                              r(
                                A,
                                null,
                                E(
                                  e.product.variations.nodes,
                                  (t, u) => (
                                    d(),
                                    r(
                                      'option',
                                      {
                                        key: t.databaseId,
                                        value: t.databaseId,
                                        selected: u === 0,
                                      },
                                      m(t.name),
                                      9,
                                      ke
                                    )
                                  )
                                ),
                                128
                              )),
                            ]),
                          ]))
                        : _('', !0),
                      s('div', pe, [
                        f(o, { product: e.product }, null, 8, ['product']),
                      ]),
                    ]),
                  ]),
                ]),
              ]),
            ]))
          : _('', !0)
      }
    },
  }
var S = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Product' },
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
            name: { kind: 'Name', value: 'product' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'id' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'idType' },
                value: { kind: 'EnumValue', value: 'DATABASE_ID' },
              },
            ],
            directives: [],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'databaseId' },
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
                  name: { kind: 'Name', value: 'name' },
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
                  name: { kind: 'Name', value: 'onSale' },
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
                        name: { kind: 'Name', value: 'databaseId' },
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
                        name: { kind: 'Name', value: 'price' },
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
                        name: { kind: 'Name', value: 'regularPrice' },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'databaseId' },
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
                    name: { kind: 'Name', value: 'VariableProduct' },
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
                        name: { kind: 'Name', value: 'salePrice' },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'regularPrice' },
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
                        name: { kind: 'Name', value: 'paColors' },
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
                                    name: { kind: 'Name', value: 'name' },
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
                        name: { kind: 'Name', value: 'paSizes' },
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
                                    name: { kind: 'Name', value: 'name' },
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
                        name: { kind: 'Name', value: 'variations' },
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
                                      value: 'stockStatus',
                                    },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'stockQuantity',
                                    },
                                    arguments: [],
                                    directives: [],
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'purchasable',
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
                  kind: 'InlineFragment',
                  typeCondition: {
                    kind: 'NamedType',
                    name: { kind: 'Name', value: 'ExternalProduct' },
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
                        name: { kind: 'Name', value: 'databaseId' },
                        arguments: [],
                        directives: [],
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'externalUrl' },
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
                              name: { kind: 'Name', value: 'nodes' },
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
                                            value: 'databaseId',
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
  loc: { start: 0, end: 1109 },
}
S.loc.source = {
  body: `query Product($id: ID!) {\r
  product(id: $id, idType: DATABASE_ID) {\r
    databaseId\r
    averageRating\r
    name\r
    slug\r
    description\r
    onSale\r
    image {\r
      databaseId\r
      uri\r
      title\r
      srcSet\r
      sourceUrl\r
    }\r
    ... on SimpleProduct {\r
      price\r
      salePrice\r
      regularPrice\r
      databaseId\r
    }\r
    ... on VariableProduct {\r
      price\r
      salePrice\r
      regularPrice\r
      databaseId\r
      paColors {\r
        nodes {\r
          name\r
        }\r
      }\r
      paSizes {\r
        nodes {\r
          name\r
        }\r
      }\r
      variations {\r
        nodes {\r
          databaseId\r
          name\r
          stockStatus\r
          stockQuantity\r
          purchasable\r
          onSale\r
          salePrice\r
          regularPrice\r
        }\r
      }\r
    }\r
    ... on ExternalProduct {\r
      price\r
      databaseId\r
      externalUrl\r
    }\r
    ... on GroupProduct {\r
      products {\r
        nodes {\r
          ... on SimpleProduct {\r
            databaseId\r
            price\r
          }\r
        }\r
      }\r
      id\r
    }\r
  }\r
}\r
`,
  name: 'GraphQL request',
  locationOffset: { line: 1, column: 1 },
}
function g(n, e) {
  if (n.kind === 'FragmentSpread') e.add(n.name.value)
  else if (n.kind === 'VariableDefinition') {
    var i = n.type
    i.kind === 'NamedType' && e.add(i.name.value)
  }
  n.selectionSet &&
    n.selectionSet.selections.forEach(function (a) {
      g(a, e)
    }),
    n.variableDefinitions &&
      n.variableDefinitions.forEach(function (a) {
        g(a, e)
      }),
    n.definitions &&
      n.definitions.forEach(function (a) {
        g(a, e)
      })
}
var F = {}
;(function () {
  S.definitions.forEach(function (e) {
    if (e.name) {
      var i = new Set()
      g(e, i), (F[e.name.value] = i)
    }
  })
})()
function b(n, e) {
  for (var i = 0; i < n.definitions.length; i++) {
    var a = n.definitions[i]
    if (a.name && a.name.value == e) return a
  }
}
function Se(n, e) {
  var i = { kind: n.kind, definitions: [b(n, e)] }
  n.hasOwnProperty('loc') && (i.loc = n.loc)
  var a = F[e] || new Set(),
    o = new Set(),
    t = new Set()
  for (
    a.forEach(function (l) {
      t.add(l)
    });
    t.size > 0;

  ) {
    var u = t
    ;(t = new Set()),
      u.forEach(function (l) {
        if (!o.has(l)) {
          o.add(l)
          var c = F[l] || new Set()
          c.forEach(function (k) {
            t.add(k)
          })
        }
      })
  }
  return (
    o.forEach(function (l) {
      var c = b(n, l)
      c && i.definitions.push(c)
    }),
    i
  )
}
Se(S, 'Product')
const Ne = { key: 0 },
  _e = { key: 1 },
  be = {
    __name: '[product]',
    async setup(n) {
      let e, i
      const a = V(),
        o = { id: a.query.id, slug: a.params.product },
        { data: t } = (([e, i] = R(() => U(S, o))), (e = await e), i(), e)
      return (
        $({
          title: a.params.product,
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
        (u, l) => {
          var N
          const c = ge,
            k = O
          return (N = v(t)) != null && N.product
            ? (d(),
              r('div', Ne, [
                f(c, { product: v(t).product }, null, 8, ['product']),
              ]))
            : (d(), r('div', _e, [f(k)]))
        }
      )
    },
  }
export { be as default }
