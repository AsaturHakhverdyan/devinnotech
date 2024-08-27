export interface IWeather {
  name: string;
  clouds: {
    all: number
  };
  dt?: number;
  dt_txt?: string;
  main: {
    temp: number
  };
  weather: ISmallWeather[];
  coord?: {
    lat: number;
    lon: number;
  }
}

export interface ISmallWeather {
  description: string;
  icon: string;
  main: string;
}