export const tokens = {
  grey: {
    100: "#f8f9fa",
    200: "#e9ecef",
    300: "#dee2e6",
    400: "#ced4da",
    500: "#adb5bd",
    600: "#6c757d",
    700: "#495057",
    800: "#343a40",
    900: "#212529",
  },
  primary: {
    // Vibrant Teal
    100: "#ccfbf1",
    200: "#99f6e4",
    300: "#5eead4",
    400: "#2dd4bf",
    500: "#14b8a6",
    600: "#0f766e",
    700: "#0d5a5a",
    800: "#084f45",
    900: "#06332f",
  },
  secondary: {
    // Rich Amber
    100: "#fff3cd",
    200: "#ffe69c",
    300: "#ffda6a",
    400: "#ffc940",
    500: "#ffb300",
    600: "#cc8a00",
    700: "#996500",
    800: "#664100",
    900: "#332000",
  },
  tertiary: {
    // Deep Indigo
    500: "#6366f1",
  },
  background: {
    light: "#252733",
    main: "#171923",
  },
};

// mui theme settings
export const themeSettings = {
  palette: {
    primary: {
      ...tokens.primary,
      main: tokens.primary[500],
      light: tokens.primary[400],
    },
    secondary: {
      ...tokens.secondary,
      main: tokens.secondary[500],
    },
    tertiary: {
      ...tokens.tertiary,
    },
    grey: {
      ...tokens.grey,
      main: tokens.grey[500],
    },
    background: {
      default: tokens.background.main,
      light: tokens.background.light,
    },
  },
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","), // Modern look
    fontSize: 14,
    h1: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 36,
      fontWeight: 700,
      letterSpacing: "0.5px",
    },
    h2: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 28,
      fontWeight: 600,
    },
    h3: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 22,
      fontWeight: 700,
      color: tokens.grey[200],
    },
    h4: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 16,
      fontWeight: 600,
      color: tokens.grey[300],
    },
    h5: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 14,
      fontWeight: 500,
      color: tokens.grey[500],
    },
    h6: {
      fontFamily: ["Poppins", "sans-serif"].join(","),
      fontSize: 12,
      fontWeight: 400,
      color: tokens.grey[700],
    },
  },
};
