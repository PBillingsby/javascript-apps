fetch('https://covidtracking.com/api/v1/states/current.json')
.then(resp => resp.json())
.then(object => getResults(object)) 

function getResults(obj) {
  const results = document.getElementById('result');
  for (const stateObj in obj) {
    const stateObject = obj[stateObj].state;
    const div = document.createElement('div')
    let option = document.createElement('option')
    option.innerText = stateObject
    document.querySelector('select').append(option)
    div.style.display = "none"
    div.id = stateObject
    results.append(div)
  }
}

function selectData() {
  const query = document.querySelectorAll('option')[event.target.selectedIndex].innerText
  const docStyle = document.getElementById(query).style.display
  if (docStyle === 'block') {
    document.getElementById(query).style.display = "none"
  }
  else {
    // document.getElementById('result').innerHTML = ""
    document.getElementById(query).style.display = "block"
  }
}