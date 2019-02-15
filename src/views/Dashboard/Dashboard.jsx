import React from "react";
import PropTypes from "prop-types";

// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";

// Jsx dashboard style import
import dashboardStyle from "../../assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={3} />
          <GridItem xs={12} sm={6} md={3} />
          <GridItem xs={12} sm={6} md={3} />
          <GridItem xs={12} sm={6} md={3} />
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4} />
          <GridItem xs={12} sm={12} md={4} />
          <GridItem xs={12} sm={12} md={4} />
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6} />
          <GridItem xs={12} sm={12} md={6} />
        </GridContainer>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
