function jobSearch() {
  event.preventDefault()
  const inputDescription = document.getElementById('job-description').value.toLowerCase()
  const inputLocation = document.getElementById('job-location').value
  const fetchUrl = `https://jobs.github.com/positions.json?description=${inputDescription}&location=${inputLocation}`
  fetch(fetchUrl)
  .then(resp => resp.json())
  .then(object => iterateJobs(object))
}

function iterateJobs(jobObject) {
  for (const element in jobObject) {
    let currentJob = jobObject[element];
    createJobCard(currentJob);
  }
}

function createJobCard(job) {
  let card = document.createElement('div');
  card.classList.add('card', 'job-card');
  card.innerHTML = `<h5 class="card-title">${job.title}</h5><p>${job.company}</p>
  <p>${job.location}</p><input type="button" value="View Description" class="description-button" onclick="descriptionLoad(${job.description})">`;
  document.getElementById('result').append(card);
}

function descriptionLoad(job) {
  debugger
}
