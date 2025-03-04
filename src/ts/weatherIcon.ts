import rain = require("../img/rain.png");
import PartiallyCloudy = require("../img/cloud-sun.png");
import RainPartiallyCloudy = require("../img/rain-sun.png");
import Clear = require("../img/sun.png");
import Overcast = require("../img/muy-nublado.png");

export const weatherIcon = (status: string) => {
  switch (status) {
    case "Rain":
      return String(rain);
    case "Partially cloudy":
      return String(PartiallyCloudy);
    case "Rain, Partially cloudy":
      return String(RainPartiallyCloudy);
    case "Clear":
      return String(Clear);
    case "Overcast":
      return String(Overcast);
  }
  return String(Overcast);
};
