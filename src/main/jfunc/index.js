// --
const url = require('url')
const qs = require('qs')
// function
const ddw = require('./ddw').default


const restAPI = function(req, res, postData) {
    const urlParsed = url.parse(req.url, true)
//    const query = url.parse(req.url).query
    const params = qs.parse(urlParsed).query

    let path = urlParsed.pathname
    try {
        switch (params.mod) {
            case 'get':
                    ddw.getter();
                    res.write("get OK")
                break;
            default:
                res.write("No module available")
        }
    }
    catch (err) {
        res.write("Server API Error: "+err)
    }
    res.end()
}
exports.restAPI = restAPI
