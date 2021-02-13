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
const pronunciationMap = new Map([
  ["A", "AH"],
  ["B", "BAE"],
  ["C", "KU"],
  ["D", "DE"],
  ["E", "EAY"],
  ["F", "FE"],
  ["G", "GE"],
  ["H", "HA"],
  ["I", "EE"],
  ["J", "JAE"],
  ["K", "KUK"],
  ["L", "LU"],
  ["M", "M"],
  ["N", "N"],
  ["O", "OH"],
  ["P", "PE"],
  ["Q", "Q"],
  ["R", "RA"],
  ["S", "SEE"],
  ["T", "TE"],
  ["U", "OO"],
  ["V", "FU"],
  ["W", "W"],
  ["X", "X"],
  ["Y", "AE"],
  ["Z", "Z"],
]);

function translate(value, translationMap) {
  let translatedValue = "";
  let literalEscape = false;

  for (const char of value) {
    if (!literalEscape && char === "[") {
      literalEscape = true;
      translatedValue += char;
      continue;
    }
    if (literalEscape && char === "]") {
      literalEscape = false;
      translatedValue += char;
      continue;
    }

    translatedValue += literalEscape
      ? char
      : translateChar(char, translationMap);
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

export function pronounce(value) {
  return translate(value, pronunciationMap).toLowerCase();
}

export function toAlBhed(value) {
  return translate(value, englishToAlBhedMap);
}

export function fromAlBhed(value) {
  return translate(value, alBhedToEnglishMap);
}
