interface WeatherData {
  city: string;
  temperature: number;
  humidity: number;
  wind: number;
  rain: number;
}

interface DaysData {
  city: string;
  dayOne: number;
  dayTwo: number;
  dayThree: number;
  
}

interface SpaceWeatherData {
  date: Date;
  solarWindSpeed: number;
  geomagneticStorm: boolean;
  // Add more fields as needed based on the response from your API
}