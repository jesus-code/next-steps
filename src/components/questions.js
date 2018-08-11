import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import RadioQuestion from "./radioQuestion";

const styles = theme => ({
  root: {
    // display: 'block',
  },
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    flexDirection: 'row',
    margin: `${theme.spacing.unit}px 0`,
  },
});

class Questions extends React.Component {

  render() {
    const { questions, classes } = this.props;

    return (
      <div className={classes.root}>
        {questions.map((q, index) => {
          return (
            <RadioQuestion question={q} key={index}/>
          );
        })}
      </div>
    );
  };
}

Questions.propTypes = {
  classes: PropTypes.object.isRequired,
  questions: PropTypes.array.isRequired,
};

export default withStyles(styles)(Questions);