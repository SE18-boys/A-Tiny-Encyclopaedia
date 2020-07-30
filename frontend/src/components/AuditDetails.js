import React from 'react'
import {Button, message} from 'antd'
import '../css/BKDetail.css'
import {searchDetails} from "../services/SearchService";
import {history} from "../utils/history";

const DiseaseMenu = ["就诊科室","病因","症状","检查","并发症","治疗","药物","宜吃食物","忌吃食物","传播","预防措施"];
export class AuditDetails extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            Audit: [],
            result: []
        }
    }

    callback = (data) => {
        console.log("get ");
        console.log(data);
        if(data.result.id === -1)
        {
            message.info("此词条已被删除！")
            history.push('/')
        }

        this.setState({result: data.result});
        //console.log("received data is:", data);
    };

    componentDidMount() {
        console.log("Audit is", this.props.Audit);
        let audit = this.props.Audit;
        let value = audit.name;
        let params={'name':value};
        this.setState({Audit: audit});
        searchDetails(params, this.callback);
    }

    getDetails = (Entry, menu) => {
        if(Entry === null) return "暂无信息";
        if(Entry.length === 0) return "暂无信息";
        if(Entry.id === -1) return "暂无信息";

        const detail = [];
        //const audit = this.state.Audit;
        switch (menu) {
            case "就诊科室":
                // let department = [];
                console.log("disease: ", Entry);
                let department = Entry.related_department;
                if(department === null || department === undefined) return "暂无相关资料！";
                for(let i=0; i<Entry.related_department.length; ++i){
                    detail.push(<a>{department[i].name}<br/></a>)
                }
                console.log("department: ", Entry.related_department);
                return detail;
            case "病因":
                if(Entry.cause === null || Entry.cause === undefined) return "暂无相关资料！";
                detail.push(<span>{Entry.cause}</span>);
                return detail;
            case "症状":
                let related_symptom = Entry.related_symptom;
                if(related_symptom === null || related_symptom === undefined ) return "暂无相关资料！";
                for(let i=0; i<related_symptom.length; ++i){
                    detail.push(<a>{related_symptom[i].name}<br/></a>)
                }
                return detail;
            case "检查":
                let need_check = Entry.need_check;
                if(need_check === null || need_check === undefined) return "暂无相关资料！";
                for(let i=0; i<need_check.length; ++i){
                    detail.push(<a>{need_check[i].name}<br/></a>)
                }
                return detail;
            case "并发症":
                let accompany_diseases = Entry.accompany_diseases;
                if(accompany_diseases === null || accompany_diseases === undefined) return "无";
                for(let i=0; i<accompany_diseases.length; ++i){
                    detail.push(<a>{accompany_diseases[i].name}<br/></a>)
                }
                return detail;
            case "治疗":
                let cure_by = Entry.cure_by;
                let cure_prob = Entry.cure_prob;
                let yibao_status = Entry.yibao_status;
                let cure_lasttime = Entry.cure_lasttime;
                let cost_money = Entry.cost_money;
                if(cure_by === null || cure_by === undefined) return "暂无相关资料！";
                for(let i=0; i<cure_by.length; ++i){
                    detail.push(<a>{cure_by[i].name}<br/></a>)
                }
                if(cure_prob !== null && cure_prob !== undefined)
                    detail.push(<span><br/>治愈率: {cure_prob}</span>);
                if(yibao_status !== null && yibao_status !== undefined){
                    if(yibao_status === "是")
                        detail.push(<span><br/>已加入医保</span>);
                    else
                        detail.push(<span><br/>未加入医保</span>)
                }

                if(cure_lasttime !== null && cure_lasttime !== undefined)
                    detail.push(<span><br/>最晚治愈时间: {cure_lasttime}</span>);
                if(cost_money !== null && cost_money !== undefined)
                    detail.push(<span><br/>治疗花费: {cost_money}</span>);
                return detail;
            case "宜吃食物":
                let do_eat = Entry.do_eat;
                if(do_eat === null || do_eat === undefined) return "无";
                for(let i=0; i<do_eat.length; ++i){
                    detail.push(<a>{do_eat[i].name}<br/></a>)
                }
                return detail;
            case "忌吃食物":
                let no_eat = Entry.no_eat;
                if(no_eat === null || no_eat === undefined) return "无";
                for(let i=0; i<no_eat.length; ++i){
                    detail.push(<a>{no_eat[i].name}<br/></a>)
                }
                return detail;
            case "传播":
                let get_way = Entry.get_way;
                let easy_get = Entry.easy_get;
                let get_prob = Entry.get_prob;
                if(get_way !== null && get_way !== undefined)
                    detail.push(<span>感染途径: {get_way}<br/></span>);
                if(easy_get !== null && get_way !== undefined)
                    detail.push(<span>易感人群: {easy_get}<br/></span>);
                if(get_prob !== null && get_prob !== undefined)
                    detail.push(<span>感染率: {get_prob}<br/></span>);
                return detail;
            case "预防措施":
                let prevent = Entry.prevent;
                if(prevent === null || prevent === undefined)
                    return "暂无相关资料！";
                detail.push(<span>{prevent}</span>);
                return detail;
            case "药物":
                let flag = true;
                let common_drug = Entry.common_drug;
                let recommand_drug = Entry.recommand_drug;
                if(common_drug !== null && common_drug !== undefined) {
                    detail.push(<span>常用药物:<br/></span>);
                    for(let i=0; i<common_drug.length; ++i){
                        detail.push(<a>{common_drug[i].name}<br/></a>)
                    }
                    flag = false;
                }
                if(recommand_drug !== null && recommand_drug !== undefined) {
                    detail.push(<span>推荐药物:<br/></span>);
                    for(let i=0; i<recommand_drug.length; ++i){
                        detail.push(<a>{recommand_drug[i].name}<br/></a>)
                    }
                    flag = false;
                }
                if(flag)
                    detail.push(<span>暂无相关资料！</span>)
                return detail;
            default: return detail;
        }
    };

    update=()=>{

        let value=this.state.result;
        // this.

        let path= {
            pathname:'/UpdateEntryDetail',
            state:this.state.result
        };
        history.push(path);


    };

    render() {
        const contentp =[];
        const direction = [];
        for(let i=0; i<DiseaseMenu.length; ++i){
            contentp.push(
                <div class="content-p">
                    <div class="title-1">
                        <div class="bk-flex">
                            <div class="title-detail">
                                <span>
                                    {DiseaseMenu[i]}
                                </span>
                                <a class="title-anchor"></a>
                            </div>
                        </div>
                    </div>
                    <div>
                        {this.getDetails(this.state.Audit, DiseaseMenu[i])}
                    </div>
                </div>
            );
            direction.push(

            )
        }
        return(
            <div>
                <div class="bk-title bk-font36 content-title">
                    {this.state.Audit.name}
                    <a class="bk-color-darkgrey content-title-edit" onClick={this.update}>
                        <i class="title-edit"/>
                        编辑
                    </a>
                    <a class="bk-color-darkgrey content-title-add">
                        <i class="wiki-add-icon"/>
                        <span>添加义项</span>
                    </a>
                </div>

                <div class="bk-title bk-font14 bk-color-topagrey content-sub-title">

                </div>

                <div class="content-summary">
                    <span>{this.state.result.desc}<br/><br/></span>

                </div>

                <div>

                </div>

                <div>
                    {contentp}
                </div>
            </div>
        )
    }
}
