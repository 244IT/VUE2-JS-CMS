/* 首字母转大写 */
const firstToUpper = (text) => {
  return text
    .split("")
    .map((item, index) => {
      if (index === 0) {
        return item.toLocaleUpperCase()
      }
      return item
    })
    .join("")
}

export {
  firstToUpper
}
