import React, { useContext, useState } from 'react';
import shoes from './../shoes.json';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { GlobalContext } from './Reducer.js';
import Navbar from './Navbar';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    paper: {
        padding: theme.spacing(0),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    img: {
        height: '150px',
        width:'300px'
    },
    items: {
        marginLeft: '1em',
        marginRight:'1em'
    }
}));


export default function Product() {
    const classes = useStyles();
    let { state, addShoe } = useContext(GlobalContext);
    //console.log(state);
    //const [cart, setCart] = useState({});
    //const Add = (shoe1) => {
        //setCart(shoe1)
      //  addShoe(shoe1)
    //};
   // setCart({});
    //const shoe = Object.keys(shoes);
    const shoe =   Object.keys(shoes).map((shoe, id) => {
                    //console.log(shoes[shoe]);
          const shoe1 = shoes[shoe];
            return (
                     
                    <Grid item xs={12} sm={4}>
                     <Paper className={classes.paper} key={id}>
                          <img src={shoe1['img']} className={classes.img} />
                        <h3>PRICE:  $ {shoe1['price']}</h3>
                        <Button variant="contained" color="primary" className={classes.root[1]} onClick={()=>addShoe(shoe1)}>
                            ADD TO CART
                         </Button>
                        <br/><br/>
                      </Paper>
                    </Grid>
            );
      })
    return (
        <div>
            <div className={classes.root}>
                <Grid container spacing={3} className={classes.items }>
                    {
                        shoe
                    }

                </Grid>
            </div>
        </div>
    );
}