function jobSearch() {
  event.preventDefault();
  if (document.getElementById('result').childElementCount > 0) {
    document.getElementById('result').innerHTML = "";
  }
  const inputDescription = document.getElementById('job-description').value.toLowerCase()
  const inputLocation = document.getElementById('job-location').value
  const fetchUrl = `https://jobs.github.com/positions.json?description=${inputDescription}&location=${inputLocation}`
  fetch(fetchUrl, {
    method: 'get',
    header: {
      'Access-Control-Allow-Origin':'*'}})
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
  if (!job.company_logo) {
    job.company_logo = "https://smallimg.pngkey.com/png/small/275-2751864_link-chain-url-uri-anchor-svg-png-icon.png";
  }
  let card = document.createElement('div');
  card.classList.add('card', 'job-card');
  card.innerHTML = `<a href="${job.company_url}" target="_blank"><img src="${job.company_logo}" class="mx-auto logo" alt="company logo"></a><h5 class="card-title">Title: ${job.title}</h5><p>Company: ${job.company}</p>
  <p>Location: ${job.location}</p><a href="${job.url}" target="_blank">Job Link</a><div id="job-description">${job.description}</div><input type="submit" value="Description" class="mx-auto">`;
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