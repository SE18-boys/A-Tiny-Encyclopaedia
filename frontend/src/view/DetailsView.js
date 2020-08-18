import React,{useState} from 'react';
import {HashRouter as Router, Link, Route, Switch, withRouter} from 'react-router-dom';
import 'antd/dist/antd.min.css'
import {Breadcrumb, Layout, Menu, Card, Affix, List,Row, Col, Input, message} from 'antd';
import '../css/index.css'
import logo from "../assets/logo1.png";
import {AdminAvatar} from "../components/AdminAvatar";
import '../css/home.css'
import {HeaderInfo} from "../components/HeaderInfo";
import {EntryDetails} from "../components/EntryDetails";
import MyFooter from "../components/MyFooter";
import {history} from "../utils/history";

const {Search} = Input;
const name1 = "幽语";
const name2 = "伊妹";


const gridStyle = {
    width: '33%',
};
const {Header, Content, Footer, Sider} = Layout;
const {Grid} = Card;

let value = "";
class DetailsView extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            search: "",
            result: {},
        }
    }

    callback = (data) => {
        this.setState({result: data});
        //console.log("received data is:", data);
    };

    backToHome=()=>
    {
        if (history.location.pathname !== "/")
            history.push("/")
    };

    search = (value) => {
        console.log(value);
        if(value===''){
            message.info("查询的词条不能为空！",1)
        }
        //let params={'name':value};
        else {
            this.setState({search: value});
            history.push('/Details?search=' + value);
            //console.log(params);
            //searchDetails(params)
        }
    };

    componentWillReceiveProps(nextProps) {

        if(this.props.location.search !== nextProps.location.search){
            console.log("whether go to here");
            const query = nextProps.location.search;
            const arr = query.split('&');
            value = arr[0].substr(8);
            console.log("value here is "+value);
            this.setState({search: value});
        }
    }

    componentDidMount(){
        document.title = 'TouchFish-Search'
        const query = this.props.location.search;
        const arr = query.split('&');
        value = arr[0].substr(8);
        console.log("value here is "+value);
        this.setState({search: value});
        // let params={'name':value};
        // searchDetails(params, this.callback);
    }

    render(){
        const query = this.props.location.search;
        const arr = query.split('&');
        let value1=this.state.search;
        value = arr[0].substr(8);
        console.log("value1 is"+value1);
        console.log("value is"+value);
        return(
            <div>
                <Layout>
                    <Header>
                        <div id="header">
                            <div id="header-content" >
                                <Row>
                                    <Col span={3}>
                                        <a>  <img alt="logo" onClick={this.backToHome} src={logo} style={{height: 60}} id="logo"/> </a>
                                    </Col>
                                    <Col span={6}>
                                        <Search placeholder="请输入查询词条"
                                                onSearch={(value) => this.search(value)}
                                        />
                                    </Col>
                                    <Col span={6} offset={9}>
                                        <AdminAvatar/>
                                    </Col>
                                </Row>
                            </div>
                        </div>
                    </Header>

                    <Content>
                    <Layout>
                        <Content>
                            <EntryDetails name={value}/>
                        </Content>
                        <Sider theme="light">
                            {/*<Card title="词条统计">*/}
                            {/*    <p>*/}
                            {/*        创建者&emsp;&emsp;&emsp; {name1}*/}
                            {/*    </p>*/}
                            {/*    <p>*/}
                            {/*        浏览次数&emsp;&emsp; 1次*/}
                            {/*    </p>*/}
                            {/*    <p>*/}
                            {/*        编辑次数&emsp;&emsp; 2次<br/>*/}
                            {/*        <a>查看历史</a>*/}
                            {/*    </p>*/}

                            {/*    <p>*/}
                            {/*        最后修改者&emsp; {name2}*/}
                            {/*    </p>*/}
                            {/*</Card>*/}
                        </Sider>
                    </Layout>
                    </Content>
                </Layout>
                {/*这里css有问题，无法做到固定在页面最底部而非浏览器最底部*/}
                <MyFooter/>
            </div>

        );
    }
}

export default withRouter(DetailsView);


//一些暂时用不上的代码

{/*<div class="poly-detail bk-font14">*/}
{/*    <div class="poly-detail-title">*/}
{/*                <span>*/}
{/*                    <span class="bk-strong">*/}
{/*                        {name}*/}
{/*                    </span>*/}
{/*                    是一个多义词，请在下列义项上选择浏览（共5个义项）*/}
{/*                </span>*/}
{/*        <a>*/}
{/*            <i class="wiki-add-icon"></i>*/}
{/*            <span class="bk-color-darkgrey">添加义项</span>*/}
{/*        </a>*/}
{/*    </div>*/}
{/*</div>*/}
{/*<div class="bk-flex">*/}
{/*    {themeans}*/}
{/*</div>*/}


// <div className="poly wrapper">
//
//     <List
//         header={
//             <div className="poly-detail-title">
//                                         <span>
//                                             <span className="bk-strong">
//                                                 {name}
//                                             </span>
//                                             是一个多义词，请在下列义项上选择浏览（共5个义项）
//                                         </span>
//                 <a>
//                     <i className="wiki-add-icon"></i>
//                     <span className="bk-color-darkgrey">添加义项</span>
//                 </a>
//             </div>
//         }
//         grid={{gutter: 10, column: 3}}
//         dataSource={meanings}
//
//         renderItem={(item, index) => {
//             if (index === type) {
//                 return (
//                     <List.Item>
//                         <div className="poly-detail-item">
//                             <span className="poly-detail-item-icon">■</span>
//                             <span className="bk-margin-left bk-font14">
//                                                 <span>{item}</span>
//                                                 </span>
//                         </div>
//                     </List.Item>
//                 )
//             } else {
//                 return (
//                     <List.Item>
//                         <div className="poly-detail-item">
//                             <span className="poly-detail-item-icon">►</span>
//                             <span className="bk-margin-left bk-font14">
//                                             <a>{item}</a>
//                                             </span>
//                         </div>
//                     </List.Item>
//                 )
//             }
//
//         }}
//     />
// </div>
