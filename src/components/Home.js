import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import Card from './Card.js';
import './../App.css';


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

                <button className="btn btn-primary" onClick={()=>{ 
                    props.more()
        

                    // // 로딩중이라는 UI 띄움                    
                    
                    // axios.get('https://codingapple1.github.io/shop/data2.json')
                    // .then((result)=>{ 
                    //     // 로딩중이라는 UI 안보이게 처리
                    //     console.log(result.data);
                    //     flower변경( [...flower, ...result.data] );
                        
                    // })
                    // .catch((err)=>{ 
                    //     // 로딩중이라는 UI 안보이게 처리
                    //     console.log('실패했어요')
                    //     console.log(err);
                    // })
                }}>more</button>
            </div>
        </div>
    )
}

export default Home
