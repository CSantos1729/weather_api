import express from "express";
import { getSpaceWeatherData } from "../controllers/SpaceWeatherController.js";


// Create a router object
const router = express.Router();

// Create a route for the space weather data based on the city name
router.get("/:date", getSpaceWeatherData);

// Export the router
export default router;
