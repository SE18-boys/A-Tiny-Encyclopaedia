import React from "react";
import {history} from "../utils/history";
import {Menu, Layout} from "antd";
import "../css/index.css"

// const { SubMenu } = Menu;
const { Sider } = Layout;

export class AuditSideBar extends React.Component{
    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        if(collapsed){

        }
        console.log(collapsed);
        this.setState({ collapsed });
    };

    // bookOnClick = () => {
    //     history.push("/");
    // };

    buttonOnClick = (path) => {
        history.push('/'+path)
    };

    render() {
        const user = JSON.parse(localStorage.getItem("user"));
        let flag = true;
        if(user.role !== "ROLE_ADMIN")
        {
            flag = false;
        }
        let num=1;
        let select=[num];

        return (
            <div style={{width:"100px"}}>
                <div className="mySider">
                    <Sider width="100px" onCollapse={this.onCollapse} className="sider" style={{ background: '#fff'}}>
                        <Menu defaultSelectedKeys={select} mode="inline">
                            <Menu.Item key="1" onClick={()=>this.buttonOnClick("")}>
                                <span style={{ fontSize: '16px'}}>待审核</span>
                            </Menu.Item>
                            <Menu.Item key="2" onClick={()=>this.buttonOnClick("shoppingcart")}>
                                <span style={{ fontSize: '16px'}}>已通过</span>
                            </Menu.Item>
                            <Menu.Item key="3" onClick={()=>this.buttonOnClick("order")}>
                                <span style={{ fontSize: '16px'}}>未通过</span>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                </div>
            </div>

        );
    }
}
