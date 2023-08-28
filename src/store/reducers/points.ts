import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IPoint } from '../../models/models';

export interface IPointsState {
  points: IPoint[];
  isFetching: boolean;
  error: string;
}

const initialState: IPointsState = {
  points: [],
  isFetching: false,
  error: '',
};

const pointsSlice = createSlice({
  name: 'points',
  initialState,
  reducers: {
    setPoints: (state, action: PayloadAction<IPoint[]>) => {
      state.points = action.payload;
    },
    isFetching: (state, action: PayloadAction<boolean>) => {
      state.isFetching = action.payload;
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setPoints, isFetching, setError } = pointsSlice.actions;
export default pointsSlice.reducer;
