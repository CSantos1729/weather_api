import express from "express";
import { getDays } from "../controllers/daysController.js";
import { validateCityName } from "../middleware/validators.js";


// We will create a router object
const router = express.Router();

// We will create a route for the weather data based on the city name
router.get("/:city",validateCityName, getDays);

// We will export the router
export default router;