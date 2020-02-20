const dbsystem = require('../dbsystem');
const fs = require('fs');
const Sequelize = require('sequelize');

function define (database, storageDirectory, modelDirectory) {
    fs.mkdirSync(storageDirectory);
    fs.writeFileSync(`${storageDirectory}/${database}.js`, 
        `const database = new Sequelize({
            dialect: 'sqlite',
            storage: storageDirectory,
        });
        
        module.exports = database;`
    )
    newDB = require(`${storageDirectory}/${database}`);
    newDB.modelDirectory = modelDirectory;
    return newDB;
}
function sync (database) {
    database.sync();
}

const databaseModel = {
    define: define(database, storageDirectory, modelDirectory),
    sync: sync(database),
}

module.exports = databaseModel;