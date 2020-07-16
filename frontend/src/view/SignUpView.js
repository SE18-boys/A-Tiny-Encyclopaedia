import React from "react";
import {Layout, message} from "antd";
import {HeaderInfo} from "../components/HeaderInfo";
import {SearchBar} from "../components/SearchBar";
import {withRouter} from "react-router-dom";
import LoginForm from "../components/LoginForm";
import {HomeHeaderInfo} from "../components/HomeHeaderInfo";
import RegisterForm from "../components/RegisterForm";
import MyFooter from "../components/MyFooter";
import {history} from "../utils/history";

const {Header, Content, Footer, Sider} = Layout;

class SignUpView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoginPage: true
        }
        // this.setState({isSignUpPage: true})
    }


    componentDidMount() {
        const user = JSON.parse(localStorage.getItem("user"));
        console.log("user info:", user);
        if (user !== null) {
            message.success("已经登录")
            if (history.location.pathname !== "/")
                history.push("/");
        }
    }

    handleChange = () => {

        //console.log("enter father handleChange")

        if (this.state.isLoginPage) {
            this.setState({isLoginPage: false});
            console.log("change to false")
        } else {
            this.setState({isLoginPage: true})
            console.log("change to true")
        }
    }

    signForm = () => {
        if (this.state.isLoginPage)
            return (<LoginForm handleChange={this.handleChange}/>)
        else
            return (<RegisterForm handleChange={this.handleChange}/>)
    }


    render() {
        return (
            <Layout>
                <Header style={{background: '#fff', padding: 0}}>
                    <HomeHeaderInfo/>
                </Header>
                <Layout style={{background: '#fff', padding: 0}}>
                    <Content style={{padding: '0 50px'}}>
                        <div className="sign-up-content">
                            {this.signForm()}
                        </div>
                    </Content>
                    <MyFooter/>
                </Layout>
            </Layout>

        );
    }
}

export default withRouter(SignUpView);
