Bower.
========


### Внутренние зависимости

Если говорить о чистой и поддерживаемой верстке, то стоит упомянуть о том, что верстка одинаковых сущностей между проектами также должна быть одинаковой. И чтобы не заниматься веселой копипастой из проекта в проект, стоит выделять подобные вещи в отдельные переиспользуемые сущности (различные составляющие финансовых приложений).
Также в процессе работы появляется всякие внутрикорпаративные библиоткеи/виджеты/контролы которые качуют из проекта в проект.


### Внешние зависимости

Кроме внутрикорпоративных сущностей, мы также активно пользуемся внешними зависимостями в виде шимов иногда jquery, всякие дополнительный библиотечки. И в один прекрасный момент появилось дикое и необузданное желание всем этим управлять быстро и просто.

### Варианты
###### [распутье (svn-external, maven)] *показать плюсы минусы того или иного подхода*

Т.к. мы работаем в джависткой компании, у нас сразу была возможность использовать джава тулзы типа `maven`, но для FrontEnd разработчика казалось слишком много странных и непонятных манипуляций. Да и управлять сторонними front-end библиотеками через него получилось бы не очень.

Ну, или у нас был второй путь, который мы, по началу, и выбрали:

### svn-external
В нашей компании в качестве системы контроля версий используется SVN, и когда у нас впервые появилась необходимость переиспользовать различные модули между проектами, мы  решили использовать svn-external. Свою задачу такой подход успешно решал, но несколько моментов огорчали:
* возможность прокоммитится в таг
* ЛИБО неудобный способ подключения новых зависимостей (нужно указать путь до тага + вытащить номер ривизии)
* совсем грустное управление сторонними библиотеками
 
После того как появилась необходимость более активно использовать сторонние зависимости, svn-external перестал хорошо справляться со своей задачей. И мы решили, что нам нужен не костыль, а нормальный инструмент. К счастью, ребята из твиттера уже успели сделать nodejs-инструмент для управления клиентскими зависимостями - `bower`.
 
### Bower

`Bower` - пакетный менеджер для web-ресурсов, написанный под node.js

### Три преимущества `bower`

#### Зависимостью может быть что угодно
Мы в разработке выделяем dev-зависимости и prod-зависимости.
dev-завимсимости это полустатические вещи.
prod-зависимости код который идет в продкшен, как правило это различный js код (внешний и внутренний)

В качестве dev-зависимостей мы переиспользуем:
* сторонние js-библиотеки
* внутриненние js-библиотеки
* параметризующиеся styl-файлы для контролов
* переиспользуемые кусочки верстки (partials)
* переиспользуемые хелперы для верстки

Мы также переиспользуем и данные для статических прототипов, а иногда и целые проекты.

#### Зависимость можно вытащить, откуда угодно
* `bower-registry` – огромный регистр, в котором есть все популярные библиотеки
* git репозиторий (таг/ветка) вплоть до коммита
* прямая ссылка на файл
* прямая ссылка на архив


Однако, сначала из коробки не было поддержки SVN-репозиториев. Это нас сперва сильно расстроило, но за один день удалось набросать свой простенький SVN-resolver, который поддерживал необходимый нам на тот момент функционал. А именно просто export нужного нам (жестко заданного) тага. Довести до полноценного резолвера (согласно `srmver`) руки, к сожалению, так и не дошли. Но все более-менее активные проекты отлично существовали на нашем форке месяца четыре, пока не зарилизили `bower` c поддержкой SVN.

#### Разрешение зависимостей по `semver`

Указав, один раз, при разработке модуля все его зависимости вам не нужно каждый раз возвращаться и вспоминать "чтоже нужно для его работы". `Bower` сам рекурсивно выкачает все необходимые зависимости. Правильно указав зависимости можно даже долго не спотыкаться на проблемы со стабильностью, но лучше нанести упреждающий удар.


*******************
### Не все так гладко
Не смотря на то что бовер и без того снял много головной боли, осталось еще пара не решенных проблем:

1. подключение javascript на страницу согласно bower дереву зависимостей
2. подключение кастомизируемых js библиотек (таких как `modrnizr`, `jqery 2`)