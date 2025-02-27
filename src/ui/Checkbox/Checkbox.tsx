import { FC, useState } from 'react';

import { ExtendedPropertyType } from '@globals/types/properties';

import styles from './Checkbox.module.scss';

type Props = {
  value: boolean;
  onSave: (value: ExtendedPropertyType['value']) => void;
};

const Checkbox: FC<Props> = (props) => {
  const { value, onSave } = props;

  const [inputValue, setInputValue] = useState<boolean>(value);

  const onClick = () => {
    setInputValue((prev) => {
      onSave(!prev);

      return !prev;
    });
  };

  return (
    <input
      className={styles.checkbox}
      type="checkbox"
      checked={inputValue}
      onClick={onClick}
    />
  );
};

export default Checkbox;
