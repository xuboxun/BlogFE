const mockData = require('./data');
const response = require('./response');

const cultureApi = [
    {
        method: 'get',
        url: '/api/culture/list',
        handle: function (req, res) {
            let query = {
                page: req.query.page || 1,
                pageSize: req.query.pageSize || 10,
            };
            let blogs = mockData.blogs.filter((item) => {
                return item.type === 'culture';
            });
            let cultures = blogs.filter((item, index) => {
                return index < query.page * query.pageSize &&
                        index >= (query.page - 1) * query.pageSize;
            });
            cultures = cultures.map(item => {
                return {
                    name: item.name,
                    title: item.title,
                    type: item.type,
                    tagNames: item.tagNames,
                    createTime: item.createTime
                };
            });
            res.json(response({
                items: cultures,
                total: blogs.length
            }));
        }
    },
    {
        method: 'get',
        url: '/api/culture/detail',
        handle: function(req, res) {
            let query = {
                name: req.query.name
            };
            let data = mockData.blogs.find(item => {
                return item.name = query.name;
            });
            res.json((response(data)));
        }
    },
];

module.exports = cultureApi;
