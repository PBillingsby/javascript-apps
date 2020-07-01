fetch('https://covidtracking.com/api/v1/states/current.json')
.then(resp => resp.json())
.then(object => getResults(object)) 

function getResults(obj) {
  const results = document.getElementById('result')
  for (const stateObj in obj) {
    const stateObject = obj[stateObj].state;
    let div = document.createElement('div')
    let option = document.createElement('option')
    option.innerText = stateObject
    document.querySelector('select').append(option)
    div.style.display = "none"
    div.classList.add('mx-auto')
    div.id = stateObject
    results.append(div)
  }
}

function findLongState(object) {
  let states = {
    "AL": "Alabama",
    "AK": "Alaska",
    "AS": "American Samoa",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "DC": "District Of Columbia",
    "FM": "Federated States Of Micronesia",
    "FL": "Florida",
    "GA": "Georgia",
    "GU": "Guam",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MH": "Marshall Islands",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "MP": "Northern Mariana Islands",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PW": "Palau",
    "PA": "Pennsylvania",
    "PR": "Puerto Rico",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    "SD": "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VI": "Virgin Islands",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
  }
  document.querySelector('header').innerHTML = `<h1 class="text-center">${states[object]}</h1>`
}

function getStateData() {
  let selectedState = event.path[0][event.target["selectedIndex"]].innerText.toLowerCase();
  fetch(`https://covidtracking.com/api/v1/states/${selectedState}/current.json`)
  .then(response => response.json())
  .then(stateReturn => {
    let newDate = stateReturn.date.toString()
    let formattedDate = newDate.slice(4, -2) + "/" + newDate.slice(6) + "/" + newDate.slice(0, 4)
    let virusInfo = {
      date: formattedDate,
      deaths: stateReturn.death,
      positive: stateReturn.positive
    }
    for (const element in virusInfo) {
      document.getElementById(selectedState.toUpperCase()).innerHTML += `<h4>${element}: ${virusInfo[element]}</h4>`
    }
  })
}

function selectData() {
  const query = document.querySelectorAll('option')[event.target.selectedIndex].innerText
  const docStyle = document.getElementById(query).style.display
  
  if (docStyle === 'block') {
    document.getElementById(query).style.display = "none"
  }
  else {
    document.getElementById(query).style.display = "block"
    findLongState(query)
  }
}