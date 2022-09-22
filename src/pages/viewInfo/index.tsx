import React, {useState} from 'react';
import {withRouter} from "react-router-dom";
import BasicInfo from "../../components/basicInfo";


function ViewInfo() {
    const [values, setValues] = useState<object>({});

    return (
        <>
            <BasicInfo values={values} operation={"view"}/>
        </>
    )
}

export default withRouter(ViewInfo);