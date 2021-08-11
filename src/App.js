/* eslint-disable */

import React, {useState} from 'react'
import './App.css';
import {Navbar,Container,Nav,NavDropdown,Button } from 'react-bootstrap';
import data from './data.js';
import Card from './components/Card';
import Home from './components/Home'

import {Link, Route, Switch} from 'react-router-dom';


function App() {

  let [flower, flower변경] = useState(data);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">🌷 Flower shop 🌷</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">The Flower</Nav.Link>
              <Nav.Link href="#link">My page</Nav.Link>
              <NavDropdown title="Product" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Bouquet</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Flower box</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Etc</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Wedding</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    

    <Route exact path="/home">
      <Home flower={flower} />
      
    </Route>
    
  
    <Route path="/detail">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <img src="https://user-images.githubusercontent.com/88081491/128348641-a48b2555-80ec-48f7-a5bb-9c08be4598e4.jpg" width="100%" />
        </div>
        <div className="col-md-6 mt-4">
          <h3 className="pt-5">title</h3>
          <p>content</p>
          <p>price</p>
          <button className="btn btn-danger">order</button> 
        </div>
      </div>
    </div> 
    </Route>

  
    </div>
  );
}



export default App;
