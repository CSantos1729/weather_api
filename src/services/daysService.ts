import { faker } from "@faker-js/faker";
import { storeDaysData } from "../helpers/helpers.js";

export const generateLondonDaysData = (): DaysData => {
  // Generate random weather data
  const generatedDaysData = {
    dayOne: faker.number.int({ min: -15, max: 30 }),
    dayTwo: faker.number.int({ min: 79, max: 86 }),
    dayThree: faker.number.int({ min: 2, max: 78 }),
    
  };
  storeDaysData(generatedDaysData).catch(console.error);
  // Return weather data
  return generatedDaysData;
};