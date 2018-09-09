const Mock = require('mockjs');
const Random = Mock.Random;

const tagMock = Mock.mock({
    'tags|20-50': [{
        name: '@word',
        title: '@cword(3, 7)'
    }]
});

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


let techMock = Mock.mock({
    'techs|20-50': [{
        name: '@word(10, 20)',
        title: '@ctitle(5, 20)',
        content: '@cparagraph(10, 20)',
        tagNames: getRandomTagName,
        createTime: getTimeStamp
    }]
});

let cultureMock = Mock.mock({
    'cultures|20-50': [{
        name: '@word(10, 20)',
        title: '@ctitle(5, 20)',
        content: '@cparagraph(10, 20)',
        tagNames: getRandomTagName,
        createTime: getTimeStamp
    }]
});


module.exports = {
    ...tagMock,
    ...techMock,
    ...cultureMock,
};
