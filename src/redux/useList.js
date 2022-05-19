import { createSlice } from '@reduxjs/toolkit';
export const useList = createSlice({
    name: "List ",
    initialState: {
        list: [],
        search: ""
    },
    reducers: {
        get: (state, action) => {
            state.list = action.payload;
        },
        change: (state, action) => {
            state.search = action.payload;
        },
        deleteitem: (state, action) => {
            state.list = state.list.filter(item => action.payload !== item._id)
        },
        add: (state, action) => {
            state.list = [...state.list, ...action.payload]
        }
    }
})

export const {
    get, deleteitem, change , add
} =
    useList.actions;
export default useList.reducer;