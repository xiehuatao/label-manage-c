import React, {useEffect, useState} from 'react';
import {Button, Checkbox, Col, Form, Input, Row, Switch} from "antd";
import {CheckboxValueType} from "antd/lib/checkbox/Group";
import {CheckboxChangeEvent} from "antd/lib/checkbox";
import {withRouter} from "react-router-dom";


function ClassifyForm (props:any) {

    const plainOptions = ['运营机构','主管财政','采购人','供应商','代理机构','专家','银行'];
    const CheckboxGroup = Checkbox.Group;
    const [checkedList, setCheckedList] = useState<CheckboxValueType[]>();
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

    const backClick=()=>{
        props.history.go(-1)
    }

    return (
        <Form colon={false} layout={"vertical"}>
            <Row gutter={16}>
                <Col span={2}>
                    <Form.Item label="类型名称" style={{marginBottom: 0}} required={true} rules={[{ required: true, message: '不能为空' }]}>
                        <Input placeholder="请输入类型名称" id="error"
                               disabled={!(props.fun === "new")}/>
                    </Form.Item>
                </Col>
                <Col span={2} offset={2}>
                    <Form.Item label="类型编码" style={{marginBottom: 0}} required={true} rules={[{ required: true, message: '不能为空' }]} >
                        <Input placeholder="请输入编码" id="error"
                               disabled={!(props.fun === "new")}/>
                    </Form.Item>
                </Col>
                <Col span={1}>
                    <Form.Item>
                        <Switch style={{marginTop: 40,marginBottom: 0}} checkedChildren={"启用"} unCheckedChildren={"禁用"} />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={2}>
                <Col span={12}>
                    <Form.Item
                        label="描述"
                        required={true}
                        rules={[{ required: true, message: '不能为空' }]}
                    >
                        <Input.TextArea rows={4} style={{margin:0}}/>
                    </Form.Item>
                </Col>
            </Row>

            <Row>
                <Col span={14}>
                    <Form.Item hasFeedback validateStatus="success" label="可用用户类型" required={true}>
                        <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                            全选
                        </Checkbox>
                        <CheckboxGroup options={plainOptions} value={checkedList} onChange={onChange}/>
                    </Form.Item>
                </Col>
            </Row>
            <Row>
                <Col span={12}>
                    <Form.Item label="备注" >
                        <Input.TextArea rows={6}/>
                    </Form.Item>
                </Col>
            </Row>
            <Row gutter={0} style={(props.fun==="view") ? {display:"none"} : {}}>
                <Col span={1}>
                    <Form.Item>
                        <Button type="primary" onClick={props.btnOperate}>
                            提交
                        </Button>
                    </Form.Item>
                </Col>
                <Col span={1}>
                    <Form.Item >
                        <Button style={{backgroundColor:"#F59A23",color:"white"}} onClick={backClick}>
                            取消
                        </Button>
                    </Form.Item>
                </Col>
            </Row>
        </Form>
    );
}

export default withRouter(ClassifyForm);