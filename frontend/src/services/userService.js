// import config from 'config';
import {postRequest, putRequest} from "../utils/ajax";
import {history} from '../utils/history';
import {message} from 'antd';

export const register = (data) => {
    const url = `http://localhost:8080/register`;
    const callback = (data) => {
        if(data.status >= 0) {
            console.log('Received backend data: ', data);
            history.push("/login");
            message.success(data.msg);
        }
        else{
            console.log('Received backend data: ', data);
            message.error(data.msg);
        }
    };
    postRequest(url, data, callback);
};

export const login = (data) => {
    const url = `http://localhost:8080/login`;
    const callback = (data) => {
        if(data.status >= 0) {
            localStorage.setItem('user', JSON.stringify(data.data));
            history.push("/");
            message.success(data.msg);
        }
        else{
            message.error(data.msg);
        }
    };
    postRequest(url, data, callback);
};

export const getUsers = (data,callback) => {
    const url = `http://localhost:8080/getUsers`;
    postRequest(url, data, callback);
};

// export const uploadAvatar = (userId, iconBase64, message) => {
//     const data = {userId:userId,iconBase64:iconBase64};
//     const url = `${config.apiUrl}/uploadAvatar`;
//     putRequest(url, data, message);
// }
//
// export const logout = () => {
//     const url = `${config.apiUrl}/logout`;
//
//     const callback = (data) => {
//         if(data.status >= 0) {
//             localStorage.removeItem("user");
//             history.push("/login");
//             message.success(data.msg);
//         }
//         else{
//             message.error(data.msg);
//         }
//     };
//     postRequest(url, {}, callback);
// };
//
// export const checkSession = (callback) => {
//     const url = `${config.apiUrl}/checkSession`;
//     postRequest(url, {}, callback);
// };

