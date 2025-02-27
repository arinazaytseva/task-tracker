import {
  CommentType,
  PossibleEdgeType,
  RichTaskType,
  StatusType,
  TaskType,
} from './types/types';

const mockDate1 = new Date(Date.UTC(2025, 1, 20, 1, 2, 3));
const mockDate2 = new Date(Date.UTC(2025, 1, 23, 1, 2, 3));
const mockDate3 = new Date(Date.UTC(2025, 1, 22, 1, 2, 3));

export const mockTasks: RichTaskType[] = [
  {
    id: 'task_1',
    title: 'Карточка 1',
    description:
      'dfkvlfd vdfkvnbdfjbnf dvjnfdjvknfd vfdkjv fdknvdfv fdvndfvjk dvdfjv ndfkjvdfvdfv',
    created_at: mockDate1,
    created_by: 'Арина Зайцева',
    updated_at: mockDate2,
    updated_by: 'Александра Зайцева',
    statusId: 'status_1',
    boardProperties: [
      {
        id: 'property_1',
        title: 'Название',
        isNecessary: true,
        type: 'text',
        value: 'Это название классной статьи',
        order: 1,
      },
    ],
  },
  {
    id: 'task_5',
    title: 'Карточка 5',
    description:
      'dfkvlfd vdfkvnbdfjbnf dvjnfdjvknfd vfdkjv fdknvdfv fdvndfvjk dvdfjv ndfkjvdfvdfv',
    created_at: mockDate1,
    created_by: 'Арина Зайцева',
    updated_at: mockDate2,
    updated_by: 'Александра Зайцева',
    statusId: 'status_2',
    boardProperties: [
      {
        id: 'property_1',
        title: 'Название',
        isNecessary: true,
        type: 'text',
        value: 'Это название классной статьи',
        order: 1,
      },
      {
        id: 'property_2',
        title: 'Теги',
        isNecessary: true,
        type: 'tag',
        order: 2,
        value: [
          {
            id: 'tag_1',
            title: 'Онлайн торговля',
          },
          {
            id: 'tag_2',
            title: 'Рестораны',
          },
          {
            id: 'tag_3',
            title: 'Налоги',
          },
          {
            id: 'tag_4',
            title: 'Торговля',
          },
        ],
      },
      {
        id: 'property_3',
        title: 'Бриф',
        isNecessary: false,
        type: 'link',
        value:
          'https://www.typescriptlang.org/docs/handbook/utility-types.html',
        order: 3,
      },
      {
        id: 'property_4',
        title: 'Аппрув от кого-то',
        isNecessary: true,
        type: 'checkbox',
        value: false,
        order: 4,
      },
      {
        id: 'property_4',
        title: 'Дедлайн',
        isNecessary: true,
        type: 'date',
        value: mockDate3,
        order: 5,
      },
    ],
  },
  {
    id: 'task_3',
    title: 'Карточка 3',
    description:
      'dfkvlfd vdfkvnbdfjbnf dvjnfdjvknfd vfdkjv fdknvdfv fdvndfvjk dvdfjv ndfkjvdfvdfv',
    created_at: mockDate1,
    created_by: 'Арина Зайцева',
    updated_at: mockDate2,
    updated_by: 'Александра Зайцева',
    statusId: 'status_3',
    boardProperties: [
      {
        id: 'property_1',
        title: 'Название',
        isNecessary: true,
        type: 'text',
        value: 'Это название классной статьи',
        order: 1,
      },
      {
        id: 'property_2',
        title: 'Теги',
        isNecessary: true,
        type: 'tag',
        order: 2,
        value: [
          {
            id: 'tag_1',
            title: 'Онлайн торговля',
          },
          {
            id: 'tag_2',
            title: 'Рестораны',
          },
          {
            id: 'tag_3',
            title: 'Налоги',
          },
          {
            id: 'tag_4',
            title: 'Торговля',
          },
        ],
      },
      {
        id: 'property_3',
        title: 'Бриф',
        isNecessary: false,
        type: 'link',
        value:
          'https://www.typescriptlang.org/docs/handbook/utility-types.html',
        order: 3,
      },
      {
        id: 'property_4',
        title: 'Аппрув от кого-то',
        isNecessary: true,
        type: 'checkbox',
        value: false,
        order: 4,
      },
      {
        id: 'property_4',
        title: 'Дедлайн',
        isNecessary: true,
        type: 'date',
        value: mockDate3,
        order: 5,
      },
    ],
  },
  {
    id: 'task_4',
    title: 'Карточка 4',
    description:
      'dfkvlfd vdfkvnbdfjbnf dvjnfdjvknfd vfdkjv fdknvdfv fdvndfvjk dvdfjv ndfkjvdfvdfv',
    created_at: mockDate1,
    created_by: 'Арина Зайцева',
    updated_at: mockDate2,
    updated_by: 'Александра Зайцева',
    statusId: 'status_4',
    boardProperties: [
      {
        id: 'property_1',
        title: 'Название',
        isNecessary: true,
        type: 'text',
        value: 'Это название классной статьи',
        order: 1,
      },
      {
        id: 'property_2',
        title: 'Теги',
        isNecessary: true,
        type: 'tag',
        order: 2,
        value: [
          {
            id: 'tag_1',
            title: 'Онлайн торговля',
          },
          {
            id: 'tag_2',
            title: 'Рестораны',
          },
          {
            id: 'tag_3',
            title: 'Налоги',
          },
          {
            id: 'tag_4',
            title: 'Торговля',
          },
        ],
      },
      {
        id: 'property_3',
        title: 'Бриф',
        isNecessary: false,
        type: 'link',
        value:
          'https://www.typescriptlang.org/docs/handbook/utility-types.html',
        order: 3,
      },
      {
        id: 'property_4',
        title: 'Аппрув от кого-то',
        isNecessary: true,
        type: 'checkbox',
        value: false,
        order: 4,
      },
      {
        id: 'property_4',
        title: 'Дедлайн',
        isNecessary: true,
        type: 'date',
        value: mockDate3,
        order: 5,
      },
    ],
  },
];

