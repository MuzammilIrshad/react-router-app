import React, { useContext } from 'react';
//import { newState } from './Reducer';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { GlobalContext } from './Reducer';
//import Navbar from './Navbar';
import './home.css';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& > *': {
           // margin: theme.spacing(1),
            marginLeft: '2em'
        },
       
    },
    paper: {
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    img: {
        height: '150px',
        width: '300px'
    },
    items: {
        marginTop:'3em',
        marginLeft: '1em',
        marginRight: '1em'
    }
}));

export default function Cart() {
    const classes = useStyles();
    const { state, delShoe } = useContext(GlobalContext);
    //const values = newState;
    console.log(state);
    const purchase = (shoe) => {
        alert('Item Purchased');
        delShoe(shoe);
    }

    const shoe = state.map((shoe, id) => {
        //console.log(shoes[shoe]);
        //const shoe1 = shoes[shoe];
        return (

            <Grid item xs={12} sm={4}>
                <Paper className={classes.paper} key={id}>
                    <img src={shoe['img']} className={classes.img} />
                    <h3>$ {shoe['price']}</h3>
                    <Button variant="contained" color="primary" className={classes.root[1]} id='btn1' onClick={()=> purchase(shoe)} >
                        PURCHASE
                         </Button>
                    <Button variant="contained" color="primary" className={classes.root[1]} id='btn2' onClick={() => delShoe(shoe)}> DELETE </Button>
                    <br /><br />
                </Paper>
            </Grid>
        );
    })
    return (

        <div>
            <div>
                <div className={classes.root}>
                    <Grid container spacing={3} className={classes.items}>
                        {
                            shoe
                        }

                    </Grid>
                </div>
            </div>

        </div>
    );
}