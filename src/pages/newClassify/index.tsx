import React, {useState} from 'react';
import {withRouter} from "react-router-dom";
import ClassifyForm from "../../components/classifyForm";



const NewClassify: React.FC = () => {
    function onclickNew () {
        console.log("新增提交")
    }
    return (
        <ClassifyForm btnOperate={onclickNew} judgeNew={true}/>
    );
}

export default withRouter(NewClassify);