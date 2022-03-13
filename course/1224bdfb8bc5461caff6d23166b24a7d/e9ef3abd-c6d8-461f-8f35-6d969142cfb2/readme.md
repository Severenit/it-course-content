
### **Привет, мир!**

В этой части учебника мы изучаем собственно JavaScript, сам язык.

Но нам нужна рабочая среда для запуска наших скриптов, и, поскольку это онлайн-книга, то браузер будет хорошим выбором. В этой главе мы сократим количество специфичных для браузера команд (например, `alert`) до минимума, чтобы вы не тратили на них время, если планируете сосредоточиться на другой среде (например, Node.js). А на использовании JavaScript в браузере мы сосредоточимся в [следующей части](https://learn.javascript.ru/ui) учебника.

Итак, сначала давайте посмотрим, как выполнить скрипт на странице. Для серверных сред (например, Node.js), вы можете выполнить скрипт с помощью команды типа `"node my.js"`. Для браузера всё немного иначе.

# [Тег «script»](https://learn.javascript.ru/hello-world#teg-script)

Программы на JavaScript могут быть вставлены в любое место HTML-документа с помощью тега `<script>`.

Для примера:

`<!DOCTYPE HTML><html><body><p>Перед скриптом...</p>`  _`<script>
    alert( 'Привет, мир!' );
  </script>`_`<p>...После скрипта.</p></body></html>`

Вы можете запустить пример, нажав на кнопку «Play» в правом верхнем углу блока с кодом выше.

Тег `<script>` содержит JavaScript-код, который автоматически выполнится, когда браузер его обработает.

# [Современная разметка](https://learn.javascript.ru/hello-world#sovremennaya-razmetka)

Тег `<script>` имеет несколько атрибутов, которые редко используются, но всё ещё могут встретиться в старом коде:

**Атрибут** **`type`****:** **`<script`** <u>**`type`**</u>**`=…>`**Старый стандарт HTML, HTML4, требовал наличия этого атрибута в теге `<script>`. Обычно он имел значение `type="text/javascript"`. На текущий момент этого больше не требуется. Более того, в современном стандарте HTML смысл этого атрибута полностью изменился. Теперь он может использоваться для JavaScript-модулей. Но это тема не для начального уровня, и о ней мы поговорим в другой части учебника.**Атрибут** **`language`****:** **`<script`** <u>**`language`**</u>**`=…>`**Этот атрибут должен был задавать язык, на котором написан скрипт. Но так как JavaScript является языком по умолчанию, в этом атрибуте уже нет необходимости.**Обёртывание скрипта в HTML-комментарии.**В очень древних книгах и руководствах вы сможете найти комментарии внутри тега `<script>`, например, такие:

`<script type="text/javascript"><!--
    ...
//--></script>`
Этот комментарий скрывал код JavaScript в старых браузерах, которые не знали, как обрабатывать тег `<script>`. Поскольку все браузеры, выпущенные за последние 15 лет, не содержат данной проблемы, такие комментарии уже не нужны. Если они есть, то это признак, что перед нами очень древний код.

# [Внешние скрипты](https://learn.javascript.ru/hello-world#vneshnie-skripty)

Если у вас много JavaScript-кода, вы можете поместить его в отдельный файл.

Файл скрипта можно подключить к HTML с помощью атрибута `src`:

`<script src="/path/to/script.js"></script>`

Здесь `/path/to/script.js` – это абсолютный путь до скрипта от корня сайта. Также можно указать относительный путь от текущей страницы. Например, `src="script.js"` или `src="./script.js"` будет означать, что файл `"script.js"` находится в текущей папке.

Можно указать и полный URL-адрес. Например:

`<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js"></script>`

Для подключения нескольких скриптов используйте несколько тегов:

`<script src="/js/script1.js"></script><script src="/js/script2.js"></script>
…`