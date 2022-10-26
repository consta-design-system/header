# [Дизайн-система Consta](http://consta.gazprom-neft.ru/) | Header

Набор компонентов для создания шапки проекта.

# Как использовать

## Установите пакет

```sh
# NPM
$ npm install @consta/header
# Yarn
$ yarn add @consta/header
```

## Подключите зависимости

Чтобы начать работу, установите библиотеку [`@consta/uikit`](https://www.npmjs.com/package/@consta/uikit) и [настройте тему](http://uikit.consta.design/libs/uikit/theme-themeabout).

### Можно использовать компоненты

Например, так:

```js
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';
import { Header } from '@consta/header';
const App = () => {
  return (
    <Theme preset={presetGpnDefault}>
      <Header />
    </Theme>
  );
};
```

## Разработка

### Подготовка окружения

Рабочее окружение должно содержать NodeJS и Yarn, необходимые версии можно узнать в файле [package.json](./package.json) в блоке **engines**.

Чтобы установить зависимости, выполните команду:

```sh
$ yarn install
```

### Основные команды

```sh
# Сборка и старт
$ yarn start
# Сборка для production
$ yarn build
# Линтинг всех файлов
$ yarn lint
# Форматирование всех файлов prettier
$ yarn format
# Запуск юнит-тестов
$ yarn unit
# Запуск юнит-тестов, тестирование TS, линтинг файлов
$ yarn test
```

## Документация

[Посмотреть документацию и примеры](http://header.consta.design/)

## Контрибьюторам

Будем рады, если вы захотите принять участие в разработке дизайн-системы =) Но сначала прочитайте [инструкцию для контрибьюторов](http://uikit.consta.design/libs/uikit/custom-contribute).

## Лицензия

Дизайн-систему можно использовать бесплатно, она распространяется на условиях открытой [лицензии MIT](https://consta.gazprom-neft.ru/static/licence_mit.pdf).
