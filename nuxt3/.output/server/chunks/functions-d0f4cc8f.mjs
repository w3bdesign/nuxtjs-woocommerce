function stripHTML(string) {
  return string.replace(/<\/?[^>]+(>|$)/gi, "");
}
const filteredVariantPrice = (price, side) => {
  if (side === "right") {
    return price.substring(price.length, price.indexOf("-")).replace("-", "");
  }
  return price.substring(0, price.indexOf("-")).replace("-", "");
};

export { filteredVariantPrice as f, stripHTML as s };
//# sourceMappingURL=functions-d0f4cc8f.mjs.map
