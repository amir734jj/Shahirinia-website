// Install express server
const express = require("express");
const cors = require("cors");

const app = express();

// Use CORS
app.use(cors());

// Serve only the static files form the dist directory
app.use(express.static("react-website/build"));

// Start the app by listening on the default Heroku port
const server = app.listen(process.env.PORT || 80, function () {
  console.log(
    "Server is running at %s:%d",
    server.address().address,
    server.address().port
  );
});
