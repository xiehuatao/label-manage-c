import React, {useState} from 'react';
import Wrapper from "./styled";
import {useHistory, withRouter} from "react-router-dom";
import {Button, Space, Switch, Table} from "antd";
import Inputs from "../../components/inputs/inputs";
import {ColumnsType} from "antd/lib/table";
import ROUTE from "../../enums/route";


function InfoManage() {
    const [values, setValues] = useState<string[]>([]);
    const history = useHistory();

    interface dataType {
        key: string,
        name: string,
        encoding: number,
        state: string,
        expirationDate: string,
        category: string,
    }

    const columns: ColumnsType<dataType> = [
        {
            title: "标签名称",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "标签编码",
            dataIndex: "encoding",
            key: "encoding",
        },
        {
            title: "状态",
            dataIndex: "state",
            key: "state",
            render: () => (
                <Switch checkedChildren={"启用"} unCheckedChildren={"禁用"} />
            )
        },
        {
            title: "有效期",
            dataIndex: "expirationDate",
            key: "expirationDate",
        },
        {
            title: "所属分类",
            dataIndex: "category",
            key: "category",
        },
        {
            title: "操作",
            key: "action",
            render: () => (
                <Space size="middle">
                    <a onClick={view}>查看</a>
                    <a onClick={revise}>修改</a>
                </Space>
            ),
        }
    ]

    const data: dataType[] = [
        {
            key: '1',
            name: "test",
            encoding: 12222,
            state: "",
            expirationDate: "2020/1/23-2022/9/20",
            category: "分类1",
        },
        {
            key: "2",
            name: "demo",
            encoding: 23333,
            state: "",
            expirationDate: "2021/5/6-2022/10/10",
            category: "分类2",
        },
    ]

    let count: number = 0;
    const inputs: object[] = [
        {
            type: "input",
            tip: "标签名称",
            value: values[count++],
        },
        {
            type: "input",
            tip: "标签编号",
            value: values[count++],
        },
        {
            type: "input",
            tip: "所属分类",
            value: values[count++],
        },
        {
            type: "select",
            tip: "状态",
            value: values[count++],
            options: ["所有", "启用", "禁用"],
        }
    ]

    const submit = (data: string, index: number) => {
        const temp: string[] | undefined = values;
        if (temp) {
            temp[index] = data;
            setValues(temp);
        }
    }

    const search = () => {

    }

    const add = () => {

        history.push(ROUTE.INFO_NEW);
    }

    const view = () => {

        history.push(ROUTE.INFO_VIEW);
    }

    const revise = () => {

        history.push(ROUTE.INFO_REVISE);
    }

    return (
        <Wrapper >
            <Inputs inputs={inputs} submit={submit}/>
            <Button type={"primary"} className={"searchBtn"} onClick={search}>搜索</Button>
            <br />
            <Button type={"primary"} className={"addBtn"} onClick={add} style={{margin: "20px auto 20px"}}>新增</Button>
            <Table columns={columns} dataSource={data} />
        </Wrapper>
    )
}

export default withRouter(InfoManage);