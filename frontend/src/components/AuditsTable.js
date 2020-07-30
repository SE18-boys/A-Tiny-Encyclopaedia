import React from "react";
import {getUnauditedEntry} from "../services/AuditService";
import {Table, Button} from "antd";
import {history} from "../utils/history";

export class AuditsTable extends React.Component {
    constructor() {
        super();
        this.state = {
            UnauditedEntry : [],

        }
    }

    callback = (data) => {
        this.setState({UnauditedEntry: data});
        console.log("auditEntry: ", data);
    };

    componentDidMount() {
        getUnauditedEntry(this.callback);
    }

    render() {
        const columns = [
            {
                title: 'ID',
                dataIndex: 'stringid',
                key: 'id'
            },
            {
                title: '词条名',
                dataIndex: 'name',
                key: 'name'
            },
            {
                title: '状态',
                dataIndex: 'status',
                key: 'status'
            },
            {
                title: '申请日期',
                dataIndex: 'id',
                key: 'date',
                render : (id) => {
                    return (
                        <span>{id.date}</span>
                    )
                }
            },
            {
                title: '操作',
                key: 'action',
                render : (Audit) => {
                    //console.log("record is", record);
                    function AuditDetails(Audit) {
                        history.push({pathname: "/AuditsDetails", query: Audit});
                    }
                    return(
                        <a onClick={()=> AuditDetails(Audit)}>查看详情</a>
                    )
                }
            }
        ];
        return(
            <div>
                <Table
                    columns={columns}
                    dataSource={this.state.UnauditedEntry}
                />
            </div>
        )
    }
}
