export interface weatherData {
  address: string;
  timezone: string;
  currentConditions: {
    temp: number;
    conditions: string;
    feelslike: number;
    precipprob: number;
    windspeed: number;
    humidity: number;
    uvindex: number;
  };
  days: [
    {
      tempmax: number;
      tempmin: number;
      datetime: string;
      conditions: string;
    }
  ];
  description: string;
}
