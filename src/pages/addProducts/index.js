import React, { useState, useEffect } from "react";
import { Row, Col, Select, Input, Upload, message, Button, Modal,Image} from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';
import { addProduct,getProductsInfo,delItem, modItem} from "../../actions/index";
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from "react-router-dom";

//https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png
const style = { float: 'left' };
const marginText = { margin: '30px, 30px', backgroundColor:"white", padding:"20px" };
const labelStyle = { float: 'left', marginTop: '30px' };

const AddProducts = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [productName, setProductName] = useState();
    const [textInput, setTextInput] = useState();
    const [categorySelect, setCategorySelect] = useState('Category1');
    const [price, setPrice] = useState();
    const dispatch = useDispatch();
    const [item, setItem] = useState();
    const [imgUrl, setimgUrl] = useState();
    const [isImg, setIsImg] = useState(false);
    const { index } = useParams();
   

    console.log(index)

    getProductsInfo(dispatch)(Number(index));
    const productDetail = useSelector((state) => state);

    console.log("product detail", productDetail.cartReducer)
    const [productName2, setProductName2] = useState();
    const [textInput2, setTextInput2] = useState();
   // const [categorySelect2, setCategorySelect2] = useState();
    const [price2, setPrice2] = useState();
    const [item2, setItem2] = useState();
    const [imgUrl2, setimgUrl2] = useState();

    useEffect(() => {
         setProductName2(productDetail.cartReducer.productName);
         setTextInput2(productDetail.cartReducer.productDescrip);
         setCategorySelect(productDetail.cartReducer.category);
         setPrice2(productDetail.cartReducer.price);
         setItem2(productDetail.cartReducer.item);
         setimgUrl2(productDetail.cartReducer.imgUrl)
      }, [productDetail]);

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

    const handleModProduct = () =>{
        const product = {
            value:{
                imgUrl: imgUrl2,
                price: price2,
                productName: productName2,
                productDescrip: textInput2,
                category: categorySelect,
                addOnitem: 0,
                item: item2,},  
            index:index        
        }
        modItem(dispatch)(product);
        setIsModalVisible(true)
    }

    const handleDelProduct = () =>{
        delItem(dispatch)(Number(index));
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
            <Modal title="Successful!" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        
      </Modal>
            <Row>
                <Col span={5}></Col>
                <Col span={14}>
                    <div style={style}>
                        <h1>{(Number(index) >= 0)? ('Edit Product'):('Create Product')}</h1>
                        <div style={marginText}>
                            <label style={labelStyle}>
                                Product name
                            </label>
                            {(Number(index) >= 0)? (<Input
                                onChange={(e) => setProductName2(e.target.value)} value={productName2}
                            />):(<Input
                                onChange={(e) => setProductName(e.target.value)}
                            />)}
                            
                            <label style={labelStyle}>
                                Product description
                            </label>
                            {(Number(index) >= 0)? (<Input.TextArea rows={4} className="textInput" onChange={(e) => setTextInput2(e.target.value)} value={textInput2} />)
                            :(<Input.TextArea rows={4} className="textInput" onChange={(e) => setTextInput(e.target.value)} />)}
                            
                            <div>
                                <Row>
                                    <Col span={12}>
                                        <label style={labelStyle}>Category</label>
                                        <div>
                                        {(Number(index) >= 0)? (
                                            <Select defaultValue={categorySelect} style={{ width: '98% ' }} onChange={handleChange}>
                                                <Select.Option value="Category1">Category1</Select.Option>
                                                <Select.Option value="Category2">Category2</Select.Option>
                                                <Select.Option value="Category3">Category3</Select.Option>
                                                <Select.Option value="Category4">Category4</Select.Option>
                                            </Select>
                                        ):(
                                            <Select defaultValue="Category1" style={{ width: '98% ' }} onChange={handleChange}>
                                                <Select.Option value="Category2">Category2</Select.Option>
                                                <Select.Option value="Category3">Category3</Select.Option>
                                                <Select.Option value="Category4">Category4</Select.Option>
                                            </Select>
                                        )}
                                           
                                        </div>
                                    </Col>
                                    <Col span={12}>
                                        <label style={labelStyle}>Price</label>
                                        {(Number(index) >= 0)? (<Input className="priceInput" onChange={(e) => setPrice2(e.target.value)} value={price2} />)
                            :(<Input className="priceInput" onChange={(e) => setPrice(e.target.value)} />)}
                            
                                        
                                    </Col>
                                </Row>
                            </div>
                            <div>
                                <Row>
                                    <Col span={6}>
                                        <label style={labelStyle}>In Stock Quantity</label>
                                        {(Number(index) >= 0)? ( <Input className="priceInput" onChange={(e) => setItem2(e.target.value)} value={item2}/>)
                            :( <Input className="priceInput" onChange={(e) => setItem(e.target.value)} />)}     
                                       
                                    </Col>
                                    <Col span={1}/>
                                    <Col span={17}>
                                   
                                        <label style={labelStyle}>Add Image Link</label>
                                        
                                        {(Number(index) >= 0)? ( <Input className="priceInput" onChange={(e) => setimgUrl(e.target.value)} style={{width:"80%"}} placeholder="http://" value={imgUrl2}>
                                        </Input>)
                            :( <Input className="priceInput" onChange={(e) => setimgUrl(e.target.value)} style={{width:"80%"}} placeholder="http://">
                                        </Input>)}     
                                       
                                        
                                        <Button onClick={uploadBtn}>Upload</Button>
                                    </Col>
                                </Row>
                            </div>
                            {isImg? (<div style={{marginTop:"50px"}}>{(Number(index) >= 0)? (<Image width={300} src={imgUrl2}/>):(<Image width={300} src={imgUrl}/>)}
                                          
                            </div>):(<div style={{marginTop:"50px", marginLeft:"20%", width:"300px", height:"200px", border:"1px dashed"}}>
                                <p style={{marginTop:"25%"}}>image preview</p>
                            </div>)}
                            {(Number(index) >= 0)? (
                                <div style={{ marginTop: '30px'}}>
                                <Button onClick={handleModProduct} style={{backgroundColor:"blue", color:"white", fontWeight:"bold"}}>Edit product</Button>
                                <Button onClick={handleDelProduct} style={{backgroundColor:"blue", color:"white", fontWeight:"bold"}}>Delete product</Button>
                            </div>
                            ):(
                                <div style={{ marginTop: '30px'}}>
                                <Button onClick={handleAddProduct} style={{backgroundColor:"blue", color:"white", fontWeight:"bold"}}>Add product</Button>
                            </div>
                            )}
                            
                        </div>
                    </div>
                </Col>
                <Col span={5}></Col>
            </Row>
        </div>
    )
}

export default AddProducts;