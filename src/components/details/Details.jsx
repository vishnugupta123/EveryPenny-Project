import React from 'react';
import {Card, CardHeader, CardContent, Typography} from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import useTransactions from '../../useTransactions';

import useStyles from './styles.js';
import 'chart.js/auto';

const Details = ({title}) => {
    const classes = useStyles();
    const {total, chartData} = useTransactions(title);
  return (
    <Card className={title==='Income' ? classes.Income : classes.Expense} >
        <CardHeader title={title}/>
        <CardContent>
            <Typography variant='h5'>₹{total}</Typography>
            <Doughnut data={chartData}  />
        </CardContent>
    </Card>
  );
}

export default Details;