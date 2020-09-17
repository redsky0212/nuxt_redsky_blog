class Utils {
  isString(value) {
    return typeof value === 'string' || value instanceof String;
  }
  isNumber(value) {
    return typeof value === 'number' && isFinite(value);
  }
  isArray(value) {
    return value && typeof value === 'object' && value.constructor === Array;
    // ES5
    // Array.isArray(value);
  }
  isObject(value) {
    return value && typeof value === 'object' && value.constructor === Object;
  }
  isFunction(value) {
    return typeof value === 'function';
  }
  isNull(value) {
    return value === null;
  }
  isUndefined(value) {
    return typeof value === 'undefined';
  }
  isBoolean(value) {
    return typeof value === 'boolean';
  }
  isDate(value) {
    return value instanceof Date;
  }
  isSymbol(value) {
    return typeof value === 'symbol';
  }
  isError(value) {
    return value instanceof Error && typeof value.message !== 'undefined';
  }
}

export default new Utils();
