let flipTricks = ["Kickflip", "Heelflip", "Shuv-It", "One Footer"]

function randomFunc(arr) {
  return arr[Math.floor(Math.random()*arr.length)]
} 

function findTricks() {
  let selection = event.target.value;
  let trickDiv = document.getElementById('trick-div')
  switch(selection) {
    case "1":
      trickDiv.innerHTML += `<p>Do a ${randomFunc(flipTricks)}!</p>`
  }
}