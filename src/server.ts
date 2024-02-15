import express from "express";
import weatherRoute from "./routes/weatherRoute.js";
import daysRoute from "./routes/daysRoute.js";

// We will create an express app
const app = express();

// The port that the express server will listen on
const PORT = 3000;

app.use(express.json());

// We define our first route
app.use("/api/weather", weatherRoute);
// second route
app.use("/api/days", daysRoute);

// Start the express server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
