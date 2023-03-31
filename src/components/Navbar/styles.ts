import styled from "styled-components";

export const Nav = styled.nav`
    display:flex;
    align-items:center;
    justify-content:space-around;
    width:100%;
    /* background-color: rgba(255,255,255,0.2); */
    height: 6rem;
    backdrop-filter:blur(20px);
   
    a {
        font:var(--heading-5);
        display:flex;
        align-items:center;
        letter-spacing: 2.7px;
        height:100%;
        color:white;
        background-color:transparent;
        border:none;
        cursor:pointer;
        

    }
    a:hover { 
        border-bottom: 3px solid #979797 ;
        

     }
     a:active {
        border-bottom: 3px solid var(--white-color) ;
        

     }
    span {
        font:var(--heading-5);
        font-weight:bold;
        margin-right:10px;
        }

    @media (max-width:768px) {

        a{  
         font-size:14px;
            
        }
        span {
        display:none;
        letter-spacing: 2.7px;
        font-weight:bold;
    }    
    
    }
    
    
`