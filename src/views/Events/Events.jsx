import React from "react";
// core components
import GridItem from "../../components/Grid/GridItem.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import CustomInput from "../../components/CustomInput/CustomInput.jsx";
import Button from "../../components/CustomButtons/Button.jsx";
import Card from "../../components/Card/Card.jsx";
import CardHeader from "../../components/Card/CardHeader.jsx";
import CardAvatar from "../../components/Card/CardAvatar.jsx";
import CardBody from "../../components/Card/CardBody.jsx";
import CardFooter from "../../components/Card/CardFooter.jsx";
import Typography from "@material-ui/core/Typography";
import Table from "../../components/Table/Table.jsx";
import { TableHead, TableBody, TableCell } from "@material-ui/core";

function Events(props) {
  const { classes } = props;
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={4}>
        <Card > 
            <CardHeader color="primary">
              <h3 className={"event_header"}>Search</h3>
              <p>Search for an event by date and time</p>
            </CardHeader>
                 <form > 
                  <CardBody>
                    <CustomInput
                      id="date"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "date",

                      }}
                    />
                    <CustomInput
                      id="time"
                      formControlProps={{
                        fullWidth: true
                      }}
                      inputProps={{
                        type: "time",

                      }}
                    />
                  </CardBody>
                  <CardFooter>
                    <Button variant="contained">
                      Search
                    </Button>
                  </CardFooter>
                </form>
              </Card>
          
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="primary">
                <h4 className={"event_header"}>Results</h4>
              </CardHeader>
              <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["Name", "Description", "Date", "Time", ""]}
              tableData={[
                [<h5>Yoga</h5>, 
                "a Hindu spiritual and ascetic discipline, a part of which, including breath control, simple meditation, and the adoption of specific bodily postures, is widely practiced for health and relaxation.",
                "2/21/2019", "5:00PM", <a href="">edit</a>],
                [<h5>Dinner</h5>, "Delicious meals with friends and family.", "2/21/2019", "6:00PM", <a href="">edit</a>],
              ]}
            />
          </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
                <h4 className={"event_header"}>Add Event</h4>
            </CardHeader>
            <CardBody>
              <CustomInput
                labelText="Event Name..."
                id="name"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  type: "name",

                }}
              />
              <CustomInput
                labelText="Event Description..."
                id="description"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  type: "description",
                }}
              />
              <CustomInput
                id="date"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  type: "date",

                }}
              />
              <CustomInput
                id="time"
                formControlProps={{
                  fullWidth: true
                }}
                inputProps={{
                  type: "time",
                }}
              />
            </CardBody>
            <CardFooter>
              <Button variant="contained">
                Add Event
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default (Events);
