import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridItem from "../../../../components/Grid/GridItem.jsx";
import GridContainer from "../../../../components/Grid/GridContainer.jsx";
import Card from "../../../../components/Card/Card.jsx";
import CardBody from "../../../../components/Card/CardBody.jsx";
import CardHeader from "../../../../components/Card/CardHeader.jsx";
import Table from "../../../../components/Table/Table.jsx";


// Jsx dashboard style import
import dashboardStyle from "../../../../assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  render() {
    return (
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info">
              <h4>Today's Events</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="info"
                tableHead={["Name", "Description", "Date", "Time", ""]}
                tableData={[
                  [
                    <h5>Yoga</h5>,
                    "A Hindu spiritual and ascetic discipline, practiced for health and relaxation.",
                    "2/21/2019",
                    "5:00PM",
                    <Link to="/admin-events">Edit</Link>
                  ],
                  [
                    <h5>Dinner</h5>,
                    "Delicious meals with friends and family.",
                    "2/21/2019",
                    "6:00PM",
                    <Link to="/admin-events">Edit</Link>
                  ]
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info">
              <h4>Alerts</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="info"
                tableHead={["Description", "Date", ""]}
                tableData={[
                  [
                    "Larry is missing an emergency contact.",
                    "2/21/2019",
                    <Link to="/admin-members">View Larry's profile</Link>
                  ],
                  [
                    "Betty needs to pay her membership fee.",
                    "2/21/2019",
                    <Link to="/admin-Members" >View</Link>
                  ]
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
