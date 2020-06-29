
let gameCount = 0;
let flipTricks = ["Ollie", "Kickflip", "Heelflip", "Shuv-It", "One Footer"];
let spins = ["180", "360"];
let stance = ["Frontside", "Backside", "Nollie", "Fakie"];
function randomFunc(arr) {
  return arr[Math.floor(Math.random()*arr.length)]
} 

function findTricks(value) {
  event.preventDefault();
  let trickDiv = document.getElementById('trick-div');
  switch(value) {
    case 1:
      trickDiv.innerHTML = `<p>Do a ${randomFunc(flipTricks)}!</p>`;
      break;
    case 2:
      trickDiv.innerHTML = `<p>Do a ${randomFunc(spins)} ${randomFunc(flipTricks)}!`;
      break;
    case 3:
      trickDiv.innerHTML = `<p>Do a ${randomFunc(stance)} ${randomFunc(spins)} ${randomFunc(flipTricks)}!</p>`;
      break;
    }
  let youtubeString = trickDiv.innerText.slice(5).replace('!', "").split(" ").join("+");
  trickDiv.innerHTML += `<select onchange="landedTrick()" id="landed"><option default disabled>Landed it?</option><option>Yes</opton><option>No</option></select><p>Find trick tip <a href="https://www.youtube.com/results?search_query=${youtubeString}+trick+tip+skateboard" target="_blank" class="skateboard">here</a></p>`
}

function landedTrick() {
  let skate = ["S", "K", "A", "T", "E"];
  let select = document.getElementById('landed')
  if (select.value === "No") {
    document.getElementById('letters').innerHTML += `<h1 class="d-inline skate-letter">${skate[gameCount]}</h1>`
    select["selectedIndex"] = 0;
    gameCount++;
  }
  else {
  }
  if (gameCount === 5) {
    document.getElementById('loss').style.display = "block";
    setTimeout(location.reload(), 15000)
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('form-show').style.display = "none";
})
function showForm() {
  event.preventDefault()
  findTricks(document.getElementById('select-box').selectedIndex);
  document.getElementById('play-game').style.display = "none";
  document.getElementById('form-show').style.display = "block";
}