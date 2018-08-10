/* eslint-env node, mocha */

const assert = require('assert')
const app = require('../../src/app')

describe('Seeach service (/search route)', () => {
  it('registered the service', () => {
    const service = app.service('search')

    assert.ok(service, 'Registered the service')
  })
})
