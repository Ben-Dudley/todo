import {
  ADD, DEL, DEL_TASK, EDIT, CHECK,
} from '../constans';

const items = (state = [], {
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
      return newItem;
    }
    case DEL: {
      const newItem = [];
      return newItem;
    }
    case DEL_TASK: {
      const newItem = [...state].filter((item) => item.id !== id);
      return newItem;
    }
    case CHECK: {
      const newItem = state.map(
        (item) => ((item.id === id) ? { ...item, checked: !item.checked } : item),
      );
      return newItem;
    }
    case EDIT: {
      const newItem = state.map(
        (item) => ((item.id === id) ? { ...item, title: event.target.value } : item),
      );
      return newItem;
    }
    default:
      return state;
  }
};

export default items;
