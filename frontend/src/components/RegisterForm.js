import React, {useState} from 'react';
import {
    Form,
    Input,
    Tooltip,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
} from 'antd';
import {QuestionCircleOutlined} from '@ant-design/icons';
import logo from "../assets/logo1.png";
import '../css/signUp.css'
import {history} from "../utils/history";
import {withRouter} from "react-router";
// import {register} from "../services/userService";


const {Option} = Select;
const AutoCompleteOption = AutoComplete.Option;

const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 8,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 16,
        },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 16,
            offset: 8,
        },
    },
};

class RegisterForm extends React.Component {


    // const [form] = Form.useForm();

    onFinish = values => {
        console.log('Received values of form: ', values);
        // register(values);

    };

    handleChange = () => {
        this.props.handleChange();
        console.log("enter handleChange")
    }

    backToHome = () => {
        history.push("/");
    }

    // onClickRegister=()

    // const [autoCompleteResult, setAutoCompleteResult] = useState([]);


    render() {
        return (
            <div>
                <div align="center">
                    <a>
                        <img alt="logo" src={logo} onClick={this.backToHome}
                             style={{
                                 textAlign: 'center',
                                 background: '#fff',
                                 padding: 0,
                                 height: 150,
                                 marginTop: 150
                             }}/>
                    </a>
                </div>
                <Form
                    //{...formItemLayout}
                    // form={form}
                    className="sign-up-form"
                    name="signIn"
                    onFinish={this.onFinish}
                    scrollToFirstError
                >
                    <Form.Item
                        name="email"
                        // label="E-mail"
                        rules={[
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ]}
                    >
                        <Input placeholder="Email"/>
                    </Form.Item>
                    <Form.Item
                        name="username"
                        //           label={
                        //               <span>
                        //   Username&nbsp;
                        //                   <Tooltip title="What do you want others to call you?">
                        //     <QuestionCircleOutlined/>
                        //   </Tooltip>
                        // </span>
                        //           }
                        rules={[
                            {
                                required: true,
                                message: 'Please input your Username!',
                                whitespace: true,
                            },
                        ]}
                    >
                        <Input placeholder="Username"/>
                    </Form.Item>

                    <Form.Item
                        name="password"
                        // label="Password"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your password!',
                            },
                        ]}
                        hasFeedback
                    >
                        <Input.Password placeholder="Password"/>
                    </Form.Item>

                    <Form.Item
                        name="confirm"
                        // label="Confirm Password"
                        dependencies={['password']}
                        hasFeedback
                        // rules={[
                        //     {
                        //         required: true,
                        //         message: 'Please confirm your password!',
                        //     },
                        //     ({getFieldValue}) => ({
                        //         validator(rule, value) {
                        //             if (!value || getFieldValue('password') === value) {
                        //                 return Promise.resolve();
                        //             }
                        //
                        //             return Promise.reject('The two passwords that you entered do not match!');
                        //         },
                        //     }),
                        // ]}
                    >
                        <Input.Password placeholder="Confirm Password"/>
                    </Form.Item>


                    {/*<Form.Item label="Captcha" extra="We must make sure that your are a human.">*/}
                    {/*    <Row gutter={8}>*/}
                    {/*        <Col span={12}>*/}
                    {/*            <Form.Item*/}
                    {/*                name="captcha"*/}
                    {/*                noStyle*/}
                    {/*                rules={[*/}
                    {/*                    {*/}
                    {/*                        required: true,*/}
                    {/*                        message: 'Please input the captcha you got!',*/}
                    {/*                    },*/}
                    {/*                ]}*/}
                    {/*            >*/}
                    {/*                <Input/>*/}
                    {/*            </Form.Item>*/}
                    {/*        </Col>*/}
                    {/*        <Col span={12}>*/}
                    {/*            <Button>Get captcha</Button>*/}
                    {/*        </Col>*/}
                    {/*    </Row>*/}
                    {/*</Form.Item>*/}


                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="login-form-button" style={{width: "100%"}} >
                            注册
                        </Button>
                        已有账号 <a onClick={this.handleChange}>立刻登录!</a>
                    </Form.Item>
                </Form>
            </div>
        );
    }

};

export default withRouter(RegisterForm);

// export default useRouter()
