import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addToCart } from '../../store/actions/cartActions'
import { setProduct, getProduct } from '../../store/actions/productActions'

export default function Product() {
    const productCatalog = useSelector((state) => state.productCatalog)
    const dispatch = useDispatch()
    const { id } = useParams()


    const gottenProduct = productCatalog.find((prod) => prod._id === id)

    if (gottenProduct) {
        dispatch(setProduct(gottenProduct))
    }

    const product = useSelector((state) => state.product)

    if (product._id !== id) {
        dispatch(getProduct(id))
    }

    const add = () => {
        dispatch(addToCart(product))
    }

    if (gottenProduct) {
        return (
            <div className="container my-5 py-5 z-depth-1">
                <section className="text-center">

                    <h3 className="font-weight-bold mb-5">Produktinformation</h3>

                    <div className="row">
                        <div className="col-lg-6">

                            <div
                                id="carousel-thumb"
                                className="carousel slide carousel-fade carousel-thumbnails"
                                data-ride="carousel"
                            >

                                <div className="carousel-inner text-center text-md-left" role="listbox">
                                    <div className="carousel-item active">
                                        <img src={product.image} alt={product.short} className="img-fluid" />
                                    </div>
                                </div>

                                {/* <a className="carousel-control-prev" href="#carousel-thumb" role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Previous</span>
                                </a>
                                <a className="carousel-control-next" href="#carousel-thumb" role="button" data-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="sr-only">Next</span>
                                </a> */}

                            </div>

                        </div>

                        <div className="col-lg-5 text-center text-md-left">
                            <h2
                                className="h2-responsive text-center text-md-left product-name font-weight-bold dark-grey-text mb-1 ml-xl-0 ml-4"
                            >
                                <strong>{product.name}</strong>
                            </h2>
                            <span className="badge badge-danger product mb-4 ml-xl-0 ml-4">bestseller</span>
                            <h3 className="h3-responsive text-center text-md-left mb-5 ml-xl-0 ml-4">
                                <span className="red-text font-weight-bold">
                                    <strong>{product.price} SEK</strong>
                                </span>
                            </h3>

                            <div
                                className="accordion md-accordion"
                                id="accordionEx"
                                role="tablist"
                                aria-multiselectable="true"
                            >
                                <div className="card">
                                    <div className="card-header" role="tab" id="headingOne1">
                                        {/* <a
                                            data-toggle="collapse"
                                            data-parent="#accordionEx"
                                            href="#collapseOne1"
                                            aria-expanded="true"
                                            aria-controls="collapseOne1"
                                        > */}
                                        <h5 className="mb-0">
                                            Description
                                                {/* <i className="fas fa-angle-down rotate-icon"></i> */}
                                        </h5>
                                        {/* </a> */}
                                    </div>

                                    <div
                                        id="collapseOne1"
                                        className="collapse show"
                                        role="tabpanel"
                                        aria-labelledby="headingOne1"
                                        data-parent="#accordionEx"
                                    >
                                        <div className="card-body">{product.desc}</div>
                                    </div>
                                </div>

                                {/* <div className="card">
                                    <div className="card-header" role="tab" id="headingTwo2">
                                        <a
                                            className="collapsed"
                                            data-toggle="collapse"
                                            data-parent="#accordionEx"
                                            href="#collapseTwo2"
                                            aria-expanded="false"
                                            aria-controls="collapseTwo2"
                                        >
                                            <h5 className="mb-0">
                                                Details
                                                <i className="fas fa-angle-down rotate-icon"></i>
                                            </h5>
                                        </a>
                                    </div>

                                    <div
                                        id="collapseTwo2"
                                        className="collapse"
                                        role="tabpanel"
                                        aria-labelledby="headingTwo2"
                                        data-parent="#accordionEx"
                                    >
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                            3 wolf moon officia aute,
                                            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                            moon
                                            tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                        </div>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-header" role="tab" id="headingThree3">
                                        <a
                                            className="collapsed"
                                            data-toggle="collapse"
                                            data-parent="#accordionEx"
                                            href="#collapseThree3"
                                            aria-expanded="false"
                                            aria-controls="collapseThree3"
                                        >
                                            <h5 className="mb-0">
                                                Shipping
                                                <i className="fas fa-angle-down rotate-icon"></i>
                                            </h5>
                                        </a>
                                    </div>

                                    <div
                                        id="collapseThree3"
                                        className="collapse"
                                        role="tabpanel"
                                        aria-labelledby="headingThree3"
                                        data-parent="#accordionEx"
                                    >
                                        <div className="card-body">
                                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid.
                                            3 wolf moon officia aute,
                                            non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                            moon
                                            tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et.
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                            <section className="color">
                                <div className="mt-5">
                                    {/* <p className="grey-text">Choose your color</p>
                                    <div className="row text-center text-md-left">
                                        <div className="col-md-4 col-12">
                                            <div className="form-group">
                                                <input
                                                    className="form-check-input"
                                                    name="group100"
                                                    type="radio"
                                                    id="radio100"
                                                    defaultChecked="checked"
                                                />
                                                <label htmlFor="radio100" className="form-check-label dark-grey-text">Blue</label>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <input className="form-check-input" name="group100" type="radio" id="radio101" />
                                                <label htmlFor="radio101" className="form-check-label dark-grey-text">Orange</label>
                                            </div>
                                        </div>
                                        <div className="col-md-4">
                                            <div className="form-group">
                                                <input className="form-check-input" name="group100" type="radio" id="radio102" />
                                                <label htmlFor="radio102" className="form-check-label dark-grey-text">Red</label>
                                            </div>
                                        </div>
                                    </div> */}

                                    <div className="row mt-3">
                                        <div className="col-md-12 text-center text-md-left text-md-right">
                                            <button
                                                className="btn btn-primary btn-rounded"
                                                onClick={add}>
                                                <i className="fas fa-cart-plus mr-2" aria-hidden="true"></i> Lägg till varukorgen
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </section>

                        </div>
                    </div>
                </section>

            </div >
        )
    }
    else { return '' }
}
