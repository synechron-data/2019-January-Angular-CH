module.exports.index = function (req, res, next) {
    res.render('index', { ptitle: "Express" });
};