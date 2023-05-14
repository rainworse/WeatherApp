const fetchButton = document.getElementById('fetch');

function handleFetch() {
  const searchQuery = getQuery();
  if (searchQuery == '') {
    getSearchBox().setCustomValidity('Please enter a valid search query');
    getSearchBox().classList.add('invalid');
    return;
  }

  getSearchBox().classList.remove('invalid');
  fetchWeatherData(searchQuery)
    .then((result) => {
      displayData(result);
      setBackground(result.temperature);
    })
    .catch((result) => {
      console.error(result);
    });
}

function getQuery() {
  const searchBox = getSearchBox();
  return searchBox != null || searchBox != undefined ? searchBox.value : '';
}

function getSearchBox() {
  return document.getElementById('search-text');
}

async function fetchWeatherData(query) {
  try {
    let response = await fetch(
      'https://api.weatherapi.com/v1/current.json?key=876f33319a0e493f8c1171724231404&q=' +
        query,
      {
        mode: 'cors',
      }
    );
    if (response.status < 200 || response.status > 299) {
      return Promise.reject('Response status: ' + response.status);
    }
    let jsonResponse = await response.json();
    let data = parseResponse(jsonResponse);
    return data;
  } catch {
    return Promise.reject();
  }
}

function parseResponse(response) {
  let formatted = {};
  formatted['country'] = response.location.country;
  formatted['city'] = response.location.name;
  formatted['temperature'] = response.current.temp_c;
  formatted['feelslike'] = response.current.feelslike_c;
  formatted['condition'] = response.current.condition.icon;
  const localtime = response.location.localtime;
  formatted['localtime'] = localtime.slice(localtime.indexOf(' ') + 1);

  return formatted;
}

function displayData(data) {
  document.getElementById('location').textContent = data.city;
  document.getElementById('country').textContent = data.country;
  document.getElementById('actual').textContent = data.temperature + '°C';
  document.getElementById('feels-like').innerHTML =
    'feels like<br>' + data.feelslike + '°C';
  const conditionContainer = document.getElementById('condition');
  conditionContainer.innerHTML = '';
  conditionContainer.appendChild(createImage(data.condition));
  document.getElementById('localtime').textContent = data.localtime;
}

function createImage(source) {
  const image = document.createElement('img');
  image.src = source;
  image.classList.add('current-condition');
  return image;
}

function setBackground(temperature) {
  let background;
  const backgroundSubtract = 255 - temperature * 4;
  if (temperature > 0) {
    background =
      '#FF' + backgroundSubtract.toString(16) + backgroundSubtract.toString(16);
  } else if (temperature < 0) {
    background =
      '#' +
      backgroundSubtract.toString(16) +
      'FF' +
      backgroundSubtract.toString(16);
  } else {
    background = '#FFFFFF';
  }

  document.body.style.background = background;
  // document.getElementById('fetch').style.backgroundColor = background;
  getSearchBox().style.background = background;
}

fetchButton.addEventListener('click', handleFetch);
