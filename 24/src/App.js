import './App.css';
import RegistrationForm from './components/RegistrationForm';
import UserProfileForm from './components/UserProfileForm';
import UserProfileFormYup from './components/UserProfileFormYup';

function App() {
  return (
    <div>
      <RegistrationForm />
      <UserProfileForm />
      <UserProfileFormYup />
    </div>
  );
}

export default App;
