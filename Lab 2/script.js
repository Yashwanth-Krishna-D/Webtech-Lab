// Enhanced weather app script
// Replace API_KEY with your OpenWeatherMap API key
const API_KEY = "YOUR_API_KEY_HERE";

const elements = {
  cityInput: document.getElementById('cityInput'),
  searchBtn: document.getElementById('searchBtn'),
  cardArea: document.getElementById('cardArea'),
  message: document.getElementById('message'),
  unitC: document.getElementById('unitC'),
  unitF: document.getElementById('unitF')
};

let unit = localStorage.getItem('weather_unit') || 'metric';
setUnitButtons();

elements.searchBtn.addEventListener('click', onSearch);
elements.cityInput.addEventListener('keyup', (e)=>{ if(e.key==='Enter') onSearch(); });
elements.unitC.addEventListener('click', ()=>setUnit('metric'));
elements.unitF.addEventListener('click', ()=>setUnit('imperial'));

// Load last searched city
const lastCity = localStorage.getItem('last_city');
if(lastCity){ elements.cityInput.value = lastCity; fetchAndRender(lastCity); }

function setUnit(u){
  unit = u;
  localStorage.setItem('weather_unit', unit);
  setUnitButtons();
  // If card visible, refetch for same city
  const city = elements.cityInput.value.trim();
  if(city) fetchAndRender(city);
}

function setUnitButtons(){
  if(unit === 'metric'){
    elements.unitC.classList.add('active');
    elements.unitF.classList.remove('active');
    elements.unitC.setAttribute('aria-pressed','true');
    elements.unitF.setAttribute('aria-pressed','false');
  } else {
    elements.unitF.classList.add('active');
    elements.unitC.classList.remove('active');
    elements.unitF.setAttribute('aria-pressed','true');
    elements.unitC.setAttribute('aria-pressed','false');
  }
}

function onSearch(){
  const city = elements.cityInput.value.trim();
  if(!city){ showMessage('Please enter a city name.', 'error'); return; }
  fetchAndRender(city);
}

function showMessage(text, type){
  elements.message.textContent = text;
  if(type==='error') elements.message.style.borderLeft = '4px solid #ff6b6b';
  else elements.message.style.borderLeft = 'none';
}

function showLoading(){
  elements.cardArea.innerHTML = '<div class="spinner" role="status" aria-label="Loading"></div>';
  showMessage('Fetching weather...');
}

async function fetchAndRender(city){
  showLoading();
  try{
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=${unit}`);
    if(!res.ok){
      if(res.status===404) showMessage('City not found. Check spelling and try again.', 'error');
      else showMessage('Error fetching data. ('+res.status+')','error');
      elements.cardArea.innerHTML = '';
      return;
    }
    const data = await res.json();
    localStorage.setItem('last_city', data.name);
    renderCard(data);
    showMessage('Showing weather for '+data.name+', '+data.sys.country);
  } catch(err){
    console.error(err);
    showMessage('Network error. Check your connection and try again.','error');
    elements.cardArea.innerHTML = '';
  }
}

function renderCard(data){
  const tempUnit = unit === 'metric' ? '°C' : '°F';
  const windUnit = unit === 'metric' ? 'm/s' : 'mph';
  const iconUrl = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  const localTime = getLocalTime(data.dt, data.timezone);

  elements.cardArea.innerHTML = `
    <article class="card" aria-live="polite">
      <div class="city">${data.name}, ${data.sys.country}</div>
      <div class="desc">${localTime} · ${data.weather[0].description}</div>
      <img src="${iconUrl}" alt="${data.weather[0].description} icon" width="100" height="100"/>
      <div class="temp">${Math.round(data.main.temp)}${tempUnit}</div>
      <div class="stats">
        <div class="stat"><small>Feels like</small><strong>${Math.round(data.main.feels_like)}${tempUnit}</strong></div>
        <div class="stat"><small>Humidity</small><strong>${data.main.humidity}%</strong></div>
        <div class="stat"><small>Wind</small><strong>${data.wind.speed} ${windUnit}</strong></div>
      </div>
    </article>
  `;
}

function getLocalTime(dtUnix, tzOffset){
  // dtUnix is seconds since epoch UTC. tzOffset is seconds.
  const utcMillis = (dtUnix + tzOffset) * 1000;
  const d = new Date(utcMillis);
  // Format: Day, HH:MM (24-hour)
  const opts = { weekday: 'short', hour: '2-digit', minute: '2-digit', hour12: false };
  return d.toLocaleString('en-GB', opts);
}
