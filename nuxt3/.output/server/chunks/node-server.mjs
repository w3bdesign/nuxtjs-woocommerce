globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import 'node-fetch-native/polyfill';
import { Server as Server$1 } from 'node:http';
import { Server } from 'node:https';
import destr from 'destr';
import { eventHandler, setHeaders, sendRedirect, defineEventHandler, handleCacheHeaders, createEvent, getRequestHeader, getRequestHeaders, setResponseHeader, createError, createApp, createRouter as createRouter$1, lazyEventHandler, toNodeListener } from 'h3';
import { createFetch as createFetch$1, Headers } from 'ofetch';
import { createCall, createFetch } from 'unenv/runtime/fetch/index';
import { createHooks } from 'hookable';
import { u as useRuntimeConfig } from './config.mjs';
import { hash } from 'ohash';
import { withoutBase, parseURL, withQuery, joinURL, withLeadingSlash, withoutTrailingSlash } from 'ufo';
import { createStorage } from 'unstorage';
import defu from 'defu';
import { toRouteMatcher, createRouter } from 'radix3';
import { promises } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'pathe';

const _assets = {
  ["server:css:animate.min.css"]: {
    import: () => import('./raw/animate.min.mjs').then(r => r.default || r),
    meta: {"type":"text/css; charset=utf-8","etag":"\"12fe-tGCnDudQW7LDSi9lesM+3S4y4+Q\"","mtime":"2023-01-24T04:57:33.066Z"}
  },
  ["server:css:main.css"]: {
    import: () => import('./raw/main.mjs').then(r => r.default || r),
    meta: {"type":"text/css; charset=utf-8","etag":"\"3c-jUcFFl0ynDZuRlDKAikfwE0uWoc\"","mtime":"2023-01-23T01:53:41.102Z"}
  },
  ["server:css:swiper-bundle.min.css"]: {
    import: () => import('./raw/swiper-bundle.min.mjs').then(r => r.default || r),
    meta: {"type":"text/css; charset=utf-8","etag":"\"3668-Su/pFWJhRbcPzI6S0aDl1Mbxtm8\"","mtime":"2023-01-24T04:57:33.066Z"}
  },
  ["server:images:Hero.jpg"]: {
    import: () => import('./raw/Hero.mjs').then(r => r.default || r),
    meta: {"type":"image/jpeg","etag":"\"f0da-89RJ4SQgtgmDZ5xCKs/jGpTXVHw\"","mtime":"2022-02-02T21:29:51.309Z"}
  },
  ["server:images:Hero2.jpg"]: {
    import: () => import('./raw/Hero2.mjs').then(r => r.default || r),
    meta: {"type":"image/jpeg","etag":"\"9816-TsmRSZtPMX3ZkrQeIx+uHbsog6M\"","mtime":"2022-02-02T21:29:51.309Z"}
  },
  ["server:svg:Cart.svg"]: {
    import: () => import('./raw/Cart.mjs').then(r => r.default || r),
    meta: {"type":"image/svg+xml","etag":"\"2e5-+G3qbEi6GBGci2Q/H6TPHnVbuK4\"","mtime":"2022-02-02T21:29:51.310Z"}
  },
  ["server:svg:CloseHamburger.svg"]: {
    import: () => import('./raw/CloseHamburger.mjs').then(r => r.default || r),
    meta: {"type":"image/svg+xml","etag":"\"345-JsUzSOgsunT8uIZ3g2FQ0ZxbXUk\"","mtime":"2022-02-02T21:29:51.310Z"}
  },
  ["server:svg:Hamburger.svg"]: {
    import: () => import('./raw/Hamburger.mjs').then(r => r.default || r),
    meta: {"type":"image/svg+xml","etag":"\"1f6-Q1L4moqn9uyRyBNyD7SolqkN9j8\"","mtime":"2022-02-02T21:29:51.310Z"}
  },
  ["server:svg:Logo.svg"]: {
    import: () => import('./raw/Logo.mjs').then(r => r.default || r),
    meta: {"type":"image/svg+xml","etag":"\"3fb-p4Po0Tl2n/9Tlz+6IzAXusfk9So\"","mtime":"2022-02-02T21:29:51.311Z"}
  },
  ["server:svg:Remove.svg"]: {
    import: () => import('./raw/Remove.mjs').then(r => r.default || r),
    meta: {"type":"image/svg+xml","etag":"\"256-mWaqfmeL+6sSUqR+bxn3IZ2QmeY\"","mtime":"2022-02-02T21:29:51.311Z"}
  },
  ["server:svg:Search.svg"]: {
    import: () => import('./raw/Search.mjs').then(r => r.default || r),
    meta: {"type":"image/svg+xml","etag":"\"14e-V1rhZ2jtMS8jCmFhWU+FYG4IfCs\"","mtime":"2022-02-02T21:29:51.311Z"}
  }
};

