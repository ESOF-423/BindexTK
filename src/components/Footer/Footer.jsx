import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import ListItem from "@material-ui/core/ListItem";
import List from "@material-ui/core/List";
// core components
import classNames from "classnames";
import footerStyle from "../../assets/jss/material-dashboard-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  // const aClasses = classNames({
  //   [classes.a]: true,
  //   [classes.footerWhiteFont]: whiteFont
  // });
  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://github.com/ESOF-423/BindexTK/blob/master/Documentation/UserDocumentation.md"
                className={classes.block}
                target="blank"
              >
                User Documentation
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://github.com/ESOF-423/BindexTK/blob/master/Documentation/DeveloperDocumentation.md"
                className={classes.block}
                target="blank"
              >
                Developer Documentation
              </a>
            </ListItem>
            <ListItem className={classes.inlineBlock}>
              <a
                href="mailto:bindexdevelopers@gmail.com?Subject=Bindex%20contact"
                className={classes.block}
                target="blank"
              >
                Contact Us
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.right}>
            &copy; {1900 + new Date().getYear()} Your Favorite Software
            Engineers
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(footerStyle)(Footer);
