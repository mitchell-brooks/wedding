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
}
main {
height: 100%;
}

  html {
    ${'' /* change this if implementing light/dark mode functionality */}
    color: ${(props) => props.theme.color.primary};

  }
  
  body {
    font-family: ${(props) => props.theme.font.primary};
  }

  
  h1 {
    ${(props) => props.theme.font_size.xlarge};
    font-family: ${(props) => props.theme.font.bold};
    
  }

  h2 {
    ${(props) => props.theme.font_size.larger};
  }

  h3 {
    ${(props) => props.theme.font_size.larger};
    font-family: ${(props) => props.theme.font.bold};
  }

  h4 {
    ${(props) => props.theme.font_size.large};
    font-family: ${(props) => props.theme.font.bold};
  }

  h5 {
    ${(props) => props.theme.font_size.xsmall};
    font-family: ${(props) => props.theme.font.normal};
  }

  p {
    ${(props) => props.theme.font_size.small};
    line-height: 22px;

  }

  input {
    font-family: ${(props) => props.theme.font.normal};
  }

  @media (max-width: ${(props) => props.theme.screen.sm}) {
    h1 {
      ${(props) => props.theme.font_size.larger};
    }

    h2 {
      ${(props) => props.theme.font_size.large};
    }

    h3 {
      ${(props) => props.theme.font_size.regular};
    }

    p {
      ${(props) => props.theme.font_size.small};
    }
  }

  @media (max-width: ${(props) => props.theme.screen.xs}) {

    h1 {

    }

    h2 {

    }

    h3 {
      font-size: 32px;
      line-height: 36px;
    }

    h4 {
      font-size: 22px;
      line-height: 24px;
    }
    p {

    }

    },  }

  button {
    border: none;
    background: none;
    outline: none;
    padding: 0;
    cursor: pointer;
  }

  a {
    cursor: pointer;
  }
`;
