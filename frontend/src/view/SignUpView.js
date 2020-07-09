import React from "react";
import {Layout} from "antd";
import {HeaderInfo} from "../components/HeaderInfo";
import {SearchBar} from "../components/SearchBar";
import {withRouter} from "react-router-dom";
import LoginForm from "../components/LoginForm";
import {HomeHeaderInfo} from "../components/HomeHeaderInfo";
import RegisterForm from "../components/RegisterForm";

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
        // const user = JSON.parse(localStorage.getItem("user"));
        // console.log("user info:",user);
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
            return (<LoginForm  handleChange={this.handleChange}/>)
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
                    <Footer style={{textAlign: 'center', background: '#fff', padding: 0}}>
                        copyright@2020 SE18boys
                    </Footer>
                </Layout>
            </Layout>

        );
    }
}

export default withRouter(SignUpView);
