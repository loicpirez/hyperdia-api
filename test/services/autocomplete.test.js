/* eslint-env node, mocha */

import axios from 'axios' // v0.15.3
import httpAdapter from 'axios/lib/adapters/http'
import nock from 'nock'

const assert = require('assert')

const host = 'http://localhost'

axios.defaults.host = host
axios.defaults.adapter = httpAdapter

const app = require('../../src/app')
const service = app.service('autocomplete')

describe('Autocompletion service (/autocomplete route)', () => {
  before(function () {
    nock('http://www.hyperdia.com')
      .get('/en/cgi/suggest/en/nsnl.cgi?TOKYO_null')
      .reply(200,
        'TOKYO,TOKYO DISNEY SEA,TOKYO DISNEYLAND STATION,TOKYO SKYTREE,TOKYO TELEPORT,'
      )
    nock('http://www.hyperdia.com')
      .get('/en/cgi/suggest/en/nsnl.cgi?KYOTOSE_null')
      .reply(200,
        'KYOTOSEIKADAIMAE,'
      )
    nock('http://www.hyperdia.com')
      .get('/en/cgi/suggest/en/nsnl.cgi?人_null')
      .reply(200,
        ''
      )
  })

  it('registered the service', () => {
    assert.ok(service, 'Registered the service')
  })

  describe('Querying tests', () => {
    it('query service with non-matching string, zero suggestion', () => {
      return service.get('人').then((result) => {
        assert.strictEqual(JSON.stringify(result), `{"suggestions":[]}`)
      })
    })

    it('query service with matching string, one suggestion', () => {
      return service.get('kyotose').then((result) => {
        assert.strictEqual(JSON.stringify(result), `{"suggestions":["Kyotoseikadaimae"]}`)
      })
    })

    it('query service with matching string, multiple suggestions', () => {
      return service.get('tokyo').then((result) => {
        assert.strictEqual(JSON.stringify(result), `{"suggestions":["Tokyo","Tokyo Disney Sea","Tokyo Disneyland Station","Tokyo Skytree","Tokyo Teleport"]}`)
      })
    })
  })
})
