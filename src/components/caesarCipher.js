function isValidCipher(string, shift) {
  return typeof string !== "string" || typeof shift !== "number" ? false : true;
}

function caesarCipher(string, shift) {
  if (!isValidCipher(string, shift)) return "invalid cipher";

  let output = "";

  for (let i = 0; i < string.length; i++) {
    let ascii = string[i].charCodeAt();

    if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
      ascii += shift;
      if ((ascii > 90 && string[i] <= "Z") || ascii > 122) {
        ascii -= 26;
      }
    }

    output += String.fromCharCode(ascii);
  }

  return output;
}

export default caesarCipher;
