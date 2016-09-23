const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export default function counter(state = 0, action) {
  switch (action.type) {
    case DECREMENT:
      return state - 1;
    case INCREMENT:
      return state + 1;
    default:
      return state;
  }
}

export const decrement = () => ({
  type: DECREMENT,
});

export const increment = () => ({
  type: INCREMENT,
});
