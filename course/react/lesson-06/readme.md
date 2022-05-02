# Урок №6: Погружаемся в React Router v6

Я рад вас приветствовать на прекрасной теме – роутинг. Наконец-то мы с вами начнем создавать не просто приложение, а
настоящий SPA. Несмотря на то, что мы познакомимся с вами с основами, и закрепим знания, нам еще предстоит много
интересного узнать в теме роутинга.

Ну а теперь посмотри видео по очереди, не пропускай ни одно видео, все они принесут тебе пользу:

## 06.01 - Разбор ДЗ часть 1

![vimeo](https://vimeo.com/704337773)

## 06.02 - Разбор ДЗ часть 2

![vimeo](https://vimeo.com/704337862)

## 06.03 - useMatch

![vimeo](https://vimeo.com/704338081)

## 06.04 - NavLink

![vimeo](https://vimeo.com/704338126)

## 06.05 - useNavigate go back

![vimeo](https://vimeo.com/704338219)

## 06.06 - replace history

![vimeo](https://vimeo.com/704338324)

## 06.07 - state history

![vimeo](https://vimeo.com/704338416)

## 06.08 - Страница 404

![vimeo](https://vimeo.com/704522880)

## 06.09 - <Navigate />

![vimeo](https://vimeo.com/704523484)

# Homework #6

По мимо того что вам надо сделать тоже что и в уроках. Вам нужно сделать две вещи.

## #1 ScrollTop

![HM6](https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/course%2Freact%2F06%2FHM6-2.gif?alt=media&token=b6baee33-6719-4686-add0-f383dca53a1f)

Посмотрите внимательно на видео выше. Вы увидите что при переключении между страниц наша страница всегда остается на том положении что мы были на предедущей. А надо всегда подниать страницу наверх.

В этом вам поможет `useEffect` который в зависимостях будет следить за изменениями в `location.pathname`

## #2 Создадим Anchor Link

![HM6-2](https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/course%2Freact%2F06%2FHM6.gif?alt=media&token=b1383de1-f3d2-46ef-894d-5d3ca7fb5838)

Посмотрите на видео выше и вы увидите что теперь мы должны создать рядом с заголовком иконку, нажимая на которую мы добавляем к нашему url якорную ссылку.

Теперь если мы скопируем ее и вставим в другую вкладку нас должно проскролить к ней.

Здесь вам может помочь метод у элемента `scrollIntoView`

```js
element.scrollIntoView({
    block: 'center',
    behavior: 'smooth'
});
```

Ну а так же вам может потребоваться эта иконка [SVG Icon](https://firebasestorage.googleapis.com/v0/b/it-course-84ddd.appspot.com/o/course%2Freact%2F06%2Flink_icon.svg?alt=media&token=5e6ab9c1-29b9-4e18-820c-f9c1eed07a14)

Не забывайте обращаться за помощью к своим товарищам, кураторам и гуглу...

Ну а на этом все, жду ваши PR, до встречи очень скоро...

Let's keep in touch!
