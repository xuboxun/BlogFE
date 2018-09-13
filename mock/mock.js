const techApi = require('./tech');
const tagApi = require('./tag');
const archivesApi = require('./archives');

let apis = [
    ...techApi,
    ...tagApi,
    ...archivesApi,
];


module.exports = function (app) {
    apis.forEach(api => {
        app[api.method](api.url, api.handle);
    });
};
