import { nextId } from '@mod-bound-issue/libs/utils';

export const data = [
  {
    id: 1,
    name: 'John Doe',
  },
  {
    id: 2,
    name: 'Jane Doe',
  },
];

export const add = (item) => {
  item.id = nextId(data);
  data.push(item);
};
