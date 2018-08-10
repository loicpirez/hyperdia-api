/* eslint-disable no-unused-vars */

import { requestSearchResult } from '../../hyperdia'
import { parseSearchPostData } from '../../utils/parse-postdata'
import errors from '@feathersjs/errors'

class Service {
  constructor (options) {
    this.options = options || {}
  }

  async find (params) {
    return {
      text: 'Please request the autocomplete service with data as a POST request.' // TODO: better message
    }
  }

  async create (data, params) {
    const parameters = parseSearchPostData(data)
    // requestSearchResult(parseSearchResultRequestedData(data))
    // const results = await requestSearchResult(data)
    // console.log(results)
    // console.log(data) // date: string (javascript new date), departure: string, arrival: string
    return {
      ...parameters
    }
  }
}

module.exports = function (options) {
  return new Service(options)
}

module.exports.Service = Service
