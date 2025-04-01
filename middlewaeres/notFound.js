function notFound(req, res, next) {
    res.status(404)
    res.json({
        error : "non trovato"
    })
}

module.exports = notFound