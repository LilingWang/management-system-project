import React from "react";
import { Modal } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { useSelector } from 'react-redux';
import './index.css'

const CartModal = ({
    titelText="",
    cartVisible = "",
    width = "",
    children,
    setCartVisible = () => { }
}
) => {
    
    return (
        <div>
            <Modal
                title={titelText}
                closeIcon={<CloseCircleOutlined />}
                visible={cartVisible}
                style={{ top: 20 ,float: 'right'}}
                width={width}
                onOk={() => setCartVisible(false)}
                onCancel={() => setCartVisible(false)}
            >
            {children}
            </Modal>
        </div>
    )
}

export default CartModal;