module.exports = new (require("express")).Router();

// Routes:
module.exports.get("/mirror/:id", (req, res) => {
    res.send(req.params.id.split("").reverse().join(""));
});