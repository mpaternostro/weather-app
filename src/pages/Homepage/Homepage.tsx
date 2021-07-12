import { useQuery } from "react-query";
import { DayForecast } from "components/DayForecast/DayForecast";
import { fetchForecast } from "../../api/fetchForecast";

const FIVE_MINUTES_IN_MS = 5 * 60 * 1000;

export function Homepage(): JSX.Element {
  const { data, isLoading, isError, error } = useQuery(
    "forecast",
    fetchForecast,
    {
      staleTime: FIVE_MINUTES_IN_MS,
    }
  );

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    if (error instanceof Error) {
      return <span>Error: {error.message}</span>;
    }
    return <span>Error: Something went wrong</span>;
  }

  if (!data) {
    return (
      <div>
        <h1>Did not found any data to display.</h1>
      </div>
    );
  }
  const { name, country } = data.city;

  return (
    <div>
      <h1>{`Showing weather for ${name}, ${country}`}</h1>
      {data.list.map((forecast) => (
        <DayForecast
          key={forecast.date.toISOString()}
          currentTemp={forecast.currentTemp}
          date={forecast.date}
        />
      ))}
    </div>
  );
}
