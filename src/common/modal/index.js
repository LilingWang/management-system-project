import React from "react";
import "antd/dist/antd.css";
import { Modal } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";

const MyModal = ({
    titelText="",
    visible = "",
    width = "",
    children,
    setVisible = () => { }}
) => {
    console.log("titleText",{titelText},{width},{visible});
    return (
        <div>
            <Modal
                width={width}
                closeIcon={<CloseCircleOutlined />}
                title={<div className="modal-titel">{titelText}</div>}
                visible={visible}
                footer={null}
                onCancel={() => setVisible(false)}
            >
            {children}
            </Modal>
        </div>
    )
}

export default MyModal