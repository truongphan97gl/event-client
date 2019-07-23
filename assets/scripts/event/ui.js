'use strict'
const store = require('../store')
const api = require('./api.js')
const showEventsTemplate = require('../templates/event-listing.handlebars')
const oneEventTemplate = require('../templates/one-event.handlebars')
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
  const showEventsHtml = showEventsTemplate({ events: responseData.events })
  store.data = responseData
  store.all = responseData
  $('#message').text('Get all events successfully')
  $('.content').html(showEventsHtml)
}

const passEditElement = data => {
  $('#inputEditName').val(data.name)
  $('#inputEditDate').val(data.date)
  $('#inputEditDuration').val(data.duration)
  $('#inputEditPlace').val(data.Place)
  $('#inputEditNote').val(data.Note)
}

const getEventSuccess = data => {
  console.log(data)
  const oneEventHtml = oneEventTemplate({event: data.event})
  $('.content').html(oneEventHtml)
}

const getEventFailure = data => {
  console.log('Some thing happends')
}

module.exports = {
  createEventSuccess,
  getAllEventSuccess,
  passEditElement,
  createEventFailure,
  editEventFailure,
  editEventSuccess,
  getEventSuccess,
  getEventFailure
}
