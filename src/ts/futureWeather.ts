import { weatherIcon } from "./weatherIcon";
import { weatherData } from "./weatherData";

export const futureWeather = (data: weatherData) => {
  const unit_C = document.querySelector("#unit_C") as HTMLButtonElement;
  const unit_F = document.querySelector("#unit_F") as HTMLButtonElement;
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
    const updateTemperature = (unit: string, index: number) => {
      const minMaxTemp = document.querySelector(
        `#minMaxTemp${index}`
      ) as HTMLElement;
      if (unit === "F") {
        minMaxTemp.textContent =
          data.days[index].tempmax +
          "°F" +
          "/" +
          data.days[index].tempmin +
          "°F";
      } else {
        const newFromulaMin = (data.days[index].tempmin - 32) * (5 / 9);
        const newFromulaMax = (data.days[index].tempmax - 32) * (5 / 9);
        minMaxTemp.textContent =
          newFromulaMax.toFixed(1) +
          "°C" +
          "/" +
          newFromulaMin.toFixed(1) +
          "°C";
      }
    };
    outerContainer.innerHTML = "";
    for (let i = 0; i < 7; i++) {
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
      img.src = weatherIcon(data.days[i].conditions);
      innerContainer.appendChild(img);

      const condition = document.createElement("div");
      condition.classList.add("font-semibold", "mb-2", "text-sm");
      condition.textContent = data.days[i].conditions;
      innerContainer.appendChild(condition);

      const minMaxTemp = document.createElement("div");
      minMaxTemp.id = `minMaxTemp${i}`;
      minMaxTemp.classList.add("text-sm", "tracking-wide", "font-semibold");
      innerContainer.appendChild(minMaxTemp);
      updateTemperature("C", i);
    }

    unit_F.addEventListener("click", () => {
      for (let i = 0; i < 7; i++) {
        updateTemperature("F", i);
      }
    });
    unit_C.addEventListener("click", () => {
      for (let i = 0; i < 7; i++) {
        updateTemperature("C", i);
      }
    });
  } catch (error) {
    console.error(error);
  }
};
