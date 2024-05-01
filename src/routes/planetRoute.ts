import express from "express";
import { getPlanetData } from "../controllers/planetController.js";
import { validatePlanetName } from "../middleware/validators.js";


// We will create a router object
const router = express.Router();

// We will create a route for the weather data based on the city name
router.get("/:planet",validatePlanetName,getPlanetData);

// We will export the router
export default router;