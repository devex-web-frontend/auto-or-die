#Автоматизация или смерть!

CSS-препроцессоры и минификация JS у всех давно на слуху, но это не единственные рутинные задачи, с которыми приходится сталкиваться. Управление зависимостями, сборка статического прототипа и даже старт нового проекта — всё это можно и нужно автоматизировать.

Про инструменты для автоматизации — такие как Stylus, Assemble, Grunt, Karma и Bower — сказано уже много. Но основной упор мы хотим сделать не на их описании, а на том, как увязать весь этот стек в мощное средство борьбы с рутиной, как подстроить их под свой процесс.

Мы расскажем, как мы используем инструменты в разработке финансовых приложений, зачем мы создаём статические прототипы, и как выполняем вайтлейблинг. А также поделимся опытом: с какими трудностями мы столкнулись, и как мы их решали (плагины, практики).

* Почему и как мы пришли к статическим прототипам. Плюсы и минусы этого подхода. Подробно осветим незаслуженно обделённый вниманием генератор статических сайтов Assemble. Как он нам помогает, и как мы обходим его слабые стороны. 
* Почему надо использовать препроцессоры CSS, и почему надо стараться выжимать из них максимум. На примере Stylus. 
* Как скафолдеры помогают сосредоточиться на ревью кода, а не на ревью соблюдения договорённостей. На примере Yo. 
* Автоматическое тестирование: юнит и функциональное. Что тестировать разработчикам, а что оставить QA. Почему нам хватает ng-scenario, и почему мы (пока?) не стремимся переходить на protractor. На примере Karma + Jasmine + ng-scenario. 
* Менеджеры пакетов: не только для опен-сорс библиотек, но и для своих модулей. На примере Bower. 
* Управление всем зоопарком: контракты на таски для CI, свои плагины и утилиты, скрипты. На примере NPM и Grunt. 

Разработчикам не стоит бояться автоматизировать рутину, а менеджерам — выделять на это ресурсы. Инструменты автоматизации можно и нужно использовать на полную: делать форки, писать плагины и т.д.
