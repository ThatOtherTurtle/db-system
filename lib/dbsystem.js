const Sequelize = require('sequelize');

const dbsystem = {
    Sequelize,
    mainpath: '',
    main: new Sequelize({
        dialect: 'sqlite',
        storage: this.dbmainpath,
    }),
    STRING: Sequelize.STRING,
    INTEGER: Sequelize.INTEGER,
    model: require('./model/model'),
    Collection: require('collections/multi-map'),
}

module.exports = dbsystem;