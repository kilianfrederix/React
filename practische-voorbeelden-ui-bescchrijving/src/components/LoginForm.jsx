import Button from './Button/Button'
import FormInput from './FormInput'
import Header from './Header/header'
import './LoginForm.css'
import PasswordInput from './PasswordInput/PasswordInput'


export default function LoginForm() {
    return (
        <div className="LoginForm">
            <Header
                title="Aanmelden"
                subtitle=""
            />
            <FormInput
                // icon={<AtSymbolIcon />}
                label="E-mailadres of username"
                type="text"
                name="username"
                id="username"
                placeholder="Geef je e-mailadres of username in"

            />
            <PasswordInput
                label="Wachtwoord"
                name="password"
                id="password"
                placeholder="Geef je wachtwoord in"
            />

            <Button
                type="Submit"
                text="Login"
            />
        </div>
    )
}