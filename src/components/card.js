import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Typography from '@material-ui/core/Typography';
import LinkIcon from '@material-ui/icons/Link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as ReactGA from "react-ga";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import Button from "@material-ui/core/Button/Button";

const styles = theme => ({
  card: {
    width: 550,
    marginBottom: "8px",
    textAlign: "center",
  },
  [theme.breakpoints.down('xs')]: {
    card: {
      width: 350,
    },
  },
  [theme.breakpoints.up('md')]: {
    card: {
      width: 850,
    },
  },
  paragraphText: {
    textAlign: "left",
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    marginLeft: 'auto',
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    marginLeft: 'auto',
    transform: 'rotate(180deg)',
  },
});

class ClassCard extends React.Component {
  state = { expanded: this.props.open };

  handleExpandClick = () => {
    ReactGA.event({
      category: 'ClassCategory',
      action: 'Class expanded',
      label: this.props.title,
    });
    this.setState(state => ({ expanded: !state.expanded }));
  };

  handleHyperlinkClick = () => {
    ReactGA.event({
      category: 'ClassCategory',
      action: 'Class clicked',
      label: this.props.url,
    });
    window.open(this.props.url, '_blank');
  };

  render() {
    const { classes, title, shortDesc, longDesc, url, schedule, imageURL, open } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            title={title}
            subheader={schedule}
          />
          <CardContent>
            <Typography component="p" className={classes.paragraphText}>
              {shortDesc}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableSpacing>
            <Tooltip title={this.props.url} placement="top">
              <Button aria-label="Find more info" variant="text"
                onClick={this.handleHyperlinkClick}>
                <LinkIcon />
                &nbsp;&nbsp;Hope Website
              </Button>
            </Tooltip>
            {longDesc !== null && longDesc.length !== 0 &&
              <Button variant="text" color="default" className={this.state.expanded ? classes.expandOpen : classes.expand}
                onClick={this.handleExpandClick}>
                {this.state.expanded ? null : "More"}
                <ExpandMoreIcon />
              </Button>
            }
          </CardActions>
          <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
            <CardContent>
              {longDesc.map((desc, idx) => {
                return (
                  <Typography key={idx} paragraph className={classes.paragraphText}>
                    {desc}
                  </Typography>
                );
              })}
            </CardContent>
          </Collapse>
        </Card>
      </div>
    );
  }
}

ClassCard.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  shortDesc: PropTypes.string.isRequired,
  longDesc: PropTypes.array.isRequired,
  url: PropTypes.string.isRequired,
  schedule: PropTypes.string.isRequired,
  imageURL: PropTypes.string,
  open: PropTypes.bool.isRequired,
};

export default withStyles(styles)(ClassCard);