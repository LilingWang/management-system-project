import React, { useState } from "react";
import { Row, Col, Select, Input, Upload, message, Button, Modal,Image} from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import { addProduct } from "../../actions";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";

//https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png
const style = { float: 'left' };
const marginText = { margin: '30px, 30px', backgroundColor:"white", padding:"20px" };
const labelStyle = { float: 'left', marginTop: '30px' };

const AddProducts = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [productName, setProductName] = useState();
    const [textInput, setTextInput] = useState();
    const [categorySelect, setCategorySelect] = useState();
    const [price, setPrice] = useState();
    const dispatch = useDispatch();
    const [item, setItem] = useState();
    const [imgUrl, setimgUrl] = useState();
    const [isImg, setIsImg] = useState(false);

    function handleChange(value) {
        setCategorySelect(value)
        console.log(`selected ${value}`);
    }

    const handleAddProduct = () => {
        const finalPrice = price
        const product = {
            imgUrl: imgUrl,
            price: finalPrice,
            productName: productName,
            productDescrip: textInput,
            category: categorySelect,
            addOnitem: 0,
            item: item,
        }

       addProduct(dispatch)(product);
        setIsModalVisible(true)
    }
    let navigate = useNavigate();
    const handleOk = () => {
        setIsModalVisible(false);
        navigate("../project");
    };
    const handleCancel = () => {
        setIsModalVisible(false);
        navigate("../project");
      };
    const uploadBtn = () =>{
        setIsImg(true)
    };

    return (
        <div>
            <Modal title="Successful add product!" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        
      </Modal>
            <Row>
                <Col span={5}></Col>
                <Col span={14}>
                    <div style={style}>
                        <h1>Create Product</h1>
                        <div style={marginText}>
                            <label style={labelStyle}>
                                Product name
                            </label>
                            <Input
                                onChange={(e) => setProductName(e.target.value)}
                            />
                            <label style={labelStyle}>
                                Product description
                            </label>
                            <Input.TextArea rows={4} className="textInput" onChange={(e) => setTextInput(e.target.value)} />
                            <div>
                                <Row>
                                    <Col span={12}>
                                        <label style={labelStyle}>Category</label>
                                        <div>
                                            <Select defaultValue="Category1" style={{ width: '98% ' }} onChange={handleChange}>
                                                <Select.Option value="Category2">Category2</Select.Option>
                                                <Select.Option value="Category3">Category3</Select.Option>
                                                <Select.Option value="Category4">Category4</Select.Option>
                                            </Select>
                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <label style={labelStyle}>Price</label>
                                        <Input className="priceInput" onChange={(e) => setPrice(e.target.value)} />
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <Col span={6}>
                                        <label style={labelStyle}>In Stock Quantity</label>
                                        <Input className="priceInput" onChange={(e) => setItem(e.target.value)} />
                                    </Col>
                                    <Col span={1}/>
                                    <Col span={17}>
                                   
                                        <label style={labelStyle}>Add Image Link</label>
                                       
                                        <Input className="priceInput" onChange={(e) => setimgUrl(e.target.value)} style={{width:"80%"}} placeholder="http://">
                                        </Input>
                                        <Button onClick={uploadBtn}>Upload</Button>
                                    </Col>
                                </Row>
                            </div>
                            {isImg? (<div style={{marginTop:"50px"}}>
                              <Image width={300} src={imgUrl}/>            
                            </div>):(<div style={{marginTop:"50px", marginLeft:"20%", width:"300px", height:"200px", border:"1px dashed"}}>
                                <p style={{marginTop:"25%"}}>image preview</p>
                            </div>)}
                            
                            <div style={{ marginTop: '30px'}}>
                                <Button onClick={handleAddProduct} style={{backgroundColor:"blue", color:"white", fontWeight:"bold"}}>Add product</Button>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col span={5}></Col>
            </Row>
        </div>
    )
}

export default AddProducts;