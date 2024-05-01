import { Request, Response } from "express";
import { generatePlanetData } from "../services/planetService.js";

export const getPlanetData = async (req: Request, res: Response) => {
  try {
    // Extract the planet parameter from the request
    const { planet } = req.params;
    
    // Log the value of the planet parameter
    console.log("Requested planet:", planet);
    
    // Initialize a variable to hold the final planet data
    let finalPlanetData: PlanetData;

    // Determine which planet data to generate based on the planet name
    // Check which planet was passed in
    if (planet === "earth") {
      console.log(generatePlanetData());
      finalPlanetData = generatePlanetData();
    } else {
      // If the planet is not right, send a 404 error
      res.status(404).send("Planet not found");
      return; // Exit the function early
    }

    // Send the planet data as a JSON response
    res.status(200).json(finalPlanetData);
  } catch (error) {
    // If there is an error, send a 500 error response
    res.status(500).send("Error in fetching planet data");
  }
};
