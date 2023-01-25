function Ms(e, t) {
  const r = Object.create(null),
    n = e.split(',')
  for (let i = 0; i < n.length; i++) r[n[i]] = !0
  return t ? (i) => !!r[i.toLowerCase()] : (i) => !!r[i]
}
function Ns(e) {
  if (Z(e)) {
    const t = {}
    for (let r = 0; r < e.length; r++) {
      const n = e[r],
        i = Pe(n) ? Ah(n) : Ns(n)
      if (i) for (const o in i) t[o] = i[o]
    }
    return t
  } else {
    if (Pe(e)) return e
    if (be(e)) return e
  }
}
const Rh = /;(?![^(]*\))/g,
  Ph = /:([^]+)/,
  xh = /\/\*.*?\*\//gs
function Ah(e) {
  const t = {}
  return (
    e
      .replace(xh, '')
      .split(Rh)
      .forEach((r) => {
        if (r) {
          const n = r.split(Ph)
          n.length > 1 && (t[n[0].trim()] = n[1].trim())
        }
      }),
    t
  )
}
function js(e) {
  let t = ''
  if (Pe(e)) t = e
  else if (Z(e))
    for (let r = 0; r < e.length; r++) {
      const n = js(e[r])
      n && (t += n + ' ')
    }
  else if (be(e)) for (const r in e) e[r] && (t += r + ' ')
  return t.trim()
}
const Ih =
    'itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly',
  Fh = Ms(Ih)
function Vu(e) {
  return !!e || e === ''
}
const EE = (e) =>
    Pe(e)
      ? e
      : e == null
      ? ''
      : Z(e) || (be(e) && (e.toString === Ku || !re(e.toString)))
      ? JSON.stringify(e, Wu, 2)
      : String(e),
  Wu = (e, t) =>
    t && t.__v_isRef
      ? Wu(e, t.value)
      : Nr(t)
      ? {
          [`Map(${t.size})`]: [...t.entries()].reduce(
            (r, [n, i]) => ((r[`${n} =>`] = i), r),
            {}
          ),
        }
      : zu(t)
      ? { [`Set(${t.size})`]: [...t.values()] }
      : be(t) && !Z(t) && !Ju(t)
      ? String(t)
      : t,
  we = {},
  Mr = [],
  _t = () => {},
  Dh = () => !1,
  Mh = /^on[^a-z]/,
  Un = (e) => Mh.test(e),
  Ls = (e) => e.startsWith('onUpdate:'),
  Be = Object.assign,
  qs = (e, t) => {
    const r = e.indexOf(t)
    r > -1 && e.splice(r, 1)
  },
  Nh = Object.prototype.hasOwnProperty,
  ce = (e, t) => Nh.call(e, t),
  Z = Array.isArray,
  Nr = (e) => Mi(e) === '[object Map]',
  zu = (e) => Mi(e) === '[object Set]',
  re = (e) => typeof e == 'function',
  Pe = (e) => typeof e == 'string',
  Bs = (e) => typeof e == 'symbol',
  be = (e) => e !== null && typeof e == 'object',
  $s = (e) => be(e) && re(e.then) && re(e.catch),
  Ku = Object.prototype.toString,
  Mi = (e) => Ku.call(e),
  jh = (e) => Mi(e).slice(8, -1),
  Ju = (e) => Mi(e) === '[object Object]',
  Hs = (e) =>
    Pe(e) && e !== 'NaN' && e[0] !== '-' && '' + parseInt(e, 10) === e,
  wn = Ms(
    ',key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted'
  ),
  Ni = (e) => {
    const t = Object.create(null)
    return (r) => t[r] || (t[r] = e(r))
  },
  Lh = /-(\w)/g,
  Pt = Ni((e) => e.replace(Lh, (t, r) => (r ? r.toUpperCase() : ''))),
  qh = /\B([A-Z])/g,
  rn = Ni((e) => e.replace(qh, '-$1').toLowerCase()),
  ji = Ni((e) => e.charAt(0).toUpperCase() + e.slice(1)),
  oo = Ni((e) => (e ? `on${ji(e)}` : '')),
  In = (e, t) => !Object.is(e, t),
  En = (e, t) => {
    for (let r = 0; r < e.length; r++) e[r](t)
  },
  gi = (e, t, r) => {
    Object.defineProperty(e, t, { configurable: !0, enumerable: !1, value: r })
  },
  Li = (e) => {
    const t = parseFloat(e)
    return isNaN(t) ? e : t
  }
let qa
const Bh = () =>
  qa ||
  (qa =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof window < 'u'
      ? window
      : typeof global < 'u'
      ? global
      : {})
let kt
class Yu {
  constructor(t = !1) {
    ;(this.detached = t),
      (this.active = !0),
      (this.effects = []),
      (this.cleanups = []),
      (this.parent = kt),
      !t && kt && (this.index = (kt.scopes || (kt.scopes = [])).push(this) - 1)
  }
  run(t) {
    if (this.active) {
      const r = kt
      try {
        return (kt = this), t()
      } finally {
        kt = r
      }
    }
  }
  on() {
    kt = this
  }
  off() {
    kt = this.parent
  }
  stop(t) {
    if (this.active) {
      let r, n
      for (r = 0, n = this.effects.length; r < n; r++) this.effects[r].stop()
      for (r = 0, n = this.cleanups.length; r < n; r++) this.cleanups[r]()
      if (this.scopes)
        for (r = 0, n = this.scopes.length; r < n; r++) this.scopes[r].stop(!0)
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop()
        i &&
          i !== this &&
          ((this.parent.scopes[this.index] = i), (i.index = this.index))
      }
      ;(this.parent = void 0), (this.active = !1)
    }
  }
}
function $h(e) {
  return new Yu(e)
}
function Hh(e, t = kt) {
  t && t.active && t.effects.push(e)
}
const Qs = (e) => {
    const t = new Set(e)
    return (t.w = 0), (t.n = 0), t
  },
  Gu = (e) => (e.w & ir) > 0,
  Xu = (e) => (e.n & ir) > 0,
  Qh = ({ deps: e }) => {
    if (e.length) for (let t = 0; t < e.length; t++) e[t].w |= ir
  },
  Uh = (e) => {
    const { deps: t } = e
    if (t.length) {
      let r = 0
      for (let n = 0; n < t.length; n++) {
        const i = t[n]
        Gu(i) && !Xu(i) ? i.delete(e) : (t[r++] = i), (i.w &= ~ir), (i.n &= ~ir)
      }
      t.length = r
    }
  },
  Lo = new WeakMap()
let mn = 0,
  ir = 1
const qo = 30
let Et
const br = Symbol(''),
  Bo = Symbol('')
class Us {
  constructor(t, r = null, n) {
    ;(this.fn = t),
      (this.scheduler = r),
      (this.active = !0),
      (this.deps = []),
      (this.parent = void 0),
      Hh(this, n)
  }
  run() {
    if (!this.active) return this.fn()
    let t = Et,
      r = tr
    for (; t; ) {
      if (t === this) return
      t = t.parent
    }
    try {
      return (
        (this.parent = Et),
        (Et = this),
        (tr = !0),
        (ir = 1 << ++mn),
        mn <= qo ? Qh(this) : Ba(this),
        this.fn()
      )
    } finally {
      mn <= qo && Uh(this),
        (ir = 1 << --mn),
        (Et = this.parent),
        (tr = r),
        (this.parent = void 0),
        this.deferStop && this.stop()
    }
  }
  stop() {
    Et === this
      ? (this.deferStop = !0)
      : this.active &&
        (Ba(this), this.onStop && this.onStop(), (this.active = !1))
  }
}
function Ba(e) {
  const { deps: t } = e
  if (t.length) {
    for (let r = 0; r < t.length; r++) t[r].delete(e)
    t.length = 0
  }
}
let tr = !0
const Zu = []
function nn() {
  Zu.push(tr), (tr = !1)
}
function on() {
  const e = Zu.pop()
  tr = e === void 0 ? !0 : e
}
function at(e, t, r) {
  if (tr && Et) {
    let n = Lo.get(e)
    n || Lo.set(e, (n = new Map()))
    let i = n.get(r)
    i || n.set(r, (i = Qs())), el(i)
  }
}
function el(e, t) {
  let r = !1
  mn <= qo ? Xu(e) || ((e.n |= ir), (r = !Gu(e))) : (r = !e.has(Et)),
    r && (e.add(Et), Et.deps.push(e))
}
function Lt(e, t, r, n, i, o) {
  const s = Lo.get(e)
  if (!s) return
  let a = []
  if (t === 'clear') a = [...s.values()]
  else if (r === 'length' && Z(e)) {
    const c = Li(n)
    s.forEach((u, l) => {
      ;(l === 'length' || l >= c) && a.push(u)
    })
  } else
    switch ((r !== void 0 && a.push(s.get(r)), t)) {
      case 'add':
        Z(e)
          ? Hs(r) && a.push(s.get('length'))
          : (a.push(s.get(br)), Nr(e) && a.push(s.get(Bo)))
        break
      case 'delete':
        Z(e) || (a.push(s.get(br)), Nr(e) && a.push(s.get(Bo)))
        break
      case 'set':
        Nr(e) && a.push(s.get(br))
        break
    }
  if (a.length === 1) a[0] && $o(a[0])
  else {
    const c = []
    for (const u of a) u && c.push(...u)
    $o(Qs(c))
  }
}
function $o(e, t) {
  const r = Z(e) ? e : [...e]
  for (const n of r) n.computed && $a(n)
  for (const n of r) n.computed || $a(n)
}
function $a(e, t) {
  ;(e !== Et || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
}
const Vh = Ms('__proto__,__v_isRef,__isVue'),
  tl = new Set(
    Object.getOwnPropertyNames(Symbol)
      .filter((e) => e !== 'arguments' && e !== 'caller')
      .map((e) => Symbol[e])
      .filter(Bs)
  ),
  Wh = Vs(),
  zh = Vs(!1, !0),
  Kh = Vs(!0),
  Ha = Jh()
function Jh() {
  const e = {}
  return (
    ['includes', 'indexOf', 'lastIndexOf'].forEach((t) => {
      e[t] = function (...r) {
        const n = ue(this)
        for (let o = 0, s = this.length; o < s; o++) at(n, 'get', o + '')
        const i = n[t](...r)
        return i === -1 || i === !1 ? n[t](...r.map(ue)) : i
      }
    }),
    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach((t) => {
      e[t] = function (...r) {
        nn()
        const n = ue(this)[t].apply(this, r)
        return on(), n
      }
    }),
    e
  )
}
function Vs(e = !1, t = !1) {
  return function (n, i, o) {
    if (i === '__v_isReactive') return !e
    if (i === '__v_isReadonly') return e
    if (i === '__v_isShallow') return t
    if (i === '__v_raw' && o === (e ? (t ? fd : sl) : t ? ol : il).get(n))
      return n
    const s = Z(n)
    if (!e && s && ce(Ha, i)) return Reflect.get(Ha, i, o)
    const a = Reflect.get(n, i, o)
    return (Bs(i) ? tl.has(i) : Vh(i)) || (e || at(n, 'get', i), t)
      ? a
      : Te(a)
      ? s && Hs(i)
        ? a
        : a.value
      : be(a)
      ? e
        ? al(a)
        : xt(a)
      : a
  }
}
const Yh = rl(),
  Gh = rl(!0)
function rl(e = !1) {
  return function (r, n, i, o) {
    let s = r[n]
    if (_r(s) && Te(s) && !Te(i)) return !1
    if (
      !e &&
      (!bi(i) && !_r(i) && ((s = ue(s)), (i = ue(i))), !Z(r) && Te(s) && !Te(i))
    )
      return (s.value = i), !0
    const a = Z(r) && Hs(n) ? Number(n) < r.length : ce(r, n),
      c = Reflect.set(r, n, i, o)
    return (
      r === ue(o) && (a ? In(i, s) && Lt(r, 'set', n, i) : Lt(r, 'add', n, i)),
      c
    )
  }
}
function Xh(e, t) {
  const r = ce(e, t)
  e[t]
  const n = Reflect.deleteProperty(e, t)
  return n && r && Lt(e, 'delete', t, void 0), n
}
function Zh(e, t) {
  const r = Reflect.has(e, t)
  return (!Bs(t) || !tl.has(t)) && at(e, 'has', t), r
}
function ed(e) {
  return at(e, 'iterate', Z(e) ? 'length' : br), Reflect.ownKeys(e)
}
const nl = { get: Wh, set: Yh, deleteProperty: Xh, has: Zh, ownKeys: ed },
  td = {
    get: Kh,
    set(e, t) {
      return !0
    },
    deleteProperty(e, t) {
      return !0
    },
  },
  rd = Be({}, nl, { get: zh, set: Gh }),
  Ws = (e) => e,
  qi = (e) => Reflect.getPrototypeOf(e)
function Jn(e, t, r = !1, n = !1) {
  e = e.__v_raw
  const i = ue(e),
    o = ue(t)
  r || (t !== o && at(i, 'get', t), at(i, 'get', o))
  const { has: s } = qi(i),
    a = n ? Ws : r ? Ys : Fn
  if (s.call(i, t)) return a(e.get(t))
  if (s.call(i, o)) return a(e.get(o))
  e !== i && e.get(t)
}
function Yn(e, t = !1) {
  const r = this.__v_raw,
    n = ue(r),
    i = ue(e)
  return (
    t || (e !== i && at(n, 'has', e), at(n, 'has', i)),
    e === i ? r.has(e) : r.has(e) || r.has(i)
  )
}
function Gn(e, t = !1) {
  return (
    (e = e.__v_raw), !t && at(ue(e), 'iterate', br), Reflect.get(e, 'size', e)
  )
}
function Qa(e) {
  e = ue(e)
  const t = ue(this)
  return qi(t).has.call(t, e) || (t.add(e), Lt(t, 'add', e, e)), this
}
function Ua(e, t) {
  t = ue(t)
  const r = ue(this),
    { has: n, get: i } = qi(r)
  let o = n.call(r, e)
  o || ((e = ue(e)), (o = n.call(r, e)))
  const s = i.call(r, e)
  return (
    r.set(e, t), o ? In(t, s) && Lt(r, 'set', e, t) : Lt(r, 'add', e, t), this
  )
}
function Va(e) {
  const t = ue(this),
    { has: r, get: n } = qi(t)
  let i = r.call(t, e)
  i || ((e = ue(e)), (i = r.call(t, e))), n && n.call(t, e)
  const o = t.delete(e)
  return i && Lt(t, 'delete', e, void 0), o
}
function Wa() {
  const e = ue(this),
    t = e.size !== 0,
    r = e.clear()
  return t && Lt(e, 'clear', void 0, void 0), r
}
function Xn(e, t) {
  return function (n, i) {
    const o = this,
      s = o.__v_raw,
      a = ue(s),
      c = t ? Ws : e ? Ys : Fn
    return (
      !e && at(a, 'iterate', br), s.forEach((u, l) => n.call(i, c(u), c(l), o))
    )
  }
}
function Zn(e, t, r) {
  return function (...n) {
    const i = this.__v_raw,
      o = ue(i),
      s = Nr(o),
      a = e === 'entries' || (e === Symbol.iterator && s),
      c = e === 'keys' && s,
      u = i[e](...n),
      l = r ? Ws : t ? Ys : Fn
    return (
      !t && at(o, 'iterate', c ? Bo : br),
      {
        next() {
          const { value: h, done: f } = u.next()
          return f
            ? { value: h, done: f }
            : { value: a ? [l(h[0]), l(h[1])] : l(h), done: f }
        },
        [Symbol.iterator]() {
          return this
        },
      }
    )
  }
}
function Ht(e) {
  return function (...t) {
    return e === 'delete' ? !1 : this
  }
}
function nd() {
  const e = {
      get(o) {
        return Jn(this, o)
      },
      get size() {
        return Gn(this)
      },
      has: Yn,
      add: Qa,
      set: Ua,
      delete: Va,
      clear: Wa,
      forEach: Xn(!1, !1),
    },
    t = {
      get(o) {
        return Jn(this, o, !1, !0)
      },
      get size() {
        return Gn(this)
      },
      has: Yn,
      add: Qa,
      set: Ua,
      delete: Va,
      clear: Wa,
      forEach: Xn(!1, !0),
    },
    r = {
      get(o) {
        return Jn(this, o, !0)
      },
      get size() {
        return Gn(this, !0)
      },
      has(o) {
        return Yn.call(this, o, !0)
      },
      add: Ht('add'),
      set: Ht('set'),
      delete: Ht('delete'),
      clear: Ht('clear'),
      forEach: Xn(!0, !1),
    },
    n = {
      get(o) {
        return Jn(this, o, !0, !0)
      },
      get size() {
        return Gn(this, !0)
      },
      has(o) {
        return Yn.call(this, o, !0)
      },
      add: Ht('add'),
      set: Ht('set'),
      delete: Ht('delete'),
      clear: Ht('clear'),
      forEach: Xn(!0, !0),
    }
  return (
    ['keys', 'values', 'entries', Symbol.iterator].forEach((o) => {
      ;(e[o] = Zn(o, !1, !1)),
        (r[o] = Zn(o, !0, !1)),
        (t[o] = Zn(o, !1, !0)),
        (n[o] = Zn(o, !0, !0))
    }),
    [e, r, t, n]
  )
}
const [id, od, sd, ad] = nd()
function zs(e, t) {
  const r = t ? (e ? ad : sd) : e ? od : id
  return (n, i, o) =>
    i === '__v_isReactive'
      ? !e
      : i === '__v_isReadonly'
      ? e
      : i === '__v_raw'
      ? n
      : Reflect.get(ce(r, i) && i in n ? r : n, i, o)
}
const cd = { get: zs(!1, !1) },
  ud = { get: zs(!1, !0) },
  ld = { get: zs(!0, !1) },
  il = new WeakMap(),
  ol = new WeakMap(),
  sl = new WeakMap(),
  fd = new WeakMap()
function hd(e) {
  switch (e) {
    case 'Object':
    case 'Array':
      return 1
    case 'Map':
    case 'Set':
    case 'WeakMap':
    case 'WeakSet':
      return 2
    default:
      return 0
  }
}
function dd(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : hd(jh(e))
}
function xt(e) {
  return _r(e) ? e : Ks(e, !1, nl, cd, il)
}
function pd(e) {
  return Ks(e, !1, rd, ud, ol)
}
function al(e) {
  return Ks(e, !0, td, ld, sl)
}
function Ks(e, t, r, n, i) {
  if (!be(e) || (e.__v_raw && !(t && e.__v_isReactive))) return e
  const o = i.get(e)
  if (o) return o
  const s = dd(e)
  if (s === 0) return e
  const a = new Proxy(e, s === 2 ? n : r)
  return i.set(e, a), a
}
function jr(e) {
  return _r(e) ? jr(e.__v_raw) : !!(e && e.__v_isReactive)
}
function _r(e) {
  return !!(e && e.__v_isReadonly)
}
function bi(e) {
  return !!(e && e.__v_isShallow)
}
function cl(e) {
  return jr(e) || _r(e)
}
function ue(e) {
  const t = e && e.__v_raw
  return t ? ue(t) : e
}
function Js(e) {
  return gi(e, '__v_skip', !0), e
}
const Fn = (e) => (be(e) ? xt(e) : e),
  Ys = (e) => (be(e) ? al(e) : e)
function ul(e) {
  tr && Et && ((e = ue(e)), el(e.dep || (e.dep = Qs())))
}
function ll(e, t) {
  ;(e = ue(e)), e.dep && $o(e.dep)
}
function Te(e) {
  return !!(e && e.__v_isRef === !0)
}
function ge(e) {
  return fl(e, !1)
}
function Ho(e) {
  return fl(e, !0)
}
function fl(e, t) {
  return Te(e) ? e : new yd(e, t)
}
class yd {
  constructor(t, r) {
    ;(this.__v_isShallow = r),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this._rawValue = r ? t : ue(t)),
      (this._value = r ? t : Fn(t))
  }
  get value() {
    return ul(this), this._value
  }
  set value(t) {
    const r = this.__v_isShallow || bi(t) || _r(t)
    ;(t = r ? t : ue(t)),
      In(t, this._rawValue) &&
        ((this._rawValue = t), (this._value = r ? t : Fn(t)), ll(this))
  }
}
function Me(e) {
  return Te(e) ? e.value : e
}
const md = {
  get: (e, t, r) => Me(Reflect.get(e, t, r)),
  set: (e, t, r, n) => {
    const i = e[t]
    return Te(i) && !Te(r) ? ((i.value = r), !0) : Reflect.set(e, t, r, n)
  },
}
function hl(e) {
  return jr(e) ? e : new Proxy(e, md)
}
class vd {
  constructor(t, r, n) {
    ;(this._object = t),
      (this._key = r),
      (this._defaultValue = n),
      (this.__v_isRef = !0)
  }
  get value() {
    const t = this._object[this._key]
    return t === void 0 ? this._defaultValue : t
  }
  set value(t) {
    this._object[this._key] = t
  }
}
function dl(e, t, r) {
  const n = e[t]
  return Te(n) ? n : new vd(e, t, r)
}
var pl
class gd {
  constructor(t, r, n, i) {
    ;(this._setter = r),
      (this.dep = void 0),
      (this.__v_isRef = !0),
      (this[pl] = !1),
      (this._dirty = !0),
      (this.effect = new Us(t, () => {
        this._dirty || ((this._dirty = !0), ll(this))
      })),
      (this.effect.computed = this),
      (this.effect.active = this._cacheable = !i),
      (this.__v_isReadonly = n)
  }
  get value() {
    const t = ue(this)
    return (
      ul(t),
      (t._dirty || !t._cacheable) &&
        ((t._dirty = !1), (t._value = t.effect.run())),
      t._value
    )
  }
  set value(t) {
    this._setter(t)
  }
}
pl = '__v_isReadonly'
function bd(e, t, r = !1) {
  let n, i
  const o = re(e)
  return (
    o ? ((n = e), (i = _t)) : ((n = e.get), (i = e.set)),
    new gd(n, i, o || !i, r)
  )
}
function rr(e, t, r, n) {
  let i
  try {
    i = n ? e(...n) : e()
  } catch (o) {
    sn(o, t, r)
  }
  return i
}
function pt(e, t, r, n) {
  if (re(e)) {
    const o = rr(e, t, r, n)
    return (
      o &&
        $s(o) &&
        o.catch((s) => {
          sn(s, t, r)
        }),
      o
    )
  }
  const i = []
  for (let o = 0; o < e.length; o++) i.push(pt(e[o], t, r, n))
  return i
}
function sn(e, t, r, n = !0) {
  const i = t ? t.vnode : null
  if (t) {
    let o = t.parent
    const s = t.proxy,
      a = r
    for (; o; ) {
      const u = o.ec
      if (u) {
        for (let l = 0; l < u.length; l++) if (u[l](e, s, a) === !1) return
      }
      o = o.parent
    }
    const c = t.appContext.config.errorHandler
    if (c) {
      rr(c, null, 10, [e, s, a])
      return
    }
  }
  wd(e, r, i, n)
}
function wd(e, t, r, n = !0) {
  console.error(e)
}
let Dn = !1,
  Qo = !1
const $e = []
let Ct = 0
const Lr = []
let Dt = null,
  mr = 0
const yl = Promise.resolve()
let Gs = null
function an(e) {
  const t = Gs || yl
  return e ? t.then(this ? e.bind(this) : e) : t
}
function Ed(e) {
  let t = Ct + 1,
    r = $e.length
  for (; t < r; ) {
    const n = (t + r) >>> 1
    Mn($e[n]) < e ? (t = n + 1) : (r = n)
  }
  return t
}
function Bi(e) {
  ;(!$e.length || !$e.includes(e, Dn && e.allowRecurse ? Ct + 1 : Ct)) &&
    (e.id == null ? $e.push(e) : $e.splice(Ed(e.id), 0, e), ml())
}
function ml() {
  !Dn && !Qo && ((Qo = !0), (Gs = yl.then(gl)))
}
function _d(e) {
  const t = $e.indexOf(e)
  t > Ct && $e.splice(t, 1)
}
function vl(e) {
  Z(e)
    ? Lr.push(...e)
    : (!Dt || !Dt.includes(e, e.allowRecurse ? mr + 1 : mr)) && Lr.push(e),
    ml()
}
function za(e, t = Dn ? Ct + 1 : 0) {
  for (; t < $e.length; t++) {
    const r = $e[t]
    r && r.pre && ($e.splice(t, 1), t--, r())
  }
}
function wi(e) {
  if (Lr.length) {
    const t = [...new Set(Lr)]
    if (((Lr.length = 0), Dt)) {
      Dt.push(...t)
      return
    }
    for (Dt = t, Dt.sort((r, n) => Mn(r) - Mn(n)), mr = 0; mr < Dt.length; mr++)
      Dt[mr]()
    ;(Dt = null), (mr = 0)
  }
}
const Mn = (e) => (e.id == null ? 1 / 0 : e.id),
  Sd = (e, t) => {
    const r = Mn(e) - Mn(t)
    if (r === 0) {
      if (e.pre && !t.pre) return -1
      if (t.pre && !e.pre) return 1
    }
    return r
  }
function gl(e) {
  ;(Qo = !1), (Dn = !0), $e.sort(Sd)
  const t = _t
  try {
    for (Ct = 0; Ct < $e.length; Ct++) {
      const r = $e[Ct]
      r && r.active !== !1 && rr(r, null, 14)
    }
  } finally {
    ;(Ct = 0),
      ($e.length = 0),
      wi(),
      (Dn = !1),
      (Gs = null),
      ($e.length || Lr.length) && gl()
  }
}
function Od(e, t, ...r) {
  if (e.isUnmounted) return
  const n = e.vnode.props || we
  let i = r
  const o = t.startsWith('update:'),
    s = o && t.slice(7)
  if (s && s in n) {
    const l = `${s === 'modelValue' ? 'model' : s}Modifiers`,
      { number: h, trim: f } = n[l] || we
    f && (i = r.map((d) => (Pe(d) ? d.trim() : d))), h && (i = r.map(Li))
  }
  let a,
    c = n[(a = oo(t))] || n[(a = oo(Pt(t)))]
  !c && o && (c = n[(a = oo(rn(t)))]), c && pt(c, e, 6, i)
  const u = n[a + 'Once']
  if (u) {
    if (!e.emitted) e.emitted = {}
    else if (e.emitted[a]) return
    ;(e.emitted[a] = !0), pt(u, e, 6, i)
  }
}
function bl(e, t, r = !1) {
  const n = t.emitsCache,
    i = n.get(e)
  if (i !== void 0) return i
  const o = e.emits
  let s = {},
    a = !1
  if (!re(e)) {
    const c = (u) => {
      const l = bl(u, t, !0)
      l && ((a = !0), Be(s, l))
    }
    !r && t.mixins.length && t.mixins.forEach(c),
      e.extends && c(e.extends),
      e.mixins && e.mixins.forEach(c)
  }
  return !o && !a
    ? (be(e) && n.set(e, null), null)
    : (Z(o) ? o.forEach((c) => (s[c] = null)) : Be(s, o),
      be(e) && n.set(e, s),
      s)
}
function $i(e, t) {
  return !e || !Un(t)
    ? !1
    : ((t = t.slice(2).replace(/Once$/, '')),
      ce(e, t[0].toLowerCase() + t.slice(1)) || ce(e, rn(t)) || ce(e, t))
}
let He = null,
  Hi = null
function Ei(e) {
  const t = He
  return (He = e), (Hi = (e && e.type.__scopeId) || null), t
}
function _E(e) {
  Hi = e
}
function SE() {
  Hi = null
}
function _n(e, t = He, r) {
  if (!t || e._n) return e
  const n = (...i) => {
    n._d && ic(-1)
    const o = Ei(t)
    let s
    try {
      s = e(...i)
    } finally {
      Ei(o), n._d && ic(1)
    }
    return s
  }
  return (n._n = !0), (n._c = !0), (n._d = !0), n
}
function so(e) {
  const {
    type: t,
    vnode: r,
    proxy: n,
    withProxy: i,
    props: o,
    propsOptions: [s],
    slots: a,
    attrs: c,
    emit: u,
    render: l,
    renderCache: h,
    data: f,
    setupState: d,
    ctx: p,
    inheritAttrs: b,
  } = e
  let w, v
  const y = Ei(e)
  try {
    if (r.shapeFlag & 4) {
      const E = i || n
      ;(w = ft(l.call(E, E, h, o, d, f, p))), (v = c)
    } else {
      const E = t
      ;(w = ft(
        E.length > 1 ? E(o, { attrs: c, slots: a, emit: u }) : E(o, null)
      )),
        (v = t.props ? c : Td(c))
    }
  } catch (E) {
    ;(On.length = 0), sn(E, e, 1), (w = ve(We))
  }
  let g = w
  if (v && b !== !1) {
    const E = Object.keys(v),
      { shapeFlag: S } = g
    E.length && S & 7 && (s && E.some(Ls) && (v = Cd(v, s)), (g = qt(g, v)))
  }
  return (
    r.dirs && ((g = qt(g)), (g.dirs = g.dirs ? g.dirs.concat(r.dirs) : r.dirs)),
    r.transition && (g.transition = r.transition),
    (w = g),
    Ei(y),
    w
  )
}
function kd(e) {
  let t
  for (let r = 0; r < e.length; r++) {
    const n = e[r]
    if (Wr(n)) {
      if (n.type !== We || n.children === 'v-if') {
        if (t) return
        t = n
      }
    } else return
  }
  return t
}
const Td = (e) => {
    let t
    for (const r in e)
      (r === 'class' || r === 'style' || Un(r)) && ((t || (t = {}))[r] = e[r])
    return t
  },
  Cd = (e, t) => {
    const r = {}
    for (const n in e) (!Ls(n) || !(n.slice(9) in t)) && (r[n] = e[n])
    return r
  }
function Rd(e, t, r) {
  const { props: n, children: i, component: o } = e,
    { props: s, children: a, patchFlag: c } = t,
    u = o.emitsOptions
  if (t.dirs || t.transition) return !0
  if (r && c >= 0) {
    if (c & 1024) return !0
    if (c & 16) return n ? Ka(n, s, u) : !!s
    if (c & 8) {
      const l = t.dynamicProps
      for (let h = 0; h < l.length; h++) {
        const f = l[h]
        if (s[f] !== n[f] && !$i(u, f)) return !0
      }
    }
  } else
    return (i || a) && (!a || !a.$stable)
      ? !0
      : n === s
      ? !1
      : n
      ? s
        ? Ka(n, s, u)
        : !0
      : !!s
  return !1
}
function Ka(e, t, r) {
  const n = Object.keys(t)
  if (n.length !== Object.keys(e).length) return !0
  for (let i = 0; i < n.length; i++) {
    const o = n[i]
    if (t[o] !== e[o] && !$i(r, o)) return !0
  }
  return !1
}
function Xs({ vnode: e, parent: t }, r) {
  for (; t && t.subTree === e; ) ((e = t.vnode).el = r), (t = t.parent)
}
const wl = (e) => e.__isSuspense,
  Pd = {
    name: 'Suspense',
    __isSuspense: !0,
    process(e, t, r, n, i, o, s, a, c, u) {
      e == null ? xd(t, r, n, i, o, s, a, c, u) : Ad(e, t, r, n, i, s, a, c, u)
    },
    hydrate: Id,
    create: Zs,
    normalize: Fd,
  },
  El = Pd
function Nn(e, t) {
  const r = e.props && e.props[t]
  re(r) && r()
}
function xd(e, t, r, n, i, o, s, a, c) {
  const {
      p: u,
      o: { createElement: l },
    } = c,
    h = l('div'),
    f = (e.suspense = Zs(e, i, n, t, h, r, o, s, a, c))
  u(null, (f.pendingBranch = e.ssContent), h, null, n, f, o, s),
    f.deps > 0
      ? (Nn(e, 'onPending'),
        Nn(e, 'onFallback'),
        u(null, e.ssFallback, t, r, n, null, o, s),
        qr(f, e.ssFallback))
      : f.resolve()
}
function Ad(e, t, r, n, i, o, s, a, { p: c, um: u, o: { createElement: l } }) {
  const h = (t.suspense = e.suspense)
  ;(h.vnode = t), (t.el = e.el)
  const f = t.ssContent,
    d = t.ssFallback,
    { activeBranch: p, pendingBranch: b, isInFallback: w, isHydrating: v } = h
  if (b)
    (h.pendingBranch = f),
      Rt(f, b)
        ? (c(b, f, h.hiddenContainer, null, i, h, o, s, a),
          h.deps <= 0
            ? h.resolve()
            : w && (c(p, d, r, n, i, null, o, s, a), qr(h, d)))
        : (h.pendingId++,
          v ? ((h.isHydrating = !1), (h.activeBranch = b)) : u(b, i, h),
          (h.deps = 0),
          (h.effects.length = 0),
          (h.hiddenContainer = l('div')),
          w
            ? (c(null, f, h.hiddenContainer, null, i, h, o, s, a),
              h.deps <= 0
                ? h.resolve()
                : (c(p, d, r, n, i, null, o, s, a), qr(h, d)))
            : p && Rt(f, p)
            ? (c(p, f, r, n, i, h, o, s, a), h.resolve(!0))
            : (c(null, f, h.hiddenContainer, null, i, h, o, s, a),
              h.deps <= 0 && h.resolve()))
  else if (p && Rt(f, p)) c(p, f, r, n, i, h, o, s, a), qr(h, f)
  else if (
    (Nn(t, 'onPending'),
    (h.pendingBranch = f),
    h.pendingId++,
    c(null, f, h.hiddenContainer, null, i, h, o, s, a),
    h.deps <= 0)
  )
    h.resolve()
  else {
    const { timeout: y, pendingId: g } = h
    y > 0
      ? setTimeout(() => {
          h.pendingId === g && h.fallback(d)
        }, y)
      : y === 0 && h.fallback(d)
  }
}
function Zs(e, t, r, n, i, o, s, a, c, u, l = !1) {
  const {
      p: h,
      m: f,
      um: d,
      n: p,
      o: { parentNode: b, remove: w },
    } = u,
    v = Li(e.props && e.props.timeout),
    y = {
      vnode: e,
      parent: t,
      parentComponent: r,
      isSVG: s,
      container: n,
      hiddenContainer: i,
      anchor: o,
      deps: 0,
      pendingId: 0,
      timeout: typeof v == 'number' ? v : -1,
      activeBranch: null,
      pendingBranch: null,
      isInFallback: !0,
      isHydrating: l,
      isUnmounted: !1,
      effects: [],
      resolve(g = !1) {
        const {
          vnode: E,
          activeBranch: S,
          pendingBranch: C,
          pendingId: x,
          effects: T,
          parentComponent: B,
          container: L,
        } = y
        if (y.isHydrating) y.isHydrating = !1
        else if (!g) {
          const z = S && C.transition && C.transition.mode === 'out-in'
          z &&
            (S.transition.afterLeave = () => {
              x === y.pendingId && f(C, L, A, 0)
            })
          let { anchor: A } = y
          S && ((A = p(S)), d(S, B, y, !0)), z || f(C, L, A, 0)
        }
        qr(y, C), (y.pendingBranch = null), (y.isInFallback = !1)
        let J = y.parent,
          j = !1
        for (; J; ) {
          if (J.pendingBranch) {
            J.effects.push(...T), (j = !0)
            break
          }
          J = J.parent
        }
        j || vl(T), (y.effects = []), Nn(E, 'onResolve')
      },
      fallback(g) {
        if (!y.pendingBranch) return
        const {
          vnode: E,
          activeBranch: S,
          parentComponent: C,
          container: x,
          isSVG: T,
        } = y
        Nn(E, 'onFallback')
        const B = p(S),
          L = () => {
            y.isInFallback && (h(null, g, x, B, C, null, T, a, c), qr(y, g))
          },
          J = g.transition && g.transition.mode === 'out-in'
        J && (S.transition.afterLeave = L),
          (y.isInFallback = !0),
          d(S, C, null, !0),
          J || L()
      },
      move(g, E, S) {
        y.activeBranch && f(y.activeBranch, g, E, S), (y.container = g)
      },
      next() {
        return y.activeBranch && p(y.activeBranch)
      },
      registerDep(g, E) {
        const S = !!y.pendingBranch
        S && y.deps++
        const C = g.vnode.el
        g.asyncDep
          .catch((x) => {
            sn(x, g, 0)
          })
          .then((x) => {
            if (g.isUnmounted || y.isUnmounted || y.pendingId !== g.suspenseId)
              return
            g.asyncResolved = !0
            const { vnode: T } = g
            Jo(g, x, !1), C && (T.el = C)
            const B = !C && g.subTree.el
            E(g, T, b(C || g.subTree.el), C ? null : p(g.subTree), y, s, c),
              B && w(B),
              Xs(g, T.el),
              S && --y.deps === 0 && y.resolve()
          })
      },
      unmount(g, E) {
        ;(y.isUnmounted = !0),
          y.activeBranch && d(y.activeBranch, r, g, E),
          y.pendingBranch && d(y.pendingBranch, r, g, E)
      },
    }
  return y
}
function Id(e, t, r, n, i, o, s, a, c) {
  const u = (t.suspense = Zs(
      t,
      n,
      r,
      e.parentNode,
      document.createElement('div'),
      null,
      i,
      o,
      s,
      a,
      !0
    )),
    l = c(e, (u.pendingBranch = t.ssContent), r, u, o, s)
  return u.deps === 0 && u.resolve(), l
}
function Fd(e) {
  const { shapeFlag: t, children: r } = e,
    n = t & 32
  ;(e.ssContent = Ja(n ? r.default : r)),
    (e.ssFallback = n ? Ja(r.fallback) : ve(We))
}
function Ja(e) {
  let t
  if (re(e)) {
    const r = Vr && e._c
    r && ((e._d = !1), er()), (e = e()), r && ((e._d = !0), (t = dt), Hl())
  }
  return (
    Z(e) && (e = kd(e)),
    (e = ft(e)),
    t && !e.dynamicChildren && (e.dynamicChildren = t.filter((r) => r !== e)),
    e
  )
}
function _l(e, t) {
  t && t.pendingBranch
    ? Z(e)
      ? t.effects.push(...e)
      : t.effects.push(e)
    : vl(e)
}
function qr(e, t) {
  e.activeBranch = t
  const { vnode: r, parentComponent: n } = e,
    i = (r.el = t.el)
  n && n.subTree === r && ((n.vnode.el = i), Xs(n, i))
}
function Br(e, t) {
  if (Ae) {
    let r = Ae.provides
    const n = Ae.parent && Ae.parent.provides
    n === r && (r = Ae.provides = Object.create(n)), (r[e] = t)
  }
}
function Ve(e, t, r = !1) {
  const n = Ae || He
  if (n) {
    const i =
      n.parent == null
        ? n.vnode.appContext && n.vnode.appContext.provides
        : n.parent.provides
    if (i && e in i) return i[e]
    if (arguments.length > 1) return r && re(t) ? t.call(n.proxy) : t
  }
}
function Dd(e, t) {
  return ea(e, null, t)
}
const ei = {}
function jt(e, t, r) {
  return ea(e, t, r)
}
function ea(
  e,
  t,
  { immediate: r, deep: n, flush: i, onTrack: o, onTrigger: s } = we
) {
  const a = Ae
  let c,
    u = !1,
    l = !1
  if (
    (Te(e)
      ? ((c = () => e.value), (u = bi(e)))
      : jr(e)
      ? ((c = () => e), (n = !0))
      : Z(e)
      ? ((l = !0),
        (u = e.some((g) => jr(g) || bi(g))),
        (c = () =>
          e.map((g) => {
            if (Te(g)) return g.value
            if (jr(g)) return Ar(g)
            if (re(g)) return rr(g, a, 2)
          })))
      : re(e)
      ? t
        ? (c = () => rr(e, a, 2))
        : (c = () => {
            if (!(a && a.isUnmounted)) return h && h(), pt(e, a, 3, [f])
          })
      : (c = _t),
    t && n)
  ) {
    const g = c
    c = () => Ar(g())
  }
  let h,
    f = (g) => {
      h = v.onStop = () => {
        rr(g, a, 4)
      }
    },
    d
  if (zr)
    if (
      ((f = _t),
      t ? r && pt(t, a, 3, [c(), l ? [] : void 0, f]) : c(),
      i === 'sync')
    ) {
      const g = Cp()
      d = g.__watcherHandles || (g.__watcherHandles = [])
    } else return _t
  let p = l ? new Array(e.length).fill(ei) : ei
  const b = () => {
    if (v.active)
      if (t) {
        const g = v.run()
        ;(n || u || (l ? g.some((E, S) => In(E, p[S])) : In(g, p))) &&
          (h && h(),
          pt(t, a, 3, [g, p === ei ? void 0 : l && p[0] === ei ? [] : p, f]),
          (p = g))
      } else v.run()
  }
  b.allowRecurse = !!t
  let w
  i === 'sync'
    ? (w = b)
    : i === 'post'
    ? (w = () => Le(b, a && a.suspense))
    : ((b.pre = !0), a && (b.id = a.uid), (w = () => Bi(b)))
  const v = new Us(c, w)
  t
    ? r
      ? b()
      : (p = v.run())
    : i === 'post'
    ? Le(v.run.bind(v), a && a.suspense)
    : v.run()
  const y = () => {
    v.stop(), a && a.scope && qs(a.scope.effects, v)
  }
  return d && d.push(y), y
}
function Md(e, t, r) {
  const n = this.proxy,
    i = Pe(e) ? (e.includes('.') ? Sl(n, e) : () => n[e]) : e.bind(n, n)
  let o
  re(t) ? (o = t) : ((o = t.handler), (r = t))
  const s = Ae
  or(this)
  const a = ea(i, o.bind(n), r)
  return s ? or(s) : nr(), a
}
function Sl(e, t) {
  const r = t.split('.')
  return () => {
    let n = e
    for (let i = 0; i < r.length && n; i++) n = n[r[i]]
    return n
  }
}
function Ar(e, t) {
  if (!be(e) || e.__v_skip || ((t = t || new Set()), t.has(e))) return e
  if ((t.add(e), Te(e))) Ar(e.value, t)
  else if (Z(e)) for (let r = 0; r < e.length; r++) Ar(e[r], t)
  else if (zu(e) || Nr(e))
    e.forEach((r) => {
      Ar(r, t)
    })
  else if (Ju(e)) for (const r in e) Ar(e[r], t)
  return e
}
function Nd() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: new Map(),
  }
  return (
    Ui(() => {
      e.isMounted = !0
    }),
    cr(() => {
      e.isUnmounting = !0
    }),
    e
  )
}
const lt = [Function, Array],
  jd = {
    name: 'BaseTransition',
    props: {
      mode: String,
      appear: Boolean,
      persisted: Boolean,
      onBeforeEnter: lt,
      onEnter: lt,
      onAfterEnter: lt,
      onEnterCancelled: lt,
      onBeforeLeave: lt,
      onLeave: lt,
      onAfterLeave: lt,
      onLeaveCancelled: lt,
      onBeforeAppear: lt,
      onAppear: lt,
      onAfterAppear: lt,
      onAppearCancelled: lt,
    },
    setup(e, { slots: t }) {
      const r = mt(),
        n = Nd()
      let i
      return () => {
        const o = t.default && Tl(t.default(), !0)
        if (!o || !o.length) return
        let s = o[0]
        if (o.length > 1) {
          for (const b of o)
            if (b.type !== We) {
              s = b
              break
            }
        }
        const a = ue(e),
          { mode: c } = a
        if (n.isLeaving) return ao(s)
        const u = Ya(s)
        if (!u) return ao(s)
        const l = Uo(u, a, n, r)
        _i(u, l)
        const h = r.subTree,
          f = h && Ya(h)
        let d = !1
        const { getTransitionKey: p } = u.type
        if (p) {
          const b = p()
          i === void 0 ? (i = b) : b !== i && ((i = b), (d = !0))
        }
        if (f && f.type !== We && (!Rt(u, f) || d)) {
          const b = Uo(f, a, n, r)
          if ((_i(f, b), c === 'out-in'))
            return (
              (n.isLeaving = !0),
              (b.afterLeave = () => {
                ;(n.isLeaving = !1), r.update.active !== !1 && r.update()
              }),
              ao(s)
            )
          c === 'in-out' &&
            u.type !== We &&
            (b.delayLeave = (w, v, y) => {
              const g = kl(n, f)
              ;(g[String(f.key)] = f),
                (w._leaveCb = () => {
                  v(), (w._leaveCb = void 0), delete l.delayedLeave
                }),
                (l.delayedLeave = y)
            })
        }
        return s
      }
    },
  },
  Ol = jd
function kl(e, t) {
  const { leavingVNodes: r } = e
  let n = r.get(t.type)
  return n || ((n = Object.create(null)), r.set(t.type, n)), n
}
function Uo(e, t, r, n) {
  const {
      appear: i,
      mode: o,
      persisted: s = !1,
      onBeforeEnter: a,
      onEnter: c,
      onAfterEnter: u,
      onEnterCancelled: l,
      onBeforeLeave: h,
      onLeave: f,
      onAfterLeave: d,
      onLeaveCancelled: p,
      onBeforeAppear: b,
      onAppear: w,
      onAfterAppear: v,
      onAppearCancelled: y,
    } = t,
    g = String(e.key),
    E = kl(r, e),
    S = (T, B) => {
      T && pt(T, n, 9, B)
    },
    C = (T, B) => {
      const L = B[1]
      S(T, B),
        Z(T) ? T.every((J) => J.length <= 1) && L() : T.length <= 1 && L()
    },
    x = {
      mode: o,
      persisted: s,
      beforeEnter(T) {
        let B = a
        if (!r.isMounted)
          if (i) B = b || a
          else return
        T._leaveCb && T._leaveCb(!0)
        const L = E[g]
        L && Rt(e, L) && L.el._leaveCb && L.el._leaveCb(), S(B, [T])
      },
      enter(T) {
        let B = c,
          L = u,
          J = l
        if (!r.isMounted)
          if (i) (B = w || c), (L = v || u), (J = y || l)
          else return
        let j = !1
        const z = (T._enterCb = (A) => {
          j ||
            ((j = !0),
            A ? S(J, [T]) : S(L, [T]),
            x.delayedLeave && x.delayedLeave(),
            (T._enterCb = void 0))
        })
        B ? C(B, [T, z]) : z()
      },
      leave(T, B) {
        const L = String(e.key)
        if ((T._enterCb && T._enterCb(!0), r.isUnmounting)) return B()
        S(h, [T])
        let J = !1
        const j = (T._leaveCb = (z) => {
          J ||
            ((J = !0),
            B(),
            z ? S(p, [T]) : S(d, [T]),
            (T._leaveCb = void 0),
            E[L] === e && delete E[L])
        })
        ;(E[L] = e), f ? C(f, [T, j]) : j()
      },
      clone(T) {
        return Uo(T, t, r, n)
      },
    }
  return x
}
function ao(e) {
  if (Vn(e)) return (e = qt(e)), (e.children = null), e
}
function Ya(e) {
  return Vn(e) ? (e.children ? e.children[0] : void 0) : e
}
function _i(e, t) {
  e.shapeFlag & 6 && e.component
    ? _i(e.component.subTree, t)
    : e.shapeFlag & 128
    ? ((e.ssContent.transition = t.clone(e.ssContent)),
      (e.ssFallback.transition = t.clone(e.ssFallback)))
    : (e.transition = t)
}
function Tl(e, t = !1, r) {
  let n = [],
    i = 0
  for (let o = 0; o < e.length; o++) {
    let s = e[o]
    const a = r == null ? s.key : String(r) + String(s.key != null ? s.key : o)
    s.type === Ye
      ? (s.patchFlag & 128 && i++, (n = n.concat(Tl(s.children, t, a))))
      : (t || s.type !== We) && n.push(a != null ? qt(s, { key: a }) : s)
  }
  if (i > 1) for (let o = 0; o < n.length; o++) n[o].patchFlag = -2
  return n
}
function Fe(e) {
  return re(e) ? { setup: e, name: e.name } : e
}
const wr = (e) => !!e.type.__asyncLoader
function Ld(e) {
  re(e) && (e = { loader: e })
  const {
    loader: t,
    loadingComponent: r,
    errorComponent: n,
    delay: i = 200,
    timeout: o,
    suspensible: s = !0,
    onError: a,
  } = e
  let c = null,
    u,
    l = 0
  const h = () => (l++, (c = null), f()),
    f = () => {
      let d
      return (
        c ||
        (d = c =
          t()
            .catch((p) => {
              if (((p = p instanceof Error ? p : new Error(String(p))), a))
                return new Promise((b, w) => {
                  a(
                    p,
                    () => b(h()),
                    () => w(p),
                    l + 1
                  )
                })
              throw p
            })
            .then((p) =>
              d !== c && c
                ? c
                : (p &&
                    (p.__esModule || p[Symbol.toStringTag] === 'Module') &&
                    (p = p.default),
                  (u = p),
                  p)
            ))
      )
    }
  return Fe({
    name: 'AsyncComponentWrapper',
    __asyncLoader: f,
    get __asyncResolved() {
      return u
    },
    setup() {
      const d = Ae
      if (u) return () => co(u, d)
      const p = (y) => {
        ;(c = null), sn(y, d, 13, !n)
      }
      if ((s && d.suspense) || zr)
        return f()
          .then((y) => () => co(y, d))
          .catch((y) => (p(y), () => (n ? ve(n, { error: y }) : null)))
      const b = ge(!1),
        w = ge(),
        v = ge(!!i)
      return (
        i &&
          setTimeout(() => {
            v.value = !1
          }, i),
        o != null &&
          setTimeout(() => {
            if (!b.value && !w.value) {
              const y = new Error(`Async component timed out after ${o}ms.`)
              p(y), (w.value = y)
            }
          }, o),
        f()
          .then(() => {
            ;(b.value = !0),
              d.parent && Vn(d.parent.vnode) && Bi(d.parent.update)
          })
          .catch((y) => {
            p(y), (w.value = y)
          }),
        () => {
          if (b.value && u) return co(u, d)
          if (w.value && n) return ve(n, { error: w.value })
          if (r && !v.value) return ve(r)
        }
      )
    },
  })
}
function co(e, t) {
  const { ref: r, props: n, children: i, ce: o } = t.vnode,
    s = ve(e, n, i)
  return (s.ref = r), (s.ce = o), delete t.vnode.ce, s
}
const Vn = (e) => e.type.__isKeepAlive,
  qd = {
    name: 'KeepAlive',
    __isKeepAlive: !0,
    props: {
      include: [String, RegExp, Array],
      exclude: [String, RegExp, Array],
      max: [String, Number],
    },
    setup(e, { slots: t }) {
      const r = mt(),
        n = r.ctx
      if (!n.renderer)
        return () => {
          const y = t.default && t.default()
          return y && y.length === 1 ? y[0] : y
        }
      const i = new Map(),
        o = new Set()
      let s = null
      const a = r.suspense,
        {
          renderer: {
            p: c,
            m: u,
            um: l,
            o: { createElement: h },
          },
        } = n,
        f = h('div')
      ;(n.activate = (y, g, E, S, C) => {
        const x = y.component
        u(y, g, E, 0, a),
          c(x.vnode, y, g, E, x, a, S, y.slotScopeIds, C),
          Le(() => {
            ;(x.isDeactivated = !1), x.a && En(x.a)
            const T = y.props && y.props.onVnodeMounted
            T && Je(T, x.parent, y)
          }, a)
      }),
        (n.deactivate = (y) => {
          const g = y.component
          u(y, f, null, 1, a),
            Le(() => {
              g.da && En(g.da)
              const E = y.props && y.props.onVnodeUnmounted
              E && Je(E, g.parent, y), (g.isDeactivated = !0)
            }, a)
        })
      function d(y) {
        uo(y), l(y, r, a, !0)
      }
      function p(y) {
        i.forEach((g, E) => {
          const S = Yo(g.type)
          S && (!y || !y(S)) && b(E)
        })
      }
      function b(y) {
        const g = i.get(y)
        !s || g.type !== s.type ? d(g) : s && uo(s), i.delete(y), o.delete(y)
      }
      jt(
        () => [e.include, e.exclude],
        ([y, g]) => {
          y && p((E) => vn(y, E)), g && p((E) => !vn(g, E))
        },
        { flush: 'post', deep: !0 }
      )
      let w = null
      const v = () => {
        w != null && i.set(w, lo(r.subTree))
      }
      return (
        Ui(v),
        Pl(v),
        cr(() => {
          i.forEach((y) => {
            const { subTree: g, suspense: E } = r,
              S = lo(g)
            if (y.type === S.type) {
              uo(S)
              const C = S.component.da
              C && Le(C, E)
              return
            }
            d(y)
          })
        }),
        () => {
          if (((w = null), !t.default)) return null
          const y = t.default(),
            g = y[0]
          if (y.length > 1) return (s = null), y
          if (!Wr(g) || (!(g.shapeFlag & 4) && !(g.shapeFlag & 128)))
            return (s = null), g
          let E = lo(g)
          const S = E.type,
            C = Yo(wr(E) ? E.type.__asyncResolved || {} : S),
            { include: x, exclude: T, max: B } = e
          if ((x && (!C || !vn(x, C))) || (T && C && vn(T, C)))
            return (s = E), g
          const L = E.key == null ? S : E.key,
            J = i.get(L)
          return (
            E.el && ((E = qt(E)), g.shapeFlag & 128 && (g.ssContent = E)),
            (w = L),
            J
              ? ((E.el = J.el),
                (E.component = J.component),
                E.transition && _i(E, E.transition),
                (E.shapeFlag |= 512),
                o.delete(L),
                o.add(L))
              : (o.add(L),
                B && o.size > parseInt(B, 10) && b(o.values().next().value)),
            (E.shapeFlag |= 256),
            (s = E),
            wl(g.type) ? g : E
          )
        }
      )
    },
  },
  Bd = qd
function vn(e, t) {
  return Z(e)
    ? e.some((r) => vn(r, t))
    : Pe(e)
    ? e.split(',').includes(t)
    : e.test
    ? e.test(t)
    : !1
}
function $d(e, t) {
  Cl(e, 'a', t)
}
function Hd(e, t) {
  Cl(e, 'da', t)
}
function Cl(e, t, r = Ae) {
  const n =
    e.__wdc ||
    (e.__wdc = () => {
      let i = r
      for (; i; ) {
        if (i.isDeactivated) return
        i = i.parent
      }
      return e()
    })
  if ((Qi(t, n, r), r)) {
    let i = r.parent
    for (; i && i.parent; ) Vn(i.parent.vnode) && Qd(n, t, r, i), (i = i.parent)
  }
}
function Qd(e, t, r, n) {
  const i = Qi(t, e, n, !0)
  jn(() => {
    qs(n[t], i)
  }, r)
}
function uo(e) {
  ;(e.shapeFlag &= -257), (e.shapeFlag &= -513)
}
function lo(e) {
  return e.shapeFlag & 128 ? e.ssContent : e
}
function Qi(e, t, r = Ae, n = !1) {
  if (r) {
    const i = r[e] || (r[e] = []),
      o =
        t.__weh ||
        (t.__weh = (...s) => {
          if (r.isUnmounted) return
          nn(), or(r)
          const a = pt(t, r, e, s)
          return nr(), on(), a
        })
    return n ? i.unshift(o) : i.push(o), o
  }
}
const $t =
    (e) =>
    (t, r = Ae) =>
      (!zr || e === 'sp') && Qi(e, (...n) => t(...n), r),
  Rl = $t('bm'),
  Ui = $t('m'),
  Ud = $t('bu'),
  Pl = $t('u'),
  cr = $t('bum'),
  jn = $t('um'),
  Vd = $t('sp'),
  Wd = $t('rtg'),
  zd = $t('rtc')
function xl(e, t = Ae) {
  Qi('ec', e, t)
}
function Tt(e, t, r, n) {
  const i = e.dirs,
    o = t && t.dirs
  for (let s = 0; s < i.length; s++) {
    const a = i[s]
    o && (a.oldValue = o[s].value)
    let c = a.dir[n]
    c && (nn(), pt(c, r, 8, [e.el, a, e, t]), on())
  }
}
const Al = 'components'
function Kd(e, t) {
  return Yd(Al, e, !0, t) || e
}
const Jd = Symbol()
function Yd(e, t, r = !0, n = !1) {
  const i = He || Ae
  if (i) {
    const o = i.type
    if (e === Al) {
      const a = Yo(o, !1)
      if (a && (a === t || a === Pt(t) || a === ji(Pt(t)))) return o
    }
    const s = Ga(i[e] || o[e], t) || Ga(i.appContext[e], t)
    return !s && n ? o : s
  }
}
function Ga(e, t) {
  return e && (e[t] || e[Pt(t)] || e[ji(Pt(t))])
}
function OE(e, t, r, n) {
  let i
  const o = r && r[n]
  if (Z(e) || Pe(e)) {
    i = new Array(e.length)
    for (let s = 0, a = e.length; s < a; s++)
      i[s] = t(e[s], s, void 0, o && o[s])
  } else if (typeof e == 'number') {
    i = new Array(e)
    for (let s = 0; s < e; s++) i[s] = t(s + 1, s, void 0, o && o[s])
  } else if (be(e))
    if (e[Symbol.iterator])
      i = Array.from(e, (s, a) => t(s, a, void 0, o && o[a]))
    else {
      const s = Object.keys(e)
      i = new Array(s.length)
      for (let a = 0, c = s.length; a < c; a++) {
        const u = s[a]
        i[a] = t(e[u], u, a, o && o[a])
      }
    }
  else i = []
  return r && (r[n] = i), i
}
function kE(e, t, r = {}, n, i) {
  if (He.isCE || (He.parent && wr(He.parent) && He.parent.isCE))
    return t !== 'default' && (r.name = t), ve('slot', r, n && n())
  let o = e[t]
  o && o._c && (o._d = !1), er()
  const s = o && Il(o(r)),
    a = gr(
      Ye,
      { key: r.key || (s && s.key) || `_${t}` },
      s || (n ? n() : []),
      s && e._ === 1 ? 64 : -2
    )
  return (
    !i && a.scopeId && (a.slotScopeIds = [a.scopeId + '-s']),
    o && o._c && (o._d = !0),
    a
  )
}
function Il(e) {
  return e.some((t) =>
    Wr(t) ? !(t.type === We || (t.type === Ye && !Il(t.children))) : !0
  )
    ? e
    : null
}
const Vo = (e) => (e ? (zl(e) ? ia(e) || e.proxy : Vo(e.parent)) : null),
  Sn = Be(Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Vo(e.parent),
    $root: (e) => Vo(e.root),
    $emit: (e) => e.emit,
    $options: (e) => ta(e),
    $forceUpdate: (e) => e.f || (e.f = () => Bi(e.update)),
    $nextTick: (e) => e.n || (e.n = an.bind(e.proxy)),
    $watch: (e) => Md.bind(e),
  }),
  fo = (e, t) => e !== we && !e.__isScriptSetup && ce(e, t),
  Gd = {
    get({ _: e }, t) {
      const {
        ctx: r,
        setupState: n,
        data: i,
        props: o,
        accessCache: s,
        type: a,
        appContext: c,
      } = e
      let u
      if (t[0] !== '$') {
        const d = s[t]
        if (d !== void 0)
          switch (d) {
            case 1:
              return n[t]
            case 2:
              return i[t]
            case 4:
              return r[t]
            case 3:
              return o[t]
          }
        else {
          if (fo(n, t)) return (s[t] = 1), n[t]
          if (i !== we && ce(i, t)) return (s[t] = 2), i[t]
          if ((u = e.propsOptions[0]) && ce(u, t)) return (s[t] = 3), o[t]
          if (r !== we && ce(r, t)) return (s[t] = 4), r[t]
          Wo && (s[t] = 0)
        }
      }
      const l = Sn[t]
      let h, f
      if (l) return t === '$attrs' && at(e, 'get', t), l(e)
      if ((h = a.__cssModules) && (h = h[t])) return h
      if (r !== we && ce(r, t)) return (s[t] = 4), r[t]
      if (((f = c.config.globalProperties), ce(f, t))) return f[t]
    },
    set({ _: e }, t, r) {
      const { data: n, setupState: i, ctx: o } = e
      return fo(i, t)
        ? ((i[t] = r), !0)
        : n !== we && ce(n, t)
        ? ((n[t] = r), !0)
        : ce(e.props, t) || (t[0] === '$' && t.slice(1) in e)
        ? !1
        : ((o[t] = r), !0)
    },
    has(
      {
        _: {
          data: e,
          setupState: t,
          accessCache: r,
          ctx: n,
          appContext: i,
          propsOptions: o,
        },
      },
      s
    ) {
      let a
      return (
        !!r[s] ||
        (e !== we && ce(e, s)) ||
        fo(t, s) ||
        ((a = o[0]) && ce(a, s)) ||
        ce(n, s) ||
        ce(Sn, s) ||
        ce(i.config.globalProperties, s)
      )
    },
    defineProperty(e, t, r) {
      return (
        r.get != null
          ? (e._.accessCache[t] = 0)
          : ce(r, 'value') && this.set(e, t, r.value, null),
        Reflect.defineProperty(e, t, r)
      )
    },
  }
let Wo = !0
function Xd(e) {
  const t = ta(e),
    r = e.proxy,
    n = e.ctx
  ;(Wo = !1), t.beforeCreate && Xa(t.beforeCreate, e, 'bc')
  const {
    data: i,
    computed: o,
    methods: s,
    watch: a,
    provide: c,
    inject: u,
    created: l,
    beforeMount: h,
    mounted: f,
    beforeUpdate: d,
    updated: p,
    activated: b,
    deactivated: w,
    beforeDestroy: v,
    beforeUnmount: y,
    destroyed: g,
    unmounted: E,
    render: S,
    renderTracked: C,
    renderTriggered: x,
    errorCaptured: T,
    serverPrefetch: B,
    expose: L,
    inheritAttrs: J,
    components: j,
    directives: z,
    filters: A,
  } = t
  if ((u && Zd(u, n, null, e.appContext.config.unwrapInjectedRef), s))
    for (const W in s) {
      const Q = s[W]
      re(Q) && (n[W] = Q.bind(r))
    }
  if (i) {
    const W = i.call(r, r)
    be(W) && (e.data = xt(W))
  }
  if (((Wo = !0), o))
    for (const W in o) {
      const Q = o[W],
        Se = re(Q) ? Q.bind(r, r) : re(Q.get) ? Q.get.bind(r, r) : _t,
        ee = !re(Q) && re(Q.set) ? Q.set.bind(r) : _t,
        Oe = Ne({ get: Se, set: ee })
      Object.defineProperty(n, W, {
        enumerable: !0,
        configurable: !0,
        get: () => Oe.value,
        set: (Ee) => (Oe.value = Ee),
      })
    }
  if (a) for (const W in a) Fl(a[W], n, r, W)
  if (c) {
    const W = re(c) ? c.call(r) : c
    Reflect.ownKeys(W).forEach((Q) => {
      Br(Q, W[Q])
    })
  }
  l && Xa(l, e, 'c')
  function V(W, Q) {
    Z(Q) ? Q.forEach((Se) => W(Se.bind(r))) : Q && W(Q.bind(r))
  }
  if (
    (V(Rl, h),
    V(Ui, f),
    V(Ud, d),
    V(Pl, p),
    V($d, b),
    V(Hd, w),
    V(xl, T),
    V(zd, C),
    V(Wd, x),
    V(cr, y),
    V(jn, E),
    V(Vd, B),
    Z(L))
  )
    if (L.length) {
      const W = e.exposed || (e.exposed = {})
      L.forEach((Q) => {
        Object.defineProperty(W, Q, {
          get: () => r[Q],
          set: (Se) => (r[Q] = Se),
        })
      })
    } else e.exposed || (e.exposed = {})
  S && e.render === _t && (e.render = S),
    J != null && (e.inheritAttrs = J),
    j && (e.components = j),
    z && (e.directives = z)
}
function Zd(e, t, r = _t, n = !1) {
  Z(e) && (e = zo(e))
  for (const i in e) {
    const o = e[i]
    let s
    be(o)
      ? 'default' in o
        ? (s = Ve(o.from || i, o.default, !0))
        : (s = Ve(o.from || i))
      : (s = Ve(o)),
      Te(s) && n
        ? Object.defineProperty(t, i, {
            enumerable: !0,
            configurable: !0,
            get: () => s.value,
            set: (a) => (s.value = a),
          })
        : (t[i] = s)
  }
}
function Xa(e, t, r) {
  pt(Z(e) ? e.map((n) => n.bind(t.proxy)) : e.bind(t.proxy), t, r)
}
function Fl(e, t, r, n) {
  const i = n.includes('.') ? Sl(r, n) : () => r[n]
  if (Pe(e)) {
    const o = t[e]
    re(o) && jt(i, o)
  } else if (re(e)) jt(i, e.bind(r))
  else if (be(e))
    if (Z(e)) e.forEach((o) => Fl(o, t, r, n))
    else {
      const o = re(e.handler) ? e.handler.bind(r) : t[e.handler]
      re(o) && jt(i, o, e)
    }
}
function ta(e) {
  const t = e.type,
    { mixins: r, extends: n } = t,
    {
      mixins: i,
      optionsCache: o,
      config: { optionMergeStrategies: s },
    } = e.appContext,
    a = o.get(t)
  let c
  return (
    a
      ? (c = a)
      : !i.length && !r && !n
      ? (c = t)
      : ((c = {}), i.length && i.forEach((u) => Si(c, u, s, !0)), Si(c, t, s)),
    be(t) && o.set(t, c),
    c
  )
}
function Si(e, t, r, n = !1) {
  const { mixins: i, extends: o } = t
  o && Si(e, o, r, !0), i && i.forEach((s) => Si(e, s, r, !0))
  for (const s in t)
    if (!(n && s === 'expose')) {
      const a = ep[s] || (r && r[s])
      e[s] = a ? a(e[s], t[s]) : t[s]
    }
  return e
}
const ep = {
  data: Za,
  props: pr,
  emits: pr,
  methods: pr,
  computed: pr,
  beforeCreate: Qe,
  created: Qe,
  beforeMount: Qe,
  mounted: Qe,
  beforeUpdate: Qe,
  updated: Qe,
  beforeDestroy: Qe,
  beforeUnmount: Qe,
  destroyed: Qe,
  unmounted: Qe,
  activated: Qe,
  deactivated: Qe,
  errorCaptured: Qe,
  serverPrefetch: Qe,
  components: pr,
  directives: pr,
  watch: rp,
  provide: Za,
  inject: tp,
}
function Za(e, t) {
  return t
    ? e
      ? function () {
          return Be(
            re(e) ? e.call(this, this) : e,
            re(t) ? t.call(this, this) : t
          )
        }
      : t
    : e
}
function tp(e, t) {
  return pr(zo(e), zo(t))
}
function zo(e) {
  if (Z(e)) {
    const t = {}
    for (let r = 0; r < e.length; r++) t[e[r]] = e[r]
    return t
  }
  return e
}
function Qe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t
}
function pr(e, t) {
  return e ? Be(Be(Object.create(null), e), t) : t
}
function rp(e, t) {
  if (!e) return t
  if (!t) return e
  const r = Be(Object.create(null), e)
  for (const n in t) r[n] = Qe(e[n], t[n])
  return r
}
function np(e, t, r, n = !1) {
  const i = {},
    o = {}
  gi(o, Vi, 1), (e.propsDefaults = Object.create(null)), Dl(e, t, i, o)
  for (const s in e.propsOptions[0]) s in i || (i[s] = void 0)
  r ? (e.props = n ? i : pd(i)) : e.type.props ? (e.props = i) : (e.props = o),
    (e.attrs = o)
}
function ip(e, t, r, n) {
  const {
      props: i,
      attrs: o,
      vnode: { patchFlag: s },
    } = e,
    a = ue(i),
    [c] = e.propsOptions
  let u = !1
  if ((n || s > 0) && !(s & 16)) {
    if (s & 8) {
      const l = e.vnode.dynamicProps
      for (let h = 0; h < l.length; h++) {
        let f = l[h]
        if ($i(e.emitsOptions, f)) continue
        const d = t[f]
        if (c)
          if (ce(o, f)) d !== o[f] && ((o[f] = d), (u = !0))
          else {
            const p = Pt(f)
            i[p] = Ko(c, a, p, d, e, !1)
          }
        else d !== o[f] && ((o[f] = d), (u = !0))
      }
    }
  } else {
    Dl(e, t, i, o) && (u = !0)
    let l
    for (const h in a)
      (!t || (!ce(t, h) && ((l = rn(h)) === h || !ce(t, l)))) &&
        (c
          ? r &&
            (r[h] !== void 0 || r[l] !== void 0) &&
            (i[h] = Ko(c, a, h, void 0, e, !0))
          : delete i[h])
    if (o !== a) for (const h in o) (!t || !ce(t, h)) && (delete o[h], (u = !0))
  }
  u && Lt(e, 'set', '$attrs')
}
function Dl(e, t, r, n) {
  const [i, o] = e.propsOptions
  let s = !1,
    a
  if (t)
    for (let c in t) {
      if (wn(c)) continue
      const u = t[c]
      let l
      i && ce(i, (l = Pt(c)))
        ? !o || !o.includes(l)
          ? (r[l] = u)
          : ((a || (a = {}))[l] = u)
        : $i(e.emitsOptions, c) ||
          ((!(c in n) || u !== n[c]) && ((n[c] = u), (s = !0)))
    }
  if (o) {
    const c = ue(r),
      u = a || we
    for (let l = 0; l < o.length; l++) {
      const h = o[l]
      r[h] = Ko(i, c, h, u[h], e, !ce(u, h))
    }
  }
  return s
}
function Ko(e, t, r, n, i, o) {
  const s = e[r]
  if (s != null) {
    const a = ce(s, 'default')
    if (a && n === void 0) {
      const c = s.default
      if (s.type !== Function && re(c)) {
        const { propsDefaults: u } = i
        r in u ? (n = u[r]) : (or(i), (n = u[r] = c.call(null, t)), nr())
      } else n = c
    }
    s[0] && (o && !a ? (n = !1) : s[1] && (n === '' || n === rn(r)) && (n = !0))
  }
  return n
}
function Ml(e, t, r = !1) {
  const n = t.propsCache,
    i = n.get(e)
  if (i) return i
  const o = e.props,
    s = {},
    a = []
  let c = !1
  if (!re(e)) {
    const l = (h) => {
      c = !0
      const [f, d] = Ml(h, t, !0)
      Be(s, f), d && a.push(...d)
    }
    !r && t.mixins.length && t.mixins.forEach(l),
      e.extends && l(e.extends),
      e.mixins && e.mixins.forEach(l)
  }
  if (!o && !c) return be(e) && n.set(e, Mr), Mr
  if (Z(o))
    for (let l = 0; l < o.length; l++) {
      const h = Pt(o[l])
      ec(h) && (s[h] = we)
    }
  else if (o)
    for (const l in o) {
      const h = Pt(l)
      if (ec(h)) {
        const f = o[l],
          d = (s[h] = Z(f) || re(f) ? { type: f } : Object.assign({}, f))
        if (d) {
          const p = nc(Boolean, d.type),
            b = nc(String, d.type)
          ;(d[0] = p > -1),
            (d[1] = b < 0 || p < b),
            (p > -1 || ce(d, 'default')) && a.push(h)
        }
      }
    }
  const u = [s, a]
  return be(e) && n.set(e, u), u
}
function ec(e) {
  return e[0] !== '$'
}
function tc(e) {
  const t = e && e.toString().match(/^\s*function (\w+)/)
  return t ? t[1] : e === null ? 'null' : ''
}
function rc(e, t) {
  return tc(e) === tc(t)
}
function nc(e, t) {
  return Z(t) ? t.findIndex((r) => rc(r, e)) : re(t) && rc(t, e) ? 0 : -1
}
const Nl = (e) => e[0] === '_' || e === '$stable',
  ra = (e) => (Z(e) ? e.map(ft) : [ft(e)]),
  op = (e, t, r) => {
    if (t._n) return t
    const n = _n((...i) => ra(t(...i)), r)
    return (n._c = !1), n
  },
  jl = (e, t, r) => {
    const n = e._ctx
    for (const i in e) {
      if (Nl(i)) continue
      const o = e[i]
      if (re(o)) t[i] = op(i, o, n)
      else if (o != null) {
        const s = ra(o)
        t[i] = () => s
      }
    }
  },
  Ll = (e, t) => {
    const r = ra(t)
    e.slots.default = () => r
  },
  sp = (e, t) => {
    if (e.vnode.shapeFlag & 32) {
      const r = t._
      r ? ((e.slots = ue(t)), gi(t, '_', r)) : jl(t, (e.slots = {}))
    } else (e.slots = {}), t && Ll(e, t)
    gi(e.slots, Vi, 1)
  },
  ap = (e, t, r) => {
    const { vnode: n, slots: i } = e
    let o = !0,
      s = we
    if (n.shapeFlag & 32) {
      const a = t._
      a
        ? r && a === 1
          ? (o = !1)
          : (Be(i, t), !r && a === 1 && delete i._)
        : ((o = !t.$stable), jl(t, i)),
        (s = t)
    } else t && (Ll(e, t), (s = { default: 1 }))
    if (o) for (const a in i) !Nl(a) && !(a in s) && delete i[a]
  }
function ql() {
  return {
    app: null,
    config: {
      isNativeTag: Dh,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {},
    },
    mixins: [],
    components: {},
    directives: {},
    provides: Object.create(null),
    optionsCache: new WeakMap(),
    propsCache: new WeakMap(),
    emitsCache: new WeakMap(),
  }
}
let cp = 0
function up(e, t) {
  return function (n, i = null) {
    re(n) || (n = Object.assign({}, n)), i != null && !be(i) && (i = null)
    const o = ql(),
      s = new Set()
    let a = !1
    const c = (o.app = {
      _uid: cp++,
      _component: n,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: oa,
      get config() {
        return o.config
      },
      set config(u) {},
      use(u, ...l) {
        return (
          s.has(u) ||
            (u && re(u.install)
              ? (s.add(u), u.install(c, ...l))
              : re(u) && (s.add(u), u(c, ...l))),
          c
        )
      },
      mixin(u) {
        return o.mixins.includes(u) || o.mixins.push(u), c
      },
      component(u, l) {
        return l ? ((o.components[u] = l), c) : o.components[u]
      },
      directive(u, l) {
        return l ? ((o.directives[u] = l), c) : o.directives[u]
      },
      mount(u, l, h) {
        if (!a) {
          const f = ve(n, i)
          return (
            (f.appContext = o),
            l && t ? t(f, u) : e(f, u, h),
            (a = !0),
            (c._container = u),
            (u.__vue_app__ = c),
            ia(f.component) || f.component.proxy
          )
        }
      },
      unmount() {
        a && (e(null, c._container), delete c._container.__vue_app__)
      },
      provide(u, l) {
        return (o.provides[u] = l), c
      },
    })
    return c
  }
}
function Oi(e, t, r, n, i = !1) {
  if (Z(e)) {
    e.forEach((f, d) => Oi(f, t && (Z(t) ? t[d] : t), r, n, i))
    return
  }
  if (wr(n) && !i) return
  const o = n.shapeFlag & 4 ? ia(n.component) || n.component.proxy : n.el,
    s = i ? null : o,
    { i: a, r: c } = e,
    u = t && t.r,
    l = a.refs === we ? (a.refs = {}) : a.refs,
    h = a.setupState
  if (
    (u != null &&
      u !== c &&
      (Pe(u)
        ? ((l[u] = null), ce(h, u) && (h[u] = null))
        : Te(u) && (u.value = null)),
    re(c))
  )
    rr(c, a, 12, [s, l])
  else {
    const f = Pe(c),
      d = Te(c)
    if (f || d) {
      const p = () => {
        if (e.f) {
          const b = f ? (ce(h, c) ? h[c] : l[c]) : c.value
          i
            ? Z(b) && qs(b, o)
            : Z(b)
            ? b.includes(o) || b.push(o)
            : f
            ? ((l[c] = [o]), ce(h, c) && (h[c] = l[c]))
            : ((c.value = [o]), e.k && (l[e.k] = c.value))
        } else
          f
            ? ((l[c] = s), ce(h, c) && (h[c] = s))
            : d && ((c.value = s), e.k && (l[e.k] = s))
      }
      s ? ((p.id = -1), Le(p, r)) : p()
    }
  }
}
let Qt = !1
const ti = (e) => /svg/.test(e.namespaceURI) && e.tagName !== 'foreignObject',
  ri = (e) => e.nodeType === 8
function lp(e) {
  const {
      mt: t,
      p: r,
      o: {
        patchProp: n,
        createText: i,
        nextSibling: o,
        parentNode: s,
        remove: a,
        insert: c,
        createComment: u,
      },
    } = e,
    l = (v, y) => {
      if (!y.hasChildNodes()) {
        r(null, v, y), wi(), (y._vnode = v)
        return
      }
      ;(Qt = !1),
        h(y.firstChild, v, null, null, null),
        wi(),
        (y._vnode = v),
        Qt && console.error('Hydration completed but contains mismatches.')
    },
    h = (v, y, g, E, S, C = !1) => {
      const x = ri(v) && v.data === '[',
        T = () => b(v, y, g, E, S, x),
        { type: B, ref: L, shapeFlag: J, patchFlag: j } = y
      let z = v.nodeType
      ;(y.el = v), j === -2 && ((C = !1), (y.dynamicChildren = null))
      let A = null
      switch (B) {
        case Ur:
          z !== 3
            ? y.children === ''
              ? (c((y.el = i('')), s(v), v), (A = v))
              : (A = T())
            : (v.data !== y.children && ((Qt = !0), (v.data = y.children)),
              (A = o(v)))
          break
        case We:
          z !== 8 || x ? (A = T()) : (A = o(v))
          break
        case li:
          if ((x && ((v = o(v)), (z = v.nodeType)), z === 1 || z === 3)) {
            A = v
            const ne = !y.children.length
            for (let V = 0; V < y.staticCount; V++)
              ne && (y.children += A.nodeType === 1 ? A.outerHTML : A.data),
                V === y.staticCount - 1 && (y.anchor = A),
                (A = o(A))
            return x ? o(A) : A
          } else T()
          break
        case Ye:
          x ? (A = p(v, y, g, E, S, C)) : (A = T())
          break
        default:
          if (J & 1)
            z !== 1 || y.type.toLowerCase() !== v.tagName.toLowerCase()
              ? (A = T())
              : (A = f(v, y, g, E, S, C))
          else if (J & 6) {
            y.slotScopeIds = S
            const ne = s(v)
            if (
              (t(y, ne, null, g, E, ti(ne), C),
              (A = x ? w(v) : o(v)),
              A && ri(A) && A.data === 'teleport end' && (A = o(A)),
              wr(y))
            ) {
              let V
              x
                ? ((V = ve(Ye)),
                  (V.anchor = A ? A.previousSibling : ne.lastChild))
                : (V = v.nodeType === 3 ? Wl('') : ve('div')),
                (V.el = v),
                (y.component.subTree = V)
            }
          } else
            J & 64
              ? z !== 8
                ? (A = T())
                : (A = y.type.hydrate(v, y, g, E, S, C, e, d))
              : J & 128 &&
                (A = y.type.hydrate(v, y, g, E, ti(s(v)), S, C, e, h))
      }
      return L != null && Oi(L, null, E, y), A
    },
    f = (v, y, g, E, S, C) => {
      C = C || !!y.dynamicChildren
      const { type: x, props: T, patchFlag: B, shapeFlag: L, dirs: J } = y,
        j = (x === 'input' && J) || x === 'option'
      if (j || B !== -1) {
        if ((J && Tt(y, null, g, 'created'), T))
          if (j || !C || B & 48)
            for (const A in T)
              ((j && A.endsWith('value')) || (Un(A) && !wn(A))) &&
                n(v, A, null, T[A], !1, void 0, g)
          else T.onClick && n(v, 'onClick', null, T.onClick, !1, void 0, g)
        let z
        if (
          ((z = T && T.onVnodeBeforeMount) && Je(z, g, y),
          J && Tt(y, null, g, 'beforeMount'),
          ((z = T && T.onVnodeMounted) || J) &&
            _l(() => {
              z && Je(z, g, y), J && Tt(y, null, g, 'mounted')
            }, E),
          L & 16 && !(T && (T.innerHTML || T.textContent)))
        ) {
          let A = d(v.firstChild, y, v, g, E, S, C)
          for (; A; ) {
            Qt = !0
            const ne = A
            ;(A = A.nextSibling), a(ne)
          }
        } else
          L & 8 &&
            v.textContent !== y.children &&
            ((Qt = !0), (v.textContent = y.children))
      }
      return v.nextSibling
    },
    d = (v, y, g, E, S, C, x) => {
      x = x || !!y.dynamicChildren
      const T = y.children,
        B = T.length
      for (let L = 0; L < B; L++) {
        const J = x ? T[L] : (T[L] = ft(T[L]))
        if (v) v = h(v, J, E, S, C, x)
        else {
          if (J.type === Ur && !J.children) continue
          ;(Qt = !0), r(null, J, g, null, E, S, ti(g), C)
        }
      }
      return v
    },
    p = (v, y, g, E, S, C) => {
      const { slotScopeIds: x } = y
      x && (S = S ? S.concat(x) : x)
      const T = s(v),
        B = d(o(v), y, T, g, E, S, C)
      return B && ri(B) && B.data === ']'
        ? o((y.anchor = B))
        : ((Qt = !0), c((y.anchor = u(']')), T, B), B)
    },
    b = (v, y, g, E, S, C) => {
      if (((Qt = !0), (y.el = null), C)) {
        const B = w(v)
        for (;;) {
          const L = o(v)
          if (L && L !== B) a(L)
          else break
        }
      }
      const x = o(v),
        T = s(v)
      return a(v), r(null, y, T, x, g, E, ti(T), S), x
    },
    w = (v) => {
      let y = 0
      for (; v; )
        if (
          ((v = o(v)), v && ri(v) && (v.data === '[' && y++, v.data === ']'))
        ) {
          if (y === 0) return o(v)
          y--
        }
      return v
    }
  return [l, h]
}
const Le = _l
function fp(e) {
  return Bl(e)
}
function hp(e) {
  return Bl(e, lp)
}
function Bl(e, t) {
  const r = Bh()
  r.__VUE__ = !0
  const {
      insert: n,
      remove: i,
      patchProp: o,
      createElement: s,
      createText: a,
      createComment: c,
      setText: u,
      setElementText: l,
      parentNode: h,
      nextSibling: f,
      setScopeId: d = _t,
      insertStaticContent: p,
    } = e,
    b = (
      m,
      _,
      k,
      P = null,
      I = null,
      N = null,
      H = !1,
      M = null,
      q = !!_.dynamicChildren
    ) => {
      if (m === _) return
      m && !Rt(m, _) && ((P = $(m)), Ee(m, I, N, !0), (m = null)),
        _.patchFlag === -2 && ((q = !1), (_.dynamicChildren = null))
      const { type: F, ref: G, shapeFlag: K } = _
      switch (F) {
        case Ur:
          w(m, _, k, P)
          break
        case We:
          v(m, _, k, P)
          break
        case li:
          m == null && y(_, k, P, H)
          break
        case Ye:
          j(m, _, k, P, I, N, H, M, q)
          break
        default:
          K & 1
            ? S(m, _, k, P, I, N, H, M, q)
            : K & 6
            ? z(m, _, k, P, I, N, H, M, q)
            : (K & 64 || K & 128) && F.process(m, _, k, P, I, N, H, M, q, ae)
      }
      G != null && I && Oi(G, m && m.ref, N, _ || m, !_)
    },
    w = (m, _, k, P) => {
      if (m == null) n((_.el = a(_.children)), k, P)
      else {
        const I = (_.el = m.el)
        _.children !== m.children && u(I, _.children)
      }
    },
    v = (m, _, k, P) => {
      m == null ? n((_.el = c(_.children || '')), k, P) : (_.el = m.el)
    },
    y = (m, _, k, P) => {
      ;[m.el, m.anchor] = p(m.children, _, k, P, m.el, m.anchor)
    },
    g = ({ el: m, anchor: _ }, k, P) => {
      let I
      for (; m && m !== _; ) (I = f(m)), n(m, k, P), (m = I)
      n(_, k, P)
    },
    E = ({ el: m, anchor: _ }) => {
      let k
      for (; m && m !== _; ) (k = f(m)), i(m), (m = k)
      i(_)
    },
    S = (m, _, k, P, I, N, H, M, q) => {
      ;(H = H || _.type === 'svg'),
        m == null ? C(_, k, P, I, N, H, M, q) : B(m, _, I, N, H, M, q)
    },
    C = (m, _, k, P, I, N, H, M) => {
      let q, F
      const { type: G, props: K, shapeFlag: X, transition: te, dirs: oe } = m
      if (
        ((q = m.el = s(m.type, N, K && K.is, K)),
        X & 8
          ? l(q, m.children)
          : X & 16 &&
            T(m.children, q, null, P, I, N && G !== 'foreignObject', H, M),
        oe && Tt(m, null, P, 'created'),
        K)
      ) {
        for (const he in K)
          he !== 'value' &&
            !wn(he) &&
            o(q, he, null, K[he], N, m.children, P, I, D)
        'value' in K && o(q, 'value', null, K.value),
          (F = K.onVnodeBeforeMount) && Je(F, P, m)
      }
      x(q, m, m.scopeId, H, P), oe && Tt(m, null, P, 'beforeMount')
      const ye = (!I || (I && !I.pendingBranch)) && te && !te.persisted
      ye && te.beforeEnter(q),
        n(q, _, k),
        ((F = K && K.onVnodeMounted) || ye || oe) &&
          Le(() => {
            F && Je(F, P, m), ye && te.enter(q), oe && Tt(m, null, P, 'mounted')
          }, I)
    },
    x = (m, _, k, P, I) => {
      if ((k && d(m, k), P)) for (let N = 0; N < P.length; N++) d(m, P[N])
      if (I) {
        let N = I.subTree
        if (_ === N) {
          const H = I.vnode
          x(m, H, H.scopeId, H.slotScopeIds, I.parent)
        }
      }
    },
    T = (m, _, k, P, I, N, H, M, q = 0) => {
      for (let F = q; F < m.length; F++) {
        const G = (m[F] = M ? Kt(m[F]) : ft(m[F]))
        b(null, G, _, k, P, I, N, H, M)
      }
    },
    B = (m, _, k, P, I, N, H) => {
      const M = (_.el = m.el)
      let { patchFlag: q, dynamicChildren: F, dirs: G } = _
      q |= m.patchFlag & 16
      const K = m.props || we,
        X = _.props || we
      let te
      k && lr(k, !1),
        (te = X.onVnodeBeforeUpdate) && Je(te, k, _, m),
        G && Tt(_, m, k, 'beforeUpdate'),
        k && lr(k, !0)
      const oe = I && _.type !== 'foreignObject'
      if (
        (F
          ? L(m.dynamicChildren, F, M, k, P, oe, N)
          : H || Q(m, _, M, null, k, P, oe, N, !1),
        q > 0)
      ) {
        if (q & 16) J(M, _, K, X, k, P, I)
        else if (
          (q & 2 && K.class !== X.class && o(M, 'class', null, X.class, I),
          q & 4 && o(M, 'style', K.style, X.style, I),
          q & 8)
        ) {
          const ye = _.dynamicProps
          for (let he = 0; he < ye.length; he++) {
            const Ce = ye[he],
              bt = K[Ce],
              Cr = X[Ce]
            ;(Cr !== bt || Ce === 'value') &&
              o(M, Ce, bt, Cr, I, m.children, k, P, D)
          }
        }
        q & 1 && m.children !== _.children && l(M, _.children)
      } else !H && F == null && J(M, _, K, X, k, P, I)
      ;((te = X.onVnodeUpdated) || G) &&
        Le(() => {
          te && Je(te, k, _, m), G && Tt(_, m, k, 'updated')
        }, P)
    },
    L = (m, _, k, P, I, N, H) => {
      for (let M = 0; M < _.length; M++) {
        const q = m[M],
          F = _[M],
          G =
            q.el && (q.type === Ye || !Rt(q, F) || q.shapeFlag & 70)
              ? h(q.el)
              : k
        b(q, F, G, null, P, I, N, H, !0)
      }
    },
    J = (m, _, k, P, I, N, H) => {
      if (k !== P) {
        if (k !== we)
          for (const M in k)
            !wn(M) && !(M in P) && o(m, M, k[M], null, H, _.children, I, N, D)
        for (const M in P) {
          if (wn(M)) continue
          const q = P[M],
            F = k[M]
          q !== F && M !== 'value' && o(m, M, F, q, H, _.children, I, N, D)
        }
        'value' in P && o(m, 'value', k.value, P.value)
      }
    },
    j = (m, _, k, P, I, N, H, M, q) => {
      const F = (_.el = m ? m.el : a('')),
        G = (_.anchor = m ? m.anchor : a(''))
      let { patchFlag: K, dynamicChildren: X, slotScopeIds: te } = _
      te && (M = M ? M.concat(te) : te),
        m == null
          ? (n(F, k, P), n(G, k, P), T(_.children, k, G, I, N, H, M, q))
          : K > 0 && K & 64 && X && m.dynamicChildren
          ? (L(m.dynamicChildren, X, k, I, N, H, M),
            (_.key != null || (I && _ === I.subTree)) && $l(m, _, !0))
          : Q(m, _, k, G, I, N, H, M, q)
    },
    z = (m, _, k, P, I, N, H, M, q) => {
      ;(_.slotScopeIds = M),
        m == null
          ? _.shapeFlag & 512
            ? I.ctx.activate(_, k, P, H, q)
            : A(_, k, P, I, N, H, q)
          : ne(m, _, q)
    },
    A = (m, _, k, P, I, N, H) => {
      const M = (m.component = wp(m, P, I))
      if ((Vn(m) && (M.ctx.renderer = ae), Ep(M), M.asyncDep)) {
        if ((I && I.registerDep(M, V), !m.el)) {
          const q = (M.subTree = ve(We))
          v(null, q, _, k)
        }
        return
      }
      V(M, m, _, k, I, N, H)
    },
    ne = (m, _, k) => {
      const P = (_.component = m.component)
      if (Rd(m, _, k))
        if (P.asyncDep && !P.asyncResolved) {
          W(P, _, k)
          return
        } else (P.next = _), _d(P.update), P.update()
      else (_.el = m.el), (P.vnode = _)
    },
    V = (m, _, k, P, I, N, H) => {
      const M = () => {
          if (m.isMounted) {
            let { next: G, bu: K, u: X, parent: te, vnode: oe } = m,
              ye = G,
              he
            lr(m, !1),
              G ? ((G.el = oe.el), W(m, G, H)) : (G = oe),
              K && En(K),
              (he = G.props && G.props.onVnodeBeforeUpdate) &&
                Je(he, te, G, oe),
              lr(m, !0)
            const Ce = so(m),
              bt = m.subTree
            ;(m.subTree = Ce),
              b(bt, Ce, h(bt.el), $(bt), m, I, N),
              (G.el = Ce.el),
              ye === null && Xs(m, Ce.el),
              X && Le(X, I),
              (he = G.props && G.props.onVnodeUpdated) &&
                Le(() => Je(he, te, G, oe), I)
          } else {
            let G
            const { el: K, props: X } = _,
              { bm: te, m: oe, parent: ye } = m,
              he = wr(_)
            if (
              (lr(m, !1),
              te && En(te),
              !he && (G = X && X.onVnodeBeforeMount) && Je(G, ye, _),
              lr(m, !0),
              K && ie)
            ) {
              const Ce = () => {
                ;(m.subTree = so(m)), ie(K, m.subTree, m, I, null)
              }
              he
                ? _.type.__asyncLoader().then(() => !m.isUnmounted && Ce())
                : Ce()
            } else {
              const Ce = (m.subTree = so(m))
              b(null, Ce, k, P, m, I, N), (_.el = Ce.el)
            }
            if ((oe && Le(oe, I), !he && (G = X && X.onVnodeMounted))) {
              const Ce = _
              Le(() => Je(G, ye, Ce), I)
            }
            ;(_.shapeFlag & 256 ||
              (ye && wr(ye.vnode) && ye.vnode.shapeFlag & 256)) &&
              m.a &&
              Le(m.a, I),
              (m.isMounted = !0),
              (_ = k = P = null)
          }
        },
        q = (m.effect = new Us(M, () => Bi(F), m.scope)),
        F = (m.update = () => q.run())
      ;(F.id = m.uid), lr(m, !0), F()
    },
    W = (m, _, k) => {
      _.component = m
      const P = m.vnode.props
      ;(m.vnode = _),
        (m.next = null),
        ip(m, _.props, P, k),
        ap(m, _.children, k),
        nn(),
        za(),
        on()
    },
    Q = (m, _, k, P, I, N, H, M, q = !1) => {
      const F = m && m.children,
        G = m ? m.shapeFlag : 0,
        K = _.children,
        { patchFlag: X, shapeFlag: te } = _
      if (X > 0) {
        if (X & 128) {
          ee(F, K, k, P, I, N, H, M, q)
          return
        } else if (X & 256) {
          Se(F, K, k, P, I, N, H, M, q)
          return
        }
      }
      te & 8
        ? (G & 16 && D(F, I, N), K !== F && l(k, K))
        : G & 16
        ? te & 16
          ? ee(F, K, k, P, I, N, H, M, q)
          : D(F, I, N, !0)
        : (G & 8 && l(k, ''), te & 16 && T(K, k, P, I, N, H, M, q))
    },
    Se = (m, _, k, P, I, N, H, M, q) => {
      ;(m = m || Mr), (_ = _ || Mr)
      const F = m.length,
        G = _.length,
        K = Math.min(F, G)
      let X
      for (X = 0; X < K; X++) {
        const te = (_[X] = q ? Kt(_[X]) : ft(_[X]))
        b(m[X], te, k, null, I, N, H, M, q)
      }
      F > G ? D(m, I, N, !0, !1, K) : T(_, k, P, I, N, H, M, q, K)
    },
    ee = (m, _, k, P, I, N, H, M, q) => {
      let F = 0
      const G = _.length
      let K = m.length - 1,
        X = G - 1
      for (; F <= K && F <= X; ) {
        const te = m[F],
          oe = (_[F] = q ? Kt(_[F]) : ft(_[F]))
        if (Rt(te, oe)) b(te, oe, k, null, I, N, H, M, q)
        else break
        F++
      }
      for (; F <= K && F <= X; ) {
        const te = m[K],
          oe = (_[X] = q ? Kt(_[X]) : ft(_[X]))
        if (Rt(te, oe)) b(te, oe, k, null, I, N, H, M, q)
        else break
        K--, X--
      }
      if (F > K) {
        if (F <= X) {
          const te = X + 1,
            oe = te < G ? _[te].el : P
          for (; F <= X; )
            b(null, (_[F] = q ? Kt(_[F]) : ft(_[F])), k, oe, I, N, H, M, q), F++
        }
      } else if (F > X) for (; F <= K; ) Ee(m[F], I, N, !0), F++
      else {
        const te = F,
          oe = F,
          ye = new Map()
        for (F = oe; F <= X; F++) {
          const Xe = (_[F] = q ? Kt(_[F]) : ft(_[F]))
          Xe.key != null && ye.set(Xe.key, F)
        }
        let he,
          Ce = 0
        const bt = X - oe + 1
        let Cr = !1,
          Na = 0
        const cn = new Array(bt)
        for (F = 0; F < bt; F++) cn[F] = 0
        for (F = te; F <= K; F++) {
          const Xe = m[F]
          if (Ce >= bt) {
            Ee(Xe, I, N, !0)
            continue
          }
          let Ot
          if (Xe.key != null) Ot = ye.get(Xe.key)
          else
            for (he = oe; he <= X; he++)
              if (cn[he - oe] === 0 && Rt(Xe, _[he])) {
                Ot = he
                break
              }
          Ot === void 0
            ? Ee(Xe, I, N, !0)
            : ((cn[Ot - oe] = F + 1),
              Ot >= Na ? (Na = Ot) : (Cr = !0),
              b(Xe, _[Ot], k, null, I, N, H, M, q),
              Ce++)
        }
        const ja = Cr ? dp(cn) : Mr
        for (he = ja.length - 1, F = bt - 1; F >= 0; F--) {
          const Xe = oe + F,
            Ot = _[Xe],
            La = Xe + 1 < G ? _[Xe + 1].el : P
          cn[F] === 0
            ? b(null, Ot, k, La, I, N, H, M, q)
            : Cr && (he < 0 || F !== ja[he] ? Oe(Ot, k, La, 2) : he--)
        }
      }
    },
    Oe = (m, _, k, P, I = null) => {
      const { el: N, type: H, transition: M, children: q, shapeFlag: F } = m
      if (F & 6) {
        Oe(m.component.subTree, _, k, P)
        return
      }
      if (F & 128) {
        m.suspense.move(_, k, P)
        return
      }
      if (F & 64) {
        H.move(m, _, k, ae)
        return
      }
      if (H === Ye) {
        n(N, _, k)
        for (let K = 0; K < q.length; K++) Oe(q[K], _, k, P)
        n(m.anchor, _, k)
        return
      }
      if (H === li) {
        g(m, _, k)
        return
      }
      if (P !== 2 && F & 1 && M)
        if (P === 0) M.beforeEnter(N), n(N, _, k), Le(() => M.enter(N), I)
        else {
          const { leave: K, delayLeave: X, afterLeave: te } = M,
            oe = () => n(N, _, k),
            ye = () => {
              K(N, () => {
                oe(), te && te()
              })
            }
          X ? X(N, oe, ye) : ye()
        }
      else n(N, _, k)
    },
    Ee = (m, _, k, P = !1, I = !1) => {
      const {
        type: N,
        props: H,
        ref: M,
        children: q,
        dynamicChildren: F,
        shapeFlag: G,
        patchFlag: K,
        dirs: X,
      } = m
      if ((M != null && Oi(M, null, k, m, !0), G & 256)) {
        _.ctx.deactivate(m)
        return
      }
      const te = G & 1 && X,
        oe = !wr(m)
      let ye
      if ((oe && (ye = H && H.onVnodeBeforeUnmount) && Je(ye, _, m), G & 6))
        R(m.component, k, P)
      else {
        if (G & 128) {
          m.suspense.unmount(k, P)
          return
        }
        te && Tt(m, null, _, 'beforeUnmount'),
          G & 64
            ? m.type.remove(m, _, k, I, ae, P)
            : F && (N !== Ye || (K > 0 && K & 64))
            ? D(F, _, k, !1, !0)
            : ((N === Ye && K & 384) || (!I && G & 16)) && D(q, _, k),
          P && vt(m)
      }
      ;((oe && (ye = H && H.onVnodeUnmounted)) || te) &&
        Le(() => {
          ye && Je(ye, _, m), te && Tt(m, null, _, 'unmounted')
        }, k)
    },
    vt = (m) => {
      const { type: _, el: k, anchor: P, transition: I } = m
      if (_ === Ye) {
        gt(k, P)
        return
      }
      if (_ === li) {
        E(m)
        return
      }
      const N = () => {
        i(k), I && !I.persisted && I.afterLeave && I.afterLeave()
      }
      if (m.shapeFlag & 1 && I && !I.persisted) {
        const { leave: H, delayLeave: M } = I,
          q = () => H(k, N)
        M ? M(m.el, N, q) : q()
      } else N()
    },
    gt = (m, _) => {
      let k
      for (; m !== _; ) (k = f(m)), i(m), (m = k)
      i(_)
    },
    R = (m, _, k) => {
      const { bum: P, scope: I, update: N, subTree: H, um: M } = m
      P && En(P),
        I.stop(),
        N && ((N.active = !1), Ee(H, m, _, k)),
        M && Le(M, _),
        Le(() => {
          m.isUnmounted = !0
        }, _),
        _ &&
          _.pendingBranch &&
          !_.isUnmounted &&
          m.asyncDep &&
          !m.asyncResolved &&
          m.suspenseId === _.pendingId &&
          (_.deps--, _.deps === 0 && _.resolve())
    },
    D = (m, _, k, P = !1, I = !1, N = 0) => {
      for (let H = N; H < m.length; H++) Ee(m[H], _, k, P, I)
    },
    $ = (m) =>
      m.shapeFlag & 6
        ? $(m.component.subTree)
        : m.shapeFlag & 128
        ? m.suspense.next()
        : f(m.anchor || m.el),
    Y = (m, _, k) => {
      m == null
        ? _._vnode && Ee(_._vnode, null, null, !0)
        : b(_._vnode || null, m, _, null, null, null, k),
        za(),
        wi(),
        (_._vnode = m)
    },
    ae = { p: b, um: Ee, m: Oe, r: vt, mt: A, mc: T, pc: Q, pbc: L, n: $, o: e }
  let _e, ie
  return (
    t && ([_e, ie] = t(ae)), { render: Y, hydrate: _e, createApp: up(Y, _e) }
  )
}
function lr({ effect: e, update: t }, r) {
  e.allowRecurse = t.allowRecurse = r
}
function $l(e, t, r = !1) {
  const n = e.children,
    i = t.children
  if (Z(n) && Z(i))
    for (let o = 0; o < n.length; o++) {
      const s = n[o]
      let a = i[o]
      a.shapeFlag & 1 &&
        !a.dynamicChildren &&
        ((a.patchFlag <= 0 || a.patchFlag === 32) &&
          ((a = i[o] = Kt(i[o])), (a.el = s.el)),
        r || $l(s, a)),
        a.type === Ur && (a.el = s.el)
    }
}
function dp(e) {
  const t = e.slice(),
    r = [0]
  let n, i, o, s, a
  const c = e.length
  for (n = 0; n < c; n++) {
    const u = e[n]
    if (u !== 0) {
      if (((i = r[r.length - 1]), e[i] < u)) {
        ;(t[n] = i), r.push(n)
        continue
      }
      for (o = 0, s = r.length - 1; o < s; )
        (a = (o + s) >> 1), e[r[a]] < u ? (o = a + 1) : (s = a)
      u < e[r[o]] && (o > 0 && (t[n] = r[o - 1]), (r[o] = n))
    }
  }
  for (o = r.length, s = r[o - 1]; o-- > 0; ) (r[o] = s), (s = t[s])
  return r
}
const pp = (e) => e.__isTeleport,
  Ye = Symbol(void 0),
  Ur = Symbol(void 0),
  We = Symbol(void 0),
  li = Symbol(void 0),
  On = []
let dt = null
function er(e = !1) {
  On.push((dt = e ? null : []))
}
function Hl() {
  On.pop(), (dt = On[On.length - 1] || null)
}
let Vr = 1
function ic(e) {
  Vr += e
}
function Ql(e) {
  return (
    (e.dynamicChildren = Vr > 0 ? dt || Mr : null),
    Hl(),
    Vr > 0 && dt && dt.push(e),
    e
  )
}
function TE(e, t, r, n, i, o) {
  return Ql(Vl(e, t, r, n, i, o, !0))
}
function gr(e, t, r, n, i) {
  return Ql(ve(e, t, r, n, i, !0))
}
function Wr(e) {
  return e ? e.__v_isVNode === !0 : !1
}
function Rt(e, t) {
  return e.type === t.type && e.key === t.key
}
const Vi = '__vInternal',
  Ul = ({ key: e }) => e ?? null,
  fi = ({ ref: e, ref_key: t, ref_for: r }) =>
    e != null
      ? Pe(e) || Te(e) || re(e)
        ? { i: He, r: e, k: t, f: !!r }
        : e
      : null
function Vl(
  e,
  t = null,
  r = null,
  n = 0,
  i = null,
  o = e === Ye ? 0 : 1,
  s = !1,
  a = !1
) {
  const c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ul(t),
    ref: t && fi(t),
    scopeId: Hi,
    slotScopeIds: null,
    children: r,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: n,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: He,
  }
  return (
    a
      ? (na(c, r), o & 128 && e.normalize(c))
      : r && (c.shapeFlag |= Pe(r) ? 8 : 16),
    Vr > 0 &&
      !s &&
      dt &&
      (c.patchFlag > 0 || o & 6) &&
      c.patchFlag !== 32 &&
      dt.push(c),
    c
  )
}
const ve = yp
function yp(e, t = null, r = null, n = 0, i = null, o = !1) {
  if (((!e || e === Jd) && (e = We), Wr(e))) {
    const a = qt(e, t, !0)
    return (
      r && na(a, r),
      Vr > 0 &&
        !o &&
        dt &&
        (a.shapeFlag & 6 ? (dt[dt.indexOf(e)] = a) : dt.push(a)),
      (a.patchFlag |= -2),
      a
    )
  }
  if ((kp(e) && (e = e.__vccOpts), t)) {
    t = mp(t)
    let { class: a, style: c } = t
    a && !Pe(a) && (t.class = js(a)),
      be(c) && (cl(c) && !Z(c) && (c = Be({}, c)), (t.style = Ns(c)))
  }
  const s = Pe(e) ? 1 : wl(e) ? 128 : pp(e) ? 64 : be(e) ? 4 : re(e) ? 2 : 0
  return Vl(e, t, r, n, i, s, o, !0)
}
function mp(e) {
  return e ? (cl(e) || Vi in e ? Be({}, e) : e) : null
}
function qt(e, t, r = !1) {
  const { props: n, ref: i, patchFlag: o, children: s } = e,
    a = t ? vp(n || {}, t) : n
  return {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: a,
    key: a && Ul(a),
    ref:
      t && t.ref ? (r && i ? (Z(i) ? i.concat(fi(t)) : [i, fi(t)]) : fi(t)) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: s,
    target: e.target,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    patchFlag: t && e.type !== Ye ? (o === -1 ? 16 : o | 16) : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: e.transition,
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && qt(e.ssContent),
    ssFallback: e.ssFallback && qt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
  }
}
function Wl(e = ' ', t = 0) {
  return ve(Ur, null, e, t)
}
function CE(e = '', t = !1) {
  return t ? (er(), gr(We, null, e)) : ve(We, null, e)
}
function ft(e) {
  return e == null || typeof e == 'boolean'
    ? ve(We)
    : Z(e)
    ? ve(Ye, null, e.slice())
    : typeof e == 'object'
    ? Kt(e)
    : ve(Ur, null, String(e))
}
function Kt(e) {
  return (e.el === null && e.patchFlag !== -1) || e.memo ? e : qt(e)
}
function na(e, t) {
  let r = 0
  const { shapeFlag: n } = e
  if (t == null) t = null
  else if (Z(t)) r = 16
  else if (typeof t == 'object')
    if (n & 65) {
      const i = t.default
      i && (i._c && (i._d = !1), na(e, i()), i._c && (i._d = !0))
      return
    } else {
      r = 32
      const i = t._
      !i && !(Vi in t)
        ? (t._ctx = He)
        : i === 3 &&
          He &&
          (He.slots._ === 1 ? (t._ = 1) : ((t._ = 2), (e.patchFlag |= 1024)))
    }
  else
    re(t)
      ? ((t = { default: t, _ctx: He }), (r = 32))
      : ((t = String(t)), n & 64 ? ((r = 16), (t = [Wl(t)])) : (r = 8))
  ;(e.children = t), (e.shapeFlag |= r)
}
function vp(...e) {
  const t = {}
  for (let r = 0; r < e.length; r++) {
    const n = e[r]
    for (const i in n)
      if (i === 'class')
        t.class !== n.class && (t.class = js([t.class, n.class]))
      else if (i === 'style') t.style = Ns([t.style, n.style])
      else if (Un(i)) {
        const o = t[i],
          s = n[i]
        s &&
          o !== s &&
          !(Z(o) && o.includes(s)) &&
          (t[i] = o ? [].concat(o, s) : s)
      } else i !== '' && (t[i] = n[i])
  }
  return t
}
function Je(e, t, r, n = null) {
  pt(e, t, 7, [r, n])
}
const gp = ql()
let bp = 0
function wp(e, t, r) {
  const n = e.type,
    i = (t ? t.appContext : e.appContext) || gp,
    o = {
      uid: bp++,
      vnode: e,
      type: n,
      parent: t,
      appContext: i,
      root: null,
      next: null,
      subTree: null,
      effect: null,
      update: null,
      scope: new Yu(!0),
      render: null,
      proxy: null,
      exposed: null,
      exposeProxy: null,
      withProxy: null,
      provides: t ? t.provides : Object.create(i.provides),
      accessCache: null,
      renderCache: [],
      components: null,
      directives: null,
      propsOptions: Ml(n, i),
      emitsOptions: bl(n, i),
      emit: null,
      emitted: null,
      propsDefaults: we,
      inheritAttrs: n.inheritAttrs,
      ctx: we,
      data: we,
      props: we,
      attrs: we,
      slots: we,
      refs: we,
      setupState: we,
      setupContext: null,
      suspense: r,
      suspenseId: r ? r.pendingId : 0,
      asyncDep: null,
      asyncResolved: !1,
      isMounted: !1,
      isUnmounted: !1,
      isDeactivated: !1,
      bc: null,
      c: null,
      bm: null,
      m: null,
      bu: null,
      u: null,
      um: null,
      bum: null,
      da: null,
      a: null,
      rtg: null,
      rtc: null,
      ec: null,
      sp: null,
    }
  return (
    (o.ctx = { _: o }),
    (o.root = t ? t.root : o),
    (o.emit = Od.bind(null, o)),
    e.ce && e.ce(o),
    o
  )
}
let Ae = null
const mt = () => Ae || He,
  or = (e) => {
    ;(Ae = e), e.scope.on()
  },
  nr = () => {
    Ae && Ae.scope.off(), (Ae = null)
  }
function zl(e) {
  return e.vnode.shapeFlag & 4
}
let zr = !1
function Ep(e, t = !1) {
  zr = t
  const { props: r, children: n } = e.vnode,
    i = zl(e)
  np(e, r, i, t), sp(e, n)
  const o = i ? _p(e, t) : void 0
  return (zr = !1), o
}
function _p(e, t) {
  const r = e.type
  ;(e.accessCache = Object.create(null)), (e.proxy = Js(new Proxy(e.ctx, Gd)))
  const { setup: n } = r
  if (n) {
    const i = (e.setupContext = n.length > 1 ? Op(e) : null)
    or(e), nn()
    const o = rr(n, e, 0, [e.props, i])
    if ((on(), nr(), $s(o))) {
      if ((o.then(nr, nr), t))
        return o
          .then((s) => {
            Jo(e, s, t)
          })
          .catch((s) => {
            sn(s, e, 0)
          })
      e.asyncDep = o
    } else Jo(e, o, t)
  } else Kl(e, t)
}
function Jo(e, t, r) {
  re(t)
    ? e.type.__ssrInlineRender
      ? (e.ssrRender = t)
      : (e.render = t)
    : be(t) && (e.setupState = hl(t)),
    Kl(e, r)
}
let oc
function Kl(e, t, r) {
  const n = e.type
  if (!e.render) {
    if (!t && oc && !n.render) {
      const i = n.template || ta(e).template
      if (i) {
        const { isCustomElement: o, compilerOptions: s } = e.appContext.config,
          { delimiters: a, compilerOptions: c } = n,
          u = Be(Be({ isCustomElement: o, delimiters: a }, s), c)
        n.render = oc(i, u)
      }
    }
    e.render = n.render || _t
  }
  or(e), nn(), Xd(e), on(), nr()
}
function Sp(e) {
  return new Proxy(e.attrs, {
    get(t, r) {
      return at(e, 'get', '$attrs'), t[r]
    },
  })
}
function Op(e) {
  const t = (n) => {
    e.exposed = n || {}
  }
  let r
  return {
    get attrs() {
      return r || (r = Sp(e))
    },
    slots: e.slots,
    emit: e.emit,
    expose: t,
  }
}
function ia(e) {
  if (e.exposed)
    return (
      e.exposeProxy ||
      (e.exposeProxy = new Proxy(hl(Js(e.exposed)), {
        get(t, r) {
          if (r in t) return t[r]
          if (r in Sn) return Sn[r](e)
        },
        has(t, r) {
          return r in t || r in Sn
        },
      }))
    )
}
function Yo(e, t = !0) {
  return re(e) ? e.displayName || e.name : e.name || (t && e.__name)
}
function kp(e) {
  return re(e) && '__vccOpts' in e
}
const Ne = (e, t) => bd(e, t, zr)
function RE(e) {
  const t = mt()
  let r = e()
  return (
    nr(),
    $s(r) &&
      (r = r.catch((n) => {
        throw (or(t), n)
      })),
    [r, () => or(t)]
  )
}
function Ge(e, t, r) {
  const n = arguments.length
  return n === 2
    ? be(t) && !Z(t)
      ? Wr(t)
        ? ve(e, null, [t])
        : ve(e, t)
      : ve(e, null, t)
    : (n > 3
        ? (r = Array.prototype.slice.call(arguments, 2))
        : n === 3 && Wr(r) && (r = [r]),
      ve(e, t, r))
}
const Tp = Symbol(''),
  Cp = () => Ve(Tp),
  oa = '3.2.45',
  Rp = 'http://www.w3.org/2000/svg',
  vr = typeof document < 'u' ? document : null,
  sc = vr && vr.createElement('template'),
  Pp = {
    insert: (e, t, r) => {
      t.insertBefore(e, r || null)
    },
    remove: (e) => {
      const t = e.parentNode
      t && t.removeChild(e)
    },
    createElement: (e, t, r, n) => {
      const i = t
        ? vr.createElementNS(Rp, e)
        : vr.createElement(e, r ? { is: r } : void 0)
      return (
        e === 'select' &&
          n &&
          n.multiple != null &&
          i.setAttribute('multiple', n.multiple),
        i
      )
    },
    createText: (e) => vr.createTextNode(e),
    createComment: (e) => vr.createComment(e),
    setText: (e, t) => {
      e.nodeValue = t
    },
    setElementText: (e, t) => {
      e.textContent = t
    },
    parentNode: (e) => e.parentNode,
    nextSibling: (e) => e.nextSibling,
    querySelector: (e) => vr.querySelector(e),
    setScopeId(e, t) {
      e.setAttribute(t, '')
    },
    insertStaticContent(e, t, r, n, i, o) {
      const s = r ? r.previousSibling : t.lastChild
      if (i && (i === o || i.nextSibling))
        for (
          ;
          t.insertBefore(i.cloneNode(!0), r),
            !(i === o || !(i = i.nextSibling));

        );
      else {
        sc.innerHTML = n ? `<svg>${e}</svg>` : e
        const a = sc.content
        if (n) {
          const c = a.firstChild
          for (; c.firstChild; ) a.appendChild(c.firstChild)
          a.removeChild(c)
        }
        t.insertBefore(a, r)
      }
      return [
        s ? s.nextSibling : t.firstChild,
        r ? r.previousSibling : t.lastChild,
      ]
    },
  }
function xp(e, t, r) {
  const n = e._vtc
  n && (t = (t ? [t, ...n] : [...n]).join(' ')),
    t == null
      ? e.removeAttribute('class')
      : r
      ? e.setAttribute('class', t)
      : (e.className = t)
}
function Ap(e, t, r) {
  const n = e.style,
    i = Pe(r)
  if (r && !i) {
    for (const o in r) Go(n, o, r[o])
    if (t && !Pe(t)) for (const o in t) r[o] == null && Go(n, o, '')
  } else {
    const o = n.display
    i ? t !== r && (n.cssText = r) : t && e.removeAttribute('style'),
      '_vod' in e && (n.display = o)
  }
}
const ac = /\s*!important$/
function Go(e, t, r) {
  if (Z(r)) r.forEach((n) => Go(e, t, n))
  else if ((r == null && (r = ''), t.startsWith('--'))) e.setProperty(t, r)
  else {
    const n = Ip(e, t)
    ac.test(r)
      ? e.setProperty(rn(n), r.replace(ac, ''), 'important')
      : (e[n] = r)
  }
}
const cc = ['Webkit', 'Moz', 'ms'],
  ho = {}
function Ip(e, t) {
  const r = ho[t]
  if (r) return r
  let n = Pt(t)
  if (n !== 'filter' && n in e) return (ho[t] = n)
  n = ji(n)
  for (let i = 0; i < cc.length; i++) {
    const o = cc[i] + n
    if (o in e) return (ho[t] = o)
  }
  return t
}
const uc = 'http://www.w3.org/1999/xlink'
function Fp(e, t, r, n, i) {
  if (n && t.startsWith('xlink:'))
    r == null
      ? e.removeAttributeNS(uc, t.slice(6, t.length))
      : e.setAttributeNS(uc, t, r)
  else {
    const o = Fh(t)
    r == null || (o && !Vu(r))
      ? e.removeAttribute(t)
      : e.setAttribute(t, o ? '' : r)
  }
}
function Dp(e, t, r, n, i, o, s) {
  if (t === 'innerHTML' || t === 'textContent') {
    n && s(n, i, o), (e[t] = r ?? '')
    return
  }
  if (t === 'value' && e.tagName !== 'PROGRESS' && !e.tagName.includes('-')) {
    e._value = r
    const c = r ?? ''
    ;(e.value !== c || e.tagName === 'OPTION') && (e.value = c),
      r == null && e.removeAttribute(t)
    return
  }
  let a = !1
  if (r === '' || r == null) {
    const c = typeof e[t]
    c === 'boolean'
      ? (r = Vu(r))
      : r == null && c === 'string'
      ? ((r = ''), (a = !0))
      : c === 'number' && ((r = 0), (a = !0))
  }
  try {
    e[t] = r
  } catch {}
  a && e.removeAttribute(t)
}
function Mp(e, t, r, n) {
  e.addEventListener(t, r, n)
}
function Np(e, t, r, n) {
  e.removeEventListener(t, r, n)
}
function jp(e, t, r, n, i = null) {
  const o = e._vei || (e._vei = {}),
    s = o[t]
  if (n && s) s.value = n
  else {
    const [a, c] = Lp(t)
    if (n) {
      const u = (o[t] = $p(n, i))
      Mp(e, a, u, c)
    } else s && (Np(e, a, s, c), (o[t] = void 0))
  }
}
const lc = /(?:Once|Passive|Capture)$/
function Lp(e) {
  let t
  if (lc.test(e)) {
    t = {}
    let n
    for (; (n = e.match(lc)); )
      (e = e.slice(0, e.length - n[0].length)), (t[n[0].toLowerCase()] = !0)
  }
  return [e[2] === ':' ? e.slice(3) : rn(e.slice(2)), t]
}
let po = 0
const qp = Promise.resolve(),
  Bp = () => po || (qp.then(() => (po = 0)), (po = Date.now()))
function $p(e, t) {
  const r = (n) => {
    if (!n._vts) n._vts = Date.now()
    else if (n._vts <= r.attached) return
    pt(Hp(n, r.value), t, 5, [n])
  }
  return (r.value = e), (r.attached = Bp()), r
}
function Hp(e, t) {
  if (Z(t)) {
    const r = e.stopImmediatePropagation
    return (
      (e.stopImmediatePropagation = () => {
        r.call(e), (e._stopped = !0)
      }),
      t.map((n) => (i) => !i._stopped && n && n(i))
    )
  } else return t
}
const fc = /^on[a-z]/,
  Qp = (e, t, r, n, i = !1, o, s, a, c) => {
    t === 'class'
      ? xp(e, n, i)
      : t === 'style'
      ? Ap(e, r, n)
      : Un(t)
      ? Ls(t) || jp(e, t, r, n, s)
      : (
          t[0] === '.'
            ? ((t = t.slice(1)), !0)
            : t[0] === '^'
            ? ((t = t.slice(1)), !1)
            : Up(e, t, n, i)
        )
      ? Dp(e, t, n, o, s, a, c)
      : (t === 'true-value'
          ? (e._trueValue = n)
          : t === 'false-value' && (e._falseValue = n),
        Fp(e, t, n, i))
  }
function Up(e, t, r, n) {
  return n
    ? !!(
        t === 'innerHTML' ||
        t === 'textContent' ||
        (t in e && fc.test(t) && re(r))
      )
    : t === 'spellcheck' ||
      t === 'draggable' ||
      t === 'translate' ||
      t === 'form' ||
      (t === 'list' && e.tagName === 'INPUT') ||
      (t === 'type' && e.tagName === 'TEXTAREA') ||
      (fc.test(t) && Pe(r))
    ? !1
    : t in e
}
const Ut = 'transition',
  un = 'animation',
  Wi = (e, { slots: t }) => Ge(Ol, Vp(e), t)
Wi.displayName = 'Transition'
const Jl = {
  name: String,
  type: String,
  css: { type: Boolean, default: !0 },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String,
}
Wi.props = Be({}, Ol.props, Jl)
const fr = (e, t = []) => {
    Z(e) ? e.forEach((r) => r(...t)) : e && e(...t)
  },
  hc = (e) => (e ? (Z(e) ? e.some((t) => t.length > 1) : e.length > 1) : !1)
function Vp(e) {
  const t = {}
  for (const j in e) j in Jl || (t[j] = e[j])
  if (e.css === !1) return t
  const {
      name: r = 'v',
      type: n,
      duration: i,
      enterFromClass: o = `${r}-enter-from`,
      enterActiveClass: s = `${r}-enter-active`,
      enterToClass: a = `${r}-enter-to`,
      appearFromClass: c = o,
      appearActiveClass: u = s,
      appearToClass: l = a,
      leaveFromClass: h = `${r}-leave-from`,
      leaveActiveClass: f = `${r}-leave-active`,
      leaveToClass: d = `${r}-leave-to`,
    } = e,
    p = Wp(i),
    b = p && p[0],
    w = p && p[1],
    {
      onBeforeEnter: v,
      onEnter: y,
      onEnterCancelled: g,
      onLeave: E,
      onLeaveCancelled: S,
      onBeforeAppear: C = v,
      onAppear: x = y,
      onAppearCancelled: T = g,
    } = t,
    B = (j, z, A) => {
      hr(j, z ? l : a), hr(j, z ? u : s), A && A()
    },
    L = (j, z) => {
      ;(j._isLeaving = !1), hr(j, h), hr(j, d), hr(j, f), z && z()
    },
    J = (j) => (z, A) => {
      const ne = j ? x : y,
        V = () => B(z, j, A)
      fr(ne, [z, V]),
        dc(() => {
          hr(z, j ? c : o), Vt(z, j ? l : a), hc(ne) || pc(z, n, b, V)
        })
    }
  return Be(t, {
    onBeforeEnter(j) {
      fr(v, [j]), Vt(j, o), Vt(j, s)
    },
    onBeforeAppear(j) {
      fr(C, [j]), Vt(j, c), Vt(j, u)
    },
    onEnter: J(!1),
    onAppear: J(!0),
    onLeave(j, z) {
      j._isLeaving = !0
      const A = () => L(j, z)
      Vt(j, h),
        Jp(),
        Vt(j, f),
        dc(() => {
          j._isLeaving && (hr(j, h), Vt(j, d), hc(E) || pc(j, n, w, A))
        }),
        fr(E, [j, A])
    },
    onEnterCancelled(j) {
      B(j, !1), fr(g, [j])
    },
    onAppearCancelled(j) {
      B(j, !0), fr(T, [j])
    },
    onLeaveCancelled(j) {
      L(j), fr(S, [j])
    },
  })
}
function Wp(e) {
  if (e == null) return null
  if (be(e)) return [yo(e.enter), yo(e.leave)]
  {
    const t = yo(e)
    return [t, t]
  }
}
function yo(e) {
  return Li(e)
}
function Vt(e, t) {
  t.split(/\s+/).forEach((r) => r && e.classList.add(r)),
    (e._vtc || (e._vtc = new Set())).add(t)
}
function hr(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.remove(n))
  const { _vtc: r } = e
  r && (r.delete(t), r.size || (e._vtc = void 0))
}
function dc(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e)
  })
}
let zp = 0
function pc(e, t, r, n) {
  const i = (e._endId = ++zp),
    o = () => {
      i === e._endId && n()
    }
  if (r) return setTimeout(o, r)
  const { type: s, timeout: a, propCount: c } = Kp(e, t)
  if (!s) return n()
  const u = s + 'end'
  let l = 0
  const h = () => {
      e.removeEventListener(u, f), o()
    },
    f = (d) => {
      d.target === e && ++l >= c && h()
    }
  setTimeout(() => {
    l < c && h()
  }, a + 1),
    e.addEventListener(u, f)
}
function Kp(e, t) {
  const r = window.getComputedStyle(e),
    n = (p) => (r[p] || '').split(', '),
    i = n(`${Ut}Delay`),
    o = n(`${Ut}Duration`),
    s = yc(i, o),
    a = n(`${un}Delay`),
    c = n(`${un}Duration`),
    u = yc(a, c)
  let l = null,
    h = 0,
    f = 0
  t === Ut
    ? s > 0 && ((l = Ut), (h = s), (f = o.length))
    : t === un
    ? u > 0 && ((l = un), (h = u), (f = c.length))
    : ((h = Math.max(s, u)),
      (l = h > 0 ? (s > u ? Ut : un) : null),
      (f = l ? (l === Ut ? o.length : c.length) : 0))
  const d =
    l === Ut && /\b(transform|all)(,|$)/.test(n(`${Ut}Property`).toString())
  return { type: l, timeout: h, propCount: f, hasTransform: d }
}
function yc(e, t) {
  for (; e.length < t.length; ) e = e.concat(e)
  return Math.max(...t.map((r, n) => mc(r) + mc(e[n])))
}
function mc(e) {
  return Number(e.slice(0, -1).replace(',', '.')) * 1e3
}
function Jp() {
  return document.body.offsetHeight
}
const Yl = Be({ patchProp: Qp }, Pp)
let kn,
  vc = !1
function Yp() {
  return kn || (kn = fp(Yl))
}
function Gp() {
  return (kn = vc ? kn : hp(Yl)), (vc = !0), kn
}
const Xp = (...e) => {
    const t = Yp().createApp(...e),
      { mount: r } = t
    return (
      (t.mount = (n) => {
        const i = Gl(n)
        if (!i) return
        const o = t._component
        !re(o) && !o.render && !o.template && (o.template = i.innerHTML),
          (i.innerHTML = '')
        const s = r(i, !1, i instanceof SVGElement)
        return (
          i instanceof Element &&
            (i.removeAttribute('v-cloak'), i.setAttribute('data-v-app', '')),
          s
        )
      }),
      t
    )
  },
  Zp = (...e) => {
    const t = Gp().createApp(...e),
      { mount: r } = t
    return (
      (t.mount = (n) => {
        const i = Gl(n)
        if (i) return r(i, !0, i instanceof SVGElement)
      }),
      t
    )
  }
function Gl(e) {
  return Pe(e) ? document.querySelector(e) : e
}
const ey =
    /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
  ty =
    /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
  ry = /^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/
function ny(e, t) {
  if (
    e !== '__proto__' &&
    !(e === 'constructor' && t && typeof t == 'object' && 'prototype' in t)
  )
    return t
}
function sa(e, t = {}) {
  if (typeof e != 'string') return e
  const r = e.toLowerCase().trim()
  if (r === 'true') return !0
  if (r === 'false') return !1
  if (r === 'null') return null
  if (r === 'nan') return Number.NaN
  if (r === 'infinity') return Number.POSITIVE_INFINITY
  if (r !== 'undefined') {
    if (!ry.test(e)) {
      if (t.strict) throw new SyntaxError('Invalid JSON')
      return e
    }
    try {
      return ey.test(e) || ty.test(e) ? JSON.parse(e, ny) : JSON.parse(e)
    } catch (n) {
      if (t.strict) throw n
      return e
    }
  }
}
const iy = /#/g,
  oy = /&/g,
  sy = /=/g,
  Xl = /\+/g,
  ay = /%5b/gi,
  cy = /%5d/gi,
  uy = /%5e/gi,
  ly = /%60/gi,
  fy = /%7b/gi,
  hy = /%7c/gi,
  dy = /%7d/gi,
  py = /%20/gi
function yy(e) {
  return encodeURI('' + e)
    .replace(hy, '|')
    .replace(ay, '[')
    .replace(cy, ']')
}
function Xo(e) {
  return yy(e)
    .replace(Xl, '%2B')
    .replace(py, '+')
    .replace(iy, '%23')
    .replace(oy, '%26')
    .replace(ly, '`')
    .replace(fy, '{')
    .replace(dy, '}')
    .replace(uy, '^')
}
function mo(e) {
  return Xo(e).replace(sy, '%3D')
}
function Zl(e = '') {
  try {
    return decodeURIComponent('' + e)
  } catch {
    return '' + e
  }
}
function my(e) {
  return Zl(e.replace(Xl, ' '))
}
function vy(e = '') {
  const t = {}
  e[0] === '?' && (e = e.slice(1))
  for (const r of e.split('&')) {
    const n = r.match(/([^=]+)=?(.*)/) || []
    if (n.length < 2) continue
    const i = Zl(n[1])
    if (i === '__proto__' || i === 'constructor') continue
    const o = my(n[2] || '')
    typeof t[i] < 'u'
      ? Array.isArray(t[i])
        ? t[i].push(o)
        : (t[i] = [t[i], o])
      : (t[i] = o)
  }
  return t
}
function gy(e, t) {
  return (
    (typeof t == 'number' || typeof t == 'boolean') && (t = String(t)),
    t
      ? Array.isArray(t)
        ? t.map((r) => `${mo(e)}=${Xo(r)}`).join('&')
        : `${mo(e)}=${Xo(t)}`
      : mo(e)
  )
}
function by(e) {
  return Object.keys(e)
    .filter((t) => e[t] !== void 0)
    .map((t) => gy(t, e[t]))
    .join('&')
}
const wy = /^\w{2,}:(\/\/)?/,
  Ey = /^\/\/[^/]+/
function Wn(e, t = !1) {
  return wy.test(e) || (t && Ey.test(e))
}
const _y = /\/$|\/\?/
function Zo(e = '', t = !1) {
  return t ? _y.test(e) : e.endsWith('/')
}
function ef(e = '', t = !1) {
  if (!t) return (Zo(e) ? e.slice(0, -1) : e) || '/'
  if (!Zo(e, !0)) return e || '/'
  const [r, ...n] = e.split('?')
  return (r.slice(0, -1) || '/') + (n.length > 0 ? `?${n.join('?')}` : '')
}
function Sy(e = '', t = !1) {
  if (!t) return e.endsWith('/') ? e : e + '/'
  if (Zo(e, !0)) return e || '/'
  const [r, ...n] = e.split('?')
  return r + '/' + (n.length > 0 ? `?${n.join('?')}` : '')
}
function Oy(e = '') {
  return e.startsWith('/')
}
function ky(e = '') {
  return (Oy(e) ? e.slice(1) : e) || '/'
}
function Ty(e, t) {
  if (tf(t) || Wn(e)) return e
  const r = ef(t)
  return e.startsWith(r) ? e : aa(r, e)
}
function gc(e, t) {
  if (tf(t)) return e
  const r = ef(t)
  if (!e.startsWith(r)) return e
  const n = e.slice(r.length)
  return n[0] === '/' ? n : '/' + n
}
function Cy(e, t) {
  const r = ca(e),
    n = { ...vy(r.search), ...t }
  return (r.search = by(n)), Py(r)
}
function tf(e) {
  return !e || e === '/'
}
function Ry(e) {
  return e && e !== '/'
}
function aa(e, ...t) {
  let r = e || ''
  for (const n of t.filter((i) => Ry(i))) r = r ? Sy(r) + ky(n) : n
  return r
}
function ca(e = '', t) {
  if (!Wn(e, !0)) return t ? ca(t + e) : bc(e)
  const [r = '', n, i = ''] = (
      e.replace(/\\/g, '/').match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/) || []
    ).splice(1),
    [o = '', s = ''] = (i.match(/([^#/?]*)(.*)?/) || []).splice(1),
    { pathname: a, search: c, hash: u } = bc(s.replace(/\/(?=[A-Za-z]:)/, ''))
  return {
    protocol: r,
    auth: n ? n.slice(0, Math.max(0, n.length - 1)) : '',
    host: o,
    pathname: a,
    search: c,
    hash: u,
  }
}
function bc(e = '') {
  const [t = '', r = '', n = ''] = (
    e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []
  ).splice(1)
  return { pathname: t, search: r, hash: n }
}
function Py(e) {
  const t =
    e.pathname +
    (e.search ? (e.search.startsWith('?') ? '' : '?') + e.search : '') +
    e.hash
  return e.protocol
    ? e.protocol + '//' + (e.auth ? e.auth + '@' : '') + e.host + t
    : t
}
class xy extends Error {
  constructor() {
    super(...arguments), (this.name = 'FetchError')
  }
}
function Ay(e, t, r) {
  let n = ''
  e && r && (n = `${r.status} ${r.statusText} (${e.toString()})`),
    t && (n = `${t.message} (${n})`)
  const i = new xy(n)
  return (
    Object.defineProperty(i, 'request', {
      get() {
        return e
      },
    }),
    Object.defineProperty(i, 'response', {
      get() {
        return r
      },
    }),
    Object.defineProperty(i, 'data', {
      get() {
        return r && r._data
      },
    }),
    Object.defineProperty(i, 'status', {
      get() {
        return r && r.status
      },
    }),
    Object.defineProperty(i, 'statusText', {
      get() {
        return r && r.statusText
      },
    }),
    Object.defineProperty(i, 'statusCode', {
      get() {
        return r && r.status
      },
    }),
    Object.defineProperty(i, 'statusMessage', {
      get() {
        return r && r.statusText
      },
    }),
    i
  )
}
const Iy = new Set(Object.freeze(['PATCH', 'POST', 'PUT', 'DELETE']))
function wc(e = 'GET') {
  return Iy.has(e.toUpperCase())
}
function Fy(e) {
  if (e === void 0) return !1
  const t = typeof e
  return t === 'string' || t === 'number' || t === 'boolean' || t === null
    ? !0
    : t !== 'object'
    ? !1
    : Array.isArray(e)
    ? !0
    : (e.constructor && e.constructor.name === 'Object') ||
      typeof e.toJSON == 'function'
}
const Dy = new Set([
    'image/svg',
    'application/xml',
    'application/xhtml',
    'application/html',
  ]),
  My = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i
function Ny(e = '') {
  if (!e) return 'json'
  const t = e.split(';').shift()
  return My.test(t)
    ? 'json'
    : Dy.has(t) || t.startsWith('text/')
    ? 'text'
    : 'blob'
}
const jy = new Set([408, 409, 425, 429, 500, 502, 503, 504])
function rf(e) {
  const { fetch: t, Headers: r } = e
  function n(s) {
    const a = (s.error && s.error.name === 'AbortError') || !1
    if (s.options.retry !== !1 && !a) {
      const u =
          typeof s.options.retry == 'number'
            ? s.options.retry
            : wc(s.options.method)
            ? 0
            : 1,
        l = (s.response && s.response.status) || 500
      if (u > 0 && jy.has(l))
        return i(s.request, { ...s.options, retry: u - 1 })
    }
    const c = Ay(s.request, s.error, s.response)
    throw (Error.captureStackTrace && Error.captureStackTrace(c, i), c)
  }
  const i = async function (a, c = {}) {
      const u = {
        request: a,
        options: { ...e.defaults, ...c },
        response: void 0,
        error: void 0,
      }
      u.options.onRequest && (await u.options.onRequest(u)),
        typeof u.request == 'string' &&
          (u.options.baseURL && (u.request = Ty(u.request, u.options.baseURL)),
          (u.options.query || u.options.params) &&
            (u.request = Cy(u.request, {
              ...u.options.params,
              ...u.options.query,
            })),
          u.options.body &&
            wc(u.options.method) &&
            Fy(u.options.body) &&
            ((u.options.body =
              typeof u.options.body == 'string'
                ? u.options.body
                : JSON.stringify(u.options.body)),
            (u.options.headers = new r(u.options.headers)),
            u.options.headers.has('content-type') ||
              u.options.headers.set('content-type', 'application/json'),
            u.options.headers.has('accept') ||
              u.options.headers.set('accept', 'application/json'))),
        (u.response = await t(u.request, u.options).catch(
          async (h) => (
            (u.error = h),
            u.options.onRequestError && (await u.options.onRequestError(u)),
            n(u)
          )
        ))
      const l =
        (u.options.parseResponse ? 'json' : u.options.responseType) ||
        Ny(u.response.headers.get('content-type') || '')
      if (l === 'json') {
        const h = await u.response.text(),
          f = u.options.parseResponse || sa
        u.response._data = f(h)
      } else
        l === 'stream'
          ? (u.response._data = u.response.body)
          : (u.response._data = await u.response[l]())
      return (
        u.options.onResponse && (await u.options.onResponse(u)),
        u.response.status >= 400 && u.response.status < 600
          ? (u.options.onResponseError && (await u.options.onResponseError(u)),
            n(u))
          : u.response
      )
    },
    o = function (a, c) {
      return i(a, c).then((u) => u._data)
    }
  return (
    (o.raw = i),
    (o.native = t),
    (o.create = (s = {}) => rf({ ...e, defaults: { ...e.defaults, ...s } })),
    o
  )
}
const nf = (function () {
    if (typeof globalThis < 'u') return globalThis
    if (typeof self < 'u') return self
    if (typeof window < 'u') return window
    if (typeof global < 'u') return global
    throw new Error('unable to locate global object')
  })(),
  Ly =
    nf.fetch ||
    (() =>
      Promise.reject(new Error('[ofetch] global.fetch is not supported!'))),
  qy = nf.Headers,
  By = rf({ fetch: Ly, Headers: qy }),
  $y = By,
  Hy = () => {
    var e
    return (
      ((e = window == null ? void 0 : window.__NUXT__) == null
        ? void 0
        : e.config) || {}
    )
  },
  ki = Hy().app,
  Qy = () => ki.baseURL,
  Uy = () => ki.buildAssetsDir,
  Vy = (...e) => aa(of(), Uy(), ...e),
  of = (...e) => {
    const t = ki.cdnURL || ki.baseURL
    return e.length ? aa(t, ...e) : t
  }
;(globalThis.__buildAssetsURL = Vy), (globalThis.__publicAssetsURL = of)
function es(e, t = {}, r) {
  for (const n in e) {
    const i = e[n],
      o = r ? `${r}:${n}` : n
    typeof i == 'object' && i !== null
      ? es(i, t, o)
      : typeof i == 'function' && (t[o] = i)
  }
  return t
}
function Wy(e, t) {
  return e.reduce((r, n) => r.then(() => n.apply(void 0, t)), Promise.resolve())
}
function zy(e, t) {
  return Promise.all(e.map((r) => r.apply(void 0, t)))
}
function vo(e, t) {
  for (const r of e) r(t)
}
class Ky {
  constructor() {
    ;(this._hooks = {}),
      (this._before = void 0),
      (this._after = void 0),
      (this._deprecatedMessages = void 0),
      (this._deprecatedHooks = {}),
      (this.hook = this.hook.bind(this)),
      (this.callHook = this.callHook.bind(this)),
      (this.callHookWith = this.callHookWith.bind(this))
  }
  hook(t, r, n = {}) {
    if (!t || typeof r != 'function') return () => {}
    const i = t
    let o
    for (; this._deprecatedHooks[t]; )
      (o = this._deprecatedHooks[t]), (t = o.to)
    if (o && !n.allowDeprecated) {
      let s = o.message
      s ||
        (s =
          `${i} hook has been deprecated` +
          (o.to ? `, please use ${o.to}` : '')),
        this._deprecatedMessages || (this._deprecatedMessages = new Set()),
        this._deprecatedMessages.has(s) ||
          (console.warn(s), this._deprecatedMessages.add(s))
    }
    return (
      (this._hooks[t] = this._hooks[t] || []),
      this._hooks[t].push(r),
      () => {
        r && (this.removeHook(t, r), (r = void 0))
      }
    )
  }
  hookOnce(t, r) {
    let n,
      i = (...o) => (
        typeof n == 'function' && n(), (n = void 0), (i = void 0), r(...o)
      )
    return (n = this.hook(t, i)), n
  }
  removeHook(t, r) {
    if (this._hooks[t]) {
      const n = this._hooks[t].indexOf(r)
      n !== -1 && this._hooks[t].splice(n, 1),
        this._hooks[t].length === 0 && delete this._hooks[t]
    }
  }
  deprecateHook(t, r) {
    this._deprecatedHooks[t] = typeof r == 'string' ? { to: r } : r
    const n = this._hooks[t] || []
    this._hooks[t] = void 0
    for (const i of n) this.hook(t, i)
  }
  deprecateHooks(t) {
    Object.assign(this._deprecatedHooks, t)
    for (const r in t) this.deprecateHook(r, t[r])
  }
  addHooks(t) {
    const r = es(t),
      n = Object.keys(r).map((i) => this.hook(i, r[i]))
    return () => {
      for (const i of n.splice(0, n.length)) i()
    }
  }
  removeHooks(t) {
    const r = es(t)
    for (const n in r) this.removeHook(n, r[n])
  }
  callHook(t, ...r) {
    return this.callHookWith(Wy, t, ...r)
  }
  callHookParallel(t, ...r) {
    return this.callHookWith(zy, t, ...r)
  }
  callHookWith(t, r, ...n) {
    const i =
      this._before || this._after ? { name: r, args: n, context: {} } : void 0
    this._before && vo(this._before, i)
    const o = t(this._hooks[r] || [], n)
    return o instanceof Promise
      ? o.finally(() => {
          this._after && i && vo(this._after, i)
        })
      : (this._after && i && vo(this._after, i), o)
  }
  beforeEach(t) {
    return (
      (this._before = this._before || []),
      this._before.push(t),
      () => {
        const r = this._before.indexOf(t)
        r !== -1 && this._before.splice(r, 1)
      }
    )
  }
  afterEach(t) {
    return (
      (this._after = this._after || []),
      this._after.push(t),
      () => {
        const r = this._after.indexOf(t)
        r !== -1 && this._after.splice(r, 1)
      }
    )
  }
}
function sf() {
  return new Ky()
}
function Jy() {
  let e,
    t = !1
  const r = (n) => {
    if (e && e !== n) throw new Error('Context conflict')
  }
  return {
    use: () => {
      if (e === void 0) throw new Error('Context is not available')
      return e
    },
    tryUse: () => e,
    set: (n, i) => {
      i || r(n), (e = n), (t = !0)
    },
    unset: () => {
      ;(e = void 0), (t = !1)
    },
    call: (n, i) => {
      r(n), (e = n)
      try {
        return i()
      } finally {
        t || (e = void 0)
      }
    },
    async callAsync(n, i) {
      e = n
      const o = () => {
          e = n
        },
        s = () => (e === n ? o : void 0)
      ts.add(s)
      try {
        const a = i()
        return t || (e = void 0), await a
      } finally {
        ts.delete(s)
      }
    },
  }
}
function Yy() {
  const e = {}
  return {
    get(t) {
      return e[t] || (e[t] = Jy()), e[t], e[t]
    },
  }
}
const Ti =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
      ? self
      : typeof global < 'u'
      ? global
      : typeof window < 'u'
      ? window
      : {},
  Ec = '__unctx__',
  Gy = Ti[Ec] || (Ti[Ec] = Yy()),
  Xy = (e) => Gy.get(e),
  _c = '__unctx_async_handlers__',
  ts = Ti[_c] || (Ti[_c] = new Set())
function rs(e) {
  const t = []
  for (const i of ts) {
    const o = i()
    o && t.push(o)
  }
  const r = () => {
    for (const i of t) i()
  }
  let n = e()
  return (
    n &&
      typeof n == 'object' &&
      'catch' in n &&
      (n = n.catch((i) => {
        throw (r(), i)
      })),
    [n, r]
  )
}
const af = Xy('nuxt-app'),
  Zy = '__nuxt_plugin'
function em(e) {
  let t = 0
  const r = {
    provide: void 0,
    globalName: 'nuxt',
    payload: xt({ data: {}, state: {}, _errors: {}, ...window.__NUXT__ }),
    static: { data: {} },
    isHydrating: !0,
    deferHydration() {
      if (!r.isHydrating) return () => {}
      t++
      let o = !1
      return () => {
        if (!o && ((o = !0), t--, t === 0))
          return (r.isHydrating = !1), r.callHook('app:suspense:resolve')
      }
    },
    _asyncDataPromises: {},
    _asyncData: {},
    ...e,
  }
  ;(r.hooks = sf()),
    (r.hook = r.hooks.hook),
    (r.callHook = r.hooks.callHook),
    (r.provide = (o, s) => {
      const a = '$' + o
      ni(r, a, s), ni(r.vueApp.config.globalProperties, a, s)
    }),
    ni(r.vueApp, '$nuxt', r),
    ni(r.vueApp.config.globalProperties, '$nuxt', r)
  const n = xt(r.payload.config),
    i = new Proxy(n, {
      get(o, s) {
        return s === 'public' ? o.public : o[s] ?? o.public[s]
      },
      set(o, s, a) {
        return s === 'public' || s === 'app'
          ? !1
          : ((o[s] = a), (o.public[s] = a), !0)
      },
    })
  return r.provide('config', i), r
}
async function tm(e, t) {
  if (typeof t != 'function') return
  const { provide: r } = (await Jt(e, t, [e])) || {}
  if (r && typeof r == 'object') for (const n in r) e.provide(n, r[n])
}
async function rm(e, t) {
  for (const r of t) await tm(e, r)
}
function nm(e) {
  return e
    .map((r) =>
      typeof r != 'function' ? null : r.length > 1 ? (n) => r(n, n.provide) : r
    )
    .filter(Boolean)
}
function Or(e) {
  return (e[Zy] = !0), e
}
function Jt(e, t, r) {
  const n = () => (r ? t(...r) : t())
  return af.set(e), n()
}
function xe() {
  const e = af.tryUse()
  if (!e) {
    const t = mt()
    if (!t) throw new Error('nuxt instance unavailable')
    return t.appContext.app.$nuxt
  }
  return e
}
function cf() {
  return xe().$config
}
function ni(e, t, r) {
  Object.defineProperty(e, t, { get: () => r })
}
const im = decodeURIComponent,
  om = encodeURIComponent,
  sm = /; */,
  ii = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/
function am(e, t) {
  if (typeof e != 'string') throw new TypeError('argument str must be a string')
  let r = {},
    n = t || {},
    i = e.split(sm),
    o = n.decode || im
  for (let s = 0; s < i.length; s++) {
    let a = i[s],
      c = a.indexOf('=')
    if (c < 0) continue
    let u = a.substr(0, c).trim(),
      l = a.substr(++c, a.length).trim()
    l[0] == '"' && (l = l.slice(1, -1)), r[u] == null && (r[u] = cm(l, o))
  }
  return r
}
function Sc(e, t, r) {
  let n = r || {},
    i = n.encode || om
  if (typeof i != 'function') throw new TypeError('option encode is invalid')
  if (!ii.test(e)) throw new TypeError('argument name is invalid')
  let o = i(t)
  if (o && !ii.test(o)) throw new TypeError('argument val is invalid')
  let s = e + '=' + o
  if (n.maxAge != null) {
    let a = n.maxAge - 0
    if (isNaN(a) || !isFinite(a))
      throw new TypeError('option maxAge is invalid')
    s += '; Max-Age=' + Math.floor(a)
  }
  if (n.domain) {
    if (!ii.test(n.domain)) throw new TypeError('option domain is invalid')
    s += '; Domain=' + n.domain
  }
  if (n.path) {
    if (!ii.test(n.path)) throw new TypeError('option path is invalid')
    s += '; Path=' + n.path
  }
  if (n.expires) {
    if (typeof n.expires.toUTCString != 'function')
      throw new TypeError('option expires is invalid')
    s += '; Expires=' + n.expires.toUTCString()
  }
  if (
    (n.httpOnly && (s += '; HttpOnly'),
    n.secure && (s += '; Secure'),
    n.sameSite)
  )
    switch (
      typeof n.sameSite == 'string' ? n.sameSite.toLowerCase() : n.sameSite
    ) {
      case !0:
        s += '; SameSite=Strict'
        break
      case 'lax':
        s += '; SameSite=Lax'
        break
      case 'strict':
        s += '; SameSite=Strict'
        break
      case 'none':
        s += '; SameSite=None'
        break
      default:
        throw new TypeError('option sameSite is invalid')
    }
  return s
}
function cm(e, t) {
  try {
    return t(e)
  } catch {
    return e
  }
}
class ns extends Error {
  constructor() {
    super(...arguments),
      (this.statusCode = 500),
      (this.fatal = !1),
      (this.unhandled = !1),
      (this.statusMessage = void 0)
  }
  toJSON() {
    const t = { message: this.message, statusCode: this.statusCode }
    return (
      this.statusMessage && (t.statusMessage = this.statusMessage),
      this.data !== void 0 && (t.data = this.data),
      t
    )
  }
}
ns.__h3_error__ = !0
function is(e) {
  if (typeof e == 'string') return new ns(e)
  if (um(e)) return e
  const t = new ns(
    e.message ?? e.statusMessage,
    e.cause ? { cause: e.cause } : void 0
  )
  if ('stack' in e)
    try {
      Object.defineProperty(t, 'stack', {
        get() {
          return e.stack
        },
      })
    } catch {
      try {
        t.stack = e.stack
      } catch {}
    }
  return (
    e.data && (t.data = e.data),
    e.statusCode
      ? (t.statusCode = e.statusCode)
      : e.status && (t.statusCode = e.status),
    e.statusMessage
      ? (t.statusMessage = e.statusMessage)
      : e.statusText && (t.statusMessage = e.statusText),
    e.fatal !== void 0 && (t.fatal = e.fatal),
    e.unhandled !== void 0 && (t.unhandled = e.unhandled),
    t
  )
}
function um(e) {
  var t
  return (
    ((t = e == null ? void 0 : e.constructor) == null
      ? void 0
      : t.__h3_error__) === !0
  )
}
const zi = () => dl(xe().payload, 'error'),
  gn = (e) => {
    const t = os(e)
    try {
      xe().callHook('app:error', t)
      const n = zi()
      n.value = n.value || t
    } catch {
      throw t
    }
    return t
  },
  lm = async (e = {}) => {
    const t = xe(),
      r = zi()
    t.callHook('app:error:cleared', e),
      e.redirect && (await t.$router.replace(e.redirect)),
      (r.value = null)
  },
  fm = (e) => !!(e && typeof e == 'object' && '__nuxt_error' in e),
  os = (e) => {
    const t = is(e)
    return (t.__nuxt_error = !0), t
  },
  hm = () => null
function dm(...e) {
  var f
  const t = typeof e[e.length - 1] == 'string' ? e.pop() : void 0
  typeof e[0] != 'string' && e.unshift(t)
  let [r, n, i = {}] = e
  if (typeof r != 'string')
    throw new TypeError('[nuxt] [asyncData] key must be a string.')
  if (typeof n != 'function')
    throw new TypeError('[nuxt] [asyncData] handler must be a function.')
  ;(i.server = i.server ?? !0),
    (i.default = i.default ?? hm),
    (i.lazy = i.lazy ?? !1),
    (i.immediate = i.immediate ?? !0)
  const o = xe(),
    s = () => (o.isHydrating ? o.payload.data[r] : o.static.data[r]),
    a = () => s() !== void 0
  o._asyncData[r] ||
    (o._asyncData[r] = {
      data: ge(s() ?? ((f = i.default) == null ? void 0 : f.call(i)) ?? null),
      pending: ge(!a()),
      error: ge(o.payload._errors[r] ? os(o.payload._errors[r]) : null),
    })
  const c = { ...o._asyncData[r] }
  c.refresh = c.execute = (d = {}) => {
    if (o._asyncDataPromises[r]) {
      if (d.dedupe === !1) return o._asyncDataPromises[r]
      o._asyncDataPromises[r].cancelled = !0
    }
    if (d._initial && a()) return s()
    c.pending.value = !0
    const p = new Promise((b, w) => {
      try {
        b(n(o))
      } catch (v) {
        w(v)
      }
    })
      .then((b) => {
        if (p.cancelled) return o._asyncDataPromises[r]
        i.transform && (b = i.transform(b)),
          i.pick && (b = pm(b, i.pick)),
          (c.data.value = b),
          (c.error.value = null)
      })
      .catch((b) => {
        var w
        if (p.cancelled) return o._asyncDataPromises[r]
        ;(c.error.value = b),
          (c.data.value = Me(
            ((w = i.default) == null ? void 0 : w.call(i)) ?? null
          ))
      })
      .finally(() => {
        p.cancelled ||
          ((c.pending.value = !1),
          (o.payload.data[r] = c.data.value),
          c.error.value && (o.payload._errors[r] = os(c.error.value)),
          delete o._asyncDataPromises[r])
      })
    return (o._asyncDataPromises[r] = p), o._asyncDataPromises[r]
  }
  const u = () => c.refresh({ _initial: !0 }),
    l = i.server !== !1 && o.payload.serverRendered
  {
    const d = mt()
    if (d && !d._nuxtOnBeforeMountCbs) {
      d._nuxtOnBeforeMountCbs = []
      const b = d._nuxtOnBeforeMountCbs
      d &&
        (Rl(() => {
          b.forEach((w) => {
            w()
          }),
            b.splice(0, b.length)
        }),
        jn(() => b.splice(0, b.length)))
    }
    l && o.isHydrating && a()
      ? (c.pending.value = !1)
      : d &&
        ((o.payload.serverRendered && o.isHydrating) || i.lazy) &&
        i.immediate
      ? d._nuxtOnBeforeMountCbs.push(u)
      : i.immediate && u(),
      i.watch && jt(i.watch, () => c.refresh())
    const p = o.hook('app:data:refresh', (b) => {
      if (!b || b.includes(r)) return c.refresh()
    })
    d && jn(p)
  }
  const h = Promise.resolve(o._asyncDataPromises[r]).then(() => c)
  return Object.assign(h, c), h
}
function pm(e, t) {
  const r = {}
  for (const n of t) r[n] = e[n]
  return r
}
function ym(...e) {
  const t = typeof e[e.length - 1] == 'string' ? e.pop() : void 0
  typeof e[0] != 'string' && e.unshift(t)
  const [r, n] = e
  if (!r || typeof r != 'string')
    throw new TypeError('[nuxt] [useState] key must be a string: ' + r)
  if (n !== void 0 && typeof n != 'function')
    throw new Error('[nuxt] [useState] init must be a function: ' + n)
  const i = '$s' + r,
    o = xe(),
    s = dl(o.payload.state, i)
  if (s.value === void 0 && n) {
    const a = n()
    if (Te(a)) return (o.payload.state[i] = a), a
    s.value = a
  }
  return s
}
const Ki = () => {
    var e
    return (e = xe()) == null ? void 0 : e.$router
  },
  uf = () => (mt() ? Ve('_route', xe()._route) : xe()._route),
  mm = (e) => e,
  vm = () => {
    try {
      if (xe()._processingMiddleware) return !0
    } catch {
      return !0
    }
    return !1
  },
  gm = (e, t) => {
    e || (e = '/')
    const r = typeof e == 'string' ? e : e.path || '/',
      n = Wn(r, !0)
    if (n && !(t != null && t.external))
      throw new Error(
        'Navigating to external URL is not allowed by default. Use `nagivateTo (url, { external: true })`.'
      )
    if (n && ca(r).protocol === 'script:')
      throw new Error('Cannot navigate to an URL with script protocol.')
    if (!n && vm()) return e
    const i = Ki()
    return n
      ? (t != null && t.replace ? location.replace(r) : (location.href = r),
        Promise.resolve())
      : t != null && t.replace
      ? i.replace(e)
      : i.push(e)
  },
  bm = ['script', 'style', 'noscript'],
  wm = ['base', 'meta', 'link', 'style', 'script', 'noscript'],
  Em = ['base', 'title', 'titleTemplate', 'bodyAttrs', 'htmlAttrs']
function _m(e, t) {
  const { props: r, tag: n } = e
  if (Em.includes(n)) return n
  if (n === 'link' && r.rel === 'canonical') return 'canonical'
  if (r.charset) return 'charset'
  const i = ['id']
  n === 'meta' && i.push('name', 'property', 'http-equiv')
  for (const o of i)
    if (typeof r[o] < 'u') {
      const s = String(r[o])
      return t && !t(s) ? !1 : `${n}:${o}:${s}`
    }
  return !1
}
const oi = (e, t) => {
  const { tag: r, $el: n } = e
  n &&
    (Object.entries(r.props).forEach(([i, o]) => {
      o = String(o)
      const s = `attr:${i}`
      if (i === 'class') {
        if (!o) return
        for (const a of o.split(' ')) {
          const c = `${s}:${a}`
          t && t(e, c, () => n.classList.remove(a)),
            n.classList.contains(a) || n.classList.add(a)
        }
        return
      }
      t && !i.startsWith('data-h-') && t(e, s, () => n.removeAttribute(i)),
        n.getAttribute(i) !== o && n.setAttribute(i, o)
    }),
    bm.includes(r.tag) &&
      n.innerHTML !== (r.children || '') &&
      (n.innerHTML = r.children || ''))
}
function ua(e) {
  let t = 9
  for (let r = 0; r < e.length; ) t = Math.imul(t ^ e.charCodeAt(r++), 9 ** 9)
  return ((t ^ (t >>> 9)) + 65536).toString(16).substring(1, 8).toLowerCase()
}
async function lf(e, t = {}) {
  var l, h
  const r = { shouldRender: !0 }
  if ((await e.hooks.callHook('dom:beforeRender', r), !r.shouldRender)) return
  const n = t.document || window.document,
    i = e._popSideEffectQueue()
  e.headEntries()
    .map((f) => f._sde)
    .forEach((f) => {
      Object.entries(f).forEach(([d, p]) => {
        i[d] = p
      })
    })
  const o = async (f) => {
      const d = e.headEntries().find((b) => b._i === f._e),
        p = {
          renderId:
            f._d || ua(JSON.stringify({ ...f, _e: void 0, _p: void 0 })),
          $el: null,
          shouldRender: !0,
          tag: f,
          entry: d,
          staleSideEffects: i,
        }
      return await e.hooks.callHook('dom:beforeRenderTag', p), p
    },
    s = [],
    a = { body: [], head: [] },
    c = (f, d, p) => {
      ;(d = `${f.renderId}:${d}`), f.entry && (f.entry._sde[d] = p), delete i[d]
    },
    u = (f) => {
      ;(e._elMap[f.renderId] = f.$el),
        s.push(f),
        c(f, 'el', () => {
          var d
          ;(d = f.$el) == null || d.remove(), delete e._elMap[f.renderId]
        })
    }
  for (const f of await e.resolveTags()) {
    const d = await o(f)
    if (!d.shouldRender) continue
    const { tag: p } = d
    if (p.tag === 'title') {
      ;(n.title = p.children || ''), s.push(d)
      continue
    }
    if (p.tag === 'htmlAttrs' || p.tag === 'bodyAttrs') {
      ;(d.$el = n[p.tag === 'htmlAttrs' ? 'documentElement' : 'body']),
        oi(d, c),
        s.push(d)
      continue
    }
    if (
      ((d.$el = e._elMap[d.renderId]),
      !d.$el &&
        p._hash &&
        (d.$el = n.querySelector(
          `${
            (l = p.tagPosition) != null && l.startsWith('body')
              ? 'body'
              : 'head'
          } > ${p.tag}[data-h-${p._hash}]`
        )),
      d.$el)
    ) {
      d.tag._d && oi(d), u(d)
      continue
    }
    ;(d.$el = n.createElement(p.tag)),
      oi(d),
      a[
        (h = p.tagPosition) != null && h.startsWith('body') ? 'body' : 'head'
      ].push(d)
  }
  Object.entries(a).forEach(([f, d]) => {
    var b
    if (!d.length) return
    const p = (b = n == null ? void 0 : n[f]) == null ? void 0 : b.children
    if (p) {
      for (const w of [...p].reverse()) {
        const v = w.tagName.toLowerCase()
        if (!wm.includes(v)) continue
        const y = _m({
            tag: v,
            props: w
              .getAttributeNames()
              .reduce((E, S) => ({ ...E, [S]: w.getAttribute(S) }), {}),
          }),
          g = d.findIndex((E) => {
            var S
            return (
              E &&
              (E.tag._d === y ||
                ((S = w.isEqualNode) == null ? void 0 : S.call(w, E.$el)))
            )
          })
        if (g !== -1) {
          const E = d[g]
          ;(E.$el = w), oi(E), u(E), delete d[g]
        }
      }
      d.forEach((w) => {
        if (w.$el) {
          switch (w.tag.tagPosition) {
            case 'bodyClose':
              n.body.appendChild(w.$el)
              break
            case 'bodyOpen':
              n.body.insertBefore(w.$el, n.body.firstChild)
              break
            case 'head':
            default:
              n.head.appendChild(w.$el)
              break
          }
          u(w)
        }
      })
    }
  })
  for (const f of s) await e.hooks.callHook('dom:renderTag', f)
  Object.values(i).forEach((f) => f())
}
let hi = null
async function Sm(e, t = {}) {
  function r() {
    return (hi = null), lf(e, t)
  }
  const n = t.delayFn || ((i) => setTimeout(i, 10))
  return (hi = hi || new Promise((i) => n(() => i(r()))))
}
const Om = {
    __proto__: null,
    debouncedRenderDOMHead: Sm,
    get domUpdatePromise() {
      return hi
    },
    hashCode: ua,
    renderDOMHead: lf,
  },
  km = [
    'title',
    'titleTemplate',
    'base',
    'htmlAttrs',
    'bodyAttrs',
    'meta',
    'link',
    'style',
    'script',
    'noscript',
  ],
  Tm = ['tagPosition', 'tagPriority', 'tagDuplicateStrategy']
async function Cm(e, t) {
  const r = { tag: e, props: {} }
  return e === 'title' || e === 'titleTemplate'
    ? ((r.children = t instanceof Promise ? await t : t), r)
    : ((r.props = await Rm({ ...t })),
      ['children', 'innerHtml', 'innerHTML'].forEach((n) => {
        typeof r.props[n] < 'u' &&
          ((r.children = r.props[n]),
          typeof r.children == 'object' &&
            (r.children = JSON.stringify(r.children)),
          delete r.props[n])
      }),
      Object.keys(r.props)
        .filter((n) => Tm.includes(n))
        .forEach((n) => {
          ;(r[n] = r.props[n]), delete r.props[n]
        }),
      typeof r.props.class == 'object' &&
        !Array.isArray(r.props.class) &&
        (r.props.class = Object.keys(r.props.class).filter(
          (n) => r.props.class[n]
        )),
      Array.isArray(r.props.class) && (r.props.class = r.props.class.join(' ')),
      r.props.content && Array.isArray(r.props.content)
        ? r.props.content.map((n, i) => {
            const o = { ...r, props: { ...r.props } }
            return (
              (o.props.content = n),
              (o.key = `${r.props.name || r.props.property}:${i}`),
              o
            )
          })
        : r)
}
async function Rm(e) {
  for (const t of Object.keys(e))
    e[t] instanceof Promise && (e[t] = await e[t]),
      String(e[t]) === 'true'
        ? (e[t] = '')
        : String(e[t]) === 'false' && delete e[t]
  return e
}
const Oc = (e) => {
    if (typeof e.tagPriority == 'number') return e.tagPriority
    switch (e.tagPriority) {
      case 'critical':
        return 2
      case 'high':
        return 9
      case 'low':
        return 12
    }
    switch (e.tag) {
      case 'base':
        return -1
      case 'title':
        return 1
      case 'meta':
        return e.props.charset
          ? -2
          : e.props['http-equiv'] === 'content-security-policy'
          ? 0
          : 10
      default:
        return 10
    }
  },
  Pm = (e, t) => Oc(e) - Oc(t),
  xm = ['base', 'title', 'titleTemplate', 'bodyAttrs', 'htmlAttrs']
function Am(e, t) {
  const { props: r, tag: n } = e
  if (xm.includes(n)) return n
  if (n === 'link' && r.rel === 'canonical') return 'canonical'
  if (r.charset) return 'charset'
  const i = ['id']
  n === 'meta' && i.push('name', 'property', 'http-equiv')
  for (const o of i)
    if (typeof r[o] < 'u') {
      const s = String(r[o])
      return t && !t(s) ? !1 : `${n}:${o}:${s}`
    }
  return !1
}
const kc = (e, t) =>
  e == null
    ? t || null
    : typeof e == 'function'
    ? e(t)
    : e.replace('%s', t ?? '')
function Im(e) {
  let t = e.findIndex((n) => n.tag === 'titleTemplate')
  const r = e.findIndex((n) => n.tag === 'title')
  if (r !== -1 && t !== -1) {
    const n = kc(e[t].children, e[r].children)
    n !== null ? (e[r].children = n || e[r].children) : delete e[r]
  } else if (t !== -1) {
    const n = kc(e[t].children)
    n !== null && ((e[t].children = n), (e[t].tag = 'title'), (t = -1))
  }
  return t !== -1 && delete e[t], e.filter(Boolean)
}
const Fm = (e) => {
    e = e || {}
    const t = e.dedupeKeys || ['hid', 'vmid', 'key']
    return {
      hooks: {
        'tag:normalise': function ({ tag: r }) {
          t.forEach((i) => {
            r.props[i] && ((r.key = r.props[i]), delete r.props[i])
          })
          const n = r.key ? `${r.tag}:${r.key}` : Am(r)
          n && (r._d = n)
        },
        'tags:resolve': function (r) {
          const n = {}
          r.tags.forEach((i) => {
            let o = i._d || i._p
            const s = n[o]
            if (s) {
              let a = i == null ? void 0 : i.tagDuplicateStrategy
              if (
                (!a &&
                  (i.tag === 'htmlAttrs' || i.tag === 'bodyAttrs') &&
                  (a = 'merge'),
                a === 'merge')
              ) {
                const u = s.props
                ;['class', 'style'].forEach((l) => {
                  i.props[l] &&
                    u[l] &&
                    (l === 'style' && !u[l].endsWith(';') && (u[l] += ';'),
                    (i.props[l] = `${u[l]} ${i.props[l]}`))
                }),
                  (n[o].props = { ...u, ...i.props })
                return
              } else i._e === s._e && (o = i._d = `${o}:${i._p}`)
              const c = Object.keys(i.props).length
              if (
                (c === 0 || (c === 1 && typeof i.props['data-h-key'] < 'u')) &&
                !i.children
              ) {
                delete n[o]
                return
              }
            }
            n[o] = i
          }),
            (r.tags = Object.values(n))
        },
      },
    }
  },
  Dm = () => ({
    hooks: {
      'tags:resolve': (e) => {
        const t = (r) => {
          var n
          return (n = e.tags.find((i) => i._d === r)) == null ? void 0 : n._p
        }
        for (const r of e.tags) {
          if (!r.tagPriority || typeof r.tagPriority == 'number') continue
          const n = [
            { prefix: 'before:', offset: -1 },
            { prefix: 'after:', offset: 1 },
          ]
          for (const { prefix: i, offset: o } of n)
            if (r.tagPriority.startsWith(i)) {
              const s = r.tagPriority.replace(i, ''),
                a = t(s)
              typeof a < 'u' && (r._p = a + o)
            }
        }
        e.tags.sort((r, n) => r._p - n._p).sort(Pm)
      },
    },
  }),
  Mm = () => ({
    hooks: {
      'tags:resolve': (e) => {
        e.tags = Im(e.tags)
      },
    },
  }),
  Nm = () => ({
    hooks: {
      'tag:normalise': function ({ tag: e }) {
        typeof e.props.body < 'u' &&
          ((e.tagPosition = 'bodyClose'), delete e.props.body)
      },
    },
  }),
  jm = typeof window < 'u',
  Lm = () => ({
    hooks: {
      'tag:normalise': (e) => {
        var i, o
        const { tag: t, entry: r } = e,
          n = typeof t.props._dynamic < 'u'
        !ff.includes(t.tag) ||
          !t.key ||
          ((t._hash = ua(JSON.stringify({ tag: t.tag, key: t.key }))),
          !(
            jm ||
            ((o = (i = df()) == null ? void 0 : i.resolvedOptions) != null &&
              o.document)
          ) &&
            (r._m === 'server' || n) &&
            (t.props[`data-h-${t._hash}`] = ''))
      },
      'tags:resolve': (e) => {
        e.tags = e.tags.map((t) => (delete t.props._dynamic, t))
      },
    },
  }),
  qm = (e) => ({
    hooks: {
      'entries:updated': function (t) {
        if (
          typeof (e == null ? void 0 : e.document) > 'u' &&
          typeof window > 'u'
        )
          return
        let r = e == null ? void 0 : e.delayFn
        !r && typeof requestAnimationFrame < 'u' && (r = requestAnimationFrame),
          Promise.resolve()
            .then(function () {
              return Om
            })
            .then(({ debouncedRenderDOMHead: n }) => {
              n(t, {
                document: (e == null ? void 0 : e.document) || window.document,
                delayFn: r,
              })
            })
      },
    },
  }),
  Bm = () => {
    const e = (t, r) => {
      const n = {},
        i = {}
      Object.entries(r.props).forEach(([s, a]) => {
        s.startsWith('on') && typeof a == 'function' ? (i[s] = a) : (n[s] = a)
      })
      let o
      return (
        t === 'dom' &&
          r.tag === 'script' &&
          typeof n.src == 'string' &&
          typeof i.onload < 'u' &&
          ((o = n.src), delete n.src),
        { props: n, eventHandlers: i, delayedSrc: o }
      )
    }
    return {
      hooks: {
        'ssr:render': function (t) {
          t.tags = t.tags.map((r) => ((r.props = e('ssr', r).props), r))
        },
        'dom:beforeRenderTag': function (t) {
          const { props: r, eventHandlers: n, delayedSrc: i } = e('dom', t.tag)
          Object.keys(n).length &&
            ((t.tag.props = r),
            (t.tag._eventHandlers = n),
            (t.tag._delayedSrc = i))
        },
        'dom:renderTag': function (t) {
          const r = t.$el
          if (!t.tag._eventHandlers || !r) return
          const n =
            t.tag.tag === 'bodyAttrs' && typeof window < 'u' ? window : r
          Object.entries(t.tag._eventHandlers).forEach(([i, o]) => {
            const s = `${t.tag._d || t.tag._p}:${i}`,
              a = i.slice(2).toLowerCase(),
              c = `data-h-${a}`
            if ((delete t.staleSideEffects[s], r.hasAttribute(c))) return
            const u = o
            r.setAttribute(c, ''),
              n.addEventListener(a, u),
              t.entry &&
                (t.entry._sde[s] = () => {
                  n.removeEventListener(a, u), r.removeAttribute(c)
                })
          }),
            t.tag._delayedSrc && r.setAttribute('src', t.tag._delayedSrc)
        },
      },
    }
  }
function $m(e) {
  return Array.isArray(e) ? e : [e]
}
const ff = ['base', 'meta', 'link', 'style', 'script', 'noscript']
let hf
const Hm = (e) => (hf = e),
  df = () => hf,
  Qm = 10
async function Um(e) {
  const t = []
  return (
    Object.entries(e.resolvedInput || e.input)
      .filter(([r, n]) => typeof n < 'u' && km.includes(r))
      .forEach(([r, n]) => {
        const i = $m(n)
        t.push(...i.map((o) => Cm(r, o)).flat())
      }),
    (await Promise.all(t))
      .flat()
      .map((r, n) => ((r._e = e._i), (r._p = (e._i << Qm) + n), r))
  )
}
const Vm = () => [Fm(), Dm(), Mm(), Lm(), Bm(), Nm()],
  Wm = (e = {}) => [
    qm({
      document: e == null ? void 0 : e.document,
      delayFn: e == null ? void 0 : e.domDelayFn,
    }),
  ]
function zm(e = {}) {
  const t = Km({
    ...e,
    plugins: [...Wm(e), ...((e == null ? void 0 : e.plugins) || [])],
  })
  return Hm(t), t
}
function Km(e = {}) {
  let t = [],
    r = {},
    n = 0
  const i = sf()
  e != null && e.hooks && i.addHooks(e.hooks),
    (e.plugins = [...Vm(), ...((e == null ? void 0 : e.plugins) || [])]),
    e.plugins.forEach((a) => a.hooks && i.addHooks(a.hooks))
  const o = () => i.callHook('entries:updated', s),
    s = {
      resolvedOptions: e,
      headEntries() {
        return t
      },
      get hooks() {
        return i
      },
      use(a) {
        a.hooks && i.addHooks(a.hooks)
      },
      push(a, c) {
        const u = { _i: n++, input: a, _sde: {} }
        return (
          c != null && c.mode && (u._m = c == null ? void 0 : c.mode),
          t.push(u),
          o(),
          {
            dispose() {
              t = t.filter((l) =>
                l._i !== u._i
                  ? !0
                  : ((r = { ...r, ...(l._sde || {}) }), (l._sde = {}), o(), !1)
              )
            },
            patch(l) {
              t = t.map(
                (h) => (h._i === u._i && ((u.input = h.input = l), o()), h)
              )
            },
          }
        )
      },
      async resolveTags() {
        const a = { tags: [], entries: [...t] }
        await i.callHook('entries:resolve', a)
        for (const c of a.entries)
          for (const u of await Um(c)) {
            const l = { tag: u, entry: c }
            await i.callHook('tag:normalise', l), a.tags.push(l.tag)
          }
        return await i.callHook('tags:resolve', a), a.tags
      },
      _elMap: {},
      _popSideEffectQueue() {
        const a = { ...r }
        return (r = {}), a
      },
    }
  return s.hooks.callHook('init', s), s
}
function Jm(e) {
  return typeof e == 'function' ? e() : Me(e)
}
function Ci(e, t = '') {
  if (e instanceof Promise) return e
  const r = Jm(e)
  if (!e || !r) return r
  if (Array.isArray(r)) return r.map((n) => Ci(n, t))
  if (typeof r == 'object') {
    let n = !1
    const i = Object.fromEntries(
      Object.entries(r).map(([o, s]) =>
        o === 'titleTemplate' || o.startsWith('on')
          ? [o, Me(s)]
          : ((typeof s == 'function' || Te(s)) && (n = !0), [o, Ci(s, o)])
      )
    )
    return n && ff.includes(String(t)) && (i._dynamic = !0), i
  }
  return r
}
const Ym = oa.startsWith('3'),
  Gm = typeof window < 'u',
  pf = 'usehead'
function la() {
  return (mt() && Ve(pf)) || df()
}
function Xm(e = {}) {
  const t = zm({
      ...e,
      domDelayFn: (n) => setTimeout(() => an(() => n()), 10),
      plugins: [Zm(), ...((e == null ? void 0 : e.plugins) || [])],
    }),
    r = {
      install(n) {
        Ym && ((n.config.globalProperties.$unhead = t), n.provide(pf, t))
      },
    }
  return (t.install = r.install), t
}
const Zm = () => ({
  hooks: {
    'entries:resolve': function (e) {
      for (const t of e.entries) t.resolvedInput = Ci(t.input)
    },
  },
})
function ev(e, t = {}) {
  const r = la(),
    n = ge({})
  Dd(() => {
    n.value = Ci(e)
  })
  const i = r.push(n.value, t)
  return (
    jt(n, (s) => i.patch(s)),
    mt() &&
      cr(() => {
        i.dispose()
      }),
    i
  )
}
function tv(e, t = {}) {
  return la().push(e, t)
}
function yf(e, t = {}) {
  var n
  const r = la()
  if (r) {
    const i = Gm || !!((n = r.resolvedOptions) != null && n.document)
    return (t.mode === 'server' && i) || (t.mode === 'client' && !i)
      ? void 0
      : i
      ? ev(e, t)
      : tv(e, t)
  }
}
const rv = ['script', 'style', 'noscript'],
  nv = ['base', 'meta', 'link', 'style', 'script', 'noscript'],
  iv = ['base', 'title', 'titleTemplate', 'bodyAttrs', 'htmlAttrs']
function ov(e, t) {
  const { props: r, tag: n } = e
  if (iv.includes(n)) return n
  if (n === 'link' && r.rel === 'canonical') return 'canonical'
  if (r.charset) return 'charset'
  const i = ['id']
  n === 'meta' && i.push('name', 'property', 'http-equiv')
  for (const o of i)
    if (typeof r[o] < 'u') {
      const s = String(r[o])
      return t && !t(s) ? !1 : `${n}:${o}:${s}`
    }
  return !1
}
const si = (e, t) => {
  const { tag: r, $el: n } = e
  n &&
    (Object.entries(r.props).forEach(([i, o]) => {
      o = String(o)
      const s = `attr:${i}`
      if (i === 'class') {
        if (!o) return
        for (const a of o.split(' ')) {
          const c = `${s}:${a}`
          t && t(e, c, () => n.classList.remove(a)),
            n.classList.contains(a) || n.classList.add(a)
        }
        return
      }
      t && !i.startsWith('data-h-') && t(e, s, () => n.removeAttribute(i)),
        n.getAttribute(i) !== o && n.setAttribute(i, o)
    }),
    rv.includes(r.tag) &&
      n.innerHTML !== (r.children || '') &&
      (n.innerHTML = r.children || ''))
}
function sv(e) {
  let t = 9
  for (let r = 0; r < e.length; ) t = Math.imul(t ^ e.charCodeAt(r++), 9 ** 9)
  return ((t ^ (t >>> 9)) + 65536).toString(16).substring(1, 8).toLowerCase()
}
async function mf(e, t = {}) {
  var l, h
  const r = { shouldRender: !0 }
  if ((await e.hooks.callHook('dom:beforeRender', r), !r.shouldRender)) return
  const n = t.document || window.document,
    i = e._popSideEffectQueue()
  e.headEntries()
    .map((f) => f._sde)
    .forEach((f) => {
      Object.entries(f).forEach(([d, p]) => {
        i[d] = p
      })
    })
  const o = async (f) => {
      const d = e.headEntries().find((b) => b._i === f._e),
        p = {
          renderId:
            f._d || sv(JSON.stringify({ ...f, _e: void 0, _p: void 0 })),
          $el: null,
          shouldRender: !0,
          tag: f,
          entry: d,
          staleSideEffects: i,
        }
      return await e.hooks.callHook('dom:beforeRenderTag', p), p
    },
    s = [],
    a = { body: [], head: [] },
    c = (f, d, p) => {
      ;(d = `${f.renderId}:${d}`), f.entry && (f.entry._sde[d] = p), delete i[d]
    },
    u = (f) => {
      ;(e._elMap[f.renderId] = f.$el),
        s.push(f),
        c(f, 'el', () => {
          var d
          ;(d = f.$el) == null || d.remove(), delete e._elMap[f.renderId]
        })
    }
  for (const f of await e.resolveTags()) {
    const d = await o(f)
    if (!d.shouldRender) continue
    const { tag: p } = d
    if (p.tag === 'title') {
      ;(n.title = p.children || ''), s.push(d)
      continue
    }
    if (p.tag === 'htmlAttrs' || p.tag === 'bodyAttrs') {
      ;(d.$el = n[p.tag === 'htmlAttrs' ? 'documentElement' : 'body']),
        si(d, c),
        s.push(d)
      continue
    }
    if (
      ((d.$el = e._elMap[d.renderId]),
      !d.$el &&
        p._hash &&
        (d.$el = n.querySelector(
          `${
            (l = p.tagPosition) != null && l.startsWith('body')
              ? 'body'
              : 'head'
          } > ${p.tag}[data-h-${p._hash}]`
        )),
      d.$el)
    ) {
      d.tag._d && si(d), u(d)
      continue
    }
    ;(d.$el = n.createElement(p.tag)),
      si(d),
      a[
        (h = p.tagPosition) != null && h.startsWith('body') ? 'body' : 'head'
      ].push(d)
  }
  Object.entries(a).forEach(([f, d]) => {
    var b
    if (!d.length) return
    const p = (b = n == null ? void 0 : n[f]) == null ? void 0 : b.children
    if (p) {
      for (const w of [...p].reverse()) {
        const v = w.tagName.toLowerCase()
        if (!nv.includes(v)) continue
        const y = ov({
            tag: v,
            props: w
              .getAttributeNames()
              .reduce((E, S) => ({ ...E, [S]: w.getAttribute(S) }), {}),
          }),
          g = d.findIndex((E) => {
            var S
            return (
              E &&
              (E.tag._d === y ||
                ((S = w.isEqualNode) == null ? void 0 : S.call(w, E.$el)))
            )
          })
        if (g !== -1) {
          const E = d[g]
          ;(E.$el = w), si(E), u(E), delete d[g]
        }
      }
      d.forEach((w) => {
        if (w.$el) {
          switch (w.tag.tagPosition) {
            case 'bodyClose':
              n.body.appendChild(w.$el)
              break
            case 'bodyOpen':
              n.body.insertBefore(w.$el, n.body.firstChild)
              break
            case 'head':
            default:
              n.head.appendChild(w.$el)
              break
          }
          u(w)
        }
      })
    }
  })
  for (const f of s) await e.hooks.callHook('dom:renderTag', f)
  Object.values(i).forEach((f) => f())
}
let go = null
async function av(e, t = {}) {
  function r() {
    return (go = null), mf(e, t)
  }
  const n = t.delayFn || ((i) => setTimeout(i, 10))
  return (go = go || new Promise((i) => n(() => i(r()))))
}
function cv(e) {
  const t = Xm(),
    r = {
      unhead: t,
      install(n) {
        oa.startsWith('3') &&
          ((n.config.globalProperties.$head = t), n.provide('usehead', t))
      },
      use(n) {
        t.use(n)
      },
      resolveTags() {
        return t.resolveTags()
      },
      headEntries() {
        return t.headEntries()
      },
      headTags() {
        return t.resolveTags()
      },
      push(n, i) {
        return t.push(n, i)
      },
      addEntry(n, i) {
        return t.push(n, i)
      },
      addHeadObjs(n, i) {
        return t.push(n, i)
      },
      addReactiveEntry(n, i) {
        const o = yf(n, i)
        return typeof o < 'u' ? o.dispose : () => {}
      },
      removeHeadObjs() {},
      updateDOM(n, i) {
        i
          ? mf(t, { document: n })
          : av(t, { delayFn: (o) => setTimeout(() => o(), 50), document: n })
      },
      internalHooks: t.hooks,
      hooks: { 'before:dom': [], 'resolved:tags': [], 'resolved:entries': [] },
    }
  return (
    (t.addHeadObjs = r.addHeadObjs),
    (t.updateDOM = r.updateDOM),
    t.hooks.hook('dom:beforeRender', (n) => {
      for (const i of r.hooks['before:dom']) i() === !1 && (n.shouldRender = !1)
    }),
    e && r.addHeadObjs(e),
    r
  )
}
function vf(e, t) {
  return xe()._useHead(e, t)
}
const uv = {
  ignoreUnknown: !1,
  respectType: !1,
  respectFunctionNames: !1,
  respectFunctionProperties: !1,
  unorderedObjects: !0,
  unorderedArrays: !1,
  unorderedSets: !1,
}
function lv(e, t = {}) {
  t = { ...uv, ...t }
  const r = gf(t)
  return r.dispatch(e), r.toString()
}
function gf(e) {
  const t = []
  let r = []
  const n = (i) => {
    t.push(i)
  }
  return {
    toString() {
      return t.join('')
    },
    getContext() {
      return r
    },
    dispatch(i) {
      return (
        e.replacer && (i = e.replacer(i)),
        this['_' + (i === null ? 'null' : typeof i)](i)
      )
    },
    _object(i) {
      const o = /\[object (.*)]/i,
        s = Object.prototype.toString.call(i),
        a = o.exec(s),
        c = a ? a[1].toLowerCase() : 'unknown:[' + s.toLowerCase() + ']'
      let u = null
      if ((u = r.indexOf(i)) >= 0) return this.dispatch('[CIRCULAR:' + u + ']')
      if (
        (r.push(i),
        typeof Buffer < 'u' && Buffer.isBuffer && Buffer.isBuffer(i))
      )
        return n('buffer:'), n(i.toString('utf8'))
      if (c !== 'object' && c !== 'function' && c !== 'asyncfunction')
        if (this['_' + c]) this['_' + c](i)
        else {
          if (e.ignoreUnknown) return n('[' + c + ']')
          throw new Error('Unknown object type "' + c + '"')
        }
      else {
        let l = Object.keys(i)
        e.unorderedObjects && (l = l.sort()),
          e.respectType !== !1 &&
            !Tc(i) &&
            l.splice(0, 0, 'prototype', '__proto__', 'letructor'),
          e.excludeKeys &&
            (l = l.filter(function (h) {
              return !e.excludeKeys(h)
            })),
          n('object:' + l.length + ':')
        for (const h of l)
          this.dispatch(h),
            n(':'),
            e.excludeValues || this.dispatch(i[h]),
            n(',')
      }
    },
    _array(i, o) {
      if (
        ((o = typeof o < 'u' ? o : e.unorderedArrays !== !1),
        n('array:' + i.length + ':'),
        !o || i.length <= 1)
      ) {
        for (const c of i) this.dispatch(c)
        return
      }
      const s = [],
        a = i.map((c) => {
          const u = gf(e)
          return u.dispatch(c), s.push(u.getContext()), u.toString()
        })
      return (r = [...r, ...s]), a.sort(), this._array(a, !1)
    },
    _date(i) {
      return n('date:' + i.toJSON())
    },
    _symbol(i) {
      return n('symbol:' + i.toString())
    },
    _error(i) {
      return n('error:' + i.toString())
    },
    _boolean(i) {
      return n('bool:' + i.toString())
    },
    _string(i) {
      n('string:' + i.length + ':'), n(i.toString())
    },
    _function(i) {
      n('fn:'),
        Tc(i) ? this.dispatch('[native]') : this.dispatch(i.toString()),
        e.respectFunctionNames !== !1 &&
          this.dispatch('function-name:' + String(i.name)),
        e.respectFunctionProperties && this._object(i)
    },
    _number(i) {
      return n('number:' + i.toString())
    },
    _xml(i) {
      return n('xml:' + i.toString())
    },
    _null() {
      return n('Null')
    },
    _undefined() {
      return n('Undefined')
    },
    _regexp(i) {
      return n('regex:' + i.toString())
    },
    _uint8array(i) {
      return n('uint8array:'), this.dispatch(Array.prototype.slice.call(i))
    },
    _uint8clampedarray(i) {
      return (
        n('uint8clampedarray:'), this.dispatch(Array.prototype.slice.call(i))
      )
    },
    _int8array(i) {
      return n('int8array:'), this.dispatch(Array.prototype.slice.call(i))
    },
    _uint16array(i) {
      return n('uint16array:'), this.dispatch(Array.prototype.slice.call(i))
    },
    _int16array(i) {
      return n('int16array:'), this.dispatch(Array.prototype.slice.call(i))
    },
    _uint32array(i) {
      return n('uint32array:'), this.dispatch(Array.prototype.slice.call(i))
    },
    _int32array(i) {
      return n('int32array:'), this.dispatch(Array.prototype.slice.call(i))
    },
    _float32array(i) {
      return n('float32array:'), this.dispatch(Array.prototype.slice.call(i))
    },
    _float64array(i) {
      return n('float64array:'), this.dispatch(Array.prototype.slice.call(i))
    },
    _arraybuffer(i) {
      return n('arraybuffer:'), this.dispatch(new Uint8Array(i))
    },
    _url(i) {
      return n('url:' + i.toString())
    },
    _map(i) {
      n('map:')
      const o = [...i]
      return this._array(o, e.unorderedSets !== !1)
    },
    _set(i) {
      n('set:')
      const o = [...i]
      return this._array(o, e.unorderedSets !== !1)
    },
    _file(i) {
      return n('file:'), this.dispatch([i.name, i.size, i.type, i.lastModfied])
    },
    _blob() {
      if (e.ignoreUnknown) return n('[blob]')
      throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)
    },
    _domwindow() {
      return n('domwindow')
    },
    _bigint(i) {
      return n('bigint:' + i.toString())
    },
    _process() {
      return n('process')
    },
    _timer() {
      return n('timer')
    },
    _pipe() {
      return n('pipe')
    },
    _tcp() {
      return n('tcp')
    },
    _udp() {
      return n('udp')
    },
    _tty() {
      return n('tty')
    },
    _statwatcher() {
      return n('statwatcher')
    },
    _securecontext() {
      return n('securecontext')
    },
    _connection() {
      return n('connection')
    },
    _zlib() {
      return n('zlib')
    },
    _context() {
      return n('context')
    },
    _nodescript() {
      return n('nodescript')
    },
    _httpparser() {
      return n('httpparser')
    },
    _dataview() {
      return n('dataview')
    },
    _signal() {
      return n('signal')
    },
    _fsevent() {
      return n('fsevent')
    },
    _tlswrap() {
      return n('tlswrap')
    },
  }
}
function Tc(e) {
  return typeof e != 'function'
    ? !1
    : /^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(
        Function.prototype.toString.call(e)
      ) != null
}
class Kr {
  constructor(t, r) {
    ;(t = this.words = t || []),
      (this.sigBytes = r !== void 0 ? r : t.length * 4)
  }
  toString(t) {
    return (t || fv).stringify(this)
  }
  concat(t) {
    if ((this.clamp(), this.sigBytes % 4))
      for (let r = 0; r < t.sigBytes; r++) {
        const n = (t.words[r >>> 2] >>> (24 - (r % 4) * 8)) & 255
        this.words[(this.sigBytes + r) >>> 2] |=
          n << (24 - ((this.sigBytes + r) % 4) * 8)
      }
    else
      for (let r = 0; r < t.sigBytes; r += 4)
        this.words[(this.sigBytes + r) >>> 2] = t.words[r >>> 2]
    return (this.sigBytes += t.sigBytes), this
  }
  clamp() {
    ;(this.words[this.sigBytes >>> 2] &=
      4294967295 << (32 - (this.sigBytes % 4) * 8)),
      (this.words.length = Math.ceil(this.sigBytes / 4))
  }
  clone() {
    return new Kr([...this.words])
  }
}
const fv = {
    stringify(e) {
      const t = []
      for (let r = 0; r < e.sigBytes; r++) {
        const n = (e.words[r >>> 2] >>> (24 - (r % 4) * 8)) & 255
        t.push((n >>> 4).toString(16), (n & 15).toString(16))
      }
      return t.join('')
    },
  },
  hv = {
    stringify(e) {
      const t =
          'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
        r = []
      for (let n = 0; n < e.sigBytes; n += 3) {
        const i = (e.words[n >>> 2] >>> (24 - (n % 4) * 8)) & 255,
          o = (e.words[(n + 1) >>> 2] >>> (24 - ((n + 1) % 4) * 8)) & 255,
          s = (e.words[(n + 2) >>> 2] >>> (24 - ((n + 2) % 4) * 8)) & 255,
          a = (i << 16) | (o << 8) | s
        for (let c = 0; c < 4 && n * 8 + c * 6 < e.sigBytes * 8; c++)
          r.push(t.charAt((a >>> (6 * (3 - c))) & 63))
      }
      return r.join('')
    },
  },
  dv = {
    parse(e) {
      const t = e.length,
        r = []
      for (let n = 0; n < t; n++)
        r[n >>> 2] |= (e.charCodeAt(n) & 255) << (24 - (n % 4) * 8)
      return new Kr(r, t)
    },
  },
  pv = {
    parse(e) {
      return dv.parse(unescape(encodeURIComponent(e)))
    },
  }
class yv {
  constructor() {
    ;(this._minBufferSize = 0), (this.blockSize = 512 / 32), this.reset()
  }
  reset() {
    ;(this._data = new Kr()), (this._nDataBytes = 0)
  }
  _append(t) {
    typeof t == 'string' && (t = pv.parse(t)),
      this._data.concat(t),
      (this._nDataBytes += t.sigBytes)
  }
  _doProcessBlock(t, r) {}
  _process(t) {
    let r,
      n = this._data.sigBytes / (this.blockSize * 4)
    t ? (n = Math.ceil(n)) : (n = Math.max((n | 0) - this._minBufferSize, 0))
    const i = n * this.blockSize,
      o = Math.min(i * 4, this._data.sigBytes)
    if (i) {
      for (let s = 0; s < i; s += this.blockSize)
        this._doProcessBlock(this._data.words, s)
      ;(r = this._data.words.splice(0, i)), (this._data.sigBytes -= o)
    }
    return new Kr(r, o)
  }
}
class mv extends yv {
  update(t) {
    return this._append(t), this._process(), this
  }
  finalize(t) {
    t && this._append(t)
  }
}
const vv = [
    1779033703, -1150833019, 1013904242, -1521486534, 1359893119, -1694144372,
    528734635, 1541459225,
  ],
  gv = [
    1116352408, 1899447441, -1245643825, -373957723, 961987163, 1508970993,
    -1841331548, -1424204075, -670586216, 310598401, 607225278, 1426881987,
    1925078388, -2132889090, -1680079193, -1046744716, -459576895, -272742522,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    -1740746414, -1473132947, -1341970488, -1084653625, -958395405, -710438585,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, -2117940946, -1838011259, -1564481375, -1474664885,
    -1035236496, -949202525, -778901479, -694614492, -200395387, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, -2067236844, -1933114872,
    -1866530822, -1538233109, -1090935817, -965641998,
  ],
  dr = []
class bv extends mv {
  constructor() {
    super(), this.reset()
  }
  reset() {
    super.reset(), (this._hash = new Kr([...vv]))
  }
  _doProcessBlock(t, r) {
    const n = this._hash.words
    let i = n[0],
      o = n[1],
      s = n[2],
      a = n[3],
      c = n[4],
      u = n[5],
      l = n[6],
      h = n[7]
    for (let f = 0; f < 64; f++) {
      if (f < 16) dr[f] = t[r + f] | 0
      else {
        const g = dr[f - 15],
          E = ((g << 25) | (g >>> 7)) ^ ((g << 14) | (g >>> 18)) ^ (g >>> 3),
          S = dr[f - 2],
          C = ((S << 15) | (S >>> 17)) ^ ((S << 13) | (S >>> 19)) ^ (S >>> 10)
        dr[f] = E + dr[f - 7] + C + dr[f - 16]
      }
      const d = (c & u) ^ (~c & l),
        p = (i & o) ^ (i & s) ^ (o & s),
        b =
          ((i << 30) | (i >>> 2)) ^
          ((i << 19) | (i >>> 13)) ^
          ((i << 10) | (i >>> 22)),
        w =
          ((c << 26) | (c >>> 6)) ^
          ((c << 21) | (c >>> 11)) ^
          ((c << 7) | (c >>> 25)),
        v = h + w + d + gv[f] + dr[f],
        y = b + p
      ;(h = l),
        (l = u),
        (u = c),
        (c = (a + v) | 0),
        (a = s),
        (s = o),
        (o = i),
        (i = (v + y) | 0)
    }
    ;(n[0] = (n[0] + i) | 0),
      (n[1] = (n[1] + o) | 0),
      (n[2] = (n[2] + s) | 0),
      (n[3] = (n[3] + a) | 0),
      (n[4] = (n[4] + c) | 0),
      (n[5] = (n[5] + u) | 0),
      (n[6] = (n[6] + l) | 0),
      (n[7] = (n[7] + h) | 0)
  }
  finalize(t) {
    super.finalize(t)
    const r = this._nDataBytes * 8,
      n = this._data.sigBytes * 8
    return (
      (this._data.words[n >>> 5] |= 128 << (24 - (n % 32))),
      (this._data.words[(((n + 64) >>> 9) << 4) + 14] = Math.floor(
        r / 4294967296
      )),
      (this._data.words[(((n + 64) >>> 9) << 4) + 15] = r),
      (this._data.sigBytes = this._data.words.length * 4),
      this._process(),
      this._hash
    )
  }
}
function wv(e) {
  return new bv().finalize(e).toString(hv)
}
function Ev(e, t = {}) {
  const r = typeof e == 'string' ? e : lv(e, t)
  return wv(r).slice(0, 10)
}
const _v = {
  path: '/',
  watch: !0,
  decode: (e) => sa(decodeURIComponent(e)),
  encode: (e) =>
    encodeURIComponent(typeof e == 'string' ? e : JSON.stringify(e)),
}
function Ri(e, t) {
  var o
  const r = { ..._v, ...t },
    n = Sv(r) || {},
    i = ge(n[e] ?? ((o = r.default) == null ? void 0 : o.call(r)))
  {
    const s = () => {
      kv(e, i.value, r)
    }
    r.watch ? jt(i, s, { deep: r.watch !== 'shallow' }) : s()
  }
  return i
}
function Sv(e = {}) {
  return am(document.cookie, e)
}
function Ov(e, t, r = {}) {
  return t == null ? Sc(e, t, { ...r, maxAge: -1 }) : Sc(e, t, r)
}
function kv(e, t, r = {}) {
  document.cookie = Ov(e, t, r)
}
const ss =
    globalThis.requestIdleCallback ||
    ((e) => {
      const t = Date.now(),
        r = {
          didTimeout: !1,
          timeRemaining: () => Math.max(0, 50 - (Date.now() - t)),
        }
      return setTimeout(() => {
        e(r)
      }, 1)
    }),
  Tv =
    globalThis.cancelIdleCallback ||
    ((e) => {
      clearTimeout(e)
    }),
  Cv = (e) => {
    const t = xe()
    t.isHydrating
      ? t.hooks.hookOnce('app:suspense:resolve', () => {
          ss(e)
        })
      : ss(e)
  }
async function bf(e, t = Ki()) {
  if (
    (t._routePreloaded || (t._routePreloaded = new Set()),
    t._routePreloaded.has(e))
  )
    return
  t._routePreloaded.add(e)
  const r = (t._preloadPromises = t._preloadPromises || [])
  if (r.length > 4) return Promise.all(r).then(() => bf(e, t))
  const n = t
    .resolve(e)
    .matched.map((i) => {
      var o
      return (o = i.components) == null ? void 0 : o.default
    })
    .filter((i) => typeof i == 'function')
  for (const i of n) {
    const o = Promise.resolve(i())
      .catch(() => {})
      .finally(() => r.splice(r.indexOf(o)))
    r.push(o)
  }
  await Promise.all(r)
}
const Rv = 'modulepreload',
  Pv = function (e, t) {
    return e.startsWith('.') ? new URL(e, t).href : e
  },
  Cc = {},
  Mt = function (t, r, n) {
    if (!r || r.length === 0) return t()
    const i = document.getElementsByTagName('link')
    return Promise.all(
      r.map((o) => {
        if (((o = Pv(o, n)), o in Cc)) return
        Cc[o] = !0
        const s = o.endsWith('.css'),
          a = s ? '[rel="stylesheet"]' : ''
        if (!!n)
          for (let l = i.length - 1; l >= 0; l--) {
            const h = i[l]
            if (h.href === o && (!s || h.rel === 'stylesheet')) return
          }
        else if (document.querySelector(`link[href="${o}"]${a}`)) return
        const u = document.createElement('link')
        if (
          ((u.rel = s ? 'stylesheet' : Rv),
          s || ((u.as = 'script'), (u.crossOrigin = '')),
          (u.href = o),
          document.head.appendChild(u),
          s)
        )
          return new Promise((l, h) => {
            u.addEventListener('load', l),
              u.addEventListener('error', () =>
                h(new Error(`Unable to preload CSS for ${o}`))
              )
          })
      })
    ).then(() => t())
  },
  xv = (...e) => e.find((t) => t !== void 0),
  Av = 'noopener noreferrer'
function Iv(e) {
  const t = e.componentName || 'NuxtLink'
  return Fe({
    name: t,
    props: {
      to: { type: [String, Object], default: void 0, required: !1 },
      href: { type: [String, Object], default: void 0, required: !1 },
      target: { type: String, default: void 0, required: !1 },
      rel: { type: String, default: void 0, required: !1 },
      noRel: { type: Boolean, default: void 0, required: !1 },
      prefetch: { type: Boolean, default: void 0, required: !1 },
      noPrefetch: { type: Boolean, default: void 0, required: !1 },
      activeClass: { type: String, default: void 0, required: !1 },
      exactActiveClass: { type: String, default: void 0, required: !1 },
      prefetchedClass: { type: String, default: void 0, required: !1 },
      replace: { type: Boolean, default: void 0, required: !1 },
      ariaCurrentValue: { type: String, default: void 0, required: !1 },
      external: { type: Boolean, default: void 0, required: !1 },
      custom: { type: Boolean, default: void 0, required: !1 },
    },
    setup(r, { slots: n }) {
      const i = Ki(),
        o = Ne(() => r.to || r.href || ''),
        s = Ne(() =>
          r.external || (r.target && r.target !== '_self')
            ? !0
            : typeof o.value == 'object'
            ? !1
            : o.value === '' || Wn(o.value, !0)
        ),
        a = ge(!1),
        c = ge(null)
      if (
        r.prefetch !== !1 &&
        r.noPrefetch !== !0 &&
        typeof o.value == 'string' &&
        r.target !== '_blank' &&
        !Dv()
      ) {
        const l = xe()
        let h,
          f = null
        Ui(() => {
          const d = Fv()
          Cv(() => {
            h = ss(() => {
              var p
              ;(p = c == null ? void 0 : c.value) != null &&
                p.tagName &&
                (f = d.observe(c.value, async () => {
                  f == null || f(),
                    (f = null),
                    await Promise.all([
                      l.hooks
                        .callHook('link:prefetch', o.value)
                        .catch(() => {}),
                      !s.value && bf(o.value, i).catch(() => {}),
                    ]),
                    (a.value = !0)
                }))
            })
          })
        }),
          cr(() => {
            h && Tv(h), f == null || f(), (f = null)
          })
      }
      return () => {
        var d, p
        if (!s.value)
          return Ge(
            Kd('RouterLink'),
            {
              ref: (b) => {
                c.value = b == null ? void 0 : b.$el
              },
              to: o.value,
              ...(a.value && !r.custom
                ? { class: r.prefetchedClass || e.prefetchedClass }
                : {}),
              activeClass: r.activeClass || e.activeClass,
              exactActiveClass: r.exactActiveClass || e.exactActiveClass,
              replace: r.replace,
              ariaCurrentValue: r.ariaCurrentValue,
              custom: r.custom,
            },
            n.default
          )
        const u =
            typeof o.value == 'object'
              ? ((d = i.resolve(o.value)) == null ? void 0 : d.href) ?? null
              : o.value || null,
          l = r.target || null,
          h = r.noRel
            ? null
            : xv(r.rel, e.externalRelAttribute, u ? Av : '') || null,
          f = () => gm(u, { replace: r.replace })
        return r.custom
          ? n.default
            ? n.default({
                href: u,
                navigate: f,
                route: i.resolve(u),
                rel: h,
                target: l,
                isExternal: s.value,
                isActive: !1,
                isExactActive: !1,
              })
            : null
          : Ge(
              'a',
              { ref: c, href: u, rel: h, target: l },
              (p = n.default) == null ? void 0 : p.call(n)
            )
      }
    },
  })
}
const PE = Iv({ componentName: 'NuxtLink' })
function Fv() {
  const e = xe()
  if (e._observer) return e._observer
  let t = null
  const r = new Map(),
    n = (o, s) => (
      t ||
        (t = new IntersectionObserver((a) => {
          for (const c of a) {
            const u = r.get(c.target)
            ;(c.isIntersecting || c.intersectionRatio > 0) && u && u()
          }
        })),
      r.set(o, s),
      t.observe(o),
      () => {
        r.delete(o),
          t.unobserve(o),
          r.size === 0 && (t.disconnect(), (t = null))
      }
    )
  return (e._observer = { observe: n })
}
function Dv() {
  const e = navigator.connection
  return !!(e && (e.saveData || /2g/.test(e.effectiveType)))
}
function bo(e) {
  return e !== null && typeof e == 'object'
}
function as(e, t, r = '.', n) {
  if (!bo(t)) return as(e, {}, r, n)
  const i = Object.assign({}, t)
  for (const o in e) {
    if (o === '__proto__' || o === 'constructor') continue
    const s = e[o]
    s != null &&
      ((n && n(i, o, s, r)) ||
        (Array.isArray(s) && Array.isArray(i[o])
          ? (i[o] = [...s, ...i[o]])
          : bo(s) && bo(i[o])
          ? (i[o] = as(s, i[o], (r ? `${r}.` : '') + o.toString(), n))
          : (i[o] = s)))
  }
  return i
}
function wf(e) {
  return (...t) => t.reduce((r, n) => as(r, n, '', e), {})
}
const Mv = wf(),
  Nv = wf((e, t, r, n) => {
    if (typeof e[t] < 'u' && typeof r == 'function') return (e[t] = r(e[t])), !0
  }),
  jv = {}
Nv(jv)
const Lv = !1
/*!
 * pinia v2.0.29
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */ const qv = Symbol()
var Rc
;(function (e) {
  ;(e.direct = 'direct'),
    (e.patchObject = 'patch object'),
    (e.patchFunction = 'patch function')
})(Rc || (Rc = {}))
function Bv() {
  const e = $h(!0),
    t = e.run(() => ge({}))
  let r = [],
    n = []
  const i = Js({
    install(o) {
      ;(i._a = o),
        o.provide(qv, i),
        (o.config.globalProperties.$pinia = i),
        n.forEach((s) => r.push(s)),
        (n = [])
    },
    use(o) {
      return !this._a && !Lv ? n.push(o) : r.push(o), this
    },
    _p: r,
    _a: null,
    _e: e,
    _s: new Map(),
    state: t,
  })
  return i
}
const $v = Or((e) => {
    const t = Bv()
    return (
      e.vueApp.use(t),
      e.payload && e.payload.pinia && (t.state.value = e.payload.pinia),
      { provide: { pinia: t } }
    )
  }),
  wo = {},
  Hv = Or((e) => {
    for (const t in wo)
      e.vueApp.component(t, wo[t]), e.vueApp.component('Lazy' + t, wo[t])
  }),
  Qv = {
    meta: [
      { name: 'viewport', content: 'width=500, initial-scale=1' },
      { charset: 'utf-16' },
      { name: 'description', content: 'Nuxt 3 - Woocommerce' },
    ],
    link: [],
    style: [],
    script: [],
    noscript: [],
    charset: 'utf-16',
    viewport: 'width=500, initial-scale=1',
  },
  Uv = !1,
  cs = !1,
  Vv = !1,
  Wv = '__nuxt',
  zv = Or((e) => {
    const t = cv()
    t.push(Qv), e.vueApp.use(t)
    {
      let r = !0
      const n = () => {
        ;(r = !1), t.internalHooks.callHook('entries:updated', t.unhead)
      }
      t.internalHooks.hook('dom:beforeRender', (i) => {
        i.shouldRender = !r
      }),
        e.hooks.hook('page:start', () => {
          r = !0
        }),
        e.hooks.hook('page:finish', n),
        e.hooks.hook('app:mounted', n)
    }
    e._useHead = yf
  })
/*!
 * vue-router v4.1.6
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */ const Pr = typeof window < 'u'
function Kv(e) {
  return e.__esModule || e[Symbol.toStringTag] === 'Module'
}
const le = Object.assign
function Eo(e, t) {
  const r = {}
  for (const n in t) {
    const i = t[n]
    r[n] = St(i) ? i.map(e) : e(i)
  }
  return r
}
const Tn = () => {},
  St = Array.isArray,
  Jv = /\/$/,
  Yv = (e) => e.replace(Jv, '')
function _o(e, t, r = '/') {
  let n,
    i = {},
    o = '',
    s = ''
  const a = t.indexOf('#')
  let c = t.indexOf('?')
  return (
    a < c && a >= 0 && (c = -1),
    c > -1 &&
      ((n = t.slice(0, c)),
      (o = t.slice(c + 1, a > -1 ? a : t.length)),
      (i = e(o))),
    a > -1 && ((n = n || t.slice(0, a)), (s = t.slice(a, t.length))),
    (n = eg(n ?? t, r)),
    { fullPath: n + (o && '?') + o + s, path: n, query: i, hash: s }
  )
}
function Gv(e, t) {
  const r = t.query ? e(t.query) : ''
  return t.path + (r && '?') + r + (t.hash || '')
}
function Pc(e, t) {
  return !t || !e.toLowerCase().startsWith(t.toLowerCase())
    ? e
    : e.slice(t.length) || '/'
}
function Xv(e, t, r) {
  const n = t.matched.length - 1,
    i = r.matched.length - 1
  return (
    n > -1 &&
    n === i &&
    Jr(t.matched[n], r.matched[i]) &&
    Ef(t.params, r.params) &&
    e(t.query) === e(r.query) &&
    t.hash === r.hash
  )
}
function Jr(e, t) {
  return (e.aliasOf || e) === (t.aliasOf || t)
}
function Ef(e, t) {
  if (Object.keys(e).length !== Object.keys(t).length) return !1
  for (const r in e) if (!Zv(e[r], t[r])) return !1
  return !0
}
function Zv(e, t) {
  return St(e) ? xc(e, t) : St(t) ? xc(t, e) : e === t
}
function xc(e, t) {
  return St(t)
    ? e.length === t.length && e.every((r, n) => r === t[n])
    : e.length === 1 && e[0] === t
}
function eg(e, t) {
  if (e.startsWith('/')) return e
  if (!e) return t
  const r = t.split('/'),
    n = e.split('/')
  let i = r.length - 1,
    o,
    s
  for (o = 0; o < n.length; o++)
    if (((s = n[o]), s !== '.'))
      if (s === '..') i > 1 && i--
      else break
  return (
    r.slice(0, i).join('/') +
    '/' +
    n.slice(o - (o === n.length ? 1 : 0)).join('/')
  )
}
var Ln
;(function (e) {
  ;(e.pop = 'pop'), (e.push = 'push')
})(Ln || (Ln = {}))
var Cn
;(function (e) {
  ;(e.back = 'back'), (e.forward = 'forward'), (e.unknown = '')
})(Cn || (Cn = {}))
function tg(e) {
  if (!e)
    if (Pr) {
      const t = document.querySelector('base')
      ;(e = (t && t.getAttribute('href')) || '/'),
        (e = e.replace(/^\w+:\/\/[^\/]+/, ''))
    } else e = '/'
  return e[0] !== '/' && e[0] !== '#' && (e = '/' + e), Yv(e)
}
const rg = /^[^#]+#/
function ng(e, t) {
  return e.replace(rg, '#') + t
}
function ig(e, t) {
  const r = document.documentElement.getBoundingClientRect(),
    n = e.getBoundingClientRect()
  return {
    behavior: t.behavior,
    left: n.left - r.left - (t.left || 0),
    top: n.top - r.top - (t.top || 0),
  }
}
const Ji = () => ({ left: window.pageXOffset, top: window.pageYOffset })
function og(e) {
  let t
  if ('el' in e) {
    const r = e.el,
      n = typeof r == 'string' && r.startsWith('#'),
      i =
        typeof r == 'string'
          ? n
            ? document.getElementById(r.slice(1))
            : document.querySelector(r)
          : r
    if (!i) return
    t = ig(i, e)
  } else t = e
  'scrollBehavior' in document.documentElement.style
    ? window.scrollTo(t)
    : window.scrollTo(
        t.left != null ? t.left : window.pageXOffset,
        t.top != null ? t.top : window.pageYOffset
      )
}
function Ac(e, t) {
  return (history.state ? history.state.position - t : -1) + e
}
const us = new Map()
function sg(e, t) {
  us.set(e, t)
}
function ag(e) {
  const t = us.get(e)
  return us.delete(e), t
}
let cg = () => location.protocol + '//' + location.host
function _f(e, t) {
  const { pathname: r, search: n, hash: i } = t,
    o = e.indexOf('#')
  if (o > -1) {
    let a = i.includes(e.slice(o)) ? e.slice(o).length : 1,
      c = i.slice(a)
    return c[0] !== '/' && (c = '/' + c), Pc(c, '')
  }
  return Pc(r, e) + n + i
}
function ug(e, t, r, n) {
  let i = [],
    o = [],
    s = null
  const a = ({ state: f }) => {
    const d = _f(e, location),
      p = r.value,
      b = t.value
    let w = 0
    if (f) {
      if (((r.value = d), (t.value = f), s && s === p)) {
        s = null
        return
      }
      w = b ? f.position - b.position : 0
    } else n(d)
    i.forEach((v) => {
      v(r.value, p, {
        delta: w,
        type: Ln.pop,
        direction: w ? (w > 0 ? Cn.forward : Cn.back) : Cn.unknown,
      })
    })
  }
  function c() {
    s = r.value
  }
  function u(f) {
    i.push(f)
    const d = () => {
      const p = i.indexOf(f)
      p > -1 && i.splice(p, 1)
    }
    return o.push(d), d
  }
  function l() {
    const { history: f } = window
    f.state && f.replaceState(le({}, f.state, { scroll: Ji() }), '')
  }
  function h() {
    for (const f of o) f()
    ;(o = []),
      window.removeEventListener('popstate', a),
      window.removeEventListener('beforeunload', l)
  }
  return (
    window.addEventListener('popstate', a),
    window.addEventListener('beforeunload', l),
    { pauseListeners: c, listen: u, destroy: h }
  )
}
function Ic(e, t, r, n = !1, i = !1) {
  return {
    back: e,
    current: t,
    forward: r,
    replaced: n,
    position: window.history.length,
    scroll: i ? Ji() : null,
  }
}
function lg(e) {
  const { history: t, location: r } = window,
    n = { value: _f(e, r) },
    i = { value: t.state }
  i.value ||
    o(
      n.value,
      {
        back: null,
        current: n.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null,
      },
      !0
    )
  function o(c, u, l) {
    const h = e.indexOf('#'),
      f =
        h > -1
          ? (r.host && document.querySelector('base') ? e : e.slice(h)) + c
          : cg() + e + c
    try {
      t[l ? 'replaceState' : 'pushState'](u, '', f), (i.value = u)
    } catch (d) {
      console.error(d), r[l ? 'replace' : 'assign'](f)
    }
  }
  function s(c, u) {
    const l = le({}, t.state, Ic(i.value.back, c, i.value.forward, !0), u, {
      position: i.value.position,
    })
    o(c, l, !0), (n.value = c)
  }
  function a(c, u) {
    const l = le({}, i.value, t.state, { forward: c, scroll: Ji() })
    o(l.current, l, !0)
    const h = le({}, Ic(n.value, c, null), { position: l.position + 1 }, u)
    o(c, h, !1), (n.value = c)
  }
  return { location: n, state: i, push: a, replace: s }
}
function Sf(e) {
  e = tg(e)
  const t = lg(e),
    r = ug(e, t.state, t.location, t.replace)
  function n(o, s = !0) {
    s || r.pauseListeners(), history.go(o)
  }
  const i = le(
    { location: '', base: e, go: n, createHref: ng.bind(null, e) },
    t,
    r
  )
  return (
    Object.defineProperty(i, 'location', {
      enumerable: !0,
      get: () => t.location.value,
    }),
    Object.defineProperty(i, 'state', {
      enumerable: !0,
      get: () => t.state.value,
    }),
    i
  )
}
function fg(e) {
  return (
    (e = location.host ? e || location.pathname + location.search : ''),
    e.includes('#') || (e += '#'),
    Sf(e)
  )
}
function hg(e) {
  return typeof e == 'string' || (e && typeof e == 'object')
}
function Of(e) {
  return typeof e == 'string' || typeof e == 'symbol'
}
const Wt = {
    path: '/',
    name: void 0,
    params: {},
    query: {},
    hash: '',
    fullPath: '/',
    matched: [],
    meta: {},
    redirectedFrom: void 0,
  },
  kf = Symbol('')
var Fc
;(function (e) {
  ;(e[(e.aborted = 4)] = 'aborted'),
    (e[(e.cancelled = 8)] = 'cancelled'),
    (e[(e.duplicated = 16)] = 'duplicated')
})(Fc || (Fc = {}))
function Yr(e, t) {
  return le(new Error(), { type: e, [kf]: !0 }, t)
}
function It(e, t) {
  return e instanceof Error && kf in e && (t == null || !!(e.type & t))
}
const Dc = '[^/]+?',
  dg = { sensitive: !1, strict: !1, start: !0, end: !0 },
  pg = /[.+*?^${}()[\]/\\]/g
function yg(e, t) {
  const r = le({}, dg, t),
    n = []
  let i = r.start ? '^' : ''
  const o = []
  for (const u of e) {
    const l = u.length ? [] : [90]
    r.strict && !u.length && (i += '/')
    for (let h = 0; h < u.length; h++) {
      const f = u[h]
      let d = 40 + (r.sensitive ? 0.25 : 0)
      if (f.type === 0)
        h || (i += '/'), (i += f.value.replace(pg, '\\$&')), (d += 40)
      else if (f.type === 1) {
        const { value: p, repeatable: b, optional: w, regexp: v } = f
        o.push({ name: p, repeatable: b, optional: w })
        const y = v || Dc
        if (y !== Dc) {
          d += 10
          try {
            new RegExp(`(${y})`)
          } catch (E) {
            throw new Error(
              `Invalid custom RegExp for param "${p}" (${y}): ` + E.message
            )
          }
        }
        let g = b ? `((?:${y})(?:/(?:${y}))*)` : `(${y})`
        h || (g = w && u.length < 2 ? `(?:/${g})` : '/' + g),
          w && (g += '?'),
          (i += g),
          (d += 20),
          w && (d += -8),
          b && (d += -20),
          y === '.*' && (d += -50)
      }
      l.push(d)
    }
    n.push(l)
  }
  if (r.strict && r.end) {
    const u = n.length - 1
    n[u][n[u].length - 1] += 0.7000000000000001
  }
  r.strict || (i += '/?'), r.end ? (i += '$') : r.strict && (i += '(?:/|$)')
  const s = new RegExp(i, r.sensitive ? '' : 'i')
  function a(u) {
    const l = u.match(s),
      h = {}
    if (!l) return null
    for (let f = 1; f < l.length; f++) {
      const d = l[f] || '',
        p = o[f - 1]
      h[p.name] = d && p.repeatable ? d.split('/') : d
    }
    return h
  }
  function c(u) {
    let l = '',
      h = !1
    for (const f of e) {
      ;(!h || !l.endsWith('/')) && (l += '/'), (h = !1)
      for (const d of f)
        if (d.type === 0) l += d.value
        else if (d.type === 1) {
          const { value: p, repeatable: b, optional: w } = d,
            v = p in u ? u[p] : ''
          if (St(v) && !b)
            throw new Error(
              `Provided param "${p}" is an array but it is not repeatable (* or + modifiers)`
            )
          const y = St(v) ? v.join('/') : v
          if (!y)
            if (w)
              f.length < 2 &&
                (l.endsWith('/') ? (l = l.slice(0, -1)) : (h = !0))
            else throw new Error(`Missing required param "${p}"`)
          l += y
        }
    }
    return l || '/'
  }
  return { re: s, score: n, keys: o, parse: a, stringify: c }
}
function mg(e, t) {
  let r = 0
  for (; r < e.length && r < t.length; ) {
    const n = t[r] - e[r]
    if (n) return n
    r++
  }
  return e.length < t.length
    ? e.length === 1 && e[0] === 40 + 40
      ? -1
      : 1
    : e.length > t.length
    ? t.length === 1 && t[0] === 40 + 40
      ? 1
      : -1
    : 0
}
function vg(e, t) {
  let r = 0
  const n = e.score,
    i = t.score
  for (; r < n.length && r < i.length; ) {
    const o = mg(n[r], i[r])
    if (o) return o
    r++
  }
  if (Math.abs(i.length - n.length) === 1) {
    if (Mc(n)) return 1
    if (Mc(i)) return -1
  }
  return i.length - n.length
}
function Mc(e) {
  const t = e[e.length - 1]
  return e.length > 0 && t[t.length - 1] < 0
}
const gg = { type: 0, value: '' },
  bg = /[a-zA-Z0-9_]/
function wg(e) {
  if (!e) return [[]]
  if (e === '/') return [[gg]]
  if (!e.startsWith('/')) throw new Error(`Invalid path "${e}"`)
  function t(d) {
    throw new Error(`ERR (${r})/"${u}": ${d}`)
  }
  let r = 0,
    n = r
  const i = []
  let o
  function s() {
    o && i.push(o), (o = [])
  }
  let a = 0,
    c,
    u = '',
    l = ''
  function h() {
    u &&
      (r === 0
        ? o.push({ type: 0, value: u })
        : r === 1 || r === 2 || r === 3
        ? (o.length > 1 &&
            (c === '*' || c === '+') &&
            t(
              `A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`
            ),
          o.push({
            type: 1,
            value: u,
            regexp: l,
            repeatable: c === '*' || c === '+',
            optional: c === '*' || c === '?',
          }))
        : t('Invalid state to consume buffer'),
      (u = ''))
  }
  function f() {
    u += c
  }
  for (; a < e.length; ) {
    if (((c = e[a++]), c === '\\' && r !== 2)) {
      ;(n = r), (r = 4)
      continue
    }
    switch (r) {
      case 0:
        c === '/' ? (u && h(), s()) : c === ':' ? (h(), (r = 1)) : f()
        break
      case 4:
        f(), (r = n)
        break
      case 1:
        c === '('
          ? (r = 2)
          : bg.test(c)
          ? f()
          : (h(), (r = 0), c !== '*' && c !== '?' && c !== '+' && a--)
        break
      case 2:
        c === ')'
          ? l[l.length - 1] == '\\'
            ? (l = l.slice(0, -1) + c)
            : (r = 3)
          : (l += c)
        break
      case 3:
        h(), (r = 0), c !== '*' && c !== '?' && c !== '+' && a--, (l = '')
        break
      default:
        t('Unknown state')
        break
    }
  }
  return r === 2 && t(`Unfinished custom RegExp for param "${u}"`), h(), s(), i
}
function Eg(e, t, r) {
  const n = yg(wg(e.path), r),
    i = le(n, { record: e, parent: t, children: [], alias: [] })
  return t && !i.record.aliasOf == !t.record.aliasOf && t.children.push(i), i
}
function _g(e, t) {
  const r = [],
    n = new Map()
  t = Lc({ strict: !1, end: !0, sensitive: !1 }, t)
  function i(l) {
    return n.get(l)
  }
  function o(l, h, f) {
    const d = !f,
      p = Sg(l)
    p.aliasOf = f && f.record
    const b = Lc(t, l),
      w = [p]
    if ('alias' in l) {
      const g = typeof l.alias == 'string' ? [l.alias] : l.alias
      for (const E of g)
        w.push(
          le({}, p, {
            components: f ? f.record.components : p.components,
            path: E,
            aliasOf: f ? f.record : p,
          })
        )
    }
    let v, y
    for (const g of w) {
      const { path: E } = g
      if (h && E[0] !== '/') {
        const S = h.record.path,
          C = S[S.length - 1] === '/' ? '' : '/'
        g.path = h.record.path + (E && C + E)
      }
      if (
        ((v = Eg(g, h, b)),
        f
          ? f.alias.push(v)
          : ((y = y || v),
            y !== v && y.alias.push(v),
            d && l.name && !jc(v) && s(l.name)),
        p.children)
      ) {
        const S = p.children
        for (let C = 0; C < S.length; C++) o(S[C], v, f && f.children[C])
      }
      ;(f = f || v),
        ((v.record.components && Object.keys(v.record.components).length) ||
          v.record.name ||
          v.record.redirect) &&
          c(v)
    }
    return y
      ? () => {
          s(y)
        }
      : Tn
  }
  function s(l) {
    if (Of(l)) {
      const h = n.get(l)
      h &&
        (n.delete(l),
        r.splice(r.indexOf(h), 1),
        h.children.forEach(s),
        h.alias.forEach(s))
    } else {
      const h = r.indexOf(l)
      h > -1 &&
        (r.splice(h, 1),
        l.record.name && n.delete(l.record.name),
        l.children.forEach(s),
        l.alias.forEach(s))
    }
  }
  function a() {
    return r
  }
  function c(l) {
    let h = 0
    for (
      ;
      h < r.length &&
      vg(l, r[h]) >= 0 &&
      (l.record.path !== r[h].record.path || !Tf(l, r[h]));

    )
      h++
    r.splice(h, 0, l), l.record.name && !jc(l) && n.set(l.record.name, l)
  }
  function u(l, h) {
    let f,
      d = {},
      p,
      b
    if ('name' in l && l.name) {
      if (((f = n.get(l.name)), !f)) throw Yr(1, { location: l })
      ;(b = f.record.name),
        (d = le(
          Nc(
            h.params,
            f.keys.filter((y) => !y.optional).map((y) => y.name)
          ),
          l.params &&
            Nc(
              l.params,
              f.keys.map((y) => y.name)
            )
        )),
        (p = f.stringify(d))
    } else if ('path' in l)
      (p = l.path),
        (f = r.find((y) => y.re.test(p))),
        f && ((d = f.parse(p)), (b = f.record.name))
    else {
      if (((f = h.name ? n.get(h.name) : r.find((y) => y.re.test(h.path))), !f))
        throw Yr(1, { location: l, currentLocation: h })
      ;(b = f.record.name),
        (d = le({}, h.params, l.params)),
        (p = f.stringify(d))
    }
    const w = []
    let v = f
    for (; v; ) w.unshift(v.record), (v = v.parent)
    return { name: b, path: p, params: d, matched: w, meta: kg(w) }
  }
  return (
    e.forEach((l) => o(l)),
    {
      addRoute: o,
      resolve: u,
      removeRoute: s,
      getRoutes: a,
      getRecordMatcher: i,
    }
  )
}
function Nc(e, t) {
  const r = {}
  for (const n of t) n in e && (r[n] = e[n])
  return r
}
function Sg(e) {
  return {
    path: e.path,
    redirect: e.redirect,
    name: e.name,
    meta: e.meta || {},
    aliasOf: void 0,
    beforeEnter: e.beforeEnter,
    props: Og(e),
    children: e.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      'components' in e
        ? e.components || null
        : e.component && { default: e.component },
  }
}
function Og(e) {
  const t = {},
    r = e.props || !1
  if ('component' in e) t.default = r
  else for (const n in e.components) t[n] = typeof r == 'boolean' ? r : r[n]
  return t
}
function jc(e) {
  for (; e; ) {
    if (e.record.aliasOf) return !0
    e = e.parent
  }
  return !1
}
function kg(e) {
  return e.reduce((t, r) => le(t, r.meta), {})
}
function Lc(e, t) {
  const r = {}
  for (const n in e) r[n] = n in t ? t[n] : e[n]
  return r
}
function Tf(e, t) {
  return t.children.some((r) => r === e || Tf(e, r))
}
const Cf = /#/g,
  Tg = /&/g,
  Cg = /\//g,
  Rg = /=/g,
  Pg = /\?/g,
  Rf = /\+/g,
  xg = /%5B/g,
  Ag = /%5D/g,
  Pf = /%5E/g,
  Ig = /%60/g,
  xf = /%7B/g,
  Fg = /%7C/g,
  Af = /%7D/g,
  Dg = /%20/g
function fa(e) {
  return encodeURI('' + e)
    .replace(Fg, '|')
    .replace(xg, '[')
    .replace(Ag, ']')
}
function Mg(e) {
  return fa(e).replace(xf, '{').replace(Af, '}').replace(Pf, '^')
}
function ls(e) {
  return fa(e)
    .replace(Rf, '%2B')
    .replace(Dg, '+')
    .replace(Cf, '%23')
    .replace(Tg, '%26')
    .replace(Ig, '`')
    .replace(xf, '{')
    .replace(Af, '}')
    .replace(Pf, '^')
}
function Ng(e) {
  return ls(e).replace(Rg, '%3D')
}
function jg(e) {
  return fa(e).replace(Cf, '%23').replace(Pg, '%3F')
}
function Lg(e) {
  return e == null ? '' : jg(e).replace(Cg, '%2F')
}
function Pi(e) {
  try {
    return decodeURIComponent('' + e)
  } catch {}
  return '' + e
}
function qg(e) {
  const t = {}
  if (e === '' || e === '?') return t
  const n = (e[0] === '?' ? e.slice(1) : e).split('&')
  for (let i = 0; i < n.length; ++i) {
    const o = n[i].replace(Rf, ' '),
      s = o.indexOf('='),
      a = Pi(s < 0 ? o : o.slice(0, s)),
      c = s < 0 ? null : Pi(o.slice(s + 1))
    if (a in t) {
      let u = t[a]
      St(u) || (u = t[a] = [u]), u.push(c)
    } else t[a] = c
  }
  return t
}
function qc(e) {
  let t = ''
  for (let r in e) {
    const n = e[r]
    if (((r = Ng(r)), n == null)) {
      n !== void 0 && (t += (t.length ? '&' : '') + r)
      continue
    }
    ;(St(n) ? n.map((o) => o && ls(o)) : [n && ls(n)]).forEach((o) => {
      o !== void 0 &&
        ((t += (t.length ? '&' : '') + r), o != null && (t += '=' + o))
    })
  }
  return t
}
function Bg(e) {
  const t = {}
  for (const r in e) {
    const n = e[r]
    n !== void 0 &&
      (t[r] = St(n)
        ? n.map((i) => (i == null ? null : '' + i))
        : n == null
        ? n
        : '' + n)
  }
  return t
}
const $g = Symbol(''),
  Bc = Symbol(''),
  ha = Symbol(''),
  da = Symbol(''),
  fs = Symbol('')
function ln() {
  let e = []
  function t(n) {
    return (
      e.push(n),
      () => {
        const i = e.indexOf(n)
        i > -1 && e.splice(i, 1)
      }
    )
  }
  function r() {
    e = []
  }
  return { add: t, list: () => e, reset: r }
}
function Yt(e, t, r, n, i) {
  const o = n && (n.enterCallbacks[i] = n.enterCallbacks[i] || [])
  return () =>
    new Promise((s, a) => {
      const c = (h) => {
          h === !1
            ? a(Yr(4, { from: r, to: t }))
            : h instanceof Error
            ? a(h)
            : hg(h)
            ? a(Yr(2, { from: t, to: h }))
            : (o &&
                n.enterCallbacks[i] === o &&
                typeof h == 'function' &&
                o.push(h),
              s())
        },
        u = e.call(n && n.instances[i], t, r, c)
      let l = Promise.resolve(u)
      e.length < 3 && (l = l.then(c)), l.catch((h) => a(h))
    })
}
function So(e, t, r, n) {
  const i = []
  for (const o of e)
    for (const s in o.components) {
      let a = o.components[s]
      if (!(t !== 'beforeRouteEnter' && !o.instances[s]))
        if (Hg(a)) {
          const u = (a.__vccOpts || a)[t]
          u && i.push(Yt(u, r, n, o, s))
        } else {
          let c = a()
          i.push(() =>
            c.then((u) => {
              if (!u)
                return Promise.reject(
                  new Error(`Couldn't resolve component "${s}" at "${o.path}"`)
                )
              const l = Kv(u) ? u.default : u
              o.components[s] = l
              const f = (l.__vccOpts || l)[t]
              return f && Yt(f, r, n, o, s)()
            })
          )
        }
    }
  return i
}
function Hg(e) {
  return (
    typeof e == 'object' ||
    'displayName' in e ||
    'props' in e ||
    '__vccOpts' in e
  )
}
function $c(e) {
  const t = Ve(ha),
    r = Ve(da),
    n = Ne(() => t.resolve(Me(e.to))),
    i = Ne(() => {
      const { matched: c } = n.value,
        { length: u } = c,
        l = c[u - 1],
        h = r.matched
      if (!l || !h.length) return -1
      const f = h.findIndex(Jr.bind(null, l))
      if (f > -1) return f
      const d = Hc(c[u - 2])
      return u > 1 && Hc(l) === d && h[h.length - 1].path !== d
        ? h.findIndex(Jr.bind(null, c[u - 2]))
        : f
    }),
    o = Ne(() => i.value > -1 && Wg(r.params, n.value.params)),
    s = Ne(
      () =>
        i.value > -1 &&
        i.value === r.matched.length - 1 &&
        Ef(r.params, n.value.params)
    )
  function a(c = {}) {
    return Vg(c)
      ? t[Me(e.replace) ? 'replace' : 'push'](Me(e.to)).catch(Tn)
      : Promise.resolve()
  }
  return {
    route: n,
    href: Ne(() => n.value.href),
    isActive: o,
    isExactActive: s,
    navigate: a,
  }
}
const Qg = Fe({
    name: 'RouterLink',
    compatConfig: { MODE: 3 },
    props: {
      to: { type: [String, Object], required: !0 },
      replace: Boolean,
      activeClass: String,
      exactActiveClass: String,
      custom: Boolean,
      ariaCurrentValue: { type: String, default: 'page' },
    },
    useLink: $c,
    setup(e, { slots: t }) {
      const r = xt($c(e)),
        { options: n } = Ve(ha),
        i = Ne(() => ({
          [Qc(e.activeClass, n.linkActiveClass, 'router-link-active')]:
            r.isActive,
          [Qc(
            e.exactActiveClass,
            n.linkExactActiveClass,
            'router-link-exact-active'
          )]: r.isExactActive,
        }))
      return () => {
        const o = t.default && t.default(r)
        return e.custom
          ? o
          : Ge(
              'a',
              {
                'aria-current': r.isExactActive ? e.ariaCurrentValue : null,
                href: r.href,
                onClick: r.navigate,
                class: i.value,
              },
              o
            )
      }
    },
  }),
  Ug = Qg
function Vg(e) {
  if (
    !(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) &&
    !e.defaultPrevented &&
    !(e.button !== void 0 && e.button !== 0)
  ) {
    if (e.currentTarget && e.currentTarget.getAttribute) {
      const t = e.currentTarget.getAttribute('target')
      if (/\b_blank\b/i.test(t)) return
    }
    return e.preventDefault && e.preventDefault(), !0
  }
}
function Wg(e, t) {
  for (const r in t) {
    const n = t[r],
      i = e[r]
    if (typeof n == 'string') {
      if (n !== i) return !1
    } else if (!St(i) || i.length !== n.length || n.some((o, s) => o !== i[s]))
      return !1
  }
  return !0
}
function Hc(e) {
  return e ? (e.aliasOf ? e.aliasOf.path : e.path) : ''
}
const Qc = (e, t, r) => e ?? t ?? r,
  zg = Fe({
    name: 'RouterView',
    inheritAttrs: !1,
    props: { name: { type: String, default: 'default' }, route: Object },
    compatConfig: { MODE: 3 },
    setup(e, { attrs: t, slots: r }) {
      const n = Ve(fs),
        i = Ne(() => e.route || n.value),
        o = Ve(Bc, 0),
        s = Ne(() => {
          let u = Me(o)
          const { matched: l } = i.value
          let h
          for (; (h = l[u]) && !h.components; ) u++
          return u
        }),
        a = Ne(() => i.value.matched[s.value])
      Br(
        Bc,
        Ne(() => s.value + 1)
      ),
        Br($g, a),
        Br(fs, i)
      const c = ge()
      return (
        jt(
          () => [c.value, a.value, e.name],
          ([u, l, h], [f, d, p]) => {
            l &&
              ((l.instances[h] = u),
              d &&
                d !== l &&
                u &&
                u === f &&
                (l.leaveGuards.size || (l.leaveGuards = d.leaveGuards),
                l.updateGuards.size || (l.updateGuards = d.updateGuards))),
              u &&
                l &&
                (!d || !Jr(l, d) || !f) &&
                (l.enterCallbacks[h] || []).forEach((b) => b(u))
          },
          { flush: 'post' }
        ),
        () => {
          const u = i.value,
            l = e.name,
            h = a.value,
            f = h && h.components[l]
          if (!f) return Uc(r.default, { Component: f, route: u })
          const d = h.props[l],
            p = d
              ? d === !0
                ? u.params
                : typeof d == 'function'
                ? d(u)
                : d
              : null,
            w = Ge(
              f,
              le({}, p, t, {
                onVnodeUnmounted: (v) => {
                  v.component.isUnmounted && (h.instances[l] = null)
                },
                ref: c,
              })
            )
          return Uc(r.default, { Component: w, route: u }) || w
        }
      )
    },
  })
function Uc(e, t) {
  if (!e) return null
  const r = e(t)
  return r.length === 1 ? r[0] : r
}
const If = zg
function Kg(e) {
  const t = _g(e.routes, e),
    r = e.parseQuery || qg,
    n = e.stringifyQuery || qc,
    i = e.history,
    o = ln(),
    s = ln(),
    a = ln(),
    c = Ho(Wt)
  let u = Wt
  Pr &&
    e.scrollBehavior &&
    'scrollRestoration' in history &&
    (history.scrollRestoration = 'manual')
  const l = Eo.bind(null, (R) => '' + R),
    h = Eo.bind(null, Lg),
    f = Eo.bind(null, Pi)
  function d(R, D) {
    let $, Y
    return (
      Of(R) ? (($ = t.getRecordMatcher(R)), (Y = D)) : (Y = R), t.addRoute(Y, $)
    )
  }
  function p(R) {
    const D = t.getRecordMatcher(R)
    D && t.removeRoute(D)
  }
  function b() {
    return t.getRoutes().map((R) => R.record)
  }
  function w(R) {
    return !!t.getRecordMatcher(R)
  }
  function v(R, D) {
    if (((D = le({}, D || c.value)), typeof R == 'string')) {
      const m = _o(r, R, D.path),
        _ = t.resolve({ path: m.path }, D),
        k = i.createHref(m.fullPath)
      return le(m, _, {
        params: f(_.params),
        hash: Pi(m.hash),
        redirectedFrom: void 0,
        href: k,
      })
    }
    let $
    if ('path' in R) $ = le({}, R, { path: _o(r, R.path, D.path).path })
    else {
      const m = le({}, R.params)
      for (const _ in m) m[_] == null && delete m[_]
      ;($ = le({}, R, { params: h(R.params) })), (D.params = h(D.params))
    }
    const Y = t.resolve($, D),
      ae = R.hash || ''
    Y.params = l(f(Y.params))
    const _e = Gv(n, le({}, R, { hash: Mg(ae), path: Y.path })),
      ie = i.createHref(_e)
    return le(
      { fullPath: _e, hash: ae, query: n === qc ? Bg(R.query) : R.query || {} },
      Y,
      { redirectedFrom: void 0, href: ie }
    )
  }
  function y(R) {
    return typeof R == 'string' ? _o(r, R, c.value.path) : le({}, R)
  }
  function g(R, D) {
    if (u !== R) return Yr(8, { from: D, to: R })
  }
  function E(R) {
    return x(R)
  }
  function S(R) {
    return E(le(y(R), { replace: !0 }))
  }
  function C(R) {
    const D = R.matched[R.matched.length - 1]
    if (D && D.redirect) {
      const { redirect: $ } = D
      let Y = typeof $ == 'function' ? $(R) : $
      return (
        typeof Y == 'string' &&
          ((Y = Y.includes('?') || Y.includes('#') ? (Y = y(Y)) : { path: Y }),
          (Y.params = {})),
        le(
          { query: R.query, hash: R.hash, params: 'path' in Y ? {} : R.params },
          Y
        )
      )
    }
  }
  function x(R, D) {
    const $ = (u = v(R)),
      Y = c.value,
      ae = R.state,
      _e = R.force,
      ie = R.replace === !0,
      m = C($)
    if (m)
      return x(
        le(y(m), {
          state: typeof m == 'object' ? le({}, ae, m.state) : ae,
          force: _e,
          replace: ie,
        }),
        D || $
      )
    const _ = $
    _.redirectedFrom = D
    let k
    return (
      !_e &&
        Xv(n, Y, $) &&
        ((k = Yr(16, { to: _, from: Y })), ee(Y, Y, !0, !1)),
      (k ? Promise.resolve(k) : B(_, Y))
        .catch((P) => (It(P) ? (It(P, 2) ? P : Se(P)) : W(P, _, Y)))
        .then((P) => {
          if (P) {
            if (It(P, 2))
              return x(
                le({ replace: ie }, y(P.to), {
                  state: typeof P.to == 'object' ? le({}, ae, P.to.state) : ae,
                  force: _e,
                }),
                D || _
              )
          } else P = J(_, Y, !0, ie, ae)
          return L(_, Y, P), P
        })
    )
  }
  function T(R, D) {
    const $ = g(R, D)
    return $ ? Promise.reject($) : Promise.resolve()
  }
  function B(R, D) {
    let $
    const [Y, ae, _e] = Jg(R, D)
    $ = So(Y.reverse(), 'beforeRouteLeave', R, D)
    for (const m of Y)
      m.leaveGuards.forEach((_) => {
        $.push(Yt(_, R, D))
      })
    const ie = T.bind(null, R, D)
    return (
      $.push(ie),
      Rr($)
        .then(() => {
          $ = []
          for (const m of o.list()) $.push(Yt(m, R, D))
          return $.push(ie), Rr($)
        })
        .then(() => {
          $ = So(ae, 'beforeRouteUpdate', R, D)
          for (const m of ae)
            m.updateGuards.forEach((_) => {
              $.push(Yt(_, R, D))
            })
          return $.push(ie), Rr($)
        })
        .then(() => {
          $ = []
          for (const m of R.matched)
            if (m.beforeEnter && !D.matched.includes(m))
              if (St(m.beforeEnter))
                for (const _ of m.beforeEnter) $.push(Yt(_, R, D))
              else $.push(Yt(m.beforeEnter, R, D))
          return $.push(ie), Rr($)
        })
        .then(
          () => (
            R.matched.forEach((m) => (m.enterCallbacks = {})),
            ($ = So(_e, 'beforeRouteEnter', R, D)),
            $.push(ie),
            Rr($)
          )
        )
        .then(() => {
          $ = []
          for (const m of s.list()) $.push(Yt(m, R, D))
          return $.push(ie), Rr($)
        })
        .catch((m) => (It(m, 8) ? m : Promise.reject(m)))
    )
  }
  function L(R, D, $) {
    for (const Y of a.list()) Y(R, D, $)
  }
  function J(R, D, $, Y, ae) {
    const _e = g(R, D)
    if (_e) return _e
    const ie = D === Wt,
      m = Pr ? history.state : {}
    $ &&
      (Y || ie
        ? i.replace(R.fullPath, le({ scroll: ie && m && m.scroll }, ae))
        : i.push(R.fullPath, ae)),
      (c.value = R),
      ee(R, D, $, ie),
      Se()
  }
  let j
  function z() {
    j ||
      (j = i.listen((R, D, $) => {
        if (!gt.listening) return
        const Y = v(R),
          ae = C(Y)
        if (ae) {
          x(le(ae, { replace: !0 }), Y).catch(Tn)
          return
        }
        u = Y
        const _e = c.value
        Pr && sg(Ac(_e.fullPath, $.delta), Ji()),
          B(Y, _e)
            .catch((ie) =>
              It(ie, 12)
                ? ie
                : It(ie, 2)
                ? (x(ie.to, Y)
                    .then((m) => {
                      It(m, 20) && !$.delta && $.type === Ln.pop && i.go(-1, !1)
                    })
                    .catch(Tn),
                  Promise.reject())
                : ($.delta && i.go(-$.delta, !1), W(ie, Y, _e))
            )
            .then((ie) => {
              ;(ie = ie || J(Y, _e, !1)),
                ie &&
                  ($.delta && !It(ie, 8)
                    ? i.go(-$.delta, !1)
                    : $.type === Ln.pop && It(ie, 20) && i.go(-1, !1)),
                L(Y, _e, ie)
            })
            .catch(Tn)
      }))
  }
  let A = ln(),
    ne = ln(),
    V
  function W(R, D, $) {
    Se(R)
    const Y = ne.list()
    return (
      Y.length ? Y.forEach((ae) => ae(R, D, $)) : console.error(R),
      Promise.reject(R)
    )
  }
  function Q() {
    return V && c.value !== Wt
      ? Promise.resolve()
      : new Promise((R, D) => {
          A.add([R, D])
        })
  }
  function Se(R) {
    return (
      V ||
        ((V = !R),
        z(),
        A.list().forEach(([D, $]) => (R ? $(R) : D())),
        A.reset()),
      R
    )
  }
  function ee(R, D, $, Y) {
    const { scrollBehavior: ae } = e
    if (!Pr || !ae) return Promise.resolve()
    const _e =
      (!$ && ag(Ac(R.fullPath, 0))) ||
      ((Y || !$) && history.state && history.state.scroll) ||
      null
    return an()
      .then(() => ae(R, D, _e))
      .then((ie) => ie && og(ie))
      .catch((ie) => W(ie, R, D))
  }
  const Oe = (R) => i.go(R)
  let Ee
  const vt = new Set(),
    gt = {
      currentRoute: c,
      listening: !0,
      addRoute: d,
      removeRoute: p,
      hasRoute: w,
      getRoutes: b,
      resolve: v,
      options: e,
      push: E,
      replace: S,
      go: Oe,
      back: () => Oe(-1),
      forward: () => Oe(1),
      beforeEach: o.add,
      beforeResolve: s.add,
      afterEach: a.add,
      onError: ne.add,
      isReady: Q,
      install(R) {
        const D = this
        R.component('RouterLink', Ug),
          R.component('RouterView', If),
          (R.config.globalProperties.$router = D),
          Object.defineProperty(R.config.globalProperties, '$route', {
            enumerable: !0,
            get: () => Me(c),
          }),
          Pr &&
            !Ee &&
            c.value === Wt &&
            ((Ee = !0), E(i.location).catch((ae) => {}))
        const $ = {}
        for (const ae in Wt) $[ae] = Ne(() => c.value[ae])
        R.provide(ha, D), R.provide(da, xt($)), R.provide(fs, c)
        const Y = R.unmount
        vt.add(R),
          (R.unmount = function () {
            vt.delete(R),
              vt.size < 1 &&
                ((u = Wt),
                j && j(),
                (j = null),
                (c.value = Wt),
                (Ee = !1),
                (V = !1)),
              Y()
          })
      },
    }
  return gt
}
function Rr(e) {
  return e.reduce((t, r) => t.then(() => r()), Promise.resolve())
}
function Jg(e, t) {
  const r = [],
    n = [],
    i = [],
    o = Math.max(t.matched.length, e.matched.length)
  for (let s = 0; s < o; s++) {
    const a = t.matched[s]
    a && (e.matched.find((u) => Jr(u, a)) ? n.push(a) : r.push(a))
    const c = e.matched[s]
    c && (t.matched.find((u) => Jr(u, c)) || i.push(c))
  }
  return [r, n, i]
}
function Yg() {
  return Ve(da)
}
const Ze = {},
  et = {},
  tt = {},
  rt = {},
  nt = {},
  it = {},
  ot = {},
  Vc = [
    {
      name: (Ze == null ? void 0 : Ze.name) ?? 'cart',
      path: (Ze == null ? void 0 : Ze.path) ?? '/cart',
      children: [],
      meta: Ze,
      alias: (Ze == null ? void 0 : Ze.alias) || [],
      redirect: (Ze == null ? void 0 : Ze.redirect) || void 0,
      component: () =>
        Mt(
          () => import('./cart.5b2c094d.js'),
          [
            './cart.5b2c094d.js',
            './_plugin-vue_export-helper.c27b6911.js',
            './cart.f86369bd.css',
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: (et == null ? void 0 : et.name) ?? 'categories',
      path: (et == null ? void 0 : et.path) ?? '/categories',
      children: [],
      meta: et,
      alias: (et == null ? void 0 : et.alias) || [],
      redirect: (et == null ? void 0 : et.redirect) || void 0,
      component: () =>
        Mt(
          () => import('./categories.ecbdebe8.js'),
          [
            './categories.ecbdebe8.js',
            './SpinnerLoading.f2ae26fa.js',
            './_plugin-vue_export-helper.c27b6911.js',
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: (tt == null ? void 0 : tt.name) ?? 'category-category',
      path: (tt == null ? void 0 : tt.path) ?? '/category/:category',
      children: [],
      meta: tt,
      alias: (tt == null ? void 0 : tt.alias) || [],
      redirect: (tt == null ? void 0 : tt.redirect) || void 0,
      component: () =>
        Mt(
          () => import('./_category_.b5941ba2.js'),
          [
            './_category_.b5941ba2.js',
            './ProductsShowAll.e28b93e2.js',
            './functions.9991b9f0.js',
            './_plugin-vue_export-helper.c27b6911.js',
            './ProductsShowAll.e3e4cb77.css',
            './SpinnerLoading.f2ae26fa.js',
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: (rt == null ? void 0 : rt.name) ?? 'checkout',
      path: (rt == null ? void 0 : rt.path) ?? '/checkout',
      children: [],
      meta: rt,
      alias: (rt == null ? void 0 : rt.alias) || [],
      redirect: (rt == null ? void 0 : rt.redirect) || void 0,
      component: () =>
        Mt(
          () => import('./checkout.1defa8ee.js'),
          ['./checkout.1defa8ee.js', './_plugin-vue_export-helper.c27b6911.js'],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: (nt == null ? void 0 : nt.name) ?? 'index',
      path: (nt == null ? void 0 : nt.path) ?? '/',
      children: [],
      meta: nt,
      alias: (nt == null ? void 0 : nt.alias) || [],
      redirect: (nt == null ? void 0 : nt.redirect) || void 0,
      component: () =>
        Mt(
          () => import('./index.d958454e.js'),
          [
            './index.d958454e.js',
            './_plugin-vue_export-helper.c27b6911.js',
            './ProductsShowAll.e28b93e2.js',
            './functions.9991b9f0.js',
            './ProductsShowAll.e3e4cb77.css',
            './FETCH_ALL_PRODUCTS_QUERY.e4fadab3.js',
            './index.7bf59d0a.css',
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: (it == null ? void 0 : it.name) ?? 'product-product',
      path: (it == null ? void 0 : it.path) ?? '/product/:product',
      children: [],
      meta: it,
      alias: (it == null ? void 0 : it.alias) || [],
      redirect: (it == null ? void 0 : it.redirect) || void 0,
      component: () =>
        Mt(
          () => import('./_product_.94e0cada.js'),
          [
            './_product_.94e0cada.js',
            './_plugin-vue_export-helper.c27b6911.js',
            './functions.9991b9f0.js',
            './SpinnerLoading.f2ae26fa.js',
            './_product_.7c66fcb6.css',
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
    {
      name: (ot == null ? void 0 : ot.name) ?? 'products',
      path: (ot == null ? void 0 : ot.path) ?? '/products',
      children: [],
      meta: ot,
      alias: (ot == null ? void 0 : ot.alias) || [],
      redirect: (ot == null ? void 0 : ot.redirect) || void 0,
      component: () =>
        Mt(
          () => import('./products.69519cef.js'),
          [
            './products.69519cef.js',
            './ProductsShowAll.e28b93e2.js',
            './functions.9991b9f0.js',
            './_plugin-vue_export-helper.c27b6911.js',
            './ProductsShowAll.e3e4cb77.css',
            './FETCH_ALL_PRODUCTS_QUERY.e4fadab3.js',
          ],
          import.meta.url
        ).then((e) => e.default || e),
    },
  ],
  Gg = {
    scrollBehavior(e, t, r) {
      const n = xe()
      let i = r || void 0
      if (
        (!i &&
          t &&
          e &&
          e.meta.scrollToTop !== !1 &&
          Xg(t, e) &&
          (i = { left: 0, top: 0 }),
        e.path === t.path)
      ) {
        if (t.hash && !e.hash) return { left: 0, top: 0 }
        if (e.hash) return { el: e.hash, top: Wc(e.hash) }
      }
      const o = (a) => !!(a.meta.pageTransition ?? cs),
        s = o(t) && o(e) ? 'page:transition:finish' : 'page:finish'
      return new Promise((a) => {
        n.hooks.hookOnce(s, async () => {
          await an(), e.hash && (i = { el: e.hash, top: Wc(e.hash) }), a(i)
        })
      })
    },
  }
function Wc(e) {
  try {
    const t = document.querySelector(e)
    if (t) return parseFloat(getComputedStyle(t).scrollMarginTop)
  } catch {}
  return 0
}
function Xg(e, t) {
  const r = e.matched[0] === t.matched[0]
  return !!(!r || (r && JSON.stringify(e.params) !== JSON.stringify(t.params)))
}
const Zg = {},
  Ft = { ...Zg, ...Gg },
  eb = mm(async (e) => {
    var i
    let t, r
    if (!((i = e.meta) != null && i.validate)) return
    const n =
      (([t, r] = rs(() => Promise.resolve(e.meta.validate(e)))),
      (t = await t),
      r(),
      t)
    if (n !== !0) return n
  }),
  tb = [eb],
  Rn = {}
function rb(e, t) {
  const { pathname: r, search: n, hash: i } = t,
    o = e.indexOf('#')
  if (o > -1) {
    const a = i.includes(e.slice(o)) ? e.slice(o).length : 1
    let c = i.slice(a)
    return c[0] !== '/' && (c = '/' + c), gc(c, '')
  }
  return gc(r, e) + n + i
}
const nb = Or(async (e) => {
    var p, b
    let t,
      r,
      n = cf().app.baseURL
    Ft.hashMode && !n.includes('#') && (n += '#')
    const i =
        ((p = Ft.history) == null ? void 0 : p.call(Ft, n)) ??
        (Ft.hashMode ? fg(n) : Sf(n)),
      o = ((b = Ft.routes) == null ? void 0 : b.call(Ft, Vc)) ?? Vc,
      s = rb(n, window.location),
      a = Kg({ ...Ft, history: i, routes: o })
    e.vueApp.use(a)
    const c = Ho(a.currentRoute.value)
    a.afterEach((w, v) => {
      c.value = v
    }),
      Object.defineProperty(e.vueApp.config.globalProperties, 'previousRoute', {
        get: () => c.value,
      })
    const u = Ho(a.resolve(s)),
      l = () => {
        u.value = a.currentRoute.value
      }
    e.hook('page:finish', l),
      a.afterEach((w, v) => {
        var y, g, E, S
        ;((g = (y = w.matched[0]) == null ? void 0 : y.components) == null
          ? void 0
          : g.default) ===
          ((S = (E = v.matched[0]) == null ? void 0 : E.components) == null
            ? void 0
            : S.default) && l()
      })
    const h = {}
    for (const w in u.value) h[w] = Ne(() => u.value[w])
    ;(e._route = xt(h)),
      (e._middleware = e._middleware || { global: [], named: {} })
    const f = zi()
    try {
      ;([t, r] = rs(() => a.isReady())), await t, r()
    } catch (w) {
      ;([t, r] = rs(() => Jt(e, gn, [w]))), await t, r()
    }
    const d = ym('_layout')
    return (
      a.beforeEach(async (w, v) => {
        var g
        ;(w.meta = xt(w.meta)),
          e.isHydrating &&
            d.value &&
            !_r(w.meta.layout) &&
            (w.meta.layout = d.value),
          (e._processingMiddleware = !0)
        const y = new Set([...tb, ...e._middleware.global])
        for (const E of w.matched) {
          const S = E.meta.middleware
          if (S)
            if (Array.isArray(S)) for (const C of S) y.add(C)
            else y.add(S)
        }
        for (const E of y) {
          const S =
            typeof E == 'string'
              ? e._middleware.named[E] ||
                (await ((g = Rn[E]) == null
                  ? void 0
                  : g.call(Rn).then((x) => x.default || x)))
              : E
          if (!S) throw new Error(`Unknown route middleware: '${E}'.`)
          const C = await Jt(e, S, [w, v])
          if (
            !e.payload.serverRendered &&
            e.isHydrating &&
            (C === !1 || C instanceof Error)
          ) {
            const x =
              C ||
              is({ statusCode: 404, statusMessage: `Page Not Found: ${s}` })
            return await Jt(e, gn, [x]), !1
          }
          if (C || C === !1) return C
        }
      }),
      a.afterEach(async (w) => {
        delete e._processingMiddleware,
          !e.isHydrating && f.value && (await Jt(e, lm)),
          w.matched.length === 0 &&
            (await Jt(e, gn, [
              is({
                statusCode: 404,
                fatal: !1,
                statusMessage: `Page not found: ${w.fullPath}`,
              }),
            ]))
      }),
      e.hooks.hookOnce('app:created', async () => {
        try {
          await a.replace({ ...a.resolve(s), name: void 0, force: !0 })
        } catch (w) {
          await Jt(e, gn, [w])
        }
      }),
      { provide: { router: a } }
    )
  }),
  Ir = {
    default: () =>
      Mt(
        () => import('./default.9c73ae00.js'),
        [
          './default.9c73ae00.js',
          './_plugin-vue_export-helper.c27b6911.js',
          './default.74d01fdd.css',
        ],
        import.meta.url
      ).then((e) => e.default || e),
  },
  ib = Or(() => {
    const e = xe(),
      t = Ki()
    e.hooks.hook('app:mounted', () => {
      t.beforeEach(async (r) => {
        var i
        const n = (i = r == null ? void 0 : r.meta) == null ? void 0 : i.layout
        n && typeof Ir[n] == 'function' && (await Ir[n]())
      })
    }),
      e.hooks.hook('link:prefetch', (r) => {
        var s, a, c, u
        if (Wn(r)) return
        const n = t.resolve(r)
        if (!n) return
        const i = (s = n == null ? void 0 : n.meta) == null ? void 0 : s.layout
        let o = Array.isArray(
          (a = n == null ? void 0 : n.meta) == null ? void 0 : a.middleware
        )
          ? (c = n == null ? void 0 : n.meta) == null
            ? void 0
            : c.middleware
          : [(u = n == null ? void 0 : n.meta) == null ? void 0 : u.middleware]
        o = o.filter((l) => typeof l == 'string')
        for (const l of o) typeof Rn[l] == 'function' && Rn[l]()
        i && typeof Ir[i] == 'function' && Ir[i]()
      })
  })
var hs = function (e, t) {
  return (
    (hs =
      Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array &&
        function (r, n) {
          r.__proto__ = n
        }) ||
      function (r, n) {
        for (var i in n)
          Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i])
      }),
    hs(e, t)
  )
}
function ut(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError(
      'Class extends value ' + String(t) + ' is not a constructor or null'
    )
  hs(e, t)
  function r() {
    this.constructor = e
  }
  e.prototype =
    t === null ? Object.create(t) : ((r.prototype = t.prototype), new r())
}
var O = function () {
  return (
    (O =
      Object.assign ||
      function (t) {
        for (var r, n = 1, i = arguments.length; n < i; n++) {
          r = arguments[n]
          for (var o in r)
            Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o])
        }
        return t
      }),
    O.apply(this, arguments)
  )
}
function Sr(e, t) {
  var r = {}
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (r[n] = e[n])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
        (r[n[i]] = e[n[i]])
  return r
}
function Gt(e, t, r, n) {
  function i(o) {
    return o instanceof r
      ? o
      : new r(function (s) {
          s(o)
        })
  }
  return new (r || (r = Promise))(function (o, s) {
    function a(l) {
      try {
        u(n.next(l))
      } catch (h) {
        s(h)
      }
    }
    function c(l) {
      try {
        u(n.throw(l))
      } catch (h) {
        s(h)
      }
    }
    function u(l) {
      l.done ? o(l.value) : i(l.value).then(a, c)
    }
    u((n = n.apply(e, t || [])).next())
  })
}
function Xt(e, t) {
  var r = {
      label: 0,
      sent: function () {
        if (o[0] & 1) throw o[1]
        return o[1]
      },
      trys: [],
      ops: [],
    },
    n,
    i,
    o,
    s
  return (
    (s = { next: a(0), throw: a(1), return: a(2) }),
    typeof Symbol == 'function' &&
      (s[Symbol.iterator] = function () {
        return this
      }),
    s
  )
  function a(u) {
    return function (l) {
      return c([u, l])
    }
  }
  function c(u) {
    if (n) throw new TypeError('Generator is already executing.')
    for (; s && ((s = 0), u[0] && (r = 0)), r; )
      try {
        if (
          ((n = 1),
          i &&
            (o =
              u[0] & 2
                ? i.return
                : u[0]
                ? i.throw || ((o = i.return) && o.call(i), 0)
                : i.next) &&
            !(o = o.call(i, u[1])).done)
        )
          return o
        switch (((i = 0), o && (u = [u[0] & 2, o.value]), u[0])) {
          case 0:
          case 1:
            o = u
            break
          case 4:
            return r.label++, { value: u[1], done: !1 }
          case 5:
            r.label++, (i = u[1]), (u = [0])
            continue
          case 7:
            ;(u = r.ops.pop()), r.trys.pop()
            continue
          default:
            if (
              ((o = r.trys),
              !(o = o.length > 0 && o[o.length - 1]) &&
                (u[0] === 6 || u[0] === 2))
            ) {
              r = 0
              continue
            }
            if (u[0] === 3 && (!o || (u[1] > o[0] && u[1] < o[3]))) {
              r.label = u[1]
              break
            }
            if (u[0] === 6 && r.label < o[1]) {
              ;(r.label = o[1]), (o = u)
              break
            }
            if (o && r.label < o[2]) {
              ;(r.label = o[2]), r.ops.push(u)
              break
            }
            o[2] && r.ops.pop(), r.trys.pop()
            continue
        }
        u = t.call(e, r)
      } catch (l) {
        ;(u = [6, l]), (i = 0)
      } finally {
        n = o = 0
      }
    if (u[0] & 5) throw u[1]
    return { value: u[0] ? u[1] : void 0, done: !0 }
  }
}
function xi(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = t.length, o; n < i; n++)
      (o || !(n in t)) &&
        (o || (o = Array.prototype.slice.call(t, 0, n)), (o[n] = t[n]))
  return e.concat(o || Array.prototype.slice.call(t))
}
var Oo = 'Invariant Violation',
  zc = Object.setPrototypeOf,
  ob =
    zc === void 0
      ? function (e, t) {
          return (e.__proto__ = t), e
        }
      : zc,
  ze = (function (e) {
    ut(t, e)
    function t(r) {
      r === void 0 && (r = Oo)
      var n =
        e.call(
          this,
          typeof r == 'number'
            ? Oo +
                ': ' +
                r +
                ' (see https://github.com/apollographql/invariant-packages)'
            : r
        ) || this
      return (n.framesToPop = 1), (n.name = Oo), ob(n, t.prototype), n
    }
    return t
  })(Error)
function fe(e, t) {
  if (!e) throw new ze(t)
}
var Ff = ['debug', 'log', 'warn', 'error', 'silent'],
  sb = Ff.indexOf('log')
function ai(e) {
  return function () {
    if (Ff.indexOf(e) >= sb) {
      var t = console[e] || console.log
      return t.apply(console, arguments)
    }
  }
}
;(function (e) {
  ;(e.debug = ai('debug')),
    (e.log = ai('log')),
    (e.warn = ai('warn')),
    (e.error = ai('error'))
})(fe || (fe = {}))
function ht(e) {
  try {
    return e()
  } catch {}
}
const Kc =
  ht(function () {
    return globalThis
  }) ||
  ht(function () {
    return window
  }) ||
  ht(function () {
    return self
  }) ||
  ht(function () {
    return global
  }) ||
  ht(function () {
    return ht.constructor('return this')()
  })
var Jc = '__',
  Yc = [Jc, Jc].join('DEV')
function ab() {
  try {
    return Boolean(!1)
  } catch {
    return (
      Object.defineProperty(Kc, Yc, {
        value:
          ht(function () {
            return 'production'
          }) !== 'production',
        enumerable: !1,
        configurable: !0,
        writable: !0,
      }),
      Kc[Yc]
    )
  }
}
const cb = ab()
function Zt(e) {
  try {
    return e()
  } catch {}
}
var ds =
    Zt(function () {
      return globalThis
    }) ||
    Zt(function () {
      return window
    }) ||
    Zt(function () {
      return self
    }) ||
    Zt(function () {
      return global
    }) ||
    Zt(function () {
      return Zt.constructor('return this')()
    }),
  ps = !1
function ub() {
  ds &&
    !Zt(function () {
      return 'production'
    }) &&
    !Zt(function () {
      return process
    }) &&
    (Object.defineProperty(ds, 'process', {
      value: { env: { NODE_ENV: 'production' } },
      configurable: !0,
      enumerable: !1,
      writable: !0,
    }),
    (ps = !0))
}
ub()
function Gc() {
  ps && (delete ds.process, (ps = !1))
}
function di(e, t) {
  if (!Boolean(e)) throw new Error(t)
}
const Df = {
    Name: [],
    Document: ['definitions'],
    OperationDefinition: [
      'name',
      'variableDefinitions',
      'directives',
      'selectionSet',
    ],
    VariableDefinition: ['variable', 'type', 'defaultValue', 'directives'],
    Variable: ['name'],
    SelectionSet: ['selections'],
    Field: ['alias', 'name', 'arguments', 'directives', 'selectionSet'],
    Argument: ['name', 'value'],
    FragmentSpread: ['name', 'directives'],
    InlineFragment: ['typeCondition', 'directives', 'selectionSet'],
    FragmentDefinition: [
      'name',
      'variableDefinitions',
      'typeCondition',
      'directives',
      'selectionSet',
    ],
    IntValue: [],
    FloatValue: [],
    StringValue: [],
    BooleanValue: [],
    NullValue: [],
    EnumValue: [],
    ListValue: ['values'],
    ObjectValue: ['fields'],
    ObjectField: ['name', 'value'],
    Directive: ['name', 'arguments'],
    NamedType: ['name'],
    ListType: ['type'],
    NonNullType: ['type'],
    SchemaDefinition: ['description', 'directives', 'operationTypes'],
    OperationTypeDefinition: ['type'],
    ScalarTypeDefinition: ['description', 'name', 'directives'],
    ObjectTypeDefinition: [
      'description',
      'name',
      'interfaces',
      'directives',
      'fields',
    ],
    FieldDefinition: ['description', 'name', 'arguments', 'type', 'directives'],
    InputValueDefinition: [
      'description',
      'name',
      'type',
      'defaultValue',
      'directives',
    ],
    InterfaceTypeDefinition: [
      'description',
      'name',
      'interfaces',
      'directives',
      'fields',
    ],
    UnionTypeDefinition: ['description', 'name', 'directives', 'types'],
    EnumTypeDefinition: ['description', 'name', 'directives', 'values'],
    EnumValueDefinition: ['description', 'name', 'directives'],
    InputObjectTypeDefinition: ['description', 'name', 'directives', 'fields'],
    DirectiveDefinition: ['description', 'name', 'arguments', 'locations'],
    SchemaExtension: ['directives', 'operationTypes'],
    ScalarTypeExtension: ['name', 'directives'],
    ObjectTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
    InterfaceTypeExtension: ['name', 'interfaces', 'directives', 'fields'],
    UnionTypeExtension: ['name', 'directives', 'types'],
    EnumTypeExtension: ['name', 'directives', 'values'],
    InputObjectTypeExtension: ['name', 'directives', 'fields'],
  },
  lb = new Set(Object.keys(Df))
function Xc(e) {
  const t = e == null ? void 0 : e.kind
  return typeof t == 'string' && lb.has(t)
}
var Zc
;(function (e) {
  ;(e.QUERY = 'query'),
    (e.MUTATION = 'mutation'),
    (e.SUBSCRIPTION = 'subscription')
})(Zc || (Zc = {}))
var qn
;(function (e) {
  ;(e.NAME = 'Name'),
    (e.DOCUMENT = 'Document'),
    (e.OPERATION_DEFINITION = 'OperationDefinition'),
    (e.VARIABLE_DEFINITION = 'VariableDefinition'),
    (e.SELECTION_SET = 'SelectionSet'),
    (e.FIELD = 'Field'),
    (e.ARGUMENT = 'Argument'),
    (e.FRAGMENT_SPREAD = 'FragmentSpread'),
    (e.INLINE_FRAGMENT = 'InlineFragment'),
    (e.FRAGMENT_DEFINITION = 'FragmentDefinition'),
    (e.VARIABLE = 'Variable'),
    (e.INT = 'IntValue'),
    (e.FLOAT = 'FloatValue'),
    (e.STRING = 'StringValue'),
    (e.BOOLEAN = 'BooleanValue'),
    (e.NULL = 'NullValue'),
    (e.ENUM = 'EnumValue'),
    (e.LIST = 'ListValue'),
    (e.OBJECT = 'ObjectValue'),
    (e.OBJECT_FIELD = 'ObjectField'),
    (e.DIRECTIVE = 'Directive'),
    (e.NAMED_TYPE = 'NamedType'),
    (e.LIST_TYPE = 'ListType'),
    (e.NON_NULL_TYPE = 'NonNullType'),
    (e.SCHEMA_DEFINITION = 'SchemaDefinition'),
    (e.OPERATION_TYPE_DEFINITION = 'OperationTypeDefinition'),
    (e.SCALAR_TYPE_DEFINITION = 'ScalarTypeDefinition'),
    (e.OBJECT_TYPE_DEFINITION = 'ObjectTypeDefinition'),
    (e.FIELD_DEFINITION = 'FieldDefinition'),
    (e.INPUT_VALUE_DEFINITION = 'InputValueDefinition'),
    (e.INTERFACE_TYPE_DEFINITION = 'InterfaceTypeDefinition'),
    (e.UNION_TYPE_DEFINITION = 'UnionTypeDefinition'),
    (e.ENUM_TYPE_DEFINITION = 'EnumTypeDefinition'),
    (e.ENUM_VALUE_DEFINITION = 'EnumValueDefinition'),
    (e.INPUT_OBJECT_TYPE_DEFINITION = 'InputObjectTypeDefinition'),
    (e.DIRECTIVE_DEFINITION = 'DirectiveDefinition'),
    (e.SCHEMA_EXTENSION = 'SchemaExtension'),
    (e.SCALAR_TYPE_EXTENSION = 'ScalarTypeExtension'),
    (e.OBJECT_TYPE_EXTENSION = 'ObjectTypeExtension'),
    (e.INTERFACE_TYPE_EXTENSION = 'InterfaceTypeExtension'),
    (e.UNION_TYPE_EXTENSION = 'UnionTypeExtension'),
    (e.ENUM_TYPE_EXTENSION = 'EnumTypeExtension'),
    (e.INPUT_OBJECT_TYPE_EXTENSION = 'InputObjectTypeExtension')
})(qn || (qn = {}))
function eu(e) {
  return e === 9 || e === 32
}
function fb(e, t) {
  const r = e.replace(/"""/g, '\\"""'),
    n = r.split(/\r\n|[\n\r]/g),
    i = n.length === 1,
    o =
      n.length > 1 &&
      n.slice(1).every((d) => d.length === 0 || eu(d.charCodeAt(0))),
    s = r.endsWith('\\"""'),
    a = e.endsWith('"') && !s,
    c = e.endsWith('\\'),
    u = a || c,
    l = !(t != null && t.minimize) && (!i || e.length > 70 || u || o || s)
  let h = ''
  const f = i && eu(e.charCodeAt(0))
  return (
    ((l && !f) || o) &&
      (h += `
`),
    (h += r),
    (l || u) &&
      (h += `
`),
    '"""' + h + '"""'
  )
}
const hb = 10,
  Mf = 2
function Nf(e) {
  return Yi(e, [])
}
function Yi(e, t) {
  switch (typeof e) {
    case 'string':
      return JSON.stringify(e)
    case 'function':
      return e.name ? `[function ${e.name}]` : '[function]'
    case 'object':
      return db(e, t)
    default:
      return String(e)
  }
}
function db(e, t) {
  if (e === null) return 'null'
  if (t.includes(e)) return '[Circular]'
  const r = [...t, e]
  if (pb(e)) {
    const n = e.toJSON()
    if (n !== e) return typeof n == 'string' ? n : Yi(n, r)
  } else if (Array.isArray(e)) return mb(e, r)
  return yb(e, r)
}
function pb(e) {
  return typeof e.toJSON == 'function'
}
function yb(e, t) {
  const r = Object.entries(e)
  return r.length === 0
    ? '{}'
    : t.length > Mf
    ? '[' + vb(e) + ']'
    : '{ ' + r.map(([i, o]) => i + ': ' + Yi(o, t)).join(', ') + ' }'
}
function mb(e, t) {
  if (e.length === 0) return '[]'
  if (t.length > Mf) return '[Array]'
  const r = Math.min(hb, e.length),
    n = e.length - r,
    i = []
  for (let o = 0; o < r; ++o) i.push(Yi(e[o], t))
  return (
    n === 1
      ? i.push('... 1 more item')
      : n > 1 && i.push(`... ${n} more items`),
    '[' + i.join(', ') + ']'
  )
}
function vb(e) {
  const t = Object.prototype.toString
    .call(e)
    .replace(/^\[object /, '')
    .replace(/]$/, '')
  if (t === 'Object' && typeof e.constructor == 'function') {
    const r = e.constructor.name
    if (typeof r == 'string' && r !== '') return r
  }
  return t
}
class gb {
  constructor(t, r = 'GraphQL request', n = { line: 1, column: 1 }) {
    typeof t == 'string' ||
      di(!1, `Body must be a string. Received: ${Nf(t)}.`),
      (this.body = t),
      (this.name = r),
      (this.locationOffset = n),
      this.locationOffset.line > 0 ||
        di(!1, 'line in locationOffset is 1-indexed and must be positive.'),
      this.locationOffset.column > 0 ||
        di(!1, 'column in locationOffset is 1-indexed and must be positive.')
  }
  get [Symbol.toStringTag]() {
    return 'Source'
  }
}
function bb(e) {
  return `"${e.replace(wb, Eb)}"`
}
const wb = /[\x00-\x1f\x22\x5c\x7f-\x9f]/g
function Eb(e) {
  return _b[e.charCodeAt(0)]
}
const _b = [
    '\\u0000',
    '\\u0001',
    '\\u0002',
    '\\u0003',
    '\\u0004',
    '\\u0005',
    '\\u0006',
    '\\u0007',
    '\\b',
    '\\t',
    '\\n',
    '\\u000B',
    '\\f',
    '\\r',
    '\\u000E',
    '\\u000F',
    '\\u0010',
    '\\u0011',
    '\\u0012',
    '\\u0013',
    '\\u0014',
    '\\u0015',
    '\\u0016',
    '\\u0017',
    '\\u0018',
    '\\u0019',
    '\\u001A',
    '\\u001B',
    '\\u001C',
    '\\u001D',
    '\\u001E',
    '\\u001F',
    '',
    '',
    '\\"',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '\\\\',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '\\u007F',
    '\\u0080',
    '\\u0081',
    '\\u0082',
    '\\u0083',
    '\\u0084',
    '\\u0085',
    '\\u0086',
    '\\u0087',
    '\\u0088',
    '\\u0089',
    '\\u008A',
    '\\u008B',
    '\\u008C',
    '\\u008D',
    '\\u008E',
    '\\u008F',
    '\\u0090',
    '\\u0091',
    '\\u0092',
    '\\u0093',
    '\\u0094',
    '\\u0095',
    '\\u0096',
    '\\u0097',
    '\\u0098',
    '\\u0099',
    '\\u009A',
    '\\u009B',
    '\\u009C',
    '\\u009D',
    '\\u009E',
    '\\u009F',
  ],
  pa = Object.freeze({})
function At(e, t, r = Df) {
  const n = new Map()
  for (const v of Object.values(qn)) n.set(v, Sb(t, v))
  let i,
    o = Array.isArray(e),
    s = [e],
    a = -1,
    c = [],
    u = e,
    l,
    h
  const f = [],
    d = []
  do {
    a++
    const v = a === s.length,
      y = v && c.length !== 0
    if (v) {
      if (
        ((l = d.length === 0 ? void 0 : f[f.length - 1]),
        (u = h),
        (h = d.pop()),
        y)
      )
        if (o) {
          u = u.slice()
          let E = 0
          for (const [S, C] of c) {
            const x = S - E
            C === null ? (u.splice(x, 1), E++) : (u[x] = C)
          }
        } else {
          u = Object.defineProperties({}, Object.getOwnPropertyDescriptors(u))
          for (const [E, S] of c) u[E] = S
        }
      ;(a = i.index), (s = i.keys), (c = i.edits), (o = i.inArray), (i = i.prev)
    } else if (h) {
      if (((l = o ? a : s[a]), (u = h[l]), u == null)) continue
      f.push(l)
    }
    let g
    if (!Array.isArray(u)) {
      var p, b
      Xc(u) || di(!1, `Invalid AST Node: ${Nf(u)}.`)
      const E = v
        ? (p = n.get(u.kind)) === null || p === void 0
          ? void 0
          : p.leave
        : (b = n.get(u.kind)) === null || b === void 0
        ? void 0
        : b.enter
      if (((g = E == null ? void 0 : E.call(t, u, l, h, f, d)), g === pa)) break
      if (g === !1) {
        if (!v) {
          f.pop()
          continue
        }
      } else if (g !== void 0 && (c.push([l, g]), !v))
        if (Xc(g)) u = g
        else {
          f.pop()
          continue
        }
    }
    if ((g === void 0 && y && c.push([l, u]), v)) f.pop()
    else {
      var w
      ;(i = { inArray: o, index: a, keys: s, edits: c, prev: i }),
        (o = Array.isArray(u)),
        (s = o ? u : (w = r[u.kind]) !== null && w !== void 0 ? w : []),
        (a = -1),
        (c = []),
        h && d.push(h),
        (h = u)
    }
  } while (i !== void 0)
  return c.length !== 0 ? c[c.length - 1][1] : e
}
function Sb(e, t) {
  const r = e[t]
  return typeof r == 'object'
    ? r
    : typeof r == 'function'
    ? { enter: r, leave: void 0 }
    : { enter: e.enter, leave: e.leave }
}
function ya(e) {
  return At(e, kb)
}
const Ob = 80,
  kb = {
    Name: { leave: (e) => e.value },
    Variable: { leave: (e) => '$' + e.name },
    Document: {
      leave: (e) =>
        U(
          e.definitions,
          `

`
        ),
    },
    OperationDefinition: {
      leave(e) {
        const t = se('(', U(e.variableDefinitions, ', '), ')'),
          r = U([e.operation, U([e.name, t]), U(e.directives, ' ')], ' ')
        return (r === 'query' ? '' : r + ' ') + e.selectionSet
      },
    },
    VariableDefinition: {
      leave: ({ variable: e, type: t, defaultValue: r, directives: n }) =>
        e + ': ' + t + se(' = ', r) + se(' ', U(n, ' ')),
    },
    SelectionSet: { leave: ({ selections: e }) => wt(e) },
    Field: {
      leave({
        alias: e,
        name: t,
        arguments: r,
        directives: n,
        selectionSet: i,
      }) {
        const o = se('', e, ': ') + t
        let s = o + se('(', U(r, ', '), ')')
        return (
          s.length > Ob &&
            (s =
              o +
              se(
                `(
`,
                pi(
                  U(
                    r,
                    `
`
                  )
                ),
                `
)`
              )),
          U([s, U(n, ' '), i], ' ')
        )
      },
    },
    Argument: { leave: ({ name: e, value: t }) => e + ': ' + t },
    FragmentSpread: {
      leave: ({ name: e, directives: t }) => '...' + e + se(' ', U(t, ' ')),
    },
    InlineFragment: {
      leave: ({ typeCondition: e, directives: t, selectionSet: r }) =>
        U(['...', se('on ', e), U(t, ' '), r], ' '),
    },
    FragmentDefinition: {
      leave: ({
        name: e,
        typeCondition: t,
        variableDefinitions: r,
        directives: n,
        selectionSet: i,
      }) =>
        `fragment ${e}${se('(', U(r, ', '), ')')} on ${t} ${se(
          '',
          U(n, ' '),
          ' '
        )}` + i,
    },
    IntValue: { leave: ({ value: e }) => e },
    FloatValue: { leave: ({ value: e }) => e },
    StringValue: { leave: ({ value: e, block: t }) => (t ? fb(e) : bb(e)) },
    BooleanValue: { leave: ({ value: e }) => (e ? 'true' : 'false') },
    NullValue: { leave: () => 'null' },
    EnumValue: { leave: ({ value: e }) => e },
    ListValue: { leave: ({ values: e }) => '[' + U(e, ', ') + ']' },
    ObjectValue: { leave: ({ fields: e }) => '{' + U(e, ', ') + '}' },
    ObjectField: { leave: ({ name: e, value: t }) => e + ': ' + t },
    Directive: {
      leave: ({ name: e, arguments: t }) => '@' + e + se('(', U(t, ', '), ')'),
    },
    NamedType: { leave: ({ name: e }) => e },
    ListType: { leave: ({ type: e }) => '[' + e + ']' },
    NonNullType: { leave: ({ type: e }) => e + '!' },
    SchemaDefinition: {
      leave: ({ description: e, directives: t, operationTypes: r }) =>
        se(
          '',
          e,
          `
`
        ) + U(['schema', U(t, ' '), wt(r)], ' '),
    },
    OperationTypeDefinition: {
      leave: ({ operation: e, type: t }) => e + ': ' + t,
    },
    ScalarTypeDefinition: {
      leave: ({ description: e, name: t, directives: r }) =>
        se(
          '',
          e,
          `
`
        ) + U(['scalar', t, U(r, ' ')], ' '),
    },
    ObjectTypeDefinition: {
      leave: ({
        description: e,
        name: t,
        interfaces: r,
        directives: n,
        fields: i,
      }) =>
        se(
          '',
          e,
          `
`
        ) +
        U(['type', t, se('implements ', U(r, ' & ')), U(n, ' '), wt(i)], ' '),
    },
    FieldDefinition: {
      leave: ({
        description: e,
        name: t,
        arguments: r,
        type: n,
        directives: i,
      }) =>
        se(
          '',
          e,
          `
`
        ) +
        t +
        (tu(r)
          ? se(
              `(
`,
              pi(
                U(
                  r,
                  `
`
                )
              ),
              `
)`
            )
          : se('(', U(r, ', '), ')')) +
        ': ' +
        n +
        se(' ', U(i, ' ')),
    },
    InputValueDefinition: {
      leave: ({
        description: e,
        name: t,
        type: r,
        defaultValue: n,
        directives: i,
      }) =>
        se(
          '',
          e,
          `
`
        ) + U([t + ': ' + r, se('= ', n), U(i, ' ')], ' '),
    },
    InterfaceTypeDefinition: {
      leave: ({
        description: e,
        name: t,
        interfaces: r,
        directives: n,
        fields: i,
      }) =>
        se(
          '',
          e,
          `
`
        ) +
        U(
          ['interface', t, se('implements ', U(r, ' & ')), U(n, ' '), wt(i)],
          ' '
        ),
    },
    UnionTypeDefinition: {
      leave: ({ description: e, name: t, directives: r, types: n }) =>
        se(
          '',
          e,
          `
`
        ) + U(['union', t, U(r, ' '), se('= ', U(n, ' | '))], ' '),
    },
    EnumTypeDefinition: {
      leave: ({ description: e, name: t, directives: r, values: n }) =>
        se(
          '',
          e,
          `
`
        ) + U(['enum', t, U(r, ' '), wt(n)], ' '),
    },
    EnumValueDefinition: {
      leave: ({ description: e, name: t, directives: r }) =>
        se(
          '',
          e,
          `
`
        ) + U([t, U(r, ' ')], ' '),
    },
    InputObjectTypeDefinition: {
      leave: ({ description: e, name: t, directives: r, fields: n }) =>
        se(
          '',
          e,
          `
`
        ) + U(['input', t, U(r, ' '), wt(n)], ' '),
    },
    DirectiveDefinition: {
      leave: ({
        description: e,
        name: t,
        arguments: r,
        repeatable: n,
        locations: i,
      }) =>
        se(
          '',
          e,
          `
`
        ) +
        'directive @' +
        t +
        (tu(r)
          ? se(
              `(
`,
              pi(
                U(
                  r,
                  `
`
                )
              ),
              `
)`
            )
          : se('(', U(r, ', '), ')')) +
        (n ? ' repeatable' : '') +
        ' on ' +
        U(i, ' | '),
    },
    SchemaExtension: {
      leave: ({ directives: e, operationTypes: t }) =>
        U(['extend schema', U(e, ' '), wt(t)], ' '),
    },
    ScalarTypeExtension: {
      leave: ({ name: e, directives: t }) =>
        U(['extend scalar', e, U(t, ' ')], ' '),
    },
    ObjectTypeExtension: {
      leave: ({ name: e, interfaces: t, directives: r, fields: n }) =>
        U(
          ['extend type', e, se('implements ', U(t, ' & ')), U(r, ' '), wt(n)],
          ' '
        ),
    },
    InterfaceTypeExtension: {
      leave: ({ name: e, interfaces: t, directives: r, fields: n }) =>
        U(
          [
            'extend interface',
            e,
            se('implements ', U(t, ' & ')),
            U(r, ' '),
            wt(n),
          ],
          ' '
        ),
    },
    UnionTypeExtension: {
      leave: ({ name: e, directives: t, types: r }) =>
        U(['extend union', e, U(t, ' '), se('= ', U(r, ' | '))], ' '),
    },
    EnumTypeExtension: {
      leave: ({ name: e, directives: t, values: r }) =>
        U(['extend enum', e, U(t, ' '), wt(r)], ' '),
    },
    InputObjectTypeExtension: {
      leave: ({ name: e, directives: t, fields: r }) =>
        U(['extend input', e, U(t, ' '), wt(r)], ' '),
    },
  }
function U(e, t = '') {
  var r
  return (r = e == null ? void 0 : e.filter((n) => n).join(t)) !== null &&
    r !== void 0
    ? r
    : ''
}
function wt(e) {
  return se(
    `{
`,
    pi(
      U(
        e,
        `
`
      )
    ),
    `
}`
  )
}
function se(e, t, r = '') {
  return t != null && t !== '' ? e + t + r : ''
}
function pi(e) {
  return se(
    '  ',
    e.replace(
      /\n/g,
      `
  `
    )
  )
}
function tu(e) {
  var t
  return (t =
    e == null
      ? void 0
      : e.some((r) =>
          r.includes(`
`)
        )) !== null && t !== void 0
    ? t
    : !1
}
function Tb() {
  return Gc()
}
function Cb() {
  fe(typeof cb == 'boolean', 38)
}
Tb()
Cb()
function Gi(e, t) {
  var r = e.directives
  return !r || !r.length
    ? !0
    : xb(r).every(function (n) {
        var i = n.directive,
          o = n.ifArgument,
          s = !1
        return (
          o.value.kind === 'Variable'
            ? ((s = t && t[o.value.name.value]), fe(s !== void 0, 39))
            : (s = o.value.value),
          i.name.value === 'skip' ? !s : s
        )
      })
}
function ma(e, t, r) {
  var n = new Set(e),
    i = n.size
  return (
    At(t, {
      Directive: function (o) {
        if (n.delete(o.name.value) && (!r || !n.size)) return pa
      },
    }),
    r ? !n.size : n.size < i
  )
}
function Rb(e) {
  return e && ma(['client', 'export'], e, !0)
}
function Pb(e) {
  var t = e.name.value
  return t === 'skip' || t === 'include'
}
function xb(e) {
  var t = []
  return (
    e &&
      e.length &&
      e.forEach(function (r) {
        if (Pb(r)) {
          var n = r.arguments
          r.name.value, fe(n && n.length === 1, 40)
          var i = n[0]
          fe(i.name && i.name.value === 'if', 41)
          var o = i.value
          fe(o && (o.kind === 'Variable' || o.kind === 'BooleanValue'), 42),
            t.push({ directive: r, ifArgument: i })
        }
      }),
    t
  )
}
function Ab(e, t) {
  var r = t,
    n = []
  e.definitions.forEach(function (o) {
    if (o.kind === 'OperationDefinition') throw new ze(43)
    o.kind === 'FragmentDefinition' && n.push(o)
  }),
    typeof r > 'u' && (fe(n.length === 1, 44), (r = n[0].name.value))
  var i = O(O({}, e), {
    definitions: xi(
      [
        {
          kind: 'OperationDefinition',
          operation: 'query',
          selectionSet: {
            kind: 'SelectionSet',
            selections: [
              { kind: 'FragmentSpread', name: { kind: 'Name', value: r } },
            ],
          },
        },
      ],
      e.definitions,
      !0
    ),
  })
  return i
}
function va(e) {
  e === void 0 && (e = [])
  var t = {}
  return (
    e.forEach(function (r) {
      t[r.name.value] = r
    }),
    t
  )
}
function ga(e, t) {
  switch (e.kind) {
    case 'InlineFragment':
      return e
    case 'FragmentSpread': {
      var r = e.name.value
      if (typeof t == 'function') return t(r)
      var n = t && t[r]
      return fe(n, 45), n || null
    }
    default:
      return null
  }
}
function Re(e) {
  return e !== null && typeof e == 'object'
}
function $r(e) {
  return { __ref: String(e) }
}
function me(e) {
  return Boolean(e && typeof e == 'object' && typeof e.__ref == 'string')
}
function Ib(e) {
  return Re(e) && e.kind === 'Document' && Array.isArray(e.definitions)
}
function Fb(e) {
  return e.kind === 'StringValue'
}
function Db(e) {
  return e.kind === 'BooleanValue'
}
function Mb(e) {
  return e.kind === 'IntValue'
}
function Nb(e) {
  return e.kind === 'FloatValue'
}
function jb(e) {
  return e.kind === 'Variable'
}
function Lb(e) {
  return e.kind === 'ObjectValue'
}
function qb(e) {
  return e.kind === 'ListValue'
}
function Bb(e) {
  return e.kind === 'EnumValue'
}
function $b(e) {
  return e.kind === 'NullValue'
}
function Gr(e, t, r, n) {
  if (Mb(r) || Nb(r)) e[t.value] = Number(r.value)
  else if (Db(r) || Fb(r)) e[t.value] = r.value
  else if (Lb(r)) {
    var i = {}
    r.fields.map(function (s) {
      return Gr(i, s.name, s.value, n)
    }),
      (e[t.value] = i)
  } else if (jb(r)) {
    var o = (n || {})[r.name.value]
    e[t.value] = o
  } else if (qb(r))
    e[t.value] = r.values.map(function (s) {
      var a = {}
      return Gr(a, t, s, n), a[t.value]
    })
  else if (Bb(r)) e[t.value] = r.value
  else if ($b(r)) e[t.value] = null
  else throw new ze(54)
}
function Hb(e, t) {
  var r = null
  e.directives &&
    ((r = {}),
    e.directives.forEach(function (i) {
      ;(r[i.name.value] = {}),
        i.arguments &&
          i.arguments.forEach(function (o) {
            var s = o.name,
              a = o.value
            return Gr(r[i.name.value], s, a, t)
          })
    }))
  var n = null
  return (
    e.arguments &&
      e.arguments.length &&
      ((n = {}),
      e.arguments.forEach(function (i) {
        var o = i.name,
          s = i.value
        return Gr(n, o, s, t)
      })),
    ba(e.name.value, n, r)
  )
}
var Qb = ['connection', 'include', 'skip', 'client', 'rest', 'export'],
  ba = Object.assign(
    function (e, t, r) {
      if (t && r && r.connection && r.connection.key)
        if (r.connection.filter && r.connection.filter.length > 0) {
          var n = r.connection.filter ? r.connection.filter : []
          n.sort()
          var i = {}
          return (
            n.forEach(function (a) {
              i[a] = t[a]
            }),
            ''.concat(r.connection.key, '(').concat(fn(i), ')')
          )
        } else return r.connection.key
      var o = e
      if (t) {
        var s = fn(t)
        o += '('.concat(s, ')')
      }
      return (
        r &&
          Object.keys(r).forEach(function (a) {
            Qb.indexOf(a) === -1 &&
              (r[a] && Object.keys(r[a]).length
                ? (o += '@'.concat(a, '(').concat(fn(r[a]), ')'))
                : (o += '@'.concat(a)))
          }),
        o
      )
    },
    {
      setStringify: function (e) {
        var t = fn
        return (fn = e), t
      },
    }
  ),
  fn = function (t) {
    return JSON.stringify(t, Ub)
  }
function Ub(e, t) {
  return (
    Re(t) &&
      !Array.isArray(t) &&
      (t = Object.keys(t)
        .sort()
        .reduce(function (r, n) {
          return (r[n] = t[n]), r
        }, {})),
    t
  )
}
function Xi(e, t) {
  if (e.arguments && e.arguments.length) {
    var r = {}
    return (
      e.arguments.forEach(function (n) {
        var i = n.name,
          o = n.value
        return Gr(r, i, o, t)
      }),
      r
    )
  }
  return null
}
function Xr(e) {
  return e.alias ? e.alias.value : e.name.value
}
function ys(e, t, r) {
  if (typeof e.__typename == 'string') return e.__typename
  for (var n = 0, i = t.selections; n < i.length; n++) {
    var o = i[n]
    if (Bt(o)) {
      if (o.name.value === '__typename') return e[Xr(o)]
    } else {
      var s = ys(e, ga(o, r).selectionSet, r)
      if (typeof s == 'string') return s
    }
  }
}
function Bt(e) {
  return e.kind === 'Field'
}
function jf(e) {
  return e.kind === 'InlineFragment'
}
function Zi(e) {
  fe(e && e.kind === 'Document', 46)
  var t = e.definitions
    .filter(function (r) {
      return r.kind !== 'FragmentDefinition'
    })
    .map(function (r) {
      if (r.kind !== 'OperationDefinition') throw new ze(47)
      return r
    })
  return fe(t.length <= 1, 48), e
}
function zn(e) {
  return (
    Zi(e),
    e.definitions.filter(function (t) {
      return t.kind === 'OperationDefinition'
    })[0]
  )
}
function ms(e) {
  return (
    e.definitions
      .filter(function (t) {
        return t.kind === 'OperationDefinition' && t.name
      })
      .map(function (t) {
        return t.name.value
      })[0] || null
  )
}
function wa(e) {
  return e.definitions.filter(function (t) {
    return t.kind === 'FragmentDefinition'
  })
}
function Vb(e) {
  var t = zn(e)
  return fe(t && t.operation === 'query', 49), t
}
function Wb(e) {
  fe(e.kind === 'Document', 50), fe(e.definitions.length <= 1, 51)
  var t = e.definitions[0]
  return fe(t.kind === 'FragmentDefinition', 52), t
}
function eo(e) {
  Zi(e)
  for (var t, r = 0, n = e.definitions; r < n.length; r++) {
    var i = n[r]
    if (i.kind === 'OperationDefinition') {
      var o = i.operation
      if (o === 'query' || o === 'mutation' || o === 'subscription') return i
    }
    i.kind === 'FragmentDefinition' && !t && (t = i)
  }
  if (t) return t
  throw new ze(53)
}
function Ea(e) {
  var t = Object.create(null),
    r = e && e.variableDefinitions
  return (
    r &&
      r.length &&
      r.forEach(function (n) {
        n.defaultValue && Gr(t, n.variable.name, n.defaultValue)
      }),
    t
  )
}
function ru(e, t, r) {
  var n = 0
  return (
    e.forEach(function (i, o) {
      t.call(this, i, o, e) && (e[n++] = i)
    }, r),
    (e.length = n),
    e
  )
}
var nu = { kind: 'Field', name: { kind: 'Name', value: '__typename' } }
function Lf(e, t) {
  return (
    !e ||
    e.selectionSet.selections.every(function (r) {
      return r.kind === 'FragmentSpread' && Lf(t[r.name.value], t)
    })
  )
}
function _a(e) {
  return Lf(zn(e) || Wb(e), va(wa(e))) ? null : e
}
function iu(e) {
  return function (r) {
    return e.some(function (n) {
      return (n.name && n.name === r.name.value) || (n.test && n.test(r))
    })
  }
}
function qf(e, t) {
  var r = Object.create(null),
    n = [],
    i = Object.create(null),
    o = [],
    s = _a(
      At(t, {
        Variable: {
          enter: function (a, c, u) {
            u.kind !== 'VariableDefinition' && (r[a.name.value] = !0)
          },
        },
        Field: {
          enter: function (a) {
            if (e && a.directives) {
              var c = e.some(function (u) {
                return u.remove
              })
              if (c && a.directives && a.directives.some(iu(e)))
                return (
                  a.arguments &&
                    a.arguments.forEach(function (u) {
                      u.value.kind === 'Variable' &&
                        n.push({ name: u.value.name.value })
                    }),
                  a.selectionSet &&
                    $f(a.selectionSet).forEach(function (u) {
                      o.push({ name: u.name.value })
                    }),
                  null
                )
            }
          },
        },
        FragmentSpread: {
          enter: function (a) {
            i[a.name.value] = !0
          },
        },
        Directive: {
          enter: function (a) {
            if (iu(e)(a)) return null
          },
        },
      })
    )
  return (
    s &&
      ru(n, function (a) {
        return !!a.name && !r[a.name]
      }).length &&
      (s = Yb(n, s)),
    s &&
      ru(o, function (a) {
        return !!a.name && !i[a.name]
      }).length &&
      (s = Gb(o, s)),
    s
  )
}
var Bf = Object.assign(
    function (e) {
      return At(e, {
        SelectionSet: {
          enter: function (t, r, n) {
            if (!(n && n.kind === 'OperationDefinition')) {
              var i = t.selections
              if (i) {
                var o = i.some(function (a) {
                  return (
                    Bt(a) &&
                    (a.name.value === '__typename' ||
                      a.name.value.lastIndexOf('__', 0) === 0)
                  )
                })
                if (!o) {
                  var s = n
                  if (
                    !(
                      Bt(s) &&
                      s.directives &&
                      s.directives.some(function (a) {
                        return a.name.value === 'export'
                      })
                    )
                  )
                    return O(O({}, t), {
                      selections: xi(xi([], i, !0), [nu], !1),
                    })
                }
              }
            }
          },
        },
      })
    },
    {
      added: function (e) {
        return e === nu
      },
    }
  ),
  zb = {
    test: function (e) {
      var t = e.name.value === 'connection'
      return (
        t &&
          (!e.arguments ||
            e.arguments.some(function (r) {
              return r.name.value === 'key'
            })),
        t
      )
    },
  }
function Kb(e) {
  return qf([zb], Zi(e))
}
function Jb(e) {
  return function (r) {
    return e.some(function (n) {
      return (
        r.value &&
        r.value.kind === 'Variable' &&
        r.value.name &&
        (n.name === r.value.name.value || (n.test && n.test(r)))
      )
    })
  }
}
function Yb(e, t) {
  var r = Jb(e)
  return _a(
    At(t, {
      OperationDefinition: {
        enter: function (n) {
          return O(O({}, n), {
            variableDefinitions: n.variableDefinitions
              ? n.variableDefinitions.filter(function (i) {
                  return !e.some(function (o) {
                    return o.name === i.variable.name.value
                  })
                })
              : [],
          })
        },
      },
      Field: {
        enter: function (n) {
          var i = e.some(function (s) {
            return s.remove
          })
          if (i) {
            var o = 0
            if (
              (n.arguments &&
                n.arguments.forEach(function (s) {
                  r(s) && (o += 1)
                }),
              o === 1)
            )
              return null
          }
        },
      },
      Argument: {
        enter: function (n) {
          if (r(n)) return null
        },
      },
    })
  )
}
function Gb(e, t) {
  function r(n) {
    if (
      e.some(function (i) {
        return i.name === n.name.value
      })
    )
      return null
  }
  return _a(
    At(t, { FragmentSpread: { enter: r }, FragmentDefinition: { enter: r } })
  )
}
function $f(e) {
  var t = []
  return (
    e.selections.forEach(function (r) {
      ;(Bt(r) || jf(r)) && r.selectionSet
        ? $f(r.selectionSet).forEach(function (n) {
            return t.push(n)
          })
        : r.kind === 'FragmentSpread' && t.push(r)
    }),
    t
  )
}
function Xb(e) {
  var t = eo(e),
    r = t.operation
  if (r === 'query') return e
  var n = At(e, {
    OperationDefinition: {
      enter: function (i) {
        return O(O({}, i), { operation: 'query' })
      },
    },
  })
  return n
}
function Zb(e) {
  Zi(e)
  var t = qf(
    [
      {
        test: function (r) {
          return r.name.value === 'client'
        },
        remove: !0,
      },
    ],
    e
  )
  return (
    t &&
      (t = At(t, {
        FragmentDefinition: {
          enter: function (r) {
            if (r.selectionSet) {
              var n = r.selectionSet.selections.every(function (i) {
                return Bt(i) && i.name.value === '__typename'
              })
              if (n) return null
            }
          },
        },
      })),
    t
  )
}
var e0 = Object.prototype.hasOwnProperty
function ou() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
  return Sa(e)
}
function Sa(e) {
  var t = e[0] || {},
    r = e.length
  if (r > 1) for (var n = new sr(), i = 1; i < r; ++i) t = n.merge(t, e[i])
  return t
}
var t0 = function (e, t, r) {
    return this.merge(e[r], t[r])
  },
  sr = (function () {
    function e(t) {
      t === void 0 && (t = t0),
        (this.reconciler = t),
        (this.isObject = Re),
        (this.pastCopies = new Set())
    }
    return (
      (e.prototype.merge = function (t, r) {
        for (var n = this, i = [], o = 2; o < arguments.length; o++)
          i[o - 2] = arguments[o]
        return Re(r) && Re(t)
          ? (Object.keys(r).forEach(function (s) {
              if (e0.call(t, s)) {
                var a = t[s]
                if (r[s] !== a) {
                  var c = n.reconciler.apply(n, xi([t, r, s], i, !1))
                  c !== a && ((t = n.shallowCopyForMerge(t)), (t[s] = c))
                }
              } else (t = n.shallowCopyForMerge(t)), (t[s] = r[s])
            }),
            t)
          : r
      }),
      (e.prototype.shallowCopyForMerge = function (t) {
        return (
          Re(t) &&
            (this.pastCopies.has(t) ||
              (Array.isArray(t)
                ? (t = t.slice(0))
                : (t = O({ __proto__: Object.getPrototypeOf(t) }, t)),
              this.pastCopies.add(t))),
          t
        )
      }),
      e
    )
  })()
function r0(e, t) {
  var r = (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator']
  if (r) return (r = r.call(e)).next.bind(r)
  if (
    Array.isArray(e) ||
    (r = n0(e)) ||
    (t && e && typeof e.length == 'number')
  ) {
    r && (e = r)
    var n = 0
    return function () {
      return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] }
    }
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function n0(e, t) {
  if (e) {
    if (typeof e == 'string') return su(e, t)
    var r = Object.prototype.toString.call(e).slice(8, -1)
    if (
      (r === 'Object' && e.constructor && (r = e.constructor.name),
      r === 'Map' || r === 'Set')
    )
      return Array.from(e)
    if (r === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return su(e, t)
  }
}
function su(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r]
  return n
}
function au(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r]
    ;(n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      'value' in n && (n.writable = !0),
      Object.defineProperty(e, n.key, n)
  }
}
function Oa(e, t, r) {
  return (
    t && au(e.prototype, t),
    r && au(e, r),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  )
}
var ka = function () {
    return typeof Symbol == 'function'
  },
  Ta = function (e) {
    return ka() && Boolean(Symbol[e])
  },
  Ca = function (e) {
    return Ta(e) ? Symbol[e] : '@@' + e
  }
ka() && !Ta('observable') && (Symbol.observable = Symbol('observable'))
var i0 = Ca('iterator'),
  vs = Ca('observable'),
  Hf = Ca('species')
function Ai(e, t) {
  var r = e[t]
  if (r != null) {
    if (typeof r != 'function') throw new TypeError(r + ' is not a function')
    return r
  }
}
function hn(e) {
  var t = e.constructor
  return (
    t !== void 0 && ((t = t[Hf]), t === null && (t = void 0)),
    t !== void 0 ? t : de
  )
}
function o0(e) {
  return e instanceof de
}
function Zr(e) {
  Zr.log
    ? Zr.log(e)
    : setTimeout(function () {
        throw e
      })
}
function yi(e) {
  Promise.resolve().then(function () {
    try {
      e()
    } catch (t) {
      Zr(t)
    }
  })
}
function Qf(e) {
  var t = e._cleanup
  if (t !== void 0 && ((e._cleanup = void 0), !!t))
    try {
      if (typeof t == 'function') t()
      else {
        var r = Ai(t, 'unsubscribe')
        r && r.call(t)
      }
    } catch (n) {
      Zr(n)
    }
}
function gs(e) {
  ;(e._observer = void 0), (e._queue = void 0), (e._state = 'closed')
}
function s0(e) {
  var t = e._queue
  if (t) {
    ;(e._queue = void 0), (e._state = 'ready')
    for (
      var r = 0;
      r < t.length && (Uf(e, t[r].type, t[r].value), e._state !== 'closed');
      ++r
    );
  }
}
function Uf(e, t, r) {
  e._state = 'running'
  var n = e._observer
  try {
    var i = Ai(n, t)
    switch (t) {
      case 'next':
        i && i.call(n, r)
        break
      case 'error':
        if ((gs(e), i)) i.call(n, r)
        else throw r
        break
      case 'complete':
        gs(e), i && i.call(n)
        break
    }
  } catch (o) {
    Zr(o)
  }
  e._state === 'closed' ? Qf(e) : e._state === 'running' && (e._state = 'ready')
}
function ko(e, t, r) {
  if (e._state !== 'closed') {
    if (e._state === 'buffering') {
      e._queue.push({ type: t, value: r })
      return
    }
    if (e._state !== 'ready') {
      ;(e._state = 'buffering'),
        (e._queue = [{ type: t, value: r }]),
        yi(function () {
          return s0(e)
        })
      return
    }
    Uf(e, t, r)
  }
}
var a0 = (function () {
    function e(r, n) {
      ;(this._cleanup = void 0),
        (this._observer = r),
        (this._queue = void 0),
        (this._state = 'initializing')
      var i = new c0(this)
      try {
        this._cleanup = n.call(void 0, i)
      } catch (o) {
        i.error(o)
      }
      this._state === 'initializing' && (this._state = 'ready')
    }
    var t = e.prototype
    return (
      (t.unsubscribe = function () {
        this._state !== 'closed' && (gs(this), Qf(this))
      }),
      Oa(e, [
        {
          key: 'closed',
          get: function () {
            return this._state === 'closed'
          },
        },
      ]),
      e
    )
  })(),
  c0 = (function () {
    function e(r) {
      this._subscription = r
    }
    var t = e.prototype
    return (
      (t.next = function (n) {
        ko(this._subscription, 'next', n)
      }),
      (t.error = function (n) {
        ko(this._subscription, 'error', n)
      }),
      (t.complete = function () {
        ko(this._subscription, 'complete')
      }),
      Oa(e, [
        {
          key: 'closed',
          get: function () {
            return this._subscription._state === 'closed'
          },
        },
      ]),
      e
    )
  })(),
  de = (function () {
    function e(r) {
      if (!(this instanceof e))
        throw new TypeError('Observable cannot be called as a function')
      if (typeof r != 'function')
        throw new TypeError('Observable initializer must be a function')
      this._subscriber = r
    }
    var t = e.prototype
    return (
      (t.subscribe = function (n) {
        return (
          (typeof n != 'object' || n === null) &&
            (n = { next: n, error: arguments[1], complete: arguments[2] }),
          new a0(n, this._subscriber)
        )
      }),
      (t.forEach = function (n) {
        var i = this
        return new Promise(function (o, s) {
          if (typeof n != 'function') {
            s(new TypeError(n + ' is not a function'))
            return
          }
          function a() {
            c.unsubscribe(), o()
          }
          var c = i.subscribe({
            next: function (u) {
              try {
                n(u, a)
              } catch (l) {
                s(l), c.unsubscribe()
              }
            },
            error: s,
            complete: o,
          })
        })
      }),
      (t.map = function (n) {
        var i = this
        if (typeof n != 'function')
          throw new TypeError(n + ' is not a function')
        var o = hn(this)
        return new o(function (s) {
          return i.subscribe({
            next: function (a) {
              try {
                a = n(a)
              } catch (c) {
                return s.error(c)
              }
              s.next(a)
            },
            error: function (a) {
              s.error(a)
            },
            complete: function () {
              s.complete()
            },
          })
        })
      }),
      (t.filter = function (n) {
        var i = this
        if (typeof n != 'function')
          throw new TypeError(n + ' is not a function')
        var o = hn(this)
        return new o(function (s) {
          return i.subscribe({
            next: function (a) {
              try {
                if (!n(a)) return
              } catch (c) {
                return s.error(c)
              }
              s.next(a)
            },
            error: function (a) {
              s.error(a)
            },
            complete: function () {
              s.complete()
            },
          })
        })
      }),
      (t.reduce = function (n) {
        var i = this
        if (typeof n != 'function')
          throw new TypeError(n + ' is not a function')
        var o = hn(this),
          s = arguments.length > 1,
          a = !1,
          c = arguments[1],
          u = c
        return new o(function (l) {
          return i.subscribe({
            next: function (h) {
              var f = !a
              if (((a = !0), !f || s))
                try {
                  u = n(u, h)
                } catch (d) {
                  return l.error(d)
                }
              else u = h
            },
            error: function (h) {
              l.error(h)
            },
            complete: function () {
              if (!a && !s)
                return l.error(new TypeError('Cannot reduce an empty sequence'))
              l.next(u), l.complete()
            },
          })
        })
      }),
      (t.concat = function () {
        for (
          var n = this, i = arguments.length, o = new Array(i), s = 0;
          s < i;
          s++
        )
          o[s] = arguments[s]
        var a = hn(this)
        return new a(function (c) {
          var u,
            l = 0
          function h(f) {
            u = f.subscribe({
              next: function (d) {
                c.next(d)
              },
              error: function (d) {
                c.error(d)
              },
              complete: function () {
                l === o.length
                  ? ((u = void 0), c.complete())
                  : h(a.from(o[l++]))
              },
            })
          }
          return (
            h(n),
            function () {
              u && (u.unsubscribe(), (u = void 0))
            }
          )
        })
      }),
      (t.flatMap = function (n) {
        var i = this
        if (typeof n != 'function')
          throw new TypeError(n + ' is not a function')
        var o = hn(this)
        return new o(function (s) {
          var a = [],
            c = i.subscribe({
              next: function (l) {
                if (n)
                  try {
                    l = n(l)
                  } catch (f) {
                    return s.error(f)
                  }
                var h = o.from(l).subscribe({
                  next: function (f) {
                    s.next(f)
                  },
                  error: function (f) {
                    s.error(f)
                  },
                  complete: function () {
                    var f = a.indexOf(h)
                    f >= 0 && a.splice(f, 1), u()
                  },
                })
                a.push(h)
              },
              error: function (l) {
                s.error(l)
              },
              complete: function () {
                u()
              },
            })
          function u() {
            c.closed && a.length === 0 && s.complete()
          }
          return function () {
            a.forEach(function (l) {
              return l.unsubscribe()
            }),
              c.unsubscribe()
          }
        })
      }),
      (t[vs] = function () {
        return this
      }),
      (e.from = function (n) {
        var i = typeof this == 'function' ? this : e
        if (n == null) throw new TypeError(n + ' is not an object')
        var o = Ai(n, vs)
        if (o) {
          var s = o.call(n)
          if (Object(s) !== s) throw new TypeError(s + ' is not an object')
          return o0(s) && s.constructor === i
            ? s
            : new i(function (a) {
                return s.subscribe(a)
              })
        }
        if (Ta('iterator') && ((o = Ai(n, i0)), o))
          return new i(function (a) {
            yi(function () {
              if (!a.closed) {
                for (var c = r0(o.call(n)), u; !(u = c()).done; ) {
                  var l = u.value
                  if ((a.next(l), a.closed)) return
                }
                a.complete()
              }
            })
          })
        if (Array.isArray(n))
          return new i(function (a) {
            yi(function () {
              if (!a.closed) {
                for (var c = 0; c < n.length; ++c)
                  if ((a.next(n[c]), a.closed)) return
                a.complete()
              }
            })
          })
        throw new TypeError(n + ' is not observable')
      }),
      (e.of = function () {
        for (var n = arguments.length, i = new Array(n), o = 0; o < n; o++)
          i[o] = arguments[o]
        var s = typeof this == 'function' ? this : e
        return new s(function (a) {
          yi(function () {
            if (!a.closed) {
              for (var c = 0; c < i.length; ++c)
                if ((a.next(i[c]), a.closed)) return
              a.complete()
            }
          })
        })
      }),
      Oa(e, null, [
        {
          key: Hf,
          get: function () {
            return this
          },
        },
      ]),
      e
    )
  })()
ka() &&
  Object.defineProperty(de, Symbol('extensions'), {
    value: { symbol: vs, hostReportError: Zr },
    configurable: !0,
  })
function u0(e) {
  var t,
    r = e.Symbol
  if (typeof r == 'function')
    if (r.observable) t = r.observable
    else {
      typeof r.for == 'function'
        ? (t = r.for('https://github.com/benlesh/symbol-observable'))
        : (t = r('https://github.com/benlesh/symbol-observable'))
      try {
        r.observable = t
      } catch {}
    }
  else t = '@@observable'
  return t
}
var xr
typeof self < 'u'
  ? (xr = self)
  : typeof window < 'u'
  ? (xr = window)
  : typeof global < 'u'
  ? (xr = global)
  : typeof module < 'u'
  ? (xr = module)
  : (xr = Function('return this')())
u0(xr)
var cu = de.prototype,
  uu = '@@observable'
cu[uu] ||
  (cu[uu] = function () {
    return this
  })
var l0 = Object.prototype.toString
function f0(e) {
  return bs(e)
}
function bs(e, t) {
  switch (l0.call(e)) {
    case '[object Array]': {
      if (((t = t || new Map()), t.has(e))) return t.get(e)
      var r = e.slice(0)
      return (
        t.set(e, r),
        r.forEach(function (i, o) {
          r[o] = bs(i, t)
        }),
        r
      )
    }
    case '[object Object]': {
      if (((t = t || new Map()), t.has(e))) return t.get(e)
      var n = Object.create(Object.getPrototypeOf(e))
      return (
        t.set(e, n),
        Object.keys(e).forEach(function (i) {
          n[i] = bs(e[i], t)
        }),
        n
      )
    }
    default:
      return e
  }
}
function Pn(e, t, r) {
  var n = []
  e.forEach(function (i) {
    return i[t] && n.push(i)
  }),
    n.forEach(function (i) {
      return i[t](r)
    })
}
function To(e, t, r) {
  return new de(function (n) {
    var i = n.next,
      o = n.error,
      s = n.complete,
      a = 0,
      c = !1,
      u = {
        then: function (d) {
          return new Promise(function (p) {
            return p(d())
          })
        },
      }
    function l(d, p) {
      return d
        ? function (b) {
            ++a
            var w = function () {
              return d(b)
            }
            u = u
              .then(w, w)
              .then(
                function (v) {
                  --a, i && i.call(n, v), c && h.complete()
                },
                function (v) {
                  throw (--a, v)
                }
              )
              .catch(function (v) {
                o && o.call(n, v)
              })
          }
        : function (b) {
            return p && p.call(n, b)
          }
    }
    var h = {
        next: l(t, i),
        error: l(r, o),
        complete: function () {
          ;(c = !0), a || (s && s.call(n))
        },
      },
      f = e.subscribe(h)
    return function () {
      return f.unsubscribe()
    }
  })
}
var kr =
    typeof WeakMap == 'function' &&
    ht(function () {
      return navigator.product
    }) !== 'ReactNative',
  h0 = typeof WeakSet == 'function',
  Vf = typeof Symbol == 'function' && typeof Symbol.for == 'function',
  to = Vf && Symbol.asyncIterator
ht(function () {
  return window.document.createElement
})
ht(function () {
  return navigator.userAgent.indexOf('jsdom') >= 0
})
function Wf(e) {
  function t(r) {
    Object.defineProperty(e, r, { value: de })
  }
  return Vf && Symbol.species && t(Symbol.species), t('@@species'), e
}
function lu(e) {
  return e && typeof e.then == 'function'
}
var bn = (function (e) {
  ut(t, e)
  function t(r) {
    var n =
      e.call(this, function (i) {
        return (
          n.addObserver(i),
          function () {
            return n.removeObserver(i)
          }
        )
      }) || this
    return (
      (n.observers = new Set()),
      (n.promise = new Promise(function (i, o) {
        ;(n.resolve = i), (n.reject = o)
      })),
      (n.handlers = {
        next: function (i) {
          n.sub !== null &&
            ((n.latest = ['next', i]),
            n.notify('next', i),
            Pn(n.observers, 'next', i))
        },
        error: function (i) {
          var o = n.sub
          o !== null &&
            (o &&
              setTimeout(function () {
                return o.unsubscribe()
              }),
            (n.sub = null),
            (n.latest = ['error', i]),
            n.reject(i),
            n.notify('error', i),
            Pn(n.observers, 'error', i))
        },
        complete: function () {
          var i = n.sub
          if (i !== null) {
            var o = n.sources.shift()
            o
              ? lu(o)
                ? o.then(function (s) {
                    return (n.sub = s.subscribe(n.handlers))
                  })
                : (n.sub = o.subscribe(n.handlers))
              : (i &&
                  setTimeout(function () {
                    return i.unsubscribe()
                  }),
                (n.sub = null),
                n.latest && n.latest[0] === 'next'
                  ? n.resolve(n.latest[1])
                  : n.resolve(),
                n.notify('complete'),
                Pn(n.observers, 'complete'))
          }
        },
      }),
      (n.nextResultListeners = new Set()),
      (n.cancel = function (i) {
        n.reject(i), (n.sources = []), n.handlers.complete()
      }),
      n.promise.catch(function (i) {}),
      typeof r == 'function' && (r = [new de(r)]),
      lu(r)
        ? r.then(function (i) {
            return n.start(i)
          }, n.handlers.error)
        : n.start(r),
      n
    )
  }
  return (
    (t.prototype.start = function (r) {
      this.sub === void 0 &&
        ((this.sources = Array.from(r)), this.handlers.complete())
    }),
    (t.prototype.deliverLastMessage = function (r) {
      if (this.latest) {
        var n = this.latest[0],
          i = r[n]
        i && i.call(r, this.latest[1]),
          this.sub === null && n === 'next' && r.complete && r.complete()
      }
    }),
    (t.prototype.addObserver = function (r) {
      this.observers.has(r) ||
        (this.deliverLastMessage(r), this.observers.add(r))
    }),
    (t.prototype.removeObserver = function (r) {
      this.observers.delete(r) &&
        this.observers.size < 1 &&
        this.handlers.complete()
    }),
    (t.prototype.notify = function (r, n) {
      var i = this.nextResultListeners
      i.size &&
        ((this.nextResultListeners = new Set()),
        i.forEach(function (o) {
          return o(r, n)
        }))
    }),
    (t.prototype.beforeNext = function (r) {
      var n = !1
      this.nextResultListeners.add(function (i, o) {
        n || ((n = !0), r(i, o))
      })
    }),
    t
  )
})(de)
Wf(bn)
function yt(e) {
  return Array.isArray(e) && e.length > 0
}
function Hr(e) {
  return 'incremental' in e
}
function d0(e) {
  return 'hasNext' in e && 'data' in e
}
function p0(e) {
  return Hr(e) || d0(e)
}
function zf(e, t) {
  var r = e,
    n = new sr()
  return (
    Hr(t) &&
      yt(t.incremental) &&
      t.incremental.forEach(function (i) {
        for (var o = i.data, s = i.path, a = s.length - 1; a >= 0; --a) {
          var c = s[a],
            u = !isNaN(+c),
            l = u ? [] : {}
          ;(l[c] = o), (o = l)
        }
        r = n.merge(r, o)
      }),
    r
  )
}
function mi(e) {
  var t = ws(e)
  return yt(t)
}
function ws(e) {
  var t = yt(e.errors) ? e.errors.slice(0) : []
  return (
    Hr(e) &&
      yt(e.incremental) &&
      e.incremental.forEach(function (r) {
        r.errors && t.push.apply(t, r.errors)
      }),
    t
  )
}
function ro() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t]
  var r = Object.create(null)
  return (
    e.forEach(function (n) {
      n &&
        Object.keys(n).forEach(function (i) {
          var o = n[i]
          o !== void 0 && (r[i] = o)
        })
    }),
    r
  )
}
var fu = new Map()
function hu(e) {
  var t = fu.get(e) || 1
  return (
    fu.set(e, t + 1),
    ''.concat(e, ':').concat(t, ':').concat(Math.random().toString(36).slice(2))
  )
}
function Co(e, t) {
  return ro(
    e,
    t,
    t.variables && { variables: O(O({}, e && e.variables), t.variables) }
  )
}
function du(e) {
  return new de(function (t) {
    t.error(e)
  })
}
var Es = function (e, t, r) {
  var n = new Error(r)
  throw (
    ((n.name = 'ServerError'),
    (n.response = e),
    (n.statusCode = e.status),
    (n.result = t),
    n)
  )
}
function y0(e) {
  for (
    var t = ['query', 'operationName', 'variables', 'extensions', 'context'],
      r = 0,
      n = Object.keys(e);
    r < n.length;
    r++
  ) {
    var i = n[r]
    if (t.indexOf(i) < 0) throw new ze(26)
  }
  return e
}
function m0(e, t) {
  var r = O({}, e),
    n = function (o) {
      typeof o == 'function' ? (r = O(O({}, r), o(r))) : (r = O(O({}, r), o))
    },
    i = function () {
      return O({}, r)
    }
  return (
    Object.defineProperty(t, 'setContext', { enumerable: !1, value: n }),
    Object.defineProperty(t, 'getContext', { enumerable: !1, value: i }),
    t
  )
}
function v0(e) {
  var t = {
    variables: e.variables || {},
    extensions: e.extensions || {},
    operationName: e.operationName,
    query: e.query,
  }
  return (
    t.operationName ||
      (t.operationName =
        typeof t.query != 'string' ? ms(t.query) || void 0 : ''),
    t
  )
}
function pu(e, t) {
  return t ? t(e) : de.of()
}
function dn(e) {
  return typeof e == 'function' ? new ct(e) : e
}
function ci(e) {
  return e.request.length <= 1
}
;(function (e) {
  ut(t, e)
  function t(r, n) {
    var i = e.call(this, r) || this
    return (i.link = n), i
  }
  return t
})(Error)
var ct = (function () {
    function e(t) {
      t && (this.request = t)
    }
    return (
      (e.empty = function () {
        return new e(function () {
          return de.of()
        })
      }),
      (e.from = function (t) {
        return t.length === 0
          ? e.empty()
          : t.map(dn).reduce(function (r, n) {
              return r.concat(n)
            })
      }),
      (e.split = function (t, r, n) {
        var i = dn(r),
          o = dn(n || new e(pu))
        return ci(i) && ci(o)
          ? new e(function (s) {
              return t(s) ? i.request(s) || de.of() : o.request(s) || de.of()
            })
          : new e(function (s, a) {
              return t(s)
                ? i.request(s, a) || de.of()
                : o.request(s, a) || de.of()
            })
      }),
      (e.execute = function (t, r) {
        return t.request(m0(r.context, v0(y0(r)))) || de.of()
      }),
      (e.concat = function (t, r) {
        var n = dn(t)
        if (ci(n)) return n
        var i = dn(r)
        return ci(i)
          ? new e(function (o) {
              return (
                n.request(o, function (s) {
                  return i.request(s) || de.of()
                }) || de.of()
              )
            })
          : new e(function (o, s) {
              return (
                n.request(o, function (a) {
                  return i.request(a, s) || de.of()
                }) || de.of()
              )
            })
      }),
      (e.prototype.split = function (t, r, n) {
        return this.concat(e.split(t, r, n || new e(pu)))
      }),
      (e.prototype.concat = function (t) {
        return e.concat(this, t)
      }),
      (e.prototype.request = function (t, r) {
        throw new ze(21)
      }),
      (e.prototype.onError = function (t, r) {
        if (r && r.error) return r.error(t), !1
        throw t
      }),
      (e.prototype.setOnError = function (t) {
        return (this.onError = t), this
      }),
      e
    )
  })(),
  g0 = ct.split,
  _s = ct.execute
function Kf(e) {
  return new ct(function (t, r) {
    return new de(function (n) {
      var i, o, s
      try {
        i = r(t).subscribe({
          next: function (a) {
            if (
              a.errors &&
              ((s = e({
                graphQLErrors: a.errors,
                response: a,
                operation: t,
                forward: r,
              })),
              s)
            ) {
              o = s.subscribe({
                next: n.next.bind(n),
                error: n.error.bind(n),
                complete: n.complete.bind(n),
              })
              return
            }
            n.next(a)
          },
          error: function (a) {
            if (
              ((s = e({
                operation: t,
                networkError: a,
                graphQLErrors: a && a.result && a.result.errors,
                forward: r,
              })),
              s)
            ) {
              o = s.subscribe({
                next: n.next.bind(n),
                error: n.error.bind(n),
                complete: n.complete.bind(n),
              })
              return
            }
            n.error(a)
          },
          complete: function () {
            s || n.complete.bind(n)()
          },
        })
      } catch (a) {
        e({ networkError: a, operation: t, forward: r }), n.error(a)
      }
      return function () {
        i && i.unsubscribe(), o && i.unsubscribe()
      }
    })
  })
}
;(function (e) {
  ut(t, e)
  function t(r) {
    var n = e.call(this) || this
    return (n.link = Kf(r)), n
  }
  return (
    (t.prototype.request = function (r, n) {
      return this.link.request(r, n)
    }),
    t
  )
})(ct)
var b0 = '3.7.4'
function w0(e) {
  return !!e.body
}
function E0(e) {
  return !!e.getReader
}
function _0(e) {
  return !!(to && e[Symbol.asyncIterator])
}
function S0(e) {
  return !!e.stream
}
function O0(e) {
  return !!e.arrayBuffer
}
function k0(e) {
  return !!e.pipe
}
function T0(e) {
  var t,
    r = e[Symbol.asyncIterator]()
  return (
    (t = {
      next: function () {
        return r.next()
      },
    }),
    (t[Symbol.asyncIterator] = function () {
      return this
    }),
    t
  )
}
function C0(e) {
  var t = null,
    r = null,
    n = !1,
    i = [],
    o = []
  function s(h) {
    if (!r) {
      if (o.length) {
        var f = o.shift()
        if (Array.isArray(f) && f[0]) return f[0]({ value: h, done: !1 })
      }
      i.push(h)
    }
  }
  function a(h) {
    r = h
    var f = o.slice()
    f.forEach(function (d) {
      d[1](h)
    }),
      !t || t()
  }
  function c() {
    n = !0
    var h = o.slice()
    h.forEach(function (f) {
      f[0]({ value: void 0, done: !0 })
    }),
      !t || t()
  }
  ;(t = function () {
    ;(t = null),
      e.removeListener('data', s),
      e.removeListener('error', a),
      e.removeListener('end', c),
      e.removeListener('finish', c),
      e.removeListener('close', c)
  }),
    e.on('data', s),
    e.on('error', a),
    e.on('end', c),
    e.on('finish', c),
    e.on('close', c)
  function u() {
    return new Promise(function (h, f) {
      if (r) return f(r)
      if (i.length) return h({ value: i.shift(), done: !1 })
      if (n) return h({ value: void 0, done: !0 })
      o.push([h, f])
    })
  }
  var l = {
    next: function () {
      return u()
    },
  }
  return (
    to &&
      (l[Symbol.asyncIterator] = function () {
        return this
      }),
    l
  )
}
function R0(e) {
  var t = !1,
    r = {
      next: function () {
        return t
          ? Promise.resolve({ value: void 0, done: !0 })
          : ((t = !0),
            new Promise(function (n, i) {
              e.then(function (o) {
                n({ value: o, done: !1 })
              }).catch(i)
            }))
      },
    }
  return (
    to &&
      (r[Symbol.asyncIterator] = function () {
        return this
      }),
    r
  )
}
function yu(e) {
  var t = {
    next: function () {
      return e.read()
    },
  }
  return (
    to &&
      (t[Symbol.asyncIterator] = function () {
        return this
      }),
    t
  )
}
function P0(e) {
  var t = e
  if ((w0(e) && (t = e.body), _0(t))) return T0(t)
  if (E0(t)) return yu(t.getReader())
  if (S0(t)) return yu(t.stream().getReader())
  if (O0(t)) return R0(t.arrayBuffer())
  if (k0(t)) return C0(t)
  throw new Error(
    'Unknown body type for responseIterator. Please pass a streamable response.'
  )
}
var mu = Object.prototype.hasOwnProperty
function x0(e, t) {
  var r, n, i
  return Gt(this, void 0, void 0, function () {
    var o, s, a, c, u, l, h, f, d, p, b, w, v, y, g, E, S, C, x, T
    return Xt(this, function (B) {
      switch (B.label) {
        case 0:
          if (TextDecoder === void 0)
            throw new Error(
              'TextDecoder must be defined in the environment: please import a polyfill.'
            )
          ;(o = new TextDecoder('utf-8')),
            (s =
              (r = e.headers) === null || r === void 0
                ? void 0
                : r.get('content-type')),
            (a = 'boundary='),
            (c =
              s != null && s.includes(a)
                ? s == null
                  ? void 0
                  : s
                      .substring((s == null ? void 0 : s.indexOf(a)) + a.length)
                      .replace(/['"]/g, '')
                      .replace(/\;(.*)/gm, '')
                      .trim()
                : '-'),
            (u = '--'.concat(c)),
            (l = ''),
            (h = P0(e)),
            (f = !0),
            (B.label = 1)
        case 1:
          return f ? [4, h.next()] : [3, 3]
        case 2:
          for (
            d = B.sent(),
              p = d.value,
              b = d.done,
              w = typeof p == 'string' ? p : o.decode(p),
              f = !b,
              l += w,
              v = l.indexOf(u);
            v > -1;

          ) {
            if (
              ((y = void 0),
              (T = [l.slice(0, v), l.slice(v + u.length)]),
              (y = T[0]),
              (l = T[1]),
              y.trim())
            ) {
              if (
                ((g = y.indexOf(`\r
\r
`)),
                (E = A0(y.slice(0, g))),
                (S = E['content-type']),
                S && S.toLowerCase().indexOf('application/json') === -1)
              )
                throw new Error(
                  'Unsupported patch content type: application/json is required.'
                )
              C = y.slice(g)
              try {
                ;(x = Jf(
                  e,
                  C.replace(
                    `\r
`,
                    ''
                  )
                )),
                  (Object.keys(x).length > 1 ||
                    'data' in x ||
                    'incremental' in x ||
                    'errors' in x) &&
                    ((n = t.next) === null || n === void 0 || n.call(t, x))
              } catch (L) {
                Ra(L, t)
              }
            }
            v = l.indexOf(u)
          }
          return [3, 1]
        case 3:
          return (i = t.complete) === null || i === void 0 || i.call(t), [2]
      }
    })
  })
}
function A0(e) {
  var t = {}
  return (
    e
      .split(
        `
`
      )
      .forEach(function (r) {
        var n = r.indexOf(':')
        if (n > -1) {
          var i = r.slice(0, n).trim().toLowerCase(),
            o = r.slice(n + 1).trim()
          t[i] = o
        }
      }),
    t
  )
}
function Jf(e, t) {
  if (e.status >= 300) {
    var r = function () {
      try {
        return JSON.parse(t)
      } catch {
        return t
      }
    }
    Es(
      e,
      r(),
      'Response not successful: Received status code '.concat(e.status)
    )
  }
  try {
    return JSON.parse(t)
  } catch (i) {
    var n = i
    throw (
      ((n.name = 'ServerParseError'),
      (n.response = e),
      (n.statusCode = e.status),
      (n.bodyText = t),
      n)
    )
  }
}
function Ra(e, t) {
  var r, n
  e.name !== 'AbortError' &&
    (e.result &&
      e.result.errors &&
      e.result.data &&
      ((r = t.next) === null || r === void 0 || r.call(t, e.result)),
    (n = t.error) === null || n === void 0 || n.call(t, e))
}
function I0(e, t, r) {
  F0(t)(e)
    .then(function (n) {
      var i, o
      ;(i = r.next) === null || i === void 0 || i.call(r, n),
        (o = r.complete) === null || o === void 0 || o.call(r)
    })
    .catch(function (n) {
      return Ra(n, r)
    })
}
function F0(e) {
  return function (t) {
    return t
      .text()
      .then(function (r) {
        return Jf(t, r)
      })
      .then(function (r) {
        return (
          t.status >= 300 &&
            Es(
              t,
              r,
              'Response not successful: Received status code '.concat(t.status)
            ),
          !Array.isArray(r) &&
            !mu.call(r, 'data') &&
            !mu.call(r, 'errors') &&
            Es(
              t,
              r,
              "Server response was missing for query '".concat(
                Array.isArray(e)
                  ? e.map(function (n) {
                      return n.operationName
                    })
                  : e.operationName,
                "'."
              )
            ),
          r
        )
      })
  }
}
var Ss = function (e, t) {
    var r
    try {
      r = JSON.stringify(e)
    } catch (i) {
      var n = new ze(23)
      throw ((n.parseError = i), n)
    }
    return r
  },
  D0 = { includeQuery: !0, includeExtensions: !1, preserveHeaderCase: !1 },
  M0 = { accept: '*/*', 'content-type': 'application/json' },
  N0 = { method: 'POST' },
  j0 = { http: D0, headers: M0, options: N0 },
  L0 = function (e, t) {
    return t(e)
  }
function q0(e, t) {
  for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n]
  var i = {},
    o = {}
  r.forEach(function (h) {
    ;(i = O(O(O({}, i), h.options), {
      headers: O(O({}, i.headers), h.headers),
    })),
      h.credentials && (i.credentials = h.credentials),
      (o = O(O({}, o), h.http))
  }),
    (i.headers = B0(i.headers, o.preserveHeaderCase))
  var s = e.operationName,
    a = e.extensions,
    c = e.variables,
    u = e.query,
    l = { operationName: s, variables: c }
  return (
    o.includeExtensions && (l.extensions = a),
    o.includeQuery && (l.query = t(u, ya)),
    { options: i, body: l }
  )
}
function B0(e, t) {
  if (!t) {
    var r = Object.create(null)
    return (
      Object.keys(Object(e)).forEach(function (o) {
        r[o.toLowerCase()] = e[o]
      }),
      r
    )
  }
  var n = Object.create(null)
  Object.keys(Object(e)).forEach(function (o) {
    n[o.toLowerCase()] = { originalName: o, value: e[o] }
  })
  var i = Object.create(null)
  return (
    Object.keys(n).forEach(function (o) {
      i[n[o].originalName] = n[o].value
    }),
    i
  )
}
var $0 = function () {
    if (typeof AbortController > 'u') return { controller: !1, signal: !1 }
    var e = new AbortController(),
      t = e.signal
    return { controller: e, signal: t }
  },
  H0 = function (e, t) {
    var r = e.getContext(),
      n = r.uri
    return n || (typeof t == 'function' ? t(e) : t || '/graphql')
  }
function Q0(e, t) {
  var r = [],
    n = function (h, f) {
      r.push(''.concat(h, '=').concat(encodeURIComponent(f)))
    }
  if (
    ('query' in t && n('query', t.query),
    t.operationName && n('operationName', t.operationName),
    t.variables)
  ) {
    var i = void 0
    try {
      i = Ss(t.variables, 'Variables map')
    } catch (h) {
      return { parseError: h }
    }
    n('variables', i)
  }
  if (t.extensions) {
    var o = void 0
    try {
      o = Ss(t.extensions, 'Extensions map')
    } catch (h) {
      return { parseError: h }
    }
    n('extensions', o)
  }
  var s = '',
    a = e,
    c = e.indexOf('#')
  c !== -1 && ((s = e.substr(c)), (a = e.substr(0, c)))
  var u = a.indexOf('?') === -1 ? '?' : '&',
    l = a + u + r.join('&') + s
  return { newURI: l }
}
var U0 = ht(function () {
    return fetch
  }),
  Pa = function (e) {
    e === void 0 && (e = {})
    var t = e.uri,
      r = t === void 0 ? '/graphql' : t,
      n = e.fetch,
      i = e.print,
      o = i === void 0 ? L0 : i,
      s = e.includeExtensions,
      a = e.preserveHeaderCase,
      c = e.useGETForQueries,
      u = e.includeUnusedVariables,
      l = u === void 0 ? !1 : u,
      h = Sr(e, [
        'uri',
        'fetch',
        'print',
        'includeExtensions',
        'preserveHeaderCase',
        'useGETForQueries',
        'includeUnusedVariables',
      ]),
      f = {
        http: { includeExtensions: s, preserveHeaderCase: a },
        options: h.fetchOptions,
        credentials: h.credentials,
        headers: h.headers,
      }
    return new ct(function (d) {
      var p = H0(d, r),
        b = d.getContext(),
        w = {}
      if (b.clientAwareness) {
        var v = b.clientAwareness,
          y = v.name,
          g = v.version
        y && (w['apollographql-client-name'] = y),
          g && (w['apollographql-client-version'] = g)
      }
      var E = O(O({}, w), b.headers),
        S = {
          http: b.http,
          options: b.fetchOptions,
          credentials: b.credentials,
          headers: E,
        },
        C = q0(d, o, j0, f, S),
        x = C.options,
        T = C.body
      if (T.variables && !l) {
        var B = new Set(Object.keys(T.variables))
        At(d.query, {
          Variable: function (Q, Se, ee) {
            ee && ee.kind !== 'VariableDefinition' && B.delete(Q.name.value)
          },
        }),
          B.size &&
            ((T.variables = O({}, T.variables)),
            B.forEach(function (Q) {
              delete T.variables[Q]
            }))
      }
      var L
      if (!x.signal) {
        var J = $0(),
          j = J.controller,
          z = J.signal
        ;(L = j), L && (x.signal = z)
      }
      var A = function (Q) {
        return Q.kind === 'OperationDefinition' && Q.operation === 'mutation'
      }
      if (
        (c && !d.query.definitions.some(A) && (x.method = 'GET'),
        ma(['defer'], d.query) &&
          (x.headers.accept =
            'multipart/mixed; deferSpec=20220824, application/json'),
        x.method === 'GET')
      ) {
        var ne = Q0(p, T),
          V = ne.newURI,
          W = ne.parseError
        if (W) return du(W)
        p = V
      } else
        try {
          x.body = Ss(T, 'Payload')
        } catch (Q) {
          return du(Q)
        }
      return new de(function (Q) {
        var Se =
          n ||
          ht(function () {
            return fetch
          }) ||
          U0
        return (
          Se(p, x)
            .then(function (ee) {
              var Oe
              d.setContext({ response: ee })
              var Ee =
                (Oe = ee.headers) === null || Oe === void 0
                  ? void 0
                  : Oe.get('content-type')
              return Ee !== null && /^multipart\/mixed/i.test(Ee)
                ? x0(ee, Q)
                : I0(ee, d, Q)
            })
            .catch(function (ee) {
              return Ra(ee, Q)
            }),
          function () {
            L && L.abort()
          }
        )
      })
    })
  },
  V0 = (function (e) {
    ut(t, e)
    function t(r) {
      r === void 0 && (r = {})
      var n = e.call(this, Pa(r).request) || this
      return (n.options = r), n
    }
    return t
  })(ct),
  Yf = Object.prototype,
  vu = Yf.toString,
  W0 = Yf.hasOwnProperty,
  gu = Function.prototype.toString,
  Os = new Map()
function qe(e, t) {
  try {
    return ks(e, t)
  } finally {
    Os.clear()
  }
}
function ks(e, t) {
  if (e === t) return !0
  var r = vu.call(e),
    n = vu.call(t)
  if (r !== n) return !1
  switch (r) {
    case '[object Array]':
      if (e.length !== t.length) return !1
    case '[object Object]': {
      if (wu(e, t)) return !0
      var i = bu(e),
        o = bu(t),
        s = i.length
      if (s !== o.length) return !1
      for (var a = 0; a < s; ++a) if (!W0.call(t, i[a])) return !1
      for (var a = 0; a < s; ++a) {
        var c = i[a]
        if (!ks(e[c], t[c])) return !1
      }
      return !0
    }
    case '[object Error]':
      return e.name === t.name && e.message === t.message
    case '[object Number]':
      if (e !== e) return t !== t
    case '[object Boolean]':
    case '[object Date]':
      return +e == +t
    case '[object RegExp]':
    case '[object String]':
      return e == ''.concat(t)
    case '[object Map]':
    case '[object Set]': {
      if (e.size !== t.size) return !1
      if (wu(e, t)) return !0
      for (var u = e.entries(), l = r === '[object Map]'; ; ) {
        var h = u.next()
        if (h.done) break
        var f = h.value,
          d = f[0],
          p = f[1]
        if (!t.has(d) || (l && !ks(p, t.get(d)))) return !1
      }
      return !0
    }
    case '[object Uint16Array]':
    case '[object Uint8Array]':
    case '[object Uint32Array]':
    case '[object Int32Array]':
    case '[object Int8Array]':
    case '[object Int16Array]':
    case '[object ArrayBuffer]':
      ;(e = new Uint8Array(e)), (t = new Uint8Array(t))
    case '[object DataView]': {
      var b = e.byteLength
      if (b === t.byteLength) for (; b-- && e[b] === t[b]; );
      return b === -1
    }
    case '[object AsyncFunction]':
    case '[object GeneratorFunction]':
    case '[object AsyncGeneratorFunction]':
    case '[object Function]': {
      var w = gu.call(e)
      return w !== gu.call(t) ? !1 : !J0(w, K0)
    }
  }
  return !1
}
function bu(e) {
  return Object.keys(e).filter(z0, e)
}
function z0(e) {
  return this[e] !== void 0
}
var K0 = '{ [native code] }'
function J0(e, t) {
  var r = e.length - t.length
  return r >= 0 && e.indexOf(t, r) === r
}
function wu(e, t) {
  var r = Os.get(e)
  if (r) {
    if (r.has(t)) return !0
  } else Os.set(e, (r = new Set()))
  return r.add(t), !1
}
var Y0 = function () {
    return Object.create(null)
  },
  Gf = Array.prototype,
  G0 = Gf.forEach,
  X0 = Gf.slice,
  Kn = (function () {
    function e(t, r) {
      t === void 0 && (t = !0),
        r === void 0 && (r = Y0),
        (this.weakness = t),
        (this.makeData = r)
    }
    return (
      (e.prototype.lookup = function () {
        for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r]
        return this.lookupArray(t)
      }),
      (e.prototype.lookupArray = function (t) {
        var r = this
        return (
          G0.call(t, function (n) {
            return (r = r.getChildTrie(n))
          }),
          r.data || (r.data = this.makeData(X0.call(t)))
        )
      }),
      (e.prototype.getChildTrie = function (t) {
        var r =
            this.weakness && Z0(t)
              ? this.weak || (this.weak = new WeakMap())
              : this.strong || (this.strong = new Map()),
          n = r.get(t)
        return n || r.set(t, (n = new e(this.weakness, this.makeData))), n
      }),
      e
    )
  })()
function Z0(e) {
  switch (typeof e) {
    case 'object':
      if (e === null) break
    case 'function':
      return !0
  }
  return !1
}
var je = null,
  Eu = {},
  ew = 1,
  tw = function () {
    return (function () {
      function e() {
        this.id = [
          'slot',
          ew++,
          Date.now(),
          Math.random().toString(36).slice(2),
        ].join(':')
      }
      return (
        (e.prototype.hasValue = function () {
          for (var t = je; t; t = t.parent)
            if (this.id in t.slots) {
              var r = t.slots[this.id]
              if (r === Eu) break
              return t !== je && (je.slots[this.id] = r), !0
            }
          return je && (je.slots[this.id] = Eu), !1
        }),
        (e.prototype.getValue = function () {
          if (this.hasValue()) return je.slots[this.id]
        }),
        (e.prototype.withValue = function (t, r, n, i) {
          var o,
            s = ((o = { __proto__: null }), (o[this.id] = t), o),
            a = je
          je = { parent: a, slots: s }
          try {
            return r.apply(i, n)
          } finally {
            je = a
          }
        }),
        (e.bind = function (t) {
          var r = je
          return function () {
            var n = je
            try {
              return (je = r), t.apply(this, arguments)
            } finally {
              je = n
            }
          }
        }),
        (e.noContext = function (t, r, n) {
          if (je) {
            var i = je
            try {
              return (je = null), t.apply(n, r)
            } finally {
              je = i
            }
          } else return t.apply(n, r)
        }),
        e
      )
    })()
  }
function _u(e) {
  try {
    return e()
  } catch {}
}
var Ro = '@wry/context:Slot',
  rw =
    _u(function () {
      return globalThis
    }) ||
    _u(function () {
      return global
    }) ||
    Object.create(null),
  Su = rw,
  no =
    Su[Ro] ||
    Array[Ro] ||
    (function (e) {
      try {
        Object.defineProperty(Su, Ro, {
          value: e,
          enumerable: !1,
          writable: !1,
          configurable: !0,
        })
      } finally {
        return e
      }
    })(tw())
no.bind
no.noContext
function nw() {}
var iw = (function () {
    function e(t, r) {
      t === void 0 && (t = 1 / 0),
        r === void 0 && (r = nw),
        (this.max = t),
        (this.dispose = r),
        (this.map = new Map()),
        (this.newest = null),
        (this.oldest = null)
    }
    return (
      (e.prototype.has = function (t) {
        return this.map.has(t)
      }),
      (e.prototype.get = function (t) {
        var r = this.getNode(t)
        return r && r.value
      }),
      (e.prototype.getNode = function (t) {
        var r = this.map.get(t)
        if (r && r !== this.newest) {
          var n = r.older,
            i = r.newer
          i && (i.older = n),
            n && (n.newer = i),
            (r.older = this.newest),
            (r.older.newer = r),
            (r.newer = null),
            (this.newest = r),
            r === this.oldest && (this.oldest = i)
        }
        return r
      }),
      (e.prototype.set = function (t, r) {
        var n = this.getNode(t)
        return n
          ? (n.value = r)
          : ((n = { key: t, value: r, newer: null, older: this.newest }),
            this.newest && (this.newest.newer = n),
            (this.newest = n),
            (this.oldest = this.oldest || n),
            this.map.set(t, n),
            n.value)
      }),
      (e.prototype.clean = function () {
        for (; this.oldest && this.map.size > this.max; )
          this.delete(this.oldest.key)
      }),
      (e.prototype.delete = function (t) {
        var r = this.map.get(t)
        return r
          ? (r === this.newest && (this.newest = r.older),
            r === this.oldest && (this.oldest = r.newer),
            r.newer && (r.newer.older = r.older),
            r.older && (r.older.newer = r.newer),
            this.map.delete(t),
            this.dispose(r.value, t),
            !0)
          : !1
      }),
      e
    )
  })(),
  io = new no(),
  Po,
  ow = Object.prototype.hasOwnProperty,
  xa =
    ((Po = Array.from),
    Po === void 0
      ? function (e) {
          var t = []
          return (
            e.forEach(function (r) {
              return t.push(r)
            }),
            t
          )
        }
      : Po)
function Ii(e) {
  var t = e.unsubscribe
  typeof t == 'function' && ((e.unsubscribe = void 0), t())
}
var Bn = [],
  sw = 100
function en(e, t) {
  if (!e) throw new Error(t || 'assertion failure')
}
function aw(e, t) {
  var r = e.length
  return r > 0 && r === t.length && e[r - 1] === t[r - 1]
}
function Xf(e) {
  switch (e.length) {
    case 0:
      throw new Error('unknown value')
    case 1:
      return e[0]
    case 2:
      throw e[1]
  }
}
function cw(e) {
  return e.slice(0)
}
var uw = (function () {
  function e(t) {
    ;(this.fn = t),
      (this.parents = new Set()),
      (this.childValues = new Map()),
      (this.dirtyChildren = null),
      (this.dirty = !0),
      (this.recomputing = !1),
      (this.value = []),
      (this.deps = null),
      ++e.count
  }
  return (
    (e.prototype.peek = function () {
      if (this.value.length === 1 && !ar(this)) return Ou(this), this.value[0]
    }),
    (e.prototype.recompute = function (t) {
      return (
        en(!this.recomputing, 'already recomputing'),
        Ou(this),
        ar(this) ? lw(this, t) : Xf(this.value)
      )
    }),
    (e.prototype.setDirty = function () {
      this.dirty ||
        ((this.dirty = !0), (this.value.length = 0), Zf(this), Ii(this))
    }),
    (e.prototype.dispose = function () {
      var t = this
      this.setDirty(),
        ih(this),
        Aa(this, function (r, n) {
          r.setDirty(), oh(r, t)
        })
    }),
    (e.prototype.forget = function () {
      this.dispose()
    }),
    (e.prototype.dependOn = function (t) {
      t.add(this),
        this.deps || (this.deps = Bn.pop() || new Set()),
        this.deps.add(t)
    }),
    (e.prototype.forgetDeps = function () {
      var t = this
      this.deps &&
        (xa(this.deps).forEach(function (r) {
          return r.delete(t)
        }),
        this.deps.clear(),
        Bn.push(this.deps),
        (this.deps = null))
    }),
    (e.count = 0),
    e
  )
})()
function Ou(e) {
  var t = io.getValue()
  if (t)
    return (
      e.parents.add(t),
      t.childValues.has(e) || t.childValues.set(e, []),
      ar(e) ? th(t, e) : rh(t, e),
      t
    )
}
function lw(e, t) {
  return ih(e), io.withValue(e, fw, [e, t]), dw(e, t) && hw(e), Xf(e.value)
}
function fw(e, t) {
  ;(e.recomputing = !0), (e.value.length = 0)
  try {
    e.value[0] = e.fn.apply(null, t)
  } catch (r) {
    e.value[1] = r
  }
  e.recomputing = !1
}
function ar(e) {
  return e.dirty || !!(e.dirtyChildren && e.dirtyChildren.size)
}
function hw(e) {
  ;(e.dirty = !1), !ar(e) && eh(e)
}
function Zf(e) {
  Aa(e, th)
}
function eh(e) {
  Aa(e, rh)
}
function Aa(e, t) {
  var r = e.parents.size
  if (r) for (var n = xa(e.parents), i = 0; i < r; ++i) t(n[i], e)
}
function th(e, t) {
  en(e.childValues.has(t)), en(ar(t))
  var r = !ar(e)
  if (!e.dirtyChildren) e.dirtyChildren = Bn.pop() || new Set()
  else if (e.dirtyChildren.has(t)) return
  e.dirtyChildren.add(t), r && Zf(e)
}
function rh(e, t) {
  en(e.childValues.has(t)), en(!ar(t))
  var r = e.childValues.get(t)
  r.length === 0
    ? e.childValues.set(t, cw(t.value))
    : aw(r, t.value) || e.setDirty(),
    nh(e, t),
    !ar(e) && eh(e)
}
function nh(e, t) {
  var r = e.dirtyChildren
  r &&
    (r.delete(t),
    r.size === 0 && (Bn.length < sw && Bn.push(r), (e.dirtyChildren = null)))
}
function ih(e) {
  e.childValues.size > 0 &&
    e.childValues.forEach(function (t, r) {
      oh(e, r)
    }),
    e.forgetDeps(),
    en(e.dirtyChildren === null)
}
function oh(e, t) {
  t.parents.delete(e), e.childValues.delete(t), nh(e, t)
}
function dw(e, t) {
  if (typeof e.subscribe == 'function')
    try {
      Ii(e), (e.unsubscribe = e.subscribe.apply(null, t))
    } catch {
      return e.setDirty(), !1
    }
  return !0
}
var pw = { setDirty: !0, dispose: !0, forget: !0 }
function sh(e) {
  var t = new Map(),
    r = e && e.subscribe
  function n(i) {
    var o = io.getValue()
    if (o) {
      var s = t.get(i)
      s || t.set(i, (s = new Set())),
        o.dependOn(s),
        typeof r == 'function' && (Ii(s), (s.unsubscribe = r(i)))
    }
  }
  return (
    (n.dirty = function (o, s) {
      var a = t.get(o)
      if (a) {
        var c = s && ow.call(pw, s) ? s : 'setDirty'
        xa(a).forEach(function (u) {
          return u[c]()
        }),
          t.delete(o),
          Ii(a)
      }
    }),
    n
  )
}
function ah() {
  var e = new Kn(typeof WeakMap == 'function')
  return function () {
    return e.lookupArray(arguments)
  }
}
ah()
var xo = new Set()
function Fi(e, t) {
  t === void 0 && (t = Object.create(null))
  var r = new iw(t.max || Math.pow(2, 16), function (u) {
      return u.dispose()
    }),
    n = t.keyArgs,
    i = t.makeCacheKey || ah(),
    o = function () {
      var u = i.apply(null, n ? n.apply(null, arguments) : arguments)
      if (u === void 0) return e.apply(null, arguments)
      var l = r.get(u)
      l ||
        (r.set(u, (l = new uw(e))),
        (l.subscribe = t.subscribe),
        (l.forget = function () {
          return r.delete(u)
        }))
      var h = l.recompute(Array.prototype.slice.call(arguments))
      return (
        r.set(u, l),
        xo.add(r),
        io.hasValue() ||
          (xo.forEach(function (f) {
            return f.clean()
          }),
          xo.clear()),
        h
      )
    }
  Object.defineProperty(o, 'size', {
    get: function () {
      return r.map.size
    },
    configurable: !1,
    enumerable: !1,
  })
  function s(u) {
    var l = r.get(u)
    l && l.setDirty()
  }
  ;(o.dirtyKey = s),
    (o.dirty = function () {
      s(i.apply(null, arguments))
    })
  function a(u) {
    var l = r.get(u)
    if (l) return l.peek()
  }
  ;(o.peekKey = a),
    (o.peek = function () {
      return a(i.apply(null, arguments))
    })
  function c(u) {
    return r.delete(u)
  }
  return (
    (o.forgetKey = c),
    (o.forget = function () {
      return c(i.apply(null, arguments))
    }),
    (o.makeCacheKey = i),
    (o.getKey = n
      ? function () {
          return i.apply(null, n.apply(null, arguments))
        }
      : i),
    Object.freeze(o)
  )
}
var yw = (function () {
    function e() {
      this.getFragmentDoc = Fi(Ab)
    }
    return (
      (e.prototype.batch = function (t) {
        var r = this,
          n =
            typeof t.optimistic == 'string'
              ? t.optimistic
              : t.optimistic === !1
              ? null
              : void 0,
          i
        return (
          this.performTransaction(function () {
            return (i = t.update(r))
          }, n),
          i
        )
      }),
      (e.prototype.recordOptimisticTransaction = function (t, r) {
        this.performTransaction(t, r)
      }),
      (e.prototype.transformDocument = function (t) {
        return t
      }),
      (e.prototype.transformForLink = function (t) {
        return t
      }),
      (e.prototype.identify = function (t) {}),
      (e.prototype.gc = function () {
        return []
      }),
      (e.prototype.modify = function (t) {
        return !1
      }),
      (e.prototype.readQuery = function (t, r) {
        return (
          r === void 0 && (r = !!t.optimistic),
          this.read(
            O(O({}, t), { rootId: t.id || 'ROOT_QUERY', optimistic: r })
          )
        )
      }),
      (e.prototype.readFragment = function (t, r) {
        return (
          r === void 0 && (r = !!t.optimistic),
          this.read(
            O(O({}, t), {
              query: this.getFragmentDoc(t.fragment, t.fragmentName),
              rootId: t.id,
              optimistic: r,
            })
          )
        )
      }),
      (e.prototype.writeQuery = function (t) {
        var r = t.id,
          n = t.data,
          i = Sr(t, ['id', 'data'])
        return this.write(
          Object.assign(i, { dataId: r || 'ROOT_QUERY', result: n })
        )
      }),
      (e.prototype.writeFragment = function (t) {
        var r = t.id,
          n = t.data,
          i = t.fragment,
          o = t.fragmentName,
          s = Sr(t, ['id', 'data', 'fragment', 'fragmentName'])
        return this.write(
          Object.assign(s, {
            query: this.getFragmentDoc(i, o),
            dataId: r,
            result: n,
          })
        )
      }),
      (e.prototype.updateQuery = function (t, r) {
        return this.batch({
          update: function (n) {
            var i = n.readQuery(t),
              o = r(i)
            return o == null ? i : (n.writeQuery(O(O({}, t), { data: o })), o)
          },
        })
      }),
      (e.prototype.updateFragment = function (t, r) {
        return this.batch({
          update: function (n) {
            var i = n.readFragment(t),
              o = r(i)
            return o == null
              ? i
              : (n.writeFragment(O(O({}, t), { data: o })), o)
          },
        })
      }),
      e
    )
  })(),
  ch = (function (e) {
    ut(t, e)
    function t(r, n, i, o) {
      var s,
        a = e.call(this, r) || this
      if (
        ((a.message = r),
        (a.path = n),
        (a.query = i),
        (a.variables = o),
        Array.isArray(a.path))
      ) {
        a.missing = a.message
        for (var c = a.path.length - 1; c >= 0; --c)
          a.missing = ((s = {}), (s[a.path[c]] = a.missing), s)
      } else a.missing = a.path
      return (a.__proto__ = t.prototype), a
    }
    return t
  })(Error),
  De = Object.prototype.hasOwnProperty
function pn(e) {
  return e == null
}
var Ie = Array.isArray
function uh(e, t) {
  var r = e.__typename,
    n = e.id,
    i = e._id
  if (
    typeof r == 'string' &&
    (t && (t.keyObject = pn(n) ? (pn(i) ? void 0 : { _id: i }) : { id: n }),
    pn(n) && !pn(i) && (n = i),
    !pn(n))
  )
    return ''
      .concat(r, ':')
      .concat(
        typeof n == 'number' || typeof n == 'string' ? n : JSON.stringify(n)
      )
}
var lh = {
  dataIdFromObject: uh,
  addTypename: !0,
  resultCaching: !0,
  canonizeResults: !1,
}
function mw(e) {
  return ro(lh, e)
}
function fh(e) {
  var t = e.canonizeResults
  return t === void 0 ? lh.canonizeResults : t
}
var hh = /^[_a-z][_0-9a-z]*/i
function tn(e) {
  var t = e.match(hh)
  return t ? t[0] : e
}
function Ts(e, t, r) {
  return Re(t)
    ? Ie(t)
      ? t.every(function (n) {
          return Ts(e, n, r)
        })
      : e.selections.every(function (n) {
          if (Bt(n) && Gi(n, r)) {
            var i = Xr(n)
            return (
              De.call(t, i) && (!n.selectionSet || Ts(n.selectionSet, t[i], r))
            )
          }
          return !0
        })
    : !1
}
function Fr(e) {
  return Re(e) && !me(e) && !Ie(e)
}
function vw() {
  return new sr()
}
function dh(e, t) {
  var r = va(wa(e))
  return {
    fragmentMap: r,
    lookupFragment: function (n) {
      var i = r[n]
      return !i && t && (i = t.lookup(n)), i || null
    },
  }
}
var vi = Object.create(null),
  Ao = function () {
    return vi
  },
  ku = Object.create(null),
  $n = (function () {
    function e(t, r) {
      var n = this
      ;(this.policies = t),
        (this.group = r),
        (this.data = Object.create(null)),
        (this.rootIds = Object.create(null)),
        (this.refs = Object.create(null)),
        (this.getFieldValue = function (i, o) {
          return me(i) ? n.get(i.__ref, o) : i && i[o]
        }),
        (this.canRead = function (i) {
          return me(i) ? n.has(i.__ref) : typeof i == 'object'
        }),
        (this.toReference = function (i, o) {
          if (typeof i == 'string') return $r(i)
          if (me(i)) return i
          var s = n.policies.identify(i)[0]
          if (s) {
            var a = $r(s)
            return o && n.merge(s, i), a
          }
        })
    }
    return (
      (e.prototype.toObject = function () {
        return O({}, this.data)
      }),
      (e.prototype.has = function (t) {
        return this.lookup(t, !0) !== void 0
      }),
      (e.prototype.get = function (t, r) {
        if ((this.group.depend(t, r), De.call(this.data, t))) {
          var n = this.data[t]
          if (n && De.call(n, r)) return n[r]
        }
        if (r === '__typename' && De.call(this.policies.rootTypenamesById, t))
          return this.policies.rootTypenamesById[t]
        if (this instanceof zt) return this.parent.get(t, r)
      }),
      (e.prototype.lookup = function (t, r) {
        if ((r && this.group.depend(t, '__exists'), De.call(this.data, t)))
          return this.data[t]
        if (this instanceof zt) return this.parent.lookup(t, r)
        if (this.policies.rootTypenamesById[t]) return Object.create(null)
      }),
      (e.prototype.merge = function (t, r) {
        var n = this,
          i
        me(t) && (t = t.__ref), me(r) && (r = r.__ref)
        var o = typeof t == 'string' ? this.lookup((i = t)) : t,
          s = typeof r == 'string' ? this.lookup((i = r)) : r
        if (s) {
          fe(typeof i == 'string', 1)
          var a = new sr(bw).merge(o, s)
          if (
            ((this.data[i] = a),
            a !== o && (delete this.refs[i], this.group.caching))
          ) {
            var c = Object.create(null)
            o || (c.__exists = 1),
              Object.keys(s).forEach(function (u) {
                if (!o || o[u] !== a[u]) {
                  c[u] = 1
                  var l = tn(u)
                  l !== u &&
                    !n.policies.hasKeyArgs(a.__typename, l) &&
                    (c[l] = 1),
                    a[u] === void 0 && !(n instanceof zt) && delete a[u]
                }
              }),
              c.__typename &&
                !(o && o.__typename) &&
                this.policies.rootTypenamesById[i] === a.__typename &&
                delete c.__typename,
              Object.keys(c).forEach(function (u) {
                return n.group.dirty(i, u)
              })
          }
        }
      }),
      (e.prototype.modify = function (t, r) {
        var n = this,
          i = this.lookup(t)
        if (i) {
          var o = Object.create(null),
            s = !1,
            a = !0,
            c = {
              DELETE: vi,
              INVALIDATE: ku,
              isReference: me,
              toReference: this.toReference,
              canRead: this.canRead,
              readField: function (u, l) {
                return n.policies.readField(
                  typeof u == 'string' ? { fieldName: u, from: l || $r(t) } : u,
                  { store: n }
                )
              },
            }
          if (
            (Object.keys(i).forEach(function (u) {
              var l = tn(u),
                h = i[u]
              if (h !== void 0) {
                var f = typeof r == 'function' ? r : r[u] || r[l]
                if (f) {
                  var d =
                    f === Ao
                      ? vi
                      : f(
                          h,
                          O(O({}, c), {
                            fieldName: l,
                            storeFieldName: u,
                            storage: n.getStorage(t, u),
                          })
                        )
                  d === ku
                    ? n.group.dirty(t, u)
                    : (d === vi && (d = void 0),
                      d !== h && ((o[u] = d), (s = !0), (h = d)))
                }
                h !== void 0 && (a = !1)
              }
            }),
            s)
          )
            return (
              this.merge(t, o),
              a &&
                (this instanceof zt
                  ? (this.data[t] = void 0)
                  : delete this.data[t],
                this.group.dirty(t, '__exists')),
              !0
            )
        }
        return !1
      }),
      (e.prototype.delete = function (t, r, n) {
        var i,
          o = this.lookup(t)
        if (o) {
          var s = this.getFieldValue(o, '__typename'),
            a =
              r && n
                ? this.policies.getStoreFieldName({
                    typename: s,
                    fieldName: r,
                    args: n,
                  })
                : r
          return this.modify(t, a ? ((i = {}), (i[a] = Ao), i) : Ao)
        }
        return !1
      }),
      (e.prototype.evict = function (t, r) {
        var n = !1
        return (
          t.id &&
            (De.call(this.data, t.id) &&
              (n = this.delete(t.id, t.fieldName, t.args)),
            this instanceof zt &&
              this !== r &&
              (n = this.parent.evict(t, r) || n),
            (t.fieldName || n) &&
              this.group.dirty(t.id, t.fieldName || '__exists')),
          n
        )
      }),
      (e.prototype.clear = function () {
        this.replace(null)
      }),
      (e.prototype.extract = function () {
        var t = this,
          r = this.toObject(),
          n = []
        return (
          this.getRootIdSet().forEach(function (i) {
            De.call(t.policies.rootTypenamesById, i) || n.push(i)
          }),
          n.length && (r.__META = { extraRootIds: n.sort() }),
          r
        )
      }),
      (e.prototype.replace = function (t) {
        var r = this
        if (
          (Object.keys(this.data).forEach(function (o) {
            ;(t && De.call(t, o)) || r.delete(o)
          }),
          t)
        ) {
          var n = t.__META,
            i = Sr(t, ['__META'])
          Object.keys(i).forEach(function (o) {
            r.merge(o, i[o])
          }),
            n && n.extraRootIds.forEach(this.retain, this)
        }
      }),
      (e.prototype.retain = function (t) {
        return (this.rootIds[t] = (this.rootIds[t] || 0) + 1)
      }),
      (e.prototype.release = function (t) {
        if (this.rootIds[t] > 0) {
          var r = --this.rootIds[t]
          return r || delete this.rootIds[t], r
        }
        return 0
      }),
      (e.prototype.getRootIdSet = function (t) {
        return (
          t === void 0 && (t = new Set()),
          Object.keys(this.rootIds).forEach(t.add, t),
          this instanceof zt
            ? this.parent.getRootIdSet(t)
            : Object.keys(this.policies.rootTypenamesById).forEach(t.add, t),
          t
        )
      }),
      (e.prototype.gc = function () {
        var t = this,
          r = this.getRootIdSet(),
          n = this.toObject()
        r.forEach(function (s) {
          De.call(n, s) &&
            (Object.keys(t.findChildRefIds(s)).forEach(r.add, r), delete n[s])
        })
        var i = Object.keys(n)
        if (i.length) {
          for (var o = this; o instanceof zt; ) o = o.parent
          i.forEach(function (s) {
            return o.delete(s)
          })
        }
        return i
      }),
      (e.prototype.findChildRefIds = function (t) {
        if (!De.call(this.refs, t)) {
          var r = (this.refs[t] = Object.create(null)),
            n = this.data[t]
          if (!n) return r
          var i = new Set([n])
          i.forEach(function (o) {
            me(o) && (r[o.__ref] = !0),
              Re(o) &&
                Object.keys(o).forEach(function (s) {
                  var a = o[s]
                  Re(a) && i.add(a)
                })
          })
        }
        return this.refs[t]
      }),
      (e.prototype.makeCacheKey = function () {
        return this.group.keyMaker.lookupArray(arguments)
      }),
      e
    )
  })(),
  ph = (function () {
    function e(t, r) {
      r === void 0 && (r = null),
        (this.caching = t),
        (this.parent = r),
        (this.d = null),
        this.resetCaching()
    }
    return (
      (e.prototype.resetCaching = function () {
        ;(this.d = this.caching ? sh() : null), (this.keyMaker = new Kn(kr))
      }),
      (e.prototype.depend = function (t, r) {
        if (this.d) {
          this.d(Io(t, r))
          var n = tn(r)
          n !== r && this.d(Io(t, n)), this.parent && this.parent.depend(t, r)
        }
      }),
      (e.prototype.dirty = function (t, r) {
        this.d &&
          this.d.dirty(Io(t, r), r === '__exists' ? 'forget' : 'setDirty')
      }),
      e
    )
  })()
function Io(e, t) {
  return t + '#' + e
}
function Tu(e, t) {
  xn(e) && e.group.depend(t, '__exists')
}
;(function (e) {
  var t = (function (r) {
    ut(n, r)
    function n(i) {
      var o = i.policies,
        s = i.resultCaching,
        a = s === void 0 ? !0 : s,
        c = i.seed,
        u = r.call(this, o, new ph(a)) || this
      return (
        (u.stump = new gw(u)),
        (u.storageTrie = new Kn(kr)),
        c && u.replace(c),
        u
      )
    }
    return (
      (n.prototype.addLayer = function (i, o) {
        return this.stump.addLayer(i, o)
      }),
      (n.prototype.removeLayer = function () {
        return this
      }),
      (n.prototype.getStorage = function () {
        return this.storageTrie.lookupArray(arguments)
      }),
      n
    )
  })(e)
  e.Root = t
})($n || ($n = {}))
var zt = (function (e) {
    ut(t, e)
    function t(r, n, i, o) {
      var s = e.call(this, n.policies, o) || this
      return (s.id = r), (s.parent = n), (s.replay = i), (s.group = o), i(s), s
    }
    return (
      (t.prototype.addLayer = function (r, n) {
        return new t(r, this, n, this.group)
      }),
      (t.prototype.removeLayer = function (r) {
        var n = this,
          i = this.parent.removeLayer(r)
        return r === this.id
          ? (this.group.caching &&
              Object.keys(this.data).forEach(function (o) {
                var s = n.data[o],
                  a = i.lookup(o)
                a
                  ? s
                    ? s !== a &&
                      Object.keys(s).forEach(function (c) {
                        qe(s[c], a[c]) || n.group.dirty(o, c)
                      })
                    : (n.group.dirty(o, '__exists'),
                      Object.keys(a).forEach(function (c) {
                        n.group.dirty(o, c)
                      }))
                  : n.delete(o)
              }),
            i)
          : i === this.parent
          ? this
          : i.addLayer(this.id, this.replay)
      }),
      (t.prototype.toObject = function () {
        return O(O({}, this.parent.toObject()), this.data)
      }),
      (t.prototype.findChildRefIds = function (r) {
        var n = this.parent.findChildRefIds(r)
        return De.call(this.data, r)
          ? O(O({}, n), e.prototype.findChildRefIds.call(this, r))
          : n
      }),
      (t.prototype.getStorage = function () {
        for (var r = this.parent; r.parent; ) r = r.parent
        return r.getStorage.apply(r, arguments)
      }),
      t
    )
  })($n),
  gw = (function (e) {
    ut(t, e)
    function t(r) {
      return (
        e.call(
          this,
          'EntityStore.Stump',
          r,
          function () {},
          new ph(r.group.caching, r.group)
        ) || this
      )
    }
    return (
      (t.prototype.removeLayer = function () {
        return this
      }),
      (t.prototype.merge = function () {
        return this.parent.merge.apply(this.parent, arguments)
      }),
      t
    )
  })(zt)
function bw(e, t, r) {
  var n = e[r],
    i = t[r]
  return qe(n, i) ? n : i
}
function xn(e) {
  return !!(e instanceof $n && e.group.caching)
}
function ww(e) {
  return Re(e)
    ? Ie(e)
      ? e.slice(0)
      : O({ __proto__: Object.getPrototypeOf(e) }, e)
    : e
}
var Cs = (function () {
    function e() {
      ;(this.known = new (h0 ? WeakSet : Set)()),
        (this.pool = new Kn(kr)),
        (this.passes = new WeakMap()),
        (this.keysByJSON = new Map()),
        (this.empty = this.admit({}))
    }
    return (
      (e.prototype.isKnown = function (t) {
        return Re(t) && this.known.has(t)
      }),
      (e.prototype.pass = function (t) {
        if (Re(t)) {
          var r = ww(t)
          return this.passes.set(r, t), r
        }
        return t
      }),
      (e.prototype.admit = function (t) {
        var r = this
        if (Re(t)) {
          var n = this.passes.get(t)
          if (n) return n
          var i = Object.getPrototypeOf(t)
          switch (i) {
            case Array.prototype: {
              if (this.known.has(t)) return t
              var o = t.map(this.admit, this),
                s = this.pool.lookupArray(o)
              return s.array || this.known.add((s.array = o)), s.array
            }
            case null:
            case Object.prototype: {
              if (this.known.has(t)) return t
              var a = Object.getPrototypeOf(t),
                c = [a],
                u = this.sortedKeys(t)
              c.push(u.json)
              var l = c.length
              u.sorted.forEach(function (d) {
                c.push(r.admit(t[d]))
              })
              var s = this.pool.lookupArray(c)
              if (!s.object) {
                var h = (s.object = Object.create(a))
                this.known.add(h),
                  u.sorted.forEach(function (d, p) {
                    h[d] = c[l + p]
                  })
              }
              return s.object
            }
          }
        }
        return t
      }),
      (e.prototype.sortedKeys = function (t) {
        var r = Object.keys(t),
          n = this.pool.lookupArray(r)
        if (!n.keys) {
          r.sort()
          var i = JSON.stringify(r)
          ;(n.keys = this.keysByJSON.get(i)) ||
            this.keysByJSON.set(i, (n.keys = { sorted: r, json: i }))
        }
        return n.keys
      }),
      e
    )
  })(),
  Er = Object.assign(
    function (e) {
      if (Re(e)) {
        Rs === void 0 && Cu()
        var t = Rs.admit(e),
          r = Ps.get(t)
        return r === void 0 && Ps.set(t, (r = JSON.stringify(t))), r
      }
      return JSON.stringify(e)
    },
    { reset: Cu }
  ),
  Rs,
  Ps
function Cu() {
  ;(Rs = new Cs()), (Ps = new (kr ? WeakMap : Map)())
}
function Ru(e) {
  return [
    e.selectionSet,
    e.objectOrReference,
    e.context,
    e.context.canonizeResults,
  ]
}
var Ew = (function () {
  function e(t) {
    var r = this
    ;(this.knownResults = new (kr ? WeakMap : Map)()),
      (this.config = ro(t, {
        addTypename: t.addTypename !== !1,
        canonizeResults: fh(t),
      })),
      (this.canon = t.canon || new Cs()),
      (this.executeSelectionSet = Fi(
        function (n) {
          var i,
            o = n.context.canonizeResults,
            s = Ru(n)
          s[3] = !o
          var a = (i = r.executeSelectionSet).peek.apply(i, s)
          return a
            ? o
              ? O(O({}, a), { result: r.canon.admit(a.result) })
              : a
            : (Tu(n.context.store, n.enclosingRef.__ref),
              r.execSelectionSetImpl(n))
        },
        {
          max: this.config.resultCacheMaxSize,
          keyArgs: Ru,
          makeCacheKey: function (n, i, o, s) {
            if (xn(o.store))
              return o.store.makeCacheKey(
                n,
                me(i) ? i.__ref : i,
                o.varString,
                s
              )
          },
        }
      )),
      (this.executeSubSelectedArray = Fi(
        function (n) {
          return (
            Tu(n.context.store, n.enclosingRef.__ref),
            r.execSubSelectedArrayImpl(n)
          )
        },
        {
          max: this.config.resultCacheMaxSize,
          makeCacheKey: function (n) {
            var i = n.field,
              o = n.array,
              s = n.context
            if (xn(s.store)) return s.store.makeCacheKey(i, o, s.varString)
          },
        }
      ))
  }
  return (
    (e.prototype.resetCanon = function () {
      this.canon = new Cs()
    }),
    (e.prototype.diffQueryAgainstStore = function (t) {
      var r = t.store,
        n = t.query,
        i = t.rootId,
        o = i === void 0 ? 'ROOT_QUERY' : i,
        s = t.variables,
        a = t.returnPartialData,
        c = a === void 0 ? !0 : a,
        u = t.canonizeResults,
        l = u === void 0 ? this.config.canonizeResults : u,
        h = this.config.cache.policies
      s = O(O({}, Ea(Vb(n))), s)
      var f = $r(o),
        d = this.executeSelectionSet({
          selectionSet: eo(n).selectionSet,
          objectOrReference: f,
          enclosingRef: f,
          context: O(
            {
              store: r,
              query: n,
              policies: h,
              variables: s,
              varString: Er(s),
              canonizeResults: l,
            },
            dh(n, this.config.fragments)
          ),
        }),
        p
      if (d.missing && ((p = [new ch(_w(d.missing), d.missing, n, s)]), !c))
        throw p[0]
      return { result: d.result, complete: !p, missing: p }
    }),
    (e.prototype.isFresh = function (t, r, n, i) {
      if (xn(i.store) && this.knownResults.get(t) === n) {
        var o = this.executeSelectionSet.peek(n, r, i, this.canon.isKnown(t))
        if (o && t === o.result) return !0
      }
      return !1
    }),
    (e.prototype.execSelectionSetImpl = function (t) {
      var r = this,
        n = t.selectionSet,
        i = t.objectOrReference,
        o = t.enclosingRef,
        s = t.context
      if (
        me(i) &&
        !s.policies.rootTypenamesById[i.__ref] &&
        !s.store.has(i.__ref)
      )
        return {
          result: this.canon.empty,
          missing: 'Dangling reference to missing '.concat(i.__ref, ' object'),
        }
      var a = s.variables,
        c = s.policies,
        u = s.store,
        l = u.getFieldValue(i, '__typename'),
        h = [],
        f,
        d = new sr()
      this.config.addTypename &&
        typeof l == 'string' &&
        !c.rootIdsByTypename[l] &&
        h.push({ __typename: l })
      function p(g, E) {
        var S
        return (
          g.missing && (f = d.merge(f, ((S = {}), (S[E] = g.missing), S))),
          g.result
        )
      }
      var b = new Set(n.selections)
      b.forEach(function (g) {
        var E, S
        if (Gi(g, a))
          if (Bt(g)) {
            var C = c.readField(
                {
                  fieldName: g.name.value,
                  field: g,
                  variables: s.variables,
                  from: i,
                },
                s
              ),
              x = Xr(g)
            C === void 0
              ? Bf.added(g) ||
                (f = d.merge(
                  f,
                  ((E = {}),
                  (E[x] = "Can't find field '"
                    .concat(g.name.value, "' on ")
                    .concat(
                      me(i)
                        ? i.__ref + ' object'
                        : 'object ' + JSON.stringify(i, null, 2)
                    )),
                  E)
                ))
              : Ie(C)
              ? (C = p(
                  r.executeSubSelectedArray({
                    field: g,
                    array: C,
                    enclosingRef: o,
                    context: s,
                  }),
                  x
                ))
              : g.selectionSet
              ? C != null &&
                (C = p(
                  r.executeSelectionSet({
                    selectionSet: g.selectionSet,
                    objectOrReference: C,
                    enclosingRef: me(C) ? C : o,
                    context: s,
                  }),
                  x
                ))
              : s.canonizeResults && (C = r.canon.pass(C)),
              C !== void 0 && h.push(((S = {}), (S[x] = C), S))
          } else {
            var T = ga(g, s.lookupFragment)
            if (!T && g.kind === qn.FRAGMENT_SPREAD) throw new ze(5)
            T &&
              c.fragmentMatches(T, l) &&
              T.selectionSet.selections.forEach(b.add, b)
          }
      })
      var w = Sa(h),
        v = { result: w, missing: f },
        y = s.canonizeResults ? this.canon.admit(v) : v
      return y.result && this.knownResults.set(y.result, n), y
    }),
    (e.prototype.execSubSelectedArrayImpl = function (t) {
      var r = this,
        n = t.field,
        i = t.array,
        o = t.enclosingRef,
        s = t.context,
        a,
        c = new sr()
      function u(l, h) {
        var f
        return (
          l.missing && (a = c.merge(a, ((f = {}), (f[h] = l.missing), f))),
          l.result
        )
      }
      return (
        n.selectionSet && (i = i.filter(s.store.canRead)),
        (i = i.map(function (l, h) {
          return l === null
            ? null
            : Ie(l)
            ? u(
                r.executeSubSelectedArray({
                  field: n,
                  array: l,
                  enclosingRef: o,
                  context: s,
                }),
                h
              )
            : n.selectionSet
            ? u(
                r.executeSelectionSet({
                  selectionSet: n.selectionSet,
                  objectOrReference: l,
                  enclosingRef: me(l) ? l : o,
                  context: s,
                }),
                h
              )
            : l
        })),
        { result: s.canonizeResults ? this.canon.admit(i) : i, missing: a }
      )
    }),
    e
  )
})()
function _w(e) {
  try {
    JSON.stringify(e, function (t, r) {
      if (typeof r == 'string') throw r
      return r
    })
  } catch (t) {
    return t
  }
}
var Ia = new no(),
  Pu = new WeakMap()
function An(e) {
  var t = Pu.get(e)
  return t || Pu.set(e, (t = { vars: new Set(), dep: sh() })), t
}
function xu(e) {
  An(e).vars.forEach(function (t) {
    return t.forgetCache(e)
  })
}
function Sw(e) {
  An(e).vars.forEach(function (t) {
    return t.attachCache(e)
  })
}
function Ow(e) {
  var t = new Set(),
    r = new Set(),
    n = function (o) {
      if (arguments.length > 0) {
        if (e !== o) {
          ;(e = o),
            t.forEach(function (c) {
              An(c).dep.dirty(n), kw(c)
            })
          var s = Array.from(r)
          r.clear(),
            s.forEach(function (c) {
              return c(e)
            })
        }
      } else {
        var a = Ia.getValue()
        a && (i(a), An(a).dep(n))
      }
      return e
    }
  n.onNextChange = function (o) {
    return (
      r.add(o),
      function () {
        r.delete(o)
      }
    )
  }
  var i = (n.attachCache = function (o) {
    return t.add(o), An(o).vars.add(n), n
  })
  return (
    (n.forgetCache = function (o) {
      return t.delete(o)
    }),
    n
  )
}
function kw(e) {
  e.broadcastWatches && e.broadcastWatches()
}
var Au = Object.create(null)
function Fa(e) {
  var t = JSON.stringify(e)
  return Au[t] || (Au[t] = Object.create(null))
}
function Iu(e) {
  var t = Fa(e)
  return (
    t.keyFieldsFn ||
    (t.keyFieldsFn = function (r, n) {
      var i = function (s, a) {
          return n.readField(a, s)
        },
        o = (n.keyObject = Da(e, function (s) {
          var a = Qr(n.storeObject, s, i)
          return (
            a === void 0 &&
              r !== n.storeObject &&
              De.call(r, s[0]) &&
              (a = Qr(r, s, mh)),
            fe(a !== void 0, 2),
            a
          )
        }))
      return ''.concat(n.typename, ':').concat(JSON.stringify(o))
    })
  )
}
function Fu(e) {
  var t = Fa(e)
  return (
    t.keyArgsFn ||
    (t.keyArgsFn = function (r, n) {
      var i = n.field,
        o = n.variables,
        s = n.fieldName,
        a = Da(e, function (u) {
          var l = u[0],
            h = l.charAt(0)
          if (h === '@') {
            if (i && yt(i.directives)) {
              var f = l.slice(1),
                d = i.directives.find(function (v) {
                  return v.name.value === f
                }),
                p = d && Xi(d, o)
              return p && Qr(p, u.slice(1))
            }
            return
          }
          if (h === '$') {
            var b = l.slice(1)
            if (o && De.call(o, b)) {
              var w = u.slice(0)
              return (w[0] = b), Qr(o, w)
            }
            return
          }
          if (r) return Qr(r, u)
        }),
        c = JSON.stringify(a)
      return (r || c !== '{}') && (s += ':' + c), s
    })
  )
}
function Da(e, t) {
  var r = new sr()
  return yh(e).reduce(function (n, i) {
    var o,
      s = t(i)
    if (s !== void 0) {
      for (var a = i.length - 1; a >= 0; --a) s = ((o = {}), (o[i[a]] = s), o)
      n = r.merge(n, s)
    }
    return n
  }, Object.create(null))
}
function yh(e) {
  var t = Fa(e)
  if (!t.paths) {
    var r = (t.paths = []),
      n = []
    e.forEach(function (i, o) {
      Ie(i)
        ? (yh(i).forEach(function (s) {
            return r.push(n.concat(s))
          }),
          (n.length = 0))
        : (n.push(i), Ie(e[o + 1]) || (r.push(n.slice(0)), (n.length = 0)))
    })
  }
  return t.paths
}
function mh(e, t) {
  return e[t]
}
function Qr(e, t, r) {
  return (
    (r = r || mh),
    vh(
      t.reduce(function n(i, o) {
        return Ie(i)
          ? i.map(function (s) {
              return n(s, o)
            })
          : i && r(i, o)
      }, e)
    )
  )
}
function vh(e) {
  return Re(e)
    ? Ie(e)
      ? e.map(vh)
      : Da(Object.keys(e).sort(), function (t) {
          return Qr(e, t)
        })
    : e
}
ba.setStringify(Er)
function xs(e) {
  return e.args !== void 0 ? e.args : e.field ? Xi(e.field, e.variables) : null
}
var Tw = function () {},
  Du = function (e, t) {
    return t.fieldName
  },
  Mu = function (e, t, r) {
    var n = r.mergeObjects
    return n(e, t)
  },
  Nu = function (e, t) {
    return t
  },
  Cw = (function () {
    function e(t) {
      ;(this.config = t),
        (this.typePolicies = Object.create(null)),
        (this.toBeAdded = Object.create(null)),
        (this.supertypeMap = new Map()),
        (this.fuzzySubtypes = new Map()),
        (this.rootIdsByTypename = Object.create(null)),
        (this.rootTypenamesById = Object.create(null)),
        (this.usingPossibleTypes = !1),
        (this.config = O({ dataIdFromObject: uh }, t)),
        (this.cache = this.config.cache),
        this.setRootTypename('Query'),
        this.setRootTypename('Mutation'),
        this.setRootTypename('Subscription'),
        t.possibleTypes && this.addPossibleTypes(t.possibleTypes),
        t.typePolicies && this.addTypePolicies(t.typePolicies)
    }
    return (
      (e.prototype.identify = function (t, r) {
        var n,
          i = this,
          o =
            (r &&
              (r.typename ||
                ((n = r.storeObject) === null || n === void 0
                  ? void 0
                  : n.__typename))) ||
            t.__typename
        if (o === this.rootTypenamesById.ROOT_QUERY) return ['ROOT_QUERY']
        for (
          var s = (r && r.storeObject) || t,
            a = O(O({}, r), {
              typename: o,
              storeObject: s,
              readField:
                (r && r.readField) ||
                function () {
                  var f = Ma(arguments, s)
                  return i.readField(f, {
                    store: i.cache.data,
                    variables: f.variables,
                  })
                },
            }),
            c,
            u = o && this.getTypePolicy(o),
            l = (u && u.keyFn) || this.config.dataIdFromObject;
          l;

        ) {
          var h = l(t, a)
          if (Ie(h)) l = Iu(h)
          else {
            c = h
            break
          }
        }
        return (
          (c = c ? String(c) : void 0), a.keyObject ? [c, a.keyObject] : [c]
        )
      }),
      (e.prototype.addTypePolicies = function (t) {
        var r = this
        Object.keys(t).forEach(function (n) {
          var i = t[n],
            o = i.queryType,
            s = i.mutationType,
            a = i.subscriptionType,
            c = Sr(i, ['queryType', 'mutationType', 'subscriptionType'])
          o && r.setRootTypename('Query', n),
            s && r.setRootTypename('Mutation', n),
            a && r.setRootTypename('Subscription', n),
            De.call(r.toBeAdded, n)
              ? r.toBeAdded[n].push(c)
              : (r.toBeAdded[n] = [c])
        })
      }),
      (e.prototype.updateTypePolicy = function (t, r) {
        var n = this,
          i = this.getTypePolicy(t),
          o = r.keyFields,
          s = r.fields
        function a(c, u) {
          c.merge =
            typeof u == 'function' ? u : u === !0 ? Mu : u === !1 ? Nu : c.merge
        }
        a(i, r.merge),
          (i.keyFn =
            o === !1
              ? Tw
              : Ie(o)
              ? Iu(o)
              : typeof o == 'function'
              ? o
              : i.keyFn),
          s &&
            Object.keys(s).forEach(function (c) {
              var u = n.getFieldPolicy(t, c, !0),
                l = s[c]
              if (typeof l == 'function') u.read = l
              else {
                var h = l.keyArgs,
                  f = l.read,
                  d = l.merge
                ;(u.keyFn =
                  h === !1
                    ? Du
                    : Ie(h)
                    ? Fu(h)
                    : typeof h == 'function'
                    ? h
                    : u.keyFn),
                  typeof f == 'function' && (u.read = f),
                  a(u, d)
              }
              u.read && u.merge && (u.keyFn = u.keyFn || Du)
            })
      }),
      (e.prototype.setRootTypename = function (t, r) {
        r === void 0 && (r = t)
        var n = 'ROOT_' + t.toUpperCase(),
          i = this.rootTypenamesById[n]
        r !== i &&
          (fe(!i || i === t, 3),
          i && delete this.rootIdsByTypename[i],
          (this.rootIdsByTypename[r] = n),
          (this.rootTypenamesById[n] = r))
      }),
      (e.prototype.addPossibleTypes = function (t) {
        var r = this
        ;(this.usingPossibleTypes = !0),
          Object.keys(t).forEach(function (n) {
            r.getSupertypeSet(n, !0),
              t[n].forEach(function (i) {
                r.getSupertypeSet(i, !0).add(n)
                var o = i.match(hh)
                ;(!o || o[0] !== i) && r.fuzzySubtypes.set(i, new RegExp(i))
              })
          })
      }),
      (e.prototype.getTypePolicy = function (t) {
        var r = this
        if (!De.call(this.typePolicies, t)) {
          var n = (this.typePolicies[t] = Object.create(null))
          n.fields = Object.create(null)
          var i = this.supertypeMap.get(t)
          i &&
            i.size &&
            i.forEach(function (s) {
              var a = r.getTypePolicy(s),
                c = a.fields,
                u = Sr(a, ['fields'])
              Object.assign(n, u), Object.assign(n.fields, c)
            })
        }
        var o = this.toBeAdded[t]
        return (
          o &&
            o.length &&
            o.splice(0).forEach(function (s) {
              r.updateTypePolicy(t, s)
            }),
          this.typePolicies[t]
        )
      }),
      (e.prototype.getFieldPolicy = function (t, r, n) {
        if (t) {
          var i = this.getTypePolicy(t).fields
          return i[r] || (n && (i[r] = Object.create(null)))
        }
      }),
      (e.prototype.getSupertypeSet = function (t, r) {
        var n = this.supertypeMap.get(t)
        return !n && r && this.supertypeMap.set(t, (n = new Set())), n
      }),
      (e.prototype.fragmentMatches = function (t, r, n, i) {
        var o = this
        if (!t.typeCondition) return !0
        if (!r) return !1
        var s = t.typeCondition.name.value
        if (r === s) return !0
        if (this.usingPossibleTypes && this.supertypeMap.has(s))
          for (
            var a = this.getSupertypeSet(r, !0),
              c = [a],
              u = function (d) {
                var p = o.getSupertypeSet(d, !1)
                p && p.size && c.indexOf(p) < 0 && c.push(p)
              },
              l = !!(n && this.fuzzySubtypes.size),
              h = 0;
            h < c.length;
            ++h
          ) {
            var f = c[h]
            if (f.has(s)) return a.has(s) || a.add(s), !0
            f.forEach(u),
              l &&
                h === c.length - 1 &&
                Ts(t.selectionSet, n, i) &&
                ((l = !1),
                this.fuzzySubtypes.forEach(function (d, p) {
                  var b = r.match(d)
                  b && b[0] === r && u(p)
                }))
          }
        return !1
      }),
      (e.prototype.hasKeyArgs = function (t, r) {
        var n = this.getFieldPolicy(t, r, !1)
        return !!(n && n.keyFn)
      }),
      (e.prototype.getStoreFieldName = function (t) {
        var r = t.typename,
          n = t.fieldName,
          i = this.getFieldPolicy(r, n, !1),
          o,
          s = i && i.keyFn
        if (s && r)
          for (
            var a = {
                typename: r,
                fieldName: n,
                field: t.field || null,
                variables: t.variables,
              },
              c = xs(t);
            s;

          ) {
            var u = s(c, a)
            if (Ie(u)) s = Fu(u)
            else {
              o = u || n
              break
            }
          }
        return (
          o === void 0 &&
            (o = t.field ? Hb(t.field, t.variables) : ba(n, xs(t))),
          o === !1 ? n : n === tn(o) ? o : n + ':' + o
        )
      }),
      (e.prototype.readField = function (t, r) {
        var n = t.from
        if (n) {
          var i = t.field || t.fieldName
          if (i) {
            if (t.typename === void 0) {
              var o = r.store.getFieldValue(n, '__typename')
              o && (t.typename = o)
            }
            var s = this.getStoreFieldName(t),
              a = tn(s),
              c = r.store.getFieldValue(n, s),
              u = this.getFieldPolicy(t.typename, a, !1),
              l = u && u.read
            if (l) {
              var h = ju(
                this,
                n,
                t,
                r,
                r.store.getStorage(me(n) ? n.__ref : n, s)
              )
              return Ia.withValue(this.cache, l, [c, h])
            }
            return c
          }
        }
      }),
      (e.prototype.getReadFunction = function (t, r) {
        var n = this.getFieldPolicy(t, r, !1)
        return n && n.read
      }),
      (e.prototype.getMergeFunction = function (t, r, n) {
        var i = this.getFieldPolicy(t, r, !1),
          o = i && i.merge
        return !o && n && ((i = this.getTypePolicy(n)), (o = i && i.merge)), o
      }),
      (e.prototype.runMergeFunction = function (t, r, n, i, o) {
        var s = n.field,
          a = n.typename,
          c = n.merge
        return c === Mu
          ? gh(i.store)(t, r)
          : c === Nu
          ? r
          : (i.overwrite && (t = void 0),
            c(
              t,
              r,
              ju(
                this,
                void 0,
                {
                  typename: a,
                  fieldName: s.name.value,
                  field: s,
                  variables: i.variables,
                },
                i,
                o || Object.create(null)
              )
            ))
      }),
      e
    )
  })()
function ju(e, t, r, n, i) {
  var o = e.getStoreFieldName(r),
    s = tn(o),
    a = r.variables || n.variables,
    c = n.store,
    u = c.toReference,
    l = c.canRead
  return {
    args: xs(r),
    field: r.field || null,
    fieldName: s,
    storeFieldName: o,
    variables: a,
    isReference: me,
    toReference: u,
    storage: i,
    cache: e.cache,
    canRead: l,
    readField: function () {
      return e.readField(Ma(arguments, t, a), n)
    },
    mergeObjects: gh(n.store),
  }
}
function Ma(e, t, r) {
  var n = e[0],
    i = e[1],
    o = e.length,
    s
  return (
    typeof n == 'string'
      ? (s = { fieldName: n, from: o > 1 ? i : t })
      : ((s = O({}, n)), De.call(s, 'from') || (s.from = t)),
    s.variables === void 0 && (s.variables = r),
    s
  )
}
function gh(e) {
  return function (r, n) {
    if (Ie(r) || Ie(n)) throw new ze(4)
    if (Re(r) && Re(n)) {
      var i = e.getFieldValue(r, '__typename'),
        o = e.getFieldValue(n, '__typename'),
        s = i && o && i !== o
      if (s) return n
      if (me(r) && Fr(n)) return e.merge(r.__ref, n), r
      if (Fr(r) && me(n)) return e.merge(r, n.__ref), n
      if (Fr(r) && Fr(n)) return O(O({}, r), n)
    }
    return n
  }
}
function Fo(e, t, r) {
  var n = ''.concat(t).concat(r),
    i = e.flavors.get(n)
  return (
    i ||
      e.flavors.set(
        n,
        (i =
          e.clientOnly === t && e.deferred === r
            ? e
            : O(O({}, e), { clientOnly: t, deferred: r }))
      ),
    i
  )
}
var Rw = (function () {
    function e(t, r, n) {
      ;(this.cache = t), (this.reader = r), (this.fragments = n)
    }
    return (
      (e.prototype.writeToStore = function (t, r) {
        var n = this,
          i = r.query,
          o = r.result,
          s = r.dataId,
          a = r.variables,
          c = r.overwrite,
          u = zn(i),
          l = vw()
        a = O(O({}, Ea(u)), a)
        var h = O(
            O(
              {
                store: t,
                written: Object.create(null),
                merge: function (d, p) {
                  return l.merge(d, p)
                },
                variables: a,
                varString: Er(a),
              },
              dh(i, this.fragments)
            ),
            {
              overwrite: !!c,
              incomingById: new Map(),
              clientOnly: !1,
              deferred: !1,
              flavors: new Map(),
            }
          ),
          f = this.processSelectionSet({
            result: o || Object.create(null),
            dataId: s,
            selectionSet: u.selectionSet,
            mergeTree: { map: new Map() },
            context: h,
          })
        if (!me(f)) throw new ze(7)
        return (
          h.incomingById.forEach(function (d, p) {
            var b = d.storeObject,
              w = d.mergeTree
            d.fieldNodeSet
            var v = $r(p)
            if (w && w.map.size) {
              var y = n.applyMerges(w, v, b, h)
              if (me(y)) return
              b = y
            }
            t.merge(p, b)
          }),
          t.retain(f.__ref),
          f
        )
      }),
      (e.prototype.processSelectionSet = function (t) {
        var r = this,
          n = t.dataId,
          i = t.result,
          o = t.selectionSet,
          s = t.context,
          a = t.mergeTree,
          c = this.cache.policies,
          u = Object.create(null),
          l =
            (n && c.rootTypenamesById[n]) ||
            ys(i, o, s.fragmentMap) ||
            (n && s.store.get(n, '__typename'))
        typeof l == 'string' && (u.__typename = l)
        var h = function () {
            var g = Ma(arguments, u, s.variables)
            if (me(g.from)) {
              var E = s.incomingById.get(g.from.__ref)
              if (E) {
                var S = c.readField(O(O({}, g), { from: E.storeObject }), s)
                if (S !== void 0) return S
              }
            }
            return c.readField(g, s)
          },
          f = new Set()
        this.flattenFields(o, i, s, l).forEach(function (g, E) {
          var S,
            C = Xr(E),
            x = i[C]
          if ((f.add(E), x !== void 0)) {
            var T = c.getStoreFieldName({
                typename: l,
                fieldName: E.name.value,
                field: E,
                variables: g.variables,
              }),
              B = Lu(a, T),
              L = r.processFieldValue(
                x,
                E,
                E.selectionSet ? Fo(g, !1, !1) : g,
                B
              ),
              J = void 0
            E.selectionSet && (me(L) || Fr(L)) && (J = h('__typename', L))
            var j = c.getMergeFunction(l, E.name.value, J)
            j ? (B.info = { field: E, typename: l, merge: j }) : qu(a, T),
              (u = g.merge(u, ((S = {}), (S[T] = L), S)))
          }
        })
        try {
          var d = c.identify(i, {
              typename: l,
              selectionSet: o,
              fragmentMap: s.fragmentMap,
              storeObject: u,
              readField: h,
            }),
            p = d[0],
            b = d[1]
          ;(n = n || p), b && (u = s.merge(u, b))
        } catch (g) {
          if (!n) throw g
        }
        if (typeof n == 'string') {
          var w = $r(n),
            v = s.written[n] || (s.written[n] = [])
          if (
            v.indexOf(o) >= 0 ||
            (v.push(o), this.reader && this.reader.isFresh(i, w, o, s))
          )
            return w
          var y = s.incomingById.get(n)
          return (
            y
              ? ((y.storeObject = s.merge(y.storeObject, u)),
                (y.mergeTree = As(y.mergeTree, a)),
                f.forEach(function (g) {
                  return y.fieldNodeSet.add(g)
                }))
              : s.incomingById.set(n, {
                  storeObject: u,
                  mergeTree: Di(a) ? void 0 : a,
                  fieldNodeSet: f,
                }),
            w
          )
        }
        return u
      }),
      (e.prototype.processFieldValue = function (t, r, n, i) {
        var o = this
        return !r.selectionSet || t === null
          ? t
          : Ie(t)
          ? t.map(function (s, a) {
              var c = o.processFieldValue(s, r, n, Lu(i, a))
              return qu(i, a), c
            })
          : this.processSelectionSet({
              result: t,
              selectionSet: r.selectionSet,
              context: n,
              mergeTree: i,
            })
      }),
      (e.prototype.flattenFields = function (t, r, n, i) {
        i === void 0 && (i = ys(r, t, n.fragmentMap))
        var o = new Map(),
          s = this.cache.policies,
          a = new Kn(!1)
        return (
          (function c(u, l) {
            var h = a.lookup(u, l.clientOnly, l.deferred)
            h.visited ||
              ((h.visited = !0),
              u.selections.forEach(function (f) {
                if (Gi(f, n.variables)) {
                  var d = l.clientOnly,
                    p = l.deferred
                  if (
                    (!(d && p) &&
                      yt(f.directives) &&
                      f.directives.forEach(function (v) {
                        var y = v.name.value
                        if ((y === 'client' && (d = !0), y === 'defer')) {
                          var g = Xi(v, n.variables)
                          ;(!g || g.if !== !1) && (p = !0)
                        }
                      }),
                    Bt(f))
                  ) {
                    var b = o.get(f)
                    b && ((d = d && b.clientOnly), (p = p && b.deferred)),
                      o.set(f, Fo(n, d, p))
                  } else {
                    var w = ga(f, n.lookupFragment)
                    if (!w && f.kind === qn.FRAGMENT_SPREAD) throw new ze(8)
                    w &&
                      s.fragmentMatches(w, i, r, n.variables) &&
                      c(w.selectionSet, Fo(n, d, p))
                  }
                }
              }))
          })(t, n),
          o
        )
      }),
      (e.prototype.applyMerges = function (t, r, n, i, o) {
        var s,
          a = this
        if (t.map.size && !me(n)) {
          var c = !Ie(n) && (me(r) || Fr(r)) ? r : void 0,
            u = n
          c && !o && (o = [me(c) ? c.__ref : c])
          var l,
            h = function (f, d) {
              return Ie(f)
                ? typeof d == 'number'
                  ? f[d]
                  : void 0
                : i.store.getFieldValue(f, String(d))
            }
          t.map.forEach(function (f, d) {
            var p = h(c, d),
              b = h(u, d)
            if (b !== void 0) {
              o && o.push(d)
              var w = a.applyMerges(f, p, b, i, o)
              w !== b && ((l = l || new Map()), l.set(d, w)),
                o && fe(o.pop() === d)
            }
          }),
            l &&
              ((n = Ie(u) ? u.slice(0) : O({}, u)),
              l.forEach(function (f, d) {
                n[d] = f
              }))
        }
        return t.info
          ? this.cache.policies.runMergeFunction(
              r,
              n,
              t.info,
              i,
              o && (s = i.store).getStorage.apply(s, o)
            )
          : n
      }),
      e
    )
  })(),
  bh = []
function Lu(e, t) {
  var r = e.map
  return r.has(t) || r.set(t, bh.pop() || { map: new Map() }), r.get(t)
}
function As(e, t) {
  if (e === t || !t || Di(t)) return e
  if (!e || Di(e)) return t
  var r = e.info && t.info ? O(O({}, e.info), t.info) : e.info || t.info,
    n = e.map.size && t.map.size,
    i = n ? new Map() : e.map.size ? e.map : t.map,
    o = { info: r, map: i }
  if (n) {
    var s = new Set(t.map.keys())
    e.map.forEach(function (a, c) {
      o.map.set(c, As(a, t.map.get(c))), s.delete(c)
    }),
      s.forEach(function (a) {
        o.map.set(a, As(t.map.get(a), e.map.get(a)))
      })
  }
  return o
}
function Di(e) {
  return !e || !(e.info || e.map.size)
}
function qu(e, t) {
  var r = e.map,
    n = r.get(t)
  n && Di(n) && (bh.push(n), r.delete(t))
}
var wh = (function (e) {
  ut(t, e)
  function t(r) {
    r === void 0 && (r = {})
    var n = e.call(this) || this
    return (
      (n.watches = new Set()),
      (n.typenameDocumentCache = new Map()),
      (n.makeVar = Ow),
      (n.txCount = 0),
      (n.config = mw(r)),
      (n.addTypename = !!n.config.addTypename),
      (n.policies = new Cw({
        cache: n,
        dataIdFromObject: n.config.dataIdFromObject,
        possibleTypes: n.config.possibleTypes,
        typePolicies: n.config.typePolicies,
      })),
      n.init(),
      n
    )
  }
  return (
    (t.prototype.init = function () {
      var r = (this.data = new $n.Root({
        policies: this.policies,
        resultCaching: this.config.resultCaching,
      }))
      ;(this.optimisticData = r.stump), this.resetResultCache()
    }),
    (t.prototype.resetResultCache = function (r) {
      var n = this,
        i = this.storeReader,
        o = this.config.fragments
      ;(this.storeWriter = new Rw(
        this,
        (this.storeReader = new Ew({
          cache: this,
          addTypename: this.addTypename,
          resultCacheMaxSize: this.config.resultCacheMaxSize,
          canonizeResults: fh(this.config),
          canon: r ? void 0 : i && i.canon,
          fragments: o,
        })),
        o
      )),
        (this.maybeBroadcastWatch = Fi(
          function (s, a) {
            return n.broadcastWatch(s, a)
          },
          {
            max: this.config.resultCacheMaxSize,
            makeCacheKey: function (s) {
              var a = s.optimistic ? n.optimisticData : n.data
              if (xn(a)) {
                var c = s.optimistic,
                  u = s.id,
                  l = s.variables
                return a.makeCacheKey(
                  s.query,
                  s.callback,
                  Er({ optimistic: c, id: u, variables: l })
                )
              }
            },
          }
        )),
        new Set([this.data.group, this.optimisticData.group]).forEach(function (
          s
        ) {
          return s.resetCaching()
        })
    }),
    (t.prototype.restore = function (r) {
      return this.init(), r && this.data.replace(r), this
    }),
    (t.prototype.extract = function (r) {
      return (
        r === void 0 && (r = !1),
        (r ? this.optimisticData : this.data).extract()
      )
    }),
    (t.prototype.read = function (r) {
      var n = r.returnPartialData,
        i = n === void 0 ? !1 : n
      try {
        return (
          this.storeReader.diffQueryAgainstStore(
            O(O({}, r), {
              store: r.optimistic ? this.optimisticData : this.data,
              config: this.config,
              returnPartialData: i,
            })
          ).result || null
        )
      } catch (o) {
        if (o instanceof ch) return null
        throw o
      }
    }),
    (t.prototype.write = function (r) {
      try {
        return ++this.txCount, this.storeWriter.writeToStore(this.data, r)
      } finally {
        !--this.txCount && r.broadcast !== !1 && this.broadcastWatches()
      }
    }),
    (t.prototype.modify = function (r) {
      if (De.call(r, 'id') && !r.id) return !1
      var n = r.optimistic ? this.optimisticData : this.data
      try {
        return ++this.txCount, n.modify(r.id || 'ROOT_QUERY', r.fields)
      } finally {
        !--this.txCount && r.broadcast !== !1 && this.broadcastWatches()
      }
    }),
    (t.prototype.diff = function (r) {
      return this.storeReader.diffQueryAgainstStore(
        O(O({}, r), {
          store: r.optimistic ? this.optimisticData : this.data,
          rootId: r.id || 'ROOT_QUERY',
          config: this.config,
        })
      )
    }),
    (t.prototype.watch = function (r) {
      var n = this
      return (
        this.watches.size || Sw(this),
        this.watches.add(r),
        r.immediate && this.maybeBroadcastWatch(r),
        function () {
          n.watches.delete(r) && !n.watches.size && xu(n),
            n.maybeBroadcastWatch.forget(r)
        }
      )
    }),
    (t.prototype.gc = function (r) {
      Er.reset()
      var n = this.optimisticData.gc()
      return (
        r &&
          !this.txCount &&
          (r.resetResultCache
            ? this.resetResultCache(r.resetResultIdentities)
            : r.resetResultIdentities && this.storeReader.resetCanon()),
        n
      )
    }),
    (t.prototype.retain = function (r, n) {
      return (n ? this.optimisticData : this.data).retain(r)
    }),
    (t.prototype.release = function (r, n) {
      return (n ? this.optimisticData : this.data).release(r)
    }),
    (t.prototype.identify = function (r) {
      if (me(r)) return r.__ref
      try {
        return this.policies.identify(r)[0]
      } catch {}
    }),
    (t.prototype.evict = function (r) {
      if (!r.id) {
        if (De.call(r, 'id')) return !1
        r = O(O({}, r), { id: 'ROOT_QUERY' })
      }
      try {
        return ++this.txCount, this.optimisticData.evict(r, this.data)
      } finally {
        !--this.txCount && r.broadcast !== !1 && this.broadcastWatches()
      }
    }),
    (t.prototype.reset = function (r) {
      var n = this
      return (
        this.init(),
        Er.reset(),
        r && r.discardWatches
          ? (this.watches.forEach(function (i) {
              return n.maybeBroadcastWatch.forget(i)
            }),
            this.watches.clear(),
            xu(this))
          : this.broadcastWatches(),
        Promise.resolve()
      )
    }),
    (t.prototype.removeOptimistic = function (r) {
      var n = this.optimisticData.removeLayer(r)
      n !== this.optimisticData &&
        ((this.optimisticData = n), this.broadcastWatches())
    }),
    (t.prototype.batch = function (r) {
      var n = this,
        i = r.update,
        o = r.optimistic,
        s = o === void 0 ? !0 : o,
        a = r.removeOptimistic,
        c = r.onWatchUpdated,
        u,
        l = function (f) {
          var d = n,
            p = d.data,
            b = d.optimisticData
          ++n.txCount, f && (n.data = n.optimisticData = f)
          try {
            return (u = i(n))
          } finally {
            --n.txCount, (n.data = p), (n.optimisticData = b)
          }
        },
        h = new Set()
      return (
        c &&
          !this.txCount &&
          this.broadcastWatches(
            O(O({}, r), {
              onWatchUpdated: function (f) {
                return h.add(f), !1
              },
            })
          ),
        typeof s == 'string'
          ? (this.optimisticData = this.optimisticData.addLayer(s, l))
          : s === !1
          ? l(this.data)
          : l(),
        typeof a == 'string' &&
          (this.optimisticData = this.optimisticData.removeLayer(a)),
        c && h.size
          ? (this.broadcastWatches(
              O(O({}, r), {
                onWatchUpdated: function (f, d) {
                  var p = c.call(this, f, d)
                  return p !== !1 && h.delete(f), p
                },
              })
            ),
            h.size &&
              h.forEach(function (f) {
                return n.maybeBroadcastWatch.dirty(f)
              }))
          : this.broadcastWatches(r),
        u
      )
    }),
    (t.prototype.performTransaction = function (r, n) {
      return this.batch({ update: r, optimistic: n || n !== null })
    }),
    (t.prototype.transformDocument = function (r) {
      if (this.addTypename) {
        var n = this.typenameDocumentCache.get(r)
        return (
          n ||
            ((n = Bf(r)),
            this.typenameDocumentCache.set(r, n),
            this.typenameDocumentCache.set(n, n)),
          n
        )
      }
      return r
    }),
    (t.prototype.transformForLink = function (r) {
      var n = this.config.fragments
      return n ? n.transform(r) : r
    }),
    (t.prototype.broadcastWatches = function (r) {
      var n = this
      this.txCount ||
        this.watches.forEach(function (i) {
          return n.maybeBroadcastWatch(i, r)
        })
    }),
    (t.prototype.broadcastWatch = function (r, n) {
      var i = r.lastDiff,
        o = this.diff(r)
      ;(n &&
        (r.optimistic &&
          typeof n.optimistic == 'string' &&
          (o.fromOptimisticTransaction = !0),
        n.onWatchUpdated && n.onWatchUpdated.call(this, r, o, i) === !1)) ||
        ((!i || !qe(i.result, o.result)) && r.callback((r.lastDiff = o), i))
    }),
    t
  )
})(yw)
function Eh(e) {
  return e.hasOwnProperty('graphQLErrors')
}
var Pw = function (e) {
    var t = ''
    if (yt(e.graphQLErrors) || yt(e.clientErrors)) {
      var r = (e.graphQLErrors || []).concat(e.clientErrors || [])
      r.forEach(function (n) {
        var i = n ? n.message : 'Error message not found.'
        t += ''.concat(
          i,
          `
`
        )
      })
    }
    return (
      e.networkError &&
        (t += ''.concat(
          e.networkError.message,
          `
`
        )),
      (t = t.replace(/\n$/, '')),
      t
    )
  },
  Nt = (function (e) {
    ut(t, e)
    function t(r) {
      var n = r.graphQLErrors,
        i = r.clientErrors,
        o = r.networkError,
        s = r.errorMessage,
        a = r.extraInfo,
        c = e.call(this, s) || this
      return (
        (c.name = 'ApolloError'),
        (c.graphQLErrors = n || []),
        (c.clientErrors = i || []),
        (c.networkError = o || null),
        (c.message = s || Pw(c)),
        (c.extraInfo = a),
        (c.__proto__ = t.prototype),
        c
      )
    }
    return t
  })(Error),
  pe
;(function (e) {
  ;(e[(e.loading = 1)] = 'loading'),
    (e[(e.setVariables = 2)] = 'setVariables'),
    (e[(e.fetchMore = 3)] = 'fetchMore'),
    (e[(e.refetch = 4)] = 'refetch'),
    (e[(e.poll = 6)] = 'poll'),
    (e[(e.ready = 7)] = 'ready'),
    (e[(e.error = 8)] = 'error')
})(pe || (pe = {}))
function Hn(e) {
  return e ? e < 7 : !1
}
var xw = Object.assign,
  Is = (function (e) {
    ut(t, e)
    function t(r) {
      var n = r.queryManager,
        i = r.queryInfo,
        o = r.options,
        s =
          e.call(this, function (w) {
            try {
              var v = w._subscription._observer
              v && !v.error && (v.error = Aw)
            } catch {}
            var y = !s.observers.size
            s.observers.add(w)
            var g = s.last
            return (
              g && g.error
                ? w.error && w.error(g.error)
                : g && g.result && w.next && w.next(g.result),
              y && s.reobserve().catch(function () {}),
              function () {
                s.observers.delete(w) && !s.observers.size && s.tearDownQuery()
              }
            )
          }) || this
      ;(s.observers = new Set()),
        (s.subscriptions = new Set()),
        (s.queryInfo = i),
        (s.queryManager = n),
        (s.isTornDown = !1)
      var a = n.defaultOptions.watchQuery,
        c = a === void 0 ? {} : a,
        u = c.fetchPolicy,
        l = u === void 0 ? 'cache-first' : u,
        h = o.fetchPolicy,
        f = h === void 0 ? l : h,
        d = o.initialFetchPolicy,
        p = d === void 0 ? (f === 'standby' ? l : f) : d
      ;(s.options = O(O({}, o), { initialFetchPolicy: p, fetchPolicy: f })),
        (s.queryId = i.queryId || n.generateQueryId())
      var b = zn(s.query)
      return (s.queryName = b && b.name && b.name.value), s
    }
    return (
      Object.defineProperty(t.prototype, 'query', {
        get: function () {
          return this.queryManager.transform(this.options.query).document
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, 'variables', {
        get: function () {
          return this.options.variables
        },
        enumerable: !1,
        configurable: !0,
      }),
      (t.prototype.result = function () {
        var r = this
        return new Promise(function (n, i) {
          var o = {
              next: function (a) {
                n(a),
                  r.observers.delete(o),
                  r.observers.size || r.queryManager.removeQuery(r.queryId),
                  setTimeout(function () {
                    s.unsubscribe()
                  }, 0)
              },
              error: i,
            },
            s = r.subscribe(o)
        })
      }),
      (t.prototype.getCurrentResult = function (r) {
        r === void 0 && (r = !0)
        var n = this.getLastResult(!0),
          i =
            this.queryInfo.networkStatus || (n && n.networkStatus) || pe.ready,
          o = O(O({}, n), { loading: Hn(i), networkStatus: i }),
          s = this.options.fetchPolicy,
          a = s === void 0 ? 'cache-first' : s
        if (
          !(
            a === 'network-only' ||
            a === 'no-cache' ||
            a === 'standby' ||
            this.queryManager.transform(this.options.query).hasForcedResolvers
          )
        ) {
          var c = this.queryInfo.getDiff()
          ;(c.complete || this.options.returnPartialData) &&
            (o.data = c.result),
            qe(o.data, {}) && (o.data = void 0),
            c.complete
              ? (delete o.partial,
                c.complete &&
                  o.networkStatus === pe.loading &&
                  (a === 'cache-first' || a === 'cache-only') &&
                  ((o.networkStatus = pe.ready), (o.loading = !1)))
              : (o.partial = !0)
        }
        return r && this.updateLastResult(o), o
      }),
      (t.prototype.isDifferentFromLastResult = function (r, n) {
        return (
          !this.last ||
          !qe(this.last.result, r) ||
          (n && !qe(this.last.variables, n))
        )
      }),
      (t.prototype.getLast = function (r, n) {
        var i = this.last
        if (i && i[r] && (!n || qe(i.variables, this.variables))) return i[r]
      }),
      (t.prototype.getLastResult = function (r) {
        return this.getLast('result', r)
      }),
      (t.prototype.getLastError = function (r) {
        return this.getLast('error', r)
      }),
      (t.prototype.resetLastResults = function () {
        delete this.last, (this.isTornDown = !1)
      }),
      (t.prototype.resetQueryStoreErrors = function () {
        this.queryManager.resetErrors(this.queryId)
      }),
      (t.prototype.refetch = function (r) {
        var n = { pollInterval: 0 },
          i = this.options.fetchPolicy
        return (
          i === 'cache-and-network'
            ? (n.fetchPolicy = i)
            : i === 'no-cache'
            ? (n.fetchPolicy = 'no-cache')
            : (n.fetchPolicy = 'network-only'),
          r &&
            !qe(this.options.variables, r) &&
            (n.variables = this.options.variables =
              O(O({}, this.options.variables), r)),
          this.queryInfo.resetLastWrite(),
          this.reobserve(n, pe.refetch)
        )
      }),
      (t.prototype.fetchMore = function (r) {
        var n = this,
          i = O(
            O(
              {},
              r.query
                ? r
                : O(O(O(O({}, this.options), { query: this.query }), r), {
                    variables: O(O({}, this.options.variables), r.variables),
                  })
            ),
            { fetchPolicy: 'no-cache' }
          ),
          o = this.queryManager.generateQueryId(),
          s = this.queryInfo,
          a = s.networkStatus
        ;(s.networkStatus = pe.fetchMore),
          i.notifyOnNetworkStatusChange && this.observe()
        var c = new Set()
        return this.queryManager
          .fetchQuery(o, i, pe.fetchMore)
          .then(function (u) {
            return (
              n.queryManager.removeQuery(o),
              s.networkStatus === pe.fetchMore && (s.networkStatus = a),
              n.queryManager.cache.batch({
                update: function (l) {
                  var h = r.updateQuery
                  h
                    ? l.updateQuery(
                        {
                          query: n.query,
                          variables: n.variables,
                          returnPartialData: !0,
                          optimistic: !1,
                        },
                        function (f) {
                          return h(f, {
                            fetchMoreResult: u.data,
                            variables: i.variables,
                          })
                        }
                      )
                    : l.writeQuery({
                        query: i.query,
                        variables: i.variables,
                        data: u.data,
                      })
                },
                onWatchUpdated: function (l) {
                  c.add(l.query)
                },
              }),
              u
            )
          })
          .finally(function () {
            c.has(n.query) || _h(n)
          })
      }),
      (t.prototype.subscribeToMore = function (r) {
        var n = this,
          i = this.queryManager
            .startGraphQLSubscription({
              query: r.document,
              variables: r.variables,
              context: r.context,
            })
            .subscribe({
              next: function (o) {
                var s = r.updateQuery
                s &&
                  n.updateQuery(function (a, c) {
                    var u = c.variables
                    return s(a, { subscriptionData: o, variables: u })
                  })
              },
              error: function (o) {
                if (r.onError) {
                  r.onError(o)
                  return
                }
              },
            })
        return (
          this.subscriptions.add(i),
          function () {
            n.subscriptions.delete(i) && i.unsubscribe()
          }
        )
      }),
      (t.prototype.setOptions = function (r) {
        return this.reobserve(r)
      }),
      (t.prototype.setVariables = function (r) {
        return qe(this.variables, r)
          ? this.observers.size
            ? this.result()
            : Promise.resolve()
          : ((this.options.variables = r),
            this.observers.size
              ? this.reobserve(
                  {
                    fetchPolicy: this.options.initialFetchPolicy,
                    variables: r,
                  },
                  pe.setVariables
                )
              : Promise.resolve())
      }),
      (t.prototype.updateQuery = function (r) {
        var n = this.queryManager,
          i = n.cache.diff({
            query: this.options.query,
            variables: this.variables,
            returnPartialData: !0,
            optimistic: !1,
          }).result,
          o = r(i, { variables: this.variables })
        o &&
          (n.cache.writeQuery({
            query: this.options.query,
            data: o,
            variables: this.variables,
          }),
          n.broadcastQueries())
      }),
      (t.prototype.startPolling = function (r) {
        ;(this.options.pollInterval = r), this.updatePolling()
      }),
      (t.prototype.stopPolling = function () {
        ;(this.options.pollInterval = 0), this.updatePolling()
      }),
      (t.prototype.applyNextFetchPolicy = function (r, n) {
        if (n.nextFetchPolicy) {
          var i = n.fetchPolicy,
            o = i === void 0 ? 'cache-first' : i,
            s = n.initialFetchPolicy,
            a = s === void 0 ? o : s
          o === 'standby' ||
            (typeof n.nextFetchPolicy == 'function'
              ? (n.fetchPolicy = n.nextFetchPolicy(o, {
                  reason: r,
                  options: n,
                  observable: this,
                  initialFetchPolicy: a,
                }))
              : r === 'variables-changed'
              ? (n.fetchPolicy = a)
              : (n.fetchPolicy = n.nextFetchPolicy))
        }
        return n.fetchPolicy
      }),
      (t.prototype.fetch = function (r, n) {
        return (
          this.queryManager.setObservableQuery(this),
          this.queryManager.fetchQueryObservable(this.queryId, r, n)
        )
      }),
      (t.prototype.updatePolling = function () {
        var r = this
        if (!this.queryManager.ssrMode) {
          var n = this,
            i = n.pollingInfo,
            o = n.options.pollInterval
          if (!o) {
            i && (clearTimeout(i.timeout), delete this.pollingInfo)
            return
          }
          if (!(i && i.interval === o)) {
            fe(o, 12)
            var s = i || (this.pollingInfo = {})
            s.interval = o
            var a = function () {
                r.pollingInfo &&
                  (Hn(r.queryInfo.networkStatus)
                    ? c()
                    : r
                        .reobserve(
                          {
                            fetchPolicy:
                              r.options.initialFetchPolicy === 'no-cache'
                                ? 'no-cache'
                                : 'network-only',
                          },
                          pe.poll
                        )
                        .then(c, c))
              },
              c = function () {
                var u = r.pollingInfo
                u &&
                  (clearTimeout(u.timeout),
                  (u.timeout = setTimeout(a, u.interval)))
              }
            c()
          }
        }
      }),
      (t.prototype.updateLastResult = function (r, n) {
        return (
          n === void 0 && (n = this.variables),
          (this.last = O(O({}, this.last), {
            result: this.queryManager.assumeImmutableResults ? r : f0(r),
            variables: n,
          })),
          yt(r.errors) || delete this.last.error,
          this.last
        )
      }),
      (t.prototype.reobserve = function (r, n) {
        var i = this
        this.isTornDown = !1
        var o = n === pe.refetch || n === pe.fetchMore || n === pe.poll,
          s = this.options.variables,
          a = this.options.fetchPolicy,
          c = ro(this.options, r || {}),
          u = o ? c : xw(this.options, c)
        o ||
          (this.updatePolling(),
          r &&
            r.variables &&
            !qe(r.variables, s) &&
            u.fetchPolicy !== 'standby' &&
            u.fetchPolicy === a &&
            (this.applyNextFetchPolicy('variables-changed', u),
            n === void 0 && (n = pe.setVariables)))
        var l = u.variables && O({}, u.variables),
          h = this.fetch(u, n),
          f = {
            next: function (d) {
              i.reportResult(d, l)
            },
            error: function (d) {
              i.reportError(d, l)
            },
          }
        return (
          o ||
            (this.concast &&
              this.observer &&
              this.concast.removeObserver(this.observer),
            (this.concast = h),
            (this.observer = f)),
          h.addObserver(f),
          h.promise
        )
      }),
      (t.prototype.observe = function () {
        this.reportResult(this.getCurrentResult(!1), this.variables)
      }),
      (t.prototype.reportResult = function (r, n) {
        var i = this.getLastError()
        ;(i || this.isDifferentFromLastResult(r, n)) &&
          ((i || !r.partial || this.options.returnPartialData) &&
            this.updateLastResult(r, n),
          Pn(this.observers, 'next', r))
      }),
      (t.prototype.reportError = function (r, n) {
        var i = O(O({}, this.getLastResult()), {
          error: r,
          errors: r.graphQLErrors,
          networkStatus: pe.error,
          loading: !1,
        })
        this.updateLastResult(i, n),
          Pn(this.observers, 'error', (this.last.error = r))
      }),
      (t.prototype.hasObservers = function () {
        return this.observers.size > 0
      }),
      (t.prototype.tearDownQuery = function () {
        this.isTornDown ||
          (this.concast &&
            this.observer &&
            (this.concast.removeObserver(this.observer),
            delete this.concast,
            delete this.observer),
          this.stopPolling(),
          this.subscriptions.forEach(function (r) {
            return r.unsubscribe()
          }),
          this.subscriptions.clear(),
          this.queryManager.stopQuery(this.queryId),
          this.observers.clear(),
          (this.isTornDown = !0))
      }),
      t
    )
  })(de)
Wf(Is)
function _h(e) {
  var t = e.options,
    r = t.fetchPolicy,
    n = t.nextFetchPolicy
  return r === 'cache-and-network' || r === 'network-only'
    ? e.reobserve({
        fetchPolicy: 'cache-first',
        nextFetchPolicy: function () {
          return (
            (this.nextFetchPolicy = n),
            typeof n == 'function' ? n.apply(this, arguments) : r
          )
        },
      })
    : e.reobserve()
}
function Aw(e) {}
var Sh = (function () {
    function e(t) {
      var r = t.cache,
        n = t.client,
        i = t.resolvers,
        o = t.fragmentMatcher
      ;(this.cache = r),
        n && (this.client = n),
        i && this.addResolvers(i),
        o && this.setFragmentMatcher(o)
    }
    return (
      (e.prototype.addResolvers = function (t) {
        var r = this
        ;(this.resolvers = this.resolvers || {}),
          Array.isArray(t)
            ? t.forEach(function (n) {
                r.resolvers = ou(r.resolvers, n)
              })
            : (this.resolvers = ou(this.resolvers, t))
      }),
      (e.prototype.setResolvers = function (t) {
        ;(this.resolvers = {}), this.addResolvers(t)
      }),
      (e.prototype.getResolvers = function () {
        return this.resolvers || {}
      }),
      (e.prototype.runResolvers = function (t) {
        var r = t.document,
          n = t.remoteResult,
          i = t.context,
          o = t.variables,
          s = t.onlyRunForcedResolvers,
          a = s === void 0 ? !1 : s
        return Gt(this, void 0, void 0, function () {
          return Xt(this, function (c) {
            return r
              ? [
                  2,
                  this.resolveDocument(
                    r,
                    n.data,
                    i,
                    o,
                    this.fragmentMatcher,
                    a
                  ).then(function (u) {
                    return O(O({}, n), { data: u.result })
                  }),
                ]
              : [2, n]
          })
        })
      }),
      (e.prototype.setFragmentMatcher = function (t) {
        this.fragmentMatcher = t
      }),
      (e.prototype.getFragmentMatcher = function () {
        return this.fragmentMatcher
      }),
      (e.prototype.clientQuery = function (t) {
        return ma(['client'], t) && this.resolvers ? t : null
      }),
      (e.prototype.serverQuery = function (t) {
        return Zb(t)
      }),
      (e.prototype.prepareContext = function (t) {
        var r = this.cache
        return O(O({}, t), {
          cache: r,
          getCacheKey: function (n) {
            return r.identify(n)
          },
        })
      }),
      (e.prototype.addExportedVariables = function (t, r, n) {
        return (
          r === void 0 && (r = {}),
          n === void 0 && (n = {}),
          Gt(this, void 0, void 0, function () {
            return Xt(this, function (i) {
              return t
                ? [
                    2,
                    this.resolveDocument(
                      t,
                      this.buildRootValueFromCache(t, r) || {},
                      this.prepareContext(n),
                      r
                    ).then(function (o) {
                      return O(O({}, r), o.exportedVariables)
                    }),
                  ]
                : [2, O({}, r)]
            })
          })
        )
      }),
      (e.prototype.shouldForceResolvers = function (t) {
        var r = !1
        return (
          At(t, {
            Directive: {
              enter: function (n) {
                if (
                  n.name.value === 'client' &&
                  n.arguments &&
                  ((r = n.arguments.some(function (i) {
                    return (
                      i.name.value === 'always' &&
                      i.value.kind === 'BooleanValue' &&
                      i.value.value === !0
                    )
                  })),
                  r)
                )
                  return pa
              },
            },
          }),
          r
        )
      }),
      (e.prototype.buildRootValueFromCache = function (t, r) {
        return this.cache.diff({
          query: Xb(t),
          variables: r,
          returnPartialData: !0,
          optimistic: !1,
        }).result
      }),
      (e.prototype.resolveDocument = function (t, r, n, i, o, s) {
        return (
          n === void 0 && (n = {}),
          i === void 0 && (i = {}),
          o === void 0 &&
            (o = function () {
              return !0
            }),
          s === void 0 && (s = !1),
          Gt(this, void 0, void 0, function () {
            var a, c, u, l, h, f, d, p, b
            return Xt(this, function (w) {
              return (
                (a = eo(t)),
                (c = wa(t)),
                (u = va(c)),
                (l = a.operation),
                (h = l ? l.charAt(0).toUpperCase() + l.slice(1) : 'Query'),
                (f = this),
                (d = f.cache),
                (p = f.client),
                (b = {
                  fragmentMap: u,
                  context: O(O({}, n), { cache: d, client: p }),
                  variables: i,
                  fragmentMatcher: o,
                  defaultOperationType: h,
                  exportedVariables: {},
                  onlyRunForcedResolvers: s,
                }),
                [
                  2,
                  this.resolveSelectionSet(a.selectionSet, r, b).then(function (
                    v
                  ) {
                    return { result: v, exportedVariables: b.exportedVariables }
                  }),
                ]
              )
            })
          })
        )
      }),
      (e.prototype.resolveSelectionSet = function (t, r, n) {
        return Gt(this, void 0, void 0, function () {
          var i,
            o,
            s,
            a,
            c,
            u = this
          return Xt(this, function (l) {
            return (
              (i = n.fragmentMap),
              (o = n.context),
              (s = n.variables),
              (a = [r]),
              (c = function (h) {
                return Gt(u, void 0, void 0, function () {
                  var f, d
                  return Xt(this, function (p) {
                    return Gi(h, s)
                      ? Bt(h)
                        ? [
                            2,
                            this.resolveField(h, r, n).then(function (b) {
                              var w
                              typeof b < 'u' &&
                                a.push(((w = {}), (w[Xr(h)] = b), w))
                            }),
                          ]
                        : (jf(h) ? (f = h) : ((f = i[h.name.value]), fe(f, 11)),
                          f &&
                          f.typeCondition &&
                          ((d = f.typeCondition.name.value),
                          n.fragmentMatcher(r, d, o))
                            ? [
                                2,
                                this.resolveSelectionSet(
                                  f.selectionSet,
                                  r,
                                  n
                                ).then(function (b) {
                                  a.push(b)
                                }),
                              ]
                            : [2])
                      : [2]
                  })
                })
              }),
              [
                2,
                Promise.all(t.selections.map(c)).then(function () {
                  return Sa(a)
                }),
              ]
            )
          })
        })
      }),
      (e.prototype.resolveField = function (t, r, n) {
        return Gt(this, void 0, void 0, function () {
          var i,
            o,
            s,
            a,
            c,
            u,
            l,
            h,
            f,
            d = this
          return Xt(this, function (p) {
            return (
              (i = n.variables),
              (o = t.name.value),
              (s = Xr(t)),
              (a = o !== s),
              (c = r[s] || r[o]),
              (u = Promise.resolve(c)),
              (!n.onlyRunForcedResolvers || this.shouldForceResolvers(t)) &&
                ((l = r.__typename || n.defaultOperationType),
                (h = this.resolvers && this.resolvers[l]),
                h &&
                  ((f = h[a ? o : s]),
                  f &&
                    (u = Promise.resolve(
                      Ia.withValue(this.cache, f, [
                        r,
                        Xi(t, i),
                        n.context,
                        { field: t, fragmentMap: n.fragmentMap },
                      ])
                    )))),
              [
                2,
                u.then(function (b) {
                  if (
                    (b === void 0 && (b = c),
                    t.directives &&
                      t.directives.forEach(function (w) {
                        w.name.value === 'export' &&
                          w.arguments &&
                          w.arguments.forEach(function (v) {
                            v.name.value === 'as' &&
                              v.value.kind === 'StringValue' &&
                              (n.exportedVariables[v.value.value] = b)
                          })
                      }),
                    !t.selectionSet || b == null)
                  )
                    return b
                  if (Array.isArray(b))
                    return d.resolveSubSelectedArray(t, b, n)
                  if (t.selectionSet)
                    return d.resolveSelectionSet(t.selectionSet, b, n)
                }),
              ]
            )
          })
        })
      }),
      (e.prototype.resolveSubSelectedArray = function (t, r, n) {
        var i = this
        return Promise.all(
          r.map(function (o) {
            if (o === null) return null
            if (Array.isArray(o)) return i.resolveSubSelectedArray(t, o, n)
            if (t.selectionSet)
              return i.resolveSelectionSet(t.selectionSet, o, n)
          })
        )
      }),
      e
    )
  })(),
  Dr = new (kr ? WeakMap : Map)()
function Do(e, t) {
  var r = e[t]
  typeof r == 'function' &&
    (e[t] = function () {
      return Dr.set(e, (Dr.get(e) + 1) % 1e15), r.apply(this, arguments)
    })
}
function Bu(e) {
  e.notifyTimeout && (clearTimeout(e.notifyTimeout), (e.notifyTimeout = void 0))
}
var Mo = (function () {
  function e(t, r) {
    r === void 0 && (r = t.generateQueryId()),
      (this.queryId = r),
      (this.listeners = new Set()),
      (this.document = null),
      (this.lastRequestId = 1),
      (this.subscriptions = new Set()),
      (this.stopped = !1),
      (this.dirty = !1),
      (this.observableQuery = null)
    var n = (this.cache = t.cache)
    Dr.has(n) || (Dr.set(n, 0), Do(n, 'evict'), Do(n, 'modify'), Do(n, 'reset'))
  }
  return (
    (e.prototype.init = function (t) {
      var r = t.networkStatus || pe.loading
      return (
        this.variables &&
          this.networkStatus !== pe.loading &&
          !qe(this.variables, t.variables) &&
          (r = pe.setVariables),
        qe(t.variables, this.variables) || (this.lastDiff = void 0),
        Object.assign(this, {
          document: t.document,
          variables: t.variables,
          networkError: null,
          graphQLErrors: this.graphQLErrors || [],
          networkStatus: r,
        }),
        t.observableQuery && this.setObservableQuery(t.observableQuery),
        t.lastRequestId && (this.lastRequestId = t.lastRequestId),
        this
      )
    }),
    (e.prototype.reset = function () {
      Bu(this), (this.dirty = !1)
    }),
    (e.prototype.getDiff = function (t) {
      t === void 0 && (t = this.variables)
      var r = this.getDiffOptions(t)
      if (this.lastDiff && qe(r, this.lastDiff.options))
        return this.lastDiff.diff
      this.updateWatch((this.variables = t))
      var n = this.observableQuery
      if (n && n.options.fetchPolicy === 'no-cache') return { complete: !1 }
      var i = this.cache.diff(r)
      return this.updateLastDiff(i, r), i
    }),
    (e.prototype.updateLastDiff = function (t, r) {
      this.lastDiff = t
        ? { diff: t, options: r || this.getDiffOptions() }
        : void 0
    }),
    (e.prototype.getDiffOptions = function (t) {
      var r
      return (
        t === void 0 && (t = this.variables),
        {
          query: this.document,
          variables: t,
          returnPartialData: !0,
          optimistic: !0,
          canonizeResults:
            (r = this.observableQuery) === null || r === void 0
              ? void 0
              : r.options.canonizeResults,
        }
      )
    }),
    (e.prototype.setDiff = function (t) {
      var r = this,
        n = this.lastDiff && this.lastDiff.diff
      this.updateLastDiff(t),
        !this.dirty &&
          !qe(n && n.result, t && t.result) &&
          ((this.dirty = !0),
          this.notifyTimeout ||
            (this.notifyTimeout = setTimeout(function () {
              return r.notify()
            }, 0)))
    }),
    (e.prototype.setObservableQuery = function (t) {
      var r = this
      t !== this.observableQuery &&
        (this.oqListener && this.listeners.delete(this.oqListener),
        (this.observableQuery = t),
        t
          ? ((t.queryInfo = this),
            this.listeners.add(
              (this.oqListener = function () {
                var n = r.getDiff()
                n.fromOptimisticTransaction ? t.observe() : _h(t)
              })
            ))
          : delete this.oqListener)
    }),
    (e.prototype.notify = function () {
      var t = this
      Bu(this),
        this.shouldNotify() &&
          this.listeners.forEach(function (r) {
            return r(t)
          }),
        (this.dirty = !1)
    }),
    (e.prototype.shouldNotify = function () {
      if (!this.dirty || !this.listeners.size) return !1
      if (Hn(this.networkStatus) && this.observableQuery) {
        var t = this.observableQuery.options.fetchPolicy
        if (t !== 'cache-only' && t !== 'cache-and-network') return !1
      }
      return !0
    }),
    (e.prototype.stop = function () {
      if (!this.stopped) {
        ;(this.stopped = !0),
          this.reset(),
          this.cancel(),
          (this.cancel = e.prototype.cancel),
          this.subscriptions.forEach(function (r) {
            return r.unsubscribe()
          })
        var t = this.observableQuery
        t && t.stopPolling()
      }
    }),
    (e.prototype.cancel = function () {}),
    (e.prototype.updateWatch = function (t) {
      var r = this
      t === void 0 && (t = this.variables)
      var n = this.observableQuery
      if (!(n && n.options.fetchPolicy === 'no-cache')) {
        var i = O(O({}, this.getDiffOptions(t)), {
          watcher: this,
          callback: function (o) {
            return r.setDiff(o)
          },
        })
        ;(!this.lastWatch || !qe(i, this.lastWatch)) &&
          (this.cancel(),
          (this.cancel = this.cache.watch((this.lastWatch = i))))
      }
    }),
    (e.prototype.resetLastWrite = function () {
      this.lastWrite = void 0
    }),
    (e.prototype.shouldWrite = function (t, r) {
      var n = this.lastWrite
      return !(
        n &&
        n.dmCount === Dr.get(this.cache) &&
        qe(r, n.variables) &&
        qe(t.data, n.result.data)
      )
    }),
    (e.prototype.markResult = function (t, r, n, i) {
      var o = this,
        s = new sr(),
        a = yt(t.errors) ? t.errors.slice(0) : []
      if ((this.reset(), 'incremental' in t && yt(t.incremental))) {
        var c = zf(this.getDiff().result, t)
        t.data = c
      } else if ('hasNext' in t && t.hasNext) {
        var u = this.getDiff()
        t.data = s.merge(u.result, t.data)
      }
      ;(this.graphQLErrors = a),
        n.fetchPolicy === 'no-cache'
          ? this.updateLastDiff(
              { result: t.data, complete: !0 },
              this.getDiffOptions(n.variables)
            )
          : i !== 0 &&
            (Fs(t, n.errorPolicy)
              ? this.cache.performTransaction(function (l) {
                  if (o.shouldWrite(t, n.variables))
                    l.writeQuery({
                      query: r,
                      data: t.data,
                      variables: n.variables,
                      overwrite: i === 1,
                    }),
                      (o.lastWrite = {
                        result: t,
                        variables: n.variables,
                        dmCount: Dr.get(o.cache),
                      })
                  else if (o.lastDiff && o.lastDiff.diff.complete) {
                    t.data = o.lastDiff.diff.result
                    return
                  }
                  var h = o.getDiffOptions(n.variables),
                    f = l.diff(h)
                  o.stopped || o.updateWatch(n.variables),
                    o.updateLastDiff(f, h),
                    f.complete && (t.data = f.result)
                })
              : (this.lastWrite = void 0))
    }),
    (e.prototype.markReady = function () {
      return (this.networkError = null), (this.networkStatus = pe.ready)
    }),
    (e.prototype.markError = function (t) {
      return (
        (this.networkStatus = pe.error),
        (this.lastWrite = void 0),
        this.reset(),
        t.graphQLErrors && (this.graphQLErrors = t.graphQLErrors),
        t.networkError && (this.networkError = t.networkError),
        t
      )
    }),
    e
  )
})()
function Fs(e, t) {
  t === void 0 && (t = 'none')
  var r = t === 'ignore' || t === 'all',
    n = !mi(e)
  return !n && r && e.data && (n = !0), n
}
var Iw = Object.prototype.hasOwnProperty,
  Fw = (function () {
    function e(t) {
      var r = t.cache,
        n = t.link,
        i = t.defaultOptions,
        o = t.queryDeduplication,
        s = o === void 0 ? !1 : o,
        a = t.onBroadcast,
        c = t.ssrMode,
        u = c === void 0 ? !1 : c,
        l = t.clientAwareness,
        h = l === void 0 ? {} : l,
        f = t.localState,
        d = t.assumeImmutableResults
      ;(this.clientAwareness = {}),
        (this.queries = new Map()),
        (this.fetchCancelFns = new Map()),
        (this.transformCache = new (kr ? WeakMap : Map)()),
        (this.queryIdCounter = 1),
        (this.requestIdCounter = 1),
        (this.mutationIdCounter = 1),
        (this.inFlightLinkObservables = new Map()),
        (this.cache = r),
        (this.link = n),
        (this.defaultOptions = i || Object.create(null)),
        (this.queryDeduplication = s),
        (this.clientAwareness = h),
        (this.localState = f || new Sh({ cache: r })),
        (this.ssrMode = u),
        (this.assumeImmutableResults = !!d),
        (this.onBroadcast = a) && (this.mutationStore = Object.create(null))
    }
    return (
      (e.prototype.stop = function () {
        var t = this
        this.queries.forEach(function (r, n) {
          t.stopQueryNoBroadcast(n)
        }),
          this.cancelPendingFetches(new ze(13))
      }),
      (e.prototype.cancelPendingFetches = function (t) {
        this.fetchCancelFns.forEach(function (r) {
          return r(t)
        }),
          this.fetchCancelFns.clear()
      }),
      (e.prototype.mutate = function (t) {
        var r,
          n,
          i = t.mutation,
          o = t.variables,
          s = t.optimisticResponse,
          a = t.updateQueries,
          c = t.refetchQueries,
          u = c === void 0 ? [] : c,
          l = t.awaitRefetchQueries,
          h = l === void 0 ? !1 : l,
          f = t.update,
          d = t.onQueryUpdated,
          p = t.fetchPolicy,
          b =
            p === void 0
              ? ((r = this.defaultOptions.mutate) === null || r === void 0
                  ? void 0
                  : r.fetchPolicy) || 'network-only'
              : p,
          w = t.errorPolicy,
          v =
            w === void 0
              ? ((n = this.defaultOptions.mutate) === null || n === void 0
                  ? void 0
                  : n.errorPolicy) || 'none'
              : w,
          y = t.keepRootFields,
          g = t.context
        return Gt(this, void 0, void 0, function () {
          var E, S, C, x, T, B
          return Xt(this, function (L) {
            switch (L.label) {
              case 0:
                return (
                  fe(i, 14),
                  fe(b === 'network-only' || b === 'no-cache', 15),
                  (E = this.generateMutationId()),
                  (S = this.transform(i)),
                  (C = S.document),
                  (x = S.hasClientExports),
                  (i = this.cache.transformForLink(C)),
                  (o = this.getVariables(i, o)),
                  x
                    ? [4, this.localState.addExportedVariables(i, o, g)]
                    : [3, 2]
                )
              case 1:
                ;(o = L.sent()), (L.label = 2)
              case 2:
                return (
                  (T =
                    this.mutationStore &&
                    (this.mutationStore[E] = {
                      mutation: i,
                      variables: o,
                      loading: !0,
                      error: null,
                    })),
                  s &&
                    this.markMutationOptimistic(s, {
                      mutationId: E,
                      document: i,
                      variables: o,
                      fetchPolicy: b,
                      errorPolicy: v,
                      context: g,
                      updateQueries: a,
                      update: f,
                      keepRootFields: y,
                    }),
                  this.broadcastQueries(),
                  (B = this),
                  [
                    2,
                    new Promise(function (J, j) {
                      return To(
                        B.getObservableFromLink(
                          i,
                          O(O({}, g), { optimisticResponse: s }),
                          o,
                          !1
                        ),
                        function (z) {
                          if (mi(z) && v === 'none')
                            throw new Nt({ graphQLErrors: ws(z) })
                          T && ((T.loading = !1), (T.error = null))
                          var A = O({}, z)
                          return (
                            typeof u == 'function' && (u = u(A)),
                            v === 'ignore' && mi(A) && delete A.errors,
                            B.markMutationResult({
                              mutationId: E,
                              result: A,
                              document: i,
                              variables: o,
                              fetchPolicy: b,
                              errorPolicy: v,
                              context: g,
                              update: f,
                              updateQueries: a,
                              awaitRefetchQueries: h,
                              refetchQueries: u,
                              removeOptimistic: s ? E : void 0,
                              onQueryUpdated: d,
                              keepRootFields: y,
                            })
                          )
                        }
                      ).subscribe({
                        next: function (z) {
                          B.broadcastQueries(),
                            (!('hasNext' in z) || z.hasNext === !1) && J(z)
                        },
                        error: function (z) {
                          T && ((T.loading = !1), (T.error = z)),
                            s && B.cache.removeOptimistic(E),
                            B.broadcastQueries(),
                            j(z instanceof Nt ? z : new Nt({ networkError: z }))
                        },
                      })
                    }),
                  ]
                )
            }
          })
        })
      }),
      (e.prototype.markMutationResult = function (t, r) {
        var n = this
        r === void 0 && (r = this.cache)
        var i = t.result,
          o = [],
          s = t.fetchPolicy === 'no-cache'
        if (!s && Fs(i, t.errorPolicy)) {
          if (
            (Hr(i) ||
              o.push({
                result: i.data,
                dataId: 'ROOT_MUTATION',
                query: t.document,
                variables: t.variables,
              }),
            Hr(i) && yt(i.incremental))
          ) {
            var a = r.diff({
                id: 'ROOT_MUTATION',
                query: this.transform(t.document).asQuery,
                variables: t.variables,
                optimistic: !1,
                returnPartialData: !0,
              }),
              c = zf(a.result, i)
            typeof c < 'u' &&
              ((i.data = c),
              o.push({
                result: c,
                dataId: 'ROOT_MUTATION',
                query: t.document,
                variables: t.variables,
              }))
          }
          var u = t.updateQueries
          u &&
            this.queries.forEach(function (h, f) {
              var d = h.observableQuery,
                p = d && d.queryName
              if (!(!p || !Iw.call(u, p))) {
                var b = u[p],
                  w = n.queries.get(f),
                  v = w.document,
                  y = w.variables,
                  g = r.diff({
                    query: v,
                    variables: y,
                    returnPartialData: !0,
                    optimistic: !1,
                  }),
                  E = g.result,
                  S = g.complete
                if (S && E) {
                  var C = b(E, {
                    mutationResult: i,
                    queryName: (v && ms(v)) || void 0,
                    queryVariables: y,
                  })
                  C &&
                    o.push({
                      result: C,
                      dataId: 'ROOT_QUERY',
                      query: v,
                      variables: y,
                    })
                }
              }
            })
        }
        if (
          o.length > 0 ||
          t.refetchQueries ||
          t.update ||
          t.onQueryUpdated ||
          t.removeOptimistic
        ) {
          var l = []
          if (
            (this.refetchQueries({
              updateCache: function (h) {
                s ||
                  o.forEach(function (b) {
                    return h.write(b)
                  })
                var f = t.update,
                  d = !p0(i) || (Hr(i) && !i.hasNext)
                if (f) {
                  if (!s) {
                    var p = h.diff({
                      id: 'ROOT_MUTATION',
                      query: n.transform(t.document).asQuery,
                      variables: t.variables,
                      optimistic: !1,
                      returnPartialData: !0,
                    })
                    p.complete &&
                      ((i = O(O({}, i), { data: p.result })),
                      'incremental' in i && delete i.incremental,
                      'hasNext' in i && delete i.hasNext)
                  }
                  d && f(h, i, { context: t.context, variables: t.variables })
                }
                !s &&
                  !t.keepRootFields &&
                  d &&
                  h.modify({
                    id: 'ROOT_MUTATION',
                    fields: function (b, w) {
                      var v = w.fieldName,
                        y = w.DELETE
                      return v === '__typename' ? b : y
                    },
                  })
              },
              include: t.refetchQueries,
              optimistic: !1,
              removeOptimistic: t.removeOptimistic,
              onQueryUpdated: t.onQueryUpdated || null,
            }).forEach(function (h) {
              return l.push(h)
            }),
            t.awaitRefetchQueries || t.onQueryUpdated)
          )
            return Promise.all(l).then(function () {
              return i
            })
        }
        return Promise.resolve(i)
      }),
      (e.prototype.markMutationOptimistic = function (t, r) {
        var n = this,
          i = typeof t == 'function' ? t(r.variables) : t
        return this.cache.recordOptimisticTransaction(function (o) {
          try {
            n.markMutationResult(O(O({}, r), { result: { data: i } }), o)
          } catch {}
        }, r.mutationId)
      }),
      (e.prototype.fetchQuery = function (t, r, n) {
        return this.fetchQueryObservable(t, r, n).promise
      }),
      (e.prototype.getQueryStore = function () {
        var t = Object.create(null)
        return (
          this.queries.forEach(function (r, n) {
            t[n] = {
              variables: r.variables,
              networkStatus: r.networkStatus,
              networkError: r.networkError,
              graphQLErrors: r.graphQLErrors,
            }
          }),
          t
        )
      }),
      (e.prototype.resetErrors = function (t) {
        var r = this.queries.get(t)
        r && ((r.networkError = void 0), (r.graphQLErrors = []))
      }),
      (e.prototype.transform = function (t) {
        var r = this.transformCache
        if (!r.has(t)) {
          var n = this.cache.transformDocument(t),
            i = Kb(n),
            o = this.localState.clientQuery(n),
            s = i && this.localState.serverQuery(i),
            a = {
              document: n,
              hasClientExports: Rb(n),
              hasForcedResolvers: this.localState.shouldForceResolvers(n),
              clientQuery: o,
              serverQuery: s,
              defaultVars: Ea(zn(n)),
              asQuery: O(O({}, n), {
                definitions: n.definitions.map(function (u) {
                  return u.kind === 'OperationDefinition' &&
                    u.operation !== 'query'
                    ? O(O({}, u), { operation: 'query' })
                    : u
                }),
              }),
            },
            c = function (u) {
              u && !r.has(u) && r.set(u, a)
            }
          c(t), c(n), c(o), c(s)
        }
        return r.get(t)
      }),
      (e.prototype.getVariables = function (t, r) {
        return O(O({}, this.transform(t).defaultVars), r)
      }),
      (e.prototype.watchQuery = function (t) {
        ;(t = O(O({}, t), {
          variables: this.getVariables(t.query, t.variables),
        })),
          typeof t.notifyOnNetworkStatusChange > 'u' &&
            (t.notifyOnNetworkStatusChange = !1)
        var r = new Mo(this),
          n = new Is({ queryManager: this, queryInfo: r, options: t })
        return (
          this.queries.set(n.queryId, r),
          r.init({
            document: n.query,
            observableQuery: n,
            variables: n.variables,
          }),
          n
        )
      }),
      (e.prototype.query = function (t, r) {
        var n = this
        return (
          r === void 0 && (r = this.generateQueryId()),
          fe(t.query, 16),
          fe(t.query.kind === 'Document', 17),
          fe(!t.returnPartialData, 18),
          fe(!t.pollInterval, 19),
          this.fetchQuery(r, t).finally(function () {
            return n.stopQuery(r)
          })
        )
      }),
      (e.prototype.generateQueryId = function () {
        return String(this.queryIdCounter++)
      }),
      (e.prototype.generateRequestId = function () {
        return this.requestIdCounter++
      }),
      (e.prototype.generateMutationId = function () {
        return String(this.mutationIdCounter++)
      }),
      (e.prototype.stopQueryInStore = function (t) {
        this.stopQueryInStoreNoBroadcast(t), this.broadcastQueries()
      }),
      (e.prototype.stopQueryInStoreNoBroadcast = function (t) {
        var r = this.queries.get(t)
        r && r.stop()
      }),
      (e.prototype.clearStore = function (t) {
        return (
          t === void 0 && (t = { discardWatches: !0 }),
          this.cancelPendingFetches(new ze(20)),
          this.queries.forEach(function (r) {
            r.observableQuery ? (r.networkStatus = pe.loading) : r.stop()
          }),
          this.mutationStore && (this.mutationStore = Object.create(null)),
          this.cache.reset(t)
        )
      }),
      (e.prototype.getObservableQueries = function (t) {
        var r = this
        t === void 0 && (t = 'active')
        var n = new Map(),
          i = new Map(),
          o = new Set()
        return (
          Array.isArray(t) &&
            t.forEach(function (s) {
              typeof s == 'string'
                ? i.set(s, !1)
                : Ib(s)
                ? i.set(r.transform(s).document, !1)
                : Re(s) && s.query && o.add(s)
            }),
          this.queries.forEach(function (s, a) {
            var c = s.observableQuery,
              u = s.document
            if (c) {
              if (t === 'all') {
                n.set(a, c)
                return
              }
              var l = c.queryName,
                h = c.options.fetchPolicy
              if (h === 'standby' || (t === 'active' && !c.hasObservers()))
                return
              ;(t === 'active' || (l && i.has(l)) || (u && i.has(u))) &&
                (n.set(a, c), l && i.set(l, !0), u && i.set(u, !0))
            }
          }),
          o.size &&
            o.forEach(function (s) {
              var a = hu('legacyOneTimeQuery'),
                c = r
                  .getQuery(a)
                  .init({ document: s.query, variables: s.variables }),
                u = new Is({
                  queryManager: r,
                  queryInfo: c,
                  options: O(O({}, s), { fetchPolicy: 'network-only' }),
                })
              fe(u.queryId === a), c.setObservableQuery(u), n.set(a, u)
            }),
          n
        )
      }),
      (e.prototype.reFetchObservableQueries = function (t) {
        var r = this
        t === void 0 && (t = !1)
        var n = []
        return (
          this.getObservableQueries(t ? 'all' : 'active').forEach(function (
            i,
            o
          ) {
            var s = i.options.fetchPolicy
            i.resetLastResults(),
              (t || (s !== 'standby' && s !== 'cache-only')) &&
                n.push(i.refetch()),
              r.getQuery(o).setDiff(null)
          }),
          this.broadcastQueries(),
          Promise.all(n)
        )
      }),
      (e.prototype.setObservableQuery = function (t) {
        this.getQuery(t.queryId).setObservableQuery(t)
      }),
      (e.prototype.startGraphQLSubscription = function (t) {
        var r = this,
          n = t.query,
          i = t.fetchPolicy,
          o = t.errorPolicy,
          s = t.variables,
          a = t.context,
          c = a === void 0 ? {} : a
        ;(n = this.transform(n).document), (s = this.getVariables(n, s))
        var u = function (h) {
          return r.getObservableFromLink(n, c, h).map(function (f) {
            if (
              (i !== 'no-cache' &&
                (Fs(f, o) &&
                  r.cache.write({
                    query: n,
                    result: f.data,
                    dataId: 'ROOT_SUBSCRIPTION',
                    variables: h,
                  }),
                r.broadcastQueries()),
              mi(f))
            )
              throw new Nt({ graphQLErrors: f.errors })
            return f
          })
        }
        if (this.transform(n).hasClientExports) {
          var l = this.localState.addExportedVariables(n, s, c).then(u)
          return new de(function (h) {
            var f = null
            return (
              l.then(function (d) {
                return (f = d.subscribe(h))
              }, h.error),
              function () {
                return f && f.unsubscribe()
              }
            )
          })
        }
        return u(s)
      }),
      (e.prototype.stopQuery = function (t) {
        this.stopQueryNoBroadcast(t), this.broadcastQueries()
      }),
      (e.prototype.stopQueryNoBroadcast = function (t) {
        this.stopQueryInStoreNoBroadcast(t), this.removeQuery(t)
      }),
      (e.prototype.removeQuery = function (t) {
        this.fetchCancelFns.delete(t),
          this.queries.has(t) &&
            (this.getQuery(t).stop(), this.queries.delete(t))
      }),
      (e.prototype.broadcastQueries = function () {
        this.onBroadcast && this.onBroadcast(),
          this.queries.forEach(function (t) {
            return t.notify()
          })
      }),
      (e.prototype.getLocalState = function () {
        return this.localState
      }),
      (e.prototype.getObservableFromLink = function (t, r, n, i) {
        var o = this,
          s
        i === void 0 &&
          (i =
            (s = r == null ? void 0 : r.queryDeduplication) !== null &&
            s !== void 0
              ? s
              : this.queryDeduplication)
        var a,
          c = this.transform(t).serverQuery
        if (c) {
          var u = this,
            l = u.inFlightLinkObservables,
            h = u.link,
            f = {
              query: c,
              variables: n,
              operationName: ms(c) || void 0,
              context: this.prepareContext(O(O({}, r), { forceFetch: !i })),
            }
          if (((r = f.context), i)) {
            var d = l.get(c) || new Map()
            l.set(c, d)
            var p = Er(n)
            if (((a = d.get(p)), !a)) {
              var b = new bn([_s(h, f)])
              d.set(p, (a = b)),
                b.beforeNext(function () {
                  d.delete(p) && d.size < 1 && l.delete(c)
                })
            }
          } else a = new bn([_s(h, f)])
        } else (a = new bn([de.of({ data: {} })])), (r = this.prepareContext(r))
        var w = this.transform(t).clientQuery
        return (
          w &&
            (a = To(a, function (v) {
              return o.localState.runResolvers({
                document: w,
                remoteResult: v,
                context: r,
                variables: n,
              })
            })),
          a
        )
      }),
      (e.prototype.getResultsFromLink = function (t, r, n) {
        var i = (t.lastRequestId = this.generateRequestId()),
          o = this.cache.transformForLink(this.transform(t.document).document)
        return To(
          this.getObservableFromLink(o, n.context, n.variables),
          function (s) {
            var a = ws(s),
              c = a.length > 0
            if (i >= t.lastRequestId) {
              if (c && n.errorPolicy === 'none')
                throw t.markError(new Nt({ graphQLErrors: a }))
              t.markResult(s, o, n, r), t.markReady()
            }
            var u = { data: s.data, loading: !1, networkStatus: pe.ready }
            return (
              c &&
                n.errorPolicy !== 'ignore' &&
                ((u.errors = a), (u.networkStatus = pe.error)),
              u
            )
          },
          function (s) {
            var a = Eh(s) ? s : new Nt({ networkError: s })
            throw (i >= t.lastRequestId && t.markError(a), a)
          }
        )
      }),
      (e.prototype.fetchQueryObservable = function (t, r, n) {
        var i = this
        n === void 0 && (n = pe.loading)
        var o = this.transform(r.query).document,
          s = this.getVariables(o, r.variables),
          a = this.getQuery(t),
          c = this.defaultOptions.watchQuery,
          u = r.fetchPolicy,
          l = u === void 0 ? (c && c.fetchPolicy) || 'cache-first' : u,
          h = r.errorPolicy,
          f = h === void 0 ? (c && c.errorPolicy) || 'none' : h,
          d = r.returnPartialData,
          p = d === void 0 ? !1 : d,
          b = r.notifyOnNetworkStatusChange,
          w = b === void 0 ? !1 : b,
          v = r.context,
          y = v === void 0 ? {} : v,
          g = Object.assign({}, r, {
            query: o,
            variables: s,
            fetchPolicy: l,
            errorPolicy: f,
            returnPartialData: p,
            notifyOnNetworkStatusChange: w,
            context: y,
          }),
          E = function (x) {
            g.variables = x
            var T = i.fetchQueryByPolicy(a, g, n)
            return (
              g.fetchPolicy !== 'standby' &&
                T.length > 0 &&
                a.observableQuery &&
                a.observableQuery.applyNextFetchPolicy('after-fetch', r),
              T
            )
          },
          S = function () {
            return i.fetchCancelFns.delete(t)
          }
        this.fetchCancelFns.set(t, function (x) {
          S(),
            setTimeout(function () {
              return C.cancel(x)
            })
        })
        var C = new bn(
          this.transform(g.query).hasClientExports
            ? this.localState
                .addExportedVariables(g.query, g.variables, g.context)
                .then(E)
            : E(g.variables)
        )
        return C.promise.then(S, S), C
      }),
      (e.prototype.refetchQueries = function (t) {
        var r = this,
          n = t.updateCache,
          i = t.include,
          o = t.optimistic,
          s = o === void 0 ? !1 : o,
          a = t.removeOptimistic,
          c = a === void 0 ? (s ? hu('refetchQueries') : void 0) : a,
          u = t.onQueryUpdated,
          l = new Map()
        i &&
          this.getObservableQueries(i).forEach(function (f, d) {
            l.set(d, { oq: f, lastDiff: r.getQuery(d).getDiff() })
          })
        var h = new Map()
        return (
          n &&
            this.cache.batch({
              update: n,
              optimistic: (s && c) || !1,
              removeOptimistic: c,
              onWatchUpdated: function (f, d, p) {
                var b = f.watcher instanceof Mo && f.watcher.observableQuery
                if (b) {
                  if (u) {
                    l.delete(b.queryId)
                    var w = u(b, d, p)
                    return (
                      w === !0 && (w = b.refetch()), w !== !1 && h.set(b, w), w
                    )
                  }
                  u !== null &&
                    l.set(b.queryId, { oq: b, lastDiff: p, diff: d })
                }
              },
            }),
          l.size &&
            l.forEach(function (f, d) {
              var p = f.oq,
                b = f.lastDiff,
                w = f.diff,
                v
              if (u) {
                if (!w) {
                  var y = p.queryInfo
                  y.reset(), (w = y.getDiff())
                }
                v = u(p, w, b)
              }
              ;(!u || v === !0) && (v = p.refetch()),
                v !== !1 && h.set(p, v),
                d.indexOf('legacyOneTimeQuery') >= 0 &&
                  r.stopQueryNoBroadcast(d)
            }),
          c && this.cache.removeOptimistic(c),
          h
        )
      }),
      (e.prototype.fetchQueryByPolicy = function (t, r, n) {
        var i = this,
          o = r.query,
          s = r.variables,
          a = r.fetchPolicy,
          c = r.refetchWritePolicy,
          u = r.errorPolicy,
          l = r.returnPartialData,
          h = r.context,
          f = r.notifyOnNetworkStatusChange,
          d = t.networkStatus
        t.init({
          document: this.transform(o).document,
          variables: s,
          networkStatus: n,
        })
        var p = function () {
            return t.getDiff(s)
          },
          b = function (E, S) {
            S === void 0 && (S = t.networkStatus || pe.loading)
            var C = E.result,
              x = function (T) {
                return de.of(
                  O(
                    { data: T, loading: Hn(S), networkStatus: S },
                    E.complete ? null : { partial: !0 }
                  )
                )
              }
            return C && i.transform(o).hasForcedResolvers
              ? i.localState
                  .runResolvers({
                    document: o,
                    remoteResult: { data: C },
                    context: h,
                    variables: s,
                    onlyRunForcedResolvers: !0,
                  })
                  .then(function (T) {
                    return x(T.data || void 0)
                  })
              : x(C)
          },
          w = a === 'no-cache' ? 0 : n === pe.refetch && c !== 'merge' ? 1 : 2,
          v = function () {
            return i.getResultsFromLink(t, w, {
              variables: s,
              context: h,
              fetchPolicy: a,
              errorPolicy: u,
            })
          },
          y = f && typeof d == 'number' && d !== n && Hn(n)
        switch (a) {
          default:
          case 'cache-first': {
            var g = p()
            return g.complete
              ? [b(g, t.markReady())]
              : l || y
              ? [b(g), v()]
              : [v()]
          }
          case 'cache-and-network': {
            var g = p()
            return g.complete || l || y ? [b(g), v()] : [v()]
          }
          case 'cache-only':
            return [b(p(), t.markReady())]
          case 'network-only':
            return y ? [b(p()), v()] : [v()]
          case 'no-cache':
            return y ? [b(t.getDiff()), v()] : [v()]
          case 'standby':
            return []
        }
      }),
      (e.prototype.getQuery = function (t) {
        return (
          t && !this.queries.has(t) && this.queries.set(t, new Mo(this, t)),
          this.queries.get(t)
        )
      }),
      (e.prototype.prepareContext = function (t) {
        t === void 0 && (t = {})
        var r = this.localState.prepareContext(t)
        return O(O({}, r), { clientAwareness: this.clientAwareness })
      }),
      e
    )
  })(),
  Dw = !1,
  Oh = (function () {
    function e(t) {
      var r = this
      ;(this.resetStoreCallbacks = []), (this.clearStoreCallbacks = [])
      var n = t.uri,
        i = t.credentials,
        o = t.headers,
        s = t.cache,
        a = t.ssrMode,
        c = a === void 0 ? !1 : a,
        u = t.ssrForceFetchDelay,
        l = u === void 0 ? 0 : u,
        h = t.connectToDevTools,
        f =
          h === void 0
            ? typeof window == 'object' && !window.__APOLLO_CLIENT__ && !1
            : h,
        d = t.queryDeduplication,
        p = d === void 0 ? !0 : d,
        b = t.defaultOptions,
        w = t.assumeImmutableResults,
        v = w === void 0 ? !1 : w,
        y = t.resolvers,
        g = t.typeDefs,
        E = t.fragmentMatcher,
        S = t.name,
        C = t.version,
        x = t.link
      if (
        (x ||
          (x = n ? new V0({ uri: n, credentials: i, headers: o }) : ct.empty()),
        !s)
      )
        throw new ze(9)
      if (
        ((this.link = x),
        (this.cache = s),
        (this.disableNetworkFetches = c || l > 0),
        (this.queryDeduplication = p),
        (this.defaultOptions = b || Object.create(null)),
        (this.typeDefs = g),
        l &&
          setTimeout(function () {
            return (r.disableNetworkFetches = !1)
          }, l),
        (this.watchQuery = this.watchQuery.bind(this)),
        (this.query = this.query.bind(this)),
        (this.mutate = this.mutate.bind(this)),
        (this.resetStore = this.resetStore.bind(this)),
        (this.reFetchObservableQueries =
          this.reFetchObservableQueries.bind(this)),
        f && typeof window == 'object' && (window.__APOLLO_CLIENT__ = this),
        !Dw &&
          f &&
          !1 &&
          typeof window < 'u' &&
          window.document &&
          window.top === window.self &&
          !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__)
      )
        var T, B
      ;(this.version = b0),
        (this.localState = new Sh({
          cache: s,
          client: this,
          resolvers: y,
          fragmentMatcher: E,
        })),
        (this.queryManager = new Fw({
          cache: this.cache,
          link: this.link,
          defaultOptions: this.defaultOptions,
          queryDeduplication: p,
          ssrMode: c,
          clientAwareness: { name: S, version: C },
          localState: this.localState,
          assumeImmutableResults: v,
          onBroadcast: f
            ? function () {
                r.devToolsHookCb &&
                  r.devToolsHookCb({
                    action: {},
                    state: {
                      queries: r.queryManager.getQueryStore(),
                      mutations: r.queryManager.mutationStore || {},
                    },
                    dataWithOptimisticResults: r.cache.extract(!0),
                  })
              }
            : void 0,
        }))
    }
    return (
      (e.prototype.stop = function () {
        this.queryManager.stop()
      }),
      (e.prototype.watchQuery = function (t) {
        return (
          this.defaultOptions.watchQuery &&
            (t = Co(this.defaultOptions.watchQuery, t)),
          this.disableNetworkFetches &&
            (t.fetchPolicy === 'network-only' ||
              t.fetchPolicy === 'cache-and-network') &&
            (t = O(O({}, t), { fetchPolicy: 'cache-first' })),
          this.queryManager.watchQuery(t)
        )
      }),
      (e.prototype.query = function (t) {
        return (
          this.defaultOptions.query && (t = Co(this.defaultOptions.query, t)),
          fe(t.fetchPolicy !== 'cache-and-network', 10),
          this.disableNetworkFetches &&
            t.fetchPolicy === 'network-only' &&
            (t = O(O({}, t), { fetchPolicy: 'cache-first' })),
          this.queryManager.query(t)
        )
      }),
      (e.prototype.mutate = function (t) {
        return (
          this.defaultOptions.mutate && (t = Co(this.defaultOptions.mutate, t)),
          this.queryManager.mutate(t)
        )
      }),
      (e.prototype.subscribe = function (t) {
        return this.queryManager.startGraphQLSubscription(t)
      }),
      (e.prototype.readQuery = function (t, r) {
        return r === void 0 && (r = !1), this.cache.readQuery(t, r)
      }),
      (e.prototype.readFragment = function (t, r) {
        return r === void 0 && (r = !1), this.cache.readFragment(t, r)
      }),
      (e.prototype.writeQuery = function (t) {
        this.cache.writeQuery(t), this.queryManager.broadcastQueries()
      }),
      (e.prototype.writeFragment = function (t) {
        this.cache.writeFragment(t), this.queryManager.broadcastQueries()
      }),
      (e.prototype.__actionHookForDevTools = function (t) {
        this.devToolsHookCb = t
      }),
      (e.prototype.__requestRaw = function (t) {
        return _s(this.link, t)
      }),
      (e.prototype.resetStore = function () {
        var t = this
        return Promise.resolve()
          .then(function () {
            return t.queryManager.clearStore({ discardWatches: !1 })
          })
          .then(function () {
            return Promise.all(
              t.resetStoreCallbacks.map(function (r) {
                return r()
              })
            )
          })
          .then(function () {
            return t.reFetchObservableQueries()
          })
      }),
      (e.prototype.clearStore = function () {
        var t = this
        return Promise.resolve()
          .then(function () {
            return t.queryManager.clearStore({ discardWatches: !0 })
          })
          .then(function () {
            return Promise.all(
              t.clearStoreCallbacks.map(function (r) {
                return r()
              })
            )
          })
      }),
      (e.prototype.onResetStore = function (t) {
        var r = this
        return (
          this.resetStoreCallbacks.push(t),
          function () {
            r.resetStoreCallbacks = r.resetStoreCallbacks.filter(function (n) {
              return n !== t
            })
          }
        )
      }),
      (e.prototype.onClearStore = function (t) {
        var r = this
        return (
          this.clearStoreCallbacks.push(t),
          function () {
            r.clearStoreCallbacks = r.clearStoreCallbacks.filter(function (n) {
              return n !== t
            })
          }
        )
      }),
      (e.prototype.reFetchObservableQueries = function (t) {
        return this.queryManager.reFetchObservableQueries(t)
      }),
      (e.prototype.refetchQueries = function (t) {
        var r = this.queryManager.refetchQueries(t),
          n = [],
          i = []
        r.forEach(function (s, a) {
          n.push(a), i.push(s)
        })
        var o = Promise.all(i)
        return (o.queries = n), (o.results = i), o.catch(function (s) {}), o
      }),
      (e.prototype.getObservableQueries = function (t) {
        return (
          t === void 0 && (t = 'active'),
          this.queryManager.getObservableQueries(t)
        )
      }),
      (e.prototype.extract = function (t) {
        return this.cache.extract(t)
      }),
      (e.prototype.restore = function (t) {
        return this.cache.restore(t)
      }),
      (e.prototype.addResolvers = function (t) {
        this.localState.addResolvers(t)
      }),
      (e.prototype.setResolvers = function (t) {
        this.localState.setResolvers(t)
      }),
      (e.prototype.getResolvers = function () {
        return this.localState.getResolvers()
      }),
      (e.prototype.setLocalStateFragmentMatcher = function (t) {
        this.localState.setFragmentMatcher(t)
      }),
      (e.prototype.setLink = function (t) {
        this.link = this.queryManager.link = t
      }),
      e
    )
  })(),
  Mw = Symbol('default-apollo-client'),
  kh = Symbol('apollo-clients')
function No(e, t) {
  return e ? e.default : t ?? void 0
}
function jo(e, t) {
  if (!e)
    throw new Error(
      `No apolloClients injection found, tried to resolve '${t}' clientId`
    )
  return e[t]
}
function Nw(e) {
  let t
  const r = Qn
  if (!mt()) t = (i) => (i ? jo(r, i) : No(r, r.default))
  else {
    const i = Ve(kh, null),
      o = Ve(Mw, null)
    t = (s) => {
      if (s) {
        const c = jo(i, s)
        return c || jo(r, s)
      }
      const a = No(i, o)
      return a || No(r, r.default)
    }
  }
  function n(i = e) {
    const o = t(i)
    if (!o)
      throw new Error(
        `Apollo client with id ${
          i ?? 'default'
        } not found. Use provideApolloClient() if you are outside of a component setup.`
      )
    return o
  }
  return {
    resolveClient: n,
    get client() {
      return n()
    },
  }
}
var Qn = {}
function jw(e) {
  return (
    (Qn = { default: e }),
    function (t) {
      const r = t()
      return (Qn = {}), r
    }
  )
}
function Lw(e) {
  return (
    (Qn = e),
    function (t) {
      const r = t()
      return (Qn = {}), r
    }
  )
}
function $u() {
  const e = []
  function t(o) {
    return e.push(o), { off: () => r(o) }
  }
  function r(o) {
    const s = e.indexOf(o)
    s !== -1 && e.splice(s, 1)
  }
  function n(o) {
    for (const s of e) s(o)
  }
  function i() {
    return e.length
  }
  return { on: t, off: r, trigger: n, getCount: i }
}
function qw() {
  var e, t, r
  const n = mt(),
    i =
      (r =
        (e = n == null ? void 0 : n.$root) != null
          ? e
          : n == null
          ? void 0
          : n.root) != null
        ? r
        : (t = n == null ? void 0 : n.proxy) == null
        ? void 0
        : t.$root
  if (!i) throw new Error('Instance $root not found')
  let o
  return (
    i._apolloAppTracking
      ? (o = i._apolloAppTracking)
      : (o = i._apolloAppTracking =
          {
            queries: ge(0),
            mutations: ge(0),
            subscriptions: ge(0),
            components: new Map(),
          }),
    { appTracking: o }
  )
}
function Bw() {
  const e = mt()
  if (!e)
    throw new Error('getCurrentTracking must be used during a component setup')
  const { appTracking: t } = qw()
  let r
  return (
    t.components.has(e)
      ? (r = t.components.get(e))
      : (t.components.set(
          e,
          (r = { queries: ge(0), mutations: ge(0), subscriptions: ge(0) })
        ),
        jn(() => {
          t.components.delete(e)
        })),
    { appTracking: t, tracking: r }
  )
}
function $w(e, t) {
  const { appTracking: r, tracking: n } = Bw()
  jt(
    e,
    (i, o) => {
      if (o != null && i !== o) {
        const s = i ? 1 : -1
        ;(n[t].value += s), (r[t].value += s)
      }
    },
    { immediate: !0 }
  ),
    cr(() => {
      e.value && (n[t].value--, r[t].value--)
    })
}
function Hw(e) {
  $w(e, 'mutations')
}
function Qw(e) {
  return e instanceof Error
    ? Eh(e)
      ? e
      : new Nt({ networkError: e, errorMessage: e.message })
    : new Nt({
        networkError: Object.assign(new Error(), { originalError: e }),
        errorMessage: String(e),
      })
}
function xE(e, t = {}) {
  const r = mt(),
    n = ge(!1)
  r && Hw(n)
  const i = ge(null),
    o = ge(!1),
    s = $u(),
    a = $u(),
    { resolveClient: c } = Nw()
  async function u(l, h = {}) {
    let f
    typeof e == 'function' ? (f = e()) : Te(e) ? (f = e.value) : (f = e)
    let d
    typeof t == 'function' ? (d = t()) : Te(t) ? (d = t.value) : (d = t)
    const p = c(d.clientId)
    ;(i.value = null), (n.value = !0), (o.value = !0)
    try {
      const b = await p.mutate({
        mutation: f,
        ...d,
        ...h,
        variables: l ?? d.variables ? { ...d.variables, ...l } : void 0,
      })
      return (n.value = !1), s.trigger(b), b
    } catch (b) {
      const w = Qw(b)
      if (
        ((i.value = w),
        (n.value = !1),
        a.trigger(w),
        d.throws === 'always' || (d.throws !== 'never' && !a.getCount()))
      )
        throw w
    }
    return null
  }
  return (
    r &&
      cr(() => {
        n.value = !1
      }),
    { mutate: u, loading: n, error: i, called: o, onDone: s.on, onError: a.on }
  )
}
function Uw(e) {
  return Re(e) && 'code' in e && 'reason' in e
}
var Vw = (function (e) {
  ut(t, e)
  function t(r) {
    var n = e.call(this) || this
    return (n.client = r), n
  }
  return (
    (t.prototype.request = function (r) {
      var n = this
      return new de(function (i) {
        return n.client.subscribe(O(O({}, r), { query: ya(r.query) }), {
          next: i.next.bind(i),
          complete: i.complete.bind(i),
          error: function (o) {
            return o instanceof Error
              ? i.error(o)
              : Uw(o)
              ? i.error(
                  new Error(
                    'Socket closed with event '
                      .concat(o.code, ' ')
                      .concat(o.reason || '')
                  )
                )
              : i.error(new Nt({ graphQLErrors: Array.isArray(o) ? o : [o] }))
          },
        })
      })
    }),
    t
  )
})(ct)
function Ww(e) {
  return new ct(function (t, r) {
    var n = Sr(t, [])
    return new de(function (i) {
      var o,
        s = !1
      return (
        Promise.resolve(n)
          .then(function (a) {
            return e(a, t.getContext())
          })
          .then(t.setContext)
          .then(function () {
            s ||
              (o = r(t).subscribe({
                next: i.next.bind(i),
                error: i.error.bind(i),
                complete: i.complete.bind(i),
              }))
          })
          .catch(i.error.bind(i)),
        function () {
          ;(s = !0), o && o.unsubscribe()
        }
      )
    })
  })
}
function Ke(e) {
  return e === null ? 'null' : Array.isArray(e) ? 'array' : typeof e
}
function yr(e) {
  return Ke(e) === 'object'
}
function zw(e) {
  return Array.isArray(e) && e.length > 0 && e.every((t) => 'message' in t)
}
function Hu(e, t) {
  return e.length < 124 ? e : t
}
const Kw = 'graphql-transport-ws'
var st
;(function (e) {
  ;(e[(e.InternalServerError = 4500)] = 'InternalServerError'),
    (e[(e.InternalClientError = 4005)] = 'InternalClientError'),
    (e[(e.BadRequest = 4400)] = 'BadRequest'),
    (e[(e.BadResponse = 4004)] = 'BadResponse'),
    (e[(e.Unauthorized = 4401)] = 'Unauthorized'),
    (e[(e.Forbidden = 4403)] = 'Forbidden'),
    (e[(e.SubprotocolNotAcceptable = 4406)] = 'SubprotocolNotAcceptable'),
    (e[(e.ConnectionInitialisationTimeout = 4408)] =
      'ConnectionInitialisationTimeout'),
    (e[(e.ConnectionAcknowledgementTimeout = 4504)] =
      'ConnectionAcknowledgementTimeout'),
    (e[(e.SubscriberAlreadyExists = 4409)] = 'SubscriberAlreadyExists'),
    (e[(e.TooManyInitialisationRequests = 4429)] =
      'TooManyInitialisationRequests')
})(st || (st = {}))
var ke
;(function (e) {
  ;(e.ConnectionInit = 'connection_init'),
    (e.ConnectionAck = 'connection_ack'),
    (e.Ping = 'ping'),
    (e.Pong = 'pong'),
    (e.Subscribe = 'subscribe'),
    (e.Next = 'next'),
    (e.Error = 'error'),
    (e.Complete = 'complete')
})(ke || (ke = {}))
function Th(e) {
  if (!yr(e))
    throw new Error(`Message is expected to be an object, but got ${Ke(e)}`)
  if (!e.type) throw new Error("Message is missing the 'type' property")
  if (typeof e.type != 'string')
    throw new Error(
      `Message is expects the 'type' property to be a string, but got ${Ke(
        e.type
      )}`
    )
  switch (e.type) {
    case ke.ConnectionInit:
    case ke.ConnectionAck:
    case ke.Ping:
    case ke.Pong: {
      if ('payload' in e && !yr(e.payload))
        throw new Error(
          `"${e.type}" message expects the 'payload' property to be an object or missing, but got "${e.payload}"`
        )
      break
    }
    case ke.Subscribe: {
      if (typeof e.id != 'string')
        throw new Error(
          `"${
            e.type
          }" message expects the 'id' property to be a string, but got ${Ke(
            e.id
          )}`
        )
      if (!e.id)
        throw new Error(
          `"${e.type}" message requires a non-empty 'id' property`
        )
      if (!yr(e.payload))
        throw new Error(
          `"${
            e.type
          }" message expects the 'payload' property to be an object, but got ${Ke(
            e.payload
          )}`
        )
      if (typeof e.payload.query != 'string')
        throw new Error(
          `"${
            e.type
          }" message payload expects the 'query' property to be a string, but got ${Ke(
            e.payload.query
          )}`
        )
      if (e.payload.variables != null && !yr(e.payload.variables))
        throw new Error(
          `"${
            e.type
          }" message payload expects the 'variables' property to be a an object or nullish or missing, but got ${Ke(
            e.payload.variables
          )}`
        )
      if (
        e.payload.operationName != null &&
        Ke(e.payload.operationName) !== 'string'
      )
        throw new Error(
          `"${
            e.type
          }" message payload expects the 'operationName' property to be a string or nullish or missing, but got ${Ke(
            e.payload.operationName
          )}`
        )
      if (e.payload.extensions != null && !yr(e.payload.extensions))
        throw new Error(
          `"${
            e.type
          }" message payload expects the 'extensions' property to be a an object or nullish or missing, but got ${Ke(
            e.payload.extensions
          )}`
        )
      break
    }
    case ke.Next: {
      if (typeof e.id != 'string')
        throw new Error(
          `"${
            e.type
          }" message expects the 'id' property to be a string, but got ${Ke(
            e.id
          )}`
        )
      if (!e.id)
        throw new Error(
          `"${e.type}" message requires a non-empty 'id' property`
        )
      if (!yr(e.payload))
        throw new Error(
          `"${
            e.type
          }" message expects the 'payload' property to be an object, but got ${Ke(
            e.payload
          )}`
        )
      break
    }
    case ke.Error: {
      if (typeof e.id != 'string')
        throw new Error(
          `"${
            e.type
          }" message expects the 'id' property to be a string, but got ${Ke(
            e.id
          )}`
        )
      if (!e.id)
        throw new Error(
          `"${e.type}" message requires a non-empty 'id' property`
        )
      if (!zw(e.payload))
        throw new Error(
          `"${
            e.type
          }" message expects the 'payload' property to be an array of GraphQL errors, but got ${JSON.stringify(
            e.payload
          )}`
        )
      break
    }
    case ke.Complete: {
      if (typeof e.id != 'string')
        throw new Error(
          `"${
            e.type
          }" message expects the 'id' property to be a string, but got ${Ke(
            e.id
          )}`
        )
      if (!e.id)
        throw new Error(
          `"${e.type}" message requires a non-empty 'id' property`
        )
      break
    }
    default:
      throw new Error(`Invalid message 'type' property "${e.type}"`)
  }
  return e
}
function Jw(e, t) {
  return Th(typeof e == 'string' ? JSON.parse(e, t) : e)
}
function yn(e, t) {
  return Th(e), JSON.stringify(e, t)
}
function Yw(e) {
  const {
    url: t,
    connectionParams: r,
    lazy: n = !0,
    onNonLazyError: i = console.error,
    lazyCloseTimeout: o = 0,
    keepAlive: s = 0,
    disablePong: a,
    connectionAckWaitTimeout: c = 0,
    retryAttempts: u = 5,
    retryWait: l = async function (ne) {
      let V = 1e3
      for (let W = 0; W < ne; W++) V *= 2
      await new Promise((W) =>
        setTimeout(W, V + Math.floor(Math.random() * (3e3 - 300) + 300))
      )
    },
    shouldRetry: h = ui,
    isFatalConnectionProblem: f,
    on: d,
    webSocketImpl: p,
    generateID: b = function () {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (ne) => {
        const V = (Math.random() * 16) | 0
        return (ne == 'x' ? V : (V & 3) | 8).toString(16)
      })
    },
    jsonMessageReplacer: w,
    jsonMessageReviver: v,
  } = e
  let y
  if (p) {
    if (!Xw(p)) throw new Error('Invalid WebSocket implementation provided')
    y = p
  } else
    typeof WebSocket < 'u'
      ? (y = WebSocket)
      : typeof global < 'u'
      ? (y = global.WebSocket || global.MozWebSocket)
      : typeof window < 'u' && (y = window.WebSocket || window.MozWebSocket)
  if (!y)
    throw new Error(
      "WebSocket implementation missing; on Node you can `import WebSocket from 'ws';` and pass `webSocketImpl: WebSocket` to `createClient`"
    )
  const g = y,
    E = (() => {
      const A = (() => {
          const V = {}
          return {
            on(W, Q) {
              return (
                (V[W] = Q),
                () => {
                  delete V[W]
                }
              )
            },
            emit(W) {
              var Q
              'id' in W &&
                ((Q = V[W.id]) === null || Q === void 0 || Q.call(V, W))
            },
          }
        })(),
        ne = {
          connecting: d != null && d.connecting ? [d.connecting] : [],
          opened: d != null && d.opened ? [d.opened] : [],
          connected: d != null && d.connected ? [d.connected] : [],
          ping: d != null && d.ping ? [d.ping] : [],
          pong: d != null && d.pong ? [d.pong] : [],
          message: d != null && d.message ? [A.emit, d.message] : [A.emit],
          closed: d != null && d.closed ? [d.closed] : [],
          error: d != null && d.error ? [d.error] : [],
        }
      return {
        onMessage: A.on,
        on(V, W) {
          const Q = ne[V]
          return (
            Q.push(W),
            () => {
              Q.splice(Q.indexOf(W), 1)
            }
          )
        },
        emit(V, ...W) {
          for (const Q of [...ne[V]]) Q(...W)
        },
      }
    })()
  function S(A) {
    const ne = [
      E.on('error', (V) => {
        ne.forEach((W) => W()), A(V)
      }),
      E.on('closed', (V) => {
        ne.forEach((W) => W()), A(V)
      }),
    ]
  }
  let C,
    x = 0,
    T,
    B = !1,
    L = 0,
    J = !1
  async function j() {
    clearTimeout(T)
    const [A, ne] = await (C ??
      (C = new Promise((Q, Se) =>
        (async () => {
          if (B) {
            if ((await l(L), !x))
              return (
                (C = void 0),
                Se({ code: 1e3, reason: 'All Subscriptions Gone' })
              )
            L++
          }
          E.emit('connecting')
          const ee = new g(typeof t == 'function' ? await t() : t, Kw)
          let Oe, Ee
          function vt() {
            isFinite(s) &&
              s > 0 &&
              (clearTimeout(Ee),
              (Ee = setTimeout(() => {
                ee.readyState === g.OPEN &&
                  (ee.send(yn({ type: ke.Ping })), E.emit('ping', !1, void 0))
              }, s)))
          }
          S((R) => {
            ;(C = void 0),
              clearTimeout(Oe),
              clearTimeout(Ee),
              Se(R),
              ui(R) &&
                R.code === 4499 &&
                (ee.close(4499, 'Terminated'),
                (ee.onerror = null),
                (ee.onclose = null))
          }),
            (ee.onerror = (R) => E.emit('error', R)),
            (ee.onclose = (R) => E.emit('closed', R)),
            (ee.onopen = async () => {
              try {
                E.emit('opened', ee)
                const R = typeof r == 'function' ? await r() : r
                if (ee.readyState !== g.OPEN) return
                ee.send(
                  yn(
                    R
                      ? { type: ke.ConnectionInit, payload: R }
                      : { type: ke.ConnectionInit },
                    w
                  )
                ),
                  isFinite(c) &&
                    c > 0 &&
                    (Oe = setTimeout(() => {
                      ee.close(
                        st.ConnectionAcknowledgementTimeout,
                        'Connection acknowledgement timeout'
                      )
                    }, c)),
                  vt()
              } catch (R) {
                E.emit('error', R),
                  ee.close(
                    st.InternalClientError,
                    Hu(
                      R instanceof Error ? R.message : new Error(R).message,
                      'Internal client error'
                    )
                  )
              }
            })
          let gt = !1
          ee.onmessage = ({ data: R }) => {
            try {
              const D = Jw(R, v)
              if (
                (E.emit('message', D), D.type === 'ping' || D.type === 'pong')
              ) {
                E.emit(D.type, !0, D.payload),
                  D.type === 'pong'
                    ? vt()
                    : a ||
                      (ee.send(
                        yn(
                          D.payload
                            ? { type: ke.Pong, payload: D.payload }
                            : { type: ke.Pong }
                        )
                      ),
                      E.emit('pong', !1, D.payload))
                return
              }
              if (gt) return
              if (D.type !== ke.ConnectionAck)
                throw new Error(`First message cannot be of type ${D.type}`)
              clearTimeout(Oe),
                (gt = !0),
                E.emit('connected', ee, D.payload),
                (B = !1),
                (L = 0),
                Q([ee, new Promise(($, Y) => S(Y))])
            } catch (D) {
              ;(ee.onmessage = null),
                E.emit('error', D),
                ee.close(
                  st.BadResponse,
                  Hu(
                    D instanceof Error ? D.message : new Error(D).message,
                    'Bad response'
                  )
                )
            }
          }
        })()
      )))
    A.readyState === g.CLOSING && (await ne)
    let V = () => {}
    const W = new Promise((Q) => (V = Q))
    return [
      A,
      V,
      Promise.race([
        W.then(() => {
          if (!x) {
            const Q = () => A.close(1e3, 'Normal Closure')
            isFinite(o) && o > 0
              ? (T = setTimeout(() => {
                  A.readyState === g.OPEN && Q()
                }, o))
              : Q()
          }
        }),
        ne,
      ]),
    ]
  }
  function z(A) {
    if (
      ui(A) &&
      (Gw(A.code) ||
        [
          st.InternalServerError,
          st.InternalClientError,
          st.BadRequest,
          st.BadResponse,
          st.Unauthorized,
          st.SubprotocolNotAcceptable,
          st.SubscriberAlreadyExists,
          st.TooManyInitialisationRequests,
        ].includes(A.code))
    )
      throw A
    if (J) return !1
    if (ui(A) && A.code === 1e3) return x > 0
    if (!u || L >= u || !h(A) || (f != null && f(A))) throw A
    return (B = !0)
  }
  return (
    n ||
      (async () => {
        for (x++; ; )
          try {
            const [, , A] = await j()
            await A
          } catch (A) {
            try {
              if (!z(A)) return
            } catch (ne) {
              return i == null ? void 0 : i(ne)
            }
          }
      })(),
    {
      on: E.on,
      subscribe(A, ne) {
        const V = b(A)
        let W = !1,
          Q = !1,
          Se = () => {
            x--, (W = !0)
          }
        return (
          (async () => {
            for (x++; ; )
              try {
                const [ee, Oe, Ee] = await j()
                if (W) return Oe()
                const vt = E.onMessage(V, (gt) => {
                  switch (gt.type) {
                    case ke.Next: {
                      ne.next(gt.payload)
                      return
                    }
                    case ke.Error: {
                      ;(Q = !0), (W = !0), ne.error(gt.payload), Se()
                      return
                    }
                    case ke.Complete: {
                      ;(W = !0), Se()
                      return
                    }
                  }
                })
                ee.send(yn({ id: V, type: ke.Subscribe, payload: A }, w)),
                  (Se = () => {
                    !W &&
                      ee.readyState === g.OPEN &&
                      ee.send(yn({ id: V, type: ke.Complete }, w)),
                      x--,
                      (W = !0),
                      Oe()
                  }),
                  await Ee.finally(vt)
                return
              } catch (ee) {
                if (!z(ee)) return
              }
          })()
            .then(() => {
              Q || ne.complete()
            })
            .catch((ee) => {
              ne.error(ee)
            }),
          () => {
            W || Se()
          }
        )
      },
      async dispose() {
        if (((J = !0), C)) {
          const [A] = await C
          A.close(1e3, 'Normal Closure')
        }
      },
      terminate() {
        C &&
          E.emit('closed', { code: 4499, reason: 'Terminated', wasClean: !1 })
      },
    }
  )
}
function ui(e) {
  return yr(e) && 'code' in e && 'reason' in e
}
function Gw(e) {
  return [1e3, 1001, 1006, 1005, 1012, 1013, 1013].includes(e)
    ? !1
    : e >= 1e3 && e <= 1999
}
function Xw(e) {
  return (
    typeof e == 'function' &&
    'constructor' in e &&
    'CLOSED' in e &&
    'CLOSING' in e &&
    'CONNECTING' in e &&
    'OPEN' in e
  )
}
function Zw(e) {
  let t = !1,
    r = () => {
      t = !0
    }
  return {
    ...Yw({
      ...e,
      on: {
        ...e.on,
        opened: (i) => {
          var o, s
          ;(s = (o = e.on) == null ? void 0 : o.opened) == null || s.call(o, i),
            (r = () => {
              i.readyState === WebSocket.OPEN
                ? i.close(4205, 'Client Restart')
                : (t = !0)
            }),
            t && ((t = !1), r())
        },
      },
    }),
    restart: () => r(),
  }
}
const Ue = {
  proxyCookies: !0,
  clientAwareness: !1,
  cookieAttributes: { maxAge: 604800, secure: !0 },
  clients: {
    default: {
      httpEndpoint: 'https://woocommerce.dfweb.no/graphql',
      httpLinkOptions: { credentials: 'include' },
      authType: 'Session',
      authHeader: 'woocommerce-session',
      tokenName: 'apollo:default.token',
      tokenStorage: 'cookie',
    },
  },
}
function AE(...e) {
  const { key: t, fn: r } = eE(...e)
  return dm(t, r, '$WvHsgSk08j')
}
const eE = (...e) => {
    var a, c, u, l, h
    const { clients: t } = Ch(),
      r =
        ((a = e == null ? void 0 : e[0]) == null ? void 0 : a.query) ||
        (e == null ? void 0 : e[0])
    ;(c = e == null ? void 0 : e[0]) == null || c.cache
    const n =
      ((u = e == null ? void 0 : e[0]) == null ? void 0 : u.variables) ||
      (typeof (e == null ? void 0 : e[1]) != 'string' &&
        (e == null ? void 0 : e[1])) ||
      void 0
    let i =
      ((l = e == null ? void 0 : e[0]) == null ? void 0 : l.clientId) ||
      (typeof (e == null ? void 0 : e[1]) == 'string' &&
        (e == null ? void 0 : e[1])) ||
      void 0
    return (
      (!i || !(t != null && t[i])) &&
        (i = t != null && t.default ? 'default' : Object.keys(t)[0]),
      {
        key:
          ((h = e == null ? void 0 : e[0]) == null ? void 0 : h.key) ||
          Ev({ query: ya(r), variables: n, clientId: i }),
        query: r,
        clientId: i,
        variables: n,
        fn: () => {
          var f
          return (f = t[i]) == null
            ? void 0
            : f
                .query({ query: r, variables: n, fetchPolicy: 'no-cache' })
                .then((d) => d.data)
        },
      }
    )
  },
  Ch = () => {
    const e = xe(),
      t = async (n) => {
        var a
        n = n || 'default'
        const i =
            (a = Ue == null ? void 0 : Ue.clients) == null ? void 0 : a[n],
          o = ge(null)
        if ((await e.callHook('apollo:auth', { token: o, client: n }), o.value))
          return o.value
        const s = i.tokenName
        return (i == null ? void 0 : i.tokenStorage) === 'cookie'
          ? Ri(s).value
          : localStorage.getItem(s) || null
      },
      r = async ({ token: n, client: i, mode: o, skipResetStore: s }) => {
        var u, l, h
        i = i || 'default'
        const a =
            (u = Ue == null ? void 0 : Ue.clients) == null ? void 0 : u[i],
          c = i && a.tokenName
        if ((a == null ? void 0 : a.tokenStorage) === 'cookie') {
          const f =
              (i && (a == null ? void 0 : a.cookieAttributes)) ||
              (Ue == null ? void 0 : Ue.cookieAttributes),
            d = Ri(c, f)
          if (!d.value && o === 'logout') return
          d.value = (o === 'login' && n) || null
        } else
          (a == null ? void 0 : a.tokenStorage) === 'localStorage' &&
            (o === 'login' && n
              ? localStorage.setItem(c, n)
              : o === 'logout' && localStorage.removeItem(c))
        ;(l = e == null ? void 0 : e._apolloWsClients) != null &&
          l[i] &&
          e._apolloWsClients[i].restart(),
          !s &&
            (await ((h = e == null ? void 0 : e._apolloClients) == null
              ? void 0
              : h[i]
                  .resetStore()
                  .catch((f) =>
                    console.log(
                      '%cError on cache reset',
                      'color: orange;',
                      f.message
                    )
                  )))
      }
    return {
      getToken: t,
      clients: e == null ? void 0 : e._apolloClients,
      onLogin: (n, i, o) =>
        r({ token: n, client: i, skipResetStore: o, mode: 'login' }),
      onLogout: (n, i) => r({ client: n, skipResetStore: i, mode: 'logout' }),
    }
  },
  tE = Or((e) => {
    var i, o
    const r = {}
    for (const [s, a] of Object.entries(Ue.clients)) {
      const c = async () => {
          var y, g
          const w = ge()
          return (
            await e.callHook('apollo:auth', { token: w, client: s }),
            !w.value &&
            (a.tokenStorage === 'cookie'
              ? (w.value = Ri(a.tokenName).value)
              : a.tokenStorage === 'localStorage' &&
                (w.value = localStorage.getItem(a.tokenName)),
            !w.value)
              ? void 0
              : !!(
                  (g =
                    (y = w.value) == null ? void 0 : y.match(/^[a-zA-Z]+\s/)) !=
                    null && g[0]
                ) || (a == null ? void 0 : a.authType) === null
              ? w.value
              : `${a == null ? void 0 : a.authType} ${w.value}`
          )
        },
        l = Ww(async (w, { headers: v }) => {
          const y = await c()
          if (y) return { headers: { ...v, [a.authHeader]: y } }
        }).concat(
          Pa({
            ...((a == null ? void 0 : a.httpLinkOptions) && a.httpLinkOptions),
            uri: a.browserHttpEndpoint || a.httpEndpoint,
            headers: {
              ...(((i = a == null ? void 0 : a.httpLinkOptions) == null
                ? void 0
                : i.headers) || {}),
            },
          })
        )
      let h = null
      if (a.wsEndpoint) {
        const w = Zw({
          ...a.wsLinkOptions,
          url: a.wsEndpoint,
          connectionParams: async () => {
            const v = await c()
            if (v) return { [a.authHeader]: v }
          },
        })
        ;(h = new Vw(w)),
          (e._apolloWsClients = e._apolloWsClients || {}),
          (e._apolloWsClients[s] = w)
      }
      const f = Kf((w) => {
          e.callHook('apollo:error', w)
        }),
        d = ct.from([
          f,
          ...(h
            ? [
                ...(a != null && a.websocketsOnly
                  ? [h]
                  : [
                      g0(
                        ({ query: w }) => {
                          const v = eo(w)
                          return (
                            v.kind === 'OperationDefinition' &&
                            v.operation === 'subscription'
                          )
                        },
                        h,
                        l
                      ),
                    ]),
              ]
            : [l]),
        ]),
        p = new wh(a.inMemoryCacheOptions)
      ;(r[s] = new Oh({
        link: d,
        cache: p,
        ...Ue.clientAwareness,
        ssrForceFetchDelay: 100,
        connectToDevTools: a.connectToDevTools || !1,
        defaultOptions: a == null ? void 0 : a.defaultOptions,
      })),
        !(r != null && r.default) &&
          !((o = Ue == null ? void 0 : Ue.clients) != null && o.default) &&
          s === Object.keys(Ue.clients)[0] &&
          (r.default = r[s])
      const b = `_apollo:${s}`
      e.hook('app:rendered', () => {
        e.payload.data[b] = p.extract()
      }),
        e.payload.data[b] && p.restore(sa(JSON.stringify(e.payload.data[b])))
    }
    Lw(r), e.vueApp.provide(kh, r), (e._apolloClients = r)
    const n = r == null ? void 0 : r.default
    return {
      provide: {
        apolloHelpers: Ch(),
        apollo: { clients: r, defaultClient: n },
      },
    }
  }),
  rE = Or((e) => {
    const t = Ri('woo-session'),
      r = cf(),
      n = Pa({ uri: r.graphqlURL }),
      i = new ct((c, u) => {
        {
          const l = localStorage.getItem('woo-session') || 'test'
          l &&
            l.length > 0 &&
            c.setContext(() => ({
              headers: { 'woocommerce-session': `Session ${l}` },
            }))
        }
        return u(c)
      }),
      o = new ct((c, u) =>
        u(c).map((l) => {
          const h = c.getContext(),
            {
              response: { headers: f },
            } = h,
            d =
              f.get('woocommerce-session') ||
              localStorage.getItem('woo-session')
          return d && ((t.value = d), localStorage.setItem('woo-session', d)), l
        })
      ),
      s = new wh(),
      a = new Oh({ link: i.concat(o.concat(n)), cache: s })
    e.hook('apollo:auth', ({ token: c }) => {
      ;(c.value = t.value), jw(a)
    })
  }),
  nE = [$v, Hv, zv, nb, ib, tE, rE],
  iE = Fe({
    name: 'NuxtLoadingIndicator',
    props: {
      throttle: { type: Number, default: 200 },
      duration: { type: Number, default: 2e3 },
      height: { type: Number, default: 3 },
      color: {
        type: [String, Boolean],
        default:
          'repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#0047e1 100%)',
      },
    },
    setup(e, { slots: t }) {
      const r = oE({ duration: e.duration, throttle: e.throttle }),
        n = xe()
      return (
        n.hook('page:start', r.start),
        n.hook('page:finish', r.finish),
        cr(() => r.clear),
        () =>
          Ge(
            'div',
            {
              class: 'nuxt-loading-indicator',
              style: {
                position: 'fixed',
                top: 0,
                right: 0,
                left: 0,
                pointerEvents: 'none',
                width: `${r.progress.value}%`,
                height: `${e.height}px`,
                opacity: r.isLoading.value ? 1 : 0,
                background: e.color || void 0,
                backgroundSize: `${(100 / r.progress.value) * 100}% auto`,
                transition: 'width 0.1s, height 0.4s, opacity 0.4s',
                zIndex: 999999,
              },
            },
            t
          )
      )
    },
  })
function oE(e) {
  const t = ge(0),
    r = ge(!1),
    n = Ne(() => 1e4 / e.duration)
  let i = null,
    o = null
  function s() {
    c(),
      (t.value = 0),
      e.throttle
        ? (o = setTimeout(() => {
            ;(r.value = !0), h()
          }, e.throttle))
        : ((r.value = !0), h())
  }
  function a() {
    ;(t.value = 100), l()
  }
  function c() {
    clearInterval(i), clearTimeout(o), (i = null), (o = null)
  }
  function u(f) {
    t.value = Math.min(100, t.value + f)
  }
  function l() {
    c(),
      setTimeout(() => {
        ;(r.value = !1),
          setTimeout(() => {
            t.value = 0
          }, 400)
      }, 500)
  }
  function h() {
    i = setInterval(() => {
      u(n.value)
    }, 100)
  }
  return { progress: t, isLoading: r, start: s, finish: a, clear: c }
}
const sE = (e, t) =>
    t.path
      .replace(/(:\w+)\([^)]+\)/g, '$1')
      .replace(/(:\w+)[?+*]/g, '$1')
      .replace(/:\w+/g, (r) => {
        var n
        return (
          ((n = e.params[r.slice(1)]) == null ? void 0 : n.toString()) || ''
        )
      }),
  aE = (e, t) => {
    const r = e.route.matched.find((i) => {
        var o
        return (
          ((o = i.components) == null ? void 0 : o.default) === e.Component.type
        )
      }),
      n = t ?? (r == null ? void 0 : r.meta.key) ?? (r && sE(e.route, r))
    return typeof n == 'function' ? n(e.route) : n
  },
  cE = (e, t) => ({ default: () => (e ? Ge(Bd, e === !0 ? {} : e, t) : t) }),
  uE = Fe({
    name: 'FragmentWrapper',
    setup(e, { slots: t }) {
      return () => {
        var r
        return (r = t.default) == null ? void 0 : r.call(t)
      }
    },
  }),
  Ds = (e, t, r) => ({
    default: () => (t ? Ge(e, t === !0 ? {} : t, r) : Ge(uE, {}, r)),
  }),
  lE = Fe({
    name: 'NuxtPage',
    inheritAttrs: !1,
    props: {
      name: { type: String },
      transition: { type: [Boolean, Object], default: void 0 },
      keepalive: { type: [Boolean, Object], default: void 0 },
      route: { type: Object },
      pageKey: { type: [Function, String], default: null },
    },
    setup(e, { attrs: t }) {
      const r = xe()
      return () =>
        Ge(
          If,
          { name: e.name, route: e.route, ...t },
          {
            default: (n) => {
              if (!n.Component) return
              const i = aE(n, e.pageKey),
                o = r.deferHydration(),
                s = !!(e.transition ?? n.route.meta.pageTransition ?? cs),
                a =
                  s &&
                  hE(
                    [
                      e.transition,
                      n.route.meta.pageTransition,
                      cs,
                      {
                        onAfterLeave: () => {
                          r.callHook('page:transition:finish', n.Component)
                        },
                      },
                    ].filter(Boolean)
                  )
              return Ds(
                Wi,
                s && a,
                cE(
                  e.keepalive ?? n.route.meta.keepalive ?? Vv,
                  Ge(
                    El,
                    {
                      onPending: () => r.callHook('page:start', n.Component),
                      onResolve: () => {
                        an(() =>
                          r.callHook('page:finish', n.Component).finally(o)
                        )
                      },
                    },
                    {
                      default: () =>
                        Ge(dE, {
                          key: i,
                          routeProps: n,
                          pageKey: i,
                          hasTransition: s,
                        }),
                    }
                  )
                )
              ).default()
            },
          }
        )
    },
  })
function fE(e) {
  return Array.isArray(e) ? e : e ? [e] : []
}
function hE(e) {
  const t = e.map((r) => ({ ...r, onAfterLeave: fE(r.onAfterLeave) }))
  return Mv(...t)
}
const dE = Fe({
    name: 'RouteProvider',
    props: ['routeProps', 'pageKey', 'hasTransition'],
    setup(e) {
      const t = e.pageKey,
        r = e.routeProps.route,
        n = {}
      for (const i in e.routeProps.route)
        n[i] = Ne(() => (t === e.pageKey ? e.routeProps.route[i] : r[i]))
      return Br('_route', xt(n)), () => Ge(e.routeProps.Component)
    },
  }),
  pE = Fe({
    name: 'LayoutLoader',
    inheritAttrs: !1,
    props: { name: String },
    async setup(e, t) {
      const r = await Ir[e.name]().then((n) => n.default || n)
      return () => Ge(r, t.attrs, t.slots)
    },
  }),
  yE = Fe({
    name: 'NuxtLayout',
    inheritAttrs: !1,
    props: { name: { type: [String, Boolean, Object], default: null } },
    setup(e, t) {
      const r = Ve('_route'),
        n = r === uf() ? Yg() : r,
        i = Ne(() => Me(e.name) ?? n.meta.layout ?? 'default')
      return () => {
        const o = i.value && i.value in Ir,
          s = n.meta.layoutTransition ?? Uv
        return Ds(Wi, o && s, {
          default: () =>
            Ds(
              pE,
              o && { key: i.value, name: i.value, ...t.attrs },
              t.slots
            ).default(),
        }).default()
      }
    },
  }),
  mE = (e) =>
    Object.fromEntries(Object.entries(e).filter(([, t]) => t !== void 0)),
  ur = (e, t) => (r, n) => (
    vf(() => e({ ...mE(r), ...n.attrs }, n)),
    () => {
      var i, o
      return t
        ? (o = (i = n.slots).default) == null
          ? void 0
          : o.call(i)
        : null
    }
  ),
  Tr = {
    accesskey: String,
    autocapitalize: String,
    autofocus: { type: Boolean, default: void 0 },
    class: [String, Object, Array],
    contenteditable: { type: Boolean, default: void 0 },
    contextmenu: String,
    dir: String,
    draggable: { type: Boolean, default: void 0 },
    enterkeyhint: String,
    exportparts: String,
    hidden: { type: Boolean, default: void 0 },
    id: String,
    inputmode: String,
    is: String,
    itemid: String,
    itemprop: String,
    itemref: String,
    itemscope: String,
    itemtype: String,
    lang: String,
    nonce: String,
    part: String,
    slot: String,
    spellcheck: { type: Boolean, default: void 0 },
    style: String,
    tabindex: String,
    title: String,
    translate: String,
  }
Fe({
  name: 'NoScript',
  inheritAttrs: !1,
  props: {
    ...Tr,
    title: String,
    body: Boolean,
    renderPriority: [String, Number],
  },
  setup: ur((e, { slots: t }) => {
    var i
    const r = { ...e },
      n = (((i = t.default) == null ? void 0 : i.call(t)) || [])
        .filter(({ children: o }) => o)
        .map(({ children: o }) => o)
        .join('')
    return n && (r.children = n), { noscript: [r] }
  }),
})
Fe({
  name: 'Link',
  inheritAttrs: !1,
  props: {
    ...Tr,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: { type: Boolean, default: void 0 },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    methods: String,
    target: String,
    body: Boolean,
    renderPriority: [String, Number],
  },
  setup: ur((e) => ({ link: [e] })),
})
Fe({
  name: 'Base',
  inheritAttrs: !1,
  props: { ...Tr, href: String, target: String },
  setup: ur((e) => ({ base: e })),
})
Fe({
  name: 'Title',
  inheritAttrs: !1,
  setup: ur((e, { slots: t }) => {
    var n, i, o
    return {
      title:
        ((o =
          (i = (n = t.default) == null ? void 0 : n.call(t)) == null
            ? void 0
            : i[0]) == null
          ? void 0
          : o.children) || null,
    }
  }),
})
Fe({
  name: 'Meta',
  inheritAttrs: !1,
  props: {
    ...Tr,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String,
    body: Boolean,
    renderPriority: [String, Number],
  },
  setup: ur((e) => {
    const t = { ...e }
    return (
      t.httpEquiv && ((t['http-equiv'] = t.httpEquiv), delete t.httpEquiv),
      { meta: [t] }
    )
  }),
})
Fe({
  name: 'Style',
  inheritAttrs: !1,
  props: {
    ...Tr,
    type: String,
    media: String,
    nonce: String,
    title: String,
    scoped: { type: Boolean, default: void 0 },
    body: Boolean,
    renderPriority: [String, Number],
  },
  setup: ur((e, { slots: t }) => {
    var i, o, s
    const r = { ...e },
      n =
        (s =
          (o = (i = t.default) == null ? void 0 : i.call(t)) == null
            ? void 0
            : o[0]) == null
          ? void 0
          : s.children
    return n && (r.children = n), { style: [r] }
  }),
})
Fe({
  name: 'Head',
  inheritAttrs: !1,
  setup: (e, t) => () => {
    var r, n
    return (n = (r = t.slots).default) == null ? void 0 : n.call(r)
  },
})
const vE = Fe({
    name: 'Html',
    inheritAttrs: !1,
    props: {
      ...Tr,
      manifest: String,
      version: String,
      xmlns: String,
      renderPriority: [String, Number],
    },
    setup: ur((e) => ({ htmlAttrs: e }), !0),
  }),
  gE = Fe({
    name: 'Body',
    inheritAttrs: !1,
    props: { ...Tr, renderPriority: [String, Number] },
    setup: ur((e) => ({ bodyAttrs: e }), !0),
  }),
  bE = {
    __name: 'app',
    setup(e) {
      return (
        vf({
          title: 'Index',
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
        (t, r) => {
          const n = iE,
            i = lE,
            o = yE,
            s = gE,
            a = vE
          return (
            er(),
            gr(
              a,
              { lang: 'en' },
              {
                default: _n(() => [
                  ve(
                    s,
                    {
                      class:
                        'antialiased duration-300 transition-colors text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900',
                    },
                    {
                      default: _n(() => [
                        ve(o, null, {
                          default: _n(() => [
                            ve(n, { height: 5, duration: 3e3, throttle: 400 }),
                            ve(i),
                          ]),
                          _: 1,
                        }),
                      ]),
                      _: 1,
                    }
                  ),
                ]),
                _: 1,
              }
            )
          )
        }
      )
    },
  },
  Qu = {
    __name: 'nuxt-root',
    setup(e) {
      const t = Ld(() =>
          Mt(
            () => import('./error-component.a8236362.js'),
            [
              './error-component.a8236362.js',
              './_plugin-vue_export-helper.c27b6911.js',
            ],
            import.meta.url
          ).then((a) => a.default || a)
        ),
        r = () => null,
        n = xe(),
        i = n.deferHydration()
      Br('_route', uf()),
        n.hooks.callHookWith((a) => a.map((c) => c()), 'vue:setup')
      const o = zi()
      xl((a, c, u) => {
        n.hooks
          .callHook('vue:error', a, c, u)
          .catch((l) => console.error('[nuxt] Error in `vue:error` hook', l)),
          fm(a) && (a.fatal || a.unhandled) && Jt(n, gn, [a])
      })
      const { islandContext: s } = !1
      return (a, c) => (
        er(),
        gr(
          El,
          { onResolve: Me(i) },
          {
            default: _n(() => [
              Me(o)
                ? (er(),
                  gr(Me(t), { key: 0, error: Me(o) }, null, 8, ['error']))
                : Me(s)
                ? (er(),
                  gr(Me(r), { key: 1, context: Me(s) }, null, 8, ['context']))
                : (er(), gr(Me(bE), { key: 2 })),
            ]),
            _: 1,
          },
          8,
          ['onResolve']
        )
      )
    },
  }
globalThis.$fetch || (globalThis.$fetch = $y.create({ baseURL: Qy() }))
let Uu
const wE = nm(nE)
;(Uu = async function () {
  var i
  const r = Boolean((i = window.__NUXT__) == null ? void 0 : i.serverRendered)
      ? Zp(Qu)
      : Xp(Qu),
    n = em({ vueApp: r })
  try {
    await rm(n, wE)
  } catch (o) {
    await n.callHook('app:error', o), (n.payload.error = n.payload.error || o)
  }
  try {
    await n.hooks.callHook('app:created', r),
      await n.hooks.callHook('app:beforeMount', r),
      r.mount('#' + Wv),
      await n.hooks.callHook('app:mounted', r),
      await an()
  } catch (o) {
    await n.callHook('app:error', o), (n.payload.error = n.payload.error || o)
  }
}),
  Uu().catch((e) => {
    console.error('Error while mounting app:', e)
  })
export {
  Ye as F,
  Wi as T,
  PE as _,
  Vl as a,
  ve as b,
  TE as c,
  SE as d,
  RE as e,
  Me as f,
  CE as g,
  gr as h,
  Wl as i,
  vf as j,
  Ne as k,
  uf as l,
  Kd as m,
  ym as n,
  er as o,
  _E as p,
  js as q,
  OE as r,
  xE as s,
  EE as t,
  AE as u,
  kE as v,
  _n as w,
}
