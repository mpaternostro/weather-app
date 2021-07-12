import type { FiveDayForecastRawData, ForecastData } from "types/Forecast";
import { mapForecast } from "../mappers/forecast";

export async function fetchForecast(): Promise<ForecastData> {
  const apiKey = process.env.SNOWPACK_PUBLIC_OPEN_WEATHER_API_KEY;
  if (typeof apiKey !== "string") {
    throw new Error("OPEN_WEATHER_API_KEY node env not provided.");
  }
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?id=3435910&units=metric&appid=${apiKey}`
  );
  const data = (await response.json()) as FiveDayForecastRawData;
  return {
    city: data.city,
    list: data.list.map(mapForecast),
  };
}
