import config from 'config';
import {postRequest} from "../utils/ajax";



    const url = `${config.apiUrl}/SearchDetails`;
    postRequest(url, data, callback);
};
