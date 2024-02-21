const express = require('express');
const { body, check, validationResult } = require('express-validator');
const app = express();
app.use(express.json());

const exphb = require('express-handlebars');

// add middleware  -- initiliaze template

app.engine('.hbs', exphb.engine({ extname: '.hbs' }))
app.set('view engine', 'hbs')


app.get("/getData", function (req, res) {
    var someData = {
        name: "John",
        age: 23,
        occupation: "developer",
        company: "Scotiabank"
    };
    res.json(someData);
});

// This will return the JSON-formatted string:

// { "name": "John", "age": 23, "occupation": "developer", "company": "Scotiabank" }

//The question is What if we want to return a valid HTML5 page to the client that actually references some data stored on the server? One solution would be to build out a string that contains both HTML code and values, ie:    
app.get("/viewData", function (req, res) {
    var someData = [{
        name: "John",
        age: 23,
        occupation: "developer",
        company: "Scotiabank",
        fulltime: true
    }, {
        name: "cena",
        age: 24,
        occupation: "developer",
        company: "Cibcbank",
        fulltime: false
    }

    ];


    res.render('viewData', {
        data: someData,
        layout: false
    })
    //     var htmlString = "<!doctype html>" +
    //         "<html>" +

    //         "<head>" +

    //         "<title>" + "View Data" + "</title>" +

    //         "</head>" +

    //         "<body>" +

    //         "<table border='1'>" +

    //         "<tr>" +

    //         "<th>" + "Name" + "</th>" +

    //         "<th>" + "Age" + "</th>" +

    //         "<th>" + "Occupation" + "</th>" +

    //         "<th>" + "Company" + "</th>" +

    //         "</tr>" +

    //         "<tr>" +

    //         "<td>" + someData.name + "</td>" +

    //         "<td>" + someData.age + "</td>" +

    //         "<td>" + someData.occupation + "</td>" +

    //         "<td>" + someData.company + "</td>" +

    //         "</tr>" +

    //         "</table>" +

    //         "</body>" +

    //         "</html>";



    //     res.send(htmlString);

});

app.listen(3000);