import { FC } from 'react';

import { CommentType } from '@globals/types/types';

import styles from './Comment.module.scss';

type Props = {
  comment: CommentType;
};

const Comment: FC<Props> = ({ comment }) => {
  return <div className={styles.comment}>{comment.text}</div>;
};

export default Comment;
