import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ExpenseTable from './ExpenseTable';
import IncomeTable from './IncomeTable';
import Charts from './Charts';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  });

  
class PageGrid extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        debugger;
        return (
            <div className="main-page">
                <Grid container spacing={8} direction="row">
                    <Grid item xs={8}>
                        <Paper className={classes.paper}>Wydatki<br/><br/><ExpenseTable/></Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid container spacing={8} direction="column">
                            <Grid item xs={10}>
                                <Paper className={classes.paper}>Budżet<br/><br/><Charts/></Paper>
                            </Grid>
                            <Grid item xs={10}>
                                <Paper className={classes.paper}>Wpływy<br/><br/><IncomeTable/></Paper>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(PageGrid);
