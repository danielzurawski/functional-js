'use strict';

const R = require('ramda');
const expect = require('chai').expect;
const __ = undefined;

describe('Composition, partial application and currying', () => {
  it('currying allow you to delay execution of a function until its actually needed', () => {
    const students = [{ name: 'John' }, { name: 'Alice' }];
    const getFirstNames = __;
    expect(getFirstNames(students)).to.deep.equal(['John', 'Alice']);
  });

  it('composing functions makes your code cleaner, more debugable and re-usable!', () => {
    const incAndSum = R.compose(

    );

    expect(incAndSum([1, 2, 3])).to.equal(-9);

  });

  it('re-usability with composability - get first names and reverse them', () => {
    const students = [{ name: 'John' }, { name: 'Alice' }];
    const reversedFirstNames = __; // use R.compose

    expect(reversedFirstNames(students)).to.deep.equal(['nhoJ', 'ecilA']);
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

  it('Sometimes you want to define different flavours of the same function using partials', () => {

    const valueString = (valueType, value) => valueType + ': ' + value;
    const cpmValue = R.partial(valueString, ['cpm']);
    const cpiValue = R.partial(valueString, ['cpi']);

    expect(cpiValue(lineItemsMap['1'].nonsenseCounter)).to.equal('cpi: 0');
    expect(cpmValue(lineItemsMap['1'].nonsenseCounter)).to.equal(__);
  });

  it('alternatively you could define a function which returns a function', () => {
    const valueString = (valueType) => {
      return (value) => {
        return valueType + ': ' + value;
      };
    };

    const cpiFn = valueString('cpi');
    expect(cpiFn(lineItemsMap['1'].nonsenseCounter)).to.equal(__);
  });


});
