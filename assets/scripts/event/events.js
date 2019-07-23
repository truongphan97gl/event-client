'user strict'
const getFormFields = require('../../../lib/get-form-fields.js')
const api = require('./api.js')
const ui = require('./ui.js')
const store = require('../store')
store.event = {}
const onCreateEvent = event => {
  event.preventDefault()

  const data = getFormFields(event.target)
  console.log(data)
  api.createEvent(data)
    .then(ui.createEventSuccess)
    .catch(ui.createEventFailure)
}

const onGetAllEvent = event => {
  event.preventDefault()

  api.getAllEvent()
    .then(ui.getAllEventSuccess)
    .catch(ui.getAllEventFailure)
}

const onDeleteEvent = event => {
  event.preventDefault()
  const target = $(event.target)
  const id = target.data('id')

  api.deleteEvent(id)
    .then(() => {
      onGetAllEvent(event)
    })
    .catch(console.log)
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
  console.log(id)
  api.getEvent(id)
    .then(ui.getEventSuccess)
    .catch(ui.getEventFailure)
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
    .then(() => {
      onGetAllEvent(event)
    })
}
module.exports = {
  onCreateEvent,
  onGetAllEvent,
  onDeleteEvent,
  onEditEvent,
  openEditModal,
  onShowEvent
}
