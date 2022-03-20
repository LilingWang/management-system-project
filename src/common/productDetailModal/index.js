import React from "react";
import { Modal } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { useSelector } from 'react-redux';

const ProductDetailModal = ({
    productDetailVisible = "",
    width = "",
    children,
    setProductDetailVisible = () => { },
}
) => {
    /*
    const cartProducts = useSelector((state) => state);
    let totalItem = 0;
    console.log("cartProducts",cartProducts)
    /*
    cartProducts.reducer.forEach(item => {
        if (item.addOnitem > 0) {
            totalItem = totalItem + item.addOnitem;
        }
    });
    console.log(totalItem, "test cart visible")
    const cartTitle = "Cart ( " + totalItem + " )";
   // console.log({ cartVisible }, "test cart visible")*/
    
    return (
        <div>
            <Modal
                closeIcon={<CloseCircleOutlined />}
                visible={productDetailVisible}
                style={{ top: 20 }}
                width={width}
                onOk={() => setProductDetailVisible(false)}
                onCancel={() => setProductDetailVisible(false)}
            >
            {children}
            </Modal>
        </div>
    )
}

export default ProductDetailModal;