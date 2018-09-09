const mockData = require('./data');
const response = require('./response');

const tagApi = [
    {
        method: 'get',
        url: '/api/tag/list',
        handle: function (req, res) {            
            res.json(response({
                items: mockData.tags,
                total: mockData.tags.length
            }));
        }
    },
    {
        method: 'get',
        url: '/api/tag/find',
        handle: function (req, res) {
            let query = {
                name: req.query.name.split(',')
            };
            let find = mockData.tags.filter(item => {
                return query.name.find(name => {
                    return name === item.name;
                });
            });
            res.json(response({
                items: find,
                total: find.length
            }));
        }
    }
];

module.exports = tagApi;
