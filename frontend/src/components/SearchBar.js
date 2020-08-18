import React from 'react';
import {Button, Input, AutoComplete,message} from 'antd';
import SearchOutlined from "@ant-design/icons/lib/icons/SearchOutlined";
import {history} from "../utils/history";
import logo from "../assets/logo1.png";

const {Option} = AutoComplete;
const {Search} = Input;

export class SearchBar extends React.Component {
    state = {
        dataSource: [],
        value: null,
        results: null,
    };

    callback = (Results) => {
        this.setState({results: Results});
    };

    componentDidMount() {
        // getDetails({"search": null} ,this.callback);
    };

    search = (value) => {
        console.log(value);
        if(value===''){
            message.info("查询的词条不能为空！",1)
        }
        //let params={'name':value};
        else {
            if (history.location.pathname !== "/Details")
                history.push('/Details?search=' + value);
            //console.log(params);
            //searchDetails(params)
        }
    };

    render() {
        return (
            <div className="global-search-wrapper" style={{width: 300}}>
                {/*<Input*/}
                {/*    suffix={*/}
                {/*        <Button*/}
                {/*            className="search-btn"*/}
                {/*            style={{ marginRight: -12 }}*/}
                {/*            size="large"*/}
                {/*            type="primary"*/}
                {/*            //onClick={()=> this.search()}*/}
                {/*        >*/}
                {/*            <SearchOutlined />*/}
                {/*        </Button>*/}
                {/*    }*/}
                {/*/>*/}
                <div align="center">
                    <img alt="logo" src={logo}
                         style={{textAlign: 'center', background: '#fff', padding: 0, height: 150}}/>
                </div>
                <Search
                    placeholder="输入词条"
                    enterButton=<SearchOutlined/>
                size="large"
                onSearch={(value) => this.search(value)}
                />
            </div>
        );
    }
}
