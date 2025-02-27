type PropertyType = {
  id: string;
  title: string;
  isNecessary: boolean;
  order: number;
};

export type TagType = {
  id: string;
  title: string;
};

type TextPropertyType = PropertyType & {
  type: 'text';
  value: string;
};

type TagPropertyType = PropertyType & {
  type: 'tag';
  value: TagType[];
};

type LinkPropertyType = PropertyType & {
  type: 'link';
  value: string;
};

type CheckboxPropertyType = PropertyType & {
  type: 'checkbox';
  value: boolean;
};

type DatePropertyType = PropertyType & {
  type: 'date';
  value: Date;
};

type RangePropertyType = PropertyType & {
  type: 'range';
  value: number;
};

export type ExtendedPropertyType =
  | TextPropertyType
  | TagPropertyType
  | LinkPropertyType
  | CheckboxPropertyType
  | DatePropertyType
  | RangePropertyType;
