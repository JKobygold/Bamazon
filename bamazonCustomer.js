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
    Table();
});

var Table = function () {
    connection.query("SELECT * FROM stuff", function (err, res) {
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].item_id);
            console.log(res[i].product_name);
            console.log(res[i].department_name);
            console.log(res[i].price);
            console.log(res[i].stock_quantity);
        }
        if (err) {
            console.log("Something Didn't work here");
        }
        promptBuyer(res);
    }
    );
};

var promptBuyer = function (res) {
    inquirer.prompt([{
        type: "input",
        name: 'choice',
        message: " Hi there! Welcome to Bamazon! Are you interested in any of the followings products? "
    }]).then(function (answer) {
        var IwantThis = false;
        for (var i = 0; i < res.length; i++) {
            if (res[i].product_name === answer.choice) {
                var IwantThis = true;
                var item = answer.choice;
                var id = i;
         
            }
        }
    });



};