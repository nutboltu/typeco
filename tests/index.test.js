const typeChecker = require('../src/index');

const testCases = [
  // empty
  undefined,
  null,
  [],
  '',
  {},
  // arrays
  [1, 2, 3],
  ['str1', 'str2', 'str3'],
  [{}],
  [{ key: 'value' }],
  // object
  { key: 'value' },
  { key: { key: 'value' } },
  { key: { key1: { key2: 'value' } } },
  // strings
  'this is a string',
  // numbers
  1,
  1e10,
  // date
  new Date(),
  // regex
  new RegExp('ab+c'),
  // function
  function testfunc() {
  },
  // booleans
  true,
  false,
  // empty or zeros
  0,
];

describe('isArray', () => {
  const expected = [
    false, false, true,
    false, false, true,
    true, true, true,
    false, false, false,
    false, false, false,
    false, false, false,
    false, false, false];
  testCases.forEach((caseItem, index) => {
    test(`${caseItem} should returns ${expected[index]}`, () => {
      expect(typeChecker.isArray(caseItem))
        .toBe(expected[index]);
    });
  });
});

describe('isObject', () => {
  const expected = [
    false, false, false,
    false, true, false,
    false, false, false,
    true, true, true,
    false, false, false,
    false, false, false,
    false, false, false];
  testCases.forEach((caseItem, index) => {
    test(`${caseItem} should returns ${expected[index]}`, () => {
      expect(typeChecker.isObject(caseItem))
        .toBe(expected[index]);
    });
  });
});

describe('isString', () => {
  const expected = [
    false, false, false,
    true, false, false,
    false, false, false,
    false, false, false,
    true, false, false,
    false, false, false,
    false, false, false];
  testCases.forEach((caseItem, index) => {
    test(`${caseItem} should returns ${expected[index]}`, () => {
      expect(typeChecker.isString(caseItem))
        .toBe(expected[index]);
    });
  });
});

describe('isDate', () => {
  const expected = [
    false, false, false,
    false, false, false,
    false, false, false,
    false, false, false,
    false, false, false,
    true, false, false,
    false, false, false];
  testCases.forEach((caseItem, index) => {
    test(`${caseItem} should returns ${expected[index]}`, () => {
      expect(typeChecker.isDate(caseItem))
        .toBe(expected[index]);
    });
  });
});

describe('isRegExp', () => {
  const expected = [
    false, false, false,
    false, false, false,
    false, false, false,
    false, false, false,
    false, false, false,
    false, true, false,
    false, false, false];
  testCases.forEach((caseItem, index) => {
    test(`${caseItem} should returns ${expected[index]}`, () => {
      expect(typeChecker.isRegExp(caseItem))
        .toBe(expected[index]);
    });
  });
});

describe('isFunction', () => {
  const expected = [
    false, false, false,
    false, false, false,
    false, false, false,
    false, false, false,
    false, false, false,
    false, false, true,
    false, false, false];
  testCases.forEach((caseItem, index) => {
    test(`${caseItem} should returns ${expected[index]}`, () => {
      expect(typeChecker.isFunction(caseItem))
        .toBe(expected[index]);
    });
  });
});

describe('isBoolean', () => {
  const expected = [
    false, false, false,
    false, false, false,
    false, false, false,
    false, false, false,
    false, false, false,
    false, false, false,
    true, true, false];
  testCases.forEach((caseItem, index) => {
    test(`${caseItem} should returns ${expected[index]}`, () => {
      expect(typeChecker.isBoolean(caseItem))
        .toBe(expected[index]);
    });
  });
});

describe('isNumber', () => {
  const expected = [
    false, false, false,
    false, false, false,
    false, false, false,
    false, false, false,
    false, true, true,
    false, false, false,
    false, false, true];
  testCases.forEach((caseItem, index) => {
    test(`${caseItem} should returns ${expected[index]}`, () => {
      expect(typeChecker.isNumber(caseItem))
        .toBe(expected[index]);
    });
  });
});

describe('isEmpty', () => {
  const expected = [
    true, true, true,
    true, true, false,
    false, false, false,
    false, false, false,
    false, false, false,
    false, false, false,
    false, false, false];
  testCases.forEach((caseItem, index) => {
    test(`${caseItem} should returns ${expected[index]}`, () => {
      expect(typeChecker.isEmpty(caseItem))
        .toBe(expected[index]);
    });
  });
});

describe('isEmptyOrZero', () => {
  const expected = [
    true, true, true,
    true, true, false,
    false, false, false,
    false, false, false,
    false, false, false,
    false, false, false,
    false, false, true];
  testCases.forEach((caseItem, index) => {
    test(`${caseItem} should returns ${expected[index]}`, () => {
      expect(typeChecker.isEmptyOrZero(caseItem))
        .toBe(expected[index]);
    });
  });
});
