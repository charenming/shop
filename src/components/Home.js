import React from 'react';
import { Button } from 'react-bootstrap';
import Card from './Card.js';

function Home(props) {

    return (
        <div>
            <div className="mainBg">
                    <h1 className="hi"> Welcome to our tiny flower shop 🌷 </h1>
                    <p className="p1"> Thank you for your visiting our shop. <br/>
                        and we wish your pleasant shopping :&#41;</p>
                    <p>
                        <Button variant="primary" className="Button"> Click me </Button>
                    </p>
            </div>
            
            <div className="container">
                <div className="row">
                {
                    props.flower.map((a,i)=>{
                    return <Card flower={props.flower[i]} i={i} />
                    })
                }
                </div>
            </div>
        </div>
    )
}

export default Home
