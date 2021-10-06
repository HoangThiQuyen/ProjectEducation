const Course = require("../models/Course");
const { muntibleMongooesToObject } = require("../../util/mongooes");

class SiteControllers {
  //[GET] /
  index(req, res, next) {
    //C1
    // Course.find({}, (err, courses) => {
    //   if (!err) res.send(courses);
    //   else {
    //     next(err);
    //   }
    // });

    //C2 promiss
    Course.find({})
      .then((courses) => {
        res.render("home", { courses: muntibleMongooesToObject(courses) });
      })
      .catch(next);
  }

  //[GET] /news/:slug
  searchs(req, res) {
    res.render("searchs");
  }
}

module.exports = new SiteControllers();
