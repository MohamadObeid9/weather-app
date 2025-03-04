import { getCity } from "./getCity";
import { getData } from "./getData";
import { unit } from "./unit";

export const todayWeather = async () => {
  const mainUnit = unit();
  const city = getCity();
  const response = await getData(city);
  const temp = document.querySelector("#todayTemp") as HTMLElement;
  const rain = document.querySelector("#rainProp") as HTMLElement;
  const wind = document.querySelector("#wind") as HTMLElement;
  const airHumidity = document.querySelector("#airHumidity") as HTMLElement;
  const UVindex = document.querySelector("#UVindex") as HTMLElement;
  try {
    if (!response) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    const newTemp = data.currentConditions.temp;
    if (mainUnit === "F") {
      temp.textContent = newTemp + "°F";
    }
    if (mainUnit === "C") {
      const newFromula = (newTemp - 32) * (5 / 9);
      temp.textContent = newFromula.toFixed(1) + "°C";
    }
    rain.textContent = data.currentConditions.precipprob + " %";
    const newwind = data.currentConditions.windspeed;
    if (mainUnit === "F") {
      wind.textContent = newwind + " mph";
    }
    if (mainUnit === "C") {
      const newFromula = newwind * 1.60934;
      wind.textContent = newFromula.toFixed(1) + " kmh";
    }
    airHumidity.textContent = data.currentConditions.humidity + " %";
    UVindex.textContent = data.currentConditions.uvindex;
  } catch (error) {
    console.error(error);
  }
};
