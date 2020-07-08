import React from 'react'
import {Button} from 'antd'
import '../css/BKDetail.css'

const summary = "《CLANNAD》是日本游戏品牌Key继《Kanon》、《AIR》后发行的第三款恋爱冒险游戏，游戏于2004年4月28日发行PC初回限定版，并依此为原作改编或扩充跨媒体制作的作品。\n\n" +
    "游戏PC版在最初公开时的预定发售日期是2002年，后来预定发售日被延期至2003年，之后再一次被延期至2004年4月28日，相比最初的预定延期了2年。在剧情设计上，延续了Key社出品的前两部作品的特点。但与前两部有所不同的是，本作在发布伊始即确定为全年龄对象。因其剧情大部分发生于春季，亦被视为Key社游戏“季节组曲”中的“春”。\n";
const name = "CLANNAD";
const subtitle = "日本Key公司发行的恋爱冒险游戏";
const menu = ["故事背景", "角色介绍", "用语解说", "游戏音乐", "制作人员", "游戏配置"];
export class EntryDetails extends React.Component{
    render() {
        const contentp =[];
        const direction = [];
        for(let i=0; i<menu.length; ++i){
            contentp.push(
                <div class="content-p">
                    <div class="title-1">
                        <div class="bk-flex">
                            <div class="title-detail">
                                <span>
                                    {menu[i]}
                                </span>
                                <a class="title-anchor"></a>
                            </div>
                        </div>
                    </div>
                    <span>123</span>
                </div>
            );
            direction.push(

            )
        }
        return(
            <div>
                <div class="bk-title bk-font36 content-title">
                    {name}
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
                    {subtitle}
                </div>

                <div class="content-summary">
                    {summary}
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
