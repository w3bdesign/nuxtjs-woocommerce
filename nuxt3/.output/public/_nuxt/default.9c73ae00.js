import {
  n as h,
  o as a,
  c as i,
  f as u,
  b as t,
  w as n,
  T as v,
  g as m,
  a as e,
  t as b,
  _ as f,
  q as y,
  i as p,
  p as k,
  d as w,
  k as S,
  v as N,
} from './entry.2f8d984c.js'
import { _ as g } from './_plugin-vue_export-helper.c27b6911.js'
const I = '' + new URL('Cart.0b2f98bc.svg', import.meta.url).href,
  R = { key: 0 },
  T = e(
    'span',
    { class: 'text-xl text-red-500' },
    'Error fetching cart. Please refresh the page.',
    -1
  ),
  D = [T],
  E = { key: 1 },
  V = {
    key: 0,
    class: 'text-xl text-white no-underline lg:text-black is-active',
  },
  j = e(
    'img',
    {
      alt: 'Cart icon',
      class: 'h-12 ml-4 lg:ml-2',
      'aria-label': 'Cart',
      src: I,
    },
    null,
    -1
  ),
  z = [j],
  B = { key: 0 },
  F = {
    class:
      'absolute w-6 h-6 pb-2 ml-16 -mt-12 text-center text-white bg-black rounded-full lg:ml-14',
  },
  M = {
    __name: 'LayoutCart',
    setup(s) {
      const o = h('cartLength', () => 1),
        d = h('subTotal', () => '99 kr'),
        l = h('remoteError', () => !1)
      return (c, _) => {
        const r = f
        return (
          a(),
          i('div', null, [
            u(l)
              ? (a(), i('div', R, D))
              : (a(),
                i('div', E, [
                  t(
                    r,
                    { to: '/cart' },
                    {
                      default: n(() => [
                        t(
                          v,
                          { name: 'cart' },
                          {
                            default: n(() => [
                              u(o) ? (a(), i('span', V, z)) : m('', !0),
                            ]),
                            _: 1,
                          }
                        ),
                        t(
                          v,
                          { name: 'cart' },
                          {
                            default: n(() => [
                              u(o)
                                ? (a(),
                                  i('div', B, [
                                    e('span', F, b(u(o)), 1),
                                    e('span', null, 'Total: ' + b(u(d)), 1),
                                  ]))
                                : m('', !0),
                            ]),
                            _: 1,
                          }
                        ),
                      ]),
                      _: 1,
                    }
                  ),
                ])),
          ])
        )
      }
    },
  }
const P = {
    name: 'MobileMenu',
    data() {
      return { expandedMenu: !1, firstRender: !0 }
    },
    methods: {
      displayMobileMenu() {
        ;(this.expandedMenu = !this.expandedMenu), (this.firstRender = !1)
      },
    },
  },
  $ = (s) => (k('data-v-3203287b'), (s = s()), w(), s),
  q = { class: 'relative' },
  H = { class: 'text-xl linkStyle' },
  U = { class: 'text-xl linkStyle' },
  O = { class: 'text-xl linkStyle' },
  Y = { class: 'text-xl linkStyle' },
  A = { class: 'flex justify-center mt-6 text-lg linkStyleCart' },
  G = $(() => e('div', { class: 'w-5/12 lg:hidden' }, null, -1)),
  J = { class: 'flex flex-row w-2/12 px-2 my-2 lg:hidden' },
  K = { class: 'self-center block w-full mr-4' },
  Q = ['aria-expanded'],
  W = $(() => e('div', { class: 'burger-lines' }, null, -1)),
  X = [W]
function Z(s, o, d, l, c, _) {
  const r = f,
    C = M
  return (
    a(),
    i('div', q, [
      c.firstRender
        ? m('', !0)
        : (a(),
          i(
            'div',
            {
              key: 0,
              class: y([
                'fixed top-0 left-0 w-screen mt-40 bg-white h-full animate__animated z-50',
                {
                  animate__fadeInLeft: c.expandedMenu,
                  animate__fadeOutRight: !c.expandedMenu && !c.firstRender,
                },
              ]),
            },
            [
              e('ul', null, [
                e('li', H, [
                  t(
                    r,
                    { to: '/', onClick: _.displayMobileMenu },
                    { default: n(() => [p(' Home ')]), _: 1 },
                    8,
                    ['onClick']
                  ),
                ]),
                e('li', U, [
                  t(
                    r,
                    { to: '/products', onClick: _.displayMobileMenu },
                    { default: n(() => [p(' Products ')]), _: 1 },
                    8,
                    ['onClick']
                  ),
                ]),
                e('li', O, [
                  t(
                    r,
                    { to: '/categories', onClick: _.displayMobileMenu },
                    { default: n(() => [p(' Categories ')]), _: 1 },
                    8,
                    ['onClick']
                  ),
                ]),
                e('li', Y, [
                  t(
                    r,
                    { to: '/search', onClick: _.displayMobileMenu },
                    { default: n(() => [p(' Search ')]), _: 1 },
                    8,
                    ['onClick']
                  ),
                ]),
                e('li', A, [
                  t(
                    r,
                    { to: '/cart', onClick: _.displayMobileMenu },
                    { default: n(() => [t(C)]), _: 1 },
                    8,
                    ['onClick']
                  ),
                ]),
              ]),
            ],
            2
          )),
      G,
      e('div', J, [
        e('div', K, [
          e(
            'button',
            {
              id: 'nav-toggle',
              class: y([
                'mt-6 burger burger-squeeze',
                { open: c.expandedMenu },
              ]),
              'aria-haspopup': 'true',
              'aria-expanded': c.expandedMenu,
              'aria-controls': 'menu',
              'aria-label': 'Navigation',
              onClick:
                o[0] ||
                (o[0] = (...L) =>
                  _.displayMobileMenu && _.displayMobileMenu(...L)),
            },
            X,
            10,
            Q
          ),
        ]),
      ]),
    ])
  )
}
const ee = g(P, [
    ['render', Z],
    ['__scopeId', 'data-v-3203287b'],
  ]),
  te = '' + new URL('Logo.447706ce.svg', import.meta.url).href
