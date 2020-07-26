import React from 'react';
import {useState} from 'react'

import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch, message,
} from 'antd';
import "../css/addEntryForm.css"
import {history} from "../utils/history";
// const options = [
//     {
//         value: '疾病',
//         label: '疾病',
//     },
//     {
//         value: '症状',
//         label: '症状',
//     },
//     {
//         value: '药品',
//         label: '药品',
//     },
//     {
//         value: '食物',
//         label: '食物',
//     },
//     {
//         value: '检查',
//         label: '检查',
//     },
//     {
//         value: '科室',
//         label: '科室',
//     },
//     {
//         value: '生产商',
//         label: '生产商',
//     },
//
// ];

const {Option} =Select;

export default class EntryAttributeForm extends React.Component {


    onChange=(value)=>{
        console.log(value);
    }

    addSimpleEntry = (values)=>
    {
        console.log("add simple entry")
        console.log(values)
        message.info("暂时只支持添加疾病")
    }


    onFinish = values => {
        console.log('Received values of form: ', values);
        if(values.type==='疾病')
        {
            if (history.location.pathname !== "/")
                history.push("/AddEntryDetail")
        }
        else
            this.addSimpleEntry(values)
    };
    render() {
        return (
            <div >
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    // initialValues={{
                    //     remember: true,
                    // }}
                    onFinish={this.onFinish}
                    className="attributeForm"
                    size={"large"}
                    // initialValues={{ size: componentSize }}
                    // onValuesChange={onFormLayoutChange}
                    // size={componentSize}
                >

                    <Form.Item name="entryName" label="词条名" >
                        <Input className="input" required={true} />
                    </Form.Item>

                    {/*<Form.Item name="type" label="所属类别">*/}
                    {/*    <Cascader*/}
                    {/*        options={options}*/}
                    {/*    />*/}
                    {/*</Form.Item>*/}
                    <Form.Item name="type" label="所属类别">
                        <Select
                            // showSearch
                            style={{ width: "100%" }}
                            placeholder="Select a person"
                            // optionFilterProp="children"
                            // onChange={onChange}
                            // onFocus={onFocus}
                            // onBlur={onBlur}
                            // onSearch={onSearch}
                            // filterOption={(input, option) =>
                            //     option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            // }

                        >
                            <Option value="疾病">疾病</Option>
                            <Option value="症状">症状</Option>
                            <Option value="检查">检查</Option>
                            <Option value="食物">食物</Option>
                            <Option value="药品">药品</Option>
                            <Option value="生产商">生产商</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item >
                        <Button type="primary" htmlType="submit" className="form-button" size={"large"}>创建词条</Button>
                    </Form.Item>
                </Form>
                {/*<Button type="primary" htmlType="submit" className="form-button" size={"large"}>创建词条</Button>*/}
            </div>

        );
    }
}

