const form = document.querySelector("#form");
const newvalue = document.querySelector("#newvalue");
const newcategory = document.querySelector("#category");
const select = document.querySelector("#category-select");
const answer = document.querySelector("#answer");

let livesLeft = 10;
let random;
// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  random = getRandom(`Şehir`);
  newMaker();
});

document.querySelector("#category-select").onchange = newMaker;

document.querySelector(".grid-item").onclick = control;

// Functions

function newMaker() {
  answer.innerHTML = "";

  random = getRandom(`${select.options[select.selectedIndex].textContent}`);
  console.log(random);
  for (i = 0; i < random.length; i++) {
    answer.innerHTML += `<span id="${i}">_</span>`;
  }
}

let index;
function control(e) {
  index = random.indexOf(e.target.dataset.key);
  if (random.indexOf(e.target.dataset.key) > -1) {
    for (i = 0; i < random.length; i++) {
      if (random[i] == e.target.dataset.key) {
        document.getElementById(`${i}`).textContent = random[i];
        if (answer.textContent == random) {
          win();
        }
      }
    }
    console.log(index);
  } else {
    livesLeft--;
    document.querySelector(
      "#lives"
    ).textContent = `You have ${livesLeft} lives left. `;
    if (livesLeft == 0) {
      lose();
    }
  }
}
function win() {
  document.querySelector("#body").innerHTML =
    "<h1 class='live'>You Saved Him</h1>";
  document.querySelector("#body").style.backgroundColor = "Yellow";
}
function lose() {
  document.querySelector("#body").innerHTML =
    "<h1 class='dead'>You Made Him Die</h1>";
  document.querySelector("#body").style.backgroundColor = "black";
}

function getFromLocalStorage(key) {
  let news;
  if (localStorage.getItem(key) == null) {
    news = [];
  } else {
    news = JSON.parse(localStorage.getItem(key));
  }
  return news;
}

function addToLocalStorage(key, value) {
  let news = getFromLocalStorage(key);

  news.push(value);
  localStorage.setItem(key, JSON.stringify(news));
}
function getRandom(key) {
  let news = getFromLocalStorage(key);
  return news[(Math.random() * (news.length - 1)).toFixed(0)]
    .replace(" ", "")
    .toLowerCase();
}
