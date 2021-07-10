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

  return (
    <div>
      <h1>Showing weather for Buenos Aires, AR</h1>
      {data?.map((forecast) => (
        <DayForecast
          key={forecast.date.toISOString()}
          currentTemp={forecast.currentTemp}
          date={forecast.date}
        />
      ))}
    </div>
  );
}
