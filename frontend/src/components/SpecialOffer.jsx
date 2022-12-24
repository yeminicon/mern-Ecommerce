import React from 'react'
import { useEffect, useReducer, useState } from 'react';
import axios from 'axios';
import logger from 'use-reducer-logger';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Landing.css';
import Rating from './Rating';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { Store } from '../Store';

const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_SUCCESS':
        return { ...state, products: action.payload, pages: action.payload.pages, loading: false };
      case 'FETCH_FAIL':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
const SpecialOffer = (props) => {
    const [{ products }, dispatch] = useReducer(logger(reducer), {
        products: [],
      });
      const { product } = props;

  const { state, dispatch: ctxDispatch } = useContext(Store);
  const {
    cart: { cartItems },
  } = state;
      useEffect(() => {
        const fetchData = async () => {
          dispatch({ type: 'FETCH_REQUEST' });
          try {
            const result = await axios.get('/api/products');
            dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
          } catch (err) {
            dispatch({ type: 'FETCH_FAIL', payload: err.message });
          }
        };
        fetchData();
      }, []);
      const apple = [products.map((product) => (
                        
        <Col key={product.slug} sm={6} md={4} lg={3} className="mb-3">

            <Card >
                <div className = "special-img position-relative overflow-hidden">
                        <Link to={`/product/${product.slug}`}>
                        <img src={product.image}  className = "w-100" alt={product.name} />
                        </Link>
                            <span className = "position-absolute d-flex align-items-center justify-content-center text-primary fs-4">
                        <i className = "fas fa-heart"></i>
                    </span>
                </div>
                <Card.Body>
                    <div className = "text-center">
                        <div className = "rating mt-3">
                        <Rating rating={product.rating} numReviews={product.numReviews} />
                        </div>
                        <p className = "text-capitalize my-1">{product.name}</p>
                        <Card.Text>₦ {product.price}</Card.Text>
                    </div>
                </Card.Body>
            </Card>
         </Col>
       
        
)).slice(4, 8)]
  return (
    <section id = "special" className = "py-5">
    <div className = "container">
        <div className = "title text-center py-5">
            <h2 className = "position-relative d-inline-block">Special Selection</h2>
        </div>

        <div className = "special-list row g-0">
        <Row>
            {apple.slice(0, 4)}
        </Row>

        </div>
    </div>
</section>
  )
}

export default SpecialOffer