import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import LinkIcon from '@material-ui/icons/Link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import * as ReactGA from "react-ga";

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
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
    [theme.breakpoints.up('sm')]: {
      marginRight: -8,
    },
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class ClassCard extends React.Component {
  state = { expanded: false };

  handleExpandClick = () => {
    ReactGA.event({
      category: 'ClassCategory',
      action: 'Class expanded',
      label:this.props.title,
    });
    this.setState(state => ({ expanded: !state.expanded }));
  };
  
  handleHyperlinkClick = () => {
    ReactGA.event({
      category: 'ClassCategory',
      action: 'Class clicked',
      label:this.props.url,
    });
    window.open(this.props.url, '_blank');
  };

  render() {
    const { classes, title, shortDesc, longDesc, url, schedule, imageURL } = this.props;

    return (
      <div>
        <Card className={classes.card}>
          <CardHeader
            // avatar={
            //   <Avatar aria-label="Recipe" className={classes.avatar}>
            //     R
            //   </Avatar>
            // }
            // action={
            //   <IconButton>
            //     <MoreVertIcon />
            //   </IconButton>
            // }
            title={title}
            subheader={schedule}
          />
          <CardContent>
            <Typography component="p" className={classes.paragraphText}>
              {shortDesc}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton aria-label="Find more info"
                        onClick={this.handleHyperlinkClick}>
              <LinkIcon href={url} />
            </IconButton>
            {/*<IconButton aria-label="Share">*/}
              {/*<ShareIcon />*/}
            {/*</IconButton>*/}
            {longDesc !== null && longDesc.length !== 0 &&
              <IconButton
                className={classnames(classes.expand, {
                  [classes.expandOpen]: this.state.expanded,
                })}
                onClick={this.handleExpandClick}
                aria-expanded={this.state.expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon/>
              </IconButton>
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
  url:PropTypes.string.isRequired,
  schedule:PropTypes.string.isRequired,
  imageURL:PropTypes.string,
};

export default withStyles(styles)(ClassCard);