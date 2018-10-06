import axios from 'axios';

axios.interceptors.response.use(function (res) {
    let message = {};
    let data = res.data;

    if (data.code === 200) {
        return data.result;
    }

    if (data.code === 500) {
        message = {
            code: data.code,
            msg: data.msg
        };
    }
    return message;

}, function (err) {
    return Promise.reject(err);
});