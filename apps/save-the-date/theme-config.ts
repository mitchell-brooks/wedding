import styled, { createGlobalStyle } from 'styled-components';

/* eslint-disable-next-line */
export interface GlobalStylesProps {}

export interface ITheme {
  font: {
    primary: string;
    secondary: string;
    light: string;
    normal: string;
    medium: string;
    semibold: string;
    bold: string;
    extrabold: string;
    black: string;
    display: {
      bold: string;
      light: string;
      semibold: string;
    };
  };
  font_size: {
    xxxsmall: string;
    xxsmall: string;
    xsmall: string;
    small: string;
    regular: string;
    large: string;
    larger: string;
    xlarge: string;
  };

  color: {
    primary: string;
    secondary: string;
    accent: string;
    background: {
      white: string;
      light: string;
    };
    white: {
      regular: string;
      lessdark: string;
      dark: string;
      darker: string;
    };
    black: {
      lightest: string;
      light: string;
      regular: string;
    };
  };
  screen: {
    xs: string;
    sm: string;
    md: string;
    lg: string;
  };
}

// Theme

export const theme = {
  font: {
    primary: `'Raleway Regular'`,
    secondary: `'Raleway Medium'`,
    light: `'Raleway Light'`,
    normal: `Raleway Regular'`,
    medium: `'Raleway Medium'`,
    semibold: `'Raleway SemiBold'`,
    bold: `'Raleway Bold'`,
    extrabold: `'Raleway ExtraBold'`,
    black: `'Raleway Black'`,
    display: {
      bold: `'Josefin Sans Bold'`,
      light: `'Josefin Sans Light'`,
      semibold: `'Josefin Sans Semibold'`,
    },
  },
  font_size: {
    xxxsmall: 'font-size: 12px;',
    xxsmall: 'font-size: 14px;',
    xsmall: 'font-size: 16px;',
    small: 'font-size: 17px;',
    regular: 'font-size: 22px; line-height: 30px;',
    large: 'font-size: 28px; line-height: 30px;',
    larger: 'font-size: 40px; line-height: 5px;',
    xlarge: 'font-size: 48px; line-height: 48px;',
  },

  color: {
    primary: '#071435',
    secondary: '#19959e',
    accent: '#06676c',
    background: {
      white: '#ffffff',
      light: '#f8f8f8',
    },
    white: {
      regular: '#ffffff',
      lessdark: '#faf9f8',
      dark: '#f6f6f6',
      darker: '#eeeeee',
    },
    black: {
      lightest: '#ABA8AF',
      light: '#564F62',
      regular: '#071435',
    },
  },
  screen: {
    xs: '575px',
    sm: '767px',
    md: '991px',
    lg: '1199px',
  },
};

export const GlobalStyles = createGlobalStyle<{ theme: ITheme }>`
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
