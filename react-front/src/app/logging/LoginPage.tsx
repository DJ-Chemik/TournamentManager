import React from 'react';
import useFormInput from '../../ownHooks/UseFormInput';

const LoginPage = () => {
    const emailInput = useFormInput("");
    const passwordInput = useFormInput("");

    const handleSubmit = () => {
      console.log(`Logged: ${emailInput.value} <<${passwordInput.value}>>`)
    }

    const handleClickMissPassword = () => {

    }

    const handleClickRegister = () => {
        
    }

    return (
      <div>
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

export default LoginPage;