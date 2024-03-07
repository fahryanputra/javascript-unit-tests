function isValidNumber(a, b) {
  return typeof a !== "number" || typeof b !== "number" ? false : true;
}

const calculator = {
  add(a, b) {
    return isValidNumber(a, b) ? a + b : "invalid number";
  },

  subtract(a, b) {
    return isValidNumber(a, b) ? a - b : "invalid number";
  },

  multiply(a, b) {
    return isValidNumber(a, b) ? a * b : "invalid number";
  },

  divide(a, b) {
    return isValidNumber(a, b) ? a / b : "invalid number";
  },
};

export default calculator;
