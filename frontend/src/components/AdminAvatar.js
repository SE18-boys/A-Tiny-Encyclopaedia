import React from 'react';
import { Avatar, Dropdown, Menu} from 'antd';
import '../css/index.css'
import {
    SettingFilled,
} from '@ant-design/icons';
export class AdminAvatar extends React.Component {

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
                <span className="name">Hi,user</span>
                <Dropdown overlay={menu} placement="bottomRight">
                    {/*<Avatar src={user.userIcon.iconBase64} style={{cursor:"pointer"}}/>*/}
                    <SettingFilled />
                </Dropdown>
            </div>
        );
    }
}
