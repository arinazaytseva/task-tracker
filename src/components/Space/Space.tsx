import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { setTasks } from '@redux/slices/spaceSlice';
import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Column } from '@components/Column';

import { mockNodes, mockPossibleEdges, mockTasks } from '@globals/mocks';
import { TaskType } from '@globals/types/types';

import styles from './Space.module.scss';

const getMockTasks = (): TaskType[] => mockTasks;

const Space: FC = () => {
  // ЗАПРОС: getNodes - получить список статусов
  // ЗАПРОС: getPossibleEdges - получить список возможных перемещений
  // ЗАПРОС: getTasksBySpaceId - получить список карточек по space_id

  const { spaceName } = useParams();
  console.log('spaceName', spaceName);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const tasks = getMockTasks();
    dispatch(setTasks({ tasks }));
  }, []);

  const tasks = useAppSelector((state) => state.space.tasks);
  console.log('tasks', tasks);

  return (
    <div className={styles.space}>
      {mockNodes.map((node) => (
        <Column
          key={node.id}
          tasks={tasks}
          status={node}
          possibleEdges={mockPossibleEdges}
        />
      ))}
    </div>
  );
};

export default Space;

// "start": "react-scripts start",
// "build": "react-scripts build",
// "test": "react-scripts test",
