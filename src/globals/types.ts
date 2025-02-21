enum PropertyVariant {
  Tag = 'tag',
  Text = 'text',
  Link = 'link',
  Checkbox = 'checkbox',
  Date = 'date',
  Range = 'range',
}

type PropertyValueType = {
  [PropertyVariant.Tag]: string[];
  [PropertyVariant.Text]: string;
  [PropertyVariant.Link]: string;
  [PropertyVariant.Checkbox]: boolean;
  [PropertyVariant.Date]: Date;
  [PropertyVariant.Range]: number;
};

export type PropertyType = {
  id: string;
  title: string;
  variant: PropertyVariant;
  value: PropertyValueType[];
  isNecessary: boolean;
};

export type TaskType = {
  id: string;
  title: string;
  created: Date;
  creator: string;
  updated: Date;
  updator: string;
  board_properties: PropertyType[];
};

export type RichTaskType = TaskType & {
  detail_properties: PropertyType[];
};

export type StatusType = {
  id: string;
  title: string;
};
