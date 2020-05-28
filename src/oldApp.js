import React from 'react';
import { MDBCol, MDBContainer, MDBRow } from "mdbreact";
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navbar from './components/navigation/Navbar'

function App() {
  return (
    <MDBContainer>
      <MDBRow center style={{ height: "100vh" }}>
        <MDBCol middle="true" sm="8" className="text-center">
          <BrowserRouter>

            <Navbar />

            <Switch class="container custom-margin-top">
              <Route exact path="" />
            </Switch>

          </BrowserRouter>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default App;
