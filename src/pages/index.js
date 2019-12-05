import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import StepsStepper from "../components/stepper";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import blue from '@material-ui/core/colors/blue';
import grey from '@material-ui/core/colors/grey';
import { ThemeProvider } from '@material-ui/core/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import AppBar from "@material-ui/core/AppBar/AppBar";
import ReactGA from 'react-ga';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 8,
    fontFamily: 'Roboto',
  },
  stepStyle: {
    height: '100%',
  },
  credits: {
    bottom: '2px',
    position: 'fixed',
    width: "100%",
  },
  creditStyle: {
    color: 'grey',
  }
});

class Index extends React.Component {

  render() {
    const { classes } = this.props;

    ReactGA.initialize('UA-124359310-1', {
      debug: window.location.href.indexOf("localhost") > -1,
    });
    window.onerror = function (msg, url, lineNo, columnNo, error) {
      let string = msg.toLowerCase();
      let substring = "script error";
      let message = "";
      if (string.indexOf(substring) > -1) {
        message = ('Script Error: See Browser Console for Detail' + string);
      } else {
        message = [
          'Message: ' + msg,
          'URL: ' + url,
          'Line: ' + lineNo,
          'Column: ' + columnNo,
          'Error object: ' + JSON.stringify(error)
        ].join(' - ');
      }

      ReactGA.exception({
        description: message,
        fatal: true
      });

      return false;
    };
    return (

      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <AppBar color="default" >
            <Toolbar>
              <Typography variant="h5" color="inherit">
                Your Journey at Hope — Taking the Next Steps
            </Typography>
            </Toolbar>
          </AppBar>
          <StepsStepper className={classes.stepStyle} />
          <Typography variant="body2" className={classes.credits}>
            Created by <a href="https://github.com/jesus-code"
              target="_blank"
              rel="noopener noreferrer" className={classes.creditStyle}> Jesus Code </a>
          </Typography>
        </div>
      </ThemeProvider>
    );
  }
}

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: grey,
  },
});
Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);
