import express from "express";
import cors from "cors";
import sumRoute from "./src/routes/sum.route.js";

const app = express();
const PORT = 3001;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.use("/sum", sumRoute);

// Server
app.listen(PORT, () => {
  console.log("Server has started on port " + PORT);
});
