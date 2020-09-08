import React from "react";
import {getApprovedEntry, getDisapprovingEntry, getUnauditedEntry} from "../services/AuditService";
import {Table, Button} from "antd";
import {history} from "../utils/history";
import {AuditSunburst} from "../amCharts/AuditSunburst";

export class AuditsTable extends React.Component {
    constructor() {
        super();
        this.state = {
            UnauditedEntry : [],
            ApprovedEntry : [],
            DisapprovingEntry : [],
            type: "待审核",
        }
    }

    getUnauditedNum = (data) => {
        this.setState({UnauditedEntry: data, UnauditedNum: data.length});
    };
    getApprovedNum = (data) => {
        this.setState({ApprovedEntry: data, ApprovedNum: data.length});
    };
    getDisapprovingNum = (data) => {
        this.setState({DisapprovingEntry: data, DisapprovingNum: data.length});
    };

    componentDidMount() {
        getUnauditedEntry(this.getUnauditedNum);
        getApprovedEntry(this.getApprovedNum);
        getDisapprovingEntry(this.getDisapprovingNum);
    }

    getUnaudited() {
        //getUnauditedEntry(this.callback);
        this.setState({type: "待审核"});
    }
    getApproved() {
        //getApprovedEntry(this.callback);
        this.setState({type: "通过"});
    }
    getDisapproving() {
        //getDisapprovingEntry(this.callback);
        this.setState({type: "未通过"});
    }
    getAll() {
        this.setState({type: "基本信息"});
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
                        <a id="looking_for_detail" onClick={()=> AuditDetails(Audit)}>查看详情</a>
                    )
                }
            }
        ];

        let data = [];

        if(this.state.type === "待审核"){
            data = this.state.UnauditedEntry;
        }

        else if(this.state.type === "通过"){
            data = this.state.ApprovedEntry;
        }

        else if(this.state.type === "未通过"){
            data = this.state.DisapprovingEntry;
            columns.push(
                {
                    title: '原因',
                    dataIndex: 'reason',
                    key: 'reason'
                }
            );
        }

        if(this.state.type === "基本信息"){
            return(
                <div>
                    <div>
                        <Button onClick={()=> this.getAll()}>基本信息</Button>
                        <Button id="waiting_for_audit" onClick={()=>this.getUnaudited()}>待审核</Button>
                        <Button id="permitted" onClick={()=>this.getApproved()}>已通过</Button>
                        <Button id="rejected" onClick={()=>this.getDisapproving()}>未通过</Button>
                    </div>
                    <br/>
                    <AuditSunburst
                        Unaudited={this.state.UnauditedEntry.length}
                        Approved={this.state.ApprovedEntry.length}
                        Disapproving={this.state.DisapprovingEntry.length}
                    />
                </div>
            )
        }
        else {
            return(
                <div>
                    <div>
                        <Button onClick={()=> this.getAll()}>基本信息</Button>
                        <Button id="waiting_for_audit" onClick={()=>this.getUnaudited()}>待审核</Button>
                        <Button id="permitted" onClick={()=>this.getApproved()}>已通过</Button>
                        <Button id="rejected" onClick={()=>this.getDisapproving()}>未通过</Button>
                    </div>
                    <Table
                        columns={columns}
                        dataSource={data}
                    />
                </div>
            )
        }

    }
}
