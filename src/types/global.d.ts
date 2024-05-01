interface WeatherData {
  city: string;
  temperature: number;
  humidity: number;
  wind: number;
  rain: number;
}

interface PlanetData {
  planet: string;
  mercury: number; 
  venus: number; 
  earth: number; 
  mars: number;
  jupiter: number; 
  saturn: number; 
  uranus: number; 
  neptune: number; 
  
}


interface SpaceWeatherData {
  date: Date;
  solarWindSpeed: number;
  geomagneticStorm: boolean;
  // Add more fields as needed based on the response from your API
}

interface MarsWeatherData {
  sol: number;
  temperature: number;
  pressure: number;
  wind: number;
  
}
