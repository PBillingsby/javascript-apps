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
  document.getElementById('no-result').innerHTML = "";
  if (!jobObject.length) {
    document.getElementById('no-result').innerHTML += `<h4 class="text-center">No jobs found. Try again.</h4>`;
    document.getElementById('result').innerHTML = "";
  }
  for (const element in jobObject) {
    let currentJob = jobObject[element];
    createJobCard(currentJob);
  }
}

function createJobCard(job) { // Creates div card with job information inside
  let card = document.createElement('div');
  card.classList.add('card', 'job-card');
  card.innerHTML = `<h5 class="card-title">Title: ${job.title}</h5><p>Company: ${job.company}</p>
  <p>Location: ${job.location}</p><div id="job-description">${job.description}</div><input type="submit" value="View Description">`;
  card.querySelector('div').classList.add('description-style');
  card.querySelector('input').addEventListener('click', () => {
    descDisplay(card.querySelector('div'));
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
    cardDiv.scrollTop = 0;
  }
}