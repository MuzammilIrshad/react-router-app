import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom';
import './home.css';
const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textAlign: "center"
    },
    bar:{
    backgroundColor: 'black'
    }, 
    image: {
        height: '70px',
        width:'100px'
    },
}));

export default function Navbar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.bar}>
                <Toolbar>
                    <img src='https://cdn160.picsart.com/upscale-273617642016211.png?r1024x1024' className={classes.image}alt="shoe" />
             <Typography variant="h6" className={classes.title}>
                        Nike Shoes Store 
              </Typography>
                    <div>
                        <Button className='btns'><Link to="/" className='btns'>Home</Link></Button>
                        <Button className='btns'><Link to="/Cart" className='btns'>CART<AddShoppingCartIcon /></Link></Button>
                        <Button className='btns'><Link to="/Product" className='btns'>Product</Link></Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
