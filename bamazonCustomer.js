var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "rootroot",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("You have been connected to the database");
});

var Table = function () {
    connection.query("SELECT * FROM bamazon", function (res,err ) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id);
            console.log(res[i].product_name);
            console.log(res[i].department_name);
            console.log(res[i].price);
            console.log(res[i].stock_quantity); 
        }
        if(err){
            console.log("Something Didn't work here");
        }
    }
    );
};