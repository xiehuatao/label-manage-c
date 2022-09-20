import React, {useEffect, useState} from 'react';
import Wrapper from "./styled";
import {Input, Select} from "antd";

function MyInput(props: {type: string; value: string; tip: string; submit: (val: string, index: number) => void; index: number; options: string[]}) {
    const [value, setValue] = useState<string>(props.value);

    const submit = (val: string) => {
        setValue(val);
        props.submit(val, props.index);
    }

    useEffect(() => {
        setValue(props.value)
    }, [props])

    return (
        <Wrapper>
            <div className={"tip"}>
                <label htmlFor={props.tip + "input"} style={{cursor: "pointer"}}>{props.tip}</label>
            </div>
            <div className={"input"}>
                {props.type === "select" ?
                    <Select placeholder={"请输入"} id={props.tip + "input"} onSelect={(val:string) => submit(val)}>
                        {
                            props.options.map((option) => {
                                return <option value={option}>{option}</option>
                            })
                        }
                    </Select>
                    :
                    <Input value={value} id={props.tip + "input"} placeholder={"请输入" + props.tip} style={{height: "32px"}}
                           onChange={(e) => {
                               submit(e.target.value)
                           }}
                    />
                }
            </div>
        </Wrapper>
    )
}

export default MyInput;