const store = require('../store')
const api = require('./api.js')
const eventApi = require('../event/api.js')
const signUpSuccessful = responseData => {
  $('form').trigger('reset')
  $('#inside').removeClass('hide')
  api.signIn(store.signUp)
    .then(signInAuto)
}
const signInAuto = responseData => {
  $('#message').text('You are sign up successfully')
  store.user = responseData.user
  $('.content').empty()
  $('#in').removeClass('hide')
  $('#out').addClass('hide')
}
const signUpFailure = () => {
  $('#message').text('You failed to signed up ')
  $('form').trigger('reset')
}

const signInSuccessful = responseData => {
  $('#message').text('You are signed in successfully')
  store.user = responseData.user
  eventApi.getAllEvent()
    .then((responseData) => {
      store.all = responseData
    })
  $('.content').empty()
  $('#in').removeClass('hide')
  $('#out').addClass('hide')
  // show some things
}

const signInFailure = response => {
  $('#message').text('You failed to signed in ')
  $('form').trigger('reset')
}

const signOutSuccessful = () => {
  $('#message').text('You signed out successfully ')
  $('#in').addClass('hide')
  $('#out').removeClass('hide')
  $('form').trigger('reset')
  api.signOut()
    .then(signOutAuto)
}

const signOutFailure = () => {
  $('#message').text('You failed to signed out ')
}
const signOutAuto = () => {
  $('#message').text('You changed password successfully ! You need to sign in again !! ')
}
const changeSuccessful = responseData => {
  $('#message').text('You are changed password successfully')
  $('#change-modal').removeClass('modalShow')
  $('#in').addClass('hide')
  $('#out').removeClass('hide')
  $('form').trigger('reset')

  api.signOut()
    .then(signOutAuto)
  $('form').trigger('reset')
}

const changeFailure = response => {
  $('#message').text('You failed to change password ')
  $('form').trigger('reset')
}

module.exports = {
  signUpFailure,
  signUpSuccessful,
  signInSuccessful,
  signInFailure,
  signOutSuccessful,
  signOutFailure,
  changeSuccessful,
  changeFailure
}
