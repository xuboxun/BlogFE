const homeApi = require('./home');
const techApi = require('./tech');
const cultureApi = require('./culture');
const tagApi = require('./tag');
const serialApi = require('./serial');
const archivesApi = require('./archives');
const systemApi = require('./system');
const adminAPi = require('./admin');

let apis = [
    ...homeApi,
    ...techApi,
    ...cultureApi,
    ...tagApi,
    ...serialApi,
    ...archivesApi,
    ...systemApi,
    ...adminAPi
];


module.exports = function (app) {
    apis.forEach(api => {
        app[api.method](api.url, api.handle);
    });
};
