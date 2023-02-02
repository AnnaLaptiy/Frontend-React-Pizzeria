export const setSortBy = (sortType) => ({
    type: 'SET_SORT_BY',
    payload: sortType,
});

export const setCategory = (catIndex) => ({
    type: 'SET_CATEGORY',
    payload: catIndex,
});