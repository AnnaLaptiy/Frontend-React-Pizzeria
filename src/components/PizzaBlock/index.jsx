import React from "react";
import PropTypes from "prop-types";
import {Button} from "../Button"
export const PizzaBlock = ({ id, types, sizes, name, price, imageUrl,countAddedPizzas, onClickAddNewPizza }) => {
  const allowedTypes = ['тонкое', 'традиционное'];
  const [activeType, setActiveType] = React.useState(types[0]);
  const allowedSizes = [26, 30, 40];
  const [activeSize, setActiveSize] = React.useState(sizes[0]);

  const onSelectType = (index) => {
    setActiveType(index)
  };

  const onSelectSize = (index) => {
    setActiveSize(index)
  };

  const onAddButton = () => {
    onClickAddNewPizza({id, name, price, type:allowedTypes[activeType],size:activeSize,imageUrl })
  };

  return (
    <div className="pizza-block">
      <img
        className="pizza-block__image"
        src={imageUrl}
        alt="Pizza"
      />
      <h4 className="pizza-block__title">{name}</h4>
      <div className="pizza-block__selector">
        <ul>
          {allowedTypes.map((type, index) =>
            (types.includes(index)) ?
              <li key={type} onClick={() => { onSelectType(index) }} className={activeType === index ? "active" : ""}>{type}</li> :
              <li key={type} className="disabled">{type}</li>
          )}
        </ul>
        <ul>
          {allowedSizes.map((size, index) =>
            (sizes.includes(size)) ?
              <li key={size} onClick={() => { onSelectSize(size) }} className={activeSize === size ? "active" : ""}>{size} см</li> :
              <li key={size} className="disabled">{size} см</li>
          )}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">от {price} ₽</div>
        <Button onClick={onAddButton} className="button--outline button--add">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Добавить</span>
        {countAddedPizzas && <i>{countAddedPizzas}</i>}
        </Button>
      </div>
    </div>
  )
};

PizzaBlock.propTypes = {
  name: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  clickOnAddPizza: PropTypes.func,
};

PizzaBlock.defaultProps = {
  types: [],
  sizes: []
};