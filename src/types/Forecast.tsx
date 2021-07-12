interface City {
  id: number;
  name: string;
  coord: { lat: number; lon: number };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface FiveDayForecastRawData {
  cod: string;
  message: number;
  cnt: number;
  list: ForecastRawData[];
  city: City;
}

export interface ForecastRawData {
  dt: number;
  dt_txt: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  clouds: { all: number };
  wind: { speed: number; deg: number; gust: number };
  visibility: number;
  pop: number;
  sys: { pod: "n" | "d" };
  rain?: { "3h": number };
  snow?: { "3h": number };
}

export interface ForecastData {
  city: City;
  list: Forecast[];
}

export interface Forecast {
  date: Date;
  currentTemp: number;
  minTemp: number;
  maxTemp: number;
  feelsLike: number;
  pressurePerc: number;
  humidity: number;
  cloudiness: number;
  weather: {
    title: string;
    description: string;
    icon: string;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  precipitationPerc: number;
  partOfDay: "n" | "d";
  rainVolume?: number;
  snowVolume?: number;
}
