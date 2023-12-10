export const truncateText = (str, count = 25) => {
  if (str.length < count) {
    return str
  }
  return str.substring(0, count) + '...'
}