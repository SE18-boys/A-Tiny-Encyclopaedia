import React from "react";
import {withRouter} from "react-router-dom";
import {Layout} from "antd";
import {AuditsTable} from "../components/AuditsTable";
import {HeaderInfo} from "../components/HeaderInfo";

const { Header, Content } = Layout;

class EntryAuditsView extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount(){
        document.title = 'TouchFish-AdminCheck';
        let user = localStorage.getItem("user");
        this.setState({user:user});
    }

    render(){
        return(
            <Layout className="layout">

                <Header>
                    <HeaderInfo/>
                </Header>
                <Content>
                    <Layout>
                        {/*<AuditSideBar/>*/}
                        <Content style={{ padding: '0 50px' }}>
                            <div className="home-content">

                                <div className={"foot-wrapper"}>
                                    <AuditsTable/>
                                </div>

                            </div>
                        </Content>
                    </Layout>
                </Content>

            </Layout>
        );
    }


}
export default withRouter(EntryAuditsView);
