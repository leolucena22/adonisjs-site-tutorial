"use strict";

class FilmController {
  index({ view }) {
    return view.render("frontend.filmes");
  }
}

module.exports = FilmController;
