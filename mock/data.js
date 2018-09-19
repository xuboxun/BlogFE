const Mock = require('mockjs');
const Random = Mock.Random;

const getRandomType = function() {
    const types = ['tech', 'culture', 'serial'];
    let index = Math.floor(Math.random() * 3);
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

const getRandomSerialName = function() {
    const max = serialMock.serials.length - 1;
    return serialMock.serials[Random.integer(0, max)].name;
};

// 生成时间戳number
const getTimeStamp = function(range) {
    if (range) {
        const start = new Date('2016-01-01');
        const end = new Date('2018-12-31');
        return Random.integer(+start, +end);
    } else {
        return +Random.date('T');
    }
};



// --------------------------------------------------

const tagMock = Mock.mock({
    'tags|5-15': [{
        name: '@word',
        title: '@cword(3, 7)',
        intro: '@cparagraph(20, 50)',
        createTime: () => getTimeStamp(true)
    }]
});

let serialMock = Mock.mock({
    'serials|1-10': [{
        name: '@word(10, 20)',
        title: '@ctitle(5, 15)',
        intro: '@cparagraph(10, 30)',
        createTime: () => getTimeStamp(true)
    }]
});


let blogMock = Mock.mock({
    'blogs|50-100': [{
        name: '@word(10, 20)',
        title: '@ctitle(5, 20)',
        type: getRandomType,
        content: '@cparagraph(10, 20)',
        tagNames: getRandomTagName,
        serialName: getRandomSerialName,
        createTime: () => getTimeStamp(true)
    }]
});

module.exports = {
    ...tagMock,
    ...serialMock,
    ...blogMock,
};
