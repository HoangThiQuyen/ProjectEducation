const express = require("express");
const coursesRouter = express.Router();
const courseController = require("../app/controllers/CourseController");

coursesRouter.get("/create", courseController.create);
coursesRouter.get("/:slug", courseController.show);
coursesRouter.post("/store", courseController.store);
coursesRouter.get("/:id/edit", courseController.edit);
coursesRouter.put("/:id", courseController.put);
coursesRouter.delete("/:id", courseController.delete);

module.exports = coursesRouter;
