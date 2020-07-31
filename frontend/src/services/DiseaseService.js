import {apiUrl, postRequest} from "../utils/ajax";

export const updateDiseaseinNeo4j = (disease, callback) => {
    const url = apiUrl + `/AddDisease`;
    disease.id = "";
    console.log("audit dease", disease);
    postRequest(url, disease, callback);
};
