import React, { useContext } from 'react';
import shoes from './../shoes.json';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { GlobalContext } from './Reducer.js';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
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
    let {  addShoe } = useContext(GlobalContext);
    //console.log(state);
    //const [cart, setCart] = useState({});
    //const Add = (shoe1) => {
        //setCart(shoe1)
      //  addShoe(shoe1)
    //};
   // setCart({});
    //const shoe = Object.keys(shoes);
    const mySwal = withReactContent(Swal);
   
    const shoe =   Object.keys(shoes).map((shoe, id) => {
                    console.log(shoe);
          const shoe1 = shoes[shoe];
            return (
                     
                    <Grid item xs={12} sm={4}>
                    <Paper className={classes.paper} key={id}>
                        <img src={shoe1['img']} className={classes.img} alt={shoe} />
                        <h3>PRICE:  $ {shoe1['price']}</h3>
                        <Button variant="contained" color="primary" className={classes.root[1]} onClick={()=>addShoe(shoe1)}>
                            ADD TO CART
                         </Button>
                        <Button variant="contained" color="primary" onClick={() => mySwal.fire({

                            title: shoe ,
                            imageUrl: shoe1["img"],
                            imageWidth: 400,
                            imageHeight: 200,
                            imageAlt: 'Custom image',
                            text: "Price is: $"+ shoe1["price"],
                        })}>
                            DETAILS
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