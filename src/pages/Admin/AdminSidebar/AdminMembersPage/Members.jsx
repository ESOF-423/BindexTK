import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import dashboardStyle from "../../../../assets/jss/material-dashboard-react/layouts/dashboardStyle.jsx";
// core components
import GridItem from "../../../../components/Grid/GridItem.jsx";
import GridContainer from "../../../../components/Grid/GridContainer.jsx";
import CustomInput from "../../../../components/CustomInput/CustomInput.jsx";
import Button from "../../../../components/CustomButtons/Button.jsx";
import Card from "../../../../components/Card/Card.jsx";
import CardHeader from "../../../../components/Card/CardHeader.jsx";
import CardBody from "../../../../components/Card/CardBody.jsx";
import Table from "../../../../components/Table/Table.jsx";

function Members(props) {
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader color="info">
            <h4>Search</h4>
          </CardHeader>
          <form>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    id="fname"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "text",
                      placeholder: "First Name"
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    id="lname"
                    formControlProps={{
                      fullWidth: true
                    }}
                    inputProps={{
                      type: "text",
                      placeholder: "Last Name"
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={12}>
                  <Button size="lg" fullWidth={true}>
                    Search
                  </Button>
                </GridItem>
              </GridContainer>
            </CardBody>
          </form>
        </Card>
        <Card>
          <CardHeader color="info">
            <h4>Member: Neil L. Diamond</h4>
          </CardHeader>
          <CardBody>
            <GridContainer>
              <GridItem xs={4} sm={4} md={4}>
                <p>Name:</p>
              </GridItem>
              <GridItem xs={8} sm={8} md={8}>
                <p>Neil L. Diamond</p>
              </GridItem>
              <GridItem xs={4} sm={4} md={4}>
                <p>Birthdate:</p>
              </GridItem>
              <GridItem xs={8} sm={8} md={8}>
                <p>1/24/1941</p>
              </GridItem>
              <GridItem xs={4} sm={4} md={4}>
                <p>Phone Number:</p>
              </GridItem>
              <GridItem xs={8} sm={8} md={8}>
                <p>(406) 987 - 7890</p>
              </GridItem>
              <GridItem xs={4} sm={4} md={4}>
                <p>Email Address:</p>
              </GridItem>
              <GridItem xs={8} sm={8} md={8}>
                <p>none</p>
              </GridItem>
              <GridItem xs={4} sm={4} md={4}>
                <p>Address:</p>
              </GridItem>
              <GridItem xs={8} sm={8} md={8}>
                <p>333 Diamond Ave, Paradise Valley, MT 85250</p>
              </GridItem>
              <GridItem xs={4} sm={4} md={4}>
                <p>Emergency Contact:</p>
              </GridItem>
              <GridItem xs={8} sm={8} md={8}>
                <p>Sherry Diamond, daughter, (406) 123 - 4321</p>
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                  <Button size="lg" fullWidth={true}>
                    Edit
                  </Button>
                </GridItem>
            </GridContainer>
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={6}>
        <Card>
          <CardHeader color="info">
            <h4>All Members</h4>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="info"
              tableHead={["Name", "Birthdate", ""]}
              tableData={[
                ["Jerry Smith", "2/21/2019", "edit"],
                ["Larry Wilson", "2/21/2019", "edit"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}

export default withStyles(dashboardStyle)(Members);
