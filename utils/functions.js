import { uid } from "uid";

/**
 * Checks if the given data object has any variations by accessing the product's variations nodes array.
 *
 * @param {Object} data - The data object to check for variations
 * @return {Boolean} Returns true if there are any variations, false otherwise.
 */
export function hasVariations(data) {
  // Use optional chaining to access the nodes array safely, and nullish coalescing to default to an empty array
  const variationsNodes = data?.product?.variations?.nodes ?? [];
  return variationsNodes.length > 0;
}

/**
 * Formats a given price into a string with a currency symbol and locale.
 *
 * @param {string} price - The price to format.
 * @param {string} currency - The currency to use. Defaults to "NOK".
 * @param {string} currencyLocale - The locale to use for the currency symbol. Defaults to "nb-NO".
 * @return {string} The formatted price as a string with the currency symbol and locale.
 */
export function formatPrice(price, currency, currencyLocale) {
  // Set default values
  const currencyPrice = currency || "NOK";
  const currencySymbol = currencyLocale || "nb-NO";

  if (!price) {
    return;
  }

  // Convert the price string to a numerical float value
  const numericPrice = parseFloat(price.replace(/[^\d.]/g, ""));

  return new Intl.NumberFormat(currencySymbol, {
    style: "currency",
    currency: currencyPrice,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(numericPrice);
}

/**
 * Strips HTML from the inputted string
 * @param {String} description Input text to strip HTML from
 */
export function stripHTML(string) {
  return string.replace(/<\/?[^>]+(>|$)/gi, "");
}

/**
 * Filter variant price. Changes "kr198.00 - kr299.00" to kr299.00 or kr198 depending on the side variable
 * @param {String} side Which side of the string to return (which side of the "-" symbol)
 * @param {String} price The inputted price that we need to convert
 */
export const filteredVariantPrice = (price, side) => {
  if (side === "right") {
    return price.substring(price.length, price.indexOf("-")).replace("-", "");
  }
  return price.substring(0, price.indexOf("-")).replace("-", "");
};

/**
 * Strips product name from variant name
 * @param {String} productName Text to strip out
 * @param {String} input Input text to strip product name from
 */
export function filteredVariantName(productName, input) {
  return input.replace(`${productName} -`, "");
}

/**
 * Prepares the checkout object based on the input data from the checkout form
 * @param {Object} form Form data to process
 */
export function createCheckoutData(form) {
  return {
    clientMutationId: uid(),
    billing: {
      firstName: form.firstName,
      lastName: form.lastName,
      address1: form.address1,
      address2: form.address2,
      city: form.city,
      country: form.country,
      state: form.state,
      postcode: form.postcode,
      email: form.email,
      phone: form.phone,
      company: form.company,
    },
    shipping: {
      firstName: form.firstName,
      lastName: form.lastName,
      address1: form.address1,
      address2: form.address2,
      city: form.city,
      country: form.country,
      state: form.state,
      postcode: form.postcode,
      email: form.email,
      phone: form.phone,
      company: form.company,
    },
    shipToDifferentAddress: false,
    paymentMethod: form.paymentMethod,
    isPaid: false,
    transactionId: "test",
  };
}

/**
 * Get specific cookie from document.cookie
 * @param {String} cName Name of cookie to return
 */
export function getCookie(cName) {
  const name = `${cName}=`;
  const cDecoded = decodeURIComponent(document.cookie);
  const cArr = cDecoded.split("; ");
  let res;
  cArr.forEach((val) => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  });
  return res;
}
