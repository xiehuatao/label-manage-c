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
`

export default Wrapper;