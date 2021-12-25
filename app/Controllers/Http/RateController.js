"use strict";

class RateController {
  index({ view }) {
    return view.render("frontend.avaliacoes");
  }
}

module.exports = RateController;
