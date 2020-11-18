function stripHTML(description) {
  return description.replace(/(<([^>]+)>)/gi, '')
}

export { stripHTML }
