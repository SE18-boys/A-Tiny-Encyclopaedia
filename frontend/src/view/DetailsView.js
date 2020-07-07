import React from 'react';
import {HashRouter as Router, Link, Route, Switch, withRouter} from 'react-router-dom';
import 'antd/dist/antd.min.css'
import {Breadcrumb, Layout, Menu} from 'antd';

import '../css/home.css'


const {Header, Content, Footer, Sider} = Layout;
class HomeView extends React.Component{

    constructor(props) {
        super(props);
    }

    componentDidMount(){
    }

    render(){
        return(

            <Layout className="layout">
                <Header>
                </Header>
                <Layout>
                    <Content style={{ padding: '0 50px' }}>
                        <div className="home-content">
                            <p>details</p>
                            <div className={"foot-wrapper"}>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default withRouter(HomeView);
