import React from "react";

export const SortPopUp = React.memo(function SortPopUp(props) {
    const items = [{ name: 'популярности', type: 'rating' }, { name: 'цене', type: 'price' }, { name: 'алфавиту', type: 'name' }]

    const [visiblePopUp, setVisiblePopUp] = React.useState(false);
    const activeElem = items.find(elem => elem.type === props.selectedItem).name;
    const sortRef = React.useRef();

    const toggleSelectedItem = (value) => {
        props.onClick(items[value].type);
    };

    const toggleVisiblePopUp = () => { //более производительнее, чем использование анонимной функции в return
        setVisiblePopUp(!visiblePopUp);

    };
    const handleOutsideClick = (e) => {
        if (!e.composedPath().includes(sortRef.current)) {
            setVisiblePopUp(false)
        }
    };
    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick);
    }, []);

    return (// ref={sortRef} можно и так
        <div ref={(ref) => { sortRef.current = ref }} className="sort">
            <div className="sort__label">
                <svg
                    className={visiblePopUp ? 'rotated' : ''}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={toggleVisiblePopUp}>{activeElem}</span>
            </div>

            {visiblePopUp &&
                <div className="sort__popup">
                    <ul>
                        {items &&
                            items.map((elem, index) =>
                                <li
                                    className={elem.type == props.selectedItem ? "active" : ""}
                                    onClick={() => toggleSelectedItem(index)}
                                    key={elem.type}>
                                    {elem.name}
                                </li>
                            )}
                    </ul>
                </div>}
        </div>
    );
})