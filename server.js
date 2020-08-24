/* --- Import Da Modules --- */
const path = require("path");
const express = require("express");
const app = express();

// Make JS bundles accessible:
app.use(express.static(path.resolve(__dirname, "../dist")));

// Make all static assets accessible:
app.use(express.static(path.resolve(__dirname, "../public")));

app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "../index.html")));
app.listen(3000, () => console.log("Web server up at PORT :3000"));
