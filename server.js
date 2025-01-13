import express from "express";
import path from "path";
import posts from "./routes/posts.js";
import { fileURLToPath } from "url";
import logger from "./middleware/logger.js";
import errorHandler from "./middleware/errorHandler.js";
import notFound from "./middleware/notFound.js";
import cors from "cors";

// Derive __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 8000;

const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //allows to send form data

//Logger middleware
app.use(logger);

//set up static folder
app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// app.get("/about", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "about.html"));
// });

//Routes
app.use("/api/posts", posts);

//error Handler
app.use(notFound);
app.use(errorHandler);

// Enable CORS
app.use(cors());

app.listen(port, () => console.log("Server is running on port 8000"));
