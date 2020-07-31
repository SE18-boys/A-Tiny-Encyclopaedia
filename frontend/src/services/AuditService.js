import {apiUrl, postRequest} from "../utils/ajax";

export const getUnauditedEntry = (callback) => {
    const url = apiUrl + `/AllDiseaseUnaudit`;
    postRequest(url, "", callback);
};

export const disaproving = (id, reason ,callback) => {
    const url = apiUrl + `/SetAuditResult`;
    const data = {id: id, result: "未通过", reason: reason};
    postRequest(url, data, callback);
};
