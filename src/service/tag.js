import axios from 'axios';

const TagListApi = '/api/tag/list';
const TagDetailApi = '/api/tag/detail';


export async function getTagList() {
    const res = await axios.get(TagListApi);
    return res;
}

export async function getTagDetail() {
    const res = await axios.get(TagDetailApi);
    return res;
}