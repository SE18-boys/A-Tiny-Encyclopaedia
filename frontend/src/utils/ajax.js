import {message} from 'antd';
import {history} from "./history";


// 后端的url
export const apiUrl='http://localhost:8080';
// 139.196.200.26

let deleteRequest = (url, json, callback) => {
    let opts = {
        method: "DELETE",
        body: JSON.stringify(json),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "include"
    };
    fetch(url,opts)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            callback(false);
            console.log(error);
        });
};

let putRequest = (url, json, callback) => {

    console.log("data is   ", json);
    let opts = {
        method: "POST",
        body: JSON.stringify(json),
        headers: {
            'Content-Type': 'application/json'
        },
        credentials: "include"
    };
    console.log("json is   " ,json);
    fetch(url,opts)
        .then((response) => {
            return response.json()
        })
        .then(() => {
            callback("success");
        })
        .catch((error) => {
            callback("fail");
            console.log(error);
        });
};

let postRequest_v3 = (url, json, callback) => {

    let opts = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        credentials: "include"
    };

    fetch(url,opts)
        .then((response) => {
            // if(response) {
            console.log(response);
            callback(json);
            //return response.json()
        })

};

let postRequest_v2 = (url, data, callback) => {
    let formData = new FormData();

    for (let p in data){
        if(data.hasOwnProperty(p))
            formData.append(p, data[p]);
    }

    let opts = {
        method: "POST",
        body: formData,
        credentials: "include"
    };

    fetch(url,opts)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
           console.log(error);
        });
};

let postRequest = (url, json, callback) => {

    let opts = {
        method: "POST",
        body: JSON.stringify(json),
        // body: json,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        credentials: "include"
    };

    fetch(url,opts)
        .then((response) => {
            // if(response) {
                if(response.status === 403){
                    var error = new Error("403 Forbidden!");
                    error.response = response;
                    throw error
                }
                return response.json()
            // }
            // else{
                // console.log("empty")
            // }
            // console.log(response.json())
        })
        .then((data) => {
            callback(data);
        })
        .catch((error) => {
            console.log(error);
            message.error("您没有权限！");
            history.push("/");
        });
};

export {postRequest,postRequest_v2,postRequest_v3, putRequest, deleteRequest};
