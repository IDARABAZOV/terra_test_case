import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const initialState = {
    data: [],
    filteredData: []
};

export const fetchAsync = createAsyncThunk(
    'table/getData',
    async () => {
        const response = await fetch('http://localhost:5000/data');
        return await response.json();
    }
)

export const tableSlice = createSlice({
    name: "table",
    initialState,
    reducers: {
        sortByYear: (state) => {
            state.filteredData.sort(function (a, b) {
                if (a.year > b.year) return 1;
                if (a.year < b.year) return -1;
                return 0;
            });
        },
        sortByType: (state) => {
            state.filteredData.sort(function (a, b) {
                if (a.type > b.type) return 1;
                if (a.type < b.type) return -1;
                return 0;
            });
        },
        sortByMark: (state) => {
            state.filteredData.sort(function (a, b) {
                if (a.mark > b.mark) return 1;
                if (a.mark < b.mark) return -1;
                return 0;
            });
        },
        liveSearch: (state, action) => {
            state.filteredData = state.data.filter(item => {
                return (
                    item.mark.match(action.payload) ||
                    item.year.match(action.payload) ||
                    item.type.match(action.payload) ||
                    item.model.match(action.payload)
                )
            })
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAsync.fulfilled, (state, action) => {
                state.data = state.data.concat(action.payload);
                state.filteredData = state.filteredData.concat(state.data);
            });
    }
})

export const { sortByYear, sortByType, sortByMark, liveSearch } = tableSlice.actions;

export default tableSlice.reducer;
