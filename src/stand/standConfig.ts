import { createConfig } from '@consta/stand';

import image from './ConstaImage.png';

const groups = [
  {
    title: 'Компоненты',
    id: 'components',
  },
] as const;

export const { createStand } = createConfig({
  title: 'Consta Header',
  id: 'header',
  groups,
  group: 'Библиотеки компонентов',
  image,
  description: 'Библиотека компонентов, из которых собирается шапка проекта.',
});
