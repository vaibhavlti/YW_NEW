import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
};

export const CommonReducer = createSlice({
  name: 'CommonReducer',
  initialState,
  reducers: { 
    login: (state, action) => {
      state.user = action.payload
    }
    ,
    logout: (state) => {
      state.user = null
    }
    // setSection2Details: (state, action) => {
    //   state.section2Data = action.payload;
    // },
  },
});

export const {
  login, logout
    // setSection2Details
} = CommonReducer.actions;

// export const selectUser = (state) => state.user;

export default CommonReducer.reducer;
