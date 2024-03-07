function reverseString(string) {
  return typeof string === "string"
    ? string.split("").reverse().join("")
    : "invalid string";
}

export default reverseString;
