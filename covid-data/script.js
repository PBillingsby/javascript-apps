fetch('https://covidtracking.com/api/v1/states/current.json')
.then(resp => resp.json())
.then(object => getResults(object)) 

function getResults(obj) {

  let results = document.getElementById('result');
  for (const state in obj) {
    let div = document.createElement('div');
    let option = document.createElement('option')
    option.innerText = obj[state].state
    document.querySelector('select').append(option)
    div.innerHTML = `<h1>${obj[state].state}</h1>`;
    div.style.display = "none";
    div.id = obj[state].state;
    results.append(div);
  }
}


function selectData() {
  let query = document.querySelectorAll('option')[event.target.selectedIndex].innerText
  let docStyle = document.getElementById(query).style.display
  if (docStyle === 'block')
    docStyle = "none";
  else {
    docStyle = "block"
  }
}