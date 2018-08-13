import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography/Typography";
import ClassCard from "./card";
import Grid from "@material-ui/core/Grid/Grid";

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
  welcome: {
    marginLeft: '80px',
    marginRight: '80px',
  },
  categoryName: {
    marginLeft: '80px',
    marginRight: '80px',
    fontWeight: "bold",
  },
});

class SummaryPage extends React.Component {

  render() {
    const { classes, questions, categories } = this.props;

    function calculateCategories(questions, categories)
    {
      function initCategoryTotals(categories)
      {
        for (let catName in categories)
        {
          let cat = categories[catName];
          cat.hits = 0;
          cat.total = 0;
        }
      }

      initCategoryTotals(categories);
      
      for (let q of questions) {
        if (q.hasOwnProperty("value") && q.value > 0) {
          for (let category of q.categories)
          {
            let c = categories[category];
            if (c == null)
              continue;
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
      
      catArray = catArray.slice(0, 3);
      console.log(catArray);
      return catArray;
    }

    let sortedCategories = calculateCategories(questions, categories);

    return (
      <div>
        <Typography variant="display3" gutterBottom className={classes.welcome} paragraph>
          Summary
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
              <Typography variant="headline" gutterBottom className={classes.categoryName}>
                {c.category}
              </Typography>

              {c.classes.map((classObj, idx) => {
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
}

SummaryPage.propTypes = {
  classes: PropTypes.object.isRequired,
  questions: PropTypes.array.isRequired,
  categories: PropTypes.object.isRequired,
};

export default withStyles(styles)(SummaryPage);