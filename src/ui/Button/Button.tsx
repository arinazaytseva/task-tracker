import { FC, PropsWithChildren } from 'react';

import styles from './Button.module.scss';

type Props = {
  onClick: () => void;
  disabled?: boolean;
} & PropsWithChildren;

const Button: FC<Props> = (props) => {
  const { onClick, disabled = false, children } = props;

  return (
    <button onClick={onClick} className={styles.button} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
