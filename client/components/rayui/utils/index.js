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
  // 다양한 형식의 포맷 제공 함수
  format(value, type) {
    let returnVal = {
      value: value,
      formatValue: value,
    };

    if (type === 'currency') {
      returnVal.formatValue = new Intl.NumberFormat().format(value);
    }

    return returnVal;
  }
}

export default new Utils();
