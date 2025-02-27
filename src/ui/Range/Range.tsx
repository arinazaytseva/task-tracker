import { FC, use, useState } from 'react';

import { ExtendedPropertyType } from '@globals/types/properties';

import styles from './Range.module.scss';

type Props = {
  value: number;
  onSave: (value: ExtendedPropertyType['value']) => void;
};

const Range: FC<Props> = (props) => {
  const { value, onSave } = props;

  const [isEditable, setIsEditable] = useState<boolean>(false);

  return isEditable ? (
    <input type="range" />
  ) : (
    <div className={styles.range} onDoubleClick={() => setIsEditable(true)}>
      {value}
    </div>
  );
};

export default Range;
