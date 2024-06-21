function calculatePossibilities(inputString) {
  const alphabets = {};

  //a-z 26 total characters, lowercase keyboard value start from 97, char=a etc
  for (let n = 1; n <= 26; n++) {
    const char = String.fromCharCode(96 + n); //n=1 char=a
    alphabets[char] = n;
  }

  const mappingWeights = new Set();
  let currentChar = inputString[0];
  let totalWeightOccurrences = alphabets[currentChar];
  mappingWeights.add(totalWeightOccurrences);
  for (let c = 1; c < inputString.length; c++) {
    if (inputString[c] === currentChar) {
      totalWeightOccurrences += alphabets[inputString[c]];
    } else {
      totalWeightOccurrences = alphabets[inputString[c]];
      currentChar = inputString[c];
    }
    mappingWeights.add(totalWeightOccurrences);
  }
  return mappingWeights;
}

/*
	inputString: string
	queries: number[]
 */
function testRun(inputString, queries) {
  const data = calculatePossibilities(inputString);
  return queries.map((angka) => (data.has(angka) ? "Yes" : "No"));
}

console.log(testRun("aaabbbbcccddd", [5, 9, 7, 8, 12, 5]));
