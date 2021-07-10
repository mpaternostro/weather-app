type DayForecastProps = {
  currentTemp: number;
  date: Date;
};

export function DayForecast({
  currentTemp,
  date,
}: DayForecastProps): JSX.Element {
  return (
    <div>
      <h2>{`${date.toISOString()} Current temperature is: ${currentTemp} °C`}</h2>
    </div>
  );
}
