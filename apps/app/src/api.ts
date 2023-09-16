import { data } from './db';
import { nextId } from '@mod-bound-issue/libs/utils';

export const getById = (id: number) => {
  return data.find((item) => item.id === id);
};

export const add = (item) => {
  item.id = nextId(data);
  data.push(item);
};
