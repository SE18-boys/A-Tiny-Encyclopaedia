import React from 'react';
import {Avatar, Dropdown, Menu, Button, message} from 'antd';
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
        user: [],
    }

    componentDidMount() {
        const user = JSON.parse(localStorage.getItem("user"));
        console.log("user info:", user);
        if (user !== null) {
            this.setState({username: user.username, user: user,isSignIn: true})
        }
    }

    onClickSignUp = () => {
        if (history.location.pathname !== "/SignUp")
            history.push("/SignUp")
    }

    signUpInfo = () => {
        if (this.state.isSignIn)
            return (
                <span className="name" id="username">Hi,{this.state.username}</span>
            )
        else
            return (
                <span className="name" onClick={this.onClickSignUp}><a id="signIn">登录</a></span>
            )

    }
    handleAdd = () => {

        if (history.location.pathname !== "/AddEntryDetail")
            history.push("/AddEntryDetail")
    }

    showProfile = () => {
        if (history.location.pathname !== "/Profile")
            history.push("/Profile")
    }

    callback = () => {
        this.setState({
            isSignIn: false,
            username: null,}
            );
        localStorage.removeItem("user");
        message.success("登出成功!");
        history.push("/");

    };

    logout = () => {
        userService.logout(this.callback());
    };

    render() {

        const menuitem = [];
        menuitem.push(
            <Menu.Item>
                <a onClick={this.showProfile}>
                    Show Profile
                </a>
            </Menu.Item>
        );
        menuitem.push(
            <Menu.Item>
                <a href="#" onClick={() => this.logout()}>
                    Log Out
                </a>
            </Menu.Item>
        );
        if(this.state.user.role === "ROLE_ADMIN"){
            menuitem.push(
                <Menu.Item>
                    <a href="/EntryAuditS" >
                        Entry Audit
                    </a>
                </Menu.Item>
            )
        }

        const menu = (
            <Menu>
                {menuitem}
            </Menu>
        );


        // const {user} = this.props;


        return (
            <div id="avatar">
                <span style={{padding: "10px"}}>
                    <Button onClick={this.handleAdd} id="add_entry">创建词条</Button>
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
