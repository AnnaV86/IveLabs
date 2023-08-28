import React, { useEffect, useState } from 'react';
import { Button, Select, Spin } from 'antd';
import styles from './Home.module.css';
import { IBrigades } from '../../../models/models';
import {
  ConnectionStatusDictionary,
  ConnectionStatusFilter,
  DepartmentsDictionary,
  DepartmentsFilter,
} from '../../../constants/constants';
import { Card } from './components/Card';
import { getBrigadesThunk } from '../../../store/actionsThunk';
import { useDispatch } from 'react-redux';
import { useSelector } from '../../../utils/useSelector';

const { Option } = Select;

export const Home = () => {
  const dispatch = useDispatch();
  const [brigadesData, setBrigadesData] = useState<IBrigades[]>([]);
  const [filterAvailable, setFilterAvailable] =
    useState<ConnectionStatusFilter | null>(null);
  const [filterDepartments, setFilterDepartments] =
    useState<DepartmentsFilter | null>(null);
  const { brigades, isFetching, error } = useSelector(
    (state) => state.brigades
  );

  const filteredBrigades = () => {
    let filteredBrigades;

    if (filterAvailable) {
      filteredBrigades =
        brigades &&
        [...brigades].filter(
          (item) =>
            item.connectionState === ConnectionStatusDictionary[filterAvailable]
        );
    }
    if (filterDepartments && filteredBrigades) {
      filteredBrigades = filteredBrigades.filter(
        (item) =>
          item.departmentName === DepartmentsDictionary[filterDepartments]
      );
    }
    setBrigadesData(filteredBrigades || brigades);
  };

  const resetFilters = () => {
    setFilterDepartments(null);
    setFilterAvailable(null);
    setBrigadesData(brigades);
  };

  useEffect(() => {
    filteredBrigades();
  }, [filterAvailable, filterDepartments]);

  useEffect(() => {
    if (!brigades.length) dispatch(getBrigadesThunk());
    else setBrigadesData(brigades);
  }, [brigades, dispatch]);

  return (
    <>
      <section className={styles.container}>
        <div className={styles.inputWrapper}>
          <Select
            placeholder='Соединение'
            onChange={setFilterAvailable}
            value={filterAvailable}
            className={styles.select}
          >
            <Option value={ConnectionStatusFilter.NOT_AVAILABLE}>
              Недоступны
            </Option>
            <Option value={ConnectionStatusFilter.AVAILABLE}>Доступны</Option>
          </Select>
          <Select
            placeholder='Департамент'
            onChange={setFilterDepartments}
            value={filterDepartments}
            className={styles.select}
          >
            <Option value={DepartmentsFilter.LUKOIL}>Лукойл</Option>
            <Option value={DepartmentsFilter.ROSNEFT}>Роснефть</Option>
            <Option value={DepartmentsFilter.GAZPROM_NEFT}>
              Газпром нефть
            </Option>
          </Select>
          <Button className={styles.button} onClick={resetFilters}>
            Сброс фильтров
          </Button>
        </div>
        <div className={styles.cardsContainer}>
          {isFetching ? (
            <div className={styles.spinWrapper}>
              <Spin size='default' />
            </div>
          ) : (
            brigadesData?.map((brigade) => (
              <Card key={brigade.id} data={brigade} />
            ))
          )}
        </div>
        {error && <h2 className={styles.error}>{error}</h2>}
      </section>
    </>
  );
};
