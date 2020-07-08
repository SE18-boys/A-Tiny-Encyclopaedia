import config from 'config';
import {postRequest} from "../utils/ajax";


export const searchDetails = (data, callback) => {
    const url = `${config.apiUrl}/SearchDetails`;
    postRequest(url, data, callback);
};
