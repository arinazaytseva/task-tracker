import { FC } from 'react';
import styles from './Space.module.css';

type Props = {
  spaceId: string;
};

const Space: FC<Props> = ({ spaceId }) => {
  console.log('space_id', spaceId);
  // getNodes - получить список статусов
  // getPossibleEdjes - получить список возможных перемещений
  // getTasksBySpaceId - получить список карточек по space_id

  return <div className={styles.space}></div>;
};

export default Space;

// '@components': path.resolve(__dirname, 'src/components'),
// '@globals': path.resolve(__dirname, 'src/globals'),
// '@ui': path.resolve(__dirname, 'src/ui'),
