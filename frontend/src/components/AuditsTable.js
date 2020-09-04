import React from "react";
import {getApprovedEntry, getDisapprovingEntry, getUnauditedEntry} from "../services/AuditService";
import {Table, Button} from "antd";
import {history} from "../utils/history";

export class AuditsTable extends React.Component {
    constructor() {
        super();
        this.state = {
            UnauditedEntry : [],
            type: "待审核",

        }
    }

    callback = (data) => {
        this.setState({UnauditedEntry: data});
        console.log("auditEntry: ", data);
    };

    componentDidMount() {
        getUnauditedEntry(this.callback);
    }

    getUnaudited() {
        getUnauditedEntry(this.callback);
        this.setState({type: "待审核"});
    }
    getApproved() {
        getApprovedEntry(this.callback);
        this.setState({type: "通过"});
    }
    getDisapproving() {
        getDisapprovingEntry(this.callback);
        this.setState({type: "未通过"});
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
                dataIndex: 'submit_date',
                key: 'date',
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

        if(this.state.type === "未通过"){
            columns.push(
                {
                    title: '原因',
                    dataIndex: 'reason',
                    key: 'reason'
                }
            );
        }

        return(
            <div>
                <div>
                    <Button onClick={()=>this.getUnaudited()}>待审核</Button>
                    <Button onClick={()=>this.getApproved()}>已通过</Button>
                    <Button onClick={()=>this.getDisapproving()}>未通过</Button>
                </div>
                <Table
                    columns={columns}
                    dataSource={this.state.UnauditedEntry}
                />
            </div>
        )
    }
}
