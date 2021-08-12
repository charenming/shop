import React from 'react';
import {useHistory, useParams} from 'react-router-dom';
// import styled from 'styled-components';


// let 박스 = styled.div`
//     padding: 20px;
// `;

function Bouquet(props) {

    let { id } = useParams();
    let history = useHistory();
    // let 찾은상품 = props.flower.find(x => x.id == id);
    let 찾은상품 = props.flower.find(function(상품){
        return 상품.id == id
    });
    return (
        <div className="container">
            {/* <div className">
                <제목 className="red">Detail</제목>
            </박스> */}
            
            <div className="row">
                <div className="col-md-6">
                    <img src={찾은상품.image} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{찾은상품.title}</h4>
                    <h5>{찾은상품.content}</h5>
                    <h5>{찾은상품.price}원</h5>
                    <button className="btn btn-danger">order</button> 
                    <button className="btn btn-danger" onClick={()=>{
                        history.push('/')
                    }}>back</button> 
                </div>
            </div>
        </div> 
    )
};

export default Bouquet