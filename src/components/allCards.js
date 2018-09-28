import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography/Typography";
import ClassCard from "./card";
import Grid from "@material-ui/core/Grid/Grid";
import {appState} from "../state";
import ReactGA from "react-ga";

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    textAlign: 'middle',
    marginBottom: '35px',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  summary: {
    marginLeft: '80px',
    marginRight: '80px',
  },
  categoryName: {
    marginLeft: '80px',
    marginRight: '80px',
    fontWeight: "bold",
    color: theme.palette.primary.main,
  },
});

class AllCardsPage extends React.Component {

  render() {
    const { classes, categories, classesOffered } = this.props;

    let sortedCategories = Object.values(categories);

    return (
      <div>
        <Typography variant="display3" gutterBottom className={classes.summary} >
          All Options!!!
        </Typography>
        {sortedCategories.map((c, index) => {

          return (
            <Grid
              key={index}
              container
              direction="column"
              justify="space-between"
              alignItems="center"
              className={classes.container}
            >
              <Typography variant="display1" gutterBottom className={classes.categoryName}>
                {c.category}
              </Typography>

              {this.getClasses(c.classes, classesOffered).map((classObj, idx) => {
                return (
                  <ClassCard key={idx} title={classObj.title} shortDesc={classObj.shortDesc}
                             longDesc={classObj.longDesc} url={classObj.url} schedule={classObj.schedule}/>
                );
              })}
            </Grid>
          );
        })}
      </div>
    );
  }


  getClasses(classKeys, classesOffered)
  {
    let categoryClasses = [];
    for (let classKey of classKeys) {
      let classObj = classesOffered.classes[classKey];
      if (classObj === null || classObj === undefined) {
        console.log('Class in category but not in class list - ' + classKey);
        continue;
      }
      if (!classObj.hasOwnProperty("beginAge")) {
        console.log('Class in category but not in class list - beginAge -- ' + classKey);
        continue;
      }
      if (!classObj.hasOwnProperty("endAge")) {
        console.log('Class in category but not in class list - endAge -- ' + classKey);
        continue;
      }
      if (!classObj.hasOwnProperty("gender")) {
        console.log('Class in category but not in class list - gender -- ' + classKey);
        continue;
      }
      categoryClasses.push(classObj);
    }
    return categoryClasses;
  }
}

AllCardsPage.propTypes = {
  classes: PropTypes.object.isRequired,
  categories: PropTypes.object.isRequired,
  classesOffered: PropTypes.object.isRequired,
};

export default withStyles(styles)(AllCardsPage);