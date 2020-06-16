import React from 'react';
import useFormInput from '../../ownHooks/UseFormInput';

interface Props{
    backToLogging: () => void;
  }

const RegistrationPage = (props: Props) => {
    const nameInput = useFormInput("");
    const surnameInput = useFormInput("");
    const emailInput = useFormInput("");
    const passwordInput = useFormInput("");

    const handleSubmit = () => {
        // SEND EMAIL
        // ADD USER
        console.log(`${nameInput.value} ${surnameInput.value} at ${emailInput.value} <<${passwordInput.value}>>`)
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