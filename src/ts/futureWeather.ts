import { getCity } from "./getCity";
import { getData } from "./getData";
import src = require("./../img/sun.png");
import { unit } from "./unit";

export const futureWeather = async () => {
  const mainUnit = unit();
  const city = getCity();
  const response = await getData(city);
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const outerContainer = document.querySelector("#container") as HTMLElement;
  try {
    if (!response) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    for (let i = 0; i < 6; i++) {
      const innerContainer = document.createElement("div");
      innerContainer.classList.add(
        "flex",
        "flex-col",
        "items-center",
        "justify-between"
      );
      outerContainer.appendChild(innerContainer);

      const day = document.createElement("div");
      day.classList.add("font-semibold", "text-xl");
      day.textContent = weekDays[new Date(data.days[i].datetime).getDay()];
      innerContainer.appendChild(day);

      const img = document.createElement("img");
      img.src = String(src);
      innerContainer.appendChild(img);

      const condition = document.createElement("div");
      condition.classList.add("font-semibold", "mb-2", "text-sm");
      condition.textContent = data.days[i].conditions;
      innerContainer.appendChild(condition);

      const description = document.createElement("div");
      description.classList.add("text-sm", "tracking-wide", "font-semibold");
      if (mainUnit === "F") {
        description.textContent =
          data.days[i].tempmax + "/" + data.days[i].tempmin;
      }
      if (mainUnit === "C") {
        const newFromulaMin = (data.days[i].tempmin - 32) * (5 / 9);
        const newFromulaMax = ( data.days[i].tempmax - 32) * (5 / 9);
        description.textContent = newFromulaMax.toFixed(1)+"/"+newFromulaMin.toFixed(1);
      }

      innerContainer.appendChild(description);
    }
  } catch (error) {
    console.error(error);
  }
};
