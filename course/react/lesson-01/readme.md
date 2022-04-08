# Урок №1: Введение в React

Ну вот мы и начинаем обучение в мире React.

Для начала посмотри видео по очереди, не пропускай ни одно видео, все они принесут тебе пользу:

## 01.00 - Что такое React

![vimeo](https://vimeo.com/503921009)


## 01.01 - Create React App

![vimeo](https://vimeo.com/696629547)


## 01.02 - Структура и первые изменения CRA

![vimeo](https://vimeo.com/696878730)


## 01.03 - Папка public

![vimeo](https://vimeo.com/696935219)


## 01.04 - Папка src

![vimeo](https://vimeo.com/696935267)


## 01.05 - React Element

![vimeo](https://vimeo.com/696957701)


## 01.06 - React Component

![vimeo](https://vimeo.com/696994354)


## 01.07 - Вложенные компоненты

![vimeo](https://vimeo.com/696994422)


## 01.08 - Ограничения в JSX

![vimeo](https://vimeo.com/696994477)


## 01.09 - Стили в React приложении

![vimeo](https://vimeo.com/697056011)

# Homework #1

Для начала нам надо с вами научиться создавать React компоненты.

Поэтому начнем с простых компонентов, вся наша работа будет происходить в папке **src**

Но перед тем как начать добавьте в `index.css` в начало документа, код ниже:

```css
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
```

> Не забывайте про то что мы обсуждали в уроке. Постарайтесь по максимум применить знания полученные в видео-материале.
> Советую сразу использовать CSS module. Не менять на модульный css файл index.css

## №1 Компонент <Header />

Создайте простой функциональный компонент `<Header />`

Расположите компонент по пути `src/components/Header/index.js`.

Для верстки компонента нам потребуется код ниже:

```html
<header class="root">
  <div class="header">
    <div class="container">
      <div class="logo"></div>
      <ul class="nav">
        <li><a href="#">Menu 1</a></li>
        <li><a href="#">Menu 2</a></li>
        <li><a href="#">Menu 3</a></li>
        <li><a href="#">Menu 4</a></li>
      </ul>
    </div>
  </div>
</header>
```

Ну и конечно, не забывайте про стили

```css
.root {
    height: 80px;
}

.header {
    height: 80px;
    width: 100%;
    transition: height 0.2s linear, box-shadow 0.2s linear;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    background: rgba(245, 245, 245, 0.97);
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    position: relative;
    margin: 0 50px;
    color: #444;
    max-width: 1180px;
    width: 100%;
    overflow: hidden;
}

.header.small {
    line-height: 50px;
    box-shadow: 0px 1px 3px 0px rgba(50, 50, 50, 0.8);
}

.header.small > .container > .logo {
    height: 40px;
}

.logo {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: red;
    float: left;
    height: 40px;
    width: 170px;
    margin-left: 5px;
}

.nav {
    float: right;
    list-style: none;
    margin: 0;
    padding: 0;
}

.nav li {
    float: left;
    position: relative;
}

.nav li a {
    transition: color 0.2s linear;
    font-size: 18px;
}

.nav li:hover a {
    color: red;
}

.nav li a {
    padding: 21px;
    color: initial;
    text-decoration: initial;
}

@media (max-width: 1024px) {
    .container {
        margin: 0 25px;
    }
}

@media (max-width: 768px) {
    .container {
        margin: 0 14px;
    }
}

@media (max-width: 560px) {
    .container {
        margin: 0 8px;
    }
}
```
## №2 Компонент <Slider />

Создайте простой функциональный компонент `<Slider />`

Расположите компонент по пути `src/components/Slider/index.js`.

Для верстки компонента нам потребуется код ниже:

```html
<section class="section">
  <div class="slider">
    <div class="container sliderContent">
      <h1 class="header">Wow</h1>
      <h2 class="subheader">Wow.Wow.Wow</h2>
      <div class="call">
        <button class="button">Wow</button>
      </div>
    </div>
  </div>
</section>
```

Ну и конечно, не забывайте про стили

```css
.section {
    width: 100%;
}

.slider {
    background: #333;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    position: relative;
    margin: 0 50px;
    color: #444;
    max-width: 1180px;
    width: 100%;
    overflow: hidden;
}

.sliderContent {
    padding: 64px 0 64px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.header {
    color: #fff;
    font-size: 54px;
    margin-bottom: 48px;
}

.header::after {
    content: "";
    display: block;
    width: 30%;
    position: relative;
    border-bottom: 1px solid #aaa;
    text-align: center;
    margin: 15px auto 0;
}

.subheader {
    color: #fff;
    font-size: 30px;
    margin-bottom: 60px;
}

.call {
    color: white;
    display: block;
    margin-bottom: 20px;
}

.button {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    background-color: transparent;
    color: #ffffff;
    border: 1px solid white;
    padding: 8px 13px;
    font-size: 20px;
    transition: background 0.15s linear;
}

.button:hover {
    background: rgba(255, 255, 255, 0.1);
    cursor: pointer;
}

@media (max-width: 1024px) {
    .container {
        margin: 0 25px;
    }
}

@media (max-width: 768px) {
    .container {
        margin: 0 14px;
    }
}

@media (max-width: 560px) {
    .container {
        margin: 0 8px;
    }
}
```

## №3 Компонент <Footer />

Создайте простой функциональный компонент `<Footer />`

Расположите компонент по пути `src/components/Footer/index.js`.

Для верстки компонента нам потребуется код ниже:

```html
<footer class="root">
  <div class="container">
    <div class="footerWrap">
      Coded with
      <span class="heart"></span>
      by You
    </div>
  </div>
</footer>
```

Ну и конечно, не забывайте про стили

```css
.root {
    width: 100%;
    height: 80px;
    background-color: #233140;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    position: relative;
    margin: 0 50px;
    color: #444;
    max-width: 1180px;
    width: 100%;
    overflow: hidden;
}

.footerWrap {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
}

.heart {
    display: inline-block;
    margin: 0 15px;
}

.heart:after {
    content: "❤️";
    display: inline-block;
    font-size: 24px;
    color: red;
    animation: spin 2s infinite linear
}

@media (max-width: 1024px) {
    .container {
        margin: 0 25px;
    }
}

@media (max-width: 768px) {
    .container {
        margin: 0 14px;
    }
}

@media (max-width: 560px) {
    .container {
        margin: 0 8px;
    }
}

@keyframes spin {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg)
    }

    100% {
        -webkit-transform: rotate(359deg);
        transform: rotate(359deg)
    }
}
```

## №4 Задание со звездочкой

В компоненте `<Header />` у нас есть меню. Вынесите список меню в отдельный массив.
Который надо объявить выше, перед компонентом, но после всех импортов.

```js
const MENU = ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4'];
```

После чего отобразите меню в самом компоненте через метод `.map()` нарисовав каждый элемент массива в отедельно `li` и `a`

## Итог

В самом компоненте `<App />` удалите все что не связано с нашим приложением и расположите все три компонента друг под другом.

```jsx
<Header />
<Slider />
<Footer />
```

> Помните, что все что мы прошли в уроках позволит вам с легкостью выполнить домашнюю работу.

Если все сделаете правильно, у вас должно получиться вот такой результат.

![result](https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/course%2Freact%2F01%2FScreenshot%202022-04-08%20at%202.01.56%20AM.png?alt=media&token=c67f623b-9cab-44aa-8db0-a59fcc5bb360)

Сданным домашним заданием считается PR (pull request), сданный в форму ниже ⬇️ 

Посмотрите видео:

### 01.10 - Как сдать домашнюю работу

![vimeo](https://vimeo.com/697311906)
