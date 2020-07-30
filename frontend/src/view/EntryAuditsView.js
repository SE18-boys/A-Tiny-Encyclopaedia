import React from "react";
import {withRouter} from "react-router-dom";
import {Layout} from "antd";
import {getUnauditedEntry} from "../services/AuditService";
import {AuditsTable} from "../components/AuditsTable";
import {HeaderInfo} from "../components/HeaderInfo";

const { Header, Content, Footer } = Layout;

class EntryAuditsView extends React.Component {

    constructor(props) {
        super(props);

    }

    componentDidMount(){
        let user = localStorage.getItem("user");
        this.setState({user:user});
    }

    render(){
        return(
            <Layout className="layout">

                <Header>
                    <HeaderInfo/>
                </Header>
                <Layout>
                    {/*<SideBar select="1"/>*/}
                    <Content style={{ padding: '0 50px' }}>
                        <div className="home-content">

                            <div className={"foot-wrapper"}>
                                <AuditsTable/>
                            </div>
                        </div>
                    </Content>
                </Layout>
            </Layout>
        );
    }


}
export default withRouter(EntryAuditsView);
