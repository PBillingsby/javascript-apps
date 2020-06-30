let attemptCount = 0;
let gameCount = 0;
let flipTricks = ["Ollie", "Kickflip", "Heelflip", "Shuv-It", "Inward Heelflip", "Hardflip", "One Footer", "No-Comply"];
let spins = ["", "180", "360"];
let stance = ["Frontside", "Backside", "Nollie", "Fakie"];
let difficulty = 0
function randomFunc(arr) {
  return arr[Math.floor(Math.random()*arr.length)]
} 

function findTricks(value) {
  event.preventDefault();
  let trickDiv = document.getElementById('trick-div');
  switch(value) {
    case 1:
      trickDiv.innerHTML = `<h4>${randomFunc(flipTricks)}!</h4>`;
      break;
    case 2:
      trickDiv.innerHTML = `<h4>${randomFunc(spins)} ${randomFunc(flipTricks)}!</h4>`;
      break;
    case 3:
      trickDiv.innerHTML = `<h4>${randomFunc(stance)} ${randomFunc(spins)} ${randomFunc(flipTricks)}!</h4>`;
      break;
    }
  let youtubeString = trickDiv.innerText.replace('!', "").split(" ").join("+");
  trickDiv.innerHTML += `<label>Landed? </label><select onchange="landedTrick()" id="landed"><option selected="true" disabled>-</option><option>Yes</opton><option>No</option></select><p>Find trick tip <a href="https://www.youtube.com/results?search_query=${youtubeString}+trick+tip+skateboard" target="_blank" class="skateboard">here</a></p>`
}

function landedTrick() {
  let skate = ["S", "K", "A", "T", "E"];
  let select = document.getElementById('landed')
  const result = document.getElementById('result')
  if (select.value === "No") {
    document.getElementById('letters').innerHTML += `<h2 class="d-inline skate-letter">${skate[gameCount]}</h2>`
    select["selectedIndex"] = 0;
    gameCount++;
    findTricks(difficulty)
  }
  else {
    attemptCount++

    document.getElementById('landed-tricks').innerText = attemptCount
    findTricks(difficulty)
  }
  if (gameCount === 5) {
    result.style.display = "block";
    document.getElementById('trick-form').style.display = "none";
    result.innerHTML += `<h2>You Lost!</h2><input type="submit" value="Play Again" onclick="refresh()">`;
  }
  else if (attemptCount === 10) {
    result.style.display = "block";
    document.getElementById('trick-form').style.display = "none";
    result.innerHTML += `<h2>You Win!</h2><input type="submit" value="Play Again" onclick="refresh()">`;

  }

}

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('landed-tricks').innerText = attemptCount
  document.getElementById('form-show').style.display = "none";
})
function showForm() {
  event.preventDefault();
  difficulty = document.getElementById('select-box').selectedIndex;
  findTricks(difficulty);
  document.getElementById('play-game').style.display = "none";
  document.getElementById('form-show').style.display = "block";
}

function refresh() {
  location.reload()
}