import styled from "styled-components";

export const Container = styled.div`

    p{
    font-size: 13px;
    color: B8B8D4;
}
    h1{
    margin: 0;
    padding: 0;
    font-size: 26px;
}
    hr{
    height 1px;
    border: 0;
    background-color: #16195c;
    margin: 30px 0;
}

    label{
        font-size: 13px;

    }

    button{
        background-color: #25cd89;
        color: white;
        font-size: 14px;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;

        
    }
    .backButton{
        background-color: #16195c;
        margin-right: 20px;
        transition: 0.20s;
        
            &:hover{
                background-color: #16197c;
            }
    }

`