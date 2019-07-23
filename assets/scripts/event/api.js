'use strict'
const config = require('../config')
const store = require('../store')
const createEvent = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/events',
    data: formData,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const getAllEvent = (formData) => {
  return $.ajax({
    url: config.apiUrl + '/events',
    data: formData,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const getEvent = (id) => {
  return $.ajax({
    url: config.apiUrl + '/events/ ' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteEvent = function (id) {
  return $.ajax({
    url: config.apiUrl + '/events/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateEvent = data => {
  console.log('the id in api: ', data.event.id)
  return $.ajax({
    url: config.apiUrl + '/events/' + data.event.id,
    data: data,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
module.exports = {
  createEvent,
  getAllEvent,
  deleteEvent,
  updateEvent,
  getEvent
}
