import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ShoppingCart from '../shoppingcart/ShoppingCart'
import { MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdownToggle, MDBNavbarBrand, MDBNavbarNav, MDBIcon, MDBNavItem, MDBNavbar, MDBContainer } from 'mdbreact'

export default function Navbar() {

    const location = useLocation()

    const totalCartQuantity = useSelector(state => state.cart.totalCartQuantity)

    const [isOpen, setisOpen] = useState(false)

    const toggleCollapse = () => {
        setisOpen(!isOpen);
    }

    return (
        // <MDBNavbar color="default-color" dark expand="md">
        //     <MDBNavbarBrand>
        //         <strong className="white-text">Navbar</strong>
        //     </MDBNavbarBrand>
        //     <MDBNavbarToggler onClick={toggleCollapse} />
        //     <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        //         <MDBNavbarNav left>
        //             <MDBNavItem active>
        //                 <MDBNavLink to="#!">Home</MDBNavLink>
        //             </MDBNavItem>
        //             <MDBNavItem>
        //                 <MDBNavLink to="#!">Features</MDBNavLink>
        //             </MDBNavItem>
        //             <MDBNavItem>
        //                 <MDBNavLink to="#!">Pricing</MDBNavLink>
        //             </MDBNavItem>
        //             <MDBNavItem>
        //                 <MDBDropdown>
        //                     <MDBDropdownToggle nav caret>
        //                         <div className="d-none d-md-inline">Dropdown</div>
        //                     </MDBDropdownToggle>
        //                     <MDBDropdownMenu className="dropdown-default">
        //                         <MDBDropdownItem href="#!">Action</MDBDropdownItem>
        //                         <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
        //                         <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
        //                         <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
        //                     </MDBDropdownMenu>
        //                 </MDBDropdown>
        //             </MDBNavItem>
        //         </MDBNavbarNav>
        //         <MDBNavbarNav right>
        //             <MDBNavItem>
        //                 <MDBNavLink className="waves-effect waves-light" to="#!">
        //                     {totalCartQuantity} <MDBIcon fas icon="shopping-cart" />
        //                 </MDBNavLink>
        //             </MDBNavItem>
        //             <MDBNavItem>
        //                 <MDBDropdown>
        //                     <MDBDropdownToggle nav caret>
        //                         <MDBIcon icon="user" />
        //                     </MDBDropdownToggle>
        //                     <MDBDropdownMenu className="dropdown-default">
        //                         <MDBDropdownItem href="#!">Action</MDBDropdownItem>
        //                         <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
        //                         <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
        //                         <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
        //                     </MDBDropdownMenu>
        //                 </MDBDropdown>
        //             </MDBNavItem>
        //         </MDBNavbarNav>
        //     </MDBCollapse>
        // </MDBNavbar>
        <MDBNavbar color="default-color" dark expand="md">
            <MDBContainer>
                <Link to="/">
                    <MDBNavbarBrand>
                        <i className="fab fa-shopware"></i> shopware.se
                </MDBNavbarBrand>
                </Link>
                <MDBNavbarToggler onClick={toggleCollapse} />
                <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>

                    <MDBNavbarNav right>
                        <MDBNavItem>
                            <ShoppingCart />
                        </MDBNavItem>

                        <MDBNavItem>
                            <MDBNavLink className="waves-effect waves-light" to={location.pathname}>
                                <MDBIcon icon="user" />
                            </MDBNavLink>
                        </MDBNavItem>
                    </MDBNavbarNav>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
        // <div>
        //     <nav className="mb-1 navbar navbar-expand-lg navbar-dark default-color fixed-top scrolling-navbar">
        //         <div className="container">
        //             <Link to="/" className="navbar-brand">
        //                 <i className="fab fa-shopware"></i> shopware.se
        //             </Link>

        //             <MDBNavbarToggler onClick={toggleCollapse} />
        //             <MDBCollapse id="navbarCollapse3" isOpen={isOpen} navbar>
        //                 {/* <ul className="navbar-nav mr-auto">

        //                     <li className="nav-item">
        //                         <Link className="nav-link" to="/">Nyheter</Link>
        //                     </li>

        //                     <li className="nav-item">
        //                         <Link className="nav-link" to="/clothes">Kläder</Link>
        //                     </li>

        //                     <li className="nav-item">
        //                         <Link className="nav-link" to="/shoes">Skor</Link>
        //                     </li>

        //                     <li className="nav-item">
        //                         <Link className="nav-link" to="/accessories">Accessoarer</Link>
        //                     </li>

        //                 </ul> */}
        //                 <ul className="navbar-nav ml-auto nav-flex-icons">

        //                     <li className="nav-item dropdown" key="0">
        //                         <MDBDropdownToggle to={location.pathname} className="nav-link  mr-4 waves-effect waves-light" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //                             {totalCartQuantity} <i className="fas fa-shopping-cart"></i>
        //                         </MDBDropdownToggle>
        //                         <ShoppingCart className="dropdown-menu-right z-depth-2 shopping-cart" />
        //                     </li>


        //                     <li className="dropdown" key="1">
        //                         <MDBNavLink to={location.pathname} className="dropdown-toggle waves-effect waves-light border-0 " type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        //                             <i className="fas fa-user"></i>
        //                         </MDBNavLink>
        //                         <div className="dropdown-menu dropdown-menu-right z-depth-2">
        //                             {/*<UserSettings />*/}
        //                         </div>
        //                     </li>
        //                 </ul>
        //             </MDBCollapse>
        //         </div>
        //     </nav>
        // </div>
    )
}
