import React from 'react';
import {useHistory, withRouter} from "react-router-dom";
import { AddBtn, Box, Header,Footer } from './styled';
import { Button } from 'antd';
import SearchInput from "./components/SearchInput";
import ManageTable from "./components/ManageTable";
import ROUTE from "../../enums/route";

function ClassifyManage() {
    const history = useHistory();
    const add = () => {
        history.push(ROUTE.CLASSIFY_NEW);
    }
    return (
        <>
           <Box>
               <Header>
                   <SearchInput/>
               </Header>
               <AddBtn style={{marginTop:15}}>
                   <Button type={"primary"} className={"addBtn"} onClick={add} style={{margin: "20px auto 20px"}}>新增</Button>
               </AddBtn>
               <Footer>
                   <ManageTable/>
               </Footer>
           </Box>
        </>
    )
}

export default withRouter(ClassifyManage);