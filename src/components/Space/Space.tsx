import { FC } from 'react';

import { Column } from '@components/Column';

import { mockNodes } from '@globals/mocks';

import styles from './Space.module.css';

type Props = {
  spaceId: string;
};

const Space: FC<Props> = ({ spaceId }) => {
  console.log('space_id', spaceId);
  // getNodes - получить список статусов
  // getPossibleEdjes - получить список возможных sперемещений
  // getTasksBySpaceId - получить список карточек по space_id

  return (
    <div className={styles.space}>
      {mockNodes.map((node) => (
        <Column key={node.id} />
      ))}
    </div>
  );
};

export default Space;

// "start": "react-scripts start",
// "build": "react-scripts build",
// "test": "react-scripts test",
