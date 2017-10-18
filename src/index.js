const TYPES = {
  array: 'Array',
  object: 'Object',
  string: 'String',
  date: 'Date',
  regExp: 'RegExp',
  function: 'Function',
  boolean: 'Boolean',
  number: 'Number',
  null: 'Null',
  undefined: 'Undefined',
};

const getType = obj => Object.prototype.toString.call(obj).slice(8, -1);

const isArray = obj => getType(obj) === TYPES.array;

const isObject = obj => getType(obj) === TYPES.object;

const isString = obj => getType(obj) === TYPES.string;

const isDate = obj => getType(obj) === TYPES.date;

const isRegExp = obj => getType(obj) === TYPES.regExp;

const isFunction = obj => getType(obj) === TYPES.function;

const isBoolean = obj => getType(obj) === TYPES.boolean || (isString(obj) && (obj === 'true' || obj === 'false'));

const isNumber = obj => getType(obj) === TYPES.number && !Number.isNaN(obj);

const isNull = obj => getType(obj) === TYPES.null || getType(obj) === TYPES.undefined;

const isEmpty = (obj) => {
  if (isString(obj)) return obj.trim() === '';
  if (isArray(obj)) return obj.length === 0;
  if (isObject(obj)) return Object.keys(obj).length === 0;
  return isNull(obj);
};

const isEmptyOrZero = obj => isEmpty(obj) || (isNumber(obj) && obj === 0);


module.exports = {
  isArray,
  isObject,
  isString,
  isDate,
  isRegExp,
  isFunction,
  isBoolean,
  isNumber,
  isNull,
  isEmpty,
  isEmptyOrZero,
};
