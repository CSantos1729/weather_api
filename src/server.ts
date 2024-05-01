import express from "express";
import weatherRoute from "./routes/weatherRoute.js";
import planetRoute from "./routes/planetRoute.js";
import SpaceWeatherRoute from "./routes/SpaceWeatherRoute.js"
import cors from "cors";



// We will create an express app
const app = express();

// The port that the express server will listen on
const PORT = 3000;

app.use(express.json());
app.use(cors());
// We define our first route
app.use("/api/weather", weatherRoute);
// second route
app.use("/api/planet", planetRoute);
app.use("/api/space-weather", SpaceWeatherRoute);
// Start the express server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
