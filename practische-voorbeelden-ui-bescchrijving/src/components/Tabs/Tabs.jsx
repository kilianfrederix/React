import LoginForm from "../LoginForm";
import RegisterForm from "../RegisterForm";

export default function Tabs() {
    const show = 'aanmelden' //registreren
    const form = show === 'aanmelden' ? <LoginForm /> : <RegisterForm />
    return (
        <div>
            <div style={{ display: 'flex', gap: 15 }}>
                <button>Aanmelden</button>
                <button>Registreren</button>
            </div>
            <div>
                {form}
            </div>
        </div >
    )
}