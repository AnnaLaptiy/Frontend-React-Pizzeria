import {  createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const fetchPizzas = createAsyncThunk("SET_PIZZAS", async ({category,sortBy}) => {
    const { data } = await axios.get(`http://localhost:3001/pizzas?_sort=${sortBy}${category>0?`&category=${category}`:''}&_order=asc`);
    return data;
});


