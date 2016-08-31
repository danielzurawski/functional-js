'use strict';

const R = require('ramda');
const expect = require('chai').expect;
const __ = undefined;

// async call
const getFollowers = (id) => {
  const followers = {
    1: [{ id: 3, firstName: 'Bob', lastName: 'O' }],
    2: [{ id: 4, firstName: 'Bobjohn', lastName: 'Q'}]
  };
  return Promise.resolve(followers[id]);
};

// async call
const getUsers = () => {
  return Promise.resolve([{
    id: 1,
    firstName: 'John',
    lastName: 'Stone'
  }, {
    id: 2,
    firstName: 'Alice',
    lastName: 'Wonder'
  }]);
};


describe('composing async code', (done) => {
  it('fetch followers of last user', () => {
    // hint: use composeP

    const lastUserFollowers = __;

    lastUserFollowers().then((followers) => {

      expect(followers).to.deep.equal([
        { id: 4, firstName: 'Bobjohn', lastName: 'Q'}
      ]);

      done();
    });
  });
});
