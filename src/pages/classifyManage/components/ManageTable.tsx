import {Space, Switch, Table, Tag} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';
import ROUTE from "../../../enums/route";
import {useHistory, withRouter} from "react-router-dom";

const ManageTable = () => {
    const history = useHistory();
    //接口
    interface DataType {
        key: string;
        type: string;
        code:string;
        describe:string;
        useType:string;
        statement:string;
        operation:string;
    }

    const view = () => {
        console.log("view")
        history.push(ROUTE.INFO_VIEW);
    }

    const revise = () => {
        console.log("revise")

    }
    const columns: ColumnsType<DataType> = [
        {
            title: '分类类型',
            dataIndex: 'type',
            key: 'type',
        },
        {
            title: '编码',
            dataIndex: 'code',
            key: 'code',
        },
        {
            title: '描述',
            dataIndex: 'describe',
            key: 'describe',
        },
        {
            title: '可用用户类型',
            dataIndex: 'useType',
            key: 'useType',
        },
        {
            title: '状态',
            dataIndex: 'statement',
            key: 'statement',
            render: () => (
                <Switch checkedChildren={"启用"} unCheckedChildren={"禁用"} />
            )
        },
        {
            title: '操作',
            key: 'operation',
            dataIndex: 'operation',
            render: () => (
                <Space size="middle">
                    <a onClick={view}>查看</a>
                    <a onClick={revise}>修改</a>
                </Space>
            ),
        },
    ];

    const data: DataType[] = [
        {
            key: '1',
            type: '系统标签',
            code: 'XTBM',
            describe: '初始化使用的标签，如：区域',
            useType: '供应商、代理机构',
            statement: '禁用',
            operation: 'sss'
        },
        {
            key: '2',
            type: '统计标签',
            code: 'TJBQ',
            describe: '统计使用标签，多为组合标签',
            useType: '专家，运营机构',
            statement: '禁用',
            operation: 'sss'
        },
    ];
    return (<Table columns={columns} dataSource={data} />);
}

export default withRouter(ManageTable);