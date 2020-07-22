import React from 'react';
import {Avatar, Dropdown, Menu,Button} from 'antd';
import '../css/index.css'
import {
    SettingFilled,
} from '@ant-design/icons';
import {withRouter} from "react-router-dom";
import {history} from "../utils/history";
import * as userService from '../services/userService'

export class AdminAvatar extends React.Component {

    state = {
        isSignIn: false,
        username: null,
    }

    componentDidMount() {
        const user = JSON.parse(localStorage.getItem("user"));
        console.log("user info:", user);
        if (user !== null) {
            this.setState({username: user.name, isSignIn: true})
        }
    }

    onClickSignUp = () => {
        if (history.location.pathname !== "/SignUp")
            history.push("/SignUp")
    }

    signUpInfo = () => {
        if (this.state.isSignIn)
            return (
                <span className="name">Hi,{this.state.username}</span>
            )
        else
            return (
                <span className="name" onClick={this.onClickSignUp}><a>登录</a></span>
            )

    }
    handleAdd = () => {

        if (history.location.pathname !== "/AddEntry")
            history.push("/AddEntry")
    }

    showProfile = () => {
        if (history.location.pathname !== "/Profile")
            history.push("/Profile")
    }

    render() {

        const menu = (
            <Menu>
                <Menu.Item>
                    <a onClick={this.showProfile}>
                        Show Profile
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="#" onClick={userService.logout}>
                        Log Out
                    </a>
                </Menu.Item>
            </Menu>
        );

        // const {user} = this.props;


        return (
            <div id="avatar">
                <span style={{padding: "10px"}}>
                    <Button onClick={this.handleAdd}>创建词条</Button>
                </span>
                <span className="name">{this.signUpInfo()}</span>
                <Dropdown overlay={menu} placement="bottomRight">
                    {/*<Avatar src={user.userIcon.iconBase64} style={{cursor:"pointer"}}/>*/}
                    <SettingFilled/>
                </Dropdown>
            </div>
        );
    }
}

export default withRouter(AdminAvatar);
