const express = require("express");
const siteRouter = express.Router();
const siteController = require("../app/controllers/SiteControllers");

siteRouter.get("/searchs", siteController.searchs);
siteRouter.get("/", siteController.index);

module.exports = siteRouter;
