function capitalize(string) {
  const format = /[^\x00-\x7F]/;
  return typeof string === "string"
    ? string
        .toLowerCase()
        .split(" ")
        .map((word) =>
          Number.isInteger(+word.charAt(0)) || format.test(word.charAt(0))
            ? word.charAt(0) + word.charAt(1).toUpperCase() + word.substring(2)
            : word.charAt(0).toUpperCase() + word.substring(1),
        )
        .join(" ")
    : "invalid string";
}

export default capitalize;
