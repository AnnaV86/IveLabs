import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { FC } from 'react';
import styles from './ChartBlock.module.css';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import { IPoint } from '../../../../../models/models';

interface IChartBlock {
  points: IPoint[];
}

export const ChartBlock: FC<IChartBlock> = ({ points }) => {
  dayjs.locale('ru');

  const options = {
    chart: {
      type: 'line',
    },
    title: { text: 'Points' },
    xAxis: {
      categories: points.map((el) => dayjs(el.x).format('HH:MM')),
    },
    series: [
      {
        step: 'left',
        name: 'Points',
        data: points.map((el) => el.y),
      },
    ],
    tooltip: {
      formatter: function (
        this: Highcharts.TooltipFormatterContextObject
      ): string {
        const point = points[this.point.index];
        return `<b>${dayjs(point.x).format(
          'dddd D MMMM YYYY [г.], HH:mm:ss'
        )}</b><br>Вес на крюке: ${point.y}</br>`;
      },
    },
  };

  return (
    <div className={styles.container}>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
