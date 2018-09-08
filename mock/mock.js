import techApi from './tech';
import tagApi from './tag';

let apis = [
    ...techApi,
    ...tagApi,
];


module.exports = function (app) {
    apis.forEach(api => {
        app[api.method](api.url, api.handle);
    });
};
