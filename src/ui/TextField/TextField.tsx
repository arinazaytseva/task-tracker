import { ChangeEvent, FC, KeyboardEvent, useState } from 'react';

import { ExtendedPropertyType } from '@globals/types/properties';

import styles from './TextField.module.scss';

type Props = {
  value: string;
  onSave: (value: ExtendedPropertyType['value']) => void;
};

const TextField: FC<Props> = (props) => {
  const { value, onSave } = props;

  const [inputValue, setInputValue] = useState<string>(value);
  const [isEditable, setIsEditable] = useState<boolean>(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleDoubleClick = () => setIsEditable(true);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (isEditable && e.key === 'Enter') {
      onSave(inputValue);
      setIsEditable(false);
    }
  };

  return isEditable ? (
    <input
      className={styles.textField}
      type="text"
      onChange={handleChange}
      onKeyDown={handleKeyDown}
      value={inputValue}
    />
  ) : (
    <div className={styles.textField} onDoubleClick={handleDoubleClick}>
      {inputValue}
    </div>
  );
};

export default TextField;
