import React, { useState} from "react";
import { LOGIN_FORM as LOGIN_FORM_CONTENT } from "../../../content/form";
import PassWordInput from "../../../common/input/passWordInput/index";
import UserNameInput from "../../../common/input/userNameInput";
import Modal from "../../../common/modal";
import { Button } from "antd";
import SingupForm from "../../singup/singupForm";
import {personalProjectApi} from "../../../api/personalProjectApi/index";
import ResetPasswordForm from "../../resetPassword";

const LoginForm = ({
    visible="",
    setVisible=()=>{}
}) => {  
    const [email, setEmail] = useState()
    const [passWord, setPassWord] = useState()
    const [signupVisible, setSignupVisible] = useState(false);
    const [resetPassword, setResetPassword] = useState(false);
    const [userErrorMessage, setUserErrorMessage] = useState();
    const [errorMessage, seterrorMessage] = useState();

    const setSignupTab = () =>{
        setSignupVisible(true);
        setVisible(false);   
        setUserErrorMessage("");
        seterrorMessage("");  
    }

    const handleSubmit = () => {
        setUserErrorMessage("");
        seterrorMessage("");
        const pro = {
            email:email,
            passWord:passWord
        }
        const p = personalProjectApi.signIn(pro);
        p.then((res) => res.json())
          .then((value) => {
            if (value.message === "admin") {
              localStorage.setItem("isAuthenticated", "admin");
            } else {
              localStorage.setItem("isAuthenticated", "user");
            }
            window.location.href = "http://localhost:3000/project";
          })
          .catch((value) =>{
          console.log(value.message)
          if(value.message.match("User")){
            setUserErrorMessage(value.message);
          }else{
            seterrorMessage(value.message);
          };
        });          
          setPassWord("");
      };

      const setForgetpasswordTab = () =>{
        setResetPassword(true);
        setVisible(false);
      };

    return (

        <div>
            <Modal
                titelText={LOGIN_FORM_CONTENT.LOGIN_TITLE}
                visible={visible}
                width={593}
                setVisible={setVisible}
            >
                <UserNameInput
                    label="Email"
                    placeholder="test@test.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {userErrorMessage? <div style={{color:'red'}}>{userErrorMessage}</div> :null }
                <PassWordInput
                    label="Pass word"
                    value={passWord}
                    onChange={(e) => setPassWord(e.target.value)}
                />
                {errorMessage? <div style={{color:'red'}}>{errorMessage}</div> :null }
                
                <Button style={{marginBottom:'10px', marginTop:'10px'}} onClick={handleSubmit}>{LOGIN_FORM_CONTENT.SIGNUP}</Button>
                <div dangerouslySetInnerHTML={{ __html: LOGIN_FORM_CONTENT.SINGIN_FORM_DISCLAIMER }} onClick={setSignupTab}/>
                <div dangerouslySetInnerHTML={{ __html: LOGIN_FORM_CONTENT.SINGIN_FORM_FORGETPASSWORD }} onClick={setForgetpasswordTab}/>

            </Modal>
            <SingupForm
                    signupVisible={signupVisible}
                    setSignupVisible={setSignupVisible}
                    visible={visible}
                    setVisible={setVisible}
                />
                <ResetPasswordForm
                  resetPassword = {resetPassword}
                   setResetPassword = {setResetPassword}
                   visible={visible}
                    setVisible={setVisible}
                />
        </div>
    )
}

export default LoginForm;