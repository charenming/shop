/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

import {useHistory} from 'react-router-dom';

function Card(props) {
    const repository = "/flowerShop";
    let history = useHistory();

    return (
        <div className="col-md-4" onClick={()=>{history.push(repository+'/bouquet/'+ props.flower.id) }}>
            <div className="flowerImage">
                <img src={props.flower.image}></img>
                <h4>{ props.flower.title}</h4>
                <h5>{ props.flower.content} </h5>
                <h5>{ props.flower.price}</h5>
                <h5>{ props.i}</h5>
            </div>
        </div>
    )
}

export default Card;