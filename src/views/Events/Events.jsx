import React from "react";

// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";


function Events(props) {
  const { classes } = props;
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={8}>
          <p>Here in this tab maybe we can have a calendar application to show month and weekly views, with functionality to </p>
        </GridItem>
        <GridItem xs={12} sm={12} md={4}>
          
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default (Events);
