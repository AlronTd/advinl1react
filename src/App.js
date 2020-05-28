import React, { useEffect } from 'react';
import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/mdbreact/dist/css/mdb.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/navigation/Navbar'
import { useDispatch } from 'react-redux'
import { getProductCatalog } from './store/actions/productCatalogActions'
import Products from './components/views/Products'
import Product from './components/views/Product'

function App() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductCatalog())
  }, [dispatch])

  return (
    <BrowserRouter >

      <Navbar />
      <div style={{height:"5.2rem"}}></div>
      <Switch className="mt-5 custom-margin-top">
        <Route  className="mt-5 custom-margin-top" exact path="/">
          <Products className="mt-5 custom-margin-top" />
        </Route>
        <Route className="mt-5 custom-margin-top" exact path="/product/:id">
          <Product className="mt-5 custom-margin-top" />
        </Route>
      </Switch>

    </BrowserRouter>
  );
}

export default App;


/*<div className="container mt-4">
      <div className="mb-4">
        {
          shoppingcart.map(product => {
            return (
              <div key={product.id}>
                <div>
                  <div><strong>{product.name}</strong></div>
                  <div className="text-muted">{product.quantity} x {product.price}</div>
                </div>
                <div>
                  <button onClick={() => add(product)}>+</button>
                  <button onClick={() => remove(product.id)}>-</button>
                </div>
              </div>
            )
          })
        }
      </div>

      <p>Total Amount: {totalCartAmount}</p>
      <p>Total Quantity: {totalCartQuantity}</p>
      <button onClick={() => save(shoppingcart)}>CHECKOUT</button>

      <hr />

      {
        productCatalog.map(product => {
          return (
            <div key={product.id}>
              <span>{product.name}</span>
              <button className="ml-2 btn btn-success btn-sm" onClick={() => add(product)}>ADD TO CART</button>
            </div>
          )}
        )}


          </div>*/