
// FIXME: This is soooo imperative and so ugly!
export const removeLastChar = (str) => {
  const t1 = str.split('')
  const t2 = t1.pop()
  return t1.join('')
}

export const isValidChar = (str) => {
  return /^[A-Za-z ]*$/.test(str)
}
