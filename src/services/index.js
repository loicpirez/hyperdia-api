const autocomplete = require('./autocomplete/autocomplete.service.js')
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(autocomplete)
}
