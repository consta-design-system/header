import { Example } from '@consta/stand';
import React from 'react';

import { MegaMenu } from '##/components/MegaMenu/MegaMenu';

const banners = [
  {
    label: 'Особенности разведки',
    description:
      'Лицензии на пользование недрами (далее для настоящей главы - лицензия) выдаются федеральным органом исполнительной власти ...',
    image:
      'https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=',
  },
  {
    label: 'Особенности разведки',
    description: 'Лицензии на пользование недрами (далее для настоящ...',
    image:
      'https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w=',
  },
];

const items = [
  {
    key: '1',
    label: 'Электростанции',
    subMenu: [
      {
        key: '1.1',
        label: 'Ветряные электростанции',
      },
      {
        key: '1.2',
        label: 'Солнечные электростанции',
      },
      {
        key: '1.3',
        label: 'Гидроэлектростанции',
      },
      {
        key: '1.4',
        label: 'Гидроаккумулирующие электростанции',
      },
      {
        key: '1.5',
        label: 'Теплоэлектроцентрали',
      },
      {
        key: '1.6',
        label: 'Газопоршневые станции',
      },
    ],
  },
  {
    key: '2',
    label: 'Угольные шахты и резервы',
    subMenu: [
      {
        key: '2.1',
        label: 'Бошняково',
      },
      {
        key: '2.2',
        label: 'Горнозаводская',
      },
      {
        key: '2.3',
        label: 'Гундоровская',
      },
      {
        key: '2.4',
        label: 'Мгачи',
      },
      {
        key: '2.5',
        label: 'Коркинский угольный разрез',
      },
    ],
  },
  {
    key: '3',
    label: 'Трубопроводы',
    subMenu: [
      {
        key: '3.1',
        label: 'Газопроводы',
      },
      {
        key: '3.2',
        label: 'Нефтепроводы',
      },
      {
        key: '3.3',
        label: 'Продуктопроводы',
      },
    ],
  },
  {
    key: '4',
    label: 'Перерабатывающие заводы',
    subMenu: [
      {
        key: '4.1',
        label: 'Нефтепереработка',
      },
      {
        key: '4.2',
        label: 'Газопереработка',
      },
      {
        key: '4.3',
        label: 'Нефтехимическая переработка',
      },
      {
        key: '4.4',
        label: 'Заводы по производству СПГ',
      },
    ],
  },
];

export const MegaMenuExampleBanners = () => {
  return (
    <Example>
      <MegaMenu items={items} banners={banners} menuMaxElements={4} />
    </Example>
  );
};
