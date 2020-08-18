import React, {useState} from 'react';
import 'antd/dist/antd.min.css'
import {Layout} from 'antd';

import '../css/home.css'
import '../css/BKDetail.css'
import {HeaderInfo} from "../components/HeaderInfo";
import MyFooter from "../components/MyFooter";
import AddEntryDetailForm from "../components/AddEntryDetailForm";

const {Header, Content} = Layout;

export default class UpdateDetailView extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.title = 'TouchFish-Modify'
    }

    render() {

        return (
            <div>
                <Layout>
                    <Header>

                        <HeaderInfo/>
                    </Header>

                    <Content className="center">
                        <span className="info">
                            <div style={{position: 'relative', padding:"20px"}}>
                              <div className='info-header'> 更新词条</div>
                                <div className='info-body'> 请更新词条的详细信息
                                </div>
                                </div>
                        </span>
                        <AddEntryDetailForm isUpdate={true} initValues={this.props.location.state}/>
                    </Content>
                    <MyFooter/>
                </Layout>
            </div>
        )

    }
}

