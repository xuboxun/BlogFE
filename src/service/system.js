import axios from 'axios';

const VersionApi = '/api/system/version';

export function getVersionList() {
    return axios.get(VersionApi);
}
