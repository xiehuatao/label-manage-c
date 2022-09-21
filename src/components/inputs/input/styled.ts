import styled from "styled-components";

const Wrapper = styled.div`
    display: inline-block;
    margin-right: 75px;

    .tip {
        margin-bottom: 8px;
        font-size: 12px;
    }
    
    .input {
        width: 130px;
        
        .ant-select-selector {
            position: relative;
            top: -2px;
            width: 130px;
            font-size: 12px;
        }
        
        
    }
      
    input::-webkit-input-placeholder {
        font-size: 12px;
    } 
    
`

export default Wrapper;