import React from 'react'
import { useDispatch } from "react-redux";
import { Link } from 'react-router-dom'
import { MDBDropdownItem } from 'mdbreact'
import { removeFromCart, addToCart } from "../../store/actions/cartActions";
import './ShoppingCart.css'

export default function ShoppingCartProduct(props) {
    const dispatch = useDispatch()

    function increment(event) {
        event.stopPropagation()
        dispatch(addToCart(props.item))
    }

    function decrement(event) {
        event.stopPropagation()
        dispatch(removeFromCart(props.item._id))
    }

    function stopClose(event) {
        event.stopPropagation()
    }
    
    return (

        <MDBDropdownItem className="sci border-bottom border-light mw-100">

            <div className="mw-100">
                <Link to={'/product/' + props.item._id}>
                    <span className="mr-auto">{props.item.name}</span>
                    <br />
                </Link >
                <div className="text-right d-inline-block ml-auto">
                    <button onClick={increment} className="btn btn-default single-char">+</button>
                    <span className="mx-3">{props.item.quantity}</span>
                    <button onClick={decrement} className="btn btn-default single-char">-</button>
                </div>
            </div>
        </MDBDropdownItem>

    )
}
