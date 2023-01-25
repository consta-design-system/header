import { GlobalMenuDefaultGroup, GlobalMenuDefaultItem } from '../types';

export const items: GlobalMenuDefaultItem[] = [
  {
    label: 'Ветряные электростанции',
    groupId: 1,
  },
  {
    label: 'Солнечные электростанции',
    groupId: 1,
  },
  {
    label: 'Гидроэлектростанции',
    groupId: 1,
  },
  {
    label: 'Гидроаккумулирующие электростанции',
    groupId: 1,
  },
  {
    label: 'Теплоэлектроцентрали',
    groupId: 1,
  },
  {
    label: 'Газопоршневые станции',
    groupId: 1,
  },
  {
    label: 'Бошняково',
    groupId: 2,
  },
  {
    label: 'Горнозаводская',
    groupId: 2,
  },
  {
    label: 'Гундоровская',
    groupId: 2,
  },
  {
    label: 'Мгачи',
    groupId: 2,
  },
  {
    label: 'Коркинский угольный разрез',
    groupId: 2,
  },
  {
    label: 'Газопроводы',
    groupId: 3,
  },
  {
    label: 'Нефтепроводы',
    groupId: 3,
  },
  {
    label: 'Продуктопроводы',
    groupId: 3,
  },
  {
    label: 'Нефтепереработка',
    groupId: 4,
  },
  {
    label: 'Газопереработка',
    groupId: 4,
  },
  {
    label: 'Нефтехимическая переработка',
    groupId: 4,
  },
  {
    label: 'Заводы по производству СПГ',
    groupId: 4,
  },
];

export const groups: GlobalMenuDefaultGroup[] = [
  {
    id: 1,
    label: 'Электростанции',
  },
  {
    id: 2,
    label: 'Угольные шахты и разрезы',
  },
  {
    id: 3,
    label: 'Трубопроводы',
  },
  {
    id: 4,
    label: 'Перерабатывающие заводы',
  },
];
