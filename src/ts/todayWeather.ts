import { weatherData } from "./weatherData";

export const todayWeather = (data: weatherData) => {
  const unit_C = document.querySelector("#unit_C") as HTMLButtonElement;
  const unit_F = document.querySelector("#unit_F") as HTMLButtonElement;
  const temp = document.querySelector("#todayTemp") as HTMLElement;
  const rain = document.querySelector("#rainProp") as HTMLElement;
  const wind = document.querySelector("#wind") as HTMLElement;
  const airHumidity = document.querySelector("#airHumidity") as HTMLElement;
  const UVindex = document.querySelector("#UVindex") as HTMLElement;
  try {
    const newTemp = data.currentConditions.feelslike;
    // Default unit for temp
    const newFromulaTemp = (newTemp - 32) * (5 / 9);
    temp.textContent = newFromulaTemp.toFixed(1) + "°C";
    rain.textContent = data.currentConditions.precipprob + " %";
    const newwind = data.currentConditions.windspeed;
    // Default unit for wind
    const newFromulaWind = newwind * 1.60934;
    wind.textContent = newFromulaWind.toFixed(1) + " kmh";
    airHumidity.textContent = data.currentConditions.humidity + " %";
    UVindex.textContent = String(data.currentConditions.uvindex);

    unit_F.addEventListener("click", () => {
      temp.textContent = newTemp + "°F";
      wind.textContent = newwind + " mph";
    });
    unit_C.addEventListener("click", () => {
      temp.textContent = newFromulaTemp.toFixed(1) + "°C";
      wind.textContent = newFromulaWind.toFixed(1) + " kmh";
    });
  } catch (error) {
    console.error(error);
  }
};
