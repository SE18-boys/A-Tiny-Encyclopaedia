import React from 'react'
import {postRequest, putRequest} from "../../src/utils/ajax";
global.fetch = require('node-fetch');


jest.setTimeout(30000);

test('should return data when fetchData request success',  done => {
    const data={
        username: "mikeshaw",
        password: "123456",
    };
    const url = `http://localhost:8080/loginmessage`;
    const callback = (data) => {
        //console.info(`返回的data：`+JSON.stringify(data.data));
        //换环境时调用此测试请将以下expect中信息改为本地数据库中存在的信息
        expect(data.data).toEqual({
            "email":"1481796592@qq.com",
            "id":1,
            "role": "ROLE_ADMIN",
            "password":"123456",
            "username":"mikeshaw"
        })
        done();
    };
    return postRequest(url, data, callback);
})

//fail test
test('should return data when fetchData request success',  done => {
    const data={
        username: "userNotExist",
        password: "123456",
    };
    const url = `http://localhost:8080/loginmessage`;
    const callback = (data) => {
        console.info(`返回的data：`+JSON.stringify(data));
        //换环境时调用此测试请将以下expect中信息改为本地数据库中存在的信息
        expect(data.data).toEqual(null)
        done();
    };
    return postRequest(url, data, callback);
})

test('should return data when fetchData request success',  done => {
    const data={
        username: "mikeshaw",
        password: "123456",
    };
    const url = `http://localhost:8080/loginmessage`;
    const callback = (data) => {
        console.info(`回调成功`);
        done();
    };
    putRequest(url, data, callback);
})
