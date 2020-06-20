function fighterSearch() {
  event.preventDefault()
  const userInput = document.querySelector('input').value.split(' ').join('%20')
  fetch('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=' + userInput)
  .then(resp => resp.json())
  .then(object => fetchFighterInfo(object))
}

function fetchFighterInfo(fighterObj) {
  if (fighterObj.player === null) {
    document.getElementById('result').innerHTML += `<h4>Fighter Not Found. Try Again</h4>`;
  }
  else {
    let fighterStats = fighterObj.player;
    let fighter = {
     name: fighterStats.strPlayer
    }
  console.log(fighter.name)
  }
  
}