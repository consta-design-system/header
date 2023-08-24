import { Example } from '@consta/stand';
import React from 'react';

import { MegaMenu } from '##/components/MegaMenu/MegaMenu';
import Image from '##/images/Brim.image.jpeg';

const banners = [
  {
    label: 'Особенности разведки',
    description:
      'Лицензии на пользование недрами (далее для настоящей главы - лицензия) выдаются федеральным органом исполнительной власти ...',
    image: Image,
  },
  {
    label: 'Особенности разведки',
    description: 'Лицензии на пользование недрами (далее для настоящ...',
    image: Image,
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

type View = 'right' | 'bottom';
const views: View[] = ['right', 'bottom'];

export const MegaMenuExampleBannersPosition = () => {
  return (
    <Example
      items={views}
      getItemLabel={(view) => `bannerPosition=${view}`}
      getItemNode={(view: View) => (
        <MegaMenu
          items={items}
          bannerPosition={view}
          banners={banners}
          menuMaxElements={4}
        />
      )}
    />
  );
};
