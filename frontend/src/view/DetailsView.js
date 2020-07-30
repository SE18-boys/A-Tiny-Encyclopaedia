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

const name = "clannad";
const type = 0;
const number1 = 5;
const meanings = ["日本Key公司发行的恋爱冒险游戏","日本东映动画改编制作的动画电影","爱尔兰克兰纳德家族乐团",
"美崎树里绘制的Key社官方漫画","日本京都动画改编制作的电视动画",];
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
            result: [],
        }
    }

    callback = (data) => {
        this.setState({result: data});
        //console.log("received data is:", data);
    };

    componentDidMount(){
        const query = this.props.location.search;
        const arr = query.split('&');
        value = arr[0].substr(8);
        this.setState({search: value});
        // let params={'name':value};
        // searchDetails(params, this.callback);
    }

    render(){
        const query = this.props.location.search;
        const arr = query.split('&');
        value = arr[0].substr(8);
        let themeans = [];
        for(let i=0; i<meanings.length; ++i){
            if(i === type){
                themeans.push(
                    <div class="poly-detail-item">
                        <span class="poly-detail-item-icon">■</span>
                        <span class="bk-margin-left bk-font14">
                        <span>{meanings[i]}</span>
                        </span>
                    </div>
                );
            }
            else{
                themeans.push(
                    <div class="poly-detail-item">
                        <span class="poly-detail-item-icon">►</span>
                        <span class="bk-margin-left bk-font14">
                        <a>{meanings[i]}</a>
                        </span>
                    </div>
                );
            }
        }
        return(
            <div>
                <Layout>
                    <Header>
                        <HeaderInfo/>
                    </Header>

                    <Content>
                    <Layout>
                        <Content>
                            <EntryDetails name={value}/>
                        </Content>
                        <Sider theme="light">
                            <Card title="词条统计">
                                <p>
                                    创建者&emsp;&emsp;&emsp; {name1}
                                </p>
                                <p>
                                    浏览次数&emsp;&emsp; 1次
                                </p>
                                <p>
                                    编辑次数&emsp;&emsp; 2次<br/>
                                    <a>查看历史</a>
                                </p>

                                <p>
                                    最后修改者&emsp; {name2}
                                </p>
                            </Card>
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
