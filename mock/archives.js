const mockData = require('./data');
const response = require('./response');

const archivesApi = [
    {
        method: 'get',
        url: '/api/archives',
        handle: function (req, res) {
            let data = mockData.blogs;
            data = data.map(item => {
                return {
                    name: item.name,
                    title: item.title,
                    type: item.type,
                    tagNames: item.tagNames,
                    createTime: item.createTime,
                };
            });

            res.json(response({
                items: data,
                total: data.length
            }));
        }
    },
];

module.exports = archivesApi;