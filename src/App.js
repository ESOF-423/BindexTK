import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { withStyles } from '@material-ui/core/styles';
import "./App.css";

const styles = {
  root: {
    width: '100%',
    maxWidth: 500,
  },
};

class App extends Component {
  render() {
    return (
      <div className="App">
        <Typography component="h2" variant="h1" gutterBottom>
          Bindex
        </Typography>
        <Button variant="contained">
          <a
            href="https://github.com/ESOF-423/BindexTK/blob/master/Documentation/UserDocumentation.md"
            target="blank"
          >
            User Documentation
          </a>
        </Button>
        <Button variant="contained">
          <a
            href="https://github.com/ESOF-423/BindexTK/blob/master/Documentation/DeveloperDocumentation.md"
            target="blank"
          >
            Developer Documentation
          </a>
        </Button>
      </div>
    );
  }
}

export default withStyles(styles)(App);
