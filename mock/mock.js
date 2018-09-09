const techApi = require('./tech');
const tagApi = require('./tag');

let apis = [
    ...techApi,
    ...tagApi,
];


module.exports = function (app) {
    apis.forEach(api => {
        app[api.method](api.url, api.handle);
    });
};
