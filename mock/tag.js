import Mock from 'mockjs';
import mockData from './data';

const tagApi = [
    {
        method: 'get',
        url: '/api/tag/list',
        handle: function (req, res) {
            let data = {
                items: [],
                total: 0   
            };
            res.json(data);
        }
    },
    {
        method: 'get',
        url: 'api/tag/find',
        handle: function (req, res) {
            let query = [1, 2, 3];
            let data = query;
            res.json(data);
        }
    }
];

export default tagApi;
