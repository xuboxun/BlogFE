const mockData = require('./data');
const response = require('./response');

const adminAPi = [
    {
        method: 'get',
        url: '/api/admin/blog/list',
        handle: function (req, res) {
            let query = {
                pageNum: req.query.pageNum || 1,
                pageSize: req.query.pageSize || 10,
            };
            let AllBlogs = [].concat([], mockData.blogs);
            AllBlogs.sort((a, b) => {
                return b.createTime - a.createTime;
            });
            let blogs = AllBlogs.filter((item, index) => {
                return index < query.pageNum * query.pageSize &&
                    index >= (query.pageNum - 1) * query.pageSize;
            });
            blogs = blogs.map(blog => {
                return {
                    name: blog.name,
                    title: blog.title,
                    type: blog.type,
                    createTime: blog.createTime,
                };
            });
            res.json(response({
                items: blogs,
                total: AllBlogs.length
            }));
        }
    },
];

module.exports = adminAPi;
