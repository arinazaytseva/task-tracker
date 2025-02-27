import { FC, PropsWithChildren } from 'react';

import styles from './Property.module.scss';

type Props = {
  label: string;
} & PropsWithChildren;

const PropertyWithLabel: FC<Props> = ({ label, children }) => {
  return (
    <div className={styles.propertyWithLabel}>
      <span className={styles.propertyWithLabel__lable}>{label}:</span>
      <span>{children}</span>
    </div>
  );
};

export default PropertyWithLabel;
