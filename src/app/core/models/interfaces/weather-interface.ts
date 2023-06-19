export interface ApiWeatherI {
  location: Location;
  current: Current;
  forecast: Forecast;
}

export interface Current {
  temp_c: number;
  temp_f: number;
  condition: CurrentCondition;
  uv: number;
}

export interface CurrentCondition {
  icon: string;
}

export interface Forecast {
  forecastday: Forecastday[];
}

export interface Forecastday {
  date: Date;
  day: Day;
  astro: Astro;
  hour: Hour[];
}

export interface Astro {
  sunrise: string;
  sunset: string;
}

export interface Day {
  maxtemp_c: number;
  mintemp_c: number;
  totalsnow_cm: number;
  condition: DayCondition;
}

export interface DayCondition {
  text: string;
  icon: string;
  code: number;
}

export interface Hour {
  time: string;
  temp_c: number;
  condition: DayCondition;
}

export interface Location {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
}

//Custom Interfaces

export interface WeatherI {
  location: Location;
  forecast: ForecastI;
}

export interface ForecastI {
  forecastday: ForecastdayI[];
}

export interface ForecastdayI {
  date: Date;
  day: DayI;
}

export interface DayI {
  maxtemp_c: number;
  mintemp_c: number;
  condition: DayCondition;
}
