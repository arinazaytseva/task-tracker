import { Dispatch, SetStateAction, createContext } from 'react';

import { TaskType } from '@globals/types/types';

export type DraggableItemType = TaskType | null;

type DNDContextType = {
  draggableItem: DraggableItemType;
  setDraggableItem: Dispatch<SetStateAction<DraggableItemType>>;
} | null;

export const DNDContext = createContext<DNDContextType>(null);
