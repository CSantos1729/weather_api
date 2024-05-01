import express from "express";
import { getMarsWeather } from "../controllers/MarsWeatherController.js";

// Create a router object
const router = express.Router();

// Create a route for the Mars weather data
router.get("/mars", getMarsWeather);

// Export the router
export default router;
