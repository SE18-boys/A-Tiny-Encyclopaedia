import React from 'react'
import {Button} from 'antd'
import '../css/BKDetail.css'
import {searchDetails} from "../services/SearchService";

const summary = "《CLANNAD》是日本游戏品牌Key继《Kanon》、《AIR》后发行的第三款恋爱冒险游戏，游戏于2004年4月28日发行PC初回限定版，并依此为原作改编或扩充跨媒体制作的作品。\n\n" +
    "游戏PC版在最初公开时的预定发售日期是2002年，后来预定发售日被延期至2003年，之后再一次被延期至2004年4月28日，相比最初的预定延期了2年。在剧情设计上，延续了Key社出品的前两部作品的特点。但与前两部有所不同的是，本作在发布伊始即确定为全年龄对象。因其剧情大部分发生于春季，亦被视为Key社游戏“季节组曲”中的“春”。\n";
const name = "CLANNAD";
const subtitle = "日本Key公司发行的恋爱冒险游戏";
const menu = ["故事背景", "角色介绍", "用语解说", "游戏音乐", "制作人员", "游戏配置"];
const DiseaseMenu = ["就诊科室","病因","症状","检查","并发症","治疗","药物","宜吃食物","忌吃食物","传播","预防措施"];
export class EntryDetails extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            result: [],
        }
    }

    callback = (data) => {
        this.setState({result: data});
        //console.log("received data is:", data);
    };

    componentDidMount() {
        console.log("name is", this.props.name);
        let value = this.props.name;
        let params={'name':value};
        searchDetails(params, this.callback);
    }

    getDetails = (Entry, menu) => {
        if(Entry === null) return "暂无信息";
        if(Entry.length === 0) return "暂无信息";
        if(Entry.id === -1) return "暂无信息";

        const detail = [];
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
                        {this.getDetails(this.state.result, DiseaseMenu[i])}
                    </div>
                </div>
            );
            direction.push(

            )
        }
        return(
            <div>
                <div class="bk-title bk-font36 content-title">
                    {this.state.result.name}
                    <a class="bk-color-darkgrey content-title-edit">
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
