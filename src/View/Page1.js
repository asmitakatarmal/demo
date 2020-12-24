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
  makeStyles
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
    backgroundColor: "#fff",
    margin: '1rem 10rem'
  }
}));



const ProductCard = ({ className, product, ...rest }) => {
 
  const pageRedirect = (id) => {
    window.location.href = "post?id=" + id
  }
    const classes = useStyles();
    return (

      Data.map((product) => {
        return (
          // <Link to={} >
          <Card onClick={ ()=>{pageRedirect(product.id)}} className={classes.card}>
            <CardContent style={{ padding: "15px" }} >
              <Typography style={{ textDecoration: 'none' }} variant="h3">
                {product.title}
              </Typography>
              <Typography style={{ textDecoration: 'none' }} variant="h6">
                {product.detail}
              </Typography>
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
