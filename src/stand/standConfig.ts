import { createConfig } from '@consta/stand';

import image from './ConstaImage.png';

export const { createStand } = createConfig({
  title: 'Consta Header',
  id: 'header',
  groups: [
    {
      title: 'Компоненты',
      id: 'components',
      view: 'card',
    },
  ],
  group: 'Библиотеки компонентов',
  image,
  description: 'Библиотека компонентов, из которых собирается шапка проекта.',
});
