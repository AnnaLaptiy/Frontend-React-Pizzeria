import React from "react";

export const Categories = React.memo(function Categories(props) {

    const items = [
        'Все',
        'Мясные',
        'Вегетарианские',
        'Гриль',
        'Острые',
        'Закрытые'];

    const clickOnType = (type) => {
        props.onClick(items.indexOf(type))
    };

    return (
        <div className="categories">
            <ul>
                {items &&
                    items.map(elem =>
                        <li
                            className={elem === items[props.selectedType] ? "active" : ""}
                            onClick={() => clickOnType(elem)}
                            key={elem}>
                            {elem}
                        </li>
                    )}
            </ul>
        </div>
    );
})