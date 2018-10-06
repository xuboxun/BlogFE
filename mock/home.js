const mockData = require('./data');
const response = require('./response');

const homeApi = [

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