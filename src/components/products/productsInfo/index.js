import { useEffect, useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { initProducts } from '../../../actions/index';
import Cards from '../../cards';
import { Divider, Row, Col, Button } from "antd";

const style = { margin: '30px 30px' };

const ProductInfo = () => {
    console.log("hello")
    const dispatch = useDispatch();
    useEffect(() => {
        initProducts(dispatch)();
    }, []);

    return (

        <div style={style}>
            <div>
                <Row>
                    <Col span={23}>
                        <Divider orientation="left">Products</Divider>
                    </Col>

                </Row>
            </div>

            <Cards />

        </div>
    )
}

export default ProductInfo;