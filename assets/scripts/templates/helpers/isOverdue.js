'use strict'
const isOverdue = (date) => {
  const today = new Date()
  const toDate = today.getFullYear() + '-' + (
    today.getMonth() + 1) + '-' + today.getDate()
  const dateArray = date.split('-')
  const toDateArray = toDate.split('-')
  console.log(dateArray)
  console.log(toDateArray)
  console.log(Number(toDateArray[0]) > Number(dateArray[0]))
  console.log(Number(toDateArray[0]))
  console.log(Number(dateArray[0]))
  if (Number(toDateArray[0]) > Number(dateArray[0])) {
    return true
  } else if (Number(toDateArray[0]) === Number(dateArray[0])) {
    if (Number(toDateArray[1]) > Number(dateArray[1])) {
      console.log('second')
      return true
    } else if (Number(toDateArray[1]) === Number(dateArray[1])) {
      if (Number(toDateArray[2]) > Number(dateArray[2])) {
        console.log('third')
        return true
      }
    }
  }
}
module.exports = isOverdue
