const { generateText, checkAndGenerate } = require("./util");

test("shoud output name and age", () => {
  const text = generateText("Max", 29);
  expect(text).toBe("Max (29 years old)");
  //   const text2 = generateText("Anna", 28);
  //   expect(text2).toBe("Anna (28 years old)");
});

// test("should output data-less text", () => {
//   const text = generateText("", null);
//   expect(text).toBe(" (null years old)");
// });

// test("should output undefined text", () => {
//   const text = generateText();
//   expect(text).toBe("undefined (undefined years old)");
// });

test("should generate a valid text output", () => {
  const text = checkAndGenerate("Max", 29);
  expect(text).toBe("Max (29 years old)");
});
