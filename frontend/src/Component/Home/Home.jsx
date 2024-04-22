import React, { Fragment, useEffect } from 'react';
import { FaAngellist } from "react-icons/fa";
import "./Home.css";
import ProductCard from './ProductCard';
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from '../layout/Loader/Loader';
import { useAlert } from "react-alert";




const Home = () => {


  const dispatch = useDispatch();
  const alert = useAlert();
  const { loading, error, products } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    if(error){
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch,error,alert]);

  return (

    <Fragment>

      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="Medical Store" />

          <div className="banner">
            <h1><p>Welcome to Our Medical Store</p></h1>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button id="scroll-btn">
                Scrolls 
              </button>
            </a>
          </div>
          <h2 className='homeHeading'>Featured Products</h2>

          <div className="container" id="container">
            {products && products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}


          </div>
        </Fragment>
      )}

    </Fragment>
  )
}

export default Home;
