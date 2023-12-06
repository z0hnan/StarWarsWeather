function APICall(){
  fetch("http://api.weatherapi.com/v1/current.json?key=27c58c1cd520412b915144718230402&q=Randers&aqi=no")
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(data => {
    const TempText = document.getElementById("temp")
    const Planet = document.getElementById("planet")
    const bodyElement = document.querySelector("body");
    
    TempText.textContent = data.current.temp_c + "°C"
    
    if(data.current.temp_c <= 2){
      Planet.textContent = "Hoth"
      bodyElement.style.backgroundImage = "url('hoth.webp')";
    }
    else if (data.current.temp_c > 2 && data.current.temp_c < 15){
      Planet.textContent = "Kashyyyk",
      bodyElement.style.backgroundImage = "url('kashyyyk.jpg')";
    }
    else if (data.current.temp_c >= 15){
      Planet.textContent = "Tatooine"
      bodyElement.style.backgroundImage = "url('tatooine.jpg')";
    }

  })
  .catch(error => {
    console.error("There was a problem with the fetch operation:", error);
  });
}

const interval = 60 * 60 * 1000;
setInterval(APICall, interval);
APICall();
//window.onload = APICall;
