import express from "express";
import path from "path";
import posts from "./routes/posts";

const port = process.env.PORT || 8000;
const app = express();

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
