import React from 'react'


function Card(props) {
    
    console.log("src"+props.flower.image)
    return (
        <div className="col-md-4">
            <div className="flowerImage">
                
                <h4>{ props.flower.title}</h4>
                <h5>{ props.flower.content} </h5>
                <h5>{ props.flower.price}</h5>
                <h5>{ props.i}</h5>
                <img src={props.flower.image}></img>
            </div>
        </div>
    )
}

export default Card;