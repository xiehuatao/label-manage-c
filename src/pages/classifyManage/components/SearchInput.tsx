import {Button, Input, Space} from 'antd';
import React, {useState} from 'react';
import Inputs from "../../../components/inputs/inputs";

function SearchInput() {

    const [values, setValues] = useState<string[]>([]);

    let count: number = 0;

    const inputs: object[] = [
        {
            type: "input" ,
            tip: "类型名称",
            value: values[count++],
        },
        {
            type: "input" ,
            tip: "类型编码",
            value: values[count++],
        },
        {
            type: "select",
            tip: "状态",
            value: values[count++],
            options: ["所有", "启用", "禁用"],
        }
    ]
    const Search = () => {
    }

    const submit = (data: string, index: number) => {
        const temp: string[] | undefined = values;
        if (temp) {
            temp[index] = data;
            setValues(temp);
        }
    }
    return(
        <>
            <Inputs inputs={inputs} submit={submit}/>
            <Button type={"primary"} className={"searchBtn"} onClick={Search}>搜索</Button>
        </>
    )
}

export default SearchInput;