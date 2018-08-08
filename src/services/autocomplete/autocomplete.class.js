/* eslint-disable no-unused-vars */
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
    return {
      result: {
        query
      }
    }
  }
}

module.exports = function (options) {
  return new Service(options)
}

module.exports.Service = Service
