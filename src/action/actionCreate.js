import {
  ADD, DEL, DEL_TASK, EDIT, CHECK,
} from '../constans';

export const add = (id, title, checked) => ({
  type: ADD,
  id,
  title,
  checked,
});

export const del = () => ({
  type: DEL,
});

export const edit = (event, id) => ({
  type: EDIT,
  event,
  id,
});

export const delTask = (id) => ({
  type: DEL_TASK,
  id,
});

export const check = () => ({
  type: CHECK,
});
