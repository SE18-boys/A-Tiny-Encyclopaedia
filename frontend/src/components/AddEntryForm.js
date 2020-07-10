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
    Switch,
} from 'antd';
import "../css/addEntryForm.css"

const options = [
    {
        value: '疾病',
        label: '疾病',
        children: [
            {
                value: '胃病',
                label: '胃病',
                children: [
                    {
                        value: '胃炎',
                        label: '胃炎',
                    },
                    {
                        value: '胃癌',
                        label: '胃癌',
                    },
                ],
            },
        ],
    },
    {
        value: '药物',
        label: '药物',
        children: [
            {
                value: '外用',
                label: '外用',

            },
            {
                value: '口服',
                label: '口服',
            },
        ],
    },
];


export default class EntryAttributeForm extends React.Component {


    onChange=(value)=>{
        console.log(value);
    }

    onFinish = values => {
        console.log('Received values of form: ', values);
    };
    render() {
        return (
            <div >
                <Form
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 14 }}
                    layout="horizontal"
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={this.onFinish}
                    className="attributeForm"
                    size={"large"}
                    // initialValues={{ size: componentSize }}
                    // onValuesChange={onFormLayoutChange}
                    // size={componentSize}
                >

                    <Form.Item name="entryName" label="词条名" >
                        <Input className="input"/>
                    </Form.Item>

                    <Form.Item name="type" label="所属类别">
                        <Cascader
                            options={options}
                        />
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

