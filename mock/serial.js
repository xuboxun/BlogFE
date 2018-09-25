const mockData = require('./data');
const response = require('./response');

const serialApi = [
    {
        method: 'get',
        url: '/api/serial/list',
        handle: function (req, res) {
            let serials = mockData.serials;
            res.json(response({
                items: serials,
                total: serials.length
            }));
        }
    },
    {
        method: 'get',
        url: '/api/serial/detail',
        handle: function (req, res) {
            let query = {
                name: req.query.name
            };
            let serial = mockData.serials.find((item) => {
                return item.name === query.name;
            });
            res.json(response({
                ...serial
            }));
        }
    },
    {
        method: 'get',
        url: '/api/serial/blogs',
        handle: function (req, res) {
            let query = {
                name: req.query.name
            };
            let blogs = mockData.blogs.filter(item => {
                return item.serialName = query.name;
            });
            blogs = blogs.map(item => {
                return {
                    name: item.name,
                    title: item.title,
                    type: item.type,
                    createTime: item.createTime,
                };
            });
            res.json(response({
                items: blogs,
                total: blogs.length
            }));
        }
    },
    {
        method: 'get',
        url: '/api/serial/recent',
        handle: function(req, res) {
            let blogs = mockData.blogs.filter(item => {
                return item.type === 'serial';
            });
            let group = {};
            blogs.forEach(blog => {
                group[blog.serialName] ? group[blog.serialName].push(blog) : group[blog.serialName] = [blog];
            });
            for (let serialName in group) {
                group[serialName].sort((a, b) => {
                    return b.createTime - a.createTime;
                });
                group[serialName] = group[serialName][0];
            }
            res.json(response({
                ...group
            }));
        }
    }
];

module.exports = serialApi;
