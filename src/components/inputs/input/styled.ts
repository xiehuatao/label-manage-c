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
        
        .ant-select {
            width: 130px;
            height: 30px;
            font-size: 12px;
        }
        
        .ant-select-arrow span {
            position: relative;
            top: -3px;
        }
        
        
        // .ant-select-selector {
        //     width: 130px;
        //     height: 27px;
        // }
        //
        
    }
      
    input::-webkit-input-placeholder {
        position: relative;
        top: -2px;
        left: 5px;
        font-size: 12px;
    } 
    
`

export default Wrapper;