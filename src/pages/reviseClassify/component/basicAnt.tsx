import React, {useState} from "react";
import {Form, Input, Row, Switch} from "antd";
;


function BasicAnt (props: any) {
    const [disabledArr, setDisabledArr] = useState<boolean[]>([]);
    const setDisabled = (number: number) =>  {
        let temp: boolean[] = disabledArr;
        let i: number = 0;
        for (i; i < number; i++) {
            temp[i] = true;
        }
        setDisabledArr(temp);
    }
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

    return (

        <Form
            layout={"vertical"}
            wrapperCol={{span: 20}}

            autoComplete={"off"}
        >
            <Row>
                <Form.Item
                    label={"类型名称"}
                    name={"labelName"}
                    required
                    rules={getRules('类型名称', 15)}

                >
                    <Input type={"text"} disabled={disabledArr[0]} allowClear/>
                </Form.Item>
                <Form.Item
                    label={"类型编码"}
                    name={"labelEncoding"}
                    required
                    rules={getRules('类型编码', 20)}
                >
                    <Input type={"text"} disabled={disabledArr[1]} allowClear/>
                </Form.Item>

                <Form.Item
                    name={"labelState"}
                    valuePropName={"checked"}
                >
                    <Switch checkedChildren={"启用"} unCheckedChildren={"禁用"} defaultChecked disabled={disabledArr[3]}/>
                </Form.Item>
            </Row>

        </Form>
    )
}
export default BasicAnt