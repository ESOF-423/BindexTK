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
import CardFooter from "../../../../components/Card/CardFooter.jsx";
import Table from "../../../../components/Table/Table.jsx";

function Events() {
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
          <Card>
            <CardHeader color="info">
              <h4>Search</h4>
              <p>Search for an event by name or date</p>
            </CardHeader>
            <form>
              <CardBody>
                <CustomInput
                  id="date"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "date"
                  }}
                />
                <CustomInput
                  id="name"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    type: "text",
                    placeholder:"Event Name"
                  }}
                />
              </CardBody>
              <CardFooter>
                <Button size="lg">
                  Search
                </Button>
              </CardFooter>
            </form>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="info">
              <h4>Results</h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="info"
                tableHead={["Name", "Description", "Date", "Time", ""]}
                tableData={[
                  [
                    <h5>Yoga</h5>,
                    "A Hindu spiritual and ascetic discipline that is widely practiced for health and relaxation.",
                    "2/21/2019",
                    "5:00PM",
                    "edit"
                  ],
                  [
                    <h5>Dinner</h5>,
                    "Delicious meals with friends and family.",
                    "2/21/2019",
                    "6:00PM",
                    "edit"
                  ]
                ]}
              />
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info">
              <h4>Create Event</h4>
            </CardHeader>
            <CardBody>
              <CustomInput
                labelText="Event Name..."
                id="name"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  type: "name"
                }}
              />
              <CustomInput
                labelText="Event Description..."
                id="description"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  type: "description"
                }}
              />
              <CustomInput
                id="date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  type: "date"
                }}
              />
              <CustomInput
                id="time"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  type: "time"
                }}
              />
            </CardBody>
            <CardFooter>
              <Button size="lg">
                Add Event
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(dashboardStyle)(Events);
