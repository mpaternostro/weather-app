import { useQuery } from "react-query";
import { DayForecast } from "components/DayForecast/DayForecast";
import { fetchForecast } from "../../api/fetchForecast";

export function Homepage(): JSX.Element {
  const { data, isLoading, isError, error } = useQuery(
    "forecast",
    fetchForecast
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
      <h2>{data?.currentTemp}</h2>
      <DayForecast />
    </div>
  );
}
