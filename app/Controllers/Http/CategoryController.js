"use strict";

class CategoryController {
  index({ view }) {
    return view.render("frontend.categoria");
  }
}

module.exports = CategoryController;
