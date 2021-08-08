/* eslint-disable */

import React, {useState} from 'react'
import './App.css';
import {Navbar,Container,Nav,NavDropdown,Button } from 'react-bootstrap';
import Data from './data.js';

import {Link, Route, Switch} from 'react-router-dom';


function App() {

  let [flower, flower변경] = useState(Data);

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
              <NavDropdown title="Gift" id="basic-nav-dropdown">
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

      <div className="mainBg">
          <h1 className="hi"> Welcome to our tiny flower shop 🌷 </h1>
          <p className="p1"> Thank you for your visiting our shop. </p>
          <p>and we wish your pleasant shopping :)</p>
          <p>
            <Button variant="primary" className="Button"> Click me </Button>
          </p>
      </div>

      <div className="container">
        <div className="row">
          {
            flower.map((a,i)=>{
              return <Card flower={flower[i]} i={i} />
            })



          }
        </div>
      </div>
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

function Card(props) {
  return (
    <div>
        <div className="col-md-4">
          <img img src={'https://codingapple1.github.io/shop/shoes' + (props.i + 1) + '.jpg' } width="60%"></img>
          <h4>{ props.flower.title}</h4>
          <h5>{ props.flower.content} </h5>
          <h5>{ props.flower.price}</h5>
          <h5>{ props.i}</h5>
        </div>
    </div>
  )
}

export default App;
