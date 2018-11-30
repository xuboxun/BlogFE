import axios from 'axios';

const VersionApi = '/api/system/version';

export function getVersionList() {
    return axios.get(VersionApi);
}

export function createVersion(payload) {
    return axios.post({
        version: payload.version,
        description: payload.description
    });
}

export function updateVersion(payload) {
    return axios.post({
        id: payload.id,
        version: payload.version,
        description: payload.description
    });
}
