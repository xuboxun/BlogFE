const mockData = require('./data');
const response = require('./response');

const systemApi = [
    {
        method: 'get',
        url: '/api/system/version',
        handle: function (req, res) {
            let versions = mockData.versions;
            res.json(response({
                items: versions,
                total: versions.length
            }));
        }
    },
];

module.exports = systemApi;
