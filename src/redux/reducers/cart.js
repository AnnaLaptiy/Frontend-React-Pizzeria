
const initialState = {
  items: {},
  count: 0,
  price: 0,
};

const getTotalPrice = (array) => array.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA': {

      const innerPizzaArrey = !state.items[action.payload.id] //innerPizzaArrey=[pizza,pizza]
        ? [action.payload]
        : [...state.items[action.payload.id].items, action.payload];

      const newItems = {  // newItems={id:{price, [pizza,pizza,pizza]},id:{price, [pizza,pizza,pizza]}}
        ...state.items,
        [action.payload.id]: {

          items: innerPizzaArrey,
          price: getTotalPrice(innerPizzaArrey),
        },
      };

      const newInnerPizzaArray = Object.values(newItems).map(obj => obj.items); //(newItems без полей price)=[[],[],[]]

      const flatArray = [].concat.apply([], newInnerPizzaArray);

      return {   //res={count,price,newItems}
        ...state,
        items: newItems,
        count: flatArray.length,
        price: getTotalPrice(flatArray)
      };
    };

    case 'DELETE_PIZZA': {
      const cloneItems = {  //что бы придерживаться правила: использовать функции без мутаций
        ...state.items
      };
      const currentTotalPrice = cloneItems[action.payload].price;

      delete cloneItems[action.payload]; //удаляем поле по id

      const currentCount = state.items[action.payload].items.length;

      return {
        ...state,
        items: cloneItems,
        price: state.price - currentTotalPrice,
        count: state.count - currentCount,
      };
    }

    case 'ADD_NEW_ONE': {

      const newItems = {
        ...state.items,
        [action.payload]: {
          price: state.items[action.payload].items[0].price + state.items[action.payload].price,

          items: [
            ...state.items[action.payload].items,
            state.items[action.payload].items[0]
          ]
        }
      };

      return {
        ...state,
        items: newItems,
        price: state.price + state.items[action.payload].items[0].price,
        count: state.count + 1
      };
    }

    case 'DELETE_ONE': {

      const cloneItems = {
        ...state.items
      };

      let updatedPrice = state.items[action.payload].price;
      let updatedItems = cloneItems[action.payload].items;
      let updatedTotalPrice = state.price;
      let updatedCount = state.count;

      if (cloneItems[action.payload].items.length > 1) {
        updatedPrice = state.items[action.payload].price - state.items[action.payload].items[0].price;
        updatedItems = cloneItems[action.payload].items.slice(1);
        updatedTotalPrice = state.price - state.items[action.payload].items[0].price;
        updatedCount = state.count - 1;
      }

      const newItems = {
        ...state.items,
        [action.payload]: {
          price: updatedPrice,
          items: updatedItems
        }
      };
      return {
        ...state,
        items: newItems,
        price: updatedTotalPrice,
        count: updatedCount
      };
    }

    case 'DELETE_ALL_PIZZAS': {
      return {
        items: {},
        count: 0,
        price: 0,
      };
    }

    default:
      return state;
  }

};

export default cart;
