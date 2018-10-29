import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';

const CustomTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 150,
  },
  row: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  }, 
  button: {
    margin: theme.spacing.unit,
    marginTop: theme.spacing.unit*2,
  },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData("10.10.2010", 14000),
  createData("10.10.2010", 14000),
  createData("10.10.2010", 14000),
  createData("10.10.2010", 14000),
  createData("10.10.2010", 14000),
];

class IncomeTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
          <div className="main-page">
            <Paper className={classes.root}>
            <List>
            <ListItem>
            <Avatar><AttachMoneyIcon /></Avatar>
              <ListItemText primary="4500 PLN" secondary="Listopad, 2014" />
            </ListItem>
            <ListItem>
              <Avatar><AttachMoneyIcon /></Avatar>
              <ListItemText primary="1500 PLN" secondary="Listopad, 2014" />
            </ListItem>
            <ListItem>
              <Avatar><AttachMoneyIcon /></Avatar>
              <ListItemText primary="2000 PLN" secondary="Listopad, 2014" />
            </ListItem>
          </List>
            </Paper>
            <Tooltip title="Dodaj środki.">
            <Button variant="fab" color="primary" aria-label="Add" className={classes.button}><AddIcon /></Button>
            </Tooltip>
            </div>
          );
    }
}

IncomeTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IncomeTable);