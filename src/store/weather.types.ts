export const GET_WEATHER = 'GET_WEATHER';
export const SET_LOADING = 'SET_LOADING';
export const SET_ERROR = 'SET_ERROR';
export const SET_ALERT = 'SET_ALERT';

export type Weather = {
  description: string;
  icon: string;
  id: number;
  main: string;
};

export type WeatherData = {
  bse: string;
  clouds: {
    all: number;
  };
  cod: number;
  coord: {
    lon: number;
    lat: number;
  };
  dt: number;
  id: number;
  main: {
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
  };
  name: string;
  sys: {
    country: string;
    id: number;
    sunrise: number;
    sunset: number;
    type: number;
  };
  timezone: number;
  visibility: number;
  weather: Weather[];
  wind: {
    speed: number;
    deg: number;
  };
};

export type WeatherError = {
  cod: string;
  message: string;
};

export type WeatherState = {
  data: WeatherData | null;
  loading: boolean;
  error: string;
};

type GetWeatherAction = {
  type: typeof GET_WEATHER;
  payload: WeatherData;
};

type SetLoadingAction = {
  type: typeof SET_LOADING;
};

type SetErrorAction = {
  type: typeof SET_ERROR;
};

export type AlertAction = {
  type: typeof SET_ALERT;
  payload: string;
};

export type AlertState = {
  message: string;
};

export type WeatherAction =
  | GetWeatherAction
  | SetLoadingAction
  | SetErrorAction;
