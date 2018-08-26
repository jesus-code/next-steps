import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import withRoot from '../withRoot';
import StepsStepper from "../components/stepper";
import Toolbar from "@material-ui/core/Toolbar/Toolbar";
import AppBar from "@material-ui/core/AppBar/AppBar";
import ReactGA from 'react-ga';

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 8,
  },
  stepStyle: {
    height: '100%',
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
      if (string.indexOf(substring) > -1){
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
      <div className={classes.root}>
        <AppBar color="default" >
          <Toolbar>
            <Typography variant="title" color="inherit">
              Hope Next Steps
            </Typography>
          </Toolbar>
        </AppBar>
        <StepsStepper className={classes.stepStyle}/>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
