import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import connection from "./db/Database.js";
import Routes from "./Router/ProductRoute.js";

const app = express();
app.use(express.json());
app.use(cors());
app.use(
  cors({
    origin: "https://code-vector-flame.vercel.app",
    credentials: true,
  }),
);
connection();
app.use("/codevector", Routes);

app.get("/", (req, res) => {
  res.json({ message: "Home route", success: true });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
