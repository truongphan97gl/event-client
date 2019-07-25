'user strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store')
store.event = {}
const onCreateEvent = event => {
  event.preventDefault()

  const data = getFormFields(event.target)
  api.createEvent(data)
    .then(ui.createEventSuccess)
    .catch(ui.createEventFailure)
    .then(ui.getWithoutmessage)
}

const onGetAllEvent = event => {
  event.preventDefault()

  api.getAllEvent()
    .then(ui.getAllEventSuccess)
    .catch(ui.getAllEventFailure)
    .then(() => {
      $('#message').text('Get all events successfully')
    })
}

const onDeleteEvent = event => {
  event.preventDefault()
  const target = $(event.target)
  const id = target.data('id')

  api.deleteEvent(id)
    .then(() => {
      onGetAllEvent(event)
    })
    .catch(() => {
      $('#message').text('Failed to delete.')
    })
    .then(ui.getWithoutmessage)
}
const openEditModal = event => {
  $('#edit-event').addClass('modalShow')
  event.preventDefault()
  const target = $(event.target)
  const id = target.data('id')
  store.event.id = id
  const editElement = store.data.events.find(event => event.id === id)
  ui.passEditElement(editElement)
}
const onShowEvent = event => {
  event.preventDefault()
  const id = $('#id_event').val()
  if (id !== '') {
    api.getEvent(id)
      .then(ui.getEventSuccess)
      .catch(ui.getEventFailure)
      .then(() => {
        $('#show-modal').removeClass('modalShow')
      })
  } else {
    $('#message').text('Please enter ID')
    $('#show-modal').removeClass('modalShow')
  }
  $('.content').empty()
}

const onShowEventName = event => {
  event.preventDefault()
  const name = $('#name_event').val()
  let eventList = []
  if (name !== '') {
    eventList = store.data.events.filter(event => event.name === name)
    ui.showEventName(eventList)
  } else {
    $('#message').text('Please enter NAME of event')
    $('#show-modal-name').removeClass('modalShow')
    $('.content').empty()
  }
}
const onEditEvent = event => {
  event.preventDefault()
  store.event.name = $('#inputEditName').val()
  store.event.date = $('#inputEditDate').val()
  store.event.place = $('#inputEditPlace').val()
  store.event.duration = $('#inputEditDuration').val()
  store.event.note = $('#inputEditNote').val()
  api.updateEvent(store)
    .then(ui.editEventSuccess)
    .catch(ui.editEventFailure)
    .then(ui.getWithoutmessage)
}
const onHideEvent = (event) => {
  event.preventDefault()
  ui.hideEvents()
}

module.exports = {
  onCreateEvent,
  onGetAllEvent,
  onDeleteEvent,
  onEditEvent,
  openEditModal,
  onShowEvent,
  onHideEvent,
  onShowEventName
}
