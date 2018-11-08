import axios from 'axios';

const SerialListApi = '/api/serial/list';
const SerialDetailApi = '/api/serial/detail';

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