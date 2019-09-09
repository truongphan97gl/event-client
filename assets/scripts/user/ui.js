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
  $('#message').html('You have signed up successfully')
  store.user = responseData.user
  $('.content').empty()
  $('#in').removeClass('hide')
  $('#out').addClass('hide')
}
const signUpFailure = () => {
  $('#message').html('You failed to signed up ')
  $('form').trigger('reset')
}

const signInSuccessful = responseData => {
  $('#message').html('You have signed in successfully')
  store.user = responseData.user
  eventApi.getAllEvent()
    .then((responseData) => {
      store.data = responseData
    })
  $('.content').empty()
  $('#in').removeClass('hide')
  $('#out').addClass('hide')
  // show some things
}

const signInFailure = response => {
  $('#message').html('You failed to signed in ')
  $('form').trigger('reset')
}

const signOutSuccessful = () => {
  $('#message').html('You signed out successfully ')
  $('#in').addClass('hide')
  $('#out').removeClass('hide')
  $('form').trigger('reset')
}

const signOutFailure = () => {
  $('#message').html('You failed to signed out ')
}
const signOutAuto = () => {
  $('#message').html('You changed password successfully ! You need to sign in again !! ')
}
const changeSuccessful = responseData => {
  $('#message').html('You have changed password successfully')
  $('#change-modal').removeClass('modalShow')
  $('#in').addClass('hide')
  $('#out').removeClass('hide')
  $('form').trigger('reset')

  api.signOut()
    .then(signOutAuto)
  $('form').trigger('reset')
}

const changeFailure = response => {
  $('#message').html('You failed to change password ')
  $('form').trigger('reset')
  $('#change-modal').removeClass('modalShow')
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
