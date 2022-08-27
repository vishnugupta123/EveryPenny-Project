import React from 'react';
import Details from './components/details/Details';
import { Grid } from '@material-ui/core';
import Main from './components/main/Main';
import { PushToTalkButton, PushToTalkButtonContainer } from '@speechly/react-ui';

import useStyles from './styles';

const App = () => {
  const classes = useStyles();
  return (
    <>
    <Grid container spacing={0} alignItems='center' justifyContent='center' style={{height:'100vh'}} className={classes.grid}>
      <Grid item xs={12} sm={4} className={classes.mobile}>
        <Details title='Income'/>
      </Grid>
      <Grid item xs={12} sm={3} className={classes.main}>
        <Main />
      </Grid>
      <Grid item xs={12} sm={4} className={classes.desktop}>
        <Details title='Income'/>
      </Grid>
      <Grid item xs={12} sm={4} className={classes.last}>
        <Details title='Expense'/>
      </Grid>
      <Grid item xs={12} style={{color: 'grey', textAlign: 'center', paddingBottom: '5px'}}>
        Developed by AYUSH MAURYA.
      </Grid>
    </Grid>
    <PushToTalkButtonContainer>
      <PushToTalkButton />
    </PushToTalkButtonContainer>
    </>
  );
}

export default App