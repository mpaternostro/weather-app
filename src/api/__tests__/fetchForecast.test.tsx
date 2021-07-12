import { fetchForecast } from "../fetchForecast";
import returnForecastData from "../../fixtures/return-forecast-data";

describe("fetchForecast", () => {
  test("should return forecast data", async () => {
    const result = await fetchForecast();

    expect(result).toEqual(returnForecastData);
  });
});
