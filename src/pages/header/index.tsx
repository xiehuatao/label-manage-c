import React from "react";
import Wrapper from "./styled";
import {Menu, MenuProps} from "antd";
import {useHistory} from "react-router-dom";
import ROUTE from "../../enums/route";

function Header() {
    const history = useHistory();

    const items: MenuProps['items'] = [
        {
            label: "标签分类管理",
            key: "classifyManage",

        },
        {
            label: "标签信息管理",
            key: "infoManage"
        }
    ];

    const click: MenuProps['onClick'] = e => {
        if (e.key === "classifyManage") {
            history.push(ROUTE.CLASSIFY_MANAGE);
        } else if (e.key === "infoManage") {
            history.push(ROUTE.INFO_MANAGE);
        }
    };

    return (
        <Wrapper>
            <Menu items={items}
                  mode="horizontal"
                  style={{borderWidth: 0, fontWeight: 700, fontSize: "18px", paddingTop: "20px"}}
                  onClick={click}
                  defaultSelectedKeys={['classifyManage']}
            />
        </Wrapper>
    )
}

export default Header;