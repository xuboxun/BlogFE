import axios from 'axios';

const AdminAuthenticationApi = '/api/admin/authentication';
const AdminLoginApi = '/api/admin/login';
const AdminLogoutApi = '/api/admin/logout';
const getCaptureCodeSVG = '/api/getCapture';

export function authentication() {
    return axios.get(AdminAuthenticationApi);
}

export function adminLogin(payload) {
    return axios.post(AdminLoginApi, {
        account: payload.account,
        password: payload.password,
        code: payload.code
    });
}

export function adminLogout() {
    return axios.get(AdminLogoutApi);
}

export function getCapture() {
    return axios.get(getCaptureCodeSVG);
}