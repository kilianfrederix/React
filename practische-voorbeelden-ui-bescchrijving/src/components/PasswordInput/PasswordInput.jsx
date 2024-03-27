import FormInput from "../FormInput"


import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline'

export default function PasswordInput({ label, name, id, placeholder }) {

    const show = false;
    const icon = show ? <EyeIcon /> : <EyeSlashIcon />
    const type = show ? 'text' : 'password'

    return (
        <FormInput
            // error="wachtwoord is niet veilig"
            icon={icon}
            label={label}
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}

        />
    )
}