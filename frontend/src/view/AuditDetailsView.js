import React,{useState} from 'react';
import {HashRouter as Router, Link, Route, Switch, withRouter} from 'react-router-dom';
import 'antd/dist/antd.min.css'
import {Breadcrumb, Layout, Menu, Card, Affix, List} from 'antd';

import '../css/home.css'
import {HeaderInfo} from "../components/HeaderInfo";
import {EntryDetails} from "../components/EntryDetails";
import {HomeHeaderInfo} from "../components/HomeHeaderInfo";
import MyFooter from "../components/MyFooter";
import {searchDetails} from "../services/SearchService";
import {AuditsTable} from "../components/AuditsTable";
import {AuditDetails} from "../components/AuditDetails";


const {Header, Content, Footer, Sider} = Layout;
const {Grid} = Card;

let value = "";
class AuditDetailsView extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            Audit: []
        }
    }

    callback = (data) => {
        this.setState({result: data});
        //console.log("received data is:", data);
    };

    componentDidMount(){
        const query = this.props.location.query;
        console.log("get", query);
        this.setState({Audit: query});
        // let params={'name':value};
        // searchDetails(params, this.callback);
    }

    render(){
        return(
            <div>
                <Layout>
                    <Header>
                        <HeaderInfo/>
                    </Header>

                    <Content style={{ padding: '0 100px' }}>
                        <AuditDetails Audit={this.props.location.query}/>
                    </Content>
                </Layout>
                {/*这里css有问题，无法做到固定在页面最底部而非浏览器最底部*/}
                <MyFooter/>
            </div>

        );
    }
}

export default withRouter(AuditDetailsView);
