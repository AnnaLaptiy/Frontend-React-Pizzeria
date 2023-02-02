import { configureStore } from '@reduxjs/toolkit';

import filterReducer from './reducers/filters';
import pizzasReducer from './reducers/pizzas';
import cartReducer from './reducers/cart';

const store = configureStore({
   reducer: {
      filters: filterReducer,
      pizzas: pizzasReducer,
      cart: cartReducer

   },
});

export default store;
