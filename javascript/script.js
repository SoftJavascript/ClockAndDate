const hourEl = document.querySelector('.hour')
const minuteEl = document.querySelector('.minute')
const secondEl = document.querySelector('.second')
const timeEl = document.querySelector('.time')
const dateEl = document.querySelector('.date')
const toggleEl = document.querySelector('.toggle')

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

toggleEl.addEventListener('click', (e) => {
  const html = document.querySelector('html')
  if(html.classList.contains('dark')) {
    html.classList.remove('dark')
    e.target.innerHTML = 'Dark mode'
  } else {
    html.classList.add('dark')
    e.target.innerHTML = 'Light mode'
  }
})

function dataToNeedle(data, needle, MinutesOrhours) {
  if (data === 0) {
    needle.style.transform = `translate(-50%, -100%) rotate(360deg)`;
    needle.style.transition = `none`;
    needle.style.transform = `translate(-50%, -100%) rotate(0deg)`;
  } else if (data >= 1) {
    needle.style.transition = `all 0.3s ease`;
    needle.style.transform = `translate(-50%, -100%) rotate(${scale(data, 0, MinutesOrhours, 0, 360)}deg)`;
  }
}

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const day = time.getDay();
  const date = time.getDate();



  dataToNeedle(seconds, secondEl, 60);
  dataToNeedle(hoursForClock, hourEl, 12);
  dataToNeedle(minutes, minuteEl, 60);

  dateEl.innerHTML = `${days[day - 1]}, ${months[month]} <span class="circle">${date}</span>`
  timeEl.innerText = `${hours}:${minutes}`


}

function scale (number, inMin, inMax, outMin, outMax) {
  return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}

setTime()
setInterval(setTime,100)