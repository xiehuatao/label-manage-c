import React from 'react';
import {withRouter} from "react-router-dom";
import ClassifyForm from "../../components/classifyForm";


function ReviseClassify() {
    function onclickRevise () {
        console.log("修改提交")
    }
    return (
        <>
            <ClassifyForm btnOperate={onclickRevise} fun={"revise"}/>
        </>
    )
}

export default withRouter(ReviseClassify);