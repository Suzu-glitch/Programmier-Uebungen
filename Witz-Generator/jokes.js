const jokes = [
  "Warum können Geister nicht lügen? Man kann durch sie hindurchsehen.",
  "Ich wollte einen Witz über Pizza machen... aber der ist zu cheesy.",
  "Warum trinken Programmierer Tee? Weil Java schon vergeben ist.",
  "Was macht ein Pirat am Computer? Er drückt die Enter-Taste.",
  "Treffen sich zwei Wände. Sagt die eine: Wir sehen uns an der Ecke!",
  "Warum hat der Mathematiker Angst vor negativen Zahlen? Er kann einfach nicht ohne sie leben.",
  "Ich wollte Spiderman anrufen. Er hatte kein Netz.",
  "Warum lügen Skelette nie?  Weil sie nichts zu verbergen haben.",
  "Warum können Geister so schlecht Geheimnisse behalten? Weil man sie sofort durchschaut.",
  "Warum können Tomaten nicht schummeln? Weil sie sofort rot werden.",
  "Welches Gebäck weiß auf alles eine Antwort?  Der Googlehupf.",
  "Was macht ein Clown im Büro? Faxen.",
];

const showJokeBtnEl = document.getElementById("showJokeBtn");
const compareBtnEl = document.getElementById("compareBtn");
const jokeDisplayEl = document.getElementById("jokeDisplay");
const duelDisplayEl = document.getElementById("duelDisplay");

function getRandomIndex(count) {
  let index = Math.floor(Math.random() * count);
  return index;
}

function getJoke(jokeList) {
  let index = getRandomIndex(jokeList.length);
  let selectedJoke = jokeList[index];
  return selectedJoke;
}

function rateJoke(jokeText) {
  let jokeLength = jokeText.length;

  if (jokeLength < 40) {
    return "Kurz und knackig!";
  } else if (jokeLength < 75) {
    return "Perfekte Länge!";
  } else {
    return "Puh, das war ein langer Witz!";
  }
}

function showJoke(jokeList) {
  let joke = getJoke(jokeList);
  let rating = rateJoke(joke);

  duelDisplayEl.style.display = "none";
  jokeDisplayEl.style.display = "block";
  jokeDisplayEl.innerHTML =
    "<p>" + joke + "</p>" + "<p class='rating'>" + "</p>";

  return joke;
}

function compareJokes(jokeList) {
  let joke1 = getJoke(jokeList);
  let joke2 = getJoke(jokeList);

  let rating1 = rateJoke(joke1);
  let rating2 = rateJoke(joke2);

  let winner;
  if (joke1.length < joke2.length) {
    winner = joke1;
  } else {
    winner = joke2;
  }

  jokeDisplayEl.style.display = "none";
  duelDisplayEl.style.display = "block";
  duelDisplayEl.innerHTML =
    "<p><strong>Witz 1:</strong> " +
    joke1 +
    "</p>" +
    "<p class='rating'>" +
    rating1 +
    "</p>" +
    "<p><strong>Witz 2:</strong> " +
    joke2 +
    "</p>" +
    "<p class='rating'>" +
    rating2 +
    "</p>" +
    "<p class='winner'>Gewinner: " +
    winner +
    "</p>";

  return winner;
}

showJokeBtnEl.addEventListener("click", function () {
  showJoke(jokes);
});

compareBtnEl.addEventListener("click", function () {
  compareJokes(jokes);
});
