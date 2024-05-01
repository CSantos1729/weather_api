import { faker } from "@faker-js/faker";
import { storeMarsWeatherData } from "../helpers/helpers.js";

export const generateMarsWeatherData = (): MarsWeatherData => {
  // Generate random Mars weather data
  const generatedMarsWeatherData = {
    sol: faker.number.int(),
    temperature: faker.number.int({ min: -100, max: 50 }), // Temperature in degrees Celsius
    pressure: faker.number.int({ min: 600, max: 1200 }), // Pressure in Pascals
    wind: faker.number.int({ min: 0, max: 50 }), // Wind speed in meters per second
    // Add more fields as needed
  };

  // Store the generated Mars weather data
  storeMarsWeatherData(generatedMarsWeatherData).catch(console.error);

  // Return the generated Mars weather data
  return generatedMarsWeatherData;
};
