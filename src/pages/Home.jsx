import React from "react";

import { Categories, SortPopUp, PizzaBlock, PizzaLoader } from '../components';
import { useSelector, useDispatch } from "react-redux";
import { setCategory, setSortBy } from '../redux/actions/filters'
import { addPizzaToCart } from '../redux/actions/cart'

import { fetchPizzas } from '../redux/actions/pizzas';

export const Home = () => {
  const dispatch = useDispatch();
  const { category, sortBy } = useSelector((state) => state.filters);

  const pizzasData = useSelector((state) => state.pizzas.items);
  const pizzasStatus = useSelector((state) => state.pizzas.status);
  const cartItems = useSelector((state) => state.cart.items);

  const isPizzaLoaded = pizzasStatus == 'loaded';
 
  React.useEffect(() => {

    dispatch(fetchPizzas({ category, sortBy }));

  }, [category,sortBy]);

  const onSelectCategory = React.useCallback((type) => {
    dispatch(setCategory(type));
  }, []);

  const onSelectSortBy = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  const clickOnAddPizza = (pizza) => {
     dispatch(addPizzaToCart(pizza));
  };

  return (
    <div className="container">
      <div className="content__top">

        <Categories selectedType={category} onClick={onSelectCategory} />
        <SortPopUp selectedItem={sortBy} onClick={onSelectSortBy} />

      </div>

      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {
          (isPizzaLoaded ?
            pizzasData.map(pizza =>
              <PizzaBlock
                onClickAddNewPizza={clickOnAddPizza} 
                key={pizza.id} 
                countAddedPizzas={cartItems[pizza.id]&&cartItems[pizza.id].items.length}
                 {...pizza} />)
            : [...Array(10)].map((pizzaForm, index) => <PizzaLoader key={index} />)
          )
        }

      </div>
    </div>
  );
}