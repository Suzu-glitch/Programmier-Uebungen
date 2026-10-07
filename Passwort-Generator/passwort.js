const LOWERCASE_LETTERS = "abcdefghijklmnopqrstuvwxyz";
const UPPERCASE_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const DIGITS = "0123456789";
const SYMBOLS = "!@#$%&*?+-_";

function getRandomChar(characters) {
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
}

function generatePassword(length) {
  const allCharacters =
    LOWERCASE_LETTERS + UPPERCASE_LETTERS + DIGITS + SYMBOLS;
  let password = "";

  for (let i = 0; i < length; i++) {
    password = password + getRandomChar(allCharacters);
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

const testPassword = generatePassword(12);
console.log(testPassword, evaluateStrength(testPassword));
