import express from "express";
import path from "path";
import posts from "./routes/posts.js";
import { fileURLToPath } from "url";

// Derive __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 8000;
const app = express();

//Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); //allows to send form data

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

app.listen(port, () => console.log("Server is running on port 8000"));
