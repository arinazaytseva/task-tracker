import { FC, useState } from 'react';

import styles from './DropDown.module.scss';

type Props = {
  title: string;
  values: string[];
};

const DropDown: FC<Props> = (props) => {
  const { title, values } = props;
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <div className={styles.dropDown}>
      <div className={styles.dropDown__title}></div>
      {isOpened && values && <div></div>}
    </div>
  );
};

export default DropDown;
