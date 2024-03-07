function isValidArray(array) {
  if (!Array.isArray(array) || array.some(isNaN) || array.length === 0)
    return false;

  return true;
}

function analyzeArray(array) {
  if (!isValidArray(array)) return "invalid array";

  const object = {
    average: array.reduce((a, b) => a + b) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };

  return object;
}

export default analyzeArray;
