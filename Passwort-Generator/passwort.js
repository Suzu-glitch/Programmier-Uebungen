const LOWERCASE_LETTERS = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const DIGITS = "0123456789";
const SYMBOLS = "!@#$%&*?+-_";

function getRandomChar(characters) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}

function buildCharPool(useLower, useUpper, useDigits, useSymbols) {
  let pool = "";

  if (useLower) {
    pool = pool + LOWERCASE_LETTERS;
  }
  if (useUpper) {
    pool = pool + UPPERCASE_LETTERS;
  }
  if (useDigits) {
    pool = pool + DIGITS;
  }
  if (useSymbols) {
    pool = pool + SYMBOLS;
  }

  return pool;
}

function generatePassword(length, charPool) {
  let password = "";

  for (let i = 0; i < length; i++) {
    password = password + getRandomChar(charPool);
  }

  return password;
}

function evaluateStrength(password) {
  if (password.length < 8) {
    return "schwach";
  }
  if (password.length < 12) {
    return "mittel";
  }
  return "stark";
}

const testPassword = generatePassword(
  12,
  buildCharPool(true, true, true, true),
);
console.log(testPassword, evaluateStrength(testPassword));

console.log(buildCharPool(true, false, true, false));
