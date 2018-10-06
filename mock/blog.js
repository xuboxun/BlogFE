const mockData = require('./data');
const response = require('./response');

const blogApi = [
    {
        method: 'get',
        url: '/api/blog/list',
        handle: function (req, res) {
            let query = {
                pageNum: req.query.pageNum || 1,
                pageSize: req.query.pageSize || 10,
                type: req.query.type || 'all',
            };
            let typeBlogs = query.type === 'all'
                ? mockData.blogs
                : mockData.blogs.filter((item) => {
                    return item.type === query.type;
                });
            typeBlogs.sort((a, b) => {
                return b.createTime - a.createTime;
            });
            let blogs = typeBlogs.filter((item, index) => {
                return index < query.pageNum * query.pageSize &&
                        index >= (query.pageNum - 1) * query.pageSize;
            });
            blogs = blogs.map(item => {
                return {
                    name: item.name,
                    title: item.title,
                    type: item.type,
                    tagNames: item.tagNames,
                    createTime: item.createTime
                };
            });
            res.json(response({
                items: blogs,
                total: typeBlogs.length
            }));
        }
    },
    {
        method: 'get',
        url: '/api/blog/detail',
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
    {
        method: 'get',
        url: '/api/blog/recent',
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
];

module.exports = blogApi;
