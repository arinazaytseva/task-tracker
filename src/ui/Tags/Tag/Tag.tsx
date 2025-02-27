import { FC, useState } from 'react';

import { TagType } from '@globals/types/properties';
import { convertStringToColorHex } from '@globals/utils/convertStringToColorHex';

import styles from './Tag.module.scss';

type Props = {
  tag: TagType;
  colored: boolean;
  onTagDelete: () => void;
};

const Tag: FC<Props> = ({ tag, colored = false, onTagDelete }) => {
  const { title } = tag;

  const [hovered, setHovered] = useState<boolean>(false);

  console.log('hover', hovered);

  return (
    <div
      className={styles.tag}
      style={{
        backgroundColor: colored ? convertStringToColorHex(title) : '#808080',
      }}
      onMouseMove={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => {
        if (hovered) {
          onTagDelete();
        }
      }}
    >
      {hovered ? `– ${title}` : title}
    </div>
  );
};

export default Tag;
