/* eslint-env node, mocha */
/* global browser */

import assert from 'assert';
import co from 'co';
import superagent from 'superagent';
import UUID from 'node-uuid';
import crypto from 'crypto';

const baseUrl = 'http://localhost:8080';

describe('Goodfoot Programming Test', () => {
  it('should return a 200 status code after a successful API call.', co.wrap(function* () {
    const key = UUID.v4();
    const hash = crypto.createHash('md5').update(key).digest('hex');
    const response = yield superagent.post(`${baseUrl}/api/1.0/verify-signature`)
      .type('form')
      .set('x-key-hash', hash)
      .send({ key });
    assert.equal(response.statusCode, 200);
  }));
  it('should return a 400 status code after a failed API call', co.wrap(function* () {
    const key = UUID.v4();
    const hash = UUID.v4();
    const responsePromise = superagent.post(`${baseUrl}/api/1.0/verify-signature`)
      .type('form')
      .set('x-key-hash', hash)
      .send({ key });
    try {
      yield responsePromise;
      throw new Error('Should not succeed with an invalid hash.');
    } catch (error) {
      if (!error.response || error.response.statusCode !== 400) {
        throw error;
      }
    }
  }));
  it("should return a message including the string '200' after a successful API call made via the web application.", co.wrap(function* () {
    const key = UUID.v4();
    const hash = crypto.createHash('md5').update(key).digest('hex');
    browser.url(baseUrl);
    browser.waitForEnabled('#key');
    browser.setValue('#key', key);
    browser.waitForEnabled('#hash');
    browser.setValue('#hash', hash);
    browser.waitForEnabled('#submit');
    browser.click('#submit');
    browser.waitForEnabled('#response');
    const response = browser.getText('#response');
    assert(response.indexOf('200') !== -1);
  }));
  it("should return a message including the string '400' after a failed API call made via the web application.", co.wrap(function* () {
    const key = UUID.v4();
    const hash = UUID.v4();
    browser.url(baseUrl);
    browser.waitForEnabled('#key');
    browser.setValue('#key', key);
    browser.waitForEnabled('#hash');
    browser.setValue('#hash', hash);
    browser.waitForEnabled('#submit');
    browser.click('#submit');
    browser.waitForEnabled('#response');
    const response = browser.getText('#response');
    assert(response.indexOf('400') !== -1);
  }));
});

