'use strict'
const isOverdue = (date) => {
  const today = new Date()
  const toDate = today.getFullYear() + '-' + (
    today.getMonth() + 1) + '-' + today.getDate()
  const dateArray = date.split('-')
  const toDateArray = toDate.split('-')
  if (Number(toDateArray[0]) > Number(dateArray[0])) {
    return true
  } else if (Number(toDateArray[0]) === Number(dateArray[0])) {
    if (Number(toDateArray[1]) > Number(dateArray[1])) {
      return true
    } else if (Number(toDateArray[1]) === Number(dateArray[1])) {
      if (Number(toDateArray[2]) > Number(dateArray[2])) {
        return true
      }
    }
  }
}
module.exports = isOverdue
