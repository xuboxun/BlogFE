import axios from 'axios';

const BlogListApi = '/api/blog/list';
const BlogDetailApi = '/api/blog/detail';

/*
* 获取博客列表
* params:
* */
export function getBlogList(options) {
    return axios.get(BlogListApi, {
        params: {
            type: options.type,
            pageNum: options.pageNum,
            pageSize: options.pageSize
        }
    });
}

export function getBlogDetail(name) {
    return axios.get(BlogDetailApi, {
        params: {
            name: name
        }
    });
}
