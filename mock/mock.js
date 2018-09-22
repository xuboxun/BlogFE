const techApi = require('./tech');
const cultureApi = require('./culture');
const tagApi = require('./tag');
const serialApi = require('./serial');
const archivesApi = require('./archives');
const systemApi = require('./system');

let apis = [
    ...techApi,
    ...cultureApi,
    ...tagApi,
    ...serialApi,
    ...archivesApi,
    ...systemApi,
];


module.exports = function (app) {
    apis.forEach(api => {
        app[api.method](api.url, api.handle);
    });
};
