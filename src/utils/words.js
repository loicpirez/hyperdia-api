const upperFirstLetterForEachWord = (phrase) => {
  return phrase
    .replace(/\(/g, ' (')
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
    .replace(/(^|\W)(\w)/g, (match, a, b) => a + b.toUpperCase())
}

export { upperFirstLetterForEachWord }
