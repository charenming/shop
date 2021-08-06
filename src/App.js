/* eslint-disable */

import React, {useState} from 'react'
import './App.css';
import {Navbar,Container,Nav,NavDropdown,Button } from 'react-bootstrap';
import Data from './data.js';

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
            return <Card flower={flower[i]} i={'https://user-images.githubusercontent.com/88081491/128350846-6a056f3b-00c8-41f7-a52a-a59e487ea186.jpg','https://user-images.githubusercontent.com/88081491/128350404-862aef36-09d8-4717-b79d-37cd09e70aef.jpg','https://user-images.githubusercontent.com/88081491/128348722-6418f4cd-718a-499d-85ff-88befab026a7.jpg'}/>
          })
        }
        {/* <Card flower={flower[0]}/>
        <Card flower={flower[1]}/>
        <Card flower={flower[2]}/> */}
        {/* <div className="col-md-4">
          <img src="https://user-images.githubusercontent.com/88081491/128350404-862aef36-09d8-4717-b79d-37cd09e70aef.jpg" width="60%"></img>
          <h4>{ flower[1].title}</h4>
          <h5>{ flower[1].content} </h5>
          <h5>{ flower[1].price}</h5>
        </div>
        <div className="col-md-4">
          <img src="https://user-images.githubusercontent.com/88081491/128348722-6418f4cd-718a-499d-85ff-88befab026a7.jpg" width="60%"></img>
          <h4>{ flower[2].title}</h4>
          <h5>{ flower[2].content} </h5>
          <h5>{ flower[2].price}</h5>
        </div> */}
      </div>
    </div>
    </div>
  );
}

function Card(props) {
  return (
    <div>
        <div className="col-md-4">
          <img img src={props.i} width="60%"></img>
          <h4>{ props.flower.title}</h4>
          <h5>{ props.flower.content} </h5>
          <h5>{ props.flower.price}</h5>
        </div>
    </div>
  )
}

export default App;
