import React, {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import {Button, DatePicker, Form, Input, Row, Select, Switch} from "antd";
import {RangePickerProps} from "antd/es/date-picker";
import moment from "moment";
import ROUTE from "../../enums/route";
import Wrapper from "./styled";
import 'moment/locale/zh-cn';
import locale from "antd/es/date-picker/locale/zh_CN";


function BasicInfo(props: any) {
    const [values, setValues] = useState<object>({});
    let [isExist, setExist] = useState<boolean>(true);
    let [startDate, setStartDate] = useState<string>("");
    let [endDate, setEndDate] = useState<string>("");
    const [disabledArr, setDisabledArr] = useState<boolean[]>([]);
    const history = useHistory();
    const {TextArea} = Input;
    const dateFormat = 'YYYY/MM/DD';

    const getRules = (Name: string, max: number) => {
        return [
            {
                required: true,
                message: Name + '不能为空'
            },
            {
                max: max,
                message: Name + '长度不超过' + max
            }
        ]
    }

    const startDateChange = (current: any ,dateString: string) => {
        setStartDate(dateString);
    }

    const endDateChange = (current: any ,dateString: string) => {
        setEndDate(dateString);
    }

    const disabledDate: RangePickerProps['disabledDate'] = current => {
        return current && (current < moment(startDate).startOf('day') || current > moment(endDate).endOf('day'));
    };

    const setDisabled = (number: number) =>  {
        let temp: boolean[] = disabledArr;
        let i: number = 0;
        for (i; i < number; i++) {
            temp[i] = true;
        }
        setDisabledArr(temp);
    }

    const categoryChange = (val: string[]) => {

    }

    const dataSelect = (val: string) => {
        setExist(val === "固有期限");
    }

    const cancel = () => {
        history.push(ROUTE.INFO_MANAGE);
    }

    const submit = (data: any) => {
        if (!isExist) {
            data.startDate = null;
            data.endDate = null;
        } else {
            data.startDate = data.startDate.format(dateFormat);
            data.endDate = data.endDate.format(dateFormat);
        }
        if (data.labelState === undefined) {
            data.labelState = true;
        }
        setValues(data);
        props.submit(data);
        history.push(ROUTE.INFO_MANAGE);
    }

    useEffect(() => {
        switch (props.operation) {
            case 'add' : break;
            case 'revise' : setDisabled(2);break;
            case 'view' : setDisabled(9);break;
        }
        setValues(props.values)
    },[])

    return (
        <Wrapper>
            <Form
                layout={"vertical"}
                wrapperCol={{span: 20}}
                onFinish={submit}
                autoComplete={"off"}
            >
                <Row>
                    <Form.Item
                        label={"标签名称"}
                        name={"labelName"}
                        required
                        rules={getRules('标签名称', 15)}

                    >
                        <Input type={"text"} disabled={disabledArr[0]} allowClear/>
                    </Form.Item>
                    <Form.Item
                        label={"标签编码"}
                        name={"labelEncoding"}
                        required
                        rules={getRules('标签编码', 20)}
                    >
                        <Input type={"text"} disabled={disabledArr[1]} allowClear/>
                    </Form.Item>
                    <Form.Item
                        label={"标签值"}
                        name={"labelVal"}
                    >
                        <Input type={"text"} disabled={disabledArr[2]} allowClear/>
                    </Form.Item>
                    <Form.Item
                        name={"labelState"}
                        valuePropName={"checked"}
                    >
                        <Switch checkedChildren={"启用"} unCheckedChildren={"禁用"} defaultChecked disabled={disabledArr[3]}/>
                    </Form.Item>
                </Row>
                <Row>
                    <Form.Item
                        label={"所属分类"}
                        name={"category"}
                    >
                        <Select
                            mode={"multiple"}
                            style={{ width: "150px", marginRight: "30px"}}
                            onChange={(val:string[]) => categoryChange(val)}
                            optionLabelProp={"label"}
                            disabled={disabledArr[4]}
                            allowClear
                        >
                            <option value={"test1"}>
                                test1
                            </option>
                            <option value={"test2"}>
                                test2
                            </option>
                            <option value={"test3"}>
                                test3
                            </option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label={"有效期"}
                        required
                    >
                        <Select
                            style={{width: "150px", marginRight: "30px"}}
                            onSelect={dataSelect}
                            defaultValue={"固有期限"}
                            disabled={disabledArr[5]}
                        >
                            <option value={"永久"}>永久</option>
                            <option value={"固有期限"}>固有期限</option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label={"起始日期"}
                        name={"startDate"}
                        required
                        rules={[{
                            required: isExist,
                            message: '请选择起始日期'},
                        ]}
                        style={{marginRight: 0, display: isExist ? "block" : "none"}}
                    >
                        <DatePicker
                            format={dateFormat}
                            locale={locale}
                            style={{width: "150px"}}
                            onChange={startDateChange}
                            disabledDate={disabledDate}
                            disabled={disabledArr[6]}
                            showTime
                        />
                    </Form.Item>
                    <Form.Item
                        label={"截止日期"}
                        name={"endDate"}
                        required
                        rules={[{
                            required: isExist,
                            message: '请选择截止日期'},
                        ]}
                        style={{display: isExist ? "block" : "none"}}
                    >
                        <DatePicker
                            format={dateFormat}
                            locale={locale}
                            style={{width: "150px"}}
                            onChange={endDateChange}
                            disabledDate={disabledDate}
                            disabled={disabledArr[7]}
                            showTime
                        />
                    </Form.Item>
                </Row>
                <Row>
                    <Form.Item
                        label={"描述"}
                        name={"describe"}
                        required
                        rules={getRules('描述', 100)}
                    >
                        <TextArea
                            autoSize={{ minRows: 8, maxRows: 15 }}
                            maxLength={100}
                            style={{width: "1000px"}}
                            disabled={disabledArr[8]}/>
                    </Form.Item>
                </Row>
                <Form.Item>
                    {
                        !disabledArr[8] ?
                            <>
                                <Button type={"primary"} htmlType="submit" className={"save"}>保&nbsp;&nbsp;存</Button>
                                <Button type={"primary"} className={"cancel"} onClick={cancel}>取&nbsp;&nbsp;消</Button>
                            </>
                        :
                            <Button type={"primary"} className={"cancel"} onClick={cancel}>返&nbsp;&nbsp;回</Button>
                    }
                </Form.Item>
            </Form>
        </Wrapper>
    )
}

export default BasicInfo;