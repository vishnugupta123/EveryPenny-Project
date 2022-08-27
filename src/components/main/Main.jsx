import React, {useContext} from 'react';
import { Card, CardContent, CardHeader, Grid, Typography, Divider } from '@material-ui/core';
import Form from './Form/Form';
import List from './List/List';
import { ExpenseTrackerContext } from '../../context/context';

import useStyles from './styles';

const Main = () => {
    const classes = useStyles();

    const { balance } = useContext(ExpenseTrackerContext);
  return (
    <Card className={classes.root}>
        <CardHeader title='Expense Tracker' subheader='Powered by Speechly' />
        <CardContent>
            <Typography align='center' varient='h5'>Total Balance : ₹{balance}</Typography>
            <Typography varient='subtitle1' style={{lineHeight : '1.5e ', marginTop : '20px'}}>
                Try saying : "Add five thousand in category car for next monday"
            </Typography>
            <Divider className={classes.divider}/>
            <Form />
        </CardContent>
        <CardContent className={classes.cardContent}>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                <List />
                </Grid>
            </Grid>
        </CardContent>
    </Card>
  )
}

export default Main