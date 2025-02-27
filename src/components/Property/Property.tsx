import { FC } from 'react';

import Checkbox from '@ui/Checkbox/Checkbox';
import DatePicker from '@ui/DatePicker/DatePicker';
import Link from '@ui/Link/Link';
import Range from '@ui/Range/Range';
import Tags from '@ui/Tags/Tags';
import TextField from '@ui/TextField/TextField';

import { ExtendedPropertyType } from '@globals/types/properties';

import styles from './Property.module.scss';
import PropertyWithLabel from './PropertyWithLabel';

type Props = {
  property: ExtendedPropertyType;
  onSave: (property: ExtendedPropertyType['value']) => void;
};

const Property: FC<Props> = (props) => {
  const { property, onSave } = props;
  const { id, title, isNecessary, type, value } = property;

  const renderProperty = () => {
    switch (type) {
      case 'text':
        return <TextField value={value} onSave={onSave} />;

      case 'checkbox':
        return <Checkbox value={value} onSave={onSave} />;

      case 'date':
        return <DatePicker value={value} onSave={onSave} />;

      case 'link':
        return <Link value={value} onSave={onSave} />;

      case 'tag':
        return <Tags value={value} onSave={onSave} />;

      default:
        return null;
    }
  };

  return (
    <PropertyWithLabel label={title}>{renderProperty()}</PropertyWithLabel>
  );
};

export default Property;
