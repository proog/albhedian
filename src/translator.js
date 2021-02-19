const englishToAlBhedMap = new Map([
  ["A", "Y"],
  ["Á", "Ý"],
  ["B", "P"],
  ["C", "L"],
  ["D", "T"],
  ["E", "A"],
  ["É", "Á"],
  ["F", "V"],
  ["G", "K"],
  ["H", "R"],
  ["I", "E"],
  ["Í", "É"],
  ["J", "Z"],
  ["K", "G"],
  ["L", "M"],
  ["M", "S"],
  ["N", "H"],
  ["O", "U"],
  ["Ó", "Ú"],
  ["P", "B"],
  ["Q", "X"],
  ["R", "N"],
  ["S", "C"],
  ["T", "D"],
  ["U", "I"],
  ["Ú", "Í"],
  ["V", "J"],
  ["W", "F"],
  ["X", "Q"],
  ["Y", "O"],
  ["Ý", "Ó"],
  ["Z", "W"],
]);
const alBhedToEnglishMap = new Map(
  Array.from(englishToAlBhedMap).map(([k, v]) => [v, k])
);
const pronunciationMap = new Map([
  ["A", "AH"],
  ["Á", "AH"],
  ["B", "BAE"],
  ["C", "KU"],
  ["D", "DE"],
  ["E", "EAY"],
  ["É", "EAY"],
  ["F", "FE"],
  ["G", "GE"],
  ["H", "HA"],
  ["I", "EE"],
  ["Í", "EE"],
  ["J", "JAE"],
  ["K", "KUK"],
  ["L", "LU"],
  ["M", "M"],
  ["N", "N"],
  ["O", "OH"],
  ["Ó", "OH"],
  ["P", "PE"],
  ["Q", "Q"],
  ["R", "RA"],
  ["S", "SEE"],
  ["T", "TE"],
  ["U", "OO"],
  ["Ú", "OO"],
  ["V", "FU"],
  ["W", "W"],
  ["X", "X"],
  ["Y", "AE"],
  ["Ý", "AE"],
  ["Z", "Z"],
]);

function translate(original, translationMap) {
  let translated = "";
  let escape = false;

  for (const char of original) {
    if (escape || char === "[") {
      translated += char;
      escape = char !== "]";
      continue;
    }

    if (!validateChar(char, translationMap)) {
      translated += char;
      continue;
    }

    translated += translateChar(char, translationMap);
  }

  return translated;
}

function validateChar(char, translationMap) {
  const upperCaseChar = char.toUpperCase();
  return translationMap.has(upperCaseChar);
}

function translateChar(char, translationMap) {
  const upperCaseChar = char.toUpperCase();
  const translatedChar = translationMap.get(upperCaseChar);

  return char === upperCaseChar
    ? translatedChar.toUpperCase()
    : translatedChar.toLowerCase();
}

export function pronounce(value) {
  return translate(value, pronunciationMap).toLowerCase();
}

export function toAlBhed(value) {
  return translate(value, englishToAlBhedMap);
}

export function fromAlBhed(value) {
  return translate(value, alBhedToEnglishMap);
}
