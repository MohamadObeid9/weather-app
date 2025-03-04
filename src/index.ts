import "./styles.css";
import { currentWeather } from "./ts/currentWeather";
import { futureWeather } from "./ts/futureWeather";
import { todayWeather } from "./ts/todayWeather";
// import { createPara } from "./ts/script";
// createPara();
import { unit } from "./ts/unit";
unit()
currentWeather();
todayWeather();
futureWeather();
console.log("hello world");
