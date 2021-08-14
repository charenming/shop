import React, {useState, useEffect} from 'react';

import {useHistory, useParams} from 'react-router-dom';
// import styled from 'styled-components';
import './../css/_Bouquet.scss';
import {stockContext} from './../App';
import {CSSTransition} from "react-transition-group";


import {Nav} from 'react-bootstrap';

// let 박스 = styled.div`
//     padding: 20px;
// `;

function Bouquet(props) {

    useEffect(()=>{
        let timer = setTimeout(()=>{ alert변경(false) },2000);
        console.log('안녕');
        return ()=>{clearTimeout(timer) }
    },[]);  

    let [alert, alert변경] = useState(true);
    let [inputData, inputData변경] = useState('');
    let [누른탭, 누른탭변경] = useState(0);
    let [스위치, 스위치변경] = useState(false);

    let { id } = useParams();
    let history = useHistory();
    // let 찾은상품 = props.flower.find(x => x.id == id);
    let 찾은상품 = props.flower.find(function(상품){
        return 상품.id == id
    });
    return (
        <div className="container">
            <div>
                <div className="detail">Detail</div>
            </div>
            {inputData}
            <input onChange={(e)=>{ inputData변경(e.target.value) }} />
            {
                alert === true
                ? ( <div className="my-alert2">
                <p> preorder : 10% discount </p>
                </div>)
                :null
            }

            <div className="row">
                <div className="col-md-6">
                    <img src={찾은상품.image} width="100%" />
                </div>
                <div className="col-md-6 mt-4">
                    <h4 className="pt-5">{찾은상품.title}</h4>
                    <h5>{찾은상품.content}</h5>
                    <h5>{찾은상품.price}원</h5>

                    <Info stock={props.stock}></Info>

                    <button className="btn btn-danger" onClick={ ()=>{props.stock변경 ([9,11,12]) } }>order</button> 
                    &nbsp;
                    <button className="btn btn-danger" onClick={()=>{
                        history.push('/')
                    }}>back</button> 
                </div>
            </div>


<Nav className="mt-5" variant="tabs" defaultActiveKey="/home">
  <Nav.Item>
    <Nav.Link>Active</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-0" onClick={()=>{누른탭변경(0) }}>Option 1</Nav.Link>
  </Nav.Item>
  <Nav.Item>
    <Nav.Link eventKey="link-1" onClick={()=>{누른탭변경(1)}}>Option 2</Nav.Link>
  </Nav.Item>
</Nav>

    <CSSTransition in={스위치} classNames="wow" timeout={500}> 
        <TabContent 누른탭={누른탭} 스위치변경={스위치변경}/>
    </CSSTransition>

    </div> 
    )
}

function TabContent(props) {

    useEffect(()=>{
        props.스위치변경(true);
    });

    if (props.누른탭 === 0) {
        return  <div>0번째 내용입니다.</div>
    } else if (props.누른탭 === 1) {
        return  <div>1번째 내용입니다.</div>
    } else if (props.누른탭 === 1) {
        return  <div>2번째 내용입니다.</div>
    }    
}

function Info(props){
    return (
        <p>재고 : {props.stock[0]} </p> 
    )
}

export default Bouquet