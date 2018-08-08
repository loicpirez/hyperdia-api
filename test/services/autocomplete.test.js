/* eslint-env node, mocha */

const assert = require('assert')
const app = require('../../src/app')

describe('\'autocomplete\' service', () => {
  it('registered the service', () => {
    const service = app.service('autocomplete')

    assert.ok(service, 'Registered the service')
  })

  it('query service with correct string (tokyo)', () => {
    const service = app.service('autocomplete')

    return service.get('tokyo').then((result) => {
      assert.strictEqual(JSON.stringify(result), `{"result":{"query":"tokyo"}}`)
    })
  })
})
