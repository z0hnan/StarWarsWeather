function APICall(){
  fetch("http://api.weatherapi.com/v1/current.json?key=27c58c1cd520412b915144718230402&q=Randers&aqi=no")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    console.log(data.current.temp_c, "°C");
    const TempText = document.getElementById("temp")
    TempText.textContent = data.current.temp_c + "°C"
    if(data.current.temp_c <= 2){
      const Planet = document.getElementById("planet")
      Planet.textContent = "Hoth"
    }
    else if (data.current.temp_c > 2 && data.current.temp_c < 15){
      const Planet = document.getElementById("planet")
      Planet.textContent = "Kashyyyk"
    }
    else if (data.current.temp_c >= 15){
      const Planet = document.getElementById("planet")
      Planet.textContent = "Tatooine"
    }

  })
  .catch(error => {
    console.error("There was a problem with the fetch operation:", error);
  });
}

const interval = 60 * 60 * 1000;
setInterval(APICall, interval);

window.onload = APICall;