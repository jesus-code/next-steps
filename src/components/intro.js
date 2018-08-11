import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Typography from "@material-ui/core/Typography/Typography";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    textAlign: 'middle',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    minWidth: 120,
  },
  welcome: {
    marginLeft: '80px',
    marginRight: '80px',
  },
  menu: {
    width: 200,
  },
});

const genders = [
  {
    value: '0',
    label: 'Male',
  },
  {
    value: '1',
    label: 'Female',
  },
];

class IntroPage extends React.Component {
  state = {
    name: '',
    age: '',
    gender: '',
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <div>
        <Typography variant="display3" gutterBottom className={classes.welcome}>
          Welcome
        </Typography>
        <Typography variant="headline" gutterBottom className={classes.welcome}>
          Let's find the next step in your Hope Journey!
        </Typography>
        <form noValidate>
            <TextField
              id="name"
              label="Name (optional)"
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange('name')}
              margin="normal"
            />
            <TextField
              id="number"
              label="Age"
              value={this.state.age}
              onChange={this.handleChange('age')}
              type="number"
              className={classes.textField}
              margin="normal"
            />
            <TextField
              id="select-gender"
              select
              label="Gender"
              className={classes.textField}
              value={this.state.gender}
              onChange={this.handleChange('gender')}
              SelectProps={{
                MenuProps: {
                  className: classes.menu,
                },
              }}
              margin="normal"
            >
              {genders.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
        </form>
      </div>
    );
  }
}

IntroPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IntroPage);