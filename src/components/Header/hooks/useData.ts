// import { useLoaderData } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { normalizedBrigades } from '../../../utils/normalizedBrigades';
// import { addsBrigadesAction } from '../../../store/reducers/brigades';
// import { IBrigades } from '../../../models/models';
// import { useEffect, useMemo } from 'react';

// export const useData = () => {
//   const [brigades, departments, connection]: any = useLoaderData();
//   const dispatch = useDispatch();

//   const normalizedValue: IBrigades[] = useMemo(
//     () => normalizedBrigades(brigades, departments, connection),
//     [brigades, connection, departments]
//   );

//   useEffect(() => {
//     dispatch(addsBrigadesAction(normalizedValue));
//   }, [dispatch, normalizedValue]);
// };
