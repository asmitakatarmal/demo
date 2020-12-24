// //Settings
// import React, { Component } from "react";

// class Settings extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       isLoaded: true,
//       lessonContent: "",
//     }
//   }


//   render() {
//     return (<p>cbvbcvb</p>
//     );
//   }
// }

// export default Settings;

import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Data from './data';
import {
  Card,
  CardContent,
  Typography,
  makeStyles,
  Button
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#b71c1c',
  },
  card: {
    background: '#fff',
    opacity: .8,
    padding: "2rem 4rem",
    backgroundColor : "#fff",
    margin:'1rem 10rem'
  }
}));

const ProductCard = ({ className, product, ...rest }) => {
  const classes = useStyles();

  var currentLocation = '/' + (window.location.pathname + window.location.search).substr(1)
  var originalString = window.location.search
  var activeId = parseInt(originalString.replace('?id=', ''))


  return (

    Data.map((product) => {
      if(product.id === activeId)
      return (
        // <Link to={} >
        <Card className={classes.card}>
          <CardContent style={{ padding: "15px" }} >
            <Typography style={{textDecoration : 'none'}} variant="h3">
              {product.title}
            </Typography>
            <Typography style={{textDecoration : 'none'}} variant="h6">
              {product.detail}
            </Typography>
            <Button 
            onClick={()=>{window.location.href="/"}}
            >Back</Button>
          </CardContent>
        </Card>
      )
    })

  );
};

ProductCard.propTypes = {
  className: PropTypes.string,
  product: PropTypes.object.isRequired
};

export default ProductCard;
