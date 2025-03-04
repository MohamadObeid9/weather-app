import { getData } from "./getData";
import loading = require("../svg/loading.gif");
import magnify = require("../svg/magnify.svg");
import { weatherData } from "./weatherData";
import { currentWeather } from "./currentWeather";
import { futureWeather } from "./futureWeather";
import { todayWeather } from "./todayWeather";

export const getResponse = (defaultCity: string) => {
  const input = document.querySelector("input") as HTMLInputElement;
  const submitBtn = document.querySelector("#submit") as HTMLButtonElement;
  const searchImg = document.querySelector("#search") as HTMLImageElement;

  const handleSubmit = async (e: Event) => {
    e.preventDefault();
    const city = input.value || defaultCity;
    searchImg.src = String(loading);
    try {
      const response = await getData(city);
      if (!response) {
        console.log("data undefined");
      } else {
        const data: weatherData = await response.json();
        currentWeather(data);
        futureWeather(data);
        todayWeather(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setTimeout(() => {
        searchImg.src = String(magnify);
        input.value = "";
      }, 500);
    }
  };

  submitBtn.removeEventListener("click", handleSubmit);
  submitBtn.addEventListener("click", handleSubmit);

  // Trigger the default city search on load
  handleSubmit(new Event("click"));
};
