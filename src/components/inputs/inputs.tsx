import React from 'react';
import MyInput from "./input/input";


function Inputs(props: {inputs: object[]; submit: (value: string, index: number) => void}) {

    return (
        <>
            {
                props.inputs.map((input: any, index: number) => {
                    return <MyInput type={input.type} value={input.value}
                                    tip={input.tip} options={input.options}
                                    submit={props.submit} index={index}/>
                })
            }
        </>

    )
}

export default Inputs;