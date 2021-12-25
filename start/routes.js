"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", "HomeController.index").as("home.index");
Route.get("/category", "CategoryController.index").as("category.index");
Route.get("/contact", "ContactController.index").as("contato.index");
Route.get("/film", "FilmController.index").as("filme.index");
Route.get("/rate", "RateController.index").as("rate.index");
