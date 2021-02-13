const englishToAlBhedMap = new Map([
  ["A", "Y"],
  ["B", "P"],
  ["C", "L"],
  ["D", "T"],
  ["E", "A"],
  ["F", "V"],
  ["G", "K"],
  ["H", "R"],
  ["I", "E"],
  ["J", "Z"],
  ["K", "G"],
  ["L", "M"],
  ["M", "S"],
  ["N", "H"],
  ["O", "U"],
  ["P", "B"],
  ["Q", "X"],
  ["R", "N"],
  ["S", "C"],
  ["T", "D"],
  ["U", "I"],
  ["V", "J"],
  ["W", "F"],
  ["X", "Q"],
  ["Y", "O"],
  ["Z", "W"],
]);
const alBhedToEnglishMap = new Map(
  Array.from(englishToAlBhedMap).map(([k, v]) => [v, k])
);

function translate(value, translationMap) {
  let translatedValue = "";
  for (const char of value) {
    translatedValue += translateChar(char, translationMap);
  }
  return translatedValue;
}

function translateChar(char, translationMap) {
  const upperCaseChar = char.toUpperCase();

  if (!translationMap.has(upperCaseChar)) {
    return char;
  }

  const translatedChar = translationMap.get(upperCaseChar);

  return char === upperCaseChar
    ? translatedChar.toUpperCase()
    : translatedChar.toLowerCase();
}

document.addEventListener("DOMContentLoaded", () => {
  const englishInput = document.querySelector("#english");
  const albhedInput = document.querySelector("#albhed");

  englishInput.addEventListener("input", (event) => {
    const translated = translate(event.target.value, englishToAlBhedMap);
    albhedInput.value = translated;
  });
  albhedInput.addEventListener("input", (event) => {
    const translated = translate(event.target.value, alBhedToEnglishMap);
    englishInput.value = translated;
  });
});
