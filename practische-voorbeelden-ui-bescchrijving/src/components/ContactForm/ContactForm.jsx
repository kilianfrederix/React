import Button from "../Button/Button";
import FormInput from "../FormInput";
import FullNameInput from "../FullNameInput";
import Header from "../Header/header";
import Voorwaarden from "../Voorwaarden/Voorwaarden";
import Textarea from "./Textarea";

export default function ContactForm() {
    return (
        <div>
            <Header
                title="Contacteer ons"
            />
            <FormInput
                // error="wachtwoord is niet veilig"
                label="Naam"
                type="text"
                name="naam"
                id="naam"
                placeholder="Geef je naam in"
            />
            <FormInput
                // error="wachtwoord is niet veilig"
                label="E-mailadres"
                type="text"
                name="email"
                id="email"
                placeholder="Geef je e-mailadres in"
            />
            <Textarea
                label="Boodschap"
                name="Message"
                id="Message"
                placeholder="Geef hier je boodschap"
            />
            <Voorwaarden
                label="Ga akkoord met de voorwaarden"
                type="Checkbox"
                name="voorwaarden"
                id="voorwaarden"
            />
            <Button
                type="Submit"
                text="Submit"
            />
        </div>
    )
}