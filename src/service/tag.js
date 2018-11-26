import axios from 'axios';

const TagListApi = '/api/tag/list';
const TagDetailApi = '/api/tag/detail';
const TagAddApi = '/api/tag/add';
const TagEditApi = '/api/tag/edit';
const TagCheckExistApi = '/api/tag/checkExist';


export function getTagList() {
    return axios.get(TagListApi);
}

export function getTagDetail(name) {
    return axios.get(TagDetailApi, {
        params: {
            name: name
        }
    });
}

export function createTag(payload) {
    return axios.post(TagAddApi, {
        title: payload.title,
        name: payload.name,
        description: payload.description
    });
}

export function updateTag(payload) {
    return axios.post(TagEditApi, {
        id: payload.id,
        title: payload.title,
        name: payload.name,
        description: payload.description
    });
}

export async function checkTagExist(payload) {
    return await axios.get(TagCheckExistApi, {
        params: {
            name: payload.name,
            title: payload.title
        }
    });
}