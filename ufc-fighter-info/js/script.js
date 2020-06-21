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
    let fighterStats = fighterObj.player[0];
    let fighter = {
     name: fighterStats.strPlayer,
     gender: fighterStats.strGender,
     height: fighterStats.strHeight,
     weight: fighterStats.strWeight,
     birthPlace: fighterStats.strBirthLocation,
     nationality: fighterStats.strNationality

    }
  console.log(fighter)
  }
  
}