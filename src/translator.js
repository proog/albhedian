const vowels = ["A", "E", "I", "O", "U", "Y"];
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

function translate(original, translationMap, pronunciationMode = false) {
  let translated = "";
  let escape = false;
  let previousCharWasTranslated = false;

  for (const char of original) {
    if (escape || char === "[") {
      translated += char;
      escape = char !== "]";
      previousCharWasTranslated = false;
      continue;
    }

    if (!validateChar(char, translationMap)) {
      translated += char;
      previousCharWasTranslated = false;
      continue;
    }

    const translatedChar = translateChar(char, translationMap);

    if (
      pronunciationMode &&
      shouldAddHyphen(previousCharWasTranslated, translatedChar)
    ) {
      translated += "-";
    }

    translated += translatedChar;
    previousCharWasTranslated = true;
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

function shouldAddHyphen(previousCharWasTranslated, translatedChar) {
  if (!previousCharWasTranslated) {
    return false;
  }

  const startsWithConsonant = !isVowel(translatedChar.charAt(0));
  return startsWithConsonant && translatedChar.length > 1;
}

function isVowel(char) {
  return vowels.includes(char.toUpperCase());
}

export function pronounce(value) {
  return translate(value, pronunciationMap, true);
}

export function toAlBhed(value) {
  return translate(value, englishToAlBhedMap);
}

export function fromAlBhed(value) {
  return translate(value, alBhedToEnglishMap);
}
