// eslint-disable-next-line import/no-extraneous-dependencies
import { rest } from "msw";
import { fiveDayForecastData } from "../data/fiveDayForecastData";

export const handlers = [
  rest.get(
    "https://api.openweathermap.org/data/2.5/forecast",
    (req, res, ctx) => {
      const id = req.url.searchParams.get("id");
      const units = req.url.searchParams.get("units");
      const appid = req.url.searchParams.get("appid");
      if (!id || !units || !appid) {
        return res(
          ctx.status(400),
          ctx.json({ cod: 500, message: "Something happened." })
        );
      }
      return res(ctx.status(200), ctx.json(fiveDayForecastData));
    }
  ),
];
