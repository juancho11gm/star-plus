export const theme = {
  fontFamily: {
    sen: 'Sen, sans-serif',
  },
  colors: {
    backgroundPrimary: '#090b13',
    backgroundSecondary: '#050b12',
    backgroundTertiary: '#35313f',
    textPrimary: '#f9f9f9',
    textSecondary: '#cacaca',
    headerLogin: '#4e4a59',
    buttonPrimary: '#7b00d6',
    buttonSecondary: '#6421ff',
    redOrangeGradient: 'linear-gradient(90deg, #fa1660, #ff6e00)',
  },
};

export const breakpoints = {
  phoneWidth: '0',
  tabletWidth: '768px',
  desktopWidth: '1024px',
};

export const device = {
  tablet: `(min-width: ${breakpoints.tabletWidth})`,
  desktop: `(min-width: ${breakpoints.desktopWidth})`,
};
