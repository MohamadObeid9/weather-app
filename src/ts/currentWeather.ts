import { weatherIcon } from "./weatherIcon";
import { currentTime } from "./currentTime";
import { weatherData } from "./weatherData";

export const currentWeather = (data: weatherData) => {
  const unit_C = document.querySelector("#unit_C") as HTMLButtonElement;
  const unit_F = document.querySelector("#unit_F") as HTMLButtonElement;
  const currentCity = document.querySelector("#currentCity") as HTMLElement;
  const currentDate = document.querySelector("#currentDate") as HTMLElement;
  const currentTemp = document.querySelector("#currentTemp") as HTMLElement;
  const currentWeather = document.querySelector(
    "#currentWeather"
  ) as HTMLImageElement;
  const currentCondition = document.querySelector(
    "#currentCondition"
  ) as HTMLElement;
  const currentDescription = document.querySelector(
    "#currentDescription"
  ) as HTMLElement;

  try {
    currentCity.textContent = data.address;
    currentDate.textContent = currentTime(data.timezone);
    currentWeather.src = weatherIcon(data.currentConditions.conditions);
    const temp = data.currentConditions.temp;
    updateTemperature(temp, "C", currentTemp);

    unit_F.addEventListener("click", () => {
      updateTemperature(temp, "F", currentTemp);
    });
    unit_C.addEventListener("click", () => {
      updateTemperature(temp, "C", currentTemp);
    });

    currentCondition.textContent = data.currentConditions.conditions;
    currentDescription.textContent = data.description;
  } catch (error) {
    console.error(error);
  }
};

const convertToFahrenheit = (temp: number): number => (temp - 32) * (5 / 9);

const updateTemperature = (
  temp: number,
  unit: string,
  element: HTMLElement
) => {
  if (unit === "F") {
    element.textContent = temp + "°F";
  } else {
    element.textContent = convertToFahrenheit(temp).toFixed(1) + "°C";
  }
};
