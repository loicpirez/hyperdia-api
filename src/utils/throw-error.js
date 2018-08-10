import feathersErrors from '@feathersjs/errors'

const throwError = (type, errors) => {
  switch (type) {
    case 'INVALID_DATE':
      throw new feathersErrors.BadRequest('Invalid date given as POST parameter (see https://goo.gl/jneJJJ for details).', {errors})
    case 'INVALID_TOWN':
      throw new feathersErrors.BadRequest('Non existant town given as POST parameter.', {errors})
    case 'MISSING_POST_PARAMETER':
      throw new feathersErrors.BadRequest('Missing POST data parameters.', {errors})
    case 'REQUEST_AUTOCOMPLETION':
      throw new feathersErrors.Unprocessable(`Can't request Hyperdia.com autocompletion url.`, {errors})
    case 'REQUEST_SEARCH':
      throw new feathersErrors.Unprocessable(`Can't request Hyperdia.com search result url.`, {errors})
  }
}

export default throwError
