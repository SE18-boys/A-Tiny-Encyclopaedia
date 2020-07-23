import React from 'react';
import { Row, Col, Input } from 'antd';
import '../css/index.css'
import {AdminAvatar} from "./AdminAvatar";

const {Search} = Input;

export class HomeHeaderInfo extends React.Component {

    render(){
        // const user = JSON.parse(localStorage.getItem("user"));
        // console.log("user info:",user);
        return(
            <div id="header">
                <div id="header-content" >
                    <Row>
                        <Col xs={24} sm={24} md={5} lg={5} xl={5} xxl={4}>
                        </Col>
                        <Col xs={0} sm={0} md={19} lg={19} xl={19} xxl={20}>
                             <AdminAvatar/>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
