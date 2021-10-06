const express = require("express");
const meRouter = express.Router();
const meController = require("../app/controllers/MeController");

meRouter.get("/stored/courses", meController.storedCourses);

module.exports = meRouter;
