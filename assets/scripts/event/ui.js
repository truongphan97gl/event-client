'use strict'
const store = require('../store')
const api = require('./api.js')
const showEventsTemplate = require('../templates/event-listing.handlebars')
const oneEventTemplate = require('../templates/one-event.handlebars')

const getWithoutmessage = () => {
  api.getAllEvent()
    .then(showContent)
}
const showContent = responseData => {
  const showEventsHtml = showEventsTemplate({ events: responseData.events })
  store.data = responseData
  $('.content').html(showEventsHtml)
}
const createEventSuccess = responseData => {
  $('#message').text('Create event successfull')
  $('#create-event').removeClass('hide')
  $('#myModal').removeClass('modalShow')
  $('form').trigger('reset')
}

const createEventFailure = responseData => {
  $('#message').text('Failed to create Event')
  $('#create-event').removeClass('hide')
  $('#myModal').removeClass('modalShow')
  $('form').trigger('reset')
}

const editEventSuccess = data => {
  $('#message').text('Edit event successful')
  $('#edit-event').removeClass('modalShow')
  $('form').trigger('reset')
}
const editEventFailure = data => {
  $('#message').text('Failed to edit event')
  $('form').trigger('reset')
}

const getAllEventSuccess = responseData => {
  store.data = responseData
  const showEventsHtml = showEventsTemplate({ events: responseData.events })
  $('.content').html(showEventsHtml)
  $('form').trigger('reset')
}

const passEditElement = data => {
  $('#inputEditName').val(data.name)
  $('#inputEditDate').val(data.date)
  $('#inputEditDuration').val(data.duration)
  $('#inputEditPlace').val(data.Place)
  $('#inputEditNote').val(data.Note)
}

const getEventSuccess = data => {
  const oneEventHtml = oneEventTemplate({event: data.event})
  $('#message').text('Get event successfully')
  $('.content').html(oneEventHtml)
}
const showEventName = data => {
  if (data.length !== 0) {
    const showEventsHtml = showEventsTemplate({ events: data })
    $('.content').html(showEventsHtml)
    $('#message').text('Get event successfully')
  } else {
    $('#message').text('Name does not exist.')
    $('.content').empty()
  }
  $('#show-modal-name').removeClass('modalShow')
  $('form').trigger('reset')
}
const getEventFailure = data => {
  $('#message').text('Failed to get Event')
  $('form').trigger('reset')
}

const hideEvents = () => {
  if ($('.content').html() === '') {
    $('#message').text('There are nothing to hide')
  } else {
    $('.content').empty()
    $('#message').text('Hide Events Successfully')
  }
  $('form').trigger('reset')
}
module.exports = {
  createEventSuccess,
  getAllEventSuccess,
  passEditElement,
  createEventFailure,
  editEventFailure,
  editEventSuccess,
  getEventSuccess,
  getEventFailure,
  hideEvents,
  showEventName,
  getWithoutmessage
}
