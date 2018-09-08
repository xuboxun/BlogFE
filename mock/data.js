import Mock from 'mockjs';
const Random = Mock.Random;

const tagMock = Mock.mock({
    'tags|15-50': [
        Mock.mock({
            name: Random.word(),
            title: Random.cword(3, 7)
        })
    ]
});


let techMock = Mock.mock({
    'tech': [{
        id: 1,
        name: '',
        title: '',
        content: '',
        tagsName: [],
        createTime: Random.date('T')

    }],
});


export default {
    ...tagMock,
    ...techMock,
};
