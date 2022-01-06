import styled, { createGlobalStyle } from 'styled-components';

/* eslint-disable-next-line */
export interface GlobalStylesProps {}

export const GlobalStyles = createGlobalStyle`
/*
   Use a more-intuitive box-sizing model.
*/
*, *::before, *::after {
  box-sizing: border-box;
}
/*
   Remove default margin
*/
* {
  margin: 0;
}
/*
   Allow percentage-based heights in the application
*/
html, body {
  height: 100%;
}
/*
  Typographic tweaks!
   Add accessible line-height
   Improve text rendering
*/
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
}
/*
   Improve media defaults
*/
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}
/*
   Remove built-in form typography styles
*/
input, button, textarea, select {
  font: inherit;
}
/*
   Avoid text overflows
*/
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
/*
   Create a root stacking context
*/
#root, #__next {
  isolation: isolate;
	height: 100%;
--shadow-color: 0deg 0% 0%;
  --shadow-elevation-low:
    -0.2px 1px 1.3px hsl(var(--shadow-color) / 0.08),
    -0.4px 1.7px 2.1px -0.9px hsl(var(--shadow-color) / 0.1),
    -0.9px 3.9px 4.9px -1.8px hsl(var(--shadow-color) / 0.12);
  --shadow-elevation-medium:
    -0.2px 1px 1.3px hsl(var(--shadow-color) / 0.08),
    -0.8px 3.6px 4.5px -0.6px hsl(var(--shadow-color) / 0.1),
    -1.9px 8.4px 10.6px -1.2px hsl(var(--shadow-color) / 0.11),
    -4.5px 19.4px 24.5px -1.8px hsl(var(--shadow-color) / 0.13);
  --shadow-elevation-high:
    -0.2px 1px 1.3px hsl(var(--shadow-color) / 0.07),
    -1.5px 6.3px 8px -0.2px hsl(var(--shadow-color) / 0.07),
    -2.6px 11.3px 14.3px -0.4px hsl(var(--shadow-color) / 0.08),
    -4px 17.1px 21.6px -0.7px hsl(var(--shadow-color) / 0.08),
    -5.8px 24.9px 31.4px -0.9px hsl(var(--shadow-color) / 0.09),
    -8.3px 35.9px 45.3px -1.1px hsl(var(--shadow-color) / 0.1),
    -11.9px 51.1px 64.5px -1.3px hsl(var(--shadow-color) / 0.1),
    -16.6px 71.7px 90.5px -1.6px hsl(var(--shadow-color) / 0.11),
    -22.9px 98.9px 124.9px -1.8px hsl(var(--shadow-color) / 0.11);
--grid-columns: 1fr 5fr 1fr;
@media(min-width: 768px){
--grid-columns: 1fr 3fr 1fr;
};
};

main {
height: 100%;
}
`;
