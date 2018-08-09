/* eslint-disable no-unused-vars */

import { requestAutoCompletion } from '../../hyperdia'

class Service {
  constructor (options) {
    this.options = options || {}
  }

  async find (params) {
    return {
      text: 'Please request the autocomplete service with text. Exemple: `/tokyo`'
    }
  }

  async get (query, params) {
    const suggestions = await requestAutoCompletion(query)
    return {
      suggestions
    }
  }
}

module.exports = function (options) {
  return new Service(options)
}

module.exports.Service = Service
