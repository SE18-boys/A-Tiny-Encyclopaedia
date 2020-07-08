import React,{useState} from 'react';
import {HashRouter as Router, Link, Route, Switch, withRouter} from 'react-router-dom';
import 'antd/dist/antd.min.css'
import {Breadcrumb, Layout, Menu, Card, Affix} from 'antd';

import '../css/home.css'
import {HeaderInfo} from "../components/HeaderInfo";
import {EntryDetails} from "../components/EntryDetails";
import {HomeHeaderInfo} from "../components/HomeHeaderInfo";

const name = "clannad";
const number1 = 5;
const meanings = ["日本Key公司发行的恋爱冒险游戏","日本东映动画改编制作的动画电影","爱尔兰克兰纳德家族乐团",
"美崎树里绘制的Key社官方漫画","日本京都动画改编制作的电视动画"];
const name1 = "幽语";
const name2 = "伊妹";

const gridStyle = {
    width: '33%',
};
const {Header, Content, Footer, Sider} = Layout;
const {Grid} = Card;
class HomeView extends React.Component{

    constructor(props) {
        super(props);
    }

    componentDidMount(){
    }

    render(){

        let themeans = [];
        for(let i=0; i<meanings.length; ++i){
            themeans.push(<Card.Grid style={gridStyle}>{meanings[i]}</Card.Grid>)
        }
        return(
            <div>
                <Layout>
                    <Header>
                        {/*<Card title={name+"是一个多义词，请在下列义项上选择浏览（共"+number1+"个义项）"}>*/}
                        {/*    {themeans}*/}
                        {/*</Card>*/}
                        <HeaderInfo/>
                    </Header>
                    <Layout>
                        <Content>
                            <EntryDetails/>
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
                    <Footer>Footer
                    </Footer>
                </Layout>
            </div>

        );
    }
}

export default withRouter(HomeView);
