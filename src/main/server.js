// Server
const http = require('http')
const jfunc = require('./jfunc').default
const port = 2211

let server = new http.Server(function(req, res) {
    // API сервера будет принимать только POST-запросы и только JSON, так что записываем
    // всю нашу полученную информацию в переменную jsonString
    var jsonString = ''

    res.setHeader('Content-Type', 'application/json')
    res.setHeader('X-Requested-With', 'XMLHttpRequest')
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type')

    // Пришла информация - записали.
    req.on('data', (data) => {
        jsonString += data
    })
    // Информации больше нет - передаём её дальше.
    req.on('end', () => {
        // Функцию define мы ещё не создали.
        jfunc.restAPI(req, res, jsonString)
    })
})
server.listen(port, '127.0.0.1')
