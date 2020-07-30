import {apiUrl, postRequest} from "../utils/ajax";

export const getUnauditedEntry = (callback) => {
    const url = apiUrl + `/AllDiseaseUnauditByName`;
    postRequest(url, "", callback);
};
