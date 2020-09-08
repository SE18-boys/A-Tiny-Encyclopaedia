import React from 'react'
import '../css/BKDetail.css'
import {message, Spin} from "antd";
import {searchDetails} from "../services/SearchService";
import {searchAccurate} from "../services/SearchService";
import {history} from "../utils/history";
import {EntryDetailRadar} from "../amCharts/EntryDetailRadar";

let num = {department: 0, symptom: 0, check: 0, accompany: 0, doeat: 0, noteat: 0, drug: 0};
const DiseaseMenu = ["就诊科室","病因","症状","检查","并发症","治疗","药物","宜吃食物","忌吃食物","传播","预防措施"];
export class EntryDetails extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            result: [],
            names:[],
            type:1,
            loading: true,
            noresult: false,
            isSignIn: false,
            showAll: false,
            showAllLoading: false,
        }
    }

    callback = (data) => {
        //console.log("data", data);
        this.setState({showAllLoading: false});
        if(data.status===3)
        {
            this.setState(
                {
                    result: ["1"],
                    names: ["1"],
                    type:1,
                    loading: false,
                    noresult: true,
                }
            )
        }
        else{
            this.setState({
                result: data.result,
                names:data.possible_names,
                type:data.status,
                loading: false,
                noresult: false,
            });
        }
    };

    componentWillReceiveProps(nextProps) {
        if(this.props.name !== nextProps.name){
            this.setState({showAll: false});
            const user = JSON.parse(localStorage.getItem("user"));
            if (user !== null) {
                this.setState({isSignIn: true})
            }
            let value = nextProps.name;
            let params={'name':value, 'flag': true};
            this.setState({loading: true});
            searchDetails(params, this.callback);
        }
    }

    componentDidMount() {
        console.log("name is", this.props.name);
        const user = JSON.parse(localStorage.getItem("user"));
        if (user !== null) {
            this.setState({isSignIn: true})
        }
        let value = this.props.name;
        let params={'name':value,'flag':true};
        //console.log("ttt", value);
        searchDetails(params, this.callback);
    }

    getAllResult(){
        this.setState({
            showAllLoading: true,
            showAll: true,
        });
        let value = this.props.name;
        let params={'name':value,'flag':false};
        searchDetails(params, this.callback);
    }

    linkto = (value) => {
        history.push('/Details?search=' + value);
    };

    getDetails = (Entry, menu) => {
        if(Entry === null) return "暂无信息";
        if(Entry.length === 0) return "暂无信息";
        if(Entry.id === -1) return "暂无信息";
        const detail = [];
        switch (menu) {
            case "就诊科室":
                console.log("disease: ", Entry);
                let department = Entry.cure_department;
                if(department === null || department === undefined) return "暂无相关资料！";
                for(let i=0; i<department.length; ++i){
                    detail.push(<span>{department[i].name}<br/></span>)
                }
                console.log("department: ", Entry.related_department);
                return detail;
            case "病因":
                if(Entry.cause === null || Entry.cause === undefined) return "暂无相关资料！";
                detail.push(<pre>{Entry.cause}</pre>);
                return detail;
            case "症状":
                let related_symptom = Entry.symptom;
                if(related_symptom === null || related_symptom === undefined ) return "暂无相关资料！";
                for(let i=0; i<related_symptom.length; ++i){
                    detail.push(<span>{related_symptom[i].name}<br/></span>)
                }
                return detail;
            case "检查":
                let need_check = Entry.check;
                if(need_check === null || need_check === undefined) return "暂无相关资料！";
                for(let i=0; i<need_check.length; ++i){
                    detail.push(<span>{need_check[i].name}<br/></span>)
                }
                return detail;
            case "并发症":
                let accompany_diseases = Entry.accompany;
                if(accompany_diseases === null || accompany_diseases === undefined) return "无";
                for(let i=0; i<accompany_diseases.length; ++i){
                    detail.push(
                        <a onClick={()=>this.linkto(accompany_diseases[i].name)}>
                            {accompany_diseases[i].name}<br/>
                        </a>)
                }
                return detail;
            case "治疗":
                let cure_by = Entry.cure_way;
                let cure_prob = Entry.cured_prob;
                let yibao_status = Entry.yibao_status;
                let cure_lasttime = Entry.cure_lasttime;
                let cost_money = Entry.cost_money;
                if(cure_by === null || cure_by === undefined) return "暂无相关资料！";
                for(let i=0; i<cure_by.length; ++i){
                    detail.push(<span>{cure_by[i].name}<br/></span>)
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
                    detail.push(<span>{do_eat[i].name}<br/></span>)
                }
                return detail;
            case "忌吃食物":
                let no_eat = Entry.no_eat;
                if(no_eat === null || no_eat === undefined) return "无";
                for(let i=0; i<no_eat.length; ++i){
                    detail.push(<span>{no_eat[i].name}<br/></span>)
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
                detail.push(<pre>{prevent}</pre>);
                return detail;
            case "药物":
                let flag = true;
                let common_drug = Entry.common_drug;
                let recommand_drug = Entry.recommand_drug;
                if(common_drug !== null && common_drug !== undefined) {
                    detail.push(<span>常用药物:<br/></span>);
                    for(let i=0; i<common_drug.length; ++i){
                        detail.push(<span>{common_drug[i].name}<br/></span>)
                    }
                    flag = false;
                }
                if(recommand_drug !== null && recommand_drug !== undefined) {
                    detail.push(<span>推荐药物:<br/></span>);
                    for(let i=0; i<recommand_drug.length; ++i){
                        detail.push(<span>{recommand_drug[i].name}<br/></span>)
                    }
                    flag = false;
                }
                if(flag)
                    detail.push(<span>暂无相关资料！</span>);
                return detail;
            default: return detail;
        }
    };

    update=()=>{

        if(this.state.isSignIn){
            let path= {
                pathname:'/UpdateEntryDetail',
                state:this.state.result
            };
            history.push(path);
        }
        else {
            message.error("请先登录再进行此操作！");
            history.push("/SignUp")
        }


    };
    getAccurate=(name)=>{
        let params={'name':name};
        searchAccurate(params,this.callback);
    };

    getnum = (Entry) => {
        num = {department: 0, symptom: 0, check: 0, accompany: 0, doeat: 0, noteat: 0, drug: 0};
        if(Entry === null) return num;
        if(Entry.length === 0) return num;
        if(Entry.id === -1) return num;
            // case "就诊科室"
                let department = Entry.cure_department;
                if(department === null || department === undefined) num.department = 0;
                else num.department = department.length;
            // case "症状":
                let related_symptom = Entry.symptom;
                if(related_symptom === null || related_symptom === undefined ) num.symptom = 0;
                else num.symptom = related_symptom.length;
            // case "检查":
                let need_check = Entry.check;
                if(need_check === null || need_check === undefined) num.check = 0;
                else num.check = need_check.length;
            // case "并发症":
                let accompany_diseases = Entry.accompany;
                if(accompany_diseases === null || accompany_diseases === undefined) num.accompany = 0;
                else num.accompany = accompany_diseases.length;
            // case "宜吃食物":
                let do_eat = Entry.do_eat;
                if(do_eat === null || do_eat === undefined) num.doeat = 0;
                else num.doeat = do_eat.length;
            // case "忌吃食物":
                let no_eat = Entry.no_eat;
                if(no_eat === null || no_eat === undefined) num.noteat = 0;
                else num.noteat = no_eat.length;
            // case "药物":
                let common_drug = Entry.common_drug;
                let recommand_drug = Entry.recommand_drug;
                if(common_drug !== null && common_drug !== undefined) {
                    num.drug = common_drug.length;
                }
                if(recommand_drug !== null && recommand_drug !== undefined) {
                    num.drug += recommand_drug.length;
                }
        return num;
    };

    render() {
        if(this.state.type===1) {
            //console.log(this.state.result);
            //console.log(this.state.type);
            let num = this.getnum(this.state.result);
            console.log("num",num);
            const contentp = [];
            for (let i = 0; i < DiseaseMenu.length; ++i) {
                contentp.push(
                    <div className="content-p">
                        <div className="title-1">
                            <div className="bk-flex">
                                <div className="title-detail">
                                <span>
                                    {DiseaseMenu[i]}
                                </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            {this.getDetails(this.state.result, DiseaseMenu[i])}
                        </div>
                    </div>
                );
            }
            if(this.state.loading){
                return (
                    <div>
                        加载中
                    </div>
                )
            }
            else if(this.state.noresult){
                return (
                    <div>
                        没找到！
                    </div>
                )
            }
            else
            return (
                <div>
                    <div className="bk-title bk-font36 content-title">
                        {this.state.result.name}
                        <a className="bk-color-darkgrey content-title-edit" onClick={this.update}>
                            <i className="title-edit"/>
                            编辑
                        </a>
                    </div>

                    <div className="bk-title bk-font14 bk-color-topagrey content-sub-title">

                    </div>

                    <div className="content-summary">
                        <pre>{this.state.result.desc}<br/><br/></pre>

                    </div>

                    <div className="content-p">
                        <div className="title-1">
                            <div className="bk-flex">
                                <div className="title-detail">
                                <span>
                                    基本信息
                                </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <EntryDetailRadar
                                num = {num}
                            />
                        </div>
                    </div>

                    <div>
                        {contentp}
                    </div>
                </div>
            )
        }
        else{
            let value = this.props.name;
            let names= this.state.names;
            let content=[];
            for(let i=0;i<names.length;i++){
                content.push(
                    <a id={names[i]} onClick={()=>{this.getAccurate(names[i])}}>{names[i]}<br/></a>
                )
            }
            if(this.state.showAllLoading){
                return (
                    <div>
                        <div className="content-summary">
                            <span>{"未找到名称为"+value+"的词条，您可以手动添加或从以下的可能结果中查找"}<br/></span>
                            <p>加载中<Spin/><br/></p>
                        </div>
                        <div>
                            {content}
                        </div>
                    </div>
                )
            }
            else if(this.state.showAll){
                return (
                    <div>
                        <div className="content-summary">
                            <span>{"未找到名称为"+value+"的词条，您可以手动添加或从以下的可能结果中查找"}<br/></span>
                            <p>已显示全部结果<br/></p>
                        </div>
                        <div>
                            {content}
                        </div>
                    </div>
                )
            }
            else {
                return (
                    <div>
                        <div className="content-summary">
                            <span>{"未找到名称为"+value+"的词条，您可以手动添加或从以下的可能结果中查找"}<br/></span>
                            <a id="see_all" onClick={()=>{this.getAllResult()}}>查看全部<br/></a>
                        </div>
                        <div>
                            {content}
                        </div>
                    </div>
                )
            }
        }
    }
}
