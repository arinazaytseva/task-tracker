import { ExtendedPropertyType } from '@globals/types/properties';
import { TaskType } from '@globals/types/types';

export const getTaskById = (taskId: string, tasks: TaskType[]): TaskType =>
  tasks.filter((task) => task.id === taskId)[0];

export const sortProperties = (
  properties: ExtendedPropertyType[]
): ExtendedPropertyType[] => {
  return properties.sort(
    (firstProperty, secondProperty) =>
      firstProperty.order - secondProperty.order
  );
};
