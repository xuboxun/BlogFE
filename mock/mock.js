const techApi = require('./tech');
const cultureApi = require('./culture');
const tagApi = require('./tag');
const serialApi = require('./serial');
const archivesApi = require('./archives');

let apis = [
    ...techApi,
    ...cultureApi,
    ...tagApi,
    ...serialApi,
    ...archivesApi,
];


module.exports = function (app) {
    apis.forEach(api => {
        app[api.method](api.url, api.handle);
    });
};
