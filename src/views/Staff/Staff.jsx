import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";


import iconsStyle from "../../assets/jss/material-dashboard-react/views/iconsStyle.jsx";

function Staff(props) {
  const { classes } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        
      </GridItem>
    </GridContainer>
  );
}

Staff.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(iconsStyle)(Staff);
