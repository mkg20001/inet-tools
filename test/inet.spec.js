/* eslint-env mocha */

'use strict'

const assert = require('assert').equal
const inet = require('../src')

describe('inet-tools', () => {
  it('aton #1', () => assert(inet.aton('192.168.2.1'), 3232236033))

  it('ntoa #1', () => assert(inet.ntoa(3232236033), '192.168.2.1'))

  it('pton #1', () => assert(inet.pton('::1'), '\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01'))
  it('pton #2', () => assert(inet.pton('127.0.0.1'), '\x7F\x00\x00\x01'))

  it('ntop #1', () => assert(inet.ntop('\0\0\0\0\0\0\0\0\0\0\0\0\0\0\0\x01'), '::1'))
  it('ntop #2', () => assert(inet.ntop('\x7F\x00\x00\x01'), '127.0.0.1'))

  it('ip2long #1', () => assert(inet.ip2long('192.0.34.166'), 3221234342))
  it('ip2long #2', () => assert(inet.ip2long('0.0xABCDEF'), 11259375))
  it('ip2long #3', () => assert(inet.ip2long('0.171.205.239'), 11259375))
  it('ip2long #4', () => assert(inet.ip2long('255.255.255.256'), false))

  it('long2ip #1', () => assert(inet.long2ip(3221234342), '192.0.34.166'))
  it('long2ip #2', () => assert(inet.long2ip(11259375), '0.171.205.239'))
})
