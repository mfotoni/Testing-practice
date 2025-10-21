const {
  capitalizeFirst,
  reverser,
  calculator,
  caesarCipher,
  analyzeArray,
} = require("./basic");

test("Word with first letter capitalized:", () => {
  expect(capitalizeFirst("testing")).toBe("Testing");
});

test("word reversed", () => {
  expect(reverser("gilberto")).toBe("otreblig");
});

test("Calculator results:", () => {
  expect(calculator.add(2, 2)).toBe(4);
  expect(calculator.subtract(3, 1)).toBe(2);
  expect(calculator.multiply(3, 3)).toBe(9);
  expect(calculator.divide(3, 3)).toBe(1);
});

test("testing cipher", () => {
  expect(caesarCipher("MENSAGEM SECRETA", 7)).toBe("TLUZHNLT ZLJYLAH");
});

test("analyzing array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
