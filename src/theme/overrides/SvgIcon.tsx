const SvgIcon = () => {
  return {
    MuiSvgIcon: {
      styleOverrides: {
        fontSizeSmall: {
          width: 24,
          height: 24,
          fontSize: 'inherit'
        },
        fontSizeLarge: {
          width: 32,
          height: 32,
          fontSize: 'inherit'
        }
      }
    }
  };
};

export default SvgIcon;
