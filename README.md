## Описание проекта
Приложение визуализирует движения маятника согласно законам физики.

Параметры среды по-умолчанию:
- Сила притяжения Земли
- Вакуум

Возможности изменения параметров:
- длины подвеса маятника
- веса груза
- силы притяжения
- первоначальнго импульса

Для расчета угла отклонения маятника использовалась формула:

![Формула угла отклонения маятника](https://wikimedia.org/api/rest_v1/media/math/render/svg/9cfa0295a286da0e762dc9e89f7abd7e04b4882f)

![Собственная частота колебания](https://wikimedia.org/api/rest_v1/media/math/render/svg/6cd3936ad9aa839b8de3bfc84267836fe5241e08)

где:
- А - амплитуда колебания маятника
- g - ускорение свободного падения
- L - длина маятника
- t - момент времени
- &alpha; - начальная фаза калебания (в проекте равна 0)

##Запуск проекта

В дирректории с проектом выполнить команду

`npm start`

NPM выполнит загрузку всех неибходимых пакетов и запустит приложение на локальном хосте на порту `3000`
в режиме разрабоки.

Другие команды:
- `npm run dev` - запуск проекта без загрузки зависимостей
- `npm run build` - сборка проекта (артефакты сборки помещаются в папку `build`)
- `npm run test` - запуск тестов

