import { _ as r } from './ProductsShowAll.e28b93e2.js'
import {
  e as a,
  j as i,
  f as c,
  c as m,
  b as d,
  g as p,
  u,
  o as _,
} from './entry.2f8d984c.js'
import { d as l } from './FETCH_ALL_PRODUCTS_QUERY.e4fadab3.js'
import './functions.9991b9f0.js'
import './_plugin-vue_export-helper.c27b6911.js'
const f = { key: 0 },
  b = {
    __name: 'products',
    async setup(h) {
      let t, e
      const s = { limit: 5 },
        { data: o } = (([t, e] = a(() => u(l, s))), (t = await t), e(), t)
      return (
        i({
          title: 'Products',
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
        (x, w) => {
          const n = r
          return c(o).products
            ? (_(),
              m('div', f, [
                d(n, { products: c(o).products.nodes }, null, 8, ['products']),
              ]))
            : p('', !0)
        }
      )
    },
  }
export { b as default }
