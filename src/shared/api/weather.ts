import { WeatherData } from "@/shared/types/weather";

export const fetchWeatherByCoordinate = async (lat: number, lon: number, locale: string): Promise<WeatherData> => {
    const response = await fetch(
      `${import.meta.env.VITE_API_WEATHER}/forecast/?lat=${lat}&units=metric&lon=${lon}&lang=${locale}&appid=${import.meta.env.VITE_API_KEY_WEATHER}`
    );
  
    const data = await response.json()
  
    return data
  };

  export const fetchWeatherByCoordinateByNameCity = async (name: string, countryCode: string, locale: string): Promise<WeatherData> => {
    const response = await fetch(
      `${import.meta.env.VITE_API_WEATHER}/forecast/?q=${name}, ${countryCode}&units=metric&lang=${locale}&appid=${import.meta.env.VITE_API_KEY_WEATHER}`
    );
  
    const data = await response.json()
  
    return data
  };