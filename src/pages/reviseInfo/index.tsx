import React, {useEffect, useState} from 'react';
import {withRouter} from "react-router-dom";
import BasicInfo from "../../components/basicInfo";


function ReviseInfo() {
    const [values, setValues] = useState<object>({});

    const submit = (val: object) => {
        setValues(val);
    }

    useEffect(() => {

    })

    return (
        <>
            <BasicInfo values={values} submit={submit} operation={"revise"}/>
        </>
    )
}

export default withRouter(ReviseInfo);