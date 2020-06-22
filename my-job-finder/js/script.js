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
  <p>${job.location}</p><div>${job.description}</div><input type="button" value="View Description" class="description-button">`;
  card.querySelector('div').classList.add('description-style');
  card.querySelector('input').addEventListener('click', () => {
    // card.querySelector('div').classList = "";
    descDisplay(card.querySelector('div'))
  })
  document.getElementById('result').append(card);
}

function descDisplay(cardDiv) {
  if (cardDiv.style.display === "") {
    cardDiv.style.display = "block";
    event.target.value = "minimize";
  }
  else {
    cardDiv.style.display = "";
    event.target.value = "View Description";
    cardDiv.scrollTop = 0
  }
}