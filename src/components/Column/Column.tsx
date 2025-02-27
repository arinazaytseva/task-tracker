import { useAppDispatch } from '@redux/hooks';
import { changeTaskStatus } from '@redux/slices/spaceSlice';
import cn from 'classnames';
import { FC, useContext, useState } from 'react';

import Card from '@components/Card/Card';

import { DNDContext } from '@globals/providers/DNDContextProvider/DNDContext';
import { PossibleEdgeType, StatusType, TaskType } from '@globals/types/types';

import styles from './Column.module.scss';
import { getAvailableStatuses, getTasksByStatusId } from './utils';

type Props = {
  tasks: TaskType[];
  status: StatusType;
  possibleEdges: PossibleEdgeType[];
};

const Column: FC<Props> = (props) => {
  const { tasks, status, possibleEdges } = props;

  const [draggedOver, setDraggedOver] = useState<boolean>();
  const dndContext = useContext(DNDContext);

  const selectedTasks = getTasksByStatusId(status.id, tasks);

  // Вынести в компонент Space
  let availableStatuses: string[] = [];

  if (dndContext?.draggableItem) {
    availableStatuses = getAvailableStatuses(
      dndContext?.draggableItem.statusId,
      possibleEdges
    );
    availableStatuses.push(dndContext?.draggableItem.statusId);
  }

  const dispatch = useAppDispatch();

  // DND
  // Когда беру карту, помещаю карточку в draggableItem
  // Когда бросаю карточку, меняю карточке статус

  const onDrag = (task: TaskType) => () => {
    dndContext?.setDraggableItem(task);
  };

  const checkIsPossibleToMove = (
    availableStatuses: string[],
    statusTo: string
  ): boolean =>
    (availableStatuses.find((status) => status === statusTo) ?? []).length !==
    0;

  const onDrop = () => {
    if (
      dndContext?.draggableItem &&
      checkIsPossibleToMove(availableStatuses, status.id)
    ) {
      dispatch(
        changeTaskStatus({
          taskId: dndContext.draggableItem.id,
          statusId: status.id,
        })
      );
      dndContext?.setDraggableItem(null);
    }

    setDraggedOver(false);
  };

  const borderStyles = cn({
    [styles['column--border-red']]:
      draggedOver && !checkIsPossibleToMove(availableStatuses, status.id),
    [styles['column--border-blue']]:
      draggedOver && checkIsPossibleToMove(availableStatuses, status.id),
  });

  return (
    <div
      className={`${styles.column} ${borderStyles}`}
      onDrop={onDrop}
      onDragOver={(e) => {
        e.preventDefault();
        setDraggedOver(true);
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        setDraggedOver(false);
      }}
    >
      <div className={styles.column__header}>{status.title}</div>
      <div className={styles.column__content}>
        {selectedTasks.map((task) => (
          <Card task={task} onDrag={onDrag(task)} />
        ))}
      </div>
    </div>
  );
};

export default Column;
