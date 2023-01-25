import {
  o as t,
  c as s,
  a,
  F as c,
  r as d,
  g as l,
  b as m,
  w as u,
  t as r,
  _ as x,
} from './entry.2f8d984c.js'
import { f as h } from './functions.9991b9f0.js'
import { _ as f } from './_plugin-vue_export-helper.c27b6911.js'
const p = {
    name: 'ShowAllProducts',
    props: { products: { type: Array, required: !0 } },
    methods: {
      productImage(n) {
        return n.image ? n.image.sourceUrl : {}.placeholderSmallImage
      },
      filteredVariantPrice: h,
    },
  },
  g = { key: 0 },
  y = { id: 'product-container', class: 'flex flex-wrap items-center' },
  v = ['alt', 'src'],
  k = { class: 'flex justify-center pt-3' },
  w = { class: 'text-2xl font-bold text-center cursor-pointer' },
  b = { key: 0, class: 'flex justify-center mt-2' },
  P = { class: 'text-lg text-gray-900 line-through' },
  V = { key: 0 },
  I = { key: 1 },
  S = { class: 'ml-4 text-xl text-gray-900' },
  N = { key: 0 },
  A = { key: 1 },
  B = { key: 1 },
  j = { class: 'mt-2 text-xl text-center text-gray-900' }
function q(n, C, i, F, L, o) {
  const _ = x
  return i.products
    ? (t(),
      s('div', g, [
        a('section', null, [
          a('div', y, [
            (t(!0),
            s(
              c,
              null,
              d(
                i.products,
                (e) => (
                  t(),
                  s(
                    c,
                    null,
                    [
                      e.slug !== void 0
                        ? (t(),
                          s(
                            'div',
                            {
                              key: e.id,
                              class:
                                'flex flex-col mt-6 sm:w1/2 md:w-1/3 lg:1/4 xl:w-1/4',
                            },
                            [
                              m(
                                _,
                                {
                                  class:
                                    'text-black cursor-pointer hover:underline',
                                  to: {
                                    path: '/product/' + e.slug,
                                    query: { id: e.databaseId },
                                  },
                                },
                                {
                                  default: u(() => [
                                    a(
                                      'img',
                                      {
                                        id: 'product-image',
                                        class:
                                          'container mx-auto transition duration-500 ease-in-out transform cursor-pointer lg:w-64 xl:w-64 sm:p-4 hover:scale-110',
                                        alt: e.name,
                                        src: o.productImage(e),
                                      },
                                      null,
                                      8,
                                      v
                                    ),
                                    a('div', k, [a('p', w, r(e.name), 1)]),
                                  ]),
                                  _: 2,
                                },
                                1032,
                                ['to']
                              ),
                              e.onSale
                                ? (t(),
                                  s('div', b, [
                                    a('div', P, [
                                      e.variations
                                        ? (t(),
                                          s(
                                            'span',
                                            V,
                                            r(
                                              o.filteredVariantPrice(
                                                e.price,
                                                'right'
                                              )
                                            ),
                                            1
                                          ))
                                        : (t(),
                                          s('span', I, r(e.regularPrice), 1)),
                                    ]),
                                    a('div', S, [
                                      e.variations
                                        ? (t(),
                                          s(
                                            'span',
                                            N,
                                            r(o.filteredVariantPrice(e.price)),
                                            1
                                          ))
                                        : (t(),
                                          s('span', A, r(e.salePrice), 1)),
                                    ]),
                                  ]))
                                : (t(),
                                  s('div', B, [a('p', j, r(e.price), 1)])),
                            ]
                          ))
                        : l('', !0),
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
    : l('', !0)
}
const z = f(p, [
  ['render', q],
  ['__scopeId', 'data-v-dbfd0cb7'],
])
export { z as _ }
