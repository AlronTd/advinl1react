import React from 'react'
import { useSelector } from 'react-redux'
import { MDBDropdownMenu, MDBDropdownItem, MDBDropdown, MDBIcon, MDBDropdownToggle } from 'mdbreact'
import ShoppingCartProduct from './ShoppingCartProduct'

function stopClose(event){
    event.stopPropagation()
}

export default function ShoppingCart() {

    const shoppingCart = useSelector((state) => state.cart.shoppingcart)
    const totalCartQuantity = useSelector(state => state.cart.totalCartQuantity)
    const shoppingCartTotal = useSelector((state) => state.cart.totalCartAmount)
    
    function renderCartEmptyMessage() {
        if (shoppingCart.length < 1) {
            return (
                <MDBDropdownItem onClick={stopClose}>
                    <div className="cart-item" onClick={stopClose}>
                        <div className="p-2 d-flex justify-content-center align-items-center" onClick={stopClose}>
                            <div className="d-flex align-items-center" onClick={stopClose}>
                                Din kundvagn är tom.
                            </div>
                        </div>
                        <div className="dropdown-divider"></div>
                    </div>
                </MDBDropdownItem>
            )
        }
    }

    let iteration = 0

    return (
        <MDBDropdown >
            <MDBDropdownToggle nav caret className="mr-4">
                {totalCartQuantity} <MDBIcon fas icon="shopping-cart" />
            </MDBDropdownToggle>
            <MDBDropdownMenu className="dropdown-menu-left z-depth-2 shopping-cart" onClick={stopClose}>
                {
                    shoppingCart.map((item) => {
                        iteration += 1
                        return (
                            <ShoppingCartProduct item={item} key={iteration - 1}/>
                        )
                    })
                }

                {
                    renderCartEmptyMessage()
                }


                <MDBDropdownItem className="p-2 sci" onClick={stopClose}>
                    <div className="ml-2" onClick={stopClose}>
                        <div className="total-price" onClick={stopClose}>
                            <div>Totalt:</div> <span className="ml-1">{ shoppingCartTotal} SEK </span>
                            <small className="text-muted">inkl. moms</small>
                        </div>
                        
                    </div>
                    <button className="btn btn-default">Gå till Kassan</button>
                </MDBDropdownItem>
            </MDBDropdownMenu>
        </MDBDropdown>
        // <MDBDropdownMenu className="dropdown-default dropdown-menu-right z-depth-2 shopping-cart" >

        //     {
        //         shoppingCart.map((item) => {
        //             iteration += 1
        //             return (
        //             <ShoppingCartProduct item={item} key={iteration} />
        //             )
        //         })
        //     }

        //     {
        //         renderCartEmptyMessage()
        //     }


        //     <div className="p-2 d-flex justify-content-between align-items-center">
        //         <div className="ml-2">
        //             <div className="total-price">
        //                 Totalt: <span className="ml-1">{ /*shoppingCartTotal*/} SEK</span>
        //             </div>
        //             <small className="text-muted">inkl. moms</small>
        //         </div>
        //         <button className="btn btn-default" >Gå till Kassan</button>
        //     </div>
        // </MDBDropdownMenu>
    )
}
