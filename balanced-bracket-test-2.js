function checkMatchBracket(inputString) {
  const data = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  inputString.replace(/\s/g, "");
  const unmatched = [];
  for (const char of inputString) {
    if (Object.keys(data).includes(char)) {
      unmatched.push(char);
    } else {
      const lastInsertChar =
        unmatched[unmatched.length > 1 ? unmatched.length - 1 : 0];
      if (data[lastInsertChar] === char) {
        //match remove from array
        unmatched.pop();
      }
    }
  }
  return unmatched.length > 0 ? "NO" : "YES";
}

console.log(checkMatchBracket(" { ( ( [ ] ) [ ] ) [ ] }"));
