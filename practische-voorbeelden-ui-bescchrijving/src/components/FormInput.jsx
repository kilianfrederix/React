import FormError from './FormError'
import './FormInput.css'
import { EyeIcon } from '@heroicons/react/24/solid'

export default function FormInput({ label, type, name, id, placeholder, error, icon }) {
    return (
        <div className='FormInput'>
            <label className='FormInput-label'>
                <span className='FormInput-labelspan'>
                    {label}

                </span>
                <div className='FormInput-InputGroup'>
                    <input
                        className='FormInput-input'
                        type={type}
                        name={name}
                        id={id}
                        placeholder={placeholder}
                    />
                    <div className='FormInput-Icon'>
                        {icon}
                    </div>
                </div>
            </label>
            {error && <FormError error={error} />}
        </div>
    )
}