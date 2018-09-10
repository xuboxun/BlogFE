const mockData = require('./data');
const response = require('./response');

const techApi = [
    {
        method: 'get',
        url: '/api/tech/list',
        handle: function (req, res) {
            let query = {
                page: req.query.page || 1,
                pageSize: req.query.pageSize || 10,
            };
            let allTechs = mockData.blogs.filter((item) => {
                return item.type === 'tech';
            });
            let techs = allTechs.filter((item, index) => {
                return index < query.page * query.pageSize &&
                        index >= (query.page - 1) * query.pageSize;
            });
            techs = techs.map(item => {
                return {
                    name: item.name,
                    title: item.title,
                    type: item.type,
                    tagNames: item.tagNames,
                    createTime: item.createTime
                };
            });
            res.json(response({
                items: techs,
                total: allTechs.length
            }));
        }
    },
    {
        method: 'get',
        url: '/api/tech/detail',
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

module.exports = techApi;
