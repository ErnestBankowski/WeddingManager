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
    minWidth: 700,
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
  createData('Sala', 20000, 14000, "10.10.2010"),
  createData('Fotograf', 20000, 14000, "10.10.2010"),
  createData('Kamera', 20000, 14000, "10.10.2010"),
  createData('Zespół', 20000, 14000, "10.10.2010"),
  createData('Samochód', 20000, 14000, "10.10.2010"),
];

class ExpenseTable extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { classes } = this.props;
        return (
            <div className="main-page">
                <Paper className={classes.root}>
                <Table className={classes.table}>
                    <TableHead>
                    <TableRow>
                        <TableCell>Nazwa</TableCell>
                        <TableCell numeric>Prognozowany koszt</TableCell>
                        <TableCell numeric>Rzeczywisty koszt</TableCell>
                        <TableCell numeric>Data opłacenia</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map(row => {
                        return (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row">
                            {row.name}
                            </TableCell>
                            <TableCell numeric>{row.calories}</TableCell>
                            <TableCell numeric>{row.fat}</TableCell>
                            <TableCell numeric>{row.carbs}</TableCell>
                        </TableRow>
                        );
                    })}
                    </TableBody>
                </Table>
                </Paper>
                <Tooltip title="Dodaj wydatek.">
                <Button variant="fab" color="secondary" aria-label="Add" className={classes.button}><AddIcon /></Button>
                </Tooltip>
            </div>
          );
    }
}

ExpenseTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ExpenseTable);