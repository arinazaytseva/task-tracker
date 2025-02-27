import { useAppDispatch, useAppSelector } from '@redux/hooks';
import { updateTask } from '@redux/slices/spaceSlice';
import { FC, useEffect } from 'react';

import Comments from '@components/Comments/Comments';
import ModalTemplate from '@components/Modal/ModalTemplate/ModalTemplate';
import Property from '@components/Property/Property';

import TextField from '@ui/TextField/TextField';

import { mockComments, mockRichTasks } from '@globals/mocks';
import { ExtendedPropertyType } from '@globals/types/properties';

import styles from './DetailPage.module.scss';
import { getTaskById, sortProperties } from './utils';

type Props = {
  isOpened: boolean;
  onClose: () => void;
  taskId: string;
};

const DetailPage: FC<Props> = ({ isOpened, onClose, taskId }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (isOpened) {
      const task = getTaskById(taskId, mockRichTasks);
      dispatch(updateTask({ taskId, task }));
    }
  }, [taskId, isOpened]);

  const activeTask = useAppSelector((state) => state.space.tasks).filter(
    (task) => task?.id === taskId
  )[0];
  const detailPropertiesToSort = [...(activeTask.detailProperties ?? [])];
  const sortedProperties = sortProperties(detailPropertiesToSort);

  const onSave =
    (property: ExtendedPropertyType) =>
    (value: ExtendedPropertyType['value']) => {
      // ЗАПРОС: на бэк, где отправляю обновленную карточку
      // У меня пока что происходит обновление карточки в redux
      const otherDetailProperties = activeTask.detailProperties?.filter(
        (detailProperty) => detailProperty.id !== property.id
      );

      const propertyToChange = { ...property };
      propertyToChange.value = value;

      otherDetailProperties?.push(propertyToChange);
      const taskToChange = { ...activeTask };

      if (taskToChange.detailProperties) {
        taskToChange.detailProperties = otherDetailProperties;
      }

      dispatch(updateTask({ taskId, task: taskToChange }));

      console.log(`onSave ${value}`);
      console.log('taskToChange', taskToChange);

      // ЗАПРОС: получаю таску по id
      // Тут пока что беру из redux карточку
    };

  console.log('activeTask', activeTask);

  return (
    <ModalTemplate isOpened={isOpened} onClose={onClose}>
      <div className={styles.detailPage}>
        <h2>{activeTask.title ?? ''}</h2>
        <div className={styles.detailPage__content}>
          <div className={styles.fields}></div>
          {/* {sortedProperties && (
            <div className={styles.detailPage__content__properties}>
              {sortedProperties.map((property) => (
                <Property property={property} onSave={onSave(property)} />
              ))}
            </div>
          )} */}
          <Comments comments={mockComments} />
        </div>
      </div>
    </ModalTemplate>
  );
};

export default DetailPage;
