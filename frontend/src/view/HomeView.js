import React from 'react';
import {HashRouter as Router, Link, Route, Switch, withRouter} from 'react-router-dom';
import 'antd/dist/antd.min.css'
import {Breadcrumb, Layout, Menu} from 'antd';
import '../css/home.css'
import {SearchBar} from "../components/SearchBar";
import {HomeHeaderInfo} from "../components/HomeHeaderInfo";
import MyFooter from "../components/MyFooter";

const {Header, Content, Footer, Sider} = Layout;
class HomeView extends React.Component{

    constructor(props) {
        super(props);
    }

    componentDidMount(){
    }

    render(){
        return(
            <Layout >
                <Header style={{ background: '#fff', padding: 0 }}>
                    <HomeHeaderInfo />
                </Header>
                <Layout style={{ background: '#fff', padding: 0 }}>
                    <Content style={{ padding: '0 50px' }}>
                        <div className="home-content">
                            <SearchBar />
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

export default withRouter(HomeView);
