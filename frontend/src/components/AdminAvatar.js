import React from 'react';
import { Avatar, Dropdown, Menu} from 'antd';
import '../css/index.css'
import {
    SettingFilled,
} from '@ant-design/icons';
import {withRouter} from "react-router-dom";
import {history} from "../utils/history";
export class AdminAvatar extends React.Component {

    state={
        isSignUp: false,
    }

    onClickSignUp=()=>history.push("/SignUp")

    signUpInfo=()=>
    {
        if(this.state.isSignUp)
            return(
                <span className="name">Hi,{localStorage.getItem("username")}</span>
            )
        else
            return (
                <span className="name" onClick={this.onClickSignUp}><a>登录</a></span>
            )

    }

    render() {

        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
                        Show Profile
                    </a>
                </Menu.Item>
                <Menu.Item>
                    <a href="#" >
                        Log Out
                    </a>
                </Menu.Item>
            </Menu>
        );

        // const {user} = this.props;


        return(
            <div id="avatar">
                <span className="name">{this.signUpInfo()}</span>
                <Dropdown overlay={menu} placement="bottomRight">
                    {/*<Avatar src={user.userIcon.iconBase64} style={{cursor:"pointer"}}/>*/}
                    <SettingFilled />
                </Dropdown>
            </div>
        );
    }
}

export default withRouter(AdminAvatar);
