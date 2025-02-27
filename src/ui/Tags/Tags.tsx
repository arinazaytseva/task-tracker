import { ChangeEvent, FC, KeyboardEvent, useState } from 'react';

import Tag from '@ui/Tags/Tag/Tag';

import { ExtendedPropertyType, TagType } from '@globals/types/properties';

import styles from './Tags.module.scss';
import { createTag } from './utils';

type Props = {
  value: TagType[];
  onSave: (value: ExtendedPropertyType['value']) => void;
};

const Tags: FC<Props> = ({ value, onSave }) => {
  const [addMode, setAddMode] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const onTagDelete = (tagId: string) => () => {
    const changedTags = value.filter((tag) => tag.id !== tagId);
    onSave(changedTags);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (addMode && e.key === 'Enter') {
      const tagArrToChange = [...value];

      const newTag = createTag(inputValue);
      tagArrToChange.push(newTag);

      setAddMode(false);
      setInputValue('');

      onSave(tagArrToChange);
    }
  };

  return (
    <div className={styles.tags}>
      {value.map((tag) => (
        <Tag
          key={tag.id}
          colored={true}
          tag={tag}
          onTagDelete={onTagDelete(tag.id)}
        />
      ))}
      {!addMode && (
        <button
          className={styles.tags__addButton}
          type="button"
          onClick={() => setAddMode((prev) => !prev)}
        >
          +
        </button>
      )}
      {addMode && (
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      )}
    </div>
  );
};

export default Tags;
