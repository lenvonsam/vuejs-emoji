import data from './emoji-data.js'
var emojiData = {}
Object.values(data).forEach(function (item) {
  Object.assign(emojiData, item)
})

/**
 *
 *
 * @export
 * @param {string} value
 * @returns {string}
 */

export function emoji (value) {
  if (!value) return
  Object.keys(emojiData).forEach(function (item) {
    value = value.replace(new RegExp(item, 'g'), createIcon(item))
  })
  return value
}

function createIcon (item) {
  const value = emojiData[item]
  const path = './static/emoji/'
  return '<img src=' + path + value + ' width="16px" height="16px">'
}
