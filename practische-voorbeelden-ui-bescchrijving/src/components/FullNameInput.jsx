import FormInput from "./FormInput"
import './FormNameInput.css'


export default function FullNameInput() {
    return (
        <div className="FullNameInput">
            <FormInput

                label="naam"
                type="text"
                name="naam"
                id="naam"
                placeholder="Geef je naam in"

            />
            <FormInput
                label="voornaam"
                type="text"
                name="voornaam"
                id="voornaam"
                placeholder="Geef je voornaam in"

            />
        </div>
    )
}