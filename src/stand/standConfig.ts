import { createConfig } from '@consta/stand';

import image from './ConstaImage.png';

export const { createStand } = createConfig({
  title: 'Consta Header',
  id: 'header',
  groups: [
    {
      title: 'Документация',
      id: 'docs',
      initialOpen: true,
    },
    {
      title: 'Компоненты',
      id: 'components',
      view: 'card',
      initialOpen: true,
    },
  ],
  group: 'Специальные компоненты',
  image,
  description: 'Библиотека компонентов, из которых собирается шапка проекта.',
  repositoryUrl: 'https://github.com/consta-design-system/header',
  figmaUrl:
    'https://www.figma.com/file/3RsiLTgTuXpdnqG7gW8UwL/Consta-Components-(Community)?type=design&node-id=1127-48741&t=ponDmJar7RUOypIn-0',
});
