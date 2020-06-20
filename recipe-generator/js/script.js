function findRecipe() {
  document.getElementById('recipes').innerHTML = "";
  let searchQuery = document.querySelector('input').value;
  fetch('http://www.recipepuppy.com/api/?q=' + searchQuery)
  .then(resp => resp.json())
  .then(object => {
    showRecipe(object.results);
  })
}
function showRecipe(results) {
  for (const elem in results) {
    createCard(results[elem]);
  }
}

function createCard(obj) {
  const recipeDiv = document.getElementById('recipes');
  let newDiv = document.createElement('div');
  newDiv.classList.add('card', 'text-center');
  if (obj.thumbnail) {
    newDiv.innerHTML += `<img class="card-img-top thumbnail-image mx-auto" src="${obj.thumbnail}" alt="Card image cap">`
  }
  let rest = `<div class="card-body">
    <h5 class="card-title">${obj.title}</h5>
    <p class="card-text">${obj.ingredients}</p>
    <a href="${obj.href}" target="_blank" class="btn btn-primary">Full Recipe</a>`
  newDiv.innerHTML += rest;
  recipeDiv.append(newDiv);
}
