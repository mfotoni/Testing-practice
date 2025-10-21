function capitalizeFirst(word) {
  const firstLetter = word.charAt(0);
  const firstLetterCap = firstLetter.toUpperCase();
  const lettersLeft = word.slice(1);

  const capitalizedWord = firstLetterCap + lettersLeft;
  return capitalizedWord;
}

function reverser(word) {
  const reversedString = word.split("").reverse().join("");
  return reversedString;
}

const calculator = {
  add: (a, b) => {
    return a + b;
  },
  subtract: (a, b) => {
    return a - b;
  },
  multiply: (a, b) => {
    return a * b;
  },
  divide: (a, b) => {
    return a / b;
  },
};

function caesarCipher(text, desloc) {
  desloc = desloc % 26;

  return text
    .split("")
    .map((char) => {
      const code = char.charCodeAt(0);

      if (code >= 65 && code <= 90) {
        return String.fromCharCode(((code - 65 + desloc) % 26) + 65);
      }
      if (code >= 97 && code <= 122) {
        return String.fromCharCode(((code - 97 + desloc) % 26) + 97);
      }
      return char;
    })
    .join("");
}

function analyzeArray(toAnalyze) {
  const length = toAnalyze.length;
  const minimum = Math.min(...toAnalyze);
  const maximum = Math.max(...toAnalyze);

  const sum = toAnalyze.reduce((acumulator, number) => acumulator + number, 0);
  const average = sum / length;

  return {
    average: average,
    min: minimum,
    max: maximum,
    length: length,
  };
}

module.exports = {
  capitalizeFirst,
  reverser,
  calculator,
  caesarCipher,
  analyzeArray,
};
