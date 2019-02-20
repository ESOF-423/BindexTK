import React from "react";
import { Link } from "react-router-dom";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Header from "../../components/Header/Header.jsx";
import HeaderLinks from "../../components/Header/HeaderLinks.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import GridContainer from "../../components/Grid/GridContainer.jsx";
import GridItem from "../../components/Grid/GridItem.jsx";
import Button from "../../components/CustomButtons/Button.jsx";

import loginPageStyle from "../../assets/jss/material-dashboard-react/views/loginPage.jsx";

import image from "../../assets/img/bg.jpg";

class LoginPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="Belgrade Senior Center"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <h1 align="center">Welcome to the Belgrade Senior Center</h1>
                <h4 align="center">Login as:</h4>
                <br />
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={4} md={2}>
                <Link to="/admin-login">
                  <Button fullWidth={true} >Admin</Button>
                </Link>
              </GridItem>
              <GridItem xs={12} sm={4} md={2}>
                <Button fullWidth={true}>Volunteer</Button>
              </GridItem>
              <GridItem xs={12} sm={4} md={2}>
                <Button fullWidth={true}>Event Sign In</Button>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);
