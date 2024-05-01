import { faker } from "@faker-js/faker";
import { storePlanetData } from "../helpers/helpers.js";

export const generatePlanetData = (): PlanetData => {
  // List of planets in our solar system
  const planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];
  
  // Generate random planet data
  const generatedPlanetData = {
    planet: planets[Math.floor(Math.random() * planets.length)], // Select a random planet
    mercury: faker.number.float({ min: -173, max: 427 }), // Mercury's temperature range in Celsius
    venus: faker.number.float({ min: 462, max: 471 }), // Venus's temperature range in Celsius
    earth: faker.number.float({ min: -89, max: 58 }), // Earth's temperature range in Celsius
    mars: faker.number.float({ min: -140, max: 20 }), // Mars's temperature range in Celsius
    jupiter: faker.number.float({ min: -145, max: -108 }), // Jupiter's temperature range in Celsius
    saturn: faker.number.float({ min: -178, max: -138 }), // Saturn's temperature range in Celsius
    uranus: faker.number.float({ min: -224, max: -197 }), // Uranus's temperature range in Celsius
    neptune: faker.number.float({ min: -228, max: -201 }), // Neptune's temperature range in Celsius
    // Add more planets as needed
  };
  
  // Store the generated planet data
  storePlanetData(generatedPlanetData).catch(console.error);
  
  // Return planet data
  return generatedPlanetData;
};
