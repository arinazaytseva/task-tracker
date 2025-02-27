import { FC } from 'react';

import { convertStringToColorHex } from '@globals/utils/convertStringToColorHex';

import styles from './UserLabel.module.scss';
import { getFirstLetters } from './utils';

type Props = {
  size: string | number;
  fontSize: string | number;
  username: string;
  onClick?: () => void;
};

const UserLabel: FC<Props> = (props) => {
  const { size, fontSize, username, onClick } = props;

  return (
    <button
      type="button"
      className={styles.userLabel}
      style={{
        width: size,
        height: size,
        backgroundColor: convertStringToColorHex(username),
        fontSize: fontSize,
      }}
      onClick={onClick}
    >
      {getFirstLetters(username)}
    </button>
  );
};

export default UserLabel;
