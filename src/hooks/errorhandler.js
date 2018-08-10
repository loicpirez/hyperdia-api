const errors = require('@feathersjs/errors')

const errorHandler = ctx => {
  if (ctx.error) {
    const error = ctx.error
    if (!error.code) {
      const newError = new errors.GeneralError(`Server error (unhandled case!)`)
      ctx.error = newError
      console.error(error.message)
      return ctx
    }
    if (error.code === 404 || process.env.NODE_ENV === 'production') {
      error.stack = null
    }
    return ctx
  }
}

export default errorHandler
