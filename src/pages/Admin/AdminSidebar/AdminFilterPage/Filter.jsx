import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import dashboardStyle from "../../../../assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx";

class Filter extends React.Component {
  
  render() {
    return (
      <p>This is the Filter page, where you'll be able to filter members, staff, events, services, and medical equipment</p>
    );
  }
}

export default withStyles(dashboardStyle)(Filter);
