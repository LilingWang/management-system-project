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
    console.log(totalItem, "test cart visible")
    const cartTitle = "Cart ( " + totalItem + " )";
   // console.log({ cartVisible }, "test cart visible")


    return (
        <div>
            <CartModal
                titelText={cartTitle}
                cartVisible={cartVisible}
                width={400}
                setCartVisible={setCartVisible}
            >
                <DisplyCartProduct />

            </CartModal>
        </div>
    )

}

export default Cart;