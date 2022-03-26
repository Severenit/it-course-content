# Урока 5 - Циклы и работа с формы из JS

В этом уроке мы разберем:
- Цикл for
- Работа с формой

Так что, перед тем как выполнить домашнее задание, посмотрите видео:

![youtube](https://youtu.be/vH77O_1LDtc)

После каждого видео есть домашнее задание

# HomeWork #5

Мы подобрались к середине марафона.

Так как среда — это маленькая пятница, задание не очень сложное, но очень интересное.

### Step #1

Тебе потребуется заменить существующий div.control на форму ниже

```html
<form class="control">
  <div class="inputWrap">
      <h2>HIT</h2>
      <div class="ul">
          <input type="radio" name="hit" value="head" id="headHit" required>
          <label for="headHit">
              <span>HEAD</span>
          </label>
          <input type="radio" name="hit" value="body" id="bodyHit" required>
          <label for="bodyHit">
              <span>BODY</span>
          </label>
          <input type="radio" name="hit" value="foot" id="footHit" required>
          <label for="footHit">
              <span>FOOT</span>
          </label>
      </div>
  </div>
  <div class="inputWrap">
      <h2>defence</h2>
      <div class="ul">
          <input type="radio" name="defence" value="head" id="headDefence" required>
          <label for="headDefence">
              <span>HEAD</span>
          </label>
          <input type="radio" name="defence" value="body" id="bodyDefence" required>
          <label for="bodyDefence">
              <span>BODY</span>
          </label>
          <input type="radio" name="defence" value="foot" id="footDefence" required>
          <label for="footDefence">
              <span>FOOT</span>
          </label>
      </div>
  </div>
  <div class="buttonWrap">
      <button class="button" type="submit">
          Fight
      </button>
  </div>
</form>
```

Также обновить файлик со стилями

[style.css](https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/course%2Fjsmarathon-mortal-kombat%2F5%2Fstyle.css?alt=media&token=82fb3f4c-42ad-43db-8778-a422f7792806)

### Step #2

Добавить нашу форму в **main.js** привычным методом через *querySelector*

И добавить новый **listener** на событие *submit,* не забудь про event.preventDefault();

### Step #3

Заводим две новые переменные:

```js
const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}
const ATTACK = ['head', 'body', 'foot'];
```

### Step #4

Создаем новую функцию `enemyAttack()`

Эта функция должна выбирать один из трех элементов из переменной ATTACK, которая рандомным способом при помощи функции `getRandom()` выбирает, куда мы будем бить, это записываем в переменную **hit**, и что будем защищать, это записываем в переменную **defence**.

Из функции надо вернуть объект с тремя полями, *value* (рандомно выбираем число жизней, на которое нанесем урон, используем для этого объект HIT), *hit* и *defence*

### Step #5

В *callback* функции проходимся методом **for...of,** проходимся radio и отбираем те которые выбраны.

Наши radio button двух видов — *hit* и *defence*.

Записываем в соответсвующие поля, чтобы структура была похожа на объект возвращаемый из функции `enemyAttack()`

## Task #1

Кроме того что повторишь код в уроке, тебе следует дописать **submit**

Перенеси логику из бывшей кнопки *Random* в наш новый обработчик событий, проверь, кто из игроков не попал в защиту, и сделай соответсвующие действия.

Не забывай про финальный вывод сообщения, кто победил, и конечно же, кнопки **Restart**.

Подумай, какую часть кода можно вынести в какие-либо дополнительные функции, чтобы не повторяться.

Ну а на этом все.

До встречи очень скоро...
