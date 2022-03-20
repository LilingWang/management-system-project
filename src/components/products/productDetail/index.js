import React,{useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Divider, Image, Row, Col, Button } from "antd";
import { useParams } from "react-router-dom";
import { getProductsInfo, minusProductToCart,addProductToCart} from "../../../actions/index";
import {addProductToList} from "../../../actions/cartProducts/index"
import "./index.css";


const style = { margin: '30px 30px' };
const ProductDetail = ({
    productIndex = "",
    productInfo =''
}
) => {
    const dispatch = useDispatch();
    console.log(";;;;;", productIndex, productInfo);
    getProductsInfo(dispatch)(productIndex);;

     const productDetail = useSelector((state) => state);
     console.log("test in detail page", productDetail.cartReducer);
     const handleAddProductTab = (index) => (event) => {
        addProductToCart(dispatch)(index);
       // addProductToList(dispatch)(index);
    }

    const handleMinus = (index) => (event) => {
        minusProductToCart(dispatch)(index);
        //addProductToList(dispatch)(index);
        getProductsInfo(dispatch)(productIndex);;
    }

    const handlePlus = (index) => (event) => {
        console.log(index)
        addProductToCart(dispatch)(index);
        getProductsInfo(dispatch)(productIndex);;
      //  addProductToList(dispatch)(index);
       // console.log(products.reducer, ".....ewrewjjdfjds")
    }


    return (
        <div>
        <div style={style}>
        <Divider orientation="left">Products Detail</Divider>
        <div>
        <Row>
            <Col span={7}>
                <Image width={400}
                src={productDetail.cartReducer.imgUrl}></Image>
            </Col>
            <Col span={1}></Col>
            <Col span={7}>
                <div>
                    <h2>{productDetail.cartReducer.category}</h2>
                    <h1>{productDetail.cartReducer.productName}</h1>
                    <h1>{productDetail.cartReducer.price}</h1>
                    <h2>{productDetail.cartReducer.productDescrip}</h2>
                </div>

                <div>
                {productDetail.cartReducer.addOnitem === 0 ? (<Button onClick={handleAddProductTab(productIndex)}>Add</Button>)
                                : (<div style={{ display: 'inline-flex' }}>
                                        <Button type="text" class="value-button" id="decrease" onClick={handleMinus(productIndex)} >-</Button>
                                        <p id="number" >{productDetail.cartReducer.addOnitem} </p>
                                        <Button type="text" class="value-button" id="increase" onClick={handlePlus(productIndex)} >+</Button>
                                    </div>) }
                </div>
            </Col>
        </Row>

        </div>

    </div>
    </div>
    )
}

export default ProductDetail;

/*
    const dispatch = useDispatch();
    console.log(";;;;;", index);
    getProductsInfo(dispatch)(Number(index));
    const productDetail = useSelector((state) => state);
    console.log("test in detail page", productDetail.reducer)

    return (
        <div>
            <ProductDetailModal
                productDetailVisible={productDetailVisible}
                width={400}
                setProductDetailVisible={setProductDetailVisible}
            >
            <ProductDetail/>

            </ProductDetailModal>
        </div>/*
        <div>
            <div style={style}>
            <Divider orientation="left">Products Detail</Divider>
            <div>
            <Row>
                <Col span={7}>
                    <Image width={400}
                    src={productDetail.reducer.imgUrl}></Image>
                </Col>
                <Col span={1}></Col>
                <Col span={7}>
                    <div>
                        <h2>{productDetail.reducer.category}</h2>
                        <h1>{productDetail.reducer.productName}</h1>
                        <h1>{productDetail.reducer.price}</h1>
                        <h2>{productDetail.reducer.productDescrip}</h2>
                    </div>

                    <Button>Add To Card</Button>
                </Col>
            </Row>

            </div>

        </div>
        </div>*/