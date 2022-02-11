var express = require("express");
var router = express.Router();
var db = require("../conexion/conexion");

/* GET seccion page(productos.ejs) */
router.get("/", function(req, res, next) {
    db.query("SELECT * FROM  tblproductos", function(err, resultado) {
        console.log(resultado);
        res.render("productos", { title: "Nuestros Productos...", libros: resultado });
    });
});

module.exports = router;