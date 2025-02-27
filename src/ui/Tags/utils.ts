import { v4 } from 'uuid';

import { TagType } from '@globals/types/properties';

export const createTag = (title: string): TagType => ({
  id: v4(),
  title,
});
