'use strict'

const checkInput = (str, type) => {
  if (str.length === 0) {
    return str
  } else {
    return type + 'is not provided'
  }
}

module.exports = checkInput
