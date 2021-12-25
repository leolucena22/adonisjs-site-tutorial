"use strict";

class ContactController {
  index({ view }) {
    return view.render("frontend.contato");
  }
}

module.exports = ContactController;
