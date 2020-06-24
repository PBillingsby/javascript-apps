function findName() {
  event.preventDefault()
  let input = document.getElementById('name').value
  fetch('https://api.nationalize.io?name=' + input)
  .then(resp => resp.json())
  .then(object => createCard(object))
}

function createCard(obj) {
  let countries = obj.country;
  for (const countryElement in countries) {
    let div = document.createElement('div');
    div.innerHTML = `<h3>Country: ${countries[countryElement].country_id}</h3><p>Probability: ${countries[countryElement].probability}%`;
    console.log(div)
    document.getElementById('result').append(div);
  }
}