import { Request, Response } from "express";
import { generateLondonSpaceWeatherData } from "../services/SpaceWeatherService.js";

/**
 * Gets the space weather data for a city
 * @param req the request object
 * @param res the response object
 */
export const getSpaceWeatherData = async (req: Request, res: Response) => {
    // Use a try-catch block to catch any errors
    try {
      // Get the city param from the request
      const { city } = req.params;
      console.log(city);
  
      // Declare a variable to hold space weather data
      let finalSpaceWeatherData: SpaceWeatherData;
  
      // Check which city was passed in
      if (city === "london") {
        console.log(generateLondonSpaceWeatherData());
        finalSpaceWeatherData = generateLondonSpaceWeatherData();
      } else {
        // If the city is not London, send a 404 error
        res.status(404).send("City not found");
        return; // Exit the function early
      }
  
      // Return the space weather data as JSON
      res.status(200).json(finalSpaceWeatherData);
    } catch (error) {
      // If there is an error, log it and send a 500 status code
      console.error(error);
      res.status(500).send("Error in fetching space weather data");
    }
};
