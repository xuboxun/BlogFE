const mockData = require('./data');
const response = require('./response');

const homeApi = [
    {
        method: 'get',
        url: '/api/home/recent',
        handle: function (req, res) {
            let query = {
                size: req.query.size || 6 
            };
            let data = mockData.blogs;
            data.sort((a, b) => {
                return b.createTime - a.createTime;
            });
            data = data.slice(0, query.size);
            res.json(response({
                items: data,
                total: data.length
            }));
        }
    },
    {
        method: 'get',
        url: '/api/home/mostview',
        handle: function (req, res) {
            let data = mockData.blogs;
            data.sort((a, b) => {
                return b.createTime - a.createTime;
            });
            data = data.slice(0, 5);
            res.json(response({
                items: data,
                total: data.length
            }));
        }
    }
];

module.exports = homeApi;