import React from 'react';

import {
    Form,
    Input,
    Button,
    Select,
    message,
} from 'antd';
import "../css/addEntryForm.css"
import {history} from "../utils/history";

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
                    onFinish={this.onFinish}
                    className="attributeForm"
                    size={"large"}

                >

                    <Form.Item name="entryName" label="词条名" >
                        <Input className="input" required={true} />
                    </Form.Item>

                    <Form.Item name="type" label="所属类别">
                        <Select
                            style={{ width: "100%" }}
                            placeholder="Select a person"
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
            </div>

        );
    }
}

