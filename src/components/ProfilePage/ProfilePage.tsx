import { FC } from 'react';

import styles from './ProfilePage.module.scss';

type Props = {
  username: string;
};

const ProfilePage: FC<Props> = ({ username }) => {
  return (
    <div className={styles.page}>
      <span style={{ fontWeight: 600 }}>Никнейм:</span> {username}
    </div>
  );
};

export default ProfilePage;
