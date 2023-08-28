import React, { FC } from 'react';
import './Card.css';
import { IBrigades } from '../../../../../models/models';

interface ICard {
  data: IBrigades;
}

export const Card: FC<ICard> = ({ data }) => {
  return (
    <div className='container'>
      <h2 className='title'>{`Бригада № ${data.id}`}</h2>
      <h2 className='title_card'>{data.departmentName}</h2>
      <div className='field-wrapper'>
        <b>Соединение: </b>
        <p>{data.connectionState}</p>
      </div>
      <div className='field-wrapper'>
        <b>Кластер:</b>
        <p>{data.position.cluster}</p>
      </div>
      <div className='field-wrapper'>
        <b>Поле:</b>
        <p>{data.position.field}</p>
      </div>
      <div className='field-wrapper'>
        <b>Скважина:</b>
        <p>{data.position.well}</p>
      </div>
    </div>
  );
};
