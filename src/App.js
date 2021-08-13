/* eslint-disable */

import React, {useState} from 'react'
import './App.css';
import {Navbar,Container,Nav,NavDropdown,Button } from 'react-bootstrap';
import data from './data.js';
import Card from './components/Card';
import Home from './components/Home';
import Bouquet from './components/Bouquet.js';
import axios from 'axios';

import {Link, Route, Switch} from 'react-router-dom';




function App() {

  let [flower, flower변경] = useState(data);

  let more = ()=>{

                    // 로딩중이라는 UI 띄움                    
                    
                    axios.get('https://codingapple1.github.io/shop/data2.json')
                    .then((result)=>{ 
                        // 로딩중이라는 UI 안보이게 처리
                        flower변경( [...flower, ...result.data] );
                       
                    }) .then(()=>{
                      console.log(flower)
                    })
                    .catch((err)=>{ 
                        // 로딩중이라는 UI 안보이게 처리
                        console.log('실패했어요')
                        console.log(err);
                    })
                  }
                  
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">🌷 Flower shop 🌷</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/home">The Flower</Nav.Link>
              <Nav.Link as={Link} to="/mypage">My page</Nav.Link>
              <NavDropdown title="product" id="basic-nav-dropdown">
                <NavDropdown.Item><Link to="/bouquet/0">Bouquet</Link></NavDropdown.Item>
                <NavDropdown.Item href="#FlowerBox">FlowerBox</NavDropdown.Item>
                <NavDropdown.Item href="#Etc">Etc</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#Wedding">Wedding</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    
      <Switch>
          <Route exact path="/home">
            <Home flower={flower}
                  more={more} />
          </Route>
          
        
          <Route path="/bouquet/:id">
            <Bouquet flower={flower}/>
          </Route>

          {/* <Route path="/:id">
            <div>아무거나적었을 때 이거 보여주셈</div>
          </Route> */}

      </Switch>
    </div>
  );
}



export default App;
