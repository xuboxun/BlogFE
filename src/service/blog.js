import axios from 'axios';

const BlogListApi = '/api/blog/list';
const BlogDetailApi = '/api/blog/detail';

/*
* 获取博客列表
* params:
* */
export async function getBlogList(options) {
    const data = await axios.get(BlogListApi, {
        params: {
            type: options.type,
            pageNum: options.pageNum,
            pageSize: options.pageSize
        }
    });
    return data;
}

export async function getBlogDetail(name) {
    const data = await axios.get(BlogDetailApi, {
        params: {
            name: name
        }
    });
    return data;
}
