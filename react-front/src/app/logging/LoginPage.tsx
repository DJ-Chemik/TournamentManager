import React from 'react';
import axios from 'axios';
import useFormInput from '../../ownHooks/UseFormInput';
import RegistrationPage from './RegistrationPage';

interface Props {
    goToMainPage: () => void;
}

const LoginPage = (props: Props) => {
    const emailInput = useFormInput("");
    const passwordInput = useFormInput("");
    const [wantRegister, setWantRegister] = React.useState<boolean>(false);


    const logUser = () => {
        const user = {
            email: String(emailInput.value),
            password: String(passwordInput.value),
        }
        
        axios.post("http://localhost:8080/api/users/login", user)
            .then( response => {
                console.log(response.data);
            })
            .catch( error => {
                console.log("Error: " + error);
            });
    }

    const handleSubmit = () => {
      if(emailInput.value && passwordInput.value){

      }
    }

    const handleClickMissPassword = () => {

    }

    const handleClickRegister = () => {
        setWantRegister(true);
    }

    if(wantRegister){
        return(
            <div>
                <button onClick={props.goToMainPage}>Wróć do strony głównej</button>
                <RegistrationPage backToLogging={() => {setWantRegister(false)}}/>
            </div>
        )
    }else{
        return (
        <div>
                <button onClick={props.goToMainPage}>Wróć do strony głównej</button>
                <form>
                    <div>
                        <label>E-mail: </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="example@gmail.com"
                            value={emailInput.value}
                            onChange={emailInput.onChange}
                        />
                    </div>
                    <div>
                        <label>Hasło: </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="*********"
                            value={passwordInput.value}
                            onChange={passwordInput.onChange}
                        />
                    </div>
                    <input type="button" value="Zaloguj" onClick={handleSubmit}/>
                    <input type="button" value="Zapomniałem hasła" onClick={handleClickMissPassword}/>
                    <input type="button" value="Zarejestruj się" onClick={handleClickRegister}/>
                </form>
            
            </div>
        );
    }
}

export default LoginPage;