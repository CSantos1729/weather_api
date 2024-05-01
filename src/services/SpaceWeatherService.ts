import { faker } from "@faker-js/faker";
import { storeSpaceWeatherData } from "../helpers/helpers.js";

export const generateLondonSpaceWeatherData = (): SpaceWeatherData => {
  // Generate random space weather data for London
  const generatedSpaceWeatherData: SpaceWeatherData = {
    date: faker.date.recent(),
    solarWindSpeed: faker.datatype.number({ min: 300, max: 800, precision:99 }),
    geomagneticStorm: faker.datatype.boolean(),
    // Add more fields as needed based on your SpaceWeatherData interface
  };

  // Store the generated space weather data
  storeSpaceWeatherData(generatedSpaceWeatherData).catch(console.error);

  // Return the generated space weather data
  return generatedSpaceWeatherData;
};
