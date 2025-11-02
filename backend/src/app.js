import express from "express";
import cors from "cors";
import morgan from "morgan";
import routes from "./routes/index.js";
import { errorHandler } from "./middleware/error.middleware.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// uploads ko static bana do
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.json({ message: "Footwear ERP API is running 🚀" });
});

app.use("/api", routes);

app.use(errorHandler);

export default app;
