import { rest } from "msw";
import { server } from "../../mocks/server";
import { fetchForecast } from "../fetchForecast";

describe("fetchForecast", () => {
  test("should return forecast data", async () => {
    const result = await fetchForecast();
    expect(result).toHaveProperty("city");
    expect(result).toHaveProperty("list");
    expect(result.list[0].date).toBeInstanceOf(Date);
  });

  test("should throw an error if apiKey is not provided", async () => {
    process.env.SNOWPACK_PUBLIC_OPEN_WEATHER_API_KEY = "";
    await expect(fetchForecast()).rejects.toThrow(
      /^OPEN_WEATHER_API_KEY node env not provided.$/
    );
    process.env.SNOWPACK_PUBLIC_OPEN_WEATHER_API_KEY = "app-test-id";
  });

  test("should throw an error if api response returned an error", async () => {
    server.use(
      rest.get(
        "https://api.openweathermap.org/data/2.5/forecast",
        (req, res, ctx) => {
          return res(
            ctx.status(500),
            ctx.json({ cod: 500, message: "API currently under maintenance." })
          );
        }
      )
    );

    await expect(fetchForecast()).rejects.toThrow(
      /^Failed while loading data. Please try again later.$/
    );
  });

  test("should throw an error if fetch promise failed", async () => {
    server.use(
      rest.get("https://api.openweathermap.org/data/2.5/forecast", () => {
        throw new Error("Failed to fetch.");
      })
    );

    await expect(fetchForecast()).rejects.toThrow(
      /^No internet connection available. Please try again later.$/
    );
  });
});
