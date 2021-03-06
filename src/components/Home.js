import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import Card from './Card.js';
import './../App.css';


function Home(props) {

    return (
        <div>
            <div className="mainBg">
                    <h1 className="hi"> Welcome to our tiny flower shop ๐ท </h1>
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

                <button className="btn btn-primary" onClick={()=>{ 
                    props.more()
        

                    // // ๋ก๋ฉ์ค์ด๋ผ๋ UI ๋์                    
                    
                    // axios.get('https://codingapple1.github.io/shop/data2.json')
                    // .then((result)=>{ 
                    //     // ๋ก๋ฉ์ค์ด๋ผ๋ UI ์๋ณด์ด๊ฒ ์ฒ๋ฆฌ
                    //     console.log(result.data);
                    //     flower๋ณ๊ฒฝ( [...flower, ...result.data] );
                        
                    // })
                    // .catch((err)=>{ 
                    //     // ๋ก๋ฉ์ค์ด๋ผ๋ UI ์๋ณด์ด๊ฒ ์ฒ๋ฆฌ
                    //     console.log('์คํจํ์ด์')
                    //     console.log(err);
                    // })
                }}>more</button>
            </div>
        </div>
    )
}

export default Home
