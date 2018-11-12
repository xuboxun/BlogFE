import axios from 'axios';

const BlogListApi = '/api/blog/list';
const BlogDetailApi = '/api/blog/detail';
const BlogAddApi = '/api/blog/add';

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

export function addBlog(payload) {
    return axios.post(BlogAddApi, {
        title: payload.title,
        name: payload.name,
        content: payload.content,
        type: payload.type,
        tagIds: payload.type === 'serial' ? undefined : payload.tagIds,
        serialId: payload.type === 'serial' ? payload.serialId : undefined
    });
}
