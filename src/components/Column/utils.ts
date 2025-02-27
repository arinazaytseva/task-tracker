import { PossibleEdgeType, TaskType } from '@globals/types/types';

export const getTasksByStatusId = (statusId: string, tasks: TaskType[]) =>
  tasks.filter((task) => task?.statusId === statusId);

export const getAvailableStatuses = (
  targetNode: string,
  possibleEdges: PossibleEdgeType[]
) => {
  const availableStatuses = possibleEdges
    .filter((edge) => edge.nodeFrom === targetNode)
    .map((edge) => edge.nodeTo);

  return availableStatuses;
};
