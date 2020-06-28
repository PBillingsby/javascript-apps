let flipTricks = ["Kickflip", "Heelflip", "Shuv-It", "One Footer"];
let directions = ["180", "360"];
let stance = ["Frontside", "Backside", "Nollie", "Fakie"];
function randomFunc(arr) {
  return arr[Math.floor(Math.random()*arr.length)]
} 

function findTricks() {
  event.preventDefault();
  let selection = event.target.value;
  let trickDiv = document.getElementById('trick-div')
  switch(selection) {
    case "1":
      trickDiv.innerHTML = `<p>Do a ${randomFunc(flipTricks)}!</p>`;
      break;
    case "2":
      trickDiv.innerHTML = `<p>Do a ${randomFunc(directions)} ${randomFunc(flipTricks)}!`;
      break;
    case "3":
      trickDiv.innerHTML = `<p>Do a ${randomFunc(stance)} ${randomFunc(directions)} ${randomFunc(flipTricks)}!</p>`;
  }
  let youtubeString = trickDiv.innerText.slice(5).replace('!', "").split(" ").join("+");
  trickDiv.innerHTML += `Find trick tip <a href="https://www.youtube.com/results?search_query=${youtubeString}" target="_blank" class="skateboard">here</a>`
  event.target.value = ""
}