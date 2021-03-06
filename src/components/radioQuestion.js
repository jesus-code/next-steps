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
    paddingTop: '3em'
  },
  group: {
    flexDirection: 'row',
    display: 'block',
    paddingTop: '1em',
  },
  disagree: {
    paddingRight: '1.5em',
  },
});

class RadioQuestion extends React.Component {
  state = {
    value: this.props.question.value !== undefined ? this.props.question.value.toString() : "",
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
    this.props.question.value = parseInt(event.target.value, 10);

  };

  render() {
    const { classes, question } = this.props;

    return (
      <div className={classes.root}>
        <FormControl component="fieldset">
          <FormLabel component="legend">{question.text}</FormLabel>
          <RadioGroup
            aria-label="formQuestion"
            name="formQuestion"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel
              value="1"
              control={<Radio color="primary" />}
              label="Disagree"
              labelPlacement="start"
              className={classes.disagree}
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

