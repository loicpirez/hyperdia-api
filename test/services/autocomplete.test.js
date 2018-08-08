/* eslint-env node, mocha */

const assert = require('assert')
const app = require('../../src/app')

describe('\'autocomplete\' service', () => {
  it('registered the service', () => {
    const service = app.service('autocomplete')

    assert.ok(service, 'Registered the service')
  })
})
