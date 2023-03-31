import styled from 'styled-components'
export const BoxHeader = styled.div`
   width:100%;
    height:100px;
    display:flex;
    img {
    width: 40px;
    height: 40px; 
    }

    .logo{
        flex:1;
        display:flex;
        align-items:center;
        justify-content:center;
    }
    .menu{ 
        flex:7;

        @media (max-width: 1440px){
        display:flex;
        justify-content:flex-end;
    }
    @media (min-width: 480px){
        display:flex;
        justify-content:center;
        align-items:center;
    }
    }
    @media (min-width: 1440px){
        .line {
        position:relative;
        display:flex;
        flex:6;
        justify-content:center;
        align-items:center;
        transform:translate(50px);
       
       
   }
   .line::before{
       content:"";
       position:absolute;
       width:100%;
       height:2px;
       
       background-color:#969696;
   }
     }
   
    
`

export const Teste = styled.div`
    width:100%;
    height:100px;
    display:flex;
    div{ 
        height:100%;
        border: solid red 2px;
        box-sizing:border-box;
    }
    .logo{
        flex:1;
    }
    .menu{ 
        flex:7;
    }
    .line {
        position:relative;
       display:flex;
       flex:6;
       justify-content:center;
       align-items:center;
       transform:translate(20px);
        
        
    }
    .line::before{
        content:"";
        position:absolute;
        width:100%;
        height:5px;
        background-color:var(--white-color);
    }
`
