import { Route, Routes } from 'react-router-dom';

import { Home } from '../../components/Home';
import { Chart } from '../../components/Chart';

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/chart' element={<Chart />} />
    </Routes>
  );
};
