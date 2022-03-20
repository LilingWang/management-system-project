import React, { useState } from "react";
import { LOGIN_FORM as LOGIN_FORM_CONTENT } from "../../content/form/index";
import UserNameInput from "../../common/input/userNameInput";
import Modal from "../../common/modal";
import { Button } from "antd";
import LoginForm from "../login/loginForm";
import SetMessageForm from "../setMessage";


const emailReg =
  /^(?:(?!.*?[.]{2})[a-zA-Z0-9](?:[a-zA-Z0-9.+!%-]{1,64}|)|\"[a-zA-Z0-9.+!% -]{1,64}\")@[a-zA-Z0-9][a-zA-Z0-9.-]+(.[a-z]{2,}|.[0-9]{1,})$/;

const ResetPasswordForm = ({
    resetPassword = "",
    setResetPassword = () => { },
    setVisible = () => { },
    visible = "",

}
) => {
    
    const [email, setEmail] = useState();
    const [resetMessage, setResetMessage] = useState(false);
    const [errorMessage, setErrorMessage] = useState();

    const setLoginTab = () => {
        setResetPassword(true);
        setVisible(false);
    }
    
    const hondleResetMessage = (email) => {

        if(!email || !emailReg.test(email)){
            setErrorMessage("email is not correct!");
        }else{
            setResetMessage(true);
            setResetPassword(false);
        }
    }


    return (

        <div>

            <Modal
                titelText={LOGIN_FORM_CONTENT.UPDATE_PASSWORD}
                visible={resetPassword}
                width={593}
                setVisible={setResetPassword}
            >
                <div dangerouslySetInnerHTML={{ __html: LOGIN_FORM_CONTENT.RESETPASSWORD_DISCLAIMER }} onClick={setLoginTab} />
                <UserNameInput
                    label="Email"
                    placeholder=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errorMessage? (<div style={{color:'red'}}>{errorMessage}</div>):null}

                <Button onClick={()=>hondleResetMessage(email)}>{LOGIN_FORM_CONTENT.UPDATE_PASSWORD}</Button>

                <LoginForm
                    visible={visible}
                    setVisible={setVisible}
                />

            </Modal>
            <SetMessageForm
                resetMessage={resetMessage}
                setResetMessage={setResetMessage}
            />
            
        </div>
    )
}

export default ResetPasswordForm;