export const addPizzaToCart = (pizza) => {
    return{
    type: 'ADD_PIZZA',
    payload: pizza,
}};

export const deleteAllPizzas = () => {
    return{
    type: 'DELETE_ALL_PIZZAS'
}};

export const deletePizza = (id) => {
    return{
    type: 'DELETE_PIZZA',
    payload: id,
}};

export const plusInstance = (id) => {
    return{
    type: 'ADD_NEW_ONE',
    payload: id,
}};

export const minusInstance = (id) => {
    return{
    type: 'DELETE_ONE',
    payload: id,
}};