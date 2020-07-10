import React from "react";
import {Layout} from "antd";
import "../css/index.css"

const {Footer} = Layout;

export default class MyFooter extends React.Component {


    render() {
        return (
            <Footer className='footer' style={{
                textAlign: 'center', background: '#fff', padding: 0,
                position: 'absolute',
                left: 0, right: 0,
                bottom: 0,
                marginTop: "-1000px"
            }}>
                copyright@2020 SE18boys
            </Footer>
        )
    }

}
