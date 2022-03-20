import React from "react";
import Modal from "../../common/modal/index";
import { LOGIN_FORM as LOGIN_FORM_CONTENT } from "../../content/form/index";
import {MailOutlined} from "@ant-design/icons"

const SetMessageForm = ({
    resetMessage = "",
    setResetMessage =()=>{},
}
) => {

    console.log(resetMessage, 'resetMessage')
    return (
        <div>
            <Modal
                titelText=""
                visible={resetMessage}
                width={593}
                setVisible={setResetMessage}
           >
           <div>{LOGIN_FORM_CONTENT.SETRESETPASSWORDMESSAGE_DISCLAIMER}</div>
           <div style={{justifyContent: 'center', display:'flex', marginTop:'20px'}}><MailOutlined style={{width:'50px'}}/></div>
           </Modal>

        </div>

    )

}

export default SetMessageForm;