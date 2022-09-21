import {Input, Space} from 'antd';
import React, {useState} from 'react';
import Inputs from "../../../components/inputs/inputs";

function SearchInput() {

    const [values, setValues] = useState<string[]>([]);

    let count: number = 0;

    const inputs: object[] = [
        {
            type: "input" ,
            tip: "类型",
            value: values[count++],
        },
        {
            type: "input" ,
            tip: "编码",
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
    return(
        <>
            <Inputs inputs={inputs} submit={submit}/>
        </>
    )
}

export default SearchInput;