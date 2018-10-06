import axios from 'axios';

const BlogListApi = '/api/blog/list';
const BlogDetailApi = '/api/blog/detail';

/*
* 获取博客列表
* params:
* */
export async function getBlogList() {
    const res = await axios.get(BlogListApi, {
        params: {

        }
    });
    return res;
}

export async function getBlogDetail() {
    const res = await axios.get(BlogDetailApi, {
        params: {

        }
    });
    return res;
}
