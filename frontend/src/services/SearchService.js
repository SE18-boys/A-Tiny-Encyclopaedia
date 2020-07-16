// import config from 'config';
import {postRequest} from "../utils/ajax";
import {history} from "../utils/history";
import {message} from "antd";


export const searchDetails = (data) => {
    const url = `http://localhost:8080/DiseaseByName`;
    const callback = (data) => {
        // if(data.status >= 0) {
            console.log('Received backend data: ', data);
            // message.success(data.msg);
            // message.error(data.msg);
        // }
    };
    postRequest(url, data, callback);
};
