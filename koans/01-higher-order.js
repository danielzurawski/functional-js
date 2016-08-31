'use strict';

const R = require('ramda');
const expect = require('chai').expect;
const __ = undefined;

// higher order function - a function that takes another function as an argument
describe('higher order functions', () => {
  // Ramda API docs: http://ramdajs.com/0.21.0/docs/

  it('The map relates a sequence to another', () => {
    const arr = [1, 2, 3];

    expect(R.map((x) => x * 4, arr)).to.deep.equal(__);
  });

  it('Now implement a vanilla version of map', () => {

  });

  it('A filter can be strong', () => {
    const arr = ['anything', 'goes', 'here'];
    const strongFilter = (x) => false;

    expect(R.filter(strongFilter, arr)).to.deep.equal(__);
  });

  it('Or very weak', () => {
    const arr = ['anything', 'goes', 'here'];
    const weakFilter = () => true;

    expect(R.filter(weakFilter, arr)).to.deep.equal(__);
  });

  it('Or somewhere in between', () => {
    const arr = [10, 20, 30, 40, 50, 60, 70, 80];
    const between = (x) => __;

    expect(R.filter(between, arr)).to.deep.equal([10, 20, 30]);
  });

  it('Now try and implement vanilla filter', () => {

  });

  it('Maps and filters may be combined', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8];

    expect(R.map((x) => __,
                 R.filter((x) => __, arr)))

      .to.deep.equal([10, 20, 30]);

  });

  it('sometimes you want to recude an array of things to a single value', () => {
    const arr = [1, 2, 3, 4];
    expect(R.reduce(R.add, 2, arr))
      .to.deep.equal(__);
  });

  it('group by primary key', () => {
    const arr = [
      { id: 1, firstName: 'Bob', lastName: 'Stone' },
      { id: 2, firstName: 'John', lastName: 'Stone' },
      { id: 3, firstName: 'John', lastName: 'Stone' }
    ];

    // No need to write anonynmous function to get to firstName
    expect(R.groupBy(R.prop('firstName'),
                     arr)).to.deep.equal(__);

  });

  const lineItemsMap = Object.freeze({
    1: {
      campaign: { id: 1 },
      nonsenseCounter: 0
    },
    2: {
      campaign: { id: 1 },
      nonsenseCounter: 0
    },
    3: {
      campaign: { id: 2 },
      nonsenseCounter: 0
    },
    4: {
      campaign: { id: 3 },
      nonsenseCounter: 0
    }
  });

  it('Sometimes you want to get keys of a map', () => {
    expect(R.keys(lineItemsMap)).to.deep.equal(__);
  });

  it('And sometimes the values (line items)', () => {
    expect(__).to.deep.equal([{ campaign: { id: 1}},{ campaign: { id: 1}}, { campaign: { id: 2}},{ campaign: { id: 3}}]);
  });

  it('get array of campaign objects without using anonymous function', () => {
    expect(__).to.deep.equal([{id: 1}, {id: 1}, {id: 2}, {id: 3}]);
  });

  it('find unique campaign ids from list of line items', () => {
    const getUniqueCampainIds = (x) => __;

    expect(getUniqueCampainIds(lineItemsMap))
      .to.deep.equal([1, 2, 3]);

  });

  it('Sometimes you want to create a map out of two arrays ', () => {
    // Hint: search documentation for zip
    const ids = [1, 2];
    const obj = [{ firstName: 'John' }, { firstName: 'Alice' }];
    expect(__)
      .to.deep.equal(lineItemsMap);
  });

  it('Update property in an object without modifying existing', () => {
    const foo = { a: 1 };
    expect(R.assoc('a', foo.a + 1, foo)).to.deep.equal(__);
  });

  const newLineItemsMap = Object.freeze({
    1: {
      campaign: { id: 1 },
      nonsenseCounter: 1
    },
    2: {
      campaign: { id: 1 },
      nonsenseCounter: 1
    },
    3: {
      campaign: { id: 2 },
      nonsenseCounter: 1
    },
    4: {
      campaign: { id: 3 },
      nonsenseCounter: 1
    }
  });

  it('And what if you want to update some property in each of map values without changing (mutating) the original', () => {
    const newValues = __;

    expect(R.zipObj(R.keys(lineItemsMap),
                    __))
      .to.deep.equal(newLineItemsMap);
  });

  it('now lets suppose you want to add all the nonsenseCounters, but only if the campaign id is less than 3', () => {
    const arr = [1, 2, 3, 4];
    const fun = () => __;

    expect(R.reduce(fun, 0, arr))
      .to.deep.equal(__);
  });

  const concat = (a, b) => {
    return a.concat([b]);
  };
  it('now implement filter using reduce', () => {

  });

  it('now implement map using reduce', () => {

  });
});
