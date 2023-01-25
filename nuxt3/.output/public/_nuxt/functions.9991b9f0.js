var t = 256
for (; t--; ) (t + 256).toString(16).substring(1)
function e(r) {
  return r.replace(/<\/?[^>]+(>|$)/gi, '')
}
const i = (r, n) =>
  n === 'right'
    ? r.substring(r.length, r.indexOf('-')).replace('-', '')
    : r.substring(0, r.indexOf('-')).replace('-', '')
export { i as f, e as s }
