import { makeStyles } from "@material-ui/core";


export default makeStyles(()=> ({
    Income:{
        borderBottom : '10px solid rgba(0, 153, 51, .5)',
        boxShadow : '0 0 5px Aqua',
    },
    Expense:{
        borderBottom : '10px solid rgba(255,0,0,.5)',
        boxShadow : '0 0 5px Pink',
    },
    chart: {
        width: 4,
        height: 5,
        fontSize: '.6rem',
      },
}));