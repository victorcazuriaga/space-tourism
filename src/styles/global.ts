import {createGlobalStyle} from 'styled-components'
export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed&family=Bellefair&display=swap');
    *{/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

    }
    
    :root {

        /* Colors */
        
        --primary-color:#0B0D17;
        --secondary-color:#D0D6F9;
        --white-color:#FFFFFF;

        /* Tipography */

        --heading-1: 'Bellefair', sans-serif, 150px;
        --heading-2:'Bellefair', sans-serif, 100px;
        --heading-3:'Bellefair', sans-serif, 56px;
        --heading-4:'Bellefair', sans-serif, 32px;
        --heading-5:'Barlow Condensed', sans-serif, 28px;
        --subheading-1:'Bellefair', sans-serif, 28px;
        --subheading-2:'Barlow Condensed', sans-serif, 14px;
        --nav-text:'Barlow Condensed', sans-serif, 16px; 
    }
    body{
        height:100vh;
        width:100vw;
    }
`