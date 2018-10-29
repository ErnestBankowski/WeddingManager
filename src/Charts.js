import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 2,
  },
  paper: {
    padding: '200px',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class Charts extends React.Component {
  state = {
    completed: 0,
  };

  componentDidMount() {
    this.timer = setInterval(this.progress, 20);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 40 ? 40 : completed + 1 });
  };

  render() {
    const { classes } = this.props;
    return (
        <div className="main-page">
            <Grid container spacing={16}>
                <Grid item xs={12}>
                <Paper className={classes.root} elevation={3}><br/>Odłożone środki: 12000 PLN<br/> <br/>Wydane środki: 4000 PLN<br/><br/></Paper>
                </Grid>
                <Grid item xs={12}>
                Postęp realizacji założonych wydatków
            <LinearProgress variant="determinate" value={this.state.completed} />
            <br/>
            Prognoza realizacji założonych wydatków
            <LinearProgress color="secondary" variant="determinate" value={this.state.completed} />
                </Grid>
            </Grid>
        </div>
    );
  }
}

Charts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Charts);