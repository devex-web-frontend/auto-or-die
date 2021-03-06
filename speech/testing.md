Тестирование
=============

Говоря о переиспользовании, нужно упомянуть и о тестировании.

Все, что вы переиспользуете, нужно тестировать в обязательном порядке. Мы стараемся тестировать все. И различные полустатические dev-зависимости и конечный клиентский код, который пойдет в production.


С тестированием простых полустатических front-end ресурсов (partials, helpers, функции и миксины для Stylus) все довльно просто. Запихиваем все файлики в перпроцессор (stylus, assemble или Handlebars.compile) и сравниваем получившийся результат с ожидаемым.

### Unit-тестирование

Тестировать клиентский код можно давно, есть огромное количество фреймворков для тестирования JS-кода. Однако, к стандартному оверходу `TDD` подхода добавляются все прелести клиентской разработки. Итак, если по шагам:

1. Нужно завести spec-файл (например, HTML-документ)
2. Регистрировать в нем все файлы тестов
3. Открыть spec–файл во всех целевых браузерах
4. И на каждое изменение кода рефрешить все свои браузеры
 
### Такой TDD нам не нужен
В общем, неудивительно, что фронтенд-разработчики очень нехотя тестируют свой код. За всеми этими танцами с бубнами вокруг тестов очень легко сбиться с мысли и забыть, что ты вообще хотел написать.
В общем, тестированию клиентских ресурсов нужен свой супергерой.

### Karma

Для нас таким супергероем стал test-runner `Karma`. 

### Быстрый фидбек
Самая главная идея, которую заложили в этот проект ребята из гугла, заключается в том, что тесты должны давать моментальный фидбек и не требовать постоянной пляски с подключением файлов и рефрешем браузеров.

### Важные моменты

`Karma` – это просто test-runner, который работает под `nodejs`. Он никак не ограничивает вас в выборе тестового фреймворка или используемых технологиях. Главное – ТЕСТИРУЙ и будь продуктивней.


Достаточно выполнить простейшую настройку тестового окружения, и `Karma` сама будет запускать все необходимые ВАМ браузеры, подключать ВАШ любимый тестовый фреймворк, следить за изменением в ВАШИХ файлах (исходниках и тестов), перезапускать тесты во всех открытых браузерах и сообщать ВАМ в удобной для ВАС форме результаты.

Вроде весь головняк сняли, кроме одного: тестирование пользовательского взаимодействия или end2end тесты.
Разработка кода, который активно взаимодействует с пользователем, превращается в ад. На каждое изменение приходится прокликивать контрольчик снова и снова, чтобы убедится, что ничего не сломалось

Пользовательские события – это такое же API, просто его неудобно тестировать. Привлекать для этого селениум тоже было как-то стремновато. Но нам на помощь пришел NG-Scenario. На самом деле ng-scenario – это модуль ангуляра, который ребята разработали для тестирования приложений, написанных на angularjs.

Нам вполне хватает `ng-scenario`, который
* очень просто и легко позволяет писать простейшие сценарии пользовательского взаимодействия.
* Имеет строгий DSL, который не дает скатится в unit-тестирование e2e-инструментами
* Имеет довольно просто механизм расширения DSL (но нужно пользоваться с осторожностью)


Поначалу очень сложно отказаться от прокликивания своих контролов и довериться бездушной машине. Однако, спустя пару дней `TDD` разработки перестаешь скучать по всем раздражающим операциям, начинаешь более тестируемо писать код, грамотней разбивая его на функциональные составляющие.
Можно с уверенностью утверждать, что тестировать клиентский код сейчас можно с чистой совестью, не переживая за слишком большой оверхед, связанный с поддержанием тестового окружения.


Давайте поговорим, [как нам жить со всем этим зоопарком](tools.md).
