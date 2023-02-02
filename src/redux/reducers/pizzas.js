
const initialState = {
  items: [],
  status: 'loading',

};

const pizzas = (state = initialState, action) => {
 
  switch (action.type) {
    case 'SET_PIZZAS/fulfilled':
      return {
        ...state,
        items: action.payload,
        status: 'loaded',
      };
    case 'SET_PIZZAS/pending':
      return {
        ...state,
        items: action.payload,
        status: 'loading',
      };
      case 'SET_PIZZAS/rejected':
      return {
        ...state,
        items: action.payload,
        status: 'error',
      };
      default:
        return state;
  }
};

export default pizzas;



