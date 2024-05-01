import { Request, Response } from "express";

import { generatePlanetData } from "../services/planetDataService.js";

export const getPlanet = async (req: Request, res: Response) => {
    try {
        const { planet } = req.params;
        console.log(planet);

        let finalPlanetData: PlanetData;

        const supportedPlanets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

        if (supportedPlanets.includes(planet.toLowerCase())) {
            console.log(generatePlanetData(planet));
            finalPlanetData = generatePlanetData(planet);
        } else {
            res.status(404).send("Planet not found");
            return;
        }

        res.status(200).json(finalPlanetData);
    } catch (error) {
        console.error(error);
        res.status(500).send("Error in fetching planet data");
    }
};
