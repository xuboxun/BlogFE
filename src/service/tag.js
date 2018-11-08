import axios from 'axios';

const TagListApi = '/api/tag/list';
const TagDetailApi = '/api/tag/detail';


export async function getTagList() {
    return axios.get(TagListApi);
}

export async function getTagDetail(name) {
    return axios.get(TagDetailApi, {
        params: {
            name: name
        }
    });
}