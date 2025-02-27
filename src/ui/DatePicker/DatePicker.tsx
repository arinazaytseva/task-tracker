import { ChangeEvent, FC, KeyboardEvent, useState } from 'react';

import { ExtendedPropertyType } from '@globals/types/properties';

import styles from './DatePicker.module.scss';
import { formatDate, parseDate } from './utils';

type Props = {
  value: Date;
  onSave: (value: ExtendedPropertyType['value']) => void;
};

const DatePicker: FC<Props> = (props) => {
  const { value, onSave } = props;

  const [inputValue, setInputValue] = useState<string>(formatDate(value));
  const [isEditable, setIsEditable] = useState<boolean>(false);

  const handleDoubleClick = () => setIsEditable(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (isEditable && e.key === 'Enter') {
      onSave(parseDate(inputValue));
      setIsEditable(false);
    }
  };

  return isEditable ? (
    <input
      type="date"
      value={inputValue}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  ) : (
    <div className={styles.datePicker} onDoubleClick={handleDoubleClick}>
      {formatDate(value)}
    </div>
  );
};

export default DatePicker;
