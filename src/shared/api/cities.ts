import { City } from "@/shared/types";

export const fetchCities = async (value: string): Promise<City[]> => {
  const response = await fetch(
    `${import.meta.env.VITE_API_CITIES}/locations/cities?search=${value}&size=5`
  );
  const data = await response.json();

  return data.cities;
};

export const fetchUserLocation = async (): Promise<{
  lat: number,
  lon: number
} | undefined> => {
  try {

    const response = await fetch(`${import.meta.env.VITE_API_USER_LOCATION}?apiKey=${import.meta.env.VITE_API_KEY_USER_LOCATION}`)
    const data = await response.json()

    return {
      lat: data.latitude,
      lon: data.longitude
    }
  }

  catch (err) {
    console.log(err)
  }
}