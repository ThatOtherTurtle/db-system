const dbsystem = require('../dbsystem');

function define (database, name, attributes) {
    database.define(name, attributes)
}
function sync (database, name) {
    database.name.sync()
}

const tableModel = {
    define: define(database,name,attributes),
    sync: sync(database, name),
}

module.exports = tableModel;