function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

const storage = createStorage({});

const useStorage = () => storage;

storage.mount('/assets', assets$1);

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler() {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      return sendRedirect(
        event,
        routeRules.redirect.to,
        routeRules.redirect.statusCode
      );
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    const path = new URL(event.node.req.url, "http://localhost").pathname;
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(path, useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro";
  const name = opts.name || fn.name || "_";
  const integrity = hash([opts.integrity, fn, opts]);
  const validate = opts.validate || (() => true);
  async function get(key, resolver, shouldInvalidateCache) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    const entry = await useStorage().getItem(cacheKey) || {};
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || !validate(entry);
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      entry.value = await pending[key];
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry)) {
          useStorage().setItem(cacheKey, entry).catch((error) => console.error("[nitro] [cache]", error));
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (opts.swr && entry.value) {
      _resolvePromise.catch(console.error);
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const key = (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = opts.shouldInvalidateCache?.(...args);
    const entry = await get(key, () => fn(...args), shouldInvalidateCache);
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return key.replace(/[^\dA-Za-z]/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const _opts = {
    ...opts,
    getKey: (event) => {
      const key = opts.getKey?.(event);
      if (key) {
        return escapeKey(key);
      }
      const url = event.node.req.originalUrl || event.node.req.url;
      const friendlyName = escapeKey(decodeURI(parseURL(url).pathname)).slice(
        0,
        16
      );
      const urlHash = hash(url);
      return `${friendlyName}.${urlHash}`;
    },
    validate: (entry) => {
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: [opts.integrity, handler]
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const reqProxy = cloneWithProxy(incomingEvent.node.req, { headers: {} });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.context = incomingEvent.context;
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = headers.Etag || headers.etag || `W/"${hash(body)}"`;
      headers["last-modified"] = headers["Last-Modified"] || headers["last-modified"] || new Date().toUTCString();
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      event.node.res.setHeader(name, response.headers[name]);
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

const plugins = [
  
];

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || event.node.req.url?.endsWith(".json") || event.node.req.url?.includes("/api/");
}
function normalizeError(error) {
  const cwd = process.cwd();
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}

const errorHandler = (async function errorhandler(error, event) {
  const { stack, statusCode, statusMessage, message } = normalizeError(error);
  const errorObject = {
    url: event.node.req.url,
    statusCode,
    statusMessage,
    message,
    stack: "",
    data: error.data
  };
  event.node.res.statusCode = errorObject.statusCode !== 200 && errorObject.statusCode || 500;
  if (errorObject.statusMessage) {
    event.node.res.statusMessage = errorObject.statusMessage;
  }
  if (error.unhandled || error.fatal) {
    const tags = [
      "[nuxt]",
      "[request error]",
      error.unhandled && "[unhandled]",
      error.fatal && "[fatal]",
      Number(errorObject.statusCode) !== 200 && `[${errorObject.statusCode}]`
    ].filter(Boolean).join(" ");
    console.error(tags, errorObject.message + "\n" + stack.map((l) => "  " + l.text).join("  \n"));
  }
  if (isJsonRequest(event)) {
    event.node.res.setHeader("Content-Type", "application/json");
    event.node.res.end(JSON.stringify(errorObject));
    return;
  }
  const isErrorPage = event.node.req.url?.startsWith("/__nuxt_error");
  const res = !isErrorPage ? await useNitroApp().localFetch(withQuery(joinURL(useRuntimeConfig().app.baseURL, "/__nuxt_error"), errorObject), {
    headers: getRequestHeaders(event),
    redirect: "manual"
  }).catch(() => null) : null;
  if (!res) {
    const { template } = await import('./error-500.mjs');
    event.node.res.setHeader("Content-Type", "text/html;charset=UTF-8");
    event.node.res.end(template(errorObject));
    return;
  }
  for (const [header, value] of res.headers.entries()) {
    setResponseHeader(event, header, value);
  }
  if (res.status && res.status !== 200) {
    event.node.res.statusCode = res.status;
  }
  if (res.statusText) {
    event.node.res.statusMessage = res.statusText;
  }
  event.node.res.end(await res.text());
});

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"3aee-UxMFRW0L71bsmDMpCcl3tpHUPVw\"",
    "mtime": "2022-09-21T21:30:31.199Z",
    "size": 15086,
    "path": "../public/favicon.ico"
  },
  "/_nuxt/Cart.0b2f98bc.svg": {
    "type": "image/svg+xml",
    "etag": "\"2e5-+G3qbEi6GBGci2Q/H6TPHnVbuK4\"",
    "mtime": "2023-01-25T01:35:43.652Z",
    "size": 741,
    "path": "../public/_nuxt/Cart.0b2f98bc.svg"
  },
  "/_nuxt/cart.5b2c094d.js": {
    "type": "application/javascript",
    "etag": "\"2a61-1DAYx9SB8cCd+ov7YJc5iP+3j0Q\"",
    "mtime": "2023-01-25T01:35:43.653Z",
    "size": 10849,
    "path": "../public/_nuxt/cart.5b2c094d.js"
  },
  "/_nuxt/cart.f86369bd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"66c-+YuTqgzXrqgED22Szl8SHkiVGms\"",
    "mtime": "2023-01-25T01:35:43.652Z",
    "size": 1644,
    "path": "../public/_nuxt/cart.f86369bd.css"
  },
  "/_nuxt/categories.ecbdebe8.js": {
    "type": "application/javascript",
    "etag": "\"c9e-sH/RZGGHAOONQDL1LrxUFKrwq9o\"",
    "mtime": "2023-01-25T01:35:43.653Z",
    "size": 3230,
    "path": "../public/_nuxt/categories.ecbdebe8.js"
  },
  "/_nuxt/checkout.1defa8ee.js": {
    "type": "application/javascript",
    "etag": "\"16f-AD9mRNSiSt6jg4HjtwC/B1owPbw\"",
    "mtime": "2023-01-25T01:35:43.653Z",
    "size": 367,
    "path": "../public/_nuxt/checkout.1defa8ee.js"
  },
  "/_nuxt/default.74d01fdd.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"a42-IPL7sseUg4Sq5AlkpZmomaFgmnI\"",
    "mtime": "2023-01-25T01:35:43.652Z",
    "size": 2626,
    "path": "../public/_nuxt/default.74d01fdd.css"
  },
  "/_nuxt/default.9c73ae00.js": {
    "type": "application/javascript",
    "etag": "\"1618-/oA+QVZkvRBb6C3B75Lm8Xh6NzQ\"",
    "mtime": "2023-01-25T01:35:43.654Z",
    "size": 5656,
    "path": "../public/_nuxt/default.9c73ae00.js"
  },
  "/_nuxt/entry.2f8d984c.js": {
    "type": "application/javascript",
    "etag": "\"4ae70-TpEw2hevL/anoPD7qdCRd7oiU/8\"",
    "mtime": "2023-01-25T01:35:43.654Z",
    "size": 306800,
    "path": "../public/_nuxt/entry.2f8d984c.js"
  },
  "/_nuxt/entry.aaace135.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"3bde-mxfKJGG5dzszAD0DdsAoYtVCj3o\"",
    "mtime": "2023-01-25T01:35:43.652Z",
    "size": 15326,
    "path": "../public/_nuxt/entry.aaace135.css"
  },
  "/_nuxt/error-component.a8236362.js": {
    "type": "application/javascript",
    "etag": "\"14a-7h+F1lXNDHIZbHe/W9z+DX7/h5Q\"",
    "mtime": "2023-01-25T01:35:43.653Z",
    "size": 330,
    "path": "../public/_nuxt/error-component.a8236362.js"
  },
  "/_nuxt/FETCH_ALL_PRODUCTS_QUERY.e4fadab3.js": {
    "type": "application/javascript",
    "etag": "\"e0a-kU997WvHDnV2dOt87avdCtF97c0\"",
    "mtime": "2023-01-25T01:35:43.653Z",
    "size": 3594,
    "path": "../public/_nuxt/FETCH_ALL_PRODUCTS_QUERY.e4fadab3.js"
  },
  "/_nuxt/functions.9991b9f0.js": {
    "type": "application/javascript",
    "etag": "\"101-CupM7VzEdRGgG08UjesLCIkrXkc\"",
    "mtime": "2023-01-25T01:35:43.652Z",
    "size": 257,
    "path": "../public/_nuxt/functions.9991b9f0.js"
  },
  "/_nuxt/Hero.0c150c12.jpg": {
    "type": "image/jpeg",
    "etag": "\"f0da-89RJ4SQgtgmDZ5xCKs/jGpTXVHw\"",
    "mtime": "2023-01-25T01:35:43.652Z",
    "size": 61658,
    "path": "../public/_nuxt/Hero.0c150c12.jpg"
  },
  "/_nuxt/index.7bf59d0a.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"29-VFVPy3iT/N4kQvxbsFLmt06Jwhk\"",
    "mtime": "2023-01-25T01:35:43.652Z",
    "size": 41,
    "path": "../public/_nuxt/index.7bf59d0a.css"
  },
  "/_nuxt/index.d958454e.js": {
    "type": "application/javascript",
    "etag": "\"470-fIohHX7N9ZjRM42TpVMcdZcPXFs\"",
    "mtime": "2023-01-25T01:35:43.654Z",
    "size": 1136,
    "path": "../public/_nuxt/index.d958454e.js"
  },
  "/_nuxt/Logo.447706ce.svg": {
    "type": "image/svg+xml",
    "etag": "\"3fb-p4Po0Tl2n/9Tlz+6IzAXusfk9So\"",
    "mtime": "2023-01-25T01:35:43.649Z",
    "size": 1019,
    "path": "../public/_nuxt/Logo.447706ce.svg"
  },
  "/_nuxt/products.69519cef.js": {
    "type": "application/javascript",
    "etag": "\"32e-u2uxUmUtko8WcKBDVeAPBD8p1Lc\"",
    "mtime": "2023-01-25T01:35:43.653Z",
    "size": 814,
    "path": "../public/_nuxt/products.69519cef.js"
  },
  "/_nuxt/ProductsShowAll.e28b93e2.js": {
    "type": "application/javascript",
    "etag": "\"73a-krAlzn2uw9iqz0MEsVq8X3I3+qc\"",
    "mtime": "2023-01-25T01:35:43.654Z",
    "size": 1850,
    "path": "../public/_nuxt/ProductsShowAll.e28b93e2.js"
  },
  "/_nuxt/ProductsShowAll.e3e4cb77.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"26-9jXX47lrgsCLK53wcZVoDi3FGUg\"",
    "mtime": "2023-01-25T01:35:43.652Z",
    "size": 38,
    "path": "../public/_nuxt/ProductsShowAll.e3e4cb77.css"
  },
  "/_nuxt/SpinnerLoading.f2ae26fa.js": {
    "type": "application/javascript",
    "etag": "\"155-zOTBbqHTNde4ssnc11zdjk0OWQo\"",
    "mtime": "2023-01-25T01:35:43.652Z",
    "size": 341,
    "path": "../public/_nuxt/SpinnerLoading.f2ae26fa.js"
  },
  "/_nuxt/_category_.b5941ba2.js": {
    "type": "application/javascript",
    "etag": "\"1f9a-90Dr7qgwiIG46O6s0vlJoexksJI\"",
    "mtime": "2023-01-25T01:35:43.653Z",
    "size": 8090,
    "path": "../public/_nuxt/_category_.b5941ba2.js"
  },
  "/_nuxt/_plugin-vue_export-helper.c27b6911.js": {
    "type": "application/javascript",
    "etag": "\"5b-eFCz/UrraTh721pgAl0VxBNR1es\"",
    "mtime": "2023-01-25T01:35:43.653Z",
    "size": 91,
    "path": "../public/_nuxt/_plugin-vue_export-helper.c27b6911.js"
  },
  "/_nuxt/_product_.7c66fcb6.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"fc-AF7bEhvX5koIARJbxC4SB1plXBM\"",
    "mtime": "2023-01-25T01:35:43.652Z",
    "size": 252,
    "path": "../public/_nuxt/_product_.7c66fcb6.css"
  },
  "/_nuxt/_product_.94e0cada.js": {
    "type": "application/javascript",
    "etag": "\"47fe-R7lEaSj2xsu2wBS50tnukALF3jc\"",
    "mtime": "2023-01-25T01:35:43.653Z",
    "size": 18430,
    "path": "../public/_nuxt/_product_.94e0cada.js"
  }
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = [];

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base of publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.node.req.method && !METHODS.has(event.node.req.method)) {
    return;
  }
  let id = decodeURIComponent(
    withLeadingSlash(
      withoutTrailingSlash(parseURL(event.node.req.url).pathname)
    )
  );
  let asset;
  const encodingHeader = String(
    event.node.req.headers["accept-encoding"] || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    event.node.res.setHeader("Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      throw createError({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = event.node.req.headers["if-none-match"] === asset.etag;
  if (ifNotMatch) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  const ifModifiedSinceH = event.node.req.headers["if-modified-since"];
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= new Date(asset.mtime)) {
    event.node.res.statusCode = 304;
    event.node.res.end();
    return;
  }
  if (asset.type && !event.node.res.getHeader("Content-Type")) {
    event.node.res.setHeader("Content-Type", asset.type);
  }
  if (asset.etag && !event.node.res.getHeader("ETag")) {
    event.node.res.setHeader("ETag", asset.etag);
  }
  if (asset.mtime && !event.node.res.getHeader("Last-Modified")) {
    event.node.res.setHeader("Last-Modified", asset.mtime);
  }
  if (asset.encoding && !event.node.res.getHeader("Content-Encoding")) {
    event.node.res.setHeader("Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !event.node.res.getHeader("Content-Length")) {
    event.node.res.setHeader("Content-Length", asset.size);
  }
  return readAsset(id);
});

const _lazy_VgVMa1 = () => import('./renderer.mjs');

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/__nuxt_error', handler: _lazy_VgVMa1, lazy: true, middleware: false, method: undefined },
  { route: '/**', handler: _lazy_VgVMa1, lazy: true, middleware: false, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const h3App = createApp({
    debug: destr(false),
    onError: errorHandler
  });
  const router = createRouter$1();
  h3App.use(createRouteRulesHandler());
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router);
  const localCall = createCall(toNodeListener(h3App));
  const localFetch = createFetch(localCall, globalThis.fetch);
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch
  };
  for (const plugin of plugins) {
    plugin(app);
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const s = server.listen(port, host, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const i = s.address();
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${i.family === "IPv6" ? `[${i.address}]` : i.address}:${i.port}${baseURL}`;
  console.log(`Listening ${url}`);
});
{
  process.on(
    "unhandledRejection",
    (err) => console.error("[nitro] [dev] [unhandledRejection] " + err)
  );
  process.on(
    "uncaughtException",
    (err) => console.error("[nitro] [dev] [uncaughtException] " + err)
  );
}
const nodeServer = {};

export { getRouteRules as g, nodeServer as n, useNitroApp as u };
//# sourceMappingURL=node-server.mjs.map
