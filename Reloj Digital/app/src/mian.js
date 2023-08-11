function updateTime() {
    const timeElement = document.getElementById('time');
    const hoursElement = timeElement.querySelector('.hours');
    const minutesElement = timeElement.querySelector('.minutes');
    const secondsElement = timeElement.querySelector('.seconds');
  
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();
  
    hoursElement.textContent = String(hours).padStart(2, '0');
    minutesElement.textContent = String(minutes).padStart(2, '0');
    secondsElement.textContent = String(seconds).padStart(2, '0');
  }
  
  setInterval(updateTime, 1000);
  updateTime();
  