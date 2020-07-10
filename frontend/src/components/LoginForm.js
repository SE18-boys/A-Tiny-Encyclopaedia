import {Form, Input, Button, Checkbox} from 'antd';
import {UserOutlined, LockOutlined} from '@ant-design/icons';
import React from "react";
import '../css/signUp.css'
import logo from "../assets/logo1.png";
import {history} from "../utils/history";
import * as userService from '../services/userService'

export default class LoginForm extends React.Component {

    onFinish = (values) => {
        console.log('Received values of form: ', values);
        userService.login(values);
    };
    handleChange = () => {
        this.props.handleChange();
        console.log("enter handleChange")
    }
    backToHome=()=>
    {
        history.push("/")
    }

    render() {
        return (
            <div>

                <div align="center">
                <a >
                    <img alt="logo" src={logo} onClick={this.backToHome}
                         style={{textAlign: 'center', background: '#fff', padding: 0, height: 150, marginTop: 150}}/>
                </a>
                </div>
                <Form
                    name="normal_login"
                    className="sign-up-form"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                >
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: '请输入用户名!',
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码!',
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined className="site-form-item-icon"/>}
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Form.Item name="remember" valuePropName="checked" noStyle>
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <a className="login-form-forgot" href="">
                            忘记密码？
                        </a>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{width: "100%"}}>
                            登录
                        </Button>
                        或 <a onClick={this.handleChange}>现在注册!</a>
                    </Form.Item>
                </Form>
            </div>
        );
    }
};


