import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    
    .searchBtn, .addBtn {
        width: 66px;
        height: 30px;
        font-size: 12px;
    }
    
    .ant-table-tbody {
        font-size: 13px;
    }
    
    .ant-table-cell::before {
        width: 0 !important;
    }
    
    .ant-table-cell {
        .ant-switch[aria-checked="false"] .ant-switch-inner {
            margin: 0 7px 0 25px;
        }
    }    
`

export default Wrapper;