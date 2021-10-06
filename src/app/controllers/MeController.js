const Course = require("../models/Course");
const { muntibleMongooesToObject } = require("../../util/mongooes");

class courseController {
  //[GET] /me/stored/courses
  async storedCourses(req, res, next) {
    try {
      const courses = await Course.find({});

      res.render("me/stored-courses", {
        courses: muntibleMongooesToObject(courses),
      });
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new courseController();
