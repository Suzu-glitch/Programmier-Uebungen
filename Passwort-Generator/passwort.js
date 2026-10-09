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
function ratePassword(password, poolSize) {
  const score = password.length * poolSize;

  if (score < 200) {
    return { label: "Schwach", score: score };
  } else if (score < 500) {
    return { label: "Mittel", score: score };
  } else {
    return { label: "Stark", score: score };
  }
}
function createPassword(length, useLower, useUpper, useDigits, useSymbols) {
  const pool = buildCharPool(useLower, useUpper, useDigits, useSymbols);

  if (pool.length === 0) {
    console.log("Fehler: Mindestens eine Zeichengruppe auswählen!");
    return null;
  }

  const password = generatePassword(length, pool);
  const rating = ratePassword(password, pool.length);

  console.log("=== Neues Passwort ===");
  console.log("Passwort: " + password);
  console.log("Länge: " + password.length);
  console.log("Pool: " + pool.length + " Zeichen");
  console.log("Score: " + rating.score);
  console.log("Stärke: " + rating.label);

  return { password: password, rating: rating, poolSize: pool.length };
}

function findStrongest(count) {
  let bestPassword = null;
  let bestScore = 0;

  for (let i = 0; i < count; i++) {
    const result = createPassword(12, true, true, true, true);
    if (result.rating.score > bestScore) {
      bestScore = result.rating.score;
      bestPassword = result.password;
    }
  }

  console.log("--- Bestes von " + count + " Passwörtern ---");
  console.log(bestPassword);
  return bestPassword;
}

createPassword(12, true, true, true, true);
createPassword(8, true, false, true, false);
createPassword(20, true, true, true, true);
createPassword(10, false, false, false, false);
findStrongest(5);
