const Course = require("../models/Course");
const { mongooesToObject } = require("../../util/mongooes");

class courseController {
  //[GET] /courses/:slug
  async show(req, res, next) {
    try {
      const course = await Course.findOne({ slug: req.params.slug }).exec();
      res.render("course/course-detail", { course: mongooesToObject(course) });
    } catch (error) {
      next(error);
    }
  }

  //[GET] /courses/create
  create(req, res, next) {
    try {
      // const course = await Course.findOne({ slug: req.params.slug }).exec();
      res.render("course/create");
    } catch (error) {
      next(error);
    }
  }

  //[POST] /courses/create
  store(req, res, next) {
    try {
      const data = req.body;
      data.image = "https://cdn.fullstack.edu.vn/f8-learning/courses/6/6.jpeg";

      // có thể dùng create thay cho save
      const course = new Course(data);
      course
        .save()
        .then(() => res.redirect("/"))
        .catch();
    } catch (error) {
      next(error);
    }
  }

  //[GET] /courses/:id/edit
  async edit(req, res, next) {
    const { id } = req.params;

    try {
      const courseEdit = await Course.findById(id);
      res.render("course/edit", { course: mongooesToObject(courseEdit) });
    } catch (error) {
      next(error);
    }
  }

  //[PUT] /courses/:id
  async put(req, res, next) {
    const { id } = req.params;
    const data = req.body;
    try {
      await Course.updateOne({ _id: id }, data);
      res.redirect("/me/stored/courses");
    } catch (error) {
      next(error);
    }
  }

  //[DELETE] /courses/:id
  async delete(req, res, next) {
    const { id } = req.params;
    try {
      await Course.deleteOne({ _id: id });
      res.redirect("/me/stored/courses");
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new courseController();
