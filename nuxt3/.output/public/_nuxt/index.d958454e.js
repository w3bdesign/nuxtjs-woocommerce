import { _ as m } from './_plugin-vue_export-helper.c27b6911.js'
import {
  o,
  c as s,
  p as u,
  d as f,
  a as c,
  e as x,
  b as r,
  f as a,
  g as h,
  u as g,
} from './entry.2f8d984c.js'
import { _ as w } from './ProductsShowAll.e28b93e2.js'
import { d as v } from './FETCH_ALL_PRODUCTS_QUERY.e4fadab3.js'
import './functions.9991b9f0.js'
const y = '' + new URL('Hero.0c150c12.jpg', import.meta.url).href
const I = {},
  d = (t) => (u('data-v-2d62f187'), (t = t()), f(), t),
  k = d(() =>
    c(
      'img',
      { class: 'mx-auto', alt: 'Image slider slide #1', src: y },
      null,
      -1
    )
  ),
  S = d(() =>
    c(
      'div',
      {
        class:
          'flex flex-col items-start justify-center w-full mx-auto tracking-wide lg:w-1/2',
      },
      [
        c(
          'span',
          {
            class:
              'w-full p-4 mt-4 text-center text-white bg-black text-md lg:text-2xl lg:-mt-64',
          },
          ' Modern Interior Sample '
        ),
      ],
      -1
    )
  ),
  b = [k, S]
function A(t, e) {
  return o(), s('div', null, b)
}
const B = m(I, [
    ['render', A],
    ['__scopeId', 'data-v-2d62f187'],
  ]),
  H = { key: 0 },
  M = {
    __name: 'index',
    async setup(t) {
      let e, n
      const l = { limit: 5 },
        { data: _ } = (([e, n] = x(() => g(v, l))), (e = await e), n(), e)
      return (N, V) => {
        const p = B,
          i = w
        return (
          o(),
          s('div', null, [
            r(p),
            a(_).products
              ? (o(),
                s('div', H, [
                  r(i, { products: a(_).products.nodes }, null, 8, [
                    'products',
                  ]),
                ]))
              : h('', !0),
          ])
        )
      }
    },
  }
export { M as default }
