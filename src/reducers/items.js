import {
  ADD, DEL, DEL_TASK, EDIT, CHECK,
} from '../constans';

const QUOTA_EXCEEDED_ERR = 'QUOTA_EXCEEDED_ERR';

const setItem = (newItem) => {
  try {
    localStorage.setItem('todo', JSON.stringify(newItem));
  } catch (error) {
    if (error.name === QUOTA_EXCEEDED_ERR) {
      console.log('Превышен лимит');
    }
  }
};

const items = (state = JSON.parse(localStorage.getItem('todo')) || [], {
  id, title, checked, type, event,
}) => {
  switch (type) {
    case ADD: {
      const newItem = [
        ...state, {
          id,
          title,
          checked,
        },
      ];
      setItem(newItem);
      return newItem;
    }
    case DEL: {
      const newItem = [];
      setItem(newItem);
      return newItem;
    }
    case DEL_TASK: {
      const newItem = [...state].filter((item) => item.id !== id);
      setItem(newItem);
      return newItem;
    }
    case CHECK: {
      const newItem = state.map((item) =>
      (item.id === id) ? {...item, checked: !item.checked} : item);
      setItem(newItem);
      return newItem;
    }
      return ;
    case EDIT: {
      const newItem = state.map((item) =>
      (item.id === id) ? {...item, title : event.target.value} : item);
      setItem(newItem);
      return newItem;
    }
    default:
      return state;
  }
};

export default items;
