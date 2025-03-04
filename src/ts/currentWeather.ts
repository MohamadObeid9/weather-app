import { getData } from "./getData";
import { getCity } from "./getCity";
import { unit } from "./unit";

export const currentWeather = async () => {
  const mainUnit = unit();
  const city = getCity();
  const response = await getData(city);
  const currentCity = document.querySelector("#currentCity") as HTMLElement;
  const currentDate = document.querySelector("#currentDate") as HTMLElement;
  const currentTemp = document.querySelector("#currentTemp") as HTMLElement;
  const currentCondition = document.querySelector(
    "#currentCondition"
  ) as HTMLElement;
  const currentDescription = document.querySelector(
    "#currentDescription"
  ) as HTMLElement;
  try {
    if (!response) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    currentCity.textContent = data.resolvedAddress;
    currentDate.textContent = data.currentConditions.datetime;
    const temp = data.currentConditions.temp;
    if (mainUnit === "F") {
      currentTemp.textContent = temp + "°F";
    }
    if (mainUnit === "C") {
      const newFromula = (temp - 32) * (5 / 9);
      currentTemp.textContent = newFromula.toFixed(1) + "°C";
    }
    currentCondition.textContent = data.currentConditions.conditions;
    currentDescription.textContent = data.description;
  } catch (error) {
    console.error(error);
  }
};
