const express = require("express");
const Validator = require("fastest-validator");

const middleware = require("./middleware");
const user = require("./models/user");
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to AYR." });
});

app.post("/", (req, res) => {
    const check = middleware.rules(req, res);

    
    res.json({ message: "Welcome to AYR." });
  });

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