const se = {},
  x = (s) => (k('data-v-7fb3bb45'), (s = s()), w(), s),
  ne = {
    role: 'banner',
    class: 'container flex flex-col justify-center px-0 pt-6 mx-auto mb-6',
  },
  oe = { class: 'flex flex-wrap lg:px-4' },
  le = x(() =>
    e(
      'div',
      { class: 'w-9/12 pr-2 my-2 overflow-hidden lg:w-3/12 md:w-10/12' },
      [
        e('div', { class: 'ml-4 lg:ml-0' }, [
          e('img', {
            alt: 'Logo',
            class: 'h-20 lg:h-24',
            'aria-label': 'Nettbutikk logo',
            src: te,
          }),
        ]),
      ],
      -1
    )
  ),
  ae = x(() => e('div', { class: 'hidden lg:w-1/12 lg:block' }, null, -1)),
  ie = {
    id: 'nav-content',
    class:
      'hidden w-full mt-4 bg-black lg:w-8/12 lg:block lg:bg-white lg:mt-0 lg:text-right',
  },
  ce = { class: 'px-6 lg:px-0 lg:pt-5 xl:pt-7' },
  _e = {
    id: 'block-main',
    role: 'navigation',
    'aria-labelledby': 'block-main-menu',
  },
  de = {
    class: 'items-center justify-end flex-1 pr-4 -mr-4 list-reset lg:flex',
  },
  re = {
    class:
      'inline-block py-2 text-xl font-semibold no-underline lg:text-base lg:px-4',
  },
  ue = x(() =>
    e(
      'span',
      { class: 'text-xl text-white no-underline lg:text-black is-active' },
      ' Home ',
      -1
    )
  ),
  xe = {
    class:
      'inline-block py-2 text-xl font-semibold no-underline lg:text-base lg:px-4',
  },
  pe = x(() =>
    e(
      'span',
      { class: 'text-xl text-white no-underline lg:text-black' },
      'Products',
      -1
    )
  ),
  he = {
    class:
      'inline-block py-2 text-xl font-semibold no-underline lg:text-base lg:px-4',
  },
  me = x(() =>
    e(
      'span',
      { class: 'text-xl text-white no-underline lg:text-black is-active' },
      'Categories',
      -1
    )
  ),
  be = {
    class:
      'inline-block py-2 text-xl font-semibold no-underline lg:text-base lg:px-4',
  },
  fe = x(() =>
    e(
      'span',
      { class: 'text-xl text-white no-underline lg:text-black is-active' },
      'Search',
      -1
    )
  ),
  ge = {
    class:
      'inline-block py-2 text-xl font-semibold no-underline lg:text-base lg:px-4',
  }
function ve(s, o) {
  const d = ee,
    l = f,
    c = M
  return (
    a(),
    i('div', null, [
      e('header', ne, [
        e('div', oe, [
          le,
          t(d),
          ae,
          e('div', ie, [
            e('div', ce, [
              e('div', null, [
                e('nav', _e, [
                  e('ul', de, [
                    e('li', re, [
                      t(l, { to: '/' }, { default: n(() => [ue]), _: 1 }),
                    ]),
                    e('li', xe, [
                      t(
                        l,
                        { to: '/products' },
                        { default: n(() => [pe]), _: 1 }
                      ),
                    ]),
                    e('li', he, [
                      t(
                        l,
                        { to: '/categories' },
                        { default: n(() => [me]), _: 1 }
                      ),
                    ]),
                    e('li', be, [
                      t(l, { to: '/search' }, { default: n(() => [fe]), _: 1 }),
                    ]),
                    e('li', ge, [t(c, { class: '-mr-4' })]),
                  ]),
                ]),
              ]),
            ]),
          ]),
        ]),
      ]),
    ])
  )
}
const ye = g(se, [
    ['render', ve],
    ['__scopeId', 'data-v-7fb3bb45'],
  ]),
  ke = { class: 'container mx-auto mt-24' },
  we = {
    class:
      'px-6 text-center bg-white border border-gray-300 rounded-lg shadow-lg',
  },
  Me = { class: 'p-6' },
  $e = {
    __name: 'LayoutFooter',
    setup(s) {
      const o = S(() => new Date().getFullYear())
      return (d, l) => (
        a(),
        i('div', ke, [
          e('footer', we, [
            e(
              'div',
              Me,
              ' Copyright reserved © ' + b(u(o)) + ' Daniel / w3bdesign ',
              1
            ),
          ]),
        ])
      )
    },
  }
const Ce = {},
  Le = { class: 'container p-4 mx-auto' }
function Se(s, o) {
  const d = ye,
    l = $e
  return (
    a(), i('div', null, [t(d), e('div', Le, [N(s.$slots, 'default')]), t(l)])
  )
}
const Re = g(Ce, [['render', Se]])
export { Re as default }
