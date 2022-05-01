const form = document.querySelector("#form");
const newvalue = document.querySelector("#newvalue");
const newcategory = document.querySelector("#category");
const select = document.querySelector("#category-select");
const answer = document.querySelector("#answer");

let random = getRandom(`${select.options[select.selectedIndex].textContent}`);
// Event listeners
document.querySelector("#category-select").onchange = () => {
  answer.innerHTML = "";
  

  for (i = 0; i < random.length; i++) {
    answer.innerHTML += `<span id="${i}">_</span>`;
  }
};

document.querySelector(".grid-item").onclick = control;

// Functions

function control(e) {
  console.log(e.target.dataset.key);
  if()
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
