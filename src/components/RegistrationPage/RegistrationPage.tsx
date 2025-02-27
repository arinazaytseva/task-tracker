import { FC, useState } from 'react';

import styles from './RegistrationPage.module.scss';

const RegistrationPage: FC = () => {
  const [nickname, setNickname] = useState();

  return (
    <div className={styles.page}>
      <form action="" method="" onSubmit={() => {}}>
        <input type="text" name="name" id="name" value={nickname} required />
      </form>
    </div>
  );
};

export default RegistrationPage;
