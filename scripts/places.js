

const temperature = 5; 
const windSpeed = 25;  

function calculateWindChill(temp, speed) {
  return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

const windChillSpan = document.querySelector(".value:last-child"); 

if (temperature <= 10 && windSpeed > 4.8) {
  const chill = calculateWindChill(temperature, windSpeed);
  windChillSpan.textContent = `${chill.toFixed(1)} °C`;
} else {
  windChillSpan.textContent = "N/A";
}
