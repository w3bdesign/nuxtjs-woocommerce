import { uid } from 'uid'

function stripHTML(description) {
  return description.replace(/(<([^>]+)>)/gi, '')
}

function filteredVariantPrice(price) {
  // Filter price from "kr198.00 - kr299.00" to kr299.00
  return price.substring(price.length, price.indexOf('-')).replace('-', '')
}

function createCheckoutData(form) {
  const checkoutData = {
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
    transactionId: 'fgfgfggf',
  }

  return { checkoutData }
}

export { stripHTML, createCheckoutData, filteredVariantPrice }
