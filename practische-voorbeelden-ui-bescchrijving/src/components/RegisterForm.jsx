import FormInput from './FormInput'
import Button from './Button/Button'
import FullNameInput from './FullNameInput'
import './RegisterForm.css'
import Header from './Header/header'
import PasswordInput from './PasswordInput/PasswordInput'

export default function RegisterForm() {
    return (

        <div className="RegisterForm">
            <Header
                title="Registreren"
                subtitle="Registreer hier je account"
            />
            <FullNameInput />
            <FormInput
                label="Username"
                type="text"
                name="username"
                id="username"
                placeholder="Geef je username in"

            />
            <FormInput
                // error="wachtwoord is niet veilig"
                label="E-mailadres"
                type="text"
                name="username"
                id="username"
                placeholder="Geef je e-mailadres in"
            />
            <PasswordInput
                label="Wachtwoord"
                name="password"
                id="password"
                placeholder="Geef je wachtwoord in"
            />

            <PasswordInput
                label="Comfirmation Wachtwoord"
                name="comfirmation wachtwoord"
                id="comfirmation wachtwoord"
                placeholder="Geef je comfirmation wachtwoord in"
            />

            <Button
                type="Submit"
                text="Registreer"
            />

        </div>
    )
}