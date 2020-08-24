/* --- Import Da Modules --- */
const path = require("path");
const express = require("express");
const app = express();

// Make JS bundles accessible:
app.use("/public", express.static(path.resolve(__dirname, "dist")));

// Make all static assets accessible:
try {
    app.use("/public", express.static(path.resolve(__dirname, "public")));
}
catch (err) {}

// Register API routes before adding SPA catch-all:
try {
    const apiRouter = require("./api");
    app.use("/api", apiRouter);
}
catch (err) {}

// SPA catch-all
app.get("*", (req, res) => res.sendFile(path.resolve(__dirname, "index.html")));

// Listen:
app.listen(process.env.PORT || 3000, () => console.log(
    "\n" +
    "[:::::::::::::::::::::::::]\n" +
    "[:::::::::::::::::::::::::]\n" +
    "[::::::WEB:SERVER:UP::::::]\n" +
    "[:::::::::::::::::::::::::]\n" +
    "[:::::::::::::::::::::::::]"
));