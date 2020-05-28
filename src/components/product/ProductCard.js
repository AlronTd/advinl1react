import React from 'react'
// import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { MDBCol, MDBCard, MDBView, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact";
// import { getProduct } from '../../store/actions/productActions'

/*<div className="col mb-4">

            <div className="card">


                <div className="view overlay">
                    <img className="card-img-top" src="product.image" alt="Card image cap" />
                    <Link to={'/product/' + product._id}>
                        <div className="mask rgba-white-slight"></div>
                    </Link>
                </div>


                <div className="card-body">

                    <h4 className="card-title">{product.name}</h4>

                    <p className="card-text">{product.short}</p>

                    <Link to={'/product/' + product._id} className="btn btn-light-blue btn-md">Visa Produkt</Link>

                </div>

            </div >
</div>*/

export default function ProductCard(props) {
    // const dispatch = useDispatch()
    
    // const selectProduct = () => {
    //     dispatch()
    // }
    
    return (
        <MDBCol className="mb-4">
            <MDBCard className="text-center">
                
                <MDBView className="overlay">
                    <MDBCardImage className="img-fluid" src={props.product.image}
                    waves />
                    <Link to={'/product/' + props.product._id}>
                        <div className="mask rgba-white-slight"></div>
                    </Link>
                </MDBView>
                
                <MDBCardBody>
                    <MDBCardTitle>{props.product.name}</MDBCardTitle>
                    <MDBCardText>{props.product.short}</MDBCardText>
                    <Link to={'/product/' + props.product._id} className="btn btn-light-blue btn-md">Visa Produkt</Link>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    )
}
