import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import Button from '@material-ui/core/Button';
import IntroPage from "./intro";
import Questions from "./questions";
import SummaryPage from "./summary";
import {categoryJSON, questionJSON1} from "../data/hope/data";
import StepButton from "@material-ui/core/StepButton/StepButton";

const styles = theme => ({
  root: {
    margin: 'auto',
  },
  button: {
    marginRight: theme.spacing.unit,
  },
  completed: {
    display: 'inline-block',
  },
  instructions: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit,
  },
  contentArea: {
    paddingBottom: "3rem",
  },
  bottomButtons: {
    bottom: '10px',
    position: 'fixed',
    width: '100%',
  },
});

function getSteps() {
  return ['Welcome', 'Survey', 'Recommendations'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return <IntroPage/>;
    case 1:
      return <Questions questions={questionJSON1.questions}/>;
    case 2:
      return <SummaryPage questions={questionJSON1.questions} categories={categoryJSON.categories}/>;
    default:
      return 'Unknown step';
      
  }
}


class StepsStepper extends React.Component {
  state = {
    activeStep: 0,
    completed: {},
  };

  totalSteps = () => {
    return getSteps().length;
  };

  handleNext = () => {
    let activeStep;

    if (this.isLastStep() && !this.allStepsCompleted()) {
      // It's the last step, but not all steps have been completed,
      // find the first step that has been completed
      const steps = getSteps();
      activeStep = steps.findIndex((step, i) => !(i in this.state.completed));
    } else {
      activeStep = this.state.activeStep + 1;
    }
    this.setState({
      activeStep,
    });
  };

  handleBack = () => {
    const { activeStep } = this.state;
    this.setState({
      activeStep: activeStep - 1,
    });
  };

  handleStep = step => () => {
    this.setState({
      activeStep: step,
    });
  };

  completedSteps() {
    return Object.keys(this.state.completed).length;
  }

  isLastStep() {
    return this.state.activeStep === this.totalSteps() - 1;
  }

  allStepsCompleted() {
    return this.completedSteps() === this.totalSteps();
  }

  render() {
    const { classes } = this.props;
    const steps = getSteps();
    const { activeStep } = this.state;

    return (
      <div className={classes.root}>
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => {
            return (
              <Step key={label}>
                <StepButton
                  onClick={this.handleStep(index)}
                  completed={this.state.completed[index]}
                >
                  {label}
                </StepButton>
              </Step>
            );
          })}
        </Stepper>
        <div>
          <div className={classes.contentArea}>
            {getStepContent(activeStep)}
          </div>
          <div className={classes.bottomButtons}>
            <Button
              disabled={activeStep === 0}
              onClick={this.handleBack}
              className={classes.button}
              color="secondary"
              variant="outlined"
            >
              Back
            </Button>
            {activeStep !== steps.length - 1 &&
            <Button
              variant="contained"
              color="primary"
              onClick={this.handleNext}
              className={classes.button}
            >
              Next
            </Button>
            }
          </div>
        </div>
      </div>
    );
  }
}

StepsStepper.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(StepsStepper);