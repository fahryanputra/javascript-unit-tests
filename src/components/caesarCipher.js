function caesarCipher(string, shift) {
  var output = "";

  for (var i = 0; i < string.length; i++) {
    var ascii = string[i].charCodeAt();

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
