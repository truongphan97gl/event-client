'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const userEvents = require('./user/events')
const eventEvents = require('./event/events')
$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', userEvents.onSignUp)
  $('#change-password').on('submit', userEvents.onChangePassword)
  $('#sign-in').on('submit', userEvents.onSignIn)
  $('#sign-out').on('submit', userEvents.onSignOut)
  $('#create-event').on('submit', eventEvents.onCreateEvent)
  $('#get-all').on('click', eventEvents.onGetAllEvent)
  $('.content').on('click', '.remove-button', eventEvents.onDeleteEvent)
  $('.content').on('click', '.edit-button', eventEvents.openEditModal)
  $('#edit-event-form').on('submit', eventEvents.onEditEvent)
  $('#show-event-form').on('submit', eventEvents.onShowEvent)
  $('#show-event-form-name').on('submit', eventEvents.onShowEventName)

  $('#hide-all').on('click', eventEvents.onHideEvent)

  $('#change-button').on('click', () => {
    $('#change-modal').addClass('modalShow')
  })
  $('#show-button').on('click', () => {
    $('#show-modal').addClass('modalShow')
  })
  $('#show-button-name').on('click', () => {
    $('#show-modal-name').addClass('modalShow')
  })
  $('#create-test').on('click', () => {
    $('#myModal').addClass('modalShow')
  })
  $('.close').on('click', () => {
    $('#myModal').removeClass('modalShow')
    $('#edit-event').removeClass('modalShow')
    $('#show-modal').removeClass('modalShow')
    $('#show-modal-name').removeClass('modalShow')
    $('#change-modal').removeClass('modalShow')
    $('form').trigger('reset')
  })
})
