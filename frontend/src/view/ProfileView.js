import React from 'react';
import {Layout, Carousel, Button, message} from 'antd'
import {HeaderInfo} from "../components/HeaderInfo";
import {withRouter} from "react-router-dom";
import {uploadAvatar} from "../services/userService";
import MyFooter from "../components/MyFooter";
import {history} from "../utils/history";

const {Header, Content, Footer} = Layout;

var base64 = "";

function upload() {
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
        base64 = e.target.result
        console.log(base64)
    };
    if (file) {
        reader.readAsDataURL(file);
    } else {
        base64 = "";
    }
}

class ProfileView extends React.Component {
    that;

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
        document.title = 'TouchFish-Profile'
        const user = JSON.parse(localStorage.getItem("user"));
        console.log("user info:", user);
        if (user == null) {
            message.error("请先登录")
            if (history.location.pathname !== "/")
                history.push("/");
        }
    }

    showmessage = (flag) => {
        if (flag) {
            message.success("上传成功！");

        } else {
            message.error("上传失败！");
        }
    }

    putAvatar = () => {
        if (base64 == "") {
            message.error("选择图片!")

            return null;
        }
        let user = JSON.parse(localStorage.getItem("user"));
        let id = user.userId;
        uploadAvatar(id, base64, this.showmessage)
    }

    render() {
        const user = JSON.parse(localStorage.getItem("user"));
        return (
            <Layout className="layout">

                <Header>
                    <HeaderInfo/>
                </Header>
                <Layout>
                    <Content style={{padding: '0 50px'}}>
                        <div className="home-content">
                            <p>upload profile here</p>
                            {/*<img alt="example" style={{ width: '100%' }} src={user.userIcon.iconBase64} />*/}
                            {/*<UploadProfile />*/}
                            <input type="file" id="image" lay-verify="required" onChange={upload}
                                   accept="image/jpeg,image/png,image/jpg"/>
                            <Button type="primary" icon="upload" size={"default"} style={{marginLeft: "15%"}} ghost
                                    onClick={this.putAvatar}>
                                confirm
                            </Button>
                            <div className={"foot-wrapper"}>
                            </div>
                        </div>
                    </Content>
                    <MyFooter/>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(ProfileView);
