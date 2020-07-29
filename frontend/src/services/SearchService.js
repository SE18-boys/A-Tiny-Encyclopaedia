// import config from 'config';
import {postRequest} from "../utils/ajax";
import {history} from "../utils/history";
import {message} from "antd";
import {apiUrl} from '../utils/ajax'



export const searchDetails = (data,callback) => {
    const url = apiUrl+`/DiseaseByName`;
    // const callback = (data) => {
        // if(data.status >= 0) {
        //     console.log('Received backend data: ', data);
            // message.success(data.msg);
            // message.error(data.msg);
        // }
    // };
    postRequest(url, data, callback);
};
export const searchAccurate = (data,callback) => {
    const url = apiUrl+`/DiseaseByAccurateName`;
    // const callback = (data) => {
    // if(data.status >= 0) {
    //     console.log('Received backend data: ', data);
    // message.success(data.msg);
    // message.error(data.msg);
    // }
    // };
    postRequest(url, data, callback);
};

export const addSimpleDetails = (data) => {
    const url = apiUrl+`/AddDisease`;
    const callback = (data) => {
        console.log('Received backend data: ', data);
    };
    postRequest(url, data, callback);
};


export const updateDetails = (data) => {
    const url = apiUrl+`/AddDisease`;
    const callback = (data) => {
        console.log('Received backend data: ', data);
    };
    postRequest(url, data, callback);
};
