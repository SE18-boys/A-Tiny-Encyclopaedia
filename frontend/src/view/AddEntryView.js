import React, {useState} from 'react';
import 'antd/dist/antd.min.css'
import {Layout} from 'antd';

import '../css/home.css'
import '../css/BKDetail.css'
import {HeaderInfo} from "../components/HeaderInfo";
import MyFooter from "../components/MyFooter";
import AddEntryForm from "../components/AddEntryForm";
import AddEntryDetailForm from "../components/AddEntryDetailForm";

const {Header, Content} = Layout;

class AddEntryView extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
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
                              <div className='info-header'> 创建词条</div>
                                <div className='info-body'> 欢迎您创建词条！请输入词条名及选择词条所属类别
                                </div>
                                </div>
                        </span>
                        <AddEntryForm/>
                        {/*<AddEntryDetailForm/>*/}
                    </Content>
                    <MyFooter/>
                </Layout>
            </div>
        )

    }
}

// export default withRouter(AddEntryView);

export default AddEntryView;


