import styled from "styled-components";
import closeIcon from "../../assets/shared/icon-close.svg"
import openIcon from "../../assets/shared/icon-hamburger.svg"

export const OpenIcon = styled.div`
    background-image:url(${openIcon});
    width:24px;
    height:21px;

`
export const CloseIcon = styled.div`
    background-image:url(${closeIcon});
    width:20px;
    height:20px;

    
`

export const Menu = styled.div`
    display:flex;
    flex-direction:column;
    align-content:space-between;
    height:100vh;
    align-items:flex-start;
    backdrop-filter:blur(4px)
    color:white;
    padding:10px;

    a {
        margin-top:20px;
        font:var(--heading-5);
        font-size:16px;
        letter-spacing: 2.7px;
        width:100%;
        color:white;
        background-color:transparent;
        border:none;
        cursor:pointer;
    }
    a:hover { 
        border-right: 3px solid #979797 ;
        

     }
     a:active {
        border-right: 3px solid var(--white-color) ;
        

     }
     span {
        letter-spacing: 2.7px;
        font-weight:bold;
    }    
    .menu_close{
        display: flex;
        width: 100%;
        height: 70px;
        justify-content: end;
        align-items: center;
    }
`