/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React Base Styles
import colors from "../base/colors";

const { transparent } = colors;

const iconButton = {
  styleOverrides: {
    root: {
      "&:hover": {
        backgroundColor: transparent.main,
      },
    },
  },
};

export default iconButton;
