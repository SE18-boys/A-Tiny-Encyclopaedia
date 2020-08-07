import {apiUrl, postRequest} from "../utils/ajax";

export const getUnauditedEntry = (callback) => {
    const url = apiUrl + `/AllDiseaseUnaudit`;
    postRequest(url, "", callback);
};

export const getApprovedEntry = (callback) => {
    const url = apiUrl + `/AllDiseaseApproved`;
    postRequest(url, "", callback);
};

export const getDisapprovingEntry = (callback) => {
    const url = apiUrl + `/AllDiseaseDisapproving`;
    postRequest(url, "", callback);
};

export const disaproving = (id, reason ,callback) => {
    const url = apiUrl + `/SetAuditResult`;
    const data = {id: id, result: "未通过", reason: reason};
    postRequest(url, data, callback);
};
