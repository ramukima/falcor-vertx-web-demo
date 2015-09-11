# falcor-vertx-web-demo
Demonstrate Falcor + vertx-web integration

# falcor-vertx-web-demo
Demonstrate Falcor + vertx-web integration

HowToRun
========
Pre-requisites :
* Note that this module does not use NPM version of vert.x min/base/full as dependency. So, vertx is installed and the vertx executable is in the PATH.
* export NODE_PATH=$NODE_PATH:/usr/local/lib/node_modules:./node_modules
* package.json does not specify any dependency on falcor-vertx-web (currently not in NPM repository). So make sure that ramukima/falcor-vertx-web project is NPM built/installed (either globally or locally).

```
git clone <repo>
cd <repo>
npm install
npm start
```

This will start an HTTP server exposing static web page index.html at localhost:8080. When the index page is loaded, it makes a get/set call to the falcor model. The model.json request is then served by this HTTP server.

Open the console/developer tools in your browser to see the console output and/or calls made to this HTTP server when index page is loaded.
