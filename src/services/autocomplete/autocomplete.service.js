// Initializes the `autocomplete` service on path `/autocomplete`
const createService = require('./autocomplete.class.js')
const hooks = require('./autocomplete.hooks')

module.exports = function (app) {
  const paginate = app.get('paginate')

  const options = {
    paginate
  }

  // Initialize our service with any options it requires
  app.use('/autocomplete', createService(options))

  // Get our initialized service so that we can register hooks
  const service = app.service('autocomplete')

  service.hooks(hooks)
}
