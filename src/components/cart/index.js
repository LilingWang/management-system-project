import React, { useState, useEffect } from "react";
import CartModal from "../../common/cartModal/index";
import DisplyCartProduct from "./displayCartProduct";
import { useSelector } from 'react-redux';

const Cart = ({
    cartVisible = "",
    setCartVisible = () => { }
}
) => {

    const cartProducts = useSelector((state) => state);
    //let productList=[];
    let totalItem = 0;
    cartProducts.reducer.forEach(item => {
        if (item.addOnitem > 0) {
            totalItem = totalItem + item.addOnitem;
        }
    });
    const cartTitle = "Cart ( " + totalItem + " )";

    return (
        <div>
            <CartModal
                titelText={cartTitle}
                cartVisible={cartVisible}
                width={400}
                setCartVisible={setCartVisible}
            >
            {totalItem? (<DisplyCartProduct />):(<p>Shopping cart is empty!</p>)}               
            </CartModal>
        </div>
    )

}

export default Cart;