import {Form, Input, InputNumber, Button, message} from 'antd';
import React from "react";
import "../css/addEntryForm.css"
import MinusCircleOutlined from "@ant-design/icons/lib/icons/MinusCircleOutlined";
import PlusOutlined from "@ant-design/icons/lib/icons/PlusOutlined";
import {addSimpleDetails, updateDetails} from "../services/SearchService";
import {history} from "../utils/history";

const layout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 20,
    },
};


const formItemLayout = {
    labelCol: {
        xs: {span: 24},
        sm: {span: 4},
    },
    wrapperCol: {
        xs: {span: 24},
        sm: {span: 20},
    },
};
const formItemLayoutWithOutLabel = {
    wrapperCol: {
        xs: {span: 24, offset: 0},
        sm: {span: 20, offset: 4},
    },
};


const DiseaseAttributes = [
    {name: 'desc', label: "疾病描述"},
    {name: 'prevent', label: "预防方法"},
    {name: 'yibao_status', label: "是否纳入医保"},
    {name: 'get_prob', label: "患病率"},
    {name: 'easy_get', label: "易感人群"},
    {name: 'get_way', label: "传播途径"},
    {name: 'cure_lasttime', label: "疗程"},
    {name: 'cured_prob', label: "治愈率"},
    {name: 'cost', label: "治疗费用"},
    {name: 'symptom', label: "症状"},
    {name: 'accompany', label: "并发症"},
    {name: 'cure_department', label: "就诊科室"},
    {name: 'cure_way', label: "治疗方式"},
    {name: 'check', label: "检查项目"},
    {name: 'do_eat', label: "宜吃食物"},
    {name: 'not_eat', label: "禁忌食物"},
    {name: 'recommend_dish', label: "推荐菜品"},
    {name: 'common_drug', label: "常用药"},
    {name: 'common_drug', label: "推荐药物"},
    {name: 'drug_detail', label: "具体药物商品推荐"},
]

const multiList = [
    'symptom', 'accompany', 'cure_department', 'cure_way', 'check', 'do_eat', 'not_eat', 'recommend_dish', 'common_drug', 'common_drug', 'drug_detail',
]

export default class AddEntryDetailForm extends React.Component {
    constructor(props) {
        super(props);
        if(this.props.isUpdate===true)
        {


            let values=this.props.initValues
            console.log("before init values is ")
            console.log(values)
            let final=values
            for(const pro in values)
            {
                // console.log(pro)
                // console.log(values[pro])
                if(values[pro]!==null && multiList.indexOf(pro)!==-1)
                {
                    console.log('enter for')
                    let tmp=[]
                    values[pro].forEach(item=>tmp.push(item.name))
                    console.log("tmp is ")
                    console.log(tmp)
                    values[pro]=tmp
                    console.log("values[pro] is "+values[pro])
                }
                if(values[pro]===null)
                {
                    values[pro]=undefined;
                }

            }

            console.log("after init values is ")
            console.log(values)

            this.setState({initValues:this.props.initValues})
        }
        // else
        // {
        //     this.setState({initValues:null})
        // }

    }


    onFinish = values => {
        console.log(values);
        if(this.props.isUpdate===true)
        {
            updateDetails(values)
            message.info("成功更新词条！")
        }
        else
        {
            addSimpleDetails(values)
            message.info("成功添加词条！")

        }
        history.push('/')
    };

    generateFormItem = item => {

        console.log("enter gene")
        console.log("item is ", item)
        if (multiList.indexOf(item.name) !== -1) {

            // console.log("in muiltiList")
            return (
                <div>
                    <Form.List name={item.name} >
                        {(fields, {add, remove}) => {
                            // add()
                            // if (fields.length < 1) {
                            //     add();
                            //     console.log("add")
                            // } else {
                            //     console.log("not add")
                            // }

                            return (
                                <div>

                                    {
                                        (fields||[]).map(
                                            (field, index) =>
                                            {
                                            // console.log("enter map")
                                            // console.log(fields.length)
                                            return (
                                            <div>
                                                <Form.Item
                                                    {...(index === 0 ? formItemLayout : formItemLayoutWithOutLabel)}
                                                    label={index === 0 ? item.label : ''}
                                                    // label={item.label}
                                                    // required={true}
                                                    key={field.key}
                                                    shouldUpdate={true}

                                                >
                                                    <Form.Item
                                                        {...field}
                                                        // validateTrigger={['onChange', 'onBlur']}
                                                        rules={[
                                                            {
                                                                required: index === 0 ? true : true,
                                                                whitespace: true,
                                                                message: "请输入 "+item.label+" 或者按右侧删除符号删除本条记录.",
                                                            },
                                                        ]}
                                                        initialValue={this.props.initValues}
                                                        noStyle
                                                    >
                                                        <Input
                                                               style={{width: '94%'}}/>
                                                    </Form.Item>
                                                    {fields.length > 0 ? (
                                                        <MinusCircleOutlined
                                                            className="dynamic-delete-button"
                                                            style={{margin: '0 8px'}}
                                                            onClick={() => {
                                                                remove(field.name);
                                                            }}
                                                        />
                                                    ) : null}
                                                </Form.Item>
                                            </div>


                                            )
                                            }
                                        )
                                    }
                                    <Form.Item>
                                        <Button
                                            type="dashed"
                                            className="form-button"
                                            onClick={() => {
                                                add();
                                            }}
                                            // style={{width: '60%'}}
                                        >
                                            <PlusOutlined/> 添加{item.label}
                                        </Button>
                                    </Form.Item>
                                </div>

                            );
                        }}
                    </Form.List>
                </div>
            )
        } else {
            // console.log("not in muiltiList")
            return (
                <Form.Item
                    name={item.name}
                    label={item.label}
                >
                    <Input.TextArea allowClear autoSize/>
                </Form.Item>
            )

        }
    }


    render() {
        return (
            <div>
                <Form {...layout} name="nest-messages" onFinish={this.onFinish} initialValues={this.props.isUpdate?this.props.initValues:null} className="attributeForm">
                    <Form.Item
                        name={'name'}
                        label="词条名"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input.TextArea allowClear autoSize/>
                    </Form.Item>
                    {
                        DiseaseAttributes.map(item => this.generateFormItem(item))
                    }
                    <Form.Item>
                        <Button type="primary" htmlType="submit" className="form-button" size={"large"}>提交词条信息</Button>
                    </Form.Item>

                </Form>
            </div>

        );
    }
};



