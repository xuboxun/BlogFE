import axios from 'axios';

const SerialListApi = '/api/serial/list';

export async function getSerialList() {
    const res = await axios.get(SerialListApi);
    return res;
}