# Урока 9 - EventLoop и Promise

В этом уроке мы разберем:
- Асинхронность в JS
- Promise
- fetch()
- async/await
  
Так что, перед тем как выполнить домашнее задание, посмотрите видео:

![youtube](https://youtu.be/M2mHhxe06sc)

После каждого видео есть домашнее задание

# HomeWork #9

API имеет несколько запросов, они потребуются тебе для домашей работы.

## #1

Чтобы получить всех 23 персонажей, используй это url

```bash
https://reactmarathon-api.herokuapp.com/api/mk/players
```

Это **GET** запрос.

## #2

Для получения случайного пользователя от компьютера используй запрос

```bash
https://reactmarathon-api.herokuapp.com/api/mk/player/choose
```

Это **GET** запрос.

## #3

Для того что бы совершать бои вам нужно использовать *method* **POST**

Для запроса используйте ссылку

```bash
http://reactmarathon-api.herokuapp.com/api/mk/player/fight
```

Ваш `fetch` будет выглядеть следующим образом.

```js
fetch('http://reactmarathon-api.herokuapp.com/api/mk/player/fight', {
    method: 'POST',
    body: JSON.stringify({
        hit,
        defence,
    })
});
```

В метод `JSON.stringify` вы должны передать объект с двумя полями, *hit* и *defence*

Это куда ваш игрок собирается ударить, и что он будет защищать.

В ответ вы получите объект такого типа:

```json
{
    player1: {value: 20, hit: 'foot', defence: 'head'},
    player2: {value: 19, hit: 'foot', defence: 'body'}
}
```

Где *player1* сколько нанес урона, что защищает и бьет. Тоже самое и для player2.

### Дополнение к игре...

Вам всем очень не терпелось написать выбор игрока не самостоятельно, а чтобы компьютер выбирал его сам.

Специально для вас я подготовил файлики.

[SelectPlayer.zip](https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/course%2Fjsmarathon-mortal-kombat%2F9%2FSelectPlayer.zip?alt=media&token=616315fd-e4ce-4273-b75d-9bc810e3a273)

В этом файле вы найдете приветственную страницу.

Которая забирает игроков с сервера и располагает на поле боя.

Так же реализован методы смены игроков. И выбор одного.

Почитайте в файлике `index.js` мои комментарии которые помогут вам реализовать переход с одной странице на другую.

И как мы при помощи *localStorage* записываем игрока, что бы на другой странице его отобразить.

Надеюсь вы разберетесь)

Не забудьте после того как игра закончилась по кнопке reload возвращать на выбор игрока.

Ну а на этом все.

До встречи очень скоро...
