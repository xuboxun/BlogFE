const Mock = require('mockjs');
const Random = Mock.Random;

const getRandomType = function() {
    const types = ['techList', 'culture'];
    let index = Math.random() > 0.5 ? 1 : 0;
    return types[index];
};

const getRandomTagName = function() {
    let count = Random.integer(1, 5);
    let tagNames = [];

    const max = tagMock.tags.length - 1;
    for (let i = 0; i < count; i++) {
        tagNames.push(tagMock.tags[Random.integer(0, max)].name);
    }
    return tagNames;
};

// 生成时间戳number
const getTimeStamp = function() {
    return +Random.date('T');
};




const tagMock = Mock.mock({
    'tags|5-15': [{
        name: '@word',
        title: '@cword(3, 7)',
        intro: '@cparagraph(20, 50)',
        createTime: getTimeStamp
    }]
});


let blogMock = Mock.mock({
    'blogs|50-100': [{
        name: '@word(10, 20)',
        title: '@ctitle(5, 20)',
        type: getRandomType,
        content: '@cparagraph(10, 20)',
        tagNames: getRandomTagName,
        createTime: getTimeStamp
    }]
});

module.exports = {
    ...tagMock,
    ...blogMock,
};
