import { createSlice } from '@reduxjs/toolkit';
import { FarmsState } from '@types';

const initialState: FarmsState = {
  isLoading: false,
  error: false,
  farms: [],
  farm: null,
  sortBy: null,
  filters: {
    name: '',
    risk: null,
    stars: null
  }
};

const slice = createSlice({
  name: 'farm',
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET FARMS
    getFarmsSuccess(state, action) {
      state.isLoading = false;
      state.farms = action.payload;
    },

    // GET FARM
    getFarmSuccess(state, action) {
      state.isLoading = false;
      state.farm = action.payload;
    },

    //  SORT & FILTER PRODUCTS
    sortByFarms(state, action) {
      state.sortBy = action.payload;
    },

    filterFarms(state, action) {
      state.filters.name = action.payload.name;
      state.filters.risk = action.payload.risk;
      state.filters.stars = action.payload.stars;
    }
  }
});

export default slice.reducer;
export const { startLoading, hasError, getFarmSuccess, getFarmsSuccess, sortByFarms, filterFarms } = slice.actions;
