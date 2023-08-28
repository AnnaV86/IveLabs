import { Dispatch } from 'redux';
import { IBrigades, IPoint } from '../../models/models';
import {
  getBrigadesData,
  getConnectionState,
  getDepartments,
  getPointsFast,
} from '../../api';
import { normalizedBrigades } from '../../utils/normalizedBrigades';
import { isFetching, setBrigades, setError } from '../reducers/brigades';
import { setPoints } from '../reducers/points';

export function getBrigadesThunk() {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setError(''));
      dispatch(isFetching(true));
      const [brigades, departments, connection] = await Promise.all([
        getBrigadesData(),
        getDepartments(),
        getConnectionState(),
      ]);

      const normalizedValue: IBrigades[] = normalizedBrigades(
        brigades,
        departments,
        connection
      );

      dispatch(setBrigades(normalizedValue));
    } catch (e) {
      dispatch(setError('Что-то пошло не так...'));
    } finally {
      dispatch(isFetching(false));
    }
  };
}

export function getPointsThunk(points: string) {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(setError(''));
      dispatch(isFetching(true));
      const pointsList: IPoint[] = await getPointsFast(points);
      dispatch(setPoints(pointsList));
    } catch (e) {
      dispatch(setPoints([]));
      dispatch(setError('Что-то пошло не так'));
    } finally {
      dispatch(isFetching(false));
    }
  };
}
