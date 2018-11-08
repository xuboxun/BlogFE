import axios from 'axios';

const ArchivesApi = '/api/archives';

/*
* 获取博客列表
* params:
* */
export function getArchives(options) {
    return axios.get(ArchivesApi);
}
