import { uid } from "uid";

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
export function filteredVariantPrice(price, side) {
  if (side === "right") {
    return price.substring(price.length, price.indexOf("-")).replace("-", "");
  }
  return price.substring(0, price.indexOf("-")).replace("-", "");
}

/**
 * Prepares the checkout object based on the input data from the checkout form
 * @param {Object} form Form data to process
 */
export function createCheckoutData({
  firstName,
  lastName,
  address1,
  address2,
  city,
  country,
  state,
  postcode,
  email,
  phone,
  company,
  paymentMethod,
}) {
  const checkoutData = {
    firstName,
    lastName,
    address1,
    address2,
    city,
    country,
    state,
    postcode,
    email,
    phone,
    company,
  };

  return {
    clientMutationId: uid(),
    billing: {
      ...checkoutData,
    },
    shipping: {
      ...checkoutData,
    },
    shipToDifferentAddress: false,
    paymentMethod,
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
