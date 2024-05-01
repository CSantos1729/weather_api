import { Request, Response } from "express";
import { generateMarsWeatherData } from "../services/marsWeatherService.js";

/**
 * Gets the weather data for a city
 * @param _req the request object
 * @param res the response object
 */
export const getMarsWeather = async (_req: Request, res: Response) => {
  try {
    // Generate Mars weather data
    const marsWeatherData = generateMarsWeatherData();

    // Return the Mars weather data as JSON
    res.status(200).json(marsWeatherData);
  } catch (error) {
    // Log error and send a 500 status code
    console.error("Error in fetching Mars weather data:", error);
    res.status(500).send("Error in fetching Mars weather data");
  }
};
