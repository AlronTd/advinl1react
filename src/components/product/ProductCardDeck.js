import React from 'react'
import { useSelector } from 'react-redux'
import { MDBRow, MDBContainer } from 'mdbreact'
import ProductCard from "./ProductCard"


export default function ProductCardDeck() {

    const catalog = useSelector((state) => state.productCatalog)

    let iteration = 0

    return (
        <MDBContainer>
            <MDBRow className="row-cols-1 row-cols-md-3">
                {
                    // catalog.map((product) => {
                    //     if (iteration % 4 === 0 && iteration !== 0) {
                    //         return (
                    //             <ProductCard product={product} />
                    //         )
                    //     } else {
                    //         return (
                    //             <ProductCard product={product} />
                    //         )
                    //     }
                    // })
                    catalog.map((product) => {
                        return (
                            <ProductCard product={product} key={iteration += 1 } />
                        )
                    })
                }
               
            </MDBRow>
        </MDBContainer>
    )
}