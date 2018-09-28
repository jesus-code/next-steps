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

class SummaryPage extends React.Component {

  render() {
    const { classes, questions, categories, classesOffered } = this.props;
    
    let renderStart = Date.now();

    let sortedCategories = this.calculateCategories(questions, categories);

    let personAge;
    if (appState.personAge === "")
      personAge = 30;
    else
      personAge = parseInt(appState.personAge);
    
    let personGender = appState.personGender;
    ReactGA.set({"name":appState.personName, "personAge": personAge, "personGender": personGender });
    
    ReactGA.timing({
      category: 'Function Timings',
      variable: 'summaryRender',
      value: Date.now() - renderStart, // in milliseconds
    });

    return (
      <div>
        <Typography variant="display3" gutterBottom className={classes.summary} >
          Summary
        </Typography>
        {sortedCategories.map((c, index) => {

          ReactGA.event({
            category: 'ClassCategoryRecommendation',
            action: c.category,
            value: c.total,
          });
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

              {this.getClasses(c.classes, classesOffered, personAge, personGender).map((classObj, idx) => {
                return (
                  <ClassCard key={idx} title={classObj.title} shortDesc={classObj.shortDesc} open={false}
                             longDesc={classObj.longDesc} url={classObj.url} schedule={classObj.schedule}/>
                );
              })}
              </Grid>
          );
        })}
      </div>
    );
  }

  initCategoryTotals(categories)
  {
    for (let catName in categories)
    {
      let cat = categories[catName];
      if (cat === null || cat === undefined) {
        ReactGA.exception({
          description: 'initCategoryTotals - ' + catName,
          fatal: false
        });
        continue;
      }
      cat.hits = 0;
      cat.total = 0;
    }
  }

  calculateCategories(questions, categories)
  {
    this.initCategoryTotals(categories);

    for (let q of questions) {
      if (q.hasOwnProperty("value") && q.value > 0) {
        for (let category of q.categories)
        {
          let c = categories[category];
          if (c === null || c === undefined) {
            ReactGA.exception({
              description: 'category is null - ' + category,
              fatal: false
            });
            continue;
          }
          c.hits++;
          c.total = c.total + q.value;
        }
      }
    }

    let catArray = Object.values(categories);
    catArray.sort(function (a, b) {
      if (a.total > 0) {
        if (b.total > 0) {
          return ((a.total / a.hits) < (b.total / b.hits));
        }
        return -1;
      }
      if (b.total > 0)
        return 1;
      else
        return 0;
    });

    catArray = catArray.slice(0, 2);//only take the top two categories
    return catArray;
  }

  getClasses(classKeys, classesOffered, personAge, personGender)
  {
    let categoryClasses = [];
    for (let classKey of classKeys) {
      let classObj = classesOffered.classes[classKey];
      if (classObj === null || classObj === undefined) {
        ReactGA.exception({
          description: 'Class in category but not in class list - ' + classKey,
          fatal: false
        });
        continue;
      }
      if (!classObj.hasOwnProperty("beginAge")) {
        ReactGA.exception({
          description: 'Class in category but not in class list - beginAge -- ' + classKey,
          fatal: false
        });
        continue;
      }
      if (!classObj.hasOwnProperty("endAge")) {
        ReactGA.exception({
          description: 'Class in category but not in class list - endAge -- ' + classKey,
          fatal: false
        });
        continue;
      }
      if (!classObj.hasOwnProperty("gender")) {
        ReactGA.exception({
          description: 'Class in category but not in class list - gender -- ' + classKey,
          fatal: false
        });
        continue;
      }
      if (personAge < classObj.beginAge)
        continue;
      if (personAge > classObj.endAge)
        continue;
      if (classObj.gender === "either" || classObj.gender === personGender)
        categoryClasses.push(classObj);
    }
    return categoryClasses;
  }
}

SummaryPage.propTypes = {
  classes: PropTypes.object.isRequired,
  questions: PropTypes.array.isRequired,
  categories: PropTypes.object.isRequired,
  classesOffered: PropTypes.object.isRequired,
};

export default withStyles(styles)(SummaryPage);