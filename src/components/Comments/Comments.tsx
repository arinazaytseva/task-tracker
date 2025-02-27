import { FC } from 'react';

import { CommentType } from '@globals/types/types';

import Comment from './Comment/Comment';
import styles from './Comments.module.scss';

type Props = {
  comments: CommentType[];
};

const Comments: FC<Props> = ({ comments }) => {
  return (
    <div className={styles.comments}>
      <div className={styles.comments__header}>Комментарии</div>
      <textarea name="Добавить комментарий" id="Add comment"></textarea>
      <div className={styles.comments__content}>
        {comments.map((comment) => (
          <Comment comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
