import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IBrigades } from '../../models/models';

export interface IBrigadesState {
  brigades: IBrigades[];
  isFetching: boolean;
  error: string;
}

const initialState: IBrigadesState = {
  brigades: [],
  isFetching: false,
  error: '',
};

const brigadesSlice = createSlice({
  name: 'brigades',
  initialState,
  reducers: {
    setBrigades: (state, action: PayloadAction<IBrigades[]>) => {
      state.brigades = action.payload;
    },
    isFetching: (state, action: PayloadAction<boolean>) => {
      state.isFetching = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setBrigades, isFetching, setError } = brigadesSlice.actions;
export default brigadesSlice.reducer;
