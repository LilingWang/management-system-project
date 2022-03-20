import React, { useState } from "react";
import { Row, Col, Select, Input, Upload, message, Button ,Modal} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { addProduct } from "../../actions";
import { useDispatch } from 'react-redux';
import { Link,useNavigate } from "react-router-dom";

const { Dragger } = Upload;
const style = { float: 'left' };
const marginText = { margin: '30px, 30px' };
const labelStyle = { float: 'left', marginTop: '30px' };
const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
    onDrop(e) {
        console.log('Dropped files', e.dataTransfer.files);
    },
};
const AddProducts = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const [productName, setProductName] = useState();
    const [textInput, setTextInput] = useState();
    const [categorySelect, setCategorySelect] = useState();
    const [price, setPrice] = useState();
    const dispatch = useDispatch();

    function handleChange(value) {
        setCategorySelect(value)
        console.log(`selected ${value}`);
    }
      
    const handleAddProduct=()=>{
        const finalPrice = '$ ' + price
        const product = {
            imgUrl:'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
            price:finalPrice,
            productName:productName,
            productDescrip:textInput,
            category:categorySelect,
            addOnitem:0,
            item:10,         
        }
        
       addProduct(dispatch)(product);
       setIsModalVisible(true)

       
    }
    let navigate = useNavigate();
    const handleOk = () => {
        setIsModalVisible(false);
        
        navigate("../project");
        //return (<Redirect to="project" />);
        
      };

    return (
        <div>

        <Link to="project">hello</Link>
        <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
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
                            <Input.TextArea rows={4} className="textInput" onChange={(e)=>setTextInput(e.target.value)}/>
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
                                        <Input className="priceInput" onChange={(e)=>setPrice(e.target.value)}/>
                                    </Col>
                                </Row>
                            </div>
                            <div style={{height:'50px'}}>
                            <label style={labelStyle}>
                                Add Image
                            </label>
                            </div>
                            
                            <div>
                            <Dragger {...props}>
                                <p className="ant-upload-drag-icon">
                                    <InboxOutlined />
                                </p>
                                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                                <p className="ant-upload-hint">
                                    Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                                    band files
                                </p>
                            </Dragger>
                            </div>
                            
                        <div style={{marginTop:'20px', float:'left'}}>
                        <Button onClick={handleAddProduct}>Add product</Button>
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