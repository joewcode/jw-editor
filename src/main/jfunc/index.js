// --
const url = require('url')
const qs = require('qs')
let sqlite3 = require('sqlite3').verbose()
let db = new sqlite3.Database('database.db')
// function
const dbsender = require('./db').default
const dbchanger = require('./dbchanger').default
// Insert tables
dbsender.sendIsNotFound(db)
dbsender.sendTestData(db)

//
const restAPI = function(req, res, postData) {
    const urlParsed = url.parse(req.url, true)
//    const query = url.parse(req.url).query
    const params = qs.parse(urlParsed).query

    let path = urlParsed.pathname
    try {
        switch (params.mod) {
            case 'armlist':
                    let get = new dbchanger.armlist(db, {})
                    let json = get.getArmlist()
                    res.write(JSON.stringify(json))
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

db.close()


exports.restAPI = restAPI
