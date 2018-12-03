const
Handlebars          = require('handlebars/runtime'),
componentHelper     = require('./component'),
jsonStringifyHelper = require('./json-stringify')

Handlebars.registerHelper('jsonStringify', jsonStringifyHelper)
Handlebars.registerHelper('component', componentHelper)

module.exports = Handlebars
