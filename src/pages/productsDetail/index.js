import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Divider, Image, Row, Col, Button } from "antd";
import { useParams } from "react-router-dom";
import { getProductsInfo } from "../../actions";
import ProductDetailModal from "../../common/productDetailModal/index";
import ProductDetail from "../../components/products/productDetail";

const style = { margin: '30px 30px' };


const ProductsDetail = ({
    productDetailVisible = '',
    productIndex ='',
    productInfo='',
    setProductDetailVisible = () => { }
}) => {
    /*
    const { index } = useParams();
    const dispatch = useDispatch();
    console.log(";;;;;", { index }.index);
    getProductsInfo(dispatch)(Number({ index }.index));
    const productDetail = useSelector((state) => state);
    console.log("test in detail page", productDetail.reducer)*/

    return (
        <div>
            <ProductDetailModal
                productDetailVisible={productDetailVisible}
                width={1600}
                setProductDetailVisible={setProductDetailVisible}
            >
            <ProductDetail
                productIndex={productIndex}
                productInfo={productInfo}
            />

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
    )

}

export default ProductsDetail;