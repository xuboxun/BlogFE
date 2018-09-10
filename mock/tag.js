const mockData = require('./data');
const response = require('./response');

const tagApi = [
    {
        // 查找制定name的tag
        method: 'get',
        url: '/api/tag/detail',
        handle: function(req, res) {
            let query = {
                name: req.query.name
            };
            let blogs = mockData.blogs.filter(item => {
                return item.tagNames.indexOf(query.name) > -1;
            });
            blogs = blogs.map(item => {
                return {
                    name: item.name,
                    title: item.title,
                    type: item.type,
                    createTime: item.createTime,
                };
            });

            let tag = mockData.tags.find(item => {
                return item.name === query.name;
            });

            res.json(response({
                ...tag,
                blogs: blogs,
            }));
        }
    },
    {
        // 查找所有tag的基本信息
        method: 'get',
        url: '/api/tag/list',
        handle: function (req, res) {
            let tags = mockData.tags;
            tags = tags.map(item => {
                return {
                    name: item.name,
                    title: item.title
                };
            });
            res.json(response({
                items: tags,
                total: mockData.tags.length
            }));
        }
    },
];

module.exports = tagApi;
