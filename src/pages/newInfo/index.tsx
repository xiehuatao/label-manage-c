import React, {useEffect, useState} from 'react';
import { withRouter} from "react-router-dom";
import Wrapper from "./styled";
import BasicInfo from "../../components/basicInfo";


function NewInfo() {
    const [values, setValues] = useState<object>({});

    const submit = (val: object) => {
        setValues(val);
    }

    useEffect(() => {

    })

    return (
        <Wrapper>
            <BasicInfo values={values} submit={submit} operation={"add"}/>
        </Wrapper>
    )
}

export default withRouter(NewInfo);