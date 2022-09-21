import React from "react";
import Wrapper from "./styled";
import { Switch, Route, withRouter} from "react-router-dom";
import Header from "../header";
import ClassifyManage from "../classifyManage";
import InfoManage from "../infoManage";
import NewClassify from "../newClassify";
import ReviseClassify from "../reviseClassify";
import ViewClassify from "../viewClassify";
import NewInfo from "../newInfo";
import ReviseInfo from "../reviseInfo";
import ViewInfo from "../viewInfo";
import ROUTE from "../../enums/route";


function Main() {

    return (
        <Wrapper>
            <Header/>
            <div className={"content"}>
                <Switch>
                    <Route path={ROUTE.CLASSIFY_MANAGE} component={ClassifyManage}/>
                    <Route path={ROUTE.INFO_MANAGE} component={InfoManage}/>
                    <Route path={ROUTE.CLASSIFY_NEW} component={NewClassify}/>
                    <Route path={ROUTE.CLASSIFY_REVISE} component={ReviseClassify}/>
                    <Route path={ROUTE.CLASSIFY_VIEW} component={ViewClassify}/>
                    <Route path={ROUTE.INFO_NEW} component={NewInfo}/>
                    <Route path={ROUTE.INFO_REVISE} component={ReviseInfo}/>
                    <Route path={ROUTE.INFO_VIEW} component={ViewInfo}/>
                </Switch>
            </div>
        </Wrapper>
    )
}

export default withRouter(Main);