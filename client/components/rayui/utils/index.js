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
  // 특수문자 검증 및 제거
  removeRegExp(value) {
    const str = value.toString();
    let returnVal = '';
    // 소수점은 제외
    // const regExp = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
    const regExp = /[\{\}\[\]\/?,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/gi;
    if (regExp.test(str)) {
      //특수문자 제거
      returnVal = str.replace(regExp, '');
    } else {
      returnVal = str;
    }
    return returnVal;
  }
  // 숫자,.만 남기고 모두 제거
  removeRegString(value) {
    const str = value.toString();
    let returnVal = '';
    // 숫자와 , . 만 남기고 모두 지우기
    const regExp = /([^(0-9)\.\,])/gi;
    if (regExp.test(str)) {
      //특수문자 제거
      returnVal = str.replace(regExp, '');
    } else {
      returnVal = str;
    }
    return returnVal;
  }
  // 다양한 형식의 포맷 제공 함수
  format(value, type) {
    let returnVal = {
      value: this.removeRegExp(value),
      formatValue: value,
    };

    if (type === 'currency') {
      // js기본제공 함수 사용법
      // returnVal.formatValue = new Intl.NumberFormat().format(returnVal.value);
      const reg = /(^[+-]?\d+)(\d{3})/;
      let str = returnVal.value;
      while (reg.test(str)) str = str.replace(reg, '$1' + ',' + '$2');
      returnVal.formatValue = str;
    }

    return returnVal;
  }
}

export default new Utils();
