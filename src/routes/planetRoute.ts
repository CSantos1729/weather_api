import express from "express";
import { getPlanet } from "../controllers/planetController.js";



// We will create a router object
const router = express.Router();

// We will create a route for the weather data based on the city name
router.get("/:planet",getPlanet);

// We will export the router
export default router;