import React, { useState, useEffect } from "react";
import "./index.css";
import TextInput from "../../components/inputs/headerbarSearchInput/index";
import { Button } from "antd";
import LoginForm from "../../components/login/loginForm";
import { Space } from 'antd';
import { createFromIconfontCN, ShoppingCartOutlined, UserSwitchOutlined,BankOutlined } from '@ant-design/icons';
import Cart from "../../components/cart/index";
import { initCartProducts } from "../../actions/cartProducts";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

const Header = () => {
    const [isLoggdIn, setIsLoggedin] = useState(false);
    const dispatch = useDispatch();
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const cartProducts = useSelector((state) => state);
    const [visible, setVisible] = useState(false);
    const [cartVisible, setCartVisible] = useState(false);

    const onClickBtn = () => {
        setVisible(true)
    }
    const handleCartBtn = () => {
        console.log("handle cart")
        setCartVisible(true);
    }

    const handleLogoutBtn = () => {
        localStorage.removeItem("isAuthenticated");
        window.location.href = "http://localhost:3000";

    }

    useEffect(() => {
        initCartProducts(dispatch)();
    }, []);

    const IconFont = createFromIconfontCN({
        scriptUrl: [
            '//at.alicdn.com/t/font_1788044_0dwu4guekcwr.js', // icon-javascript, icon-java, icon-shoppingcart (overrided)
            '//at.alicdn.com/t/font_1788592_a5xf2bdic3u.js', // icon-shoppingcart, icon-python
        ],
    });

    return (
        <div className="header">
            <div className="search">
                <h2><BankOutlined /> Management System</h2>
            </div>
            <div className="login_logout">
                <Space>
                    {isAuthenticated ? (
                        <Button type="text" onClick={handleLogoutBtn} size={'large'}><UserSwitchOutlined size={'large'}/>Logout </Button>
                    ) : (
                        <Button type="text" onClick={onClickBtn} size={'large'}><UserSwitchOutlined size={'large'}/>Login </Button>
                    )}
                    <ShoppingCartOutlined onClick={handleCartBtn} size={'x-large'}/>

                </Space>
            </div>
            <LoginForm
                visible={visible}
                setVisible={setVisible}
            />
            <Cart
                cartVisible={cartVisible}
                setCartVisible={setCartVisible}
            />

        </div>
    )
}

export default Header;