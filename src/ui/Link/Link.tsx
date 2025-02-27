import { FC, KeyboardEvent, useState } from 'react';

import { ExtendedPropertyType } from '@globals/types/properties';

import styles from './Link.module.scss';

type Props = {
  value: string;
  onSave: (value: ExtendedPropertyType['value']) => void;
};

const Link: FC<Props> = (props) => {
  const { value, onSave } = props;

  const [inputValue, setInputValue] = useState<string>(value);
  const [isEditable, setIsEditable] = useState<boolean>(false);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (isEditable && e.key === 'Enter') {
      onSave(inputValue);
      setIsEditable(false);
    }
  };

  const handleChange = () => {};

  return isEditable ? (
    <input
      className={styles.textField}
      type="text"
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      value={inputValue}
    />
  ) : (
    <a className={styles.link} href={value}>
      {value}
    </a>
  );
};

export default Link;
