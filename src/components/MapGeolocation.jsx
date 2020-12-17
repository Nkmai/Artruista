import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    position: 'absolute',
    zIndex: 3,
    margin: '10px'
  }
}));

const MapGeolocation = ({panTo}) => {
  const classes = useStyles();
  return (
    <Button variant="contained" className={classes.button}
    onClick={() => {
      // we have two cb funcs, one if error and one if success, which we replace to check position
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // position gives you lat and long, so want to pass that to panTo
          console.log(position)
          panTo({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
      () => null);
    }}
    >Go to your location!
    {/* </button> */}
    </Button>
  );
};




export default MapGeolocation;
