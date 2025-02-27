import { FC, useState } from 'react';

import DetailPage from '@components/DetailPage/DetailPage';

import { TaskType } from '@globals/types/types';

import styles from './Card.module.scss';

type Props = {
  task: TaskType;
  onDrag: () => void;
};

const Card: FC<Props> = ({ task, onDrag }) => {
  const { id, title } = task;

  const [isDetailPageOpened, setIsDetailPageOpened] = useState<boolean>(false);
  // onClick = () => { setIsDetailOpened() setReduxCardActive() }

  return (
    <>
      <div
        className={styles.card}
        onDrag={onDrag}
        onClick={() => setIsDetailPageOpened(true)}
        draggable
      >
        <div className={styles.card__header}>{title}</div>
        <div className={styles.card__content}></div>
      </div>
      <DetailPage
        isOpened={isDetailPageOpened}
        onClose={() => setIsDetailPageOpened(false)}
        taskId={id}
      />
    </>
  );
};

export default Card;
