import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
  root: {
  },
  formControl: {
    margin: theme.spacing.unit,
  },
  group: {
    flexDirection: 'row',
    display: 'block',
    margin: `${theme.spacing.unit}px 0`,
  },
});

class RadioQuestion extends React.Component {
  state = {
    value: "0",
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
    this.props.question.value = parseInt(event.target.value, 10);
    
  };

  render() {
    const { classes, question } = this.props;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend">{question.text}</FormLabel>
          <RadioGroup
            aria-label="gender"
            name="gender2"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel
              value="1"
              control={<Radio color="primary" />}
              label="Disagree"
              labelPlacement="start"
            />
            <FormControlLabel
              value="2"
              control={<Radio color="primary" />}
              label=""
            />
            <FormControlLabel
              value="3"
              control={<Radio color="primary" />}
              label=""
            />
            <FormControlLabel
              value="4"
              control={<Radio color="primary" />}
              label=""
            />
            <FormControlLabel
              value="5"
              control={<Radio color="primary" />}
              label="Agree"
              labelPlacement="end"
            />
          </RadioGroup>
        </FormControl>
      </div>
    );
  }
}

RadioQuestion.propTypes = {
  classes: PropTypes.object.isRequired,
  question: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioQuestion);