export const mockNodes: StatusType[] = [
  {
    id: 'status_1',
    title: 'status_1',
  },
  {
    id: 'status_2',
    title: 'status_2',
  },
  {
    id: 'status_3',
    title: 'status_3',
  },
  {
    id: 'status_4',
    title: 'status_4',
  },
  {
    id: 'status_5',
    title: 'status_5',
  },
  {
    id: 'status_6',
    title: 'status_6',
  },
  {
    id: 'status_7',
    title: 'status_7',
  },
];

export const mockPossibleEdges: PossibleEdgeType[] = [
  { nodeFrom: 'status_1', nodeTo: 'status_2' },
  { nodeFrom: 'status_2', nodeTo: 'status_3' },
  { nodeFrom: 'status_3', nodeTo: 'status_4' },
  { nodeFrom: 'status_4', nodeTo: 'status_5' },
  { nodeFrom: 'status_5', nodeTo: 'status_6' },
  { nodeFrom: 'status_6', nodeTo: 'status_7' },

  { nodeFrom: 'status_2', nodeTo: 'status_1' },
  { nodeFrom: 'status_3', nodeTo: 'status_2' },
  { nodeFrom: 'status_4', nodeTo: 'status_3' },
];

export const mockRichTasks: RichTaskType[] = [
  {
    id: 'task_1',
    title: 'Карточка 1',
    description:
      'dfkvlfd vdfkvnbdfjbnf dvjnfdjvknfd vfdkjv fdknvdfv fdvndfvjk dvdfjv ndfkjvdfvdfv',
    created_at: mockDate1,
    created_by: 'Арина Зайцева',
    updated_at: mockDate2,
    updated_by: 'Александра Зайцева',
    statusId: 'status_1',
    boardProperties: [
      {
        id: 'property_1',
        title: 'Название',
        isNecessary: true,
        type: 'text',
        value: 'Это название классной статьи',
        order: 1,
      },
    ],
    detailProperties: [
      {
        id: 'property_1',
        title: 'Название',
        isNecessary: true,
        type: 'text',
        value: 'Это название классной статьи',
        order: 1,
      },
      {
        id: 'property_2',
        title: 'Теги',
        isNecessary: true,
        type: 'tag',
        order: 2,
        value: [
          {
            id: 'tag_1',
            title: 'Онлайн торговля',
          },
          {
            id: 'tag_2',
            title: 'Рестораны',
          },
          {
            id: 'tag_3',
            title: 'Налоги',
          },
          {
            id: 'tag_4',
            title: 'Торговля',
          },
        ],
      },
      {
        id: 'property_3',
        title: 'Бриф',
        isNecessary: false,
        type: 'link',
        value:
          'https://www.typescriptlang.org/docs/handbook/utility-types.html',
        order: 3,
      },
      {
        id: 'property_4',
        title: 'Аппрув от кого-то',
        isNecessary: true,
        type: 'checkbox',
        value: false,
        order: 4,
      },
      {
        id: 'property_5',
        title: 'Дедлайн',
        isNecessary: true,
        type: 'date',
        value: mockDate3,
        order: 5,
      },
      {
        id: 'property_6',
        title: 'Описание',
        isNecessary: true,
        type: 'text',
        value:
          'The browsers prevent the "drop" actions by default, so you need to prevent them doing that! event.preventDefault() will handle it as you mentioned.',
        order: 6,
      },
      // {
      //   id: 'property_7',
      //   title: 'Количество чего-то',
      //   isNecessary: true,
      //   type: 'range',
      //   value: 5,
      //   order: 7,
      // },
    ],
  },
  {
    id: 'task_2',
    title: 'Карточка 2',
    description:
      'dfkvlfd vdfkvnbdfjbnf dvjnfdjvknfd vfdkjv fdknvdfv fdvndfvjk dvdfjv ndfkjvdfvdfv',
    created_at: mockDate1,
    created_by: 'Арина Зайцева',
    updated_at: mockDate2,
    updated_by: 'Александра Зайцева',
    statusId: 'status_2',
    detailProperties: [
      {
        id: 'property_1',
        title: 'Название',
        isNecessary: true,
        type: 'text',
        value: 'Это название классной статьи',
        order: 1,
      },
      {
        id: 'property_2',
        title: 'Теги',
        isNecessary: true,
        type: 'tag',
        order: 2,
        value: [
          {
            id: 'tag_1',
            title: 'Онлайн торговля',
          },
          {
            id: 'tag_2',
            title: 'Рестораны',
          },
          {
            id: 'tag_3',
            title: 'Налоги',
          },
          {
            id: 'tag_4',
            title: 'Торговля',
          },
        ],
      },
      {
        id: 'property_3',
        title: 'Бриф',
        isNecessary: false,
        type: 'link',
        value:
          'https://www.typescriptlang.org/docs/handbook/utility-types.html',
        order: 3,
      },
      {
        id: 'property_4',
        title: 'Аппрув от кого-то',
        isNecessary: true,
        type: 'checkbox',
        value: false,
        order: 4,
      },
      {
        id: 'property_5',
        title: 'Дедлайн',
        isNecessary: true,
        type: 'date',
        value: mockDate3,
        order: 5,
      },
    ],
  },
  {
    id: 'task_5',
    title: 'Карточка 5',
    description:
      'dfkvlfd vdfkvnbdfjbnf dvjnfdjvknfd vfdkjv fdknvdfv fdvndfvjk dvdfjv ndfkjvdfvdfv',
    created_at: mockDate1,
    created_by: 'Арина Зайцева',
    updated_at: mockDate2,
    updated_by: 'Александра Зайцева',
    statusId: 'status_2',
    boardProperties: [
      {
        id: 'property_1',
        title: 'Название',
        isNecessary: true,
        type: 'text',
        value: 'Это название классной статьи',
        order: 1,
      },
      {
        id: 'property_2',
        title: 'Теги',
        isNecessary: true,
        type: 'tag',
        order: 2,
        value: [
          {
            id: 'tag_1',
            title: 'Онлайн торговля',
          },
          {
            id: 'tag_2',
            title: 'Рестораны',
          },
          {
            id: 'tag_3',
            title: 'Налоги',
          },
          {
            id: 'tag_4',
            title: 'Торговля',
          },
        ],
      },
      {
        id: 'property_3',
        title: 'Бриф',
        isNecessary: false,
        type: 'link',
        value:
          'https://www.typescriptlang.org/docs/handbook/utility-types.html',
        order: 3,
      },
      {
        id: 'property_4',
        title: 'Аппрув от кого-то',
        isNecessary: true,
        type: 'checkbox',
        value: false,
        order: 4,
      },
      {
        id: 'property_4',
        title: 'Дедлайн',
        isNecessary: true,
        type: 'date',
        value: mockDate3,
        order: 5,
      },
    ],
  },
  {
    id: 'task_3',
    title: 'Карточка 3',
    description:
      'dfkvlfd vdfkvnbdfjbnf dvjnfdjvknfd vfdkjv fdknvdfv fdvndfvjk dvdfjv ndfkjvdfvdfv',
    created_at: mockDate1,
    created_by: 'Арина Зайцева',
    updated_at: mockDate2,
    updated_by: 'Александра Зайцева',
    statusId: 'status_3',
    boardProperties: [
      {
        id: 'property_1',
        title: 'Название',
        isNecessary: true,
        type: 'text',
        value: 'Это название классной статьи',
        order: 1,
      },
      {
        id: 'property_2',
        title: 'Теги',
        isNecessary: true,
        type: 'tag',
        order: 2,
        value: [
          {
            id: 'tag_1',
            title: 'Онлайн торговля',
          },
          {
            id: 'tag_2',
            title: 'Рестораны',
          },
          {
            id: 'tag_3',
            title: 'Налоги',
          },
          {
            id: 'tag_4',
            title: 'Торговля',
          },
        ],
      },
      {
        id: 'property_3',
        title: 'Бриф',
        isNecessary: false,
        type: 'link',
        value:
          'https://www.typescriptlang.org/docs/handbook/utility-types.html',
        order: 3,
      },
      {
        id: 'property_4',
        title: 'Аппрув от кого-то',
        isNecessary: true,
        type: 'checkbox',
        value: false,
        order: 4,
      },
      {
        id: 'property_4',
        title: 'Дедлайн',
        isNecessary: true,
        type: 'date',
        value: mockDate3,
        order: 5,
      },
    ],
  },
  {
    id: 'task_4',
    title: 'Карточка 4',
    description:
      'dfkvlfd vdfkvnbdfjbnf dvjnfdjvknfd vfdkjv fdknvdfv fdvndfvjk dvdfjv ndfkjvdfvdfv',
    created_at: mockDate1,
    created_by: 'Арина Зайцева',
    updated_at: mockDate2,
    updated_by: 'Александра Зайцева',
    statusId: 'status_4',
    boardProperties: [
      {
        id: 'property_1',
        title: 'Название',
        isNecessary: true,
        type: 'text',
        value: 'Это название классной статьи',
        order: 1,
      },
      {
        id: 'property_2',
        title: 'Теги',
        isNecessary: true,
        type: 'tag',
        order: 2,
        value: [
          {
            id: 'tag_1',
            title: 'Онлайн торговля',
          },
          {
            id: 'tag_2',
            title: 'Рестораны',
          },
          {
            id: 'tag_3',
            title: 'Налоги',
          },
          {
            id: 'tag_4',
            title: 'Торговля',
          },
        ],
      },
      {
        id: 'property_3',
        title: 'Бриф',
        isNecessary: false,
        type: 'link',
        value:
          'https://www.typescriptlang.org/docs/handbook/utility-types.html',
        order: 3,
      },
      {
        id: 'property_4',
        title: 'Аппрув от кого-то',
        isNecessary: true,
        type: 'checkbox',
        value: false,
        order: 4,
      },
      {
        id: 'property_4',
        title: 'Дедлайн',
        isNecessary: true,
        type: 'date',
        value: mockDate3,
        order: 5,
      },
    ],
  },
];

