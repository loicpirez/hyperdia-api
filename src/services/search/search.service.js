// Initializes the `search` service on path `/search`
const createService = require('./search.class.js')
const hooks = require('./search.hooks')

module.exports = function (app) {
  const paginate = app.get('paginate')

  const options = {
    paginate
  }

  // Initialize our service with any options it requires
  app.use('/search', createService(options))

  // Get our initialized service so that we can register hooks
  const service = app.service('search')

  service.hooks(hooks)
}
