import type { Forecast, ForecastRawData } from "types/Forecast";

export function mapForecast(forecastData: ForecastRawData): Forecast {
  return {
    date: new Date(forecastData.dt * 1000),
    currentTemp: forecastData.main.temp,
    minTemp: forecastData.main.temp_min,
    maxTemp: forecastData.main.temp_max,
    feelsLike: forecastData.main.feels_like,
    pressurePerc: forecastData.main.pressure,
    humidity: forecastData.main.pressure,
    cloudiness: forecastData.clouds.all,
    weather: {
      title: forecastData.weather[0].main,
      description: forecastData.weather[0].description,
      icon: forecastData.weather[0].icon,
    },
    wind: {
      speed: forecastData.wind.speed,
      gust: forecastData.wind.gust,
      deg: forecastData.wind.deg,
    },
    visibility: forecastData.visibility,
    precipitationPerc: forecastData.pop,
    partOfDay: forecastData.sys.pod,
    rainVolume: forecastData.rain?.["3h"],
    snowVolume: forecastData.snow?.["3h"],
  };
}
