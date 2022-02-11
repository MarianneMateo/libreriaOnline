var express = require("express");
var router = express.Router();

/* GET seccion page(productos.ejs) */
router.get("/", function(req, res, next) {
    res.render("productos", { title: "Nuestros Productos..." });
});

module.exports = router;