import React from 'react';
import axios from 'axios'
import useFormInput from '../../ownHooks/UseFormInput';

interface Props{
    backToLogging: () => void;
  }

const RegistrationPage = (props: Props) => {
    const nameInput = useFormInput("");
    const surnameInput = useFormInput("");
    const emailInput = useFormInput("");
    const passwordInput = useFormInput("");

    const registerUser = () => {
        const user = {
            name: String(nameInput.value),
            surname: String(surnameInput.value),
            email: String(emailInput.value),
            password: String(passwordInput.value),
            accountActivated: "true" //TODO
        }
        
        axios.post("http://localhost:8080/api/users/add", user)
            .then( response => {
                console.log(response.data);
            })
            .catch( error => {
                console.log("Error: " + error);
            });
    }

    const handleSubmit = () => {
        // SEND EMAIL //TODO
        registerUser();
    }

    const handleBackToLogging = () => {
        props.backToLogging();
    }

    return (
        <div>
            <form>
                <div>
                    <label>Imię: </label>
                    <input
                        type="name"
                        name="name"
                        placeholder="name"
                        value={nameInput.value}
                        onChange={nameInput.onChange}
                    />
                </div>
                <div>
                    <label>Nazwisko: </label>
                    <input
                        type="surname"
                        name="surname"
                        placeholder="surname"
                        value={surnameInput.value}
                        onChange={surnameInput.onChange}
                    />
                </div>
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
                <input type="button" value="Zarejestruj" onClick={handleSubmit}/>
                <input type="button" value="Wróć do strony logowania" onClick={handleBackToLogging}/>
            </form>
        
        </div>
    );
}

export default RegistrationPage;