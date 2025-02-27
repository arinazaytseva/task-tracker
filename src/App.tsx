import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from 'react-router-dom';

import ProfilePage from '@components/ProfilePage/ProfilePage';
import RegistrationPage from '@components/RegistrationPage/RegistrationPage';
import { Space } from '@components/Space';

import UserLabel from '@ui/UserLabel/UserLabel';

import styles from './App.module.scss';

const mockUsername = 'Арина Зайцева';

const AppContent = () => {
  // Где-то здесь что-то происходить с кукой будет
  const navigate = useNavigate();

  const onUserLabelClick = () => navigate('/profile');

  return (
    <div className={styles.app}>
      <div className={styles.app__header}>
        <UserLabel
          size="30px"
          fontSize="14px"
          username="Арина Зайцева"
          onClick={onUserLabelClick}
        />
      </div>
      <div className={styles.app__body}>
        <Routes>
          <Route path="space/:spaceName" element={<Space />} />
          <Route path="register" element={<RegistrationPage />} />
          <Route
            path="profile"
            element={<ProfilePage username={mockUsername} />}
          />
        </Routes>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
