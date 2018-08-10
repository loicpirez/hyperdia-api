require('@babel/polyfill')
const autocomplete = require('./autocomplete/autocomplete.service.js')
const search = require('./search/search.service.js')
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(autocomplete)
  app.configure(search)
}
