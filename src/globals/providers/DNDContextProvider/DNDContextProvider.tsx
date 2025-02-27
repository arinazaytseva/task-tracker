import { FC, PropsWithChildren, useState } from 'react';

import { DNDContext } from '@globals/providers/DNDContextProvider/DNDContext';

import { DraggableItemType } from './DNDContext';

const DNDContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [draggableItem, setDraggableItem] = useState<DraggableItemType>(null);

  return (
    <DNDContext.Provider value={{ draggableItem, setDraggableItem }}>
      {children}
    </DNDContext.Provider>
  );
};

export default DNDContextProvider;
