import styles from './App.module.css';

import { Space } from '@components/Space';

const MOCK_SPACE_ID = 'mock space id';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.app__header}></div>
      <div className={styles.app__body}>
        <Space spaceId={MOCK_SPACE_ID} />
      </div>
    </div>
  );
}

export default App;
