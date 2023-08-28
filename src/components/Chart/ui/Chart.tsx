import { useState } from 'react';
import { Button, Input, Spin } from 'antd';
import styles from './Chart.module.css';
import { ChartBlock } from './components/ChartBlock';
import { getPointsThunk } from '../../../store/actionsThunk';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../../utils/useSelector';

export const Chart = () => {
  const dispatch = useDispatch();
  const [pointsNumber, setPointsNumber] = useState('');
  const { points, isFetching, error } = useSelector((state) => state.points);

  const getPoints = () => {
    dispatch(getPointsThunk(pointsNumber));
  };

  const onChangPoints = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (isNaN(+e.target.value)) return;
    setPointsNumber(e.target.value);
  };

  const loadPoints = () => {
    getPoints();
  };

  return (
    <section className={styles.container}>
      <label htmlFor='input'>Количество точек</label>
      <Input
        id='input'
        className={styles.input}
        value={pointsNumber}
        onChange={onChangPoints}
      />
      <Button className={styles.button} onClick={loadPoints}>
        Загрузить точки
      </Button>
      {isFetching ? (
        <div className={styles.spinWrapper}>
          <Spin size='default' />
        </div>
      ) : (
        <ChartBlock points={points} />
      )}
      {error && <h2 className={styles.error}>{error}</h2>}
    </section>
  );
};
