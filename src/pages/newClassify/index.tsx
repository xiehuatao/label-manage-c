import React, {useState} from 'react';
import {withRouter} from "react-router-dom";
import {Button, Checkbox, Col, DatePicker, Form, Input, Row, Select, Space,} from 'antd';
import {CheckboxValueType} from 'antd/lib/checkbox/Group';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';


const {Option} = Select;

const NewClassify: React.FC = () => {
    const plainOptions = ['运营机构', '主管财政', '采购人', '供应商', '代理机构', '专家', '银行'];
    const CheckboxGroup = Checkbox.Group;
    const defaultCheckedList = ['Apple', 'Orange'];
    const [checkedList, setCheckedList] = useState<CheckboxValueType[]>(defaultCheckedList);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);
    const onChange = (list: CheckboxValueType[]) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
    };

    const onCheckAllChange = (e: CheckboxChangeEvent) => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
    };

    return (
        <Form colon={false} layout={"vertical"}>
            <Row gutter={2}>
                <Col span={6}>
                    <Form.Item label="类型名称" style={{marginBottom: 0}}>
                        <Input placeholder="unavailable choice" id="error"/>
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item label="类型编码" style={{marginBottom: 0}}>
                        <Input placeholder="unavailable choice" id="error"/>
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={2}>
                <Col span={12}>
                    <Form.Item
                        label="描述"
                        validateStatus="error"
                        help="Should be combination of numbers & alphabets"
                    >
                        <Input.TextArea allowClear showCount style={{margin:0}}/>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={6}>
                    <Form.Item hasFeedback validateStatus="success">
                        <span>可用用户类型</span>
                        <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                            全选
                        </Checkbox>
                        <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange}/>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <Form.Item label="备注" validateStatus="error" hasFeedback help="Should have something">
                        <Input.TextArea allowClear showCount/>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={0}>
                <Col span={6}>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            提交
                        </Button>
                    </Form.Item>
                </Col>
                <Col span={6}>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            取消
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
}

export default withRouter(NewClassify);