import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import CardsDetail from '../components/CardsDetail.jsx';
import Typography from '@material-ui/core/Typography';
import Header from '../components/Header.jsx'
import Map from '../components/Map.jsx';
import MapCard from '../components/MapCard.jsx';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import PopCardView from '../components/PopCardView.jsx';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  toolbar: theme.mixins.toolbar,
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(4, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexGrow: 1,
  },
  nav: {
    boxShadow: '0 1px 1px 1px rgba(45, 29, 32, .3)', 
    textDecoration: 'none',
    borderRadius: 5,
    marginTop: '16px'
  }
}));

const MainContainer = () => {
  const classes = useStyles();
  const viewCard = useSelector(state => state.viewCard);
  const viewMapCard = useSelector(state => state.viewMapCard);

  return (
    <React.Fragment>
          <Header />
          <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7}>
              <Map />
            </Grid>
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square >
              <div className={classes.paper}>
              <Typography variant="h5" align="center" color="textSecondary" component="p">
                We would love to hear about your own story and how COVID affected you personally. Share your story and connect with other people. 
               </Typography>
                <NavLink to="/story" activeClassName="selected" className={classes.nav}>
                  <Button variant="contained">Share your story</Button>
                </NavLink>

               {viewCard ? (<CardsDetail />) : (viewMapCard ? (<PopCardView width={1} />) : (<OneStory />))}
  
              
              </div>
            </Grid>
          </Grid>
    </React.Fragment>
  )
}

export default MainContainer
