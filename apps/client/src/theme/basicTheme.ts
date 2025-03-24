import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const baseTheme = createTheme({
  palette: {
    mode: "light",
    common: {
      white: "#fff",
    },
    primary: {
      main: "#1976d2",
      dark: "#979797",
    },
    secondary: {
      main: "#dc004e",
    },
    background: {
      default: "#f4f4f4",
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
    h1: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 500,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 500,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
    },
    button: {
      fontWeight: 600,
    },
  },
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          color: "#676767",
          background: "#fff",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          transition: "all 0.3s ease",
          padding: "10px 20px",
          borderRadius: "8px",
          fontSize: "1rem",
          "&:hover": {
            backgroundColor: "#979797",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
          padding: "16px",
          transition: "transform 0.3s ease-in-out",
        },
      },
    },
  },
  spacing: 6,
  shape: {
    borderRadius: 5,
  },
});

const responsiveTheme = responsiveFontSizes(baseTheme);

export default responsiveTheme;
