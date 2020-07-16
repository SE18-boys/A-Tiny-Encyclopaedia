import React from 'react'
import {Button} from 'antd'
import '../css/BKDetail.css'
import {searchDetails} from "../services/SearchService";

const summary = "《CLANNAD》是日本游戏品牌Key继《Kanon》、《AIR》后发行的第三款恋爱冒险游戏，游戏于2004年4月28日发行PC初回限定版，并依此为原作改编或扩充跨媒体制作的作品。\n\n" +
    "游戏PC版在最初公开时的预定发售日期是2002年，后来预定发售日被延期至2003年，之后再一次被延期至2004年4月28日，相比最初的预定延期了2年。在剧情设计上，延续了Key社出品的前两部作品的特点。但与前两部有所不同的是，本作在发布伊始即确定为全年龄对象。因其剧情大部分发生于春季，亦被视为Key社游戏“季节组曲”中的“春”。\n";
const name = "CLANNAD";
const subtitle = "日本Key公司发行的恋爱冒险游戏";
const menu = ["故事背景", "角色介绍", "用语解说", "游戏音乐", "制作人员", "游戏配置"];
const DiseaseMenu = ["就诊科室","病因","症状","检查","并发症","治疗","宜吃食物","忌吃食物"];
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
        if(Entry.length === 0) return "暂无信息";
        const detail = [];
        switch (menu) {
            case "就诊科室":
                // let department = [];
                console.log("disease: ", Entry);
                let department = Entry.related_department;
                if(department === null) return "暂无相关资料！";
                for(let i=0; i<Entry.related_department.length; ++i){
                    detail.push(<a>{department[i].name}<br/></a>)
                }
                console.log("department: ", Entry.related_department);
                return detail;
            case "病因":
                if(Entry.cause === null) return "暂无相关资料！";
                detail.push(<span>{Entry.cause}</span>);
                return detail;
            case "症状":
                let related_symptom = Entry.related_symptom;
                if(related_symptom === null) return "暂无相关资料！";
                for(let i=0; i<related_symptom.length; ++i){
                    detail.push(<a>{related_symptom[i].name}<br/></a>)
                }
                return detail;
            case "检查":
                let need_check = Entry.need_check;
                if(need_check === null) return "暂无相关资料！";
                for(let i=0; i<need_check.length; ++i){
                    detail.push(<a>{need_check[i].name}<br/></a>)
                }
                return detail;
            case "并发症":
                let accompany_diseases = Entry.accompany_diseases;
                if(accompany_diseases === null) return "无";
                for(let i=0; i<accompany_diseases.length; ++i){
                    detail.push(<a>{accompany_diseases[i].name}<br/></a>)
                }
                return detail;
            case "治疗":
                let cure_by = Entry.cure_by;
                if(cure_by === null) return "暂无相关资料！";
                for(let i=0; i<cure_by.length; ++i){
                    detail.push(<a>{cure_by[i].name}<br/></a>)
                }
                return detail;
            case "宜吃食物":
                let do_eat = Entry.do_eat;
                if(do_eat === null) return "无！";
                for(let i=0; i<do_eat.length; ++i){
                    detail.push(<a>{do_eat[i].name}<br/></a>)
                }
                return detail;
            case "忌吃食物":
                let no_eat = Entry.no_eat;
                if(no_eat === null) return "无";
                for(let i=0; i<no_eat.length; ++i){
                    detail.push(<a>{no_eat[i].name}<br/></a>)
                }
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
                    {this.state.result.desc}
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
