import { ExtendedPropertyType } from './properties';

export type TaskType = {
  id: string;
  title: string;
  description: string;
  created_at: Date;
  created_by: string;
  updated_at: Date;
  updated_by: string;
  statusId: string;
  boardProperties?: ExtendedPropertyType[];
};

export type RichTaskType = TaskType & {
  detailProperties?: ExtendedPropertyType[];
};

export type StatusType = {
  id: string;
  title: string;
};

export type PossibleEdgeType = {
  nodeFrom: string;
  nodeTo: string;
};

export type CommentType = {
  id: string;
  text: string;
  parentType: string;
  parentId: string;
  spaceId: string;
};
