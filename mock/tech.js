import mockData from './data';

const techApi = [
    {
        method: 'get',
        url: '/api/tech/list',
        handle: function (req, res) {
            let data = [];
            res.json(data);
        }
    },
    {
        method: 'get',
        url: '/api/tech/detail',
        handle: function(req, res) {
            let data = {};
            res.json(data);
        }
    },
];

export default techApi;
