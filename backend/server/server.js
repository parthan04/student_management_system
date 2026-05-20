const express = require("express");
require('dotenv').config();

//IMPORT EXPRESS AND CREATE APP
const app = express();

//IMPORT CORS
const cors = require("cors");

// MIDDLEWARE
app.use(cors());
app.use(express.json());

//IMPORT ROUTES
const userRoutes = require("../routes/userRoutes");
const studentRoutes = require("../routes/studentRoutes");
const courseRoutes = require("../routes/courseRoutes");
const enrollmentRoutes = require("../routes/enrollmentRoutes");

// USE ROUTES
app.use("/api/users", userRoutes);
app.use("/api/students", studentRoutes);
app.use("/api/course", courseRoutes);
app.use("/api/enrollment", enrollmentRoutes);

const port =process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running at port http://localhost:${port}`);
});
