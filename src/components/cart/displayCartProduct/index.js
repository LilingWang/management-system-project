import React,{useState} from "react";
import { useSelector, useDispatch } from 'react-redux';
import { ProductsApi } from "../../../api/productsAPI";
import { Row, Col, Button } from 'antd';
import './index.css';
import { addProductToCart, minusProductToCart,removeItemFromCart } from "../../../actions/index";
import { addProductToList } from "../../../actions/cartProducts/index"

const DisplyCartProduct = () => {

    const cartProducts = useSelector((state) => state);
    const dispatch = useDispatch();
    let totalPrice = 0;
    let tax = 0;
    let subTotalPrice = 0;
    const [showDiscount, setShowDiscount] = useState(false);
    
    const handleMinus = (index) => (event) => {
        minusProductToCart(dispatch)(index);
        addProductToList(dispatch)(index);
    }

    const handlePlus = (index) => (event) => {
        console.log(index)
        addProductToCart(dispatch)(index);
        addProductToList(dispatch)(index);
    }

    const [subTotal, setSubTotal] = useState(0);

    const handleDiscountBtn = ()=>{      
        setShowDiscount(true)
    }

    const removeItemBtn = (index) =>(event) =>{
        removeItemFromCart(dispatch)(index);
        addProductToList(dispatch)(index);
    }

    const productsList = cartProducts.reducer.map((product, index) => {
        if (product.addOnitem > 0) {
            console.log(product.addOnitem,product.price)
            totalPrice = totalPrice + (product.addOnitem * product.price);
            let price = "$"+product.price +".00"
            subTotalPrice = totalPrice;
            return (
                <div>
                    <Row>
                        <Col span={8}><img src={product.imgUrl} width="60px"></img></Col>
                        <Col span={8}>
                            <div><h4>{product.productName}</h4></div>
                            <div style={{ display: 'inline-flex' }}>
                                <Button type="text" class="value-button" id="decrease" onClick={handleMinus(index)} >-</Button>
                                <p id="number" >{product.addOnitem} </p>
                                <Button type="text" class="value-button" id="increase" onClick={handlePlus(index)} >+</Button>
                            </div>
                            {product.item === product.addOnitem? (<p style={{marginTop:"-12px", marginBottom:"0px", color:"red"}}>Out of stock</p>):(<p style={{}}></p>)}
                            
                        </Col>
                        <Col span={4}></Col>
                        <Col span={4}>
                            <div id="price">{price}</div>
                            <Button type="text"><p style={{ textDecoration: "underline" }} onClick={removeItemBtn(index)}>Remove</p></Button>
                        </Col>
                    </Row>
                </div>
            )
        }
    });

    return (
        <div>
            <div>
                {productsList}
            </div>
            <div id="applyDiv">
                <label>Apply Discount Code</label>
                <div style={{ display: 'inline-flex' }}>
                    <input></input>
                    <Button id="applyBtn" onClick={handleDiscountBtn}>Apply</Button>
                </div>
            </div>
            <div id="checkDiv">
                <Row>
                    <Col span={18}>
                        <p>Subtotal</p>
                        <p>Tax</p>
                        {showDiscount? (<p>Discount</p>)  : null}                      
                        <p>Estimated total</p>
                    </Col>
                    <Col span={6}>
                        <p>${totalPrice.toFixed(2)}</p>
                        <p>${(totalPrice * 0.1).toFixed(2)}</p>
                        {showDiscount? (<p>-20</p>)  : null}
                       {showDiscount? (<p> ${(totalPrice - 20).toFixed(2)}</p>)  : (<p>${totalPrice.toFixed(2)}</p>)}               
                    </Col>
                </Row>
                <Button id="checkOutBtn">Continue to checkout</Button>
            </div>
        </div>
    )
}

export default DisplyCartProduct;
