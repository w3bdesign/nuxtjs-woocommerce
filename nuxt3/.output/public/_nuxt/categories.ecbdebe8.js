import {
  o as a,
  c as o,
  a as r,
  F as d,
  r as p,
  g as f,
  b as u,
  w as h,
  t as x,
  _ as S,
  e as y,
  j as b,
  f as g,
  u as w,
} from './entry.2f8d984c.js'
import { _ as N } from './SpinnerLoading.f2ae26fa.js'
import './_plugin-vue_export-helper.c27b6911.js'
const C = { key: 0 },
  F = { class: 'container mx-auto bg-white' },
  D = {
    class:
      'grid gap-2 px-2 pt-2 pb-2 lg:px-0 xl:px-0 md:px-0 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 xs:grid-cols-3',
  },
  A = { class: 'p-6 cursor-pointer' },
  E = {
    class:
      'flex items-center justify-center w-full h-16 text-center border border-gray-300 rounded-lg shadow hover:shadow-outline',
  },
  V = { class: 'text-lg' },
  L = {
    __name: 'CategoryShowAll',
    props: { categories: { type: [Object] } },
    setup(t) {
      const e = t
      return (i, n) => {
        const c = S
        return e.categories
          ? (a(),
            o('div', C, [
              r('section', F, [
                r('div', D, [
                  (a(!0),
                  o(
                    d,
                    null,
                    p(
                      e.categories,
                      (_) => (
                        a(),
                        o(
                          d,
                          null,
                          [
                            (a(!0),
                            o(
                              d,
                              null,
                              p(
                                _,
                                (s) => (
                                  a(),
                                  o(
                                    d,
                                    null,
                                    [
                                      s.slug !== void 0
                                        ? (a(),
                                          o('div', { key: s.id }, [
                                            u(
                                              c,
                                              {
                                                class:
                                                  'text-black cursor-pointer hover:underline',
                                                to: {
                                                  path: '/category/' + s.slug,
                                                  query: { id: s.id },
                                                },
                                              },
                                              {
                                                default: h(() => [
                                                  r('div', A, [
                                                    r('div', E, [
                                                      r('p', V, x(s.name), 1),
                                                    ]),
                                                  ]),
                                                ]),
                                                _: 2,
                                              },
                                              1032,
                                              ['to']
                                            ),
                                          ]))
                                        : f('', !0),
                                    ],
                                    64
                                  )
                                )
                              ),
                              256
                            )),
                          ],
                          64
                        )
                      )
                    ),
                    256
                  )),
                ]),
              ]),
            ]))
          : f('', !0)
      }
    },
  }
var m = {
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
            name: { kind: 'Name', value: 'productCategories' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'first' },
                value: { kind: 'IntValue', value: '20' },
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
  loc: { start: 0, end: 117 },
}
m.loc.source = {
  body: `{\r
  productCategories(first: 20) {\r
    nodes {\r
      id\r
      databaseId\r
      name\r
      slug\r
    }\r
  }\r
}\r
`,
  name: 'GraphQL request',
  locationOffset: { line: 1, column: 1 },
}
function l(t, e) {
  if (t.kind === 'FragmentSpread') e.add(t.name.value)
  else if (t.kind === 'VariableDefinition') {
    var i = t.type
    i.kind === 'NamedType' && e.add(i.name.value)
  }
  t.selectionSet &&
    t.selectionSet.selections.forEach(function (n) {
      l(n, e)
    }),
    t.variableDefinitions &&
      t.variableDefinitions.forEach(function (n) {
        l(n, e)
      }),
    t.definitions &&
      t.definitions.forEach(function (n) {
        l(n, e)
      })
}
var $ = {}
;(function () {
  m.definitions.forEach(function (e) {
    if (e.name) {
      var i = new Set()
      l(e, i), ($[e.name.value] = i)
    }
  })
})()
const j = { key: 0 },
  q = { key: 1 },
  R = {
    __name: 'categories',
    async setup(t) {
      let e, i
      const n = { limit: 5 },
        { data: c } = (([e, i] = y(() => w(m, n))), (e = await e), i(), e)
      return (
        b({
          title: 'Categories',
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
        (_, s) => {
          const v = L,
            k = N
          return g(c).productCategories
            ? (a(),
              o('div', j, [
                u(v, { categories: g(c).productCategories }, null, 8, [
                  'categories',
                ]),
              ]))
            : (a(), o('div', q, [u(k)]))
        }
      )
    },
  }
export { R as default }
