import './App.css';
import FormInput from './components/FormInput';
import FullNameInput from './components/FullNameInput';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Tabs from './components/Tabs/Tabs';
import ContactForm from './components/ContactForm/ContactForm';


function App() {
  return (
    <div className="App">
      <Tabs />
      <ContactForm />
    </div>

  );
}

export default App;
