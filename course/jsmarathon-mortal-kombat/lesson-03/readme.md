# Урока 3 - Начинаем писать игру

В этом уроке мы разберем:
- Операторы сравнения
- Условные конструкции и операторы
- Логические операторы
- Метод Math

Так что, перед тем как выполнить домашнее задание, посмотрите видео:

![youtube](https://youtu.be/0dkzx0gT-GM)

После каждого видео есть домашнее задание

# HomeWork #3

Этот код нужно вставить в index.html внутрь дива с классом div.arenas

```html
<div class="control">
    <button class="button">
        Random
    </button>
</div>
```

Чтобы все корректно отображалось, файлик со стилями обнови на этот, целиком.

[style.css.zip](https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/course%2Fjsmarathon-mortal-kombat%2Fstyle.css.zip?alt=media&token=fa0b38af-c88e-425c-82c1-a50e9296dffb)

Ну а теперь само задание.

Пройдемся по коду и оптимизируем его.

## Task #0

Добавь в объекты поле player. У первого игрока это будет значение 1, у второго — 2.

Также свойству hp выставь значение 100.

## Task #1

В первой задачи отточим навык условных конструкций.

Если обратишь внимание, когда жизни игрока уходят в минус (-), то наш **style.width** перестает работать.
Задача сделать так, что если жизни становятся меньше или равные 0, то игроку нужно записать 0, а не минусовое значение.

<aside>
💡 Чтобы более подробно понять, о чем тут идет речь, попробуй в функции **changeHP,** когда вы изменяешь жизни игрока, поставить `console.log`, чтобы увидеть, какие данные с какими свойствами отображаются.

</aside>

## Task #2

Вычитать все время одно и тоже число не очень интересно, ведь тогда игра становится очень предсказуемой.
Твоя задача написать функцию рандомайзер, которая будет возвращать рандомное число от 1 до 20 и вычитать из жизни игрока это рандомное число.

Пусть удача подскажет, кто победит.

## Task #3 (*)

Задача со звездочкой.

Сейчас мы пишем кто проиграл, т.к. это проще всего узнать.
Попробуй вместо этого вывести, кто победил. (Scorpion wins например)
Согласись, лучше знать победителя, чем проигравшего!
Еще после того как кто-то выиграл, кнопку Random нужно отключить.
Для этого достаточно применить метод **disabled** у кнопки
`$randomButton.disabled = true`

Ну а на этом все.

До встречи очень скоро...
