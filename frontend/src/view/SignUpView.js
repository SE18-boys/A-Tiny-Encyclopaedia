import React from "react";
import {Layout} from "antd";
import {HeaderInfo} from "../components/HeaderInfo";
import {SearchBar} from "../components/SearchBar";
import {withRouter} from "react-router-dom";
import SignUpForm from "../components/SignUpForm";
import SignInForm from "../components/SignInForm";

const {Header, Content, Footer, Sider} = Layout;

class SignUpView extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            isSignUpPage: true
        }
        // this.setState({isSignUpPage: true})
    }



    componentDidMount() {
    }

    handleChange = () => {

        console.log("enter father handleChange")

        if (this.state.isSignUpPage)
            this.setState({isSignUpPage: false})
        else
            this.setState({isSignUpPage: true})
    }

    signForm=()=>
    {
        if(this.state.isSignUpPage)
            return(<SignUpForm handleChange={this.handleChange} />)
        else
            return (<SignInForm/>)
    }


    render() {
        return (
            <Layout>
                <Header style={{background: '#fff', padding: 0}}>
                    <HeaderInfo/>
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
