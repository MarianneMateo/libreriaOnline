var mysql = require("mysql");
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "ventas",
});

connection.connect((err) => {
    if (!err) {
        console.log("Conexion exitosa!");
    } else {
        console.log("Conexion fallida!");
    }
});
module.exports = connection;
/* connection.query("SELECT * FROM  tblproductos", function(err, res) {
        console.log(res);
    }); */

//connection.end();