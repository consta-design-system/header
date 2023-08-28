# Changelog

## v2.0.0 (28/08/2023)
Новая мажорная версия:

- Обновили все иконки на пакет @consta/icons
- Удалили `Badges`
- `BannerBar`, `NavBar`, `GlobalMenu` стали дочерними компонентами MegaMenu (импортируются из него)
- Поправили стили в `ButtonMenu`
- Удалили `Header`
- Удалили `Languages`
- Поправили примеры и импорты в документации библиотеки Consta Header
- Перенесли `NotificationsList` в `Notifications`, а также добавили компонент `NotificationsItem`
- Добавили компонент `PopoverButton`, открывающий поповер, а для флага `isMobile` - сайдбар
- В `TileMenu` добавили на экспорт `TileMenuList` и `TileMenuItem`
- Убрали лишние системные компоненты и функции

---

- [chore(deps): edit package.json](https://github.com/consta-design-system/header/commit/6d597d8bff01afb282aa7a5f1c61b20b1655a3cd) - [@gizeasy](https://github.com/gizeasy)
- [refactor: refactor lib (#55)](https://github.com/consta-design-system/header/commit/1d554975f32cac53bfaceffc891cfa552d23aeb7) - [@N1MBER](https://github.com/N1MBER)
- [chore(deploy): edit config (#56)](https://github.com/consta-design-system/header/commit/eeb8f762cf9625991820a4f4b97d9b80d20110f9) - [@gizeasy](https://github.com/gizeasy)
- [docs(header): marked as deprecated (#52)](https://github.com/consta-design-system/header/commit/3e6a415688d6ff0143cc647228cef5fbcde930b9) - [@N1MBER](https://github.com/N1MBER)
- [docs(standConfig): add figmaUrl (#50)](https://github.com/consta-design-system/header/commit/8046cc8c14deb8e33944cc890232d33bbb225392) - [@gizeasy](https://github.com/gizeasy)

--------------------

## v1.2.1 (23/05/2023)
Запускать локальный сервер разработки и сборку пакетов теперь можно и на ОС Windows.

---

- [chore: configure build for windows (#49)](https://github.com/consta-design-system/header/commit/d4f1147302d7a7123699c033bcf865b4d01db6c5) - [@gizeasy](https://github.com/gizeasy)
- [docs: edit stand group](https://github.com/consta-design-system/header/commit/029823a1f44c3cc3675629ccb0a3e00a4cb29696) - [@gizeasy](https://github.com/gizeasy)
- [chore(deps): bump decode-uri-component from 0.2.0 to 0.2.2 (#47)](https://github.com/consta-design-system/header/commit/25652a8f31eefa795b94aefa51274ba205aacc14) - [@dependabot[bot]](https://github.com/dependabot[bot])
- [chore(deps): bump loader-utils from 2.0.2 to 2.0.4 (#48)](https://github.com/consta-design-system/header/commit/def4092898293224daf2803ddd466e5fd2e95360) - [@dependabot[bot]](https://github.com/dependabot[bot])
- [chore: update @consta/stand](https://github.com/consta-design-system/header/commit/480d603f9262918ebf8bf8a15b6242500195598b) - [@gizeasy](https://github.com/gizeasy)
- [docs(header): add aliases (#46)](https://github.com/consta-design-system/header/commit/f693d36a77108ff55eb3a702c57a2ad7608083f8) - [@N1MBER](https://github.com/N1MBER)
- [chore(deps-dev): bump webpack from 5.75.0 to 5.76.0 (#45)](https://github.com/consta-design-system/header/commit/eac517ceac97e88b62cc7db1b74c14ff8b072e45) - [@dependabot[bot]](https://github.com/dependabot[bot])
- [docs(sandbox): add links to sandbox for new components (#42)](https://github.com/consta-design-system/header/commit/50836b1c63c09a38c23436770cb86199bb8e9908) - [@N1MBER](https://github.com/N1MBER)
- [docs(megamenu): add link to sandbox (#41)](https://github.com/consta-design-system/header/commit/d6cfd75d17cb660ddd63b6399b836bbb5e3d74c5) - [@N1MBER](https://github.com/N1MBER)

--------------------

## v1.2.0 (25/01/2023)
- Добавлен компонент MegaMenu, для организации меню с большим количеством пунктов.

---

- [chore(deps): update @consta/stand](https://github.com/consta-design-system/header/commit/b9a50961de3058333e0908432a87fed0f2468b12) - [@gizeasy](https://github.com/gizeasy)
- [feat(megamenu): add new compoenent (#38)](https://github.com/consta-design-system/header/commit/cab07dfda2f9a4735355991715c047628aaaefdb) - [@N1MBER](https://github.com/N1MBER)

--------------------

## v1.0.1 (16/11/2022)
Самое важное:
- Исправлена проблема исчезновения `Menu` при встраивании его в `Layout`
- Доработана документация

---

- [fix(layout): fix grid of layout and add prop width for menu (#37)](https://github.com/consta-design-system/header/commit/6955ae899a0172c60f44a37ecca3b7a9690aed25) - [@N1MBER](https://github.com/N1MBER)
- [docs(portal): readme links, version, stand (#36)](https://github.com/consta-design-system/header/commit/8bee0096ebb3081172731133697497687a491b0a) - [@arhayka](https://github.com/arhayka)
- [docs: links, menu, readme, start (#35)](https://github.com/consta-design-system/header/commit/96f32b17b1f9310c06dc9692723b62ecfc92557a) - [@arhayka](https://github.com/arhayka)
- [chore(deps): update @consta/stand](https://github.com/consta-design-system/header/commit/d9ca8c347a9fa8a260babecb0016573b450e6ca9) - [@gizeasy](https://github.com/gizeasy)

--------------------

## v1.0.0 (29/09/2022)
Самое важное:
Выкладываем новый стенд и сборщик.

Добавили песочницу: теперь в ней можно смотреть примеры компонентов.

⚠️ Внимание: эта версия библиотеки работает только вместе с `@consta/uikit` версии `v4.0.1` или выше


---

- [chore(stand): new stand and new builder (#26)](https://github.com/consta-design-system/header/commit/3f83319f79a9cbf4782534a763afa5cc0b7ba667) - [@gizeasy](https://github.com/gizeasy)
- [chore(stand): add automation publish stand](https://github.com/consta-design-system/header/commit/98bce4374d13e09fa7ca1da99134c0d53c45e28f) - [@gizeasy](https://github.com/gizeasy)
- [docs(examples): fix component import in  examples (#25)](https://github.com/consta-design-system/header/commit/7f458b32a23b5e449cfe01b3ebbffcf0207e3218) - [@arhayka](https://github.com/arhayka)
- [docs(Header): add adaptive section (#24)](https://github.com/consta-design-system/header/commit/e82391775098040cba79aad8eeb770b568d5f323) - [@arhayka](https://github.com/arhayka)

--------------------

## v0.4.4 (11/05/2022)
Самое важное:
- Обновили версию `@consta/uikit`
- Добавили возможность указания подменю для хлебных крошек в `Header`
---


- [Update uikit version and add getters for breadcrumbs](https://github.com/consta-design-system/header/commit/c6a38da18c5c1e3d9856701504219680eaa0d7d6) - [@N1MBER](https://github.com/N1MBER)

--------------------

## v0.4.3 (28/04/2022)
- [docs(global): remove gpn (#22)](https://github.com/consta-design-system/header/commit/5ad703cfdce1f92fe278a5969fb9f07f2f0b3029) - [@arhayka](https://github.com/arhayka)
- [chore(deploy): update config](https://github.com/consta-design-system/header/commit/f8cdd9602540f256582c82ef5243350a9cc4050b) - [@gizeasy](https://github.com/gizeasy)

--------------------

## v0.4.2 (19/04/2022)
- [docs(global): replace url (#21)](https://github.com/consta-design-system/header/commit/cd1dad8fd8c364515ce8cc316b5606ab671abd00) - [@arhayka](https://github.com/arhayka)
- [chore(deps): update deps](https://github.com/consta-design-system/header/commit/3ac0e73b9e806d7f44ca29c6163fe6658ec1135e) - [@gizeasy](https://github.com/gizeasy)
- [docs(Header): add ThemeToggler to Header doc (#20)](https://github.com/consta-design-system/header/commit/97a943d098b9e6dc9b3cb7f8732939069f01ff2e) - [@arhayka](https://github.com/arhayka)
- [chore(tsconfig.json): exclude node_modules (#19)](https://github.com/consta-design-system/header/commit/35c4c06c2da4cf830bf22728a1c8a9dbf6b730a7) - [@gizeasy](https://github.com/gizeasy)

--------------------

## v0.4.1 (08/04/2022)
- [fix(Menu): fix active item (#18)](https://github.com/consta-design-system/header/commit/201b6764f8bc9308d475e2b0aa73b0a052da500e) - [@gizeasy](https://github.com/gizeasy)
- [docs(common): change links to vercel (#17)](https://github.com/consta-design-system/header/commit/bc807231aa619515b4ece9e985c1be48e677a7f2) - [@arhayka](https://github.com/arhayka)
- [chore(deploy): edit public path (#16)](https://github.com/consta-design-system/header/commit/d6ecb74163a70e3f12716f2f3ea4fdaa83985e74) - [@gizeasy](https://github.com/gizeasy)
- [chore(deploy): conditional comment on a pull request (#15)](https://github.com/consta-design-system/header/commit/d16e287d8db457909810d8467a7353d920bac595) - [@gizeasy](https://github.com/gizeasy)
- [chore(deploy): add deploy (#14)](https://github.com/consta-design-system/header/commit/1b363fa4a6d4a7659211098574d063bc1338e8ed) - [@gizeasy](https://github.com/gizeasy)

--------------------

## v0.4.0 (30/03/2022)
Самое важное:
- Добавили переключатель темы `ThemeToggler`
- Обновили документацию

---

- [feat(themeToggler): added themeToggler (#13)](https://github.com/consta-design-system/header/commit/05a376e9ba700b666c2afb0b4c29613996092c96) - [@gizeasy](https://github.com/gizeasy)
- [docs(storybook): sort components (#12)](https://github.com/consta-design-system/header/commit/15525da0177ea2796e7a4367c07c4f2b431ed8ab) - [@gizeasy](https://github.com/gizeasy)
- [docs: edit readme, ButtonMenu, SelectMenu docs (#10)](https://github.com/consta-design-system/header/commit/ef894c41ff0e50d4019359229fb3041b45adf9df) - [@arhayka](https://github.com/arhayka)
- [feat(Header): change icons (#11)](https://github.com/consta-design-system/header/commit/7178b8d6dee0d678c60f3d97d609f4232cbafcec) - [@N1MBER](https://github.com/N1MBER)
- [fix(favicon): fix favicon (#9)](https://github.com/consta-design-system/header/commit/ad797c46ad8560891c29759dbcbdbf80a7a696e1) - [@N1MBER](https://github.com/N1MBER)
- [docs(package.json): remove engines](https://github.com/consta-design-system/header/commit/efe9534ce77ea62696ff30a3baeb3dc02660b1e9) - [@gizeasy](https://github.com/gizeasy)
- [docs(components): add docs (#6)](https://github.com/consta-design-system/header/commit/75d8e42b7112b1ed34ec2e4a4b5df60d24ba6df8) - [@gizeasy](https://github.com/gizeasy)

--------------------

## v0.3.3 (05/03/2022)
- [fix(Header): some small fixes](https://github.com/consta-design-system/header/commit/9085dd908bcaf94ff864715447112f25ad267392) - [@gizeasy](https://github.com/gizeasy)

--------------------

## v0.3.2 (03/03/2022)
- [fix(Popovers): fixed position popovers](https://github.com/consta-design-system/header/commit/16a9887f82e5882d335896618a4bb03549557bbf) - [@gizeasy](https://github.com/gizeasy)

--------------------

## v0.3.1 (03/03/2022)
- [fix(global): fixed exports types](https://github.com/consta-design-system/header/commit/700e944bbb2d485cbece8d5d644f7b61976bb904) - [@gizeasy](https://github.com/gizeasy)

--------------------

## v0.3.0 (02/03/2022)
- [feat(Header): added some components to the top line](https://github.com/consta-design-system/header/commit/ac5ec0184a0ddba1001fa4051ba016951caa6cbe) - [@gizeasy](https://github.com/gizeasy)
- [feat(HeaderSearch): added search to header (#5)](https://github.com/consta-design-system/header/commit/a61102eb9fe47f2f9a02fc87e4e8bf525d80a172) - [@gizeasy](https://github.com/gizeasy)
- [refactor(global): refactoring due to update uikit (#4)](https://github.com/consta-design-system/header/commit/91090d6f1b55fa314e464b55ccf11014589e440f) - [@gizeasy](https://github.com/gizeasy)
- [docs(useHideElementsInLine): add docs](https://github.com/consta-design-system/header/commit/ddcb3193e704a6a16e21e271e38e59743e2b3576) - [@gizeasy](https://github.com/gizeasy)

--------------------

## v0.2.0 (09/02/2022)
Самое важное:
- Добавлены хлебные крошки

---

- [feat(Breadcrumbs): add breadcrumbs (#3)](https://github.com/consta-design-system/header/commit/403821e7cd06d8290340d3b0339345600788c6c2) - [@gizeasy](https://github.com/gizeasy)
- [feat(Header): added modifier `_fixed`](https://github.com/consta-design-system/header/commit/51d45d15a4724cdee6de38f3f9960338e6f5d91d) - [@gizeasy](https://github.com/gizeasy)

--------------------

## v0.1.0 (27/01/2022)
Та-да-да дам: готов новый `Header` (кажется, его многие ждут, а некоторые уже используют). 

Чем он отличается от старого:

Это отдельная библиотека — точно не перепутаете.

Внутри несколько компонентов: 
- четыре меню: вертикальное, горизонтальное, мобильное (с гамбургером) и меню-плитка,
- уведомления с кучей настроек,
- ряд бейджиков, который красиво сворачивается, если не поместился.

Компоненты можно использовать отдельно, но мы предполагаем, что все они будут собираться в шапку.

Два варианта использования:
- `Header` — готовая шапка с жесткой структурой, 
- `Layout` — гибкий каркас, который можно настроить как удобно.

Всё работает, можно пользоваться! Но это не конец: ещё будем дорабатывать и добавлять компоненты.

---

- [chore(package.json): remove script deps](https://github.com/consta-design-system/header/commit/acbf9014f52d95c236057e7c1a5d647a1589ad73) - [@gizeasy](https://github.com/gizeasy)
- [feat(Header): normalization zIndex (#2)](https://github.com/consta-design-system/header/commit/46579963b718b13957958cff989522178dc9f243) - [@gizeasy](https://github.com/gizeasy)
- [docs(Header): write docs (#1)](https://github.com/consta-design-system/header/commit/9bb2d2ee0e9af4c9b82b3c1ac0a259084ced7fa0) - [@arhayka](https://github.com/arhayka)
- [chore(workflows): add telegramBot](https://github.com/consta-design-system/header/commit/5d7c41deebec20bfcfca7768740481536aeeb2f6) - [@gizeasy](https://github.com/gizeasy)
- [docs(Storybook): add logo](https://github.com/consta-design-system/header/commit/40e7cd799e8b826d382a5b838501f99075a046e4) - [@gizeasy](https://github.com/gizeasy)
- [feat(Layout): add props table](https://github.com/consta-design-system/header/commit/62e6378d28240bf222dd48f7dbd24881972ac068) - [@gizeasy](https://github.com/gizeasy)
- [feat(Header): add Header](https://github.com/consta-design-system/header/commit/f18a0bcc9e7c39afe4953dc582d6d935a236c578) - [@gizeasy](https://github.com/gizeasy)
- [feat(components): add components](https://github.com/consta-design-system/header/commit/0068befcdac4f5cb9db13a33a662af81357004cb) - [@gizeasy](https://github.com/gizeasy)
