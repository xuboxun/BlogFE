import axios from 'axios';

const SerialListApi = '/api/serial/list';
const SerialDetailApi = '/api/serial/detail';
const SerialAddApi = '/api/serial/add';
const SerialEditApi = '/api/serial/edit';
const SerialCheckExistApi = '/api/serial/checkExist';

export function getSerialList() {
    return axios.get(SerialListApi);
}

export function getSerialDetail(name) {
    return axios.get(SerialDetailApi, {
        params: {
            name: name
        }
    });
}

export function createSerial(payload) {
    return axios.post(SerialAddApi, {
        title: payload.title,
        name: payload.name,
        description: payload.description
    });
}

export function updateSerial(payload) {
    return axios.post(SerialEditApi, {
        id: payload.id,
        title: payload.title,
        name: payload.name,
        description: payload.description
    });
}


export async function checkSerialExist(payload) {
    return await axios.get(SerialCheckExistApi, {
        params: {
            name: payload.name,
            title: payload.title
        }
    });
}