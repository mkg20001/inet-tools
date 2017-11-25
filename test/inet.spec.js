/* eslint-env mocha */

'use strict'

const assert = require('assert')
const inet = require('../src')

describe('inet-tools', () => {
  it('aton #1', () => assert(inet.aton('192.168.2.1'), 3232236033))

  it('ntoa #1', () => assert(inet.ntoa(3232236033), '192.168.2.1'))

  it('pton #1', () => assert(inet.pton('::1'), '\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01'))
  it('pton #2', () => assert(inet.pton('127.0.0.1'), '\x7F\x00\x00\x01'))

  it('ntop #1', () => assert(inet.ntop('\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01'), '::1'))
  it('ntop #2', () => assert(inet.ntop('\x7F\x00\x00\x01'), '127.0.0.1'))
})
