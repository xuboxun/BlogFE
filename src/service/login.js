import axios from 'axios';

const AdminLoginApi = '/api/admin/login';

export async function adminLogin() {
    const res = await axios.post(AdminLoginApi, {

    });
    return res;
}