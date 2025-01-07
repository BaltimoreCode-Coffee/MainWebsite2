import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#9857D3", // Custom primary color
    },
  },
  components: {
    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color: "#fff", // Default text color
          borderRadius: "0px", // Square shape
          //   "&.Mui-selected": {
          //     backgroundColor: "#9857D3", // Selected background
          //     color: "#fff", // Selected text color
          //   },
          "&:hover": {
            backgroundColor: "#c699f0", // Hover background
          },
        },
      },
    },
  },
});

export default theme;