export const mockComments: CommentType[] = [
  {
    id: 'comment_1',
    text: 'texttext text texttexttext texttext texttext texttext text texttext text texttexttext texttext texttext texttext text',
    parentType: 'task',
    parentId: 'task_1',
    spaceId: 'sperpro',
  },
  {
    id: 'comment_2',
    text: 'texttext text texttexttext texttext texttext texttext text',
    parentType: 'task',
    parentId: 'task_1',
    spaceId: 'sperpro',
  },
  {
    id: 'comment_3',
    text: 'texttext text texttexttext texttext texttext texttext text',
    parentType: 'task',
    parentId: 'task_1',
    spaceId: 'sperpro',
  },
  {
    id: 'comment_4',
    text: 'texttext text texttexttext texttext texttext texttext text',
    parentType: 'task',
    parentId: 'task_1',
    spaceId: 'sperpro',
  },
  {
    id: 'comment_5',
    text: 'texttext text texttexttext texttext texttext texttext text',
    parentType: 'task',
    parentId: 'task_1',
    spaceId: 'sperpro',
  },
  {
    id: 'comment_6',
    text: 'texttext text texttexttext texttext texttext texttext text',
    parentType: 'task',
    parentId: 'task_1',
    spaceId: 'sperpro',
  },
  {
    id: 'comment_7',
    text: 'texttext text texttexttext texttext texttext texttext text',
    parentType: 'task',
    parentId: 'task_1',
    spaceId: 'sperpro',
  },
  {
    id: 'comment_8',
    text: 'texttext text texttexttext texttext texttext texttext text',
    parentType: 'task',
    parentId: 'task_1',
    spaceId: 'sperpro',
  },
  {
    id: 'comment_9',
    text: 'texttext text texttexttext texttext texttext texttext text',
    parentType: 'task',
    parentId: 'task_1',
    spaceId: 'sperpro',
  },
  {
    id: 'comment_10',
    text: 'texttext text texttexttext texttext texttext texttext text',
    parentType: 'task',
    parentId: 'task_1',
    spaceId: 'sperpro',
  },
  {
    id: 'comment_11',
    text: 'texttext text texttexttext texttext texttext texttext text',
    parentType: 'task',
    parentId: 'task_1',
    spaceId: 'sperpro',
  },
  {
    id: 'comment_12',
    text: 'texttext text texttexttext texttext texttext texttext text',
    parentType: 'task',
    parentId: 'task_1',
    spaceId: 'sperpro',
  },
  {
    id: 'comment_13',
    text: 'texttext text texttexttext texttext texttext texttext text',
    parentType: 'task',
    parentId: 'task_1',
    spaceId: 'sperpro',
  },
  {
    id: 'comment_14',
    text: 'texttext text texttexttext texttext texttext texttext text',
    parentType: 'task',
    parentId: 'task_1',
    spaceId: 'sperpro',
  },
  {
    id: 'comment_15',
    text: 'texttext text texttexttext texttext texttext texttext text texttext text texttexttext texttext texttext texttext text',
    parentType: 'task',
    parentId: 'task_1',
    spaceId: 'sperpro',
  },
];
