import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { UnviewCard } from '../redux/actions/actions.js';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  cardGrid: {
    paddingTop: theme.spacing(6),
    paddingBottom: theme.spacing(6),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: '0 3px 5px 2px rgba(45, 29, 32, .3)'
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 0,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center'
  }
}));


const OneStory = () => {
  const classes = useStyles();
  const cards = useSelector(state => state.userCard);
  const oneCard = cards[0];
  const dispatch = useDispatch()
  const unviewCard = () => dispatch(UnviewCard())

  const history = useHistory()

const handleClicked = (e) => {
  e.preventDefault()
  unviewCard()
  return history.push('/')
}

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
              <Grid item xs={12}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {oneCard.firstName} 
                    </Typography>
                    <Typography>
                      {oneCard.story}
                    </Typography>
                    <Typography>
                      {oneCard.help}
                    </Typography>
                  </CardContent>
                  <CardActions className={classes.button} >
                    <Button size="small" color="primary" onClick={handleClicked}>
                      Home
                    </Button>
                    <Button size="small" color="primary">
                      Connect
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
}

export default OneStory;
