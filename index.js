// This file starts the server and exposes the Router at /model.json

var VertxRouter = require("vertx-web-js/router");
var StaticHandler = require("vertx-web-js/static_handler");
var BodyHandler = require("vertx-web-js/body_handler");

var falcor = require("falcor");
var falcorVertxWeb = require("falcor-vertx-web");
var $ref = falcor.Model.ref;

function example() {
    return {
        cache: {
            productsById: {
                 1: {
                     name: "Product ABC",
                     otherAdd: "something 1"
                 },
                 2: {
                     name: "Product 123",
                     otherAdd: "something 2"
                 },

            },
            _view: [ $ref('productsById[1]') ],
            _cart: []
        }
    }
}

var vRouter = VertxRouter.router(vertx);
vRouter.route().handler(BodyHandler.create().handle);
vRouter.route().path("/model.json").handler(falcorVertxWeb.dataSourceRoute(function (routingContext) {
	return new falcor.Model(example()).asDataSource();
}));

vRouter.route().handler(StaticHandler.create().handle);
vertx.createHttpServer().requestHandler(vRouter.accept).listen(8080);

