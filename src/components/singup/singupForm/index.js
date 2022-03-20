import React ,{useState} from "react";
import { LOGIN_FORM as LOGIN_FORM_CONTENT } from "../../../content/form";
import PassWordInput from "../../../common/input/passWordInput/index";
import UserNameInput from "../../../common/input/userNameInput";
import Modal from "../../../common/modal";
import { Button } from "antd";
import LoginForm from "../../login/loginForm";
import { personalProjectApi } from "../../../api/personalProjectApi";


const SingupForm = ({
    signupVisible="",
    setSignupVisible=()=>{},
    setVisible=()=>{},
    visible="",

}
) => {

    let [email, setEmail] = useState()
    let [passWord, setPassWord] = useState()
    const [errorMessage, seterrorMessage] = useState();

    const setLoginTab = () =>{
        setVisible(true);
        setSignupVisible(false);
       
    }

    const handleSignupTab = () => {
        const pro = {
            email:email,
            passWord:passWord
        }
        const p = personalProjectApi.signUp(pro);
        p.then((res) => res.json())
          .then((value) => {
            alert(value.message);
            
          })
          .catch((value) => seterrorMessage(value.message));
          setPassWord("");
      };

    return (

        <div>

            <Modal
                titelText={LOGIN_FORM_CONTENT.SIGNUP_TITLE}
                visible={signupVisible}
                width={593}
                setVisible={setSignupVisible}
            >
                <UserNameInput
                    label="Email"
                    placeholder="test@test.com"
                    value={email}
                    onChange={(e) => setEmail( e.target.value)}
                />
                {errorMessage? <div style={{color:'red'}}>{errorMessage}</div> :null }
                <PassWordInput
                    label="Pass word"
                    value={passWord}
                    onChange={(e) => setPassWord(e.target.value)}
                />
                <Button style={{marginTop:'10px', marginBottom:'5px', float:'center'}} onClick={handleSignupTab}>{LOGIN_FORM_CONTENT.SINGUP_FORM_BUTTON}</Button>
                <div dangerouslySetInnerHTML={{ __html: LOGIN_FORM_CONTENT.SIGNUP_FORM_DISCLAIMER }} onClick={setLoginTab} />
                <LoginForm
                    visible={visible}
                    setVisible={setVisible}
                />

            </Modal>
        </div>
    )
}

export default SingupForm;