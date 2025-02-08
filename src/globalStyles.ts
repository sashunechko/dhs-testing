import { css } from "@emotion/react";

export const GlobalStyles = css`
:root {
    --main: #374375;
    --main-transparent: #FFFCF5;
    --brand: #89515A;
    --accent: #DFAEA0;
    --bg-main: #BABCE5;
    --text: #000000;
    --text-contrast: #ffffff;
  }

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

a{
  margin: 0;
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

  body {
    font-family: "PT Sans", sans-serif;
    background: linear-gradient(var(--main-transparent), var(--bg-main));
    color: var(--main);
    margin: 0;
    padding: 0;
    font-size: 24px;
    height: 100%;
  }

`;
