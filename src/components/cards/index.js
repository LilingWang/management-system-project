import React, { useEffect, useState } from "react";
import 'antd/dist/antd.css';
import { Card, Row, Col, Button, Pagination,Input} from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import './index.css';
import { addProductToCart, minusProductToCart, getProductsInfo } from "../../actions/index";
import { addProductToList } from "../../actions/cartProducts/index";
import ProductDetail from "../../pages/productsDetail/index";
import TextInput from "../../common/input/textInput";
import Search from "../../svgs/search.svg"

const style = { background: '#0092ff', padding: '8px 0' };

const Cards = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    let [currentList, setCurrentList] = useState([]);
    const [productDetailVisible, setProductDetailVisible] = useState(false);
    const [productIndex, setproductIndex] = useState(0);
    const [productInfo, setProductInfo] = useState();
    const isAuthenticated = localStorage.getItem("isAuthenticated") === 'admin';
    const [searchInput,setSearchInput] = useState();

    const onPage = (value) => {
        setCurrentList(products.reducer.slice((value - 1) * 12, value * 12));
    };

    useEffect(() => {
        let productList = products.reducer;
        setCurrentList(productList.slice(0, 12));
    }, [products.reducer]);
  
    const goToImgDetailPage = (index) => (event) => {
        setProductDetailVisible(true);
        setproductIndex(index);
        // addProductToList(dispatch)(index);
        setProductInfo(getProductsInfo(dispatch)(productIndex));
        //window.location.href = "http://localhost:3000/products_detail/" + index;
    }

    const handleEditTab = (index) => (event) => {
        window.location.href = "http://localhost:3000/editProduct/" + index;
    }

    const handleAddProductTab = (index) => (event) => {
        addProductToCart(dispatch)(index);
        addProductToList(dispatch)(index);
    }

    const handleMinus = (index) => (event) => {
        minusProductToCart(dispatch)(index);
        addProductToList(dispatch)(index);
    }

    const handlePlus = (index) => (event) => {
        addProductToCart(dispatch)(index);
        addProductToList(dispatch)(index);
    }
    const handleAddTab = () => {
        window.location.href = "http://localhost:3000/addProducts";
    }

    const onSelectProductFilter = (e) => {
        if (e.target.value === "Filter") {
            //   dispatch(timeAdded());
        } else if (e.target.value === "Pricelowtohigh") {      
            setCurrentList();
            const sortlowList = products.reducer.sort((p1, p2) => p1.price - p2.price);
            setCurrentList(sortlowList.slice(0, 12));
           
        } else {
            const sortHighList = products.reducer.sort((p1, p2) => p2.price - p1.price);
            setCurrentList(sortHighList.slice(0, 12));
        }
    };

    const searchInputBtn = (e) =>{
        setSearchInput(e.target.value);
        let searchByName = []
        products.reducer.forEach((item) =>{
            if(item.productName.includes(searchInput)){
                searchByName.push(item);
            }
        })
        setCurrentList(searchByName);     
    }

    const productsList = currentList.map((product, index) => {

        let price = "$" + product.price
        return (

            <Col className="gutter-row" span={4} style={{ marginBottom: "25px" }}>
                <Card
                    hoverable
                    style={{ width: 240 }}
                    cover={<img alt="products" style={{height:"300px"}} src={product.imgUrl} />}
                >
                    <Card.Meta description={price} title={product.productName} />
                    <div>
                        <Row>
                            <Col span={1}></Col>
                            <Col span={11}>
                            {product.item === product.addOnitem? (<p style={{marginTop:"-12px", marginBottom:"0px", color:"red"}}>Out of stock</p>):(<p style={{}}></p>)}
                                {product.addOnitem === 0 ? (<Button onClick={handleAddProductTab(index)}>Add</Button>)
                                    : (<div style={{ display: 'inline-flex' }}>
                                        <Button type="text" class="value-button" id="decrease" onClick={handleMinus(index)} >-</Button>
                                        <p id="number" >{product.addOnitem} </p>
                                        <Button type="text" class="value-button" id="increase" onClick={handlePlus(index)} >+</Button>
                                    </div>)}
                            </Col>
                            <Col span={11}>
                            {product.item === product.addOnitem? (<p></p>):(<p style={{}}></p>)}
                                {isAuthenticated ? (<Button style={{backgroundColor:"blue", color:"white", fontWeight:"bold"}} onClick={goToImgDetailPage(index)}>Edit</Button>) : null}
                            </Col>
                            <Col span={1}></Col>
                        </Row>
                    </div>
                </Card>
            </Col>
        )
    });
    return (
        <div >
            <ProductDetail
                productDetailVisible={productDetailVisible}
                setProductDetailVisible={setProductDetailVisible}
                productIndex={productIndex}
                productInfo={productInfo}
            />
            <div style={{ display: 'inline-flex', marginLeft:'30%' }}>
                <div style={{ marginBottom: '50px', marginLeft: '20%', display: 'inline-flex' }}>
                    <TextInput
                        label=""
                        placeholder="Search"
                        value={searchInput}
                        onChange={searchInputBtn}
                        enterButton
                    />
                    <img src={Search} style={{border:'1px solid', height:'28px'}}></img>
                </div>
                <div style={{ marginBottom: '50px', marginLeft: '80%', display: 'inline-flex' }}>
                    <select className="dropdown" onChange={onSelectProductFilter}>
                        <option value="Filter">Filter</option>
                        <option value="Pricelowtohigh">Price: low to high</option>
                        <option value="Pricehightolow">Price: high to low</option>
                    </select>
                    {isAuthenticated ? (<Button style={{backgroundColor:"blue", color:"white", fontWeight:"bold"}} onClick={handleAddTab}>Add Product</Button>) : null}

                </div>
            </div>
            <div>
                <div style={{backgroundColor:"white"}}>
                    <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>{productsList}</Row>
                </div>
            </div> 
            <Pagination
                className="product_pagination"
                showQuickJumper
                onChange={onPage}
                defaultCurrent={1}
                total={products.reducer.length}
            />

        </div>

    )
}

export default Cards